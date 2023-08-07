import React from "react";
import Head from "next/head";
export default function valores({ data }) {
  const paragraphs = data.cuerpo.split("\n\n");
  return (
    <>
      <Head>
        <title>S.O.S USAC || principios || {data.titulo}</title>
        <meta
          name="description"
          content={`Conoce los principios del movimiento S.O.S USAC: ${data.titulo}`}
        />

        <meta property="og:image" content="/images/generales/coti.webp" />
        <link rel="icon" href="/images/generales/cotiaro.ico" />
      </Head>
      <div className="min-h-screen w-4/5 mx-auto ">
        <h1
          className="text-center text-4xl m-4"
          style={{ textTransform: "uppercase" }}
        >
          <strong>
            <b>{data.titulo}</b>
          </strong>
        </h1>

        {paragraphs.map((paragraph, index) => (
          <React.Fragment key={index}>
            <p className="text-justify">{paragraph}</p> <br />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export async function getStaticPaths() {
  try {
    const res = await fetch("https://apimocha.com/sosusac/valores");
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
      "https://apimocha.com/sosusac/valores/" + params.id
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
