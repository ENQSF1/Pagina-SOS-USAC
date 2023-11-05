import React, { useState } from "react";
import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";

const Galeria = ({ imagenes, width, height }) => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [imagenSeleccionada, setImagenSeleccionada] = useState("");

  const abrirModal = (imagen) => {
    setModalAbierto(true);
    setImagenSeleccionada(imagen);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setImagenSeleccionada("");
  };

  return (
    <div>
      <div className="flex justify-center items-center m-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 ">
          {imagenes.map((imagen, index) => (
            <div
              key={index}
              className="relative transition-all duration-300 hover:scale-105"
            >
              <img
                src={imagen.imagen}
                alt={`Imagen ${index}`}
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => abrirModal(imagen.imagen)}
              />
              {imagen.descripcion && (
                <p
                  className="absolute bottom-0 left-0 right-0 bg-black text-white p-0 text-center"
                  style={{ opacity: 0.8 }}
                >
                  {imagen.descripcion}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {modalAbierto && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50"
          onClick={cerrarModal}
        >
          <div className="p-16  relative">
            {/* Icono de X en la esquina superior derecha del div */}
            <div
              className="absolute top-2 right-2 text-gray-700 text-2xl cursor-pointer"
              onClick={cerrarModal}
            >
              <AiFillCloseCircle className="w-10 h-10 text-red-600" />
            </div>
            <div className="max-w-3xl max-h-full ">
              <img
                src={imagenSeleccionada}
                alt="Imagen modal"
                height={height}
                width={width}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeria;
