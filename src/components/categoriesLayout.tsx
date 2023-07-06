import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Category {
  id: number;
  nombre: string;
}

export const CategoriesLayout = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/categoria`).then((response) => {
      setList(response.data);
    });
  }, []);

  return (
    <>
      <div className="px-12 flex justify-evenly my-12">
        {list.map((category: Category) => {
          return (
            <Link
              key={`${Date.now()}${category.id}${Math.random() * 10}`}
              className="text-primary font-bold text-2xl hover:text-white"
              href={`/categories/${category.id}`}
            >
              {category.nombre}
            </Link>
          );
        })}
      </div>
    </>
  );
};
