import React, { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import { QuantityCounter } from "../components/QuantityCounter";

export const CartPage = () => {
  const { cartState, updateItem } = useContext(CartContext);

  console.log("items after update", cartState.items);
  const handleUpdateQuantity = (newQuantity: number, id?: number) => {
    console.log("in handleUpdate Qty");
    console.log("id", id);

    if (id) updateItem(id, newQuantity);
  };

  return (
    <div>
      <ul>
        {cartState.items.map((item) => {
          return (
            <li key={item.id} className="flex align-middle items-center">
              <div className="max-w-40 w-60 h-60 relative overflow-hidden">
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    className="w-7 h-60 relative"
                    alt=""
                  />
                )}
              </div>
              <div className="text-center mr-5 ml-5">
                <p>{item.coffee}</p>
              </div>
              <QuantityCounter
                quantity={item.quantity}
                id={item.id}
                onQuantityChange={handleUpdateQuantity}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
