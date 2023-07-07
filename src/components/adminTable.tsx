"use client";
import { use, useEffect, useState } from "react";
import style from "./css/adminTable.module.css";
import axios from "axios";
import { SecondaryButton } from "./secondaryButton";
import DeleteButton from "./deleteButton";

interface AdminTableProps {
  class: string[];
  variable: string;
  href?: string;
}

export const AdminTable = (props: AdminTableProps) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/${props.variable}`)
      .then((response) => {
        setList(response.data);
      });
  }, []);

  const deleteItemFromLayout = (id: string) => {
    const item = document.getElementById(id);
    item?.remove();
  };

  if (list.length > 0) {
    const keys = Object.keys(list[0]).filter(
      (key) =>
        key !== "createdAt" &&
        key !== "updatedAt" &&
        key !== "imagen" &&
        key !== "descuento" &&
        key !== "isAvaible" &&
        key !== "contrasena" &&
        key !== "descripcion"
    );

    return (
      <table className={`${style.table} my-6 mx-4`}>
        <thead>
          <tr>
            {keys.map((title: string) => {
              return (
                <td
                  key={`${Date.now()}${title}${Math.random() * 10}`}
                  className={`${style.tableTitles} ${
                    props.class[(keys as string[]).indexOf(title)]
                  } p-1 border border-black-400 text-left`}
                >
                  {title.split(/(?=[A-Z])/).join(" del ")}
                </td>
              );
            })}
            <td className={`${style.tableTitles} w-80`}>Botones</td>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            const keys = Object.keys(item).filter(
              (key) =>
                key !== "createdAt" &&
                key !== "updatedAt" &&
                key !== "imagen" &&
                key !== "descuento" &&
                key !== "isAvaible" &&
                key !== "contrasena" &&
                key !== "descripcion"
            );
            return (
              <tr
                key={`${Date.now()}${(item as any).id}${Math.random() * 10}`}
                id={(item as any).id}
              >
                {keys.map((key) => {
                  return (
                    <td
                      key={`${Date.now}${(item as any).id}${
                        (item as any).title
                      }${Math.random() * 10}`}
                      className={`${
                        props.class[(list as string[]).indexOf(key)]
                      } border border-black-400 py-3 text-left`}
                    >
                      {item[key]}
                    </td>
                  );
                })}
                <td className="border border-black-400 flex justify-center gap-3">
                  <SecondaryButton
                    style={"p-1 px-4 my-2 bg-primary flex rounded-md"}
                    text="Editar"
                    href={`/admin/${props.href}/edit/${(item as any).id}`}
                    reactElemet={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    }
                  />
                  <DeleteButton
                    argument={props.variable}
                    id={(item as any).id}
                    onDelete={() => deleteItemFromLayout((item as any).id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else {
    return (
      <div className="mt-40 text-black-900 flex justify-center items-center font-medium">
        <h2>No hay items en la base de datos</h2>
      </div>
    );
  }
};
