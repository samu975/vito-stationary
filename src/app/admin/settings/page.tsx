"use client";
import { AdminLinkTitle } from "@/components/adminLinkTitle";
import FormButton from "@/components/formButtons";
import { InputForm } from "@/components/inputForm";
import { useState, use } from "react";
import jwtDecode from "jwt-decode";
import SweetAlert2 from "react-sweetalert2";
import axios from "axios";
import { useRouter } from "next/navigation";
var md5 = require("md5");

export default function AdminSettings() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [swal, setSwal] = useState({});
  // sub es el id del usuario
  const { sub } = jwtDecode(sessionStorage.getItem("token") as string) as {
    sub: string;
  };

  const reload = () => {
    setSwal({});
    window.location.reload();
  };

  const goHome = () => {
    router.push("/");
  };

  const validatePassword = () => {
    if (password === password2) {
      if (password.length > 6) {
        saveChanges();
      } else {
        setSwal({
          show: true,
          title: "Error",
          text: "La contraseña debe tener al menos 6 caracteres",
          icon: "error",
          didClose: () => {
            reload();
          },
        });
      }
    } else {
      setSwal({
        show: true,
        title: "Error",
        text: "Las contraseñas no coinciden",
        icon: "error",
        didClose: () => {
          reload();
        },
      });
    }
  };

  const saveChanges = async () => {
    try {
      await axios.put(
        `${process.env.BACKEND_URL}/api/usuarios/password/${sub}`,
        {
          contrasena: md5(password),
        }
      );
      setSwal({
        show: true,
        title: "Cambios guardados con exito",
        icon: "success",
        confirmButtonText: "ok",
        didClose: () => {
          goHome();
        },
      });
    } catch (err) {
      setSwal({
        show: true,
        title: "Error",
        text: "No se pudieron guardar los cambios",
        icon: "error",
        didClose: () => {
          reload();
        },
      });
    }
  };

  return (
    <>
      <AdminLinkTitle text={"Administrar perfil"} />
      <div className="flex flex-col items-center justify-center mt-20">
        <InputForm
          text={"Nueva Contraseña:"}
          type={"password"}
          placeholder={"Nueva contraseña"}
          width={""}
          onChange={(e) => {
            setPassword(e.target.value);
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
            onClick={() => validatePassword()}
          />
        </div>
      </div>
      <SweetAlert2 {...swal} />
    </>
  );
}
