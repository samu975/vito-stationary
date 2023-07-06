"use client";
import axios from "axios";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ProductInfo } from "@/interface/productInfo.interface";
import { PrimaryButton } from "@/components/primaryButton";
import { SecondaryButton } from "@/components/secondaryButton";
import CartIcon from "@/components/icons/cart";
import { formatedPrice } from "@/utils/formatedPrice";
export default function ProductPage() {
  const [hydrated, setHydrated] = useState(false);
  const [productInfo, setProductInfo] = useState<ProductInfo | null>(null);
  const [cantidad, setCantidad] = useState(1);
  const pathName = usePathname();
  const id = pathName.split("/")?.[2];

  console.log(productInfo);
  useEffect(() => {
    setHydrated(true);
    if (!id) {
      return;
    }
    axios
      .get(`${process.env.BACKEND_URL}/api/producto/${id}`)
      .then((response) => {
        setProductInfo(response.data);
      });
  }, [id]);
  if (!hydrated) {
    return null;
  }

  if (productInfo) {
    return (
      <>
        <div className="my-0 mx-14 grid grid-cols-2 px-8 pt-4 bg-white h-auto gap-10 rounded-lg xl:mx-60 xl:px-10 pb-20">
          <div className="flex items-center flex-col">
            <h1 className="mt-4 text-2xl font-medium text-primary mb-6">
              {productInfo.nombre}
            </h1>
            <img
              src={productInfo.imagen}
              alt={productInfo.nombre}
              className="w-full mt-4 max-w-md"
            />
          </div>
          <div className=" flex flex-col justify-evenly xl:px-20">
            <div>
              <h2 className="text-xl font-medium text-gray-700 mb-6">
                {" "}
                Descripcion:{" "}
              </h2>
              <p className="text-lg font-normal text-gray-600 my-5">
                {productInfo.descripcion}
              </p>
            </div>
            <h3 className="text-2xl font-semibold text-primary">
              {formatedPrice(productInfo.precio)}
            </h3>
            <div className="flex justify-around">
              <input
                type="number"
                min={1}
                max={productInfo.cantidad}
                aria-label="cantidad"
                value={cantidad}
                className="w-20 h-10 border-2 border-gray-300 rounded-md text-center text-lg custom-number-input"
                onChange={(e) => setCantidad(parseInt(e.target.value))}
              />
              <button
                className="flex gap-2 text-center items-center bg-primary p-3 rounded-lg text-xs xl:text-lg xl:gap-4"
                onClick={() => {}}
              >
                <CartIcon />
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
