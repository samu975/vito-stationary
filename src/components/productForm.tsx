"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ReactElement, useState } from "react";
import Style from "./css/productForm.module.css";
import { InputForm } from "./inputForm";
import styleTextArea from "./css/input.module.css";
import { SecondaryButton } from "./secondaryButton";
import FormButton from "./formButtons";
import Link from "next/link";

interface ProductFormObj {
  _id?: string;
  title?: string;
  code?: number;
  description?: string;
  price?: number;
  discount?: number;
  cantidad?: number;
  images?: string;
}

const ProductForm = ({
  _id,
  code: existingCode,
  title: existingTitle,
  description: existingDescription,
  cantidad: existingCantidad,
  price: existingPrice,
  images: existingImages,
}: ProductFormObj) => {
  const [code, setCode] = useState(existingCode || 0);
  const [title, setTitle] = useState(existingTitle || "");
  const [price, setPrice] = useState(existingPrice || 0);
  const [discount, setDiscount] = useState(0);
  const [images, setImages] = useState(existingImages || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [cantidad, setCantidad] = useState(existingCantidad || 0);
  const [goProducts, setGoProducts] = useState(false);
  const router = useRouter();

  function goBack() {
    setGoProducts(true);
  }

  async function saveProduct(e: any) {
    e.preventDefault();
    const data = {
      codigo: code,
      nombre: title,
      precio: price,
      descuento: discount,
      descripcion: description,
      imagen: images,
      cantidad,
    };
    if (_id) {
      //update
      await axios.put(`${process.env.BACKEND_URL}/api/producto`, {
        ...data,
        _id,
      });
    } else {
      //create
      await axios.post(`${process.env.BACKEND_URL}/api/producto`, data);
    }
    setGoProducts(true);
  }

  if (goProducts) {
    router.push("/admin/products");
  }

  async function uploadImages(e: any) {
    const files = e.target?.files;
    if (files?.length > 0) {
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }
      const response = await axios.post("/api/upload", data);
      console.log(response.data);
    }
  }

  return (
    <div className="grid grid-cols-4 mx-6 my-20 items-center">
      <div className="col-span-1 flex  flex-col">
        <label
          className={`h-60 w-60 flex flex-wrap justify-center self-center items-center text-center flex-col border-4 border-spacing-0 border-dashed cursor-pointer ${Style.bgColor} ${Style.borderColor}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`w-16 h-16 ${Style.borderColor}`}
          >
            <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <h4
            className={`text-base font-bold px-8 text-center ${Style.borderColor}`}
          >
            Elige imagenes para el producto
          </h4>
          <input type="file" onChange={uploadImages} className="hidden" />
        </label>
        <div className="flex justify-start flex-wrap">
          <h3 className="font-semibold my-6 text-lg text-left ml-6">
            Subir imagenes:
          </h3>
          <p className="ml-6 opacity-70">
            Formatos aceptados: JPG, JPEG, PNG. Con tamaño minimo de 300 x 300px{" "}
          </p>
        </div>
      </div>
      <form
        className="col-span-3 flex flex-col items-center flex-wrap"
        onSubmit={saveProduct}
      >
        <InputForm
          text="Código del producto:"
          width="w-36"
          type="text"
          placeholder="Código"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const value = parseInt(e.target.value);
            setCode(value);
          }}
        />
        <InputForm
          text="Título del producto:"
          width="w-64"
          type="text"
          placeholder="Titulo"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <InputForm
          text="Precio del producto:"
          width="w-36"
          type="text"
          placeholder="Precio"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const value = parseInt(e.target.value);
            setPrice(value);
          }}
        />
        <InputForm
          text="Descuento del producto (%):"
          width="w-36"
          type="text"
          placeholder="Descuento"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const value = parseInt(e.target.value);
            setDiscount(value);
          }}
        />
        {/* <InputForm text="Categoría:" /> */}
        <InputForm
          text="Cantidad disponible:"
          width="w-36"
          type="text"
          placeholder="Cantidad"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const value = parseInt(e.target.value);
            setCantidad(value);
          }}
        />
        <div className="flex justify-around w-full mt-3 mb-5">
          <div className="flex justify-left w-1/3 ">
            <label className="text-lg">Descripción:</label>
          </div>
          <div className="flex justify-left w-2/4">
            <textarea
              placeholder="Descripción"
              name=""
              id=""
              cols={50}
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={`h-19 border rounded-lg p-3 text-sm placeholder:text-gray-500 placeholder:text-sm placeholder:p-3 ${styleTextArea.color} ${styleTextArea.scrollbar}`}
            ></textarea>
          </div>
        </div>
        <div className="w-full flex justify-evenly">
          <FormButton color="oscuro" text="Guardar Cambios" type="submit" />
          <FormButton
            color="claro"
            onClick={goBack}
            children={
              <Link
                className="w-full flex items-center justify-center"
                href="/admin/products"
              >
                Cancelar
              </Link>
            }
          />
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
