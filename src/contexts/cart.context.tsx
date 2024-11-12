import { createContext, useEffect, useState } from "react";

export type CartItem = {
  id: number;
  coffee: string;
  quantity: number;
  imageUrl?: string;
};

type CartState = {
  items: CartItem[];
  totalItemCount: number;
};

type Action =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "REMOVE_ITEM"; payload: { id: number } };

const initialState: CartState = {
  items: [],
  totalItemCount: 0,
};

const cartItemsKey = "cartItems";

const getTotalItems = (items: CartItem[]) => {
  const totalItemCount = items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  return totalItemCount;
};

export const CartContext = createContext<{
  cartState: CartState;
  addItem: (item: CartItem) => void;
  updateItem: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
}>({
  cartState: initialState,
  addItem: () => {},
  updateItem: () => {},
  removeItem: () => {},
  // dispatch: () => null, // A no-op function
});

// const cartReducer = (state: CartState, action: Action): CartState => {
//   switch (action.type) {
//     case "ADD_ITEM":
//       console.log("attempting to add item");

//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     case "UPDATE_QUANTITY":
//       return {
//         ...state,
//         items: state.items.map((item) =>
//           item.id === action.payload.id
//             ? { ...item, quantity: action.payload.quantity }
//             : item
//         ),
//       };
//     case "REMOVE_ITEM":
//       return {
//         ...state,
//         items: state.items.filter((item) => item.id !== action.payload.id),
//       };
//     default:
//       return state;
//   }
// };

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartState, setCartState] = useState<CartState>(initialState);

  // Load saved items from localStorage on initial render
  useEffect(() => {
    // const savedItems = localStorage.getItem(cartItemsKey);
    // if (savedItems) {
    //   const total = getTotalItems(savedItems);
    //   setCartState({ items: JSON.parse(savedItems) });
    // }
  }, []);

  // Save cart items to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem(cartItemsKey, JSON.stringify(cartState.items));
  }, [cartState.items]);

  const addItem = (item: CartItem) => {
    const updatedItems = [...cartState.items];
    const existingItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex !== -1)
      updatedItems[existingItemIndex].quantity += item.quantity;
    else updatedItems.push({ ...item });

    const updatedTotalItemCount = getTotalItems(updatedItems);
    setCartState((prevState) => ({
      ...prevState,
      items: [...updatedItems],
      totalItemCount: updatedTotalItemCount,
    }));
  };

  const updateItem = (id: number, quantity: number) => {
    console.log("in updateItem");

    const updatedItems = cartState.items.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    const updatedTotalItemCount = getTotalItems(updatedItems);
    setCartState((prevState) => ({
      ...prevState,
      items: [...updatedItems],
      totalItemCount: updatedTotalItemCount,
    }));
  };

  const removeItem = (id: number) => {
    setCartState((prevState) => ({
      ...prevState,
      items: prevState.items.filter((item) => item.id !== id),
    }));
  };

  return (
    <CartContext.Provider
      value={{ cartState, addItem, updateItem, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
