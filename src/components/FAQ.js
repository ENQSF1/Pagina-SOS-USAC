import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const PreguntasFrecuentes = () => {
  const [preguntas, setPreguntas] = useState([
    {
      pregunta: "1. ¿Cómo puedo adherirme a S.O.S INGENIERIA?",
      respuesta: "Respuesta 1",
    },
    {
      pregunta: "2. ¿Quiénes financian este Movimiento?",
      respuesta: "Respuesta 2",
    },
    {
      pregunta: "1. ¿Cómo puedo adherirme a S.O.S INGENIERIA?",
      respuesta: "Respuesta 1",
    },
    {
      pregunta: "2. ¿Quiénes financian este Movimiento?",
      respuesta: "Respuesta 2",
    },
    {
      pregunta: "2. ¿Quiénes financian este Movimiento?",
      respuesta: "Respuesta 2",
    },
    {
      pregunta: "3. ¿Cómo puedo aportar al Movimiento?",
      respuesta:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit porro quod itaque, nam esse. Sequi ut totam quasi, eveniet saepe aliquid corrupti minus. Et nobis accusantium eius, explicabo beatae, quod exercitationem sit qui aspernatur magni maiores nemo recusandae reprehenderit! Nam architecto dolorum eligendi sed fugiat beatae deserunt molestiae praesentium. ",
    },
    {
      pregunta: "4. ¿Son un partido político?",
      respuesta: "Respuesta 2",
    },
    {
      pregunta: "5. ¿Son parte de la vieja política?",
      respuesta: "Respuesta 2",
    },
    {
      pregunta: "6. ¿Quién es su candidato ?",
      respuesta: "Respuesta 2",
    },
    {
      pregunta: "7. ¿Cuál es su plan de trabajo?",
      respuesta: "Respuesta 2",
    },
    {
      pregunta: "8.¿Cuáles son sus principios?",
      respuesta: "Respuesta 2",
    },
  ]);

  const [preguntaSeleccionada, setPreguntaSeleccionada] = useState(null);

  const toggleRespuesta = (index) => {
    if (preguntaSeleccionada === index) {
      setPreguntaSeleccionada(null);
    } else {
      setPreguntaSeleccionada(index);
    }
  };

  return (
    <div className="max-w-3xl  mx-auto my-center bg-white  rounded-lg p-6">
      {preguntas.map((item, index) => (
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

export default PreguntasFrecuentes;
