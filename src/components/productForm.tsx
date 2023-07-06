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
import Spinner from "./Spinner";

interface ProductFormObj {
  _id?: string;
  nombre?: string;
  codigo?: number;
  descripcion?: string;
  precio?: number;
  descuento?: number;
  cantidad?: number;
  imagen?: string;
}

const ProductForm = ({
  _id,
  codigo: existingCodigo,
  nombre: existingTitulo,
  descripcion: existingDescription,
  descuento: existingDiscount,
  cantidad: existingCantidad,
  precio: existingPrice,
  imagen: existingImages,
}: ProductFormObj) => {
  const [codigo, setcodigo] = useState(existingCodigo || "");
  const [titulo, setTitle] = useState(existingTitulo || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [discount, setDiscount] = useState(existingDiscount || "");
  const [images, setImages] = useState(existingImages || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [cantidad, setCantidad] = useState(existingCantidad || "");
  const [goProducts, setGoProducts] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const router = useRouter();

  async function saveProduct(e: any) {
    e.preventDefault();
    const data = {
      codigo: codigo.toString(),
      nombre: titulo,
      precio: price.toString(),
      descuento: discount.toString(),
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

  function goBack() {
    setGoProducts(true);
  }

  if (goProducts) {
    router.push("/admin/products");
  }

  async function uploadImages(e: any) {
    const files = e.target?.files;
    setIsloading(true);
    if (files?.length > 0) {
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }
      const response = await axios.post("/api/upload", data);
      setImages(response.data);
    }
    setIsloading(false);
  }

  return (
    <div className="grid grid-cols-4 mx-6 my-20 items-center">
      <div className="col-span-1 flex  flex-col">
        {isloading && <Spinner />}
        {images ? (
          <>
            <img src={images} />
            <div>
              <label>Remplazar imagen</label>
              <input
                type="file"
                onChange={uploadImages}
                title="reemplazar imagen"
              />
            </div>
          </>
        ) : (
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
        )}
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
            const value = e.target.value;
            setcodigo(value);
          }}
          value={codigo}
        />
        <InputForm
          text="Título del producto:"
          width="w-64"
          type="text"
          placeholder="Titulo"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
          value={titulo}
        />
        <InputForm
          text="Precio del producto:"
          width="w-36"
          type="text"
          placeholder="Precio"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPrice(e.target.value);
          }}
          value={price}
        />
        <InputForm
          text="Descuento del producto (%):"
          width="w-36"
          type="text"
          placeholder="Descuento"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDiscount(e.target.value);
          }}
          value={discount}
        />
        {/* <InputForm text="Categoría:" /> */}
        <InputForm
          text="Cantidad disponible:"
          width="w-36"
          type="text"
          placeholder="Cantidad"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCantidad(e.target.value);
          }}
          value={cantidad}
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
