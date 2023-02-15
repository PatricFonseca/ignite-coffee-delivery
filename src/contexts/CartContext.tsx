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
	// updateCartItems: (cartItens: itemCart[]) => void;
	removeItem: (id: string) => void;
	addCartItem: (itemcart: itemCart) => void;
	updateItem: (itemCart: itemCart, quantity: number) => void;
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
			(acc: number, elem: itemCart) => acc + elem.price * elem.quantity,
			0
		);
		setTotalItems(totalValues);

		setTotal(totalValues + deliveryValue);
		setQuantiyDifferentItens(cartItens.length || 0);
	}, [cartItens, deliveryValue]);

	function updateItem(itemCart: itemCart, quantity: number) {
		const newCartItems = cartItens.filter((item) => {
			item.id !== itemCart.id;
		});

		itemCart.quantity = quantity;
		newCartItems.push(itemCart);

		setCartItens(newCartItems);
	}

	function removeItem(id: string) {
		const filteredItems = cartItens.filter((item) => {
			item.id !== id;
		});

		setCartItens(filteredItems);
	}

	function addCartItem({ name, quantity, id, imgSrc, price }: itemCart) {
		if (cartItens.findIndex((item) => item.id === id) >= 0) {
			const item = {
				name,
				quantity,
				id,
				imgSrc,
				price,
			};
			updateItem(item, quantity);
		} else {
			setCartItens([...cartItens, { id, quantity, name, imgSrc, price }]);
		}
	}

	return (
		<CartContext.Provider
			value={{
				cartItens,
				quantityDifferentItens,
				removeItem,
				addCartItem,
				updateItem,
				totalItems,
				total,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

//
