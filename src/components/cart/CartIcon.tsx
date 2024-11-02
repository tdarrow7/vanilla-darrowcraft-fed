import React, { useContext, useEffect, useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { CartContext } from "../../contexts/cart.context";

export const CartIcon = () => {
  const { cartState } = useContext(CartContext);
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
  }, [cartState.totalItemCount]);
  const hasItems = cartState.items.length > 0;
  return (
    <button className="relative group text-black">
      <CgShoppingCart className="text-lg " />
      {hasItems && (
        <span
          className={`text-xs absolute -top-1 -right-2 bg-red-600 p-1 rounded-full text-white leading-none scale-100 group-hover:scale-110 transition-transform ${
            isAnimating ? "animate-bounce-once" : ""
          }`}
        >
          {cartState.items.length}
        </span>
      )}
    </button>
  );
};
