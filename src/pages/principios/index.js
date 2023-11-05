import React from "react";
import Ac from "@/components/acordeoon";
import Head from "next/head";

export default function index({ data }) {
  return (
    <>
      <Head>
        <title>S.O.S USAC INGENIERIA|| principios </title>
        <meta
          name="description"
          content="Conoce los principios del movimiento S.O.S USAC"
        />
        <meta property="og:image" content="/images/generales/coti.webp" />
        <link rel="icon" href="/images/generales/cotiaro.ico" />
      </Head>

      <div className="min-h-screen mx-auto w-8/10 md:w-6/10 ">
        <h1 className="text-center text-4xl m-4">
          <strong>
            <b>PRINCIPIOS</b>
          </strong>
        </h1>
        <p className=" text-justify  ">
          El Movimiento SOS USAC, una coalición formada por profesionales,
          docentes y estudiantes universitarios, tiene como objetivo transformar
          la Universidad de San Carlos de Guatemala hacia una institución más
          ética, transparente y participativa. Conscientes del desafío que
          representa la corrupción, su enfoque se centra en promover una gestión
          pública transparente y libre de prácticas clientelares. Su compromiso
          es fortalecer la democracia universitaria a través de una
          participación activa y responsable de todos los miembros de la
          comunidad académica. Buscan forjar una alianza que priorice el
          bienestar colectivo y el desarrollo sostenible. Con énfasis en la
          inclusión y el respeto a los derechos humanos, el Movimiento se
          posiciona como una fuerza transformadora para lograr una universidad
          que contribuya positivamente al país y a sus ciudadanos. En este
          momento trascendental, su lucha se enfoca en impulsar cambios
          significativos que beneficien a toda la sociedad guatemalteca.
          <br />
          <br />
          Movimiento S.O.S USAC basa su pensamiento en cinco principios
          fundamentales:
        </p>
        <div className="w-full mt-6 ">
          {data?.map((item, index) => (
            <Ac
              key={item.id}
              cuerpo={item.introduccion}
              encabezado={item.titulo}
              index={index}
              link={`/principios/${item.id}`}
              use={"nav"}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://apimocha.com/sosusac/valores");
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
