import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Link from "next/link";

const Ac = ({ encabezado, cuerpo, index, link }) => {
  const [preguntaSeleccionada, setPreguntaSeleccionada] = useState(null);

  const toggleRespuesta = (index) => {
    if (preguntaSeleccionada === index) {
      setPreguntaSeleccionada(null);
    } else {
      setPreguntaSeleccionada(index);
    }
  };

  return (
    <>
      <div key={index} className="mb-4">
        <div
          onClick={() => toggleRespuesta(index)}
          className="flex items-center cursor-pointer"
        >
          <span className="text-lg font-medium">
            {index + 1 + ". "}
            {encabezado}
          </span>
          <span className="ml-auto">
            {preguntaSeleccionada === index ? <FaMinus /> : <FaPlus />}
          </span>
        </div>
        {preguntaSeleccionada === index && (
          <div className="mt-2 text-gray-700 text-justify">
            {cuerpo}{" "}
            {link && (
              <Link
                className="text-blue-800 hover:text-red-500 text-blue-800"
                href={link}
              >
                (ver mas)
              </Link>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Ac;
