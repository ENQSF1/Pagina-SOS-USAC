import { getItemData, getPathsFromIds } from "@/components/lib/utils";
import Card from "@/components/Card";
import Galeria from "@/components/Gallery";
import { useState } from "react";

export default function ProductPage({ productInfo }) {
  const [perro, SetPerro] = useState([
    "/images/renato/1.webp",
    "/images/renato/2.webp",
    "/images/renato/3.webp",
    "/images/renato/4.webp",
    "/images/renato/5.webp",
    "/images/renato/6.webp",
    "/images/renato/7.webp",
    "/images/renato/8.webp",
    "/images/renato/9.webp",
  ]);

  return (
    <div className="flex justify-center items-center ">
      <div className="w-4/5 ">
        <Card
          nombre={productInfo.data.nombre}
          introduccion={productInfo.data.introduccion}
          image={productInfo.data.image}
        />
        <div className="w-full mx-auto">
          <p className="p-2 text-justify">{productInfo.data.descripcion}</p>
        </div>
        <Galeria imagenes={perro} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await getPathsFromIds();
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const product = await getItemData(id);
  return {
    props: {
      productInfo: product,
    },
  };
}
