"use client";
import jwtDecode from "jwt-decode";
import styles from "./admin.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function admin() {
  const [hydrated, setHydrated] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  if (
    typeof window !== "undefined" &&
    sessionStorage.getItem("token") !== null
  ) {
    const { correo, rol, nombre } = jwtDecode(
      sessionStorage.getItem("token") as string
    ) as { correo: string; rol: string; nombre: string };
    return (
      <>
        <div className="text-blue-900 flex justify-between">
          <h2>Hola, {nombre}</h2>
          <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
            <img alt="" className="w-6 h-6" />
            <span className="px-2"></span>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="text-blue-900 flex justify-between">
          <h2>Hola, usuario</h2>
          <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
            <img alt="" className="w-6 h-6" />
            <span className="px-2"></span>
          </div>
        </div>
      </>
    );
  }
}
