import Card from "@/components/Card";
import Galeria from "@/components/Gallery";
import { useState } from "react";
import Head from "next/head";
import React from "react";
export default function ProductPage({ data }) {
  const paragraphs = data.descripcion.split("\n\n");
  const [perro, SetPerro] = useState([
    {
      imagen: "/images/renato/1.webp",
      descripcion: "Premio Excelencia Profesor Postgrado 2020",
    },
    {
      imagen: "/images/renato/2.webp",
      descripcion: "Ponencia 4S/ESOCITE 2022, Cholula México",
    },
    {
      imagen: "/images/renato/3.webp",
      descripcion: "Ponencia 4S/ESOCITE 2022, Cholula México",
    },
    {
      imagen: "/images/renato/4.webp",
      descripcion:
        "Delegado investigación FIUSAC, Universidad de Costa Rica, 2019",
    },
    {
      imagen: "/images/renato/5.webp",
      descripcion:
        "Taller, Lorentz Center, Universidad de Leiden, Países Bajos, 2019",
    },
    {
      imagen: "/images/renato/6.webp",
      descripcion:
        "Investigación en membranas, Universidad de Génova, Italia, 2005",
    },
    {
      imagen: "/images/renato/7.webp",
      descripcion:
        "Equipo de Investigación, Empresa AMGA, Génova, Italia, 2006",
    },
    {
      imagen: "/images/renato/8.webp",
      descripcion: "Jornadas Esocite, 2018, Santiago de Chile",
    },
    {
      imagen: "/images/renato/9.webp",
      descripcion:
        "Conferencia Undisciplined Environments, Estocolmo, Suecia, 2016",
    },
  ]);

  return (
    <>
      <Head>
        <title>S.O.S USAC || candidatos || {data.nombre}</title>
        <meta
          name="description"
          content={`Conoce los candidatos del movimiento S.O.S USAC: ${data.nombre}`}
        />
        <meta property="og:image" content="/images/generales/coti.webp" />
        <link rel="icon" href="/images/generales/cotiaro.ico" />
      </Head>
      <div className="min-h-screen ">
        <div className="flex justify-center items-center ">
          <div className="w-4/5 ">
            <Card
              nombre={data.nombre}
              introduccion={data.introduccion}
              image={data.image}
            />
            <div className="w-full mx-auto">
              {paragraphs.map((paragraph, index) => (
                <React.Fragment key={index}>
                  <p className="p-2 text-justify">{paragraph}</p>
                </React.Fragment>
              ))}
            </div>
            <Galeria imagenes={perro} width={"100%"} height={"auto"} />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  try {
    const res = await fetch(
      "https://pagina-sos-usac.vercel.app/api/candidatos"
    );
    const data = await res.json();
    const paths = data.map(({ id }) => ({ params: { id: `${id}` } }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      "https://pagina-sos-usac.vercel.app/api/candidatos/" + params.id
    );
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
