import React from "react";
import { useState } from "react";
export default function xd() {
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
      pregunta: "3. ¿Cómo puedo adherirme a S.O.S INGENIERIA?",
      respuesta: "Respuesta 1",
    },
    {
      pregunta: "4. ¿Quiénes financian este Movimiento?",
      respuesta: "Respuesta 2",
    },
    {
      pregunta: "5. ¿Quiénes financian este Movimiento?",
      respuesta: "Respuesta 2",
    },
    {
      pregunta: "6. ¿Cómo puedo aportar al Movimiento?",
      respuesta:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit porro quod itaque, nam esse. Sequi ut totam quasi, eveniet saepe aliquid corrupti minus. Et nobis accusantium eius, explicabo beatae, quod exercitationem sit qui aspernatur magni maiores nemo recusandae reprehenderit! Nam architecto dolorum eligendi sed fugiat beatae deserunt molestiae praesentium. ",
    },
    {
      pregunta: "7. ¿Son un partido político?",
      respuesta: "Respuesta 2",
    },
    {
      pregunta: "5. ¿Son parte de la vieja política?",
      respuesta: "Respuesta 2",
    },
    {
      pregunta: "8. ¿Quién es su candidato ?",
      respuesta: "Respuesta 2",
    },
    {
      pregunta: "9. ¿Cuál es su plan de trabajo?",
      respuesta: "Respuesta 2",
    },
    {
      pregunta: "10.¿Cuáles son sus principios?",
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
    <div className="bg-red-800 min-h-screen">
      {preguntas.map((item, index) => (
        <>
          <div key={index}>
            <div onClick={() => toggleRespuesta(index)}>{item.pregunta}</div>
            {preguntaSeleccionada === index && (
              <div className="mt-2 text-gray-700 text-justify">
                {item.respuesta}
              </div>
            )}
            {/* {preguntaSeleccionada === index ? (
              <div>{item.respuesta}</div>
            ) : null} */}
          </div>
        </>
      ))}
    </div>
  );
}
