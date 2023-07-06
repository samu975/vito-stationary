"use client";
import { ProductContext } from "./ProductContext";
import Buscador from "./buscador";
import CarritoIcon from "./carritoIcon";
import Logo from "./logo";
import { useContext } from "react";

export default function Header() {
  const { setFilterProducts, filterProducts, products } =
    useContext(ProductContext);
  return (
    <ProductContext.Provider
      value={{ setFilterProducts, filterProducts, products }}
    >
      <div className="flex justify-between items-center mx-10 my-10 gap-5 lg:gap-32 lg:mx-32">
        <Logo />
        <Buscador />
        <CarritoIcon />
      </div>
    </ProductContext.Provider>
  );
}
