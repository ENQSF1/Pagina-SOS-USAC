import a from "@/pages/a";
import React from "react";

export default function Blog({ articulo }) {
  return (
    <div classNameName="w-full  mb-8 rounded overflow-hidden shadow-2xl bg-white">
      <a href={articulo.enlace} target="_blank">
        <img
          src={articulo.imagen}
          alt="Título del Artículo"
          className="w-full h-44
        object-cover"
        />
      </a>

      <div className="px-6 py-4 bg-white">
        <a href={articulo.enlace} target="_blank">
          <div className="font-bold text-xs h-10  hover:text-blue-500">
            {articulo.descripcion}
          </div>
        </a>
      </div>
    </div>
  );
}
