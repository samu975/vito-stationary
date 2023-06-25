"use client";
import Image from "next/image";
import styles from "./register.module.css";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import axios from "axios";
import { withSwal } from "react-sweetalert2";
import { useRouter } from "next/navigation";

function Register({ swal }: any) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [telephone, setTelephone] = useState("");

  const data = {
    nombre: name,
    apellido: lastName,
    email: email,
    contrasena: password,
    telefono: telephone,
  };

  function isEmailValid(emai: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emai);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setpassword(e.target.value);

        break;
      case "telephone":
        setTelephone(e.target.value);
        break;
    }
  };

  function validationData() {
    if (
      data.nombre === "" ||
      data.apellido === "" ||
      data.email === "" ||
      data.contrasena === "" ||
      data.telefono === ""
    ) {
      setError("Por favor llene todos los campos");
      return false;
    } else if (!isEmailValid(data.email)) {
      setError("Por favor ingrese un email valido");
      return false;
    } else if (data.contrasena.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
      return false;
    } else {
      return true;
    }
  }
  function errorMessage(error: string) {
    setTimeout(() => {
      swal.fire({
        title: error,
        icon: "error",
        confirmButtonText: "Ok",
      });
    }, 1000);
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    validationData();

    if (validationData() === true) {
      await axios
        .post(`${process.env.BACKEND_URL}/api/usuarios`, data)
        .then(function (response) {
          swal.fire({
            title: "Usuario creado con exito",
            icon: "success",
            confirmButtonText: "Ok",
          });
          router.push("/");
        })
        .catch(function (error) {
          setError(error);
          setTimeout(() => {
            swal.fire({
              title: error,
              icon: "error",
              confirmButtonText: "Ok",
            });
          }, 1000);
        });
    } else {
      errorMessage(error);
    }
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
          <h2>Registrarse</h2>
          <form action="" method="post">
            <label htmlFor="">Nombre:</label>
            <input
              placeholder="Nombre"
              type="text"
              name="nombre"
              id="name"
              onChange={handleChange}
            />
            <label htmlFor="">Apellido:</label>
            <input
              placeholder="Apellido"
              type="text"
              name="apellido"
              id="lastName"
              onChange={handleChange}
            />
            <label htmlFor="">Email:</label>
            <input
              placeholder="email"
              type="text"
              name="correo"
              id="email"
              onChange={handleChange}
            />
            <label htmlFor="">Contraseña:</label>
            <input
              placeholder="Contraseña"
              type="password"
              name="constraseña"
              id="password"
              onChange={handleChange}
            />
            <label htmlFor="">Teléfono:</label>
            <input
              placeholder="Teléfono"
              type="text"
              name="telefono"
              id="telephone"
              onChange={handleChange}
            />
          </form>
          <div className={styles.buttonContainer}>
            <button onClick={(e) => handleSubmit(e)}>Registrarse</button>
            <Link href="/account/login">Ya tienes cuenta?</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default withSwal(({ swal }: any) => <Register swal={swal} />);
