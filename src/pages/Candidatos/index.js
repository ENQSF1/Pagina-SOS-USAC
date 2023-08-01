import Card from "@/components/Card";

export default function Index({ data }) {
  return (
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
    </div>
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
