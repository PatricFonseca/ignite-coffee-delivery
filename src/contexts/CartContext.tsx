import { createContext, ReactNode, useEffect, useState } from "react";

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
}

interface cartContextProps {
  cartItens: itemCart[];
  quantityDifferentItens: number;
  updateCartItems: (cartItens: itemCart[]) => void;
  addCartItem: (itemcart: itemCart) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as cartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItens, setCartItens] = useState<itemCart[]>([]);
  const [quantityDifferentItens, setQuantiyDifferentItens] = useState(0);

  function updateCartItems(items: itemCart[]) {
    setCartItens(items);
    console.log(items.length);
    console.log("itens", cartItens);
  }

  function addCartItem({ name, quantity, id }: itemCart) {
    if (cartItens.findIndex((item) => item.id === id) < 0) {
      setQuantiyDifferentItens((prev) => prev + 1);
    }

    setCartItens([...cartItens, { id, quantity, name }]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItens,
        quantityDifferentItens,
        updateCartItems,
        addCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

//
