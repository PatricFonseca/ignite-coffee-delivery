import {
	createContext,
	ImgHTMLAttributes,
	ReactNode,
	useEffect,
	useState,
} from "react";

type PaymentsType =
	| "Sem pagamento"
	| "Cartão de crédito"
	| "Cartão de débito"
	| "Dinheiro";

interface itemCart {
	name: string;
	id: string;
	quantity: number;
	imgSrc: string;
	price: number;
	types: string[];
	description: string;
}

type Address = {
	street: string;
	number: string;
	city: string;
	state: string;
	zip: string;
	neighborhood: string;
};

interface cartContextProps {
	cartItens: itemCart[];
	quantityDifferentItens: number;
	totalItems: number;
	total: number;
	address?: Address;
	paymentType: PaymentsType;
	removeItem: (id: string) => void;
	addCartItem: (itemcart: itemCart) => void;
	updateItem: (id: string, quantity: number) => void;
	checkout: (adress: Address, payment: PaymentsType) => void;
}

interface CartContextProviderProps {
	children: ReactNode;
}

const deliveryValue = 10;

export const CartContext = createContext({} as cartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
	const itemsStorage = localStorage.getItem("cartItens");
	const defaultCartItens = itemsStorage ? JSON.parse(itemsStorage) : [];

	const [cartItens, setCartItens] = useState<itemCart[]>(defaultCartItens);
	const [quantityDifferentItens, setQuantiyDifferentItens] = useState(0);
	const [totalItems, setTotalItems] = useState(0);
	const [total, setTotal] = useState(0);
	const [address, setAddress] = useState<Address>();
	const [paymentType, setPaymentType] = useState<PaymentsType>("Sem pagamento");

	useEffect(() => {
		const totalValues = cartItens.reduce<number>(
			(acc: number, elem: itemCart) => acc + elem.price * elem.quantity,
			0
		);
		setTotalItems(totalValues);

		setTotal(totalValues + deliveryValue);
		setQuantiyDifferentItens(cartItens.length || 0);

		localStorage.setItem("cartItens", JSON.stringify(cartItens));
	}, [cartItens, deliveryValue]);

	function updateItem(id: string, quantity: number) {
		const newCartItems = cartItens.map((item) => {
			if (item.id === id) {
				item.quantity = quantity;
				return item;
			} else {
				return item;
			}
		});

		setCartItens(newCartItems);
	}

	function removeItem(id: string) {
		const filteredItems = cartItens.filter((item) => item.id !== id);

		setCartItens(filteredItems);
	}

	function addCartItem({
		name,
		quantity,
		id,
		imgSrc,
		price,
		types,
		description,
	}: itemCart) {
		if (cartItens.findIndex((item) => item.id === id) >= 0) {
			updateItem(id, quantity);
		} else {
			setCartItens([
				...cartItens,
				{ id, quantity, name, imgSrc, price, types, description },
			]);
		}
	}

	function checkout(adress: Address, payment: PaymentsType) {
		const checkoutAdress = {
			street: adress.street,
			number: adress.number,
			city: adress.city,
			state: adress.state,
			zip: adress.zip,
			neighborhood: adress.neighborhood,
		};
		setAddress(checkoutAdress);
		setPaymentType(payment);
		setCartItens([]);
	}

	return (
		<CartContext.Provider
			value={{
				cartItens,
				quantityDifferentItens,
				totalItems,
				total,
				address,
				paymentType,
				removeItem,
				addCartItem,
				updateItem,
				checkout,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

//
