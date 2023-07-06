"use client";
import { PrimaryButton } from "@/components/primaryButton";
import { SecondaryButton } from "@/components/secondaryButton";
import jwtDecode from "jwt-decode";
import Link from "next/link";
import { useEffect, useState } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  });
  if (!hydrated) {
    return null;
  }

  const isNotAutenticated = (
    <div className="bg-white px-20 py-10 mt-40 rounded-lg flex flex-col items-center">
      <div>
        <img
          className="w-full h-40"
          src="/vito-logo.png"
          alt="Logo of vito stationary"
        />
      </div>
      <h1 className="text-xl font-bold">
        Necesitas estar autenticado para continuar
      </h1>
      <div className="flex justify-around mt-10 w-full items-center">
        <PrimaryButton
          style={
            "bg-primary text-sm font-medium px-4 py-2 h-10 rounded-lg text-center"
          }
          href="/account/login"
          text={"Iniciar sesión"}
        />
        <SecondaryButton
          style={
            "bg-secundary text-sm font-medium px-4 py-2 h-10 rounded-lg text-center"
          }
          href={"/account/register"}
          text={"Registrarse"}
        />
      </div>
    </div>
  );

  const isAutenticated = (
    <div>
      <div></div>
    </div>
  );

  if (
    typeof window !== "undefined" &&
    sessionStorage.getItem("token") !== null
  ) {
    const { correo, rol, nombre } = jwtDecode(
      sessionStorage.getItem("token") as string
    ) as { correo: string; rol: string; nombre: string };
  }

  return (
    <div className="flex justify-center items-center w-full h-full">
      {sessionStorage.getItem("token") !== null
        ? isAutenticated
        : isNotAutenticated}
    </div>
  );
};

export default layout;
