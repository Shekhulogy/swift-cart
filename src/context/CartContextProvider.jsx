import { useReducer } from "react";
import { CartContext } from "./CartContext";

const initialState = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT":
      return [
        ...state,
        {
          id: action.payload.id,
          image: action.payload.image,
          title: action.payload.title,
          price: action.payload.price,
        },
      ];
      break;
    case "UPDATE":
      return action.payload;

    default:
      break;
  }
};

export const CartContextProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
