import { ChangeEvent, useContext } from "react";
import { ProductContext } from "./ProductContext";

export default function Buscador() {
  return (
    <>
      <div className="flex h-8 w-full bg-secundary items-center rounded-lg p-2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <input className={`w-full bg-secundary focus:outline-none px-6`} />
      </div>
    </>
  );
}
