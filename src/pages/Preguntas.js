import React from "react";
import Ac from "@/components/acordeoon";
import Head from "next/head";

export default function Preguntas() {
  const preguntas = [
    {
      id: 1,
      pregunta: "¿Cómo puedo adherirme a S.O.S INGENIERIA?",
      respuesta: "Respuesta 1",
    },
    {
      id: 2,
      pregunta: "¿Quiénes financian este Movimiento?",
      respuesta: "Respuesta 2",
    },
    {
      id: 3,
      pregunta: "¿Cómo puedo adherirme a S.O.S INGENIERIA?",
      respuesta: "Respuesta 1",
    },
    {
      id: 4,
      pregunta: "¿Quiénes financian este Movimiento?",
      respuesta: "Respuesta 2",
    },
    {
      id: 5,
      pregunta: "¿Quiénes financian este Movimiento?",
      respuesta: "Respuesta 2",
    },
    {
      id: 6,
      pregunta: "¿Cómo puedo aportar al Movimiento?",
      respuesta:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit porro quod itaque, nam esse. Sequi ut totam quasi, eveniet saepe aliquid corrupti minus. Et nobis accusantium eius, explicabo beatae, quod exercitationem sit qui aspernatur magni maiores nemo recusandae reprehenderit! Nam architecto dolorum eligendi sed fugiat beatae deserunt molestiae praesentium. ",
    },
    {
      id: 7,
      pregunta: "¿Son un partido político?",
      respuesta: "Respuesta 2",
    },
    {
      id: 8,
      pregunta: "¿Son parte de la vieja política?",
      respuesta: "Respuesta 2",
    },
    {
      id: 9,
      pregunta: "¿Quién es su candidato ?",
      respuesta: "Respuesta 2",
    },
    {
      id: 10,
      pregunta: "¿Cuál es su plan de trabajo?",
      respuesta: "Respuesta 2",
    },
    {
      id: 11,
      pregunta: "¿Cuáles son sus principios?",
      respuesta: "Respuesta 2",
    },
  ];

  return (
    <>
      <Head>
        <title>S.O.S USAC || preguntas </title>
        <meta
          name="description"
          content="dudas o preguntas del movimiento S.O.S USAC"
        />
        <meta property="og:image" content="/images/generales/coti.webp" />
        <link rel="icon" href="/images/generales/cotiaro.ico" />
      </Head>
      <div className="min-h-screen ">
        <div className="max-w-3xl  mx-auto my-center bg-white  rounded-lg p-6 ">
          {preguntas.map((item, index) => (
            <Ac
              key={item.id}
              cuerpo={item.respuesta}
              encabezado={item.pregunta}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
