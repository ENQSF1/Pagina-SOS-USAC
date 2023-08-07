import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Acordeon = ({ object }) => {
  const [preguntaSeleccionada, setPreguntaSeleccionada] = useState(null);

  const toggleRespuesta = (index) => {
    if (preguntaSeleccionada === index) {
      setPreguntaSeleccionada(null);
    } else {
      setPreguntaSeleccionada(index);
    }
  };

  return (
    <div className="max-w-3xl  mx-auto my-center bg-white  rounded-lg p-6 ">
      {object.map((item, index) => (
        <div key={index} className="mb-4">
          <div
            onClick={() => toggleRespuesta(index)}
            className="flex items-center cursor-pointer"
          >
            <span className="text-lg font-medium">{item.pregunta}</span>
            <span className="ml-auto">
              {preguntaSeleccionada === index ? <FaMinus /> : <FaPlus />}
            </span>
          </div>
          {preguntaSeleccionada === index && (
            <div className="mt-2 text-gray-700 text-justify">
              {item.respuesta}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Acordeon;
