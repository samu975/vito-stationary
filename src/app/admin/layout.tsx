"use client";
import { NavAdmin } from "@/components/navAdmin";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hydrated, setHydrated] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setHydrated(true);
    const { rol } = jwtDecode(sessionStorage.getItem("token") as string) as {
      rol: number;
    };
    if (rol !== 1) {
      router.push("/");
    }
  });

  if (!hydrated) {
    return null;
  }
  return (
    <div className="min-h-screen flex">
      <NavAdmin />
      <div className="bg-white flex-grow mt-2 mr-2 rounded-lg">{children}</div>
    </div>
  );
}
