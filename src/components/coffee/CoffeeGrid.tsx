// import { CoffeeModel } from "@/models/coffee";
// import { fetchCoffee } from "@/actions/coffee";
// import Link from "next/link";
// import { CoffeeCard } from "../../components/Coffee/CoffeeCard";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CoffeeModel } from "../../models/Coffee";
import { CoffeeCard } from "./CoffeeCard";

// export interface CoffeeModel {
//   id: number;
//   name: string;
//   isGround: boolean;
//   dateadded: Date;
//   roastType: number;
//   description?: string;
//   imageurl: string;
// }

// interface CoffeeList {
//   coffeeList: CoffeeModel[];
// }

export const CoffeeGrid = () => {
  const [coffeeList, setCoffeeList] = useState<CoffeeModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      const data = await fetchData();
      setCoffeeList(data);
      setLoading(false);
    };

    fetchDataAndSetState();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.timdarrow.com/coffee/");
      const data = await response.json();
      return data;
    } catch (error: any) {
      console.warn(error);
    }
  };

  return (
    <>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <ul className="grid gap-6 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {coffeeList?.map((coffee: CoffeeModel) => {
            return (
              <li key={coffee.id}>
                <Link to={`/coffee/${coffee.id}`} className="group">
                  <CoffeeCard {...coffee}></CoffeeCard>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
