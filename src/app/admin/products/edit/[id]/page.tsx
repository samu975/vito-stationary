"use client";
import { AdminLinkTitle } from "@/components/adminLinkTitle";
import ProductForm from "@/components/productForm";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditProductPage() {
  const [productInfo, setProductInfo] = useState(null);
  const pathName = usePathname();
  const id = pathName.split("/")?.[4];

  useEffect(() => {
    if (!id) {
      return;
    }
    axios
      .get(`${process.env.BACKEND_URL}/api/producto/${id}`)
      .then((response) => {
        setProductInfo(response.data);
      });
  }, [id]);
  return (
    <>
      <AdminLinkTitle text="Editar Producto" />
      {productInfo && <ProductForm {...productInfo} />}
    </>
  );
}
