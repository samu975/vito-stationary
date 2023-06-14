import { AdminLinkTitle } from "@/components/adminLinkTitle";
import ProductForm from "@/components/productForm";

export default function NewProduct() {
  return (
    <>
      <AdminLinkTitle text="Agregar Producto" />
      <ProductForm />
    </>
  );
}
