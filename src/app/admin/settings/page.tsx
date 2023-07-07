"use client";
import { AdminLinkTitle } from "@/components/adminLinkTitle";
import FormButton from "@/components/formButtons";
import { InputForm } from "@/components/inputForm";
import { useEffect, useState } from "react";
import SweetAlert2 from "react-sweetalert2";
import jwtDecode from "jwt-decode";
import axios from "axios";

export default function AdminSettings() {
  const [userIfo, setUserInfo] = useState({});
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [swal, setSwal] = useState({});
  const { sub } = jwtDecode(sessionStorage.getItem("token") as string) as {
    sub: number;
  };

  const goBack = () => {
    console.log("go back");
  };

  const validatePassword = () => {
    if (password === password2) {
      axios.put(`${process.env.BACKEND_URL}/api/usuarios/`, {
        password: password,
        id: sub,
      });
    } else {
      setSwal({
        title: "Error",
        text: "Las contraseñas no coinciden",
        icon: "error",
      });
    }
  };

  const saveChanges = async () => {
    await axios
      .put(`${process.env.BACKEND_URL}/api/usuarios/`, {
        password: password,
        id: sub,
      })
      .then((res) => {
        if (res.status === 200) {
          setSwal({
            title: "Cambios guardados con exito",
            icon: "success",
          });
        }
      })
      .catch((err) => {
        setSwal({
          title: "Error",
          text: `No se pudieron guardar los cambios error: ${err}`,
          icon: "error",
        });
      });
  };

  return (
    <>
      <AdminLinkTitle text={"Administrar perfil"} />
      <div className="flex flex-col items-center justify-center mt-20">
        <form className="w-full lg:w-1/2">
          <InputForm
            text={"Nueva Contraseña:"}
            type={"password"}
            placeholder={"Nueva contraseña"}
            width={""}
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
          />
          <InputForm
            text={"Repetir contraseña:"}
            type={"password"}
            placeholder={"Repetir contrseña"}
            width={""}
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
          />
          <div className="w-full flex justify-evenly">
            <FormButton
              color="oscuro"
              text="Guardar Cambios"
              type="submit"
              styles="w-40 h-10 text-sm"
              onClick={validatePassword}
            />
          </div>
        </form>
      </div>
      <SweetAlert2 {...swal} />
    </>
  );
}
