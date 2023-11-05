import React from "react";
import Ac from "@/components/acordeoon";
import Head from "next/head";

export default function Preguntas() {
  const preguntas = [
    {
      id: 1,
      pregunta: "¿Cómo puedo adherirme a S.O.S INGENIERIA?",
      respuesta:
        "Puedes llenar el formulario en Contactanos o Súmate para contactarte y agendar una reunión, conocernos y asistir a las diferentes actividades y jornadas de adhesión.",
    },
    {
      id: 2,
      pregunta: "¿Quiénes financian este Movimiento?",
      respuesta:
        "Fomentamos la financiación colaborativa, lo que implica que se sustenta a través de las contribuciones de sus miembros y seguidores, siempre con una total transparencia y visibilidad para el público en general. Creemos que la autonomía económica es esencial para garantizar la independencia política.",
    },
    {
      id: 3,
      pregunta: "¿Por qué hacen campaña anticipada?",
      respuesta:
        "Actualmente hacemos campañas para invitar a más personas a unirse y apoyar nuestra causa.",
    },
    {
      id: 4,
      pregunta: "¿Cuáles son sus principios?",
      respuesta:
        "Tenemos 4 principios fundamentales en los cuales S.O.S INGENIERIA se basa:etica,transparencia,sostenibilidad y etica",
    },
    {
      id: 5,
      pregunta: "¿Cuál es su ideología?",
      respuesta:
        "Nuestra ideología,se centra en impulsar tecnologías innovadoras para mejorar la vida de las personas en desventaja, promoviendo la investigación, la colaboración entre academia e industria, y una formación científica sólida para futuros ingenieros y científicos. Buscamos liderar la generación de soluciones tecnológicas con un impacto social positivo en Guatemala, fomentando la excelencia académica y comprometiéndonos a utilizar la tecnología como motor de progreso y bienestar en la sociedad.",
    },
    {
      id: 6,
      pregunta: "¿Cómo puedo aportar al Movimiento?",
      respuesta:
        "Tu puedes hacer contribuciones valiosas al Movimiento.Tu apoyo puede manifestarse a través del voluntariado, la difusión en redes sociales, la participación activa en debates y reuniones,la movilización de personas para unirse al Movimiento, y la provisión de recursos o servicios no monetarios como espacios para reuniones, transporte, materiales, o cualquier otro tipo de ayuda.Tu participación activa y compromiso son fundamentales para impulsar los objetivos del Movimiento político.",
    },
    {
      id: 7,
      pregunta: "¿Son un partido político?",
      respuesta:
        "No,somos estudiantes, profesores, egresados y personal de facultades, escuelas no facultativas y centros Universitarios de la Universidad de San Carlos de Guatemala.",
    },
    {
      id: 8,
      pregunta: "¿Quién es su candidato?",
      respuesta:
        "La eleccion del candidato final por parte de S.O.S USAC INGENIERIA para el decanato de ingenieria al igual que en la eleccion a Rector se basa en una unica eleccion democratica interna en donde por parte de los electores y miembros del movimiento se emite un voto para escoger  de entre nuestros precandidatos asegurando asi la transparencia y la democracia en dicho proceso.",
    },
  ];

  return (
    <>
      <Head>
        <title>S.O.S USAC INGENIERIA || preguntas </title>
        <meta
          name="description"
          content="dudas o preguntas del movimiento S.O.S USAC"
        />
        <meta property="og:image" content="/images/generales/coti.webp" />
        <link rel="icon" href="/images/generales/cotiaro.ico" />
      </Head>
      <div className="min-h-screen ">
        <div className="max-w-3xl  mx-auto my-center  rounded-lg p-6 ">
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
