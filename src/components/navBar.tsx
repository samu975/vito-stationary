import Link from "next/link";
import styles from "./navigation.module.css";

const links = [
  {
    label: "Inicio",
    route: "/",
  },
  {
    label: "Contactanos",
    route: "/contact",
  },
  {
    label: "Iniciar sesión",
    route: "/account/login",
  },
  {
    label: "Registrarse",
    route: "/account/register"
  }
];

export function Navigation() {
  return (
    <header className={styles.header}>
      <ul className={styles.navigation}>
        {links.map(({ label, route }) => (
          <li key={route}>
            <Link href={route}>{label}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
