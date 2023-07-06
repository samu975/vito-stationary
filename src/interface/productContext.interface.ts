import { Product } from "./Product.interface";

export interface ProductContextProps {
  products: Product[];
  filterProducts: string;
  setFilterProducts: (filter: string) => void;
}
