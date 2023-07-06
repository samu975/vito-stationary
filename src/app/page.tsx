"use client";

import { CategoriesLayout } from "@/components/categoriesLayout";
import { DrawerProvider } from "@/components/drawer";
import Header from "@/components/header";
import ProductsLayout from "@/components/productsLayout";

export default function Home() {
  return (
    <>
      <CategoriesLayout />
      <ProductsLayout />
    </>
  );
}
