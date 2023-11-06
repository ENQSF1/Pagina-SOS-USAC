import Card from "@/components/Card";
import Head from "next/head";

export default function Index({ data }) {
  return (
    <>
      {" "}
      <Head>
        <title>S.O.S USAC INGENIERIA || candidatos </title>
        <meta
          name="description"
          content="Conoce a los candidatos del movimiento S.O.S USAC"
        />
        <meta property="og:image" content="/images/generales/coti.webp" />
        <link rel="icon" href="/images/generales/cotiaro.ico" />
      </Head>
      <div className="min-h-screen ">
        <h1 className="text-center text-4xl m-4">
          <strong>
            <b>PRECANDIDATOS</b>
          </strong>
        </h1>
        <div>
          {data?.map((item) => (
            <Card
              key={item.id}
              nombre={item.nombre}
              introduccion={item.introduccion}
              image={item.image}
              link={`/Candidatos/${item.id}`}
            />
          ))}
        </div>
      </div>{" "}
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://pagina-sos-usac.vercel.app/api/avo");
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
