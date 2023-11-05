import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Link from "next/link";
import {
  AiOutlineArrowRight,
  AiOutlineArrowDown,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";

const Ac = ({ encabezado, cuerpo, index, link, use }) => {
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
          <span className="mr-2 font-bold text-black text-xl">
            {preguntaSeleccionada === index ? (
              use === "nav" ? (
                <AiOutlineArrowDown />
              ) : (
                <AiOutlineMinus />
              )
            ) : use === "nav" ? (
              <AiOutlineArrowRight />
            ) : (
              <AiOutlinePlus />
            )}
          </span>
          <span className="text-lg font-medium">
            {index + 1 + ". "}
            {encabezado}
          </span>
        </div>
        {preguntaSeleccionada === index && (
          <div className="mt-2 text-gray-700 text-justify">
            {cuerpo}{" "}
            {link && (
              <Link className="text-blue-800 hover:text-red-500" href={link}>
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
