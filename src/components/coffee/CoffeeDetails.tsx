import React, { useEffect, useState } from "react";
// import { QuantityCounter } from "../ui/QuantityCounter";

import { CoffeeModel } from "../../models/Coffee";
import { Button } from "../Button";
import { useParams } from "react-router-dom";
import { QuantityCounter } from "../QuantityCounter";
// import Image from "next/image";
// import { CoffeeModel } from "@/models/coffee";
// import { addToCart } from "@/actions/cart";
// import { CartService } from "@/services/cart.service";

interface Props {
  coffee: CoffeeModel;
}

export const CoffeeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setloading] = useState(true);
  const [coffee, setCoffee] = useState<CoffeeModel | null>(null);
  const [quantity, setQuantity] = useState(0);
  //   const service = new CartService();

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      const data = await fetchData();
      setCoffee(data);
      setloading(false);
    };

    fetchDataAndSetState();
  }, [id]);

  const fetchData = async () => {
    if (!id) return null;

    try {
      const response = await fetch(`https://api.timdarrow.com/coffee/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.warn(error);
    }
  };

  const handleAddToCart = () => {
    console.log("adding to cart", quantity);
    // addToCart(coffee.id, quantity);
  };

  //   console.log("cart service:", service.returnData());

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className="flex justify-between">
          <div className="prdct-img w-1/3">
            <figure className="w-full relative overflow-y-hidden pb-[100%] img-bg">
              {coffee ? (
                <img
                  className="absolute inset-0"
                  src={coffee.imageurl}
                  alt={`${coffee.name}`}
                  width={500}
                  height={500}
                />
              ) : (
                ""
              )}
            </figure>
          </div>
          <div className="prct-detail pt-4 w-1/2 prose prose-headings:font-bold prose-h1:text-5xl prose-h2:text-4xl">
            <h1 className="text-4xl font-bold">{coffee?.name}</h1>
            <p>{coffee?.description}</p>
            <QuantityCounter
              quantity={quantity}
              setQuantity={setQuantity}
            ></QuantityCounter>
            <Button text="Add to Cart" onclick={handleAddToCart}></Button>
          </div>
        </div>
      )}
    </>
  );
};
