"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ReactElement, useState } from "react";
import { InputForm } from "./inputForm";
import styleTextArea from "./css/input.module.css";
import FormButton from "./formButtons";
import Link from "next/link";
import { UserFormObj } from "@/interface/userForm.iterface";
import { async } from "rxjs";

const UserForm = ({
  id,
  nombre: existingNombre,
  apellido: existingApellido,
  email: existingEmail,
  contrasena: existingContrasena,
  rol: existingRol,
  telefono: existingTelefono,
}: UserFormObj): ReactElement => {
  const [nombre, setNombre] = useState(existingNombre || "");
  const [apellido, setApellido] = useState(existingApellido || "");
  const [email, setEmail] = useState(existingEmail || "");
  const [contrasena, setContrasena] = useState(existingContrasena || "");
  const [rol, setRol] = useState(existingRol || "");
  const [telefono, setTelefono] = useState(existingTelefono || "");
  const [goUsers, setGoUsers] = useState(false);

  const router = useRouter();

  async function saveUser(e: any) {
    e.preventDefault();
    const data = {
      id,
      nombre,
      apellido,
      email,
      contrasena,
      rol,
      telefono,
    };
    if (id) {
      //update
      await axios.put(`${process.env.BACKEND_URL}/api/usuarios/${id}`, {
        ...data,
      });
    } else {
      //create
      await axios.post(`${process.env.BACKEND_URL}/api/usuarios`, data);
    }
    setGoUsers(true);
  }

  function goBack() {
    setGoUsers(true);
  }

  if (goUsers) {
    router.push("/admin/users");
  }

  return (
    <div className="bg-white flex justify-center w-full mt-8">
      <form className="lg:w-1/4 w-3/4 flex flex-wrap" onSubmit={saveUser}>
        <InputForm
          text={"Nombre: "}
          type={"text"}
          placeholder={"Nombre"}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
          width={"w-36"}
          value={nombre}
        />
        <InputForm
          text={"Apellido: "}
          type={"text"}
          placeholder={"Apellido"}
          onChange={(e) => {
            setApellido(e.target.value);
          }}
          width={"w-36"}
          value={apellido}
        />
        <InputForm
          text={"Email: "}
          type={"text"}
          placeholder={"Email"}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          width={"w-52"}
          value={email}
        />
        <InputForm
          text={"contraseña: "}
          type={"password"}
          placeholder={"contraseña"}
          onChange={(e) => {
            setContrasena(e.target.value);
          }}
          width={"w-52"}
          value={contrasena}
        />
        <InputForm
          text={"telefono: "}
          type={"text"}
          placeholder={"telefono"}
          onChange={(e) => {
            setTelefono(e.target.value);
          }}
          width={"w-52"}
          value={telefono}
        />
        <div className="flex justify-around w-full my-5">
          <div className="flex justify-left w-1/3 ">
            <label className="text-lg">Rol:</label>
          </div>
          <div className="flex justify-left w-2/4 ">
            <select
              className="bg-tertiary w-full border-tertiary hover:cursor-pointer border rounded text-gray-500 text-sm pl-3"
              onChange={(e) => {
                setRol(e.target.value);
              }}
              value={rol}
            >
              <option value="2">Sin Rol</option>
              <option value="1">Admin</option>
              <option value="0">Cliente</option>
            </select>
          </div>
        </div>
        <div className="w-full flex justify-evenly">
          <FormButton color="oscuro" text="Guardar Cambios" type="submit" />
          <FormButton
            color="claro"
            onClick={goBack}
            children={
              <Link
                className="w-full flex items-center justify-center"
                href="/admin/users"
              >
                Cancelar
              </Link>
            }
          />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
