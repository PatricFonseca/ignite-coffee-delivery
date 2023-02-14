import {
	createContext,
	ImgHTMLAttributes,
	ReactNode,
	useEffect,
	useState,
} from "react";

// interface CartProduct {
//   id: string;
//   name: string;
// }

// interface Cart {
//   products: CartProduct[];
// }

interface itemCart {
	name: string;
	id: string;
	quantity: number;
	imgSrc: string;
	price: number;
}

interface cartContextProps {
	cartItens: itemCart[];
	quantityDifferentItens: number;
	totalItems: number;
	total: number;
	updateCartItems: (cartItens: itemCart[]) => void;
	addCartItem: (itemcart: itemCart) => void;
}

interface CartContextProviderProps {
	children: ReactNode;
}

const deliveryValue = 10;

export const CartContext = createContext({} as cartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
	const [cartItens, setCartItens] = useState<itemCart[]>([]);
	const [quantityDifferentItens, setQuantiyDifferentItens] = useState(0);
	const [totalItems, setTotalItems] = useState(0);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const totalValues = cartItens.reduce<number>(
			(prevValue: number, elem: itemCart) =>
				prevValue + elem.price * elem.quantity,
			0
		);
		setTotalItems(totalValues);

		setTotal(totalValues + deliveryValue);
	}, [cartItens, deliveryValue]);

	function updateCartItems(items: itemCart[]) {
		setCartItens(items);
		console.log(items.length);
		console.log("itens", cartItens);
	}

	function addCartItem({ name, quantity, id, imgSrc, price }: itemCart) {
		if (cartItens.findIndex((item) => item.id === id) < 0) {
			setQuantiyDifferentItens((prev) => prev + 1);
		}

		setCartItens([...cartItens, { id, quantity, name, imgSrc, price }]);
	}

	return (
		<CartContext.Provider
			value={{
				cartItens,
				quantityDifferentItens,
				updateCartItems,
				addCartItem,
				totalItems,
				total,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

//
