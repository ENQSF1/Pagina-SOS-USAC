import a from "@/pages/a";
import React from "react";

export default function Blog({ articulo }) {
  return (
    <div className="w-full h-[250px] mb-8 rounded overflow-hidden shadow-2xl bg-white">
      <a href={articulo.enlace} target="_blank">
        <img
          src={articulo.imagen}
          alt="Título del Artículo"
          class="w-full h-44
        object-cover"
        />
      </a>

      <div class="px-6 py-4">
        <a href={articulo.enlace} target="_blank">
          <div class="font-bold text-xs  hover:text-blue-500">
            {articulo.descripcion}
          </div>
        </a>
      </div>
    </div>
  );
}
