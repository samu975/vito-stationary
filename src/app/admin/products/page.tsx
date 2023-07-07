import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./products.module.css";
import { PrimaryButton } from "@/components/primaryButton";
import { AdminLinkTitle } from "@/components/adminLinkTitle";
import { AdminTable } from "../../../components/adminTable";

export default function products() {
  return (
    <>
      <AdminLinkTitle text="Lista de productos" />
      <div className="mt-8">
        <PrimaryButton
          text="Agregar nuevo producto"
          href="/admin/products/new"
        />
      </div>
      <AdminTable
        class={[
          "px-1 w-16",
          "px-1 w-16",
          "px-2 w-60",
          "px-2 w-16",
          "px-1 w-16",
          "px-1 w-16",
          "px-1 w-16",
        ]}
        variable="producto"
        href="products"
      />
    </>
  );
}
