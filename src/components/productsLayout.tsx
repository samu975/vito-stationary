import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { Product } from "../interface/Product.interface";
import { formatedPrice } from "@/utils/formatedPrice";

export default function ProductsLayout() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [hoveredDiv, setHoveredDiv] = useState<number | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/producto`).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="flex flex-wrap gap-8 mx-12 w-full justify-center items-center">
      {products.map((product: Product) => {
        return (
          <div
            key={product.id}
            className={`flex items-center justify-center flex-col w-64 h-60 bg-transparent my-10 border-2 border-gray-300 rounded-md bg-white cursor-pointer`}
            onMouseEnter={() => setHoveredDiv(product.id)}
            onMouseLeave={() => setHoveredDiv(null)}
          >
            <div
              className="flex justify-center"
              onClick={() => router.push(`/products/${product.id}`)}
            >
              <img className="w-1/2" src={product.imagen} alt="" />
            </div>
            <div
              className="text-center"
              onClick={() => router.push(`/products/${product.id}`)}
            >
              <h3 className="text-lg font-bold">{product.nombre}</h3>
              <h4 className="text-gray-500">{formatedPrice(product.precio)}</h4>
            </div>
            {hoveredDiv === product.id && (
              <div>
                <button className="bg-primary px-4 py-2 mt-2 rounded-md w-full">
                  Agregar al carrito
                </button>
                <button
                  onClick={() => router.push(`/products/${product.id}`)}
                  className="mt-2 opacity-100 justify-center self-center bg-secundary px-4 py-2 rounded-md w-full"
                >
                  Ver más
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
