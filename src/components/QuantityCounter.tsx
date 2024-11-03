import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";

interface QuantityCounterProps {
  id?: number;
  quantity: number;
  onQuantityChange: (newQuantity: number, id?: number) => void;
}

export const QuantityCounter: React.FC<QuantityCounterProps> = ({
  id,
  quantity,
  onQuantityChange,
}) => {
  const handleDecrement = () => {
    if (quantity > 0) onQuantityChange(quantity - 1, id);
  };

  const handleIncrement = () => {
    onQuantityChange(quantity + 1, id);
  };

  return (
    <div className="bg-gray-200 rounded-3xl p-2 w-fit flex justify-between items-center">
      <button
        onClick={handleDecrement}
        className={`text-2xl hover:text-stone-600 cursor-pointer transition-all ${
          quantity === 0 ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <AiFillMinusCircle />
      </button>

      <span className="w-20 mx-1 text-center">{quantity}</span>
      <button
        className="text-2xl hover:text-stone-600 cursor-pointer transition-all"
        onClick={handleIncrement}
      >
        <AiFillPlusCircle />
      </button>
    </div>
  );
};
