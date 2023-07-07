import { AdminLinkTitle } from "@/components/adminLinkTitle";
import UserForm from "@/components/userForm";

export default function NewUser() {
  return (
    <>
      <AdminLinkTitle text={"Agregar Usuario"} />
      <UserForm />
    </>
  );
}
