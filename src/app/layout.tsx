"use client";
import { Navigation } from "@/components/navBar";
import "./globals.css";
import Header from "@/components/header";
import { DrawerProvider } from "@/components/drawer";
import { usePathname } from "next/navigation";

export const metadata = {
  title: "Vito stationary shop",
  description:
    "Vito Stationary es un e-commerce de una papeleria en linea. tiene un buscador donde se puede encontrar los productor por su nombre. Tambien tiene un filtro donde se puede ordenar por precio y categoria. Hay un visualizador de como es el producto y un carrito de compras para añadirlo y pagar el producto, se podria hacer el pago por alguna api de pago como payU o mercadopago.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const excludedPaths = [
    "/account",
    "/contact",
    "/admin",
    "/checkout",
    "/order",
  ];
  const showHeader = !excludedPaths.some((path) => pathName.includes(path));
  return (
    <html lang="es">
      <head>
        <title>Vito Stationary Shop</title>
      </head>
      <body className="scrollbar-thumb-red-600">
        <DrawerProvider>
          <Navigation />
          {showHeader && <Header />}
        </DrawerProvider>
        {children}
      </body>
    </html>
  );
}
