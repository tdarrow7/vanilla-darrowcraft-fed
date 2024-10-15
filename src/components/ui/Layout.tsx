import React from "react";
import { Masthead } from "../masthead/Masthead";
import { Outlet } from "react-router-dom";
import { Footer } from "../footer/Footer";

type Props = {};

export const Layout = (props: Props) => {
  return (
    <>
      <Masthead />
      <main className="container mx-auto py-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
