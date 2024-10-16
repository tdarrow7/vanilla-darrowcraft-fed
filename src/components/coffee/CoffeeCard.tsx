import { CoffeeModel } from "../../models/Coffee";

export const CoffeeCard = (props: CoffeeModel) => {
  return (
    <>
      <figure className="w-full h-auto relative overflow-y-hidden pb-[100%] bg-stone-900 overflow-hidden">
        <img
          className="absolute inset-0 group-hover:opacity-75 scale-100 group-hover:scale-105 transition-all"
          src={props.imageurl}
          alt={`${props.name}`}
          width={500}
          height={500}
        />
      </figure>
      <div className="txt-bx my-2 flex justify-between">
        <div className="descr translate-x-0 group-hover:translate-x-2 transition-transform w-4/5">
          <strong className="text-2xl">{props.name}</strong>
          <p className="text-sm">{props.description}</p>
        </div>
        <div className="price group-hover:scale-105 transition-transform">
          $00.00
        </div>
      </div>
    </>
  );
};
