import React from "react";
import Slider from "@/components/Slider";
import Head from "next/head";
import Galeria from "@/components/Gallery";
export default function index() {
  const sos = [
    "/images/sos/1.webp",
    "/images/sos/2.webp",
    "/images/sos/3.webp",
    "/images/sos/4.webp",
    "/images/sos/5.webp",
    "/images/sos/6.webp",
    "/images/sos/7.webp",
    "/images/sos/8.webp",
    "/images/sos/9.webp",
    "/images/sos/10.webp",
    "/images/sos/11.webp",
    "/images/sos/12.webp",
  ];

  return (
    <>
      <Head>
        <title>S.O.S USAC </title>
        <meta name="description" content="S.O.S USAC" />
        <meta property="og:image" content="/images/generales/coti.webp" />
        <link rel="icon" href="/images/generales/cotiaro.ico" />
      </Head>
      <div className="min-h-screen ">
        <Slider />
        <p className="text-center mt-4 text-xl">
          <strong>
            {" "}
            <b>¿QUIÉNES SOMOS?</b>{" "}
          </strong>
        </p>
        <p className=" w-full px-10 mx-auto my-8 text-center ">
          Somos estudiantes, profesores, egresados y personal, facultades,
          escuelas no facultativas y centros Universitarios de la Universidad de
          San Carlos de Guatemala.
        </p>
        <p className="text-center text-xl">
          <strong>
            {" "}
            <b>¿QUE NOS MOTIVA?</b>
          </strong>
        </p>
        <p className=" w-full px-10 mx-auto my-8 text-center ">
          Educación universitaria pública. la transparencia, las buenas
          prácticas administrativas y financieras para promover una educación
          humana y científica para el desarrollo integral y sostenible de
          Guatemala.
        </p>
        <Galeria imagenes={sos} width={"400"} height={"400"} />
      </div>
    </>
  );
}
