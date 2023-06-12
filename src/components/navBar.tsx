"use client";
import Link from "next/link";
import styles from "./css/navigation.module.css";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();
  const menu = (
    <>
      <li>
        <Link href="/">Inicio</Link>
      </li>
      <li>
        <Link href="/contact">Contactanos</Link>
      </li>
      <li>
        {pathname.startsWith("/account/login") ? (
          <Link href="/account/register">Registrarse</Link>
        ) : (
          <Link href="/account/login">Iniciar sesión</Link>
        )}
      </li>
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
