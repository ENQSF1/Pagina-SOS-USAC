// import { getItems } from "@/services/itemService";
import { getItems } from "../../../services/itemService";
import Card from "@/components/Card";

export default function Index({ items }) {
  return (
    <div>
      <div>
        {items &&
          items.map((item) => (
            <div key={item.id}>
              <Card
                nombre={item.nombre}
                introduccion={item.introduccion}
                link={`/Candidatos/${item.id}`}
                image={item.image}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await getItems();
  return {
    props: {
      items: res,
    },
  };
}
