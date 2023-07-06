"use client";
import Link from "next/link";
import styles from "./css/navigation.module.css";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Navigation() {
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setHydrated(true);
  });
  if (!hydrated) {
    return null;
  }

  let isSession;
  if (
    typeof window !== "undefined" &&
    sessionStorage.getItem("token") !== null
  ) {
    isSession = (
      <>
        <li>
          <Link
            href="/account/perfil"
            className={
              pathname.startsWith("/account/perfil") ? styles.activeLink : ""
            }
          >
            Perfil
          </Link>
        </li>
        <li>
          <Link href="/" onClick={cerrarSesion}>
            {" "}
            Cerrar sesión
          </Link>
        </li>
      </>
    );
  } else {
    if (pathname.startsWith("/account/register")) {
      isSession = (
        <li>
          <Link href="/account/login">Iniciar sesión</Link>
        </li>
      );
    } else if (pathname.startsWith("/account/login")) {
      isSession = (
        <li>
          <Link href="/account/register">Registrarse</Link>
        </li>
      );
    } else {
      isSession = (
        <>
          <li>
            <Link href="/account/login">Iniciar sesión</Link>
          </li>
          <li>
            <Link href="/account/register">Registrarse</Link>
          </li>
        </>
      );
    }
  }

  function cerrarSesion() {
    sessionStorage.clear();
    router.push("/");
  }

  const menu = (
    <>
      <li>
        <Link href="/" className={pathname === "/" ? styles.activeLink : ""}>
          Inicio
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className={pathname.startsWith("/contact") ? styles.activeLink : ""}
        >
          Contactanos
        </Link>
      </li>
      {isSession}
    </>
  );
  return (
    <header className={styles.header}>
      {pathname.startsWith("/account") ? (
        <ul className={styles.navigation}>{menu}</ul>
      ) : (
        <ul className={`${styles.navigation} ${styles.navigationCenter}`}>
          {menu}
        </ul>
      )}
    </header>
  );
}
