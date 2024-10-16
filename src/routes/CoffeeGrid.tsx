// import { CoffeeModel } from "@/models/coffee";
// import { fetchCoffee } from "@/actions/coffee";
// import Link from "next/link";
// import { CoffeeCard } from "../../components/Coffee/CoffeeCard";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface CoffeeModel {
  id: number;
  name: string;
  isGround: boolean;
  dateadded: Date;
  roastType: number;
  description?: string;
  imageurl: string;
}

interface CoffeeList {
  coffeeList: CoffeeModel[];
}

export const CoffeeGrid = async () => {
  const [coffee, setCoffee] = useState<CoffeeModel[]>([]);

  // useEffect(() => {
  //     const fetchDataAndSetState = async () => {
  //         const response = await
  //     }
  // }, [])

  return (
    <ul className="grid gap-6 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      {coffee?.map((c: CoffeeModel) => {
        return (
          <li key={c.id}>
            <Link to={`/coffee/${c.id}`} className="group">
              {/* <CoffeeCard coffee={c}></CoffeeCard> */}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
