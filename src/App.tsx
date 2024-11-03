import React from "react";
import "../src/output.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/ui/Layout";
import { Home } from "./routes/Home";
import { CoffeeDetails } from "./components/coffee/CoffeeDetails";
import { CoffeeGrid } from "./components/coffee/CoffeeGrid";
import { CartPage } from "./routes/CartPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="coffee" element={<CoffeeGrid />} />
        <Route path="coffee/:id" element={<CoffeeDetails />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
};

export default App;
