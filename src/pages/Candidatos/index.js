import Card from "@/components/Card";
import Head from "next/head";

export default function Index({ data }) {
  return (
    <>
      {" "}
      <Head>
        <title>S.O.S USAC || candidatos </title>
        <meta
          name="description"
          content="Conoce a los candidatos del movimiento S.O.S USAC"
        />
        <meta property="og:image" content="/images/generales/coti.webp" />
        <link rel="icon" href="/images/generales/cotiaro.ico" />
      </Head>
      <div className="min-h-screen ">
        <div>
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
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://apimocha.com/sosusac/candidatos");
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
