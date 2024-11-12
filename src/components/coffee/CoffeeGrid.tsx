// import { CoffeeModel } from "@/models/coffee";
// import { fetchCoffee } from "@/actions/coffee";
// import Link from "next/link";
// import { CoffeeCard } from "../../components/Coffee/CoffeeCard";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CoffeeModel } from "../../models/Coffee";
import { CoffeeCard } from "./CoffeeCard";
import { useHttp, defaultGETconfig } from "../../hooks/useHttp";

const requestConfig = { ...defaultGETconfig };

export const CoffeeGrid = () => {
  const { data: coffeeList, isFetching: isLoading } = useHttp<CoffeeModel[]>(
    "https://api.timdarrow.com/coffee/",
    requestConfig,
    []
  );

  return (
    <>
      {isLoading ? (
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
