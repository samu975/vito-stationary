import { ProductContextProps } from "@/interface/productContext.interface";
import axios from "axios";
import { createContext, useState, ReactNode } from "react";

export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filterProducts, setFilterProducts] = useState<string>("");

  axios.get(`http://localhost:3001/api/producto`).then((response) => {
    setProducts(response.data);
  });

  return (
    <ProductContext.Provider
      value={{ products, filterProducts, setFilterProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};
