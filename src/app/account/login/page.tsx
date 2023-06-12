"use client";
import Image from "next/image";
import styles from "./login.module.css";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

export default function login() {
  if (
    typeof window !== "undefined" &&
    sessionStorage.getItem("token") !== null
  ) {
    const { correo, rol, nombre } = jwtDecode(
      sessionStorage.getItem("token") as string
    ) as { correo: string; rol: string; nombre: string };
  }

  const [data, setdata] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [err, seterr] = useState("");

  const sessionDataStorage = (e: any) => {
    sessionStorage.setItem("token", e);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post(`${process.env.BACKEND_URL}/auth/login`, {
        email: (document.getElementById("email") as HTMLInputElement)?.value,
        contrasena: (document.getElementById("contraseña") as HTMLInputElement)
          ?.value,
      })
      .then(function (response) {
        sessionDataStorage(response.data.access_token);
        setIsLoading(false);
        setdata(response.data);
      })
      .catch(function (error) {
        console.error(error);
        setIsLoading(false);
        seterr(error);
      });
  };

  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.logoContainer}>
          <Image
            src="/vito-logo.png"
            width={400}
            height={400}
            alt="Logo of vito Stationary Shop"
          />
        </div>
        <div className={styles.inputsContainer}>
          <h2>Iniciar sesión</h2>
          <form action="" method="get">
            <label htmlFor="">Usuario:</label>
            <input placeholder="Usuario" type="text" name="" id="email" />
            <label htmlFor="">Contraseña:</label>
            <input
              placeholder="Contraseña"
              type="password"
              name=""
              id="contraseña"
            />
          </form>
          <div className={styles.buttonContainer}>
            <button onClick={handleSubmit}>Iniciar sesion</button>
            <Link href="/account/forgotPassword">Olvidaste tu contraseña?</Link>
            <Link href="/account/register">Aún no tienes cuenta?</Link>
          </div>
        </div>
      </div>
    </>
  );
}
