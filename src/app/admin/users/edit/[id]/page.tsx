"use client";
import { AdminLinkTitle } from "@/components/adminLinkTitle";
import ProductForm from "@/components/productForm";
import UserForm from "@/components/userForm";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditProductPage() {
  const [userInfo, setUserInfo] = useState(null);
  const pathName = usePathname();
  const id = pathName.split("/")?.[4];
  useEffect(() => {
    if (!id) {
      return;
    }
    axios
      .get(`${process.env.BACKEND_URL}/api/usuarios/${id}`)
      .then((response) => {
        setUserInfo(response.data);
      });
  }, [id]);
  return (
    <>
      <AdminLinkTitle text="Editar Usuarios" />
      {userInfo && <UserForm {...userInfo} />}
    </>
  );
}
