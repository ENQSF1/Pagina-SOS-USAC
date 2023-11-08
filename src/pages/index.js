import React from "react";
import Slider from "@/components/Slider";
import Head from "next/head";
import Galeria from "@/components/Gallery";
import Swip from "@/components/swip";

export default function index() {
  const sos = [
    {
      imagen: "/images/sos/1.webp",
      descripcion: "Premio Excelencia Profesor Postgrado 2020",
    },
    {
      imagen: "/images/sos/2.webp",
      descripcion: "Ponencia 4S/ESOCITE 2022, Cholula México",
    },
    {
      imagen: "/images/sos/3.webp",
      descripcion: "Ponencia 4S/ESOCITE 2022, Cholula México",
    },
    {
      imagen: "/images/sos/4.webp",
      descripcion:
        "Delegado investigación FIUSAC, Universidad de Costa Rica, 2019",
    },
    {
      imagen: "/images/sos/5.webp",
      descripcion:
        "Taller, Lorentz Center, Universidad de Leiden, Países Bajos, 2019",
    },
    {
      imagen: "/images/sos/6.webp",
      descripcion:
        "Investigación en membranas, Universidad de Génova, Italia, 2005",
    },
    {
      imagen: "/images/sos/7.webp",
      descripcion:
        "Equipo de Investigación, Empresa AMGA, Génova, Italia, 2006",
    },
    {
      imagen: "/images/sos/8.webp",
      descripcion: "Jornadas Esocite, 2018, Santiago de Chile",
    },
    {
      imagen: "/images/sos/9.webp",
      descripcion:
        "Conferencia Undisciplined Environments, Estocolmo, Suecia, 2016",
    },
    {
      imagen: "/images/sos/10.webp",
      descripcion:
        "Conferencia Undisciplined Environments, Estocolmo, Suecia, 2016",
    },
    {
      imagen: "/images/sos/11.webp",
      descripcion:
        "Conferencia Undisciplined Environments, Estocolmo, Suecia, 2016",
    },
    {
      imagen: "/images/sos/12.webp",
      descripcion:
        "Conferencia Undisciplined Environments, Estocolmo, Suecia, 2016",
    },
  ];

  const articulos = [
    {
      imagen:
        "https://prensacomunitaria.org/wp-content/uploads/2022/04/photo_2022-04-06-07.39.38.jpeg",
      descripcion: "El ABC de las elecciones en la USAC",
      enlace:
        "https://prensacomunitaria.org/2022/04/el-abc-de-las-elecciones-en-la-usac/",
    },
    {
      imagen:
        "https://pbs.twimg.com/ext_tw_video_thumb/1316847014387294209/pu/img/QqwW8eNyLj4c6JwE.jpg",
      descripcion: "SOS USAC: ¡claro que se vale soñar!,articulo de Vox Populi",
      enlace:
        "https://voxpopuliguate.com/sos-usac-claro-que-se-vale-sonar%EF%BF%BC/",
    },
    {
      imagen:
        "https://yt3.googleusercontent.com/fEYKmXAzivDwya0fi2E92t7se2DmgbjJneMFC_Mb8by2Xd_XkhgS7nLjGBiR8IFP-XO2y2e2=s900-c-k-c0x00ffffff-no-rj",
      descripcion:
        "analisis de la propuesta de SOS Usac,articulo de plaza publica",
      enlace: "https://www.plazapublica.com.gt/content/sos-usac",
    },
    {
      imagen:
        "https://prensacomunitaria.org/wp-content/uploads/2022/04/photo_2022-04-08_16-31-49.jpg",
      descripcion:
        "Elecciones a rector: SOS-USAC definirá candidato oficial en las próximas horas",
      enlace:
        "https://prensacomunitaria.org/2022/04/elecciones-a-rector-sos-usac-definira-candidato-oficial-en-las-proximas-horas/",
    },
    {
      imagen:
        "https://prensacomunitaria.org/wp-content/uploads/2022/04/photo_2022-04-06_16-10-20.jpg",
      descripcion: "Voto útil definirá las elecciones a Rector de la USAC",
      enlace:
        "https://prensacomunitaria.org/2022/04/voto-util-definira-las-elecciones-a-rector-de-la-usac/",
    },
    {
      imagen:
        "https://www.prensa-latina.cu/wp-content/uploads/2022/03/Universidad-San-Carlos-Guatemala-1.jpg",
      descripcion:
        "SOS Usac despunta en elección de rector para universidad guatemalteca",
      enlace:
        "https://www.prensa-latina.cu/2022/03/31/sos-usac-despunta-en-eleccion-de-rector-para-universidad-guatemalteca",
    },
    {
      imagen:
        "http://regionmas.com/uploads/blog/agrupacin-s-o-s--hace-oficial-candidatura-de-jordn-rodas-como-rector-de-la-usac.png?1649799060",
      descripcion:
        "Agrupación S.O.S. hace oficial candidatura de Jordán Rodas como rector de la Usac",
      enlace:
        "http://regionmas.com/blog/post/agrupacin-s-o-s--hace-oficial-candidatura-de-jordn-rodas-como-rector-de-la-usac",
    },
  ];

  return (
    <>
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-eu1.hs-scripts.com/143567147.js"
      ></script>

      <Head>
        <title>S.O.S USAC INGENIERIA</title>
        <meta name="description" content="S.O.S USAC" />
        <meta property="og:image" content="/images/generales/coti.webp" />
        <link rel="icon" href="/images/generales/cotiaro.ico" />
      </Head>
      <div className="min-h-screen ">
        <Slider />
        <p className="text-center mt-8  text-xl">
          <strong>
            <b>MISION</b>
          </strong>
        </p>
        <p className="my-8 text-center w-6/10 mx-auto  ">
          Impulsar tecnologías innovadoras para mejorar la vida de personas en
          desventaja. Fomentamos la investigación y colaboración entre academia
          e industria, priorizando proyectos de impacto social. Además,
          fortalecemos la formación científica para preparar a futuros
          ingenieros y científicos para los desafíos del mañana.
        </p>
        <p className="text-center   text-xl">
          <strong>
            <b>VISION</b>
          </strong>
        </p>
        <p className="my-8 text-center w-6/10 mx-auto  ">
          Liderar la generación de soluciones tecnológicas que mejoren la
          calidad de vida en Guatemala. Buscamos ser un referente en
          investigación con impacto social, promoviendo la colaboración y la
          excelencia académica a nivel nacional e internacional. Nos esforzamos
          por formar profesionales comprometidos con el progreso y el bienestar
          de la sociedad.
        </p>
        <p className="text-center text-xl">
          <strong>
            {" "}
            <b>¿QUIÉNES SOMOS?</b>{" "}
          </strong>
        </p>
        <p className=" my-8 text-center w-6/10 mx-auto ">
          Somos estudiantes, profesores, egresados y personal de facultades,
          escuelas no facultativas y centros Universitarios de la Universidad de
          San Carlos de Guatemala
        </p>
        <p className="text-center text-xl">
          <strong>
            <b>¿QUE NOS MOTIVA?</b>
          </strong>
        </p>
        <p className="my-8 text-center w-6/10 mx-auto  ">
          Educación universitaria pública. la transparencia, las buenas
          prácticas administrativas y financieras para promover una educación
          humana y científica para el desarrollo integral y sostenible de
          Guatemala.
        </p>

        <p className="text-center text-4xl my-8">
          <strong>
            <b>CONOCE MAS SOBRE SOS USAC</b>
          </strong>
        </p>
        <div className=" w-full p-8 bg-gray-800 mx-auto ">
          <Swip className="w-8/10" arreglo={articulos} />
        </div>
        <p className="text-center text-4xl m-8">
          <strong>
            <b>10 PASOS PARA RESCATAR LA USAC</b>
          </strong>
        </p>
        <Galeria imagenes={sos} width={"600"} height={"600"} />
      </div>
      <div className="min-h-screen ">
        <Slider />
        <p className="text-center mt-8  text-xl">
          <strong>
            <b>MISION</b>
          </strong>
        </p>
        <p className="my-8 text-center w-6/10 mx-auto  ">
          Impulsar tecnologías innovadoras para mejorar la vida de personas en
          desventaja. Fomentamos la investigación y colaboración entre academia
          e industria, priorizando proyectos de impacto social. Además,
          fortalecemos la formación científica para preparar a futuros
          ingenieros y científicos para los desafíos del mañana.
        </p>
        <p className="text-center   text-xl">
          <strong>
            <b>VISION</b>
          </strong>
        </p>
        <p className="my-8 text-center w-6/10 mx-auto  ">
          Liderar la generación de soluciones tecnológicas que mejoren la
          calidad de vida en Guatemala. Buscamos ser un referente en
          investigación con impacto social, promoviendo la colaboración y la
          excelencia académica a nivel nacional e internacional. Nos esforzamos
          por formar profesionales comprometidos con el progreso y el bienestar
          de la sociedad.
        </p>
        <p className="text-center text-xl">
          <strong>
            {" "}
            <b>¿QUIÉNES SOMOS?</b>{" "}
          </strong>
        </p>
        <p className=" my-8 text-center w-6/10 mx-auto ">
          Somos estudiantes, profesores, egresados y personal de facultades,
          escuelas no facultativas y centros Universitarios de la Universidad de
          San Carlos de Guatemala
        </p>
        <p className="text-center text-xl">
          <strong>
            <b>¿QUE NOS MOTIVA?</b>
          </strong>
        </p>
        <p className="my-8 text-center w-6/10 mx-auto  ">
          Educación universitaria pública. la transparencia, las buenas
          prácticas administrativas y financieras para promover una educación
          humana y científica para el desarrollo integral y sostenible de
          Guatemala.
        </p>

        <p className="text-center text-4xl my-8">
          <strong>
            <b>CONOCE MAS SOBRE SOS USAC</b>
          </strong>
        </p>
        <div className=" w-full p-8 bg-gray-800 mx-auto ">
          <Swip className="w-8/10" arreglo={articulos} />
        </div>
        <p className="text-center text-4xl m-8">
          <strong>
            <b>10 PASOS PARA RESCATAR LA USAC</b>
          </strong>
        </p>
        <Galeria imagenes={sos} width={"600"} height={"600"} />
      </div>
    </>
  );
}
