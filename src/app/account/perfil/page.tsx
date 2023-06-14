"use client";
import { NavUser } from "@/components/navUser";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Perfil() {
  const [hydrated, setHydrated] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setHydrated(true);
    const { rol } = jwtDecode(sessionStorage.getItem("token") as string) as {
      rol: number;
    };
    if (rol === 1) {
      router.push("/admin/settings");
    }
  });
  if (!hydrated) {
    return null;
  }

  return (
    <div className="min-h-screen flex">
      <NavUser />
      <div className="bg-white flex-grow mt-2 mr-2 rounded-lg"></div>
    </div>
  );
}
