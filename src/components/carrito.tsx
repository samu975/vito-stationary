"use client";

import { useState } from "react";

export default function Carrito() {
  const [hasItems, sethasItems] = useState(false);
  return (
    <div className="">
      {!hasItems ? (
        <h2>No hay items en el carrito</h2>
      ) : (
        <div>
          <h2>Tienes 1 items en el carrito</h2>
          <h3>Productos: </h3>
          <article className=""></article>
        </div>
      )}
    </div>
  );
}
