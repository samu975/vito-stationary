import { AdminLinkTitle } from "@/components/adminLinkTitle";
import { AdminTable } from "@/components/adminTable";
import { PrimaryButton } from "@/components/primaryButton";

export default function users() {
  return (
    <>
      <AdminLinkTitle text="Lista de usuarios" />
      <div className="mt-8">
        <PrimaryButton text="Agregar nuevo usuario" href="/admin/users/new" />
      </div>
      <AdminTable
        class={["px-1 w-16", "px-2 w-40", "px-1 w-16"]}
        variable="usuarios"
        href="users"
      />
    </>
  );
}
