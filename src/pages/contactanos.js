import React from "react";
import Head from "next/head";
import { TbPointer } from "react-icons/tb";
export default function contactanos() {
  return (
    <>
      <Head>
        <title>S.O.S USAC INGENIERIA || CONTACTANOS</title>
        <meta name="description" content="CONTACTA CON S.O.S USAC INGENIERIA" />
        <meta property="og:image" content="/images/generales/coti.webp" />
        <link rel="icon" href="/images/generales/cotiaro.ico" />
      </Head>
      <div className="min-h-screen mx-auto w-8/10 md:w-6/10 ">
        <h1 className="text-center text-4xl m-4">
          <strong>
            <b>CONTACTANOS</b>
          </strong>
        </h1>
        <p className=" min-h-screen  text-justify ">
          Compañeros y compañeras estudiantes,docentes y profesionales de la
          comunidad universitaria de la Universidad de San Carlos de
          Guatemala.Hoy nos encontramos aquí para debatir uno de los pilares
          fundamentales de nuestra institución: la elección del próximo Decano
          de la Facultad de Ingeniería. Es un momento crucial en el que debemos
          reflexionar sobre el futuro de nuestra facultad y, en última
          instancia, de nuestra querida universidad. <br />
          <br />
          Como movimiento SOS USAC, representamos a profesionales, docentes y
          estudiantes comprometidos con el bienestar y el progreso de nuestra
          alma mater. Reconocemos la importancia de esta universidad pública
          como pilar educativo en nuestro país, y estamos decididos a marcar la
          diferencia para que esta institución retome el rumbo a lo que
          historiacamente ha sido : un faro de excelencia académica y ética.
          <br />
          <br />
          Es por eso que hoy queremos invitarlos a unirnos en un nuevo camino,
          un camino que abra las puertas a la transparencia y la participación
          de todos los miembros de nuestra comunidad universitaria en el proceso
          electoral. <br />
          <br />
          Queremos fomentar una convocatoria abierta y transparente para elegir
          a nuestros representantes, para que todos tengan la oportunidad de
          postularse y ser electores sin ningún tipo de manipulación indebida.
          Queremos que cada voto sea un reflejo genuino de la voluntad de los
          miembros de esta comunidad, sin presiones ni interferencias externas.{" "}
          <br />
          <br />
          Invitamos a cada uno de ustedes, estudiantes, docentes y
          profesionales, a sumarse a este llamado a la participación activa y
          honesta en el proceso electoral de la Facultad de Ingeniería. Juntos,
          podemos marcar un precedente significativo en la historia de nuestra
          universidad, demostrando que estamos comprometidos con la excelencia,
          la integridad y el bienestar común. <br />
          <br />
          Nuestra visión es una universidad que brinde una educación de calidad,
          que promueva la investigación, el desarrollo y el compromiso con los
          desafíos de nuestra sociedad. Una universidad que nos enorgullezca
          como guatemaltecos y guatemaltecas. <br />
          <br />
          Hagamos que nuestra voz sea escuchada, no solo en esta elección, sino
          en cada rincón de nuestra institución. Recordemos que la Universidad
          de San Carlos de Guatemala es una universidad del pueblo y para el
          pueblo, y juntos debemos defender su legado y futuro. <br />
          <br />
          ¡Unámonos en este propósito, seamos la diferencia que necesitamos!{" "}
          <br />
          <br />
          ¡Viva la Universidad de San Carlos de Guatemala! <br />
          <br />
          ¡Viva la comunidad universitaria comprometida! <br />
          <br />
          ¡Viva SOS USAC!
        </p>
      </div>
      <div className=" w-48 m-8 text-center mx-auto bg-gray-800 text-white py-2 px-6 hover:bg-gray-500 font-bold">
        <a href="">
          Llena el formulario para contactarnos contigo!!!
          <TbPointer className="mx-auto text-xl" />
        </a>
      </div>
    </>
  );
}
