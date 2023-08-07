import React, { useState } from "react";
import Image from "next/image";

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
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  ">
          {imagenes.map((imagen, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${imagen})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                cursor: "pointer",
                height: "300px",
                width: "300px",
                margin: "10px",
              }}
              className="transition-all duration-300 hover:scale-110 hover:bg-black bg-opacity-50"
              onClick={() => abrirModal(imagen)}
            />
          ))}
        </div>
      </div>

      {modalAbierto && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50"
          onClick={cerrarModal}
        >
          <div className="max-w-3xl max-h-full mx-4">
            <img
              src={imagenSeleccionada}
              alt="Imagen modal"
              // className="w-full h-auto"
              height={height}
              width={width}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeria;
