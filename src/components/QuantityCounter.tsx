import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";

interface QuantityCounterProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export const QuantityCounter: React.FC<QuantityCounterProps> = ({
  quantity,
  setQuantity,
}) => {
  const handleDecrement = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
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
