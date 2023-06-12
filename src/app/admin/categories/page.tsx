import { AdminLinkTitle } from "@/components/adminLinkTitle";
import { AdminTable } from "@/components/adminTable";
import { PrimaryButton } from "@/components/primaryButton";

export default function categories() {
  return (
    <>
      <AdminLinkTitle text="Lista de categorias" />
      <PrimaryButton
        text="Agregar nueva categoria"
        href="/admin/categories/new"
      />
      <AdminTable class={["px-2 w-40", "px-2 w-40"]} variable="categoria" />
    </>
  );
}
