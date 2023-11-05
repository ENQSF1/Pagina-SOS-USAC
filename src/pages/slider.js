import React from "react";
import Swip from "@/components/swip";
export default function slider() {
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
        "https://www.prensalibre.com/wp-content/uploads/2022/03/eleccionesUsac.jpeg?quality=52&w=760&h=430&crop=1",
      descripcion:
        "Planillas SOS Usac y Avante califican de ilegítima la elección de rector de la Usac y llaman a defender la autonomía universitaria ",
      enlace:
        "https://www.prensalibre.com/guatemala/politica/planillas-sos-usac-y-avante-califican-de-ilegitima-la-eleccion-de-rector-de-la-usac-y-llaman-a-defender-la-autonomia-universitaria-breaking/",
    },
    {
      imagen:
        "https://i0.wp.com/tvaztecaguate.com/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-14-at-9.50.56-AM.jpeg?resize=768%2C576&ssl=1",
      descripcion: "Walter Mazariegos es electo como nuevo rector de la USAC",
      enlace:
        "https://tvaztecaguate.com/guatemala-departamento/2022/05/14/walter-mazariegos-es-electo-como-nuevo-rector-de-la-usac/",
    },
    {
      imagen:
        "https://prensacomunitaria.org/wp-content/uploads/2022/05/DSC_2373.jpg",
      descripcion:
        "Con represión y detenciones arbitrarias imponen el fraude para rector",
      enlace:
        "https://prensacomunitaria.org/2022/05/con-represion-y-detenciones-arbitrarias-imponen-el-fraude-para-rector/",
    },
    {
      imagen:
        "https://prensacomunitaria.org/wp-content/uploads/2022/05/photo_2022-05-13_12-37-04-2.jpg",
      descripcion:
        "Entre rechazo de SOS USAC y Avante y acciones legales, CSU realizará elección de rector",
      enlace:
        "https://prensacomunitaria.org/2022/05/entre-rechazo-de-sos-usac-y-avante-y-acciones-legales-csu-realizara-eleccion-de-rector/",
    },
    {
      imagen:
        "https://prensacomunitaria.org/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-14-at-12.26.31-PM.jpeg",
      descripcion:
        "Con fraude se impone a Walter Mazariegos como rector de la USAC",
      enlace:
        "https://prensacomunitaria.org/2022/05/con-fraude-se-impone-a-walter-mazariegos-como-rector-de-la-usac/",
    },
    {
      imagen:
        "https://prensacomunitaria.org/wp-content/uploads/2022/06/photo_2022-06-27_17-39-04.jpg",
      descripcion:
        "Denuncian a Junta Directiva del Colegio de Médicos por no pronunciarse sobre exclusión de electores",
      enlace:
        "https://prensacomunitaria.org/2022/06/denuncian-a-junta-directiva-del-colegio-de-medicos-por-no-pronunciarse-sobre-exclusion-de-electores/",
    },
    {
      imagen:
        "https://prensacomunitaria.org/wp-content/uploads/2022/06/photo_2022-06-22_15-47-55-2.jpg",
      descripcion:
        "Denuncian a 20 miembros del Consejo Superior Universitario por nombramiento ilegal de Mazariegos",
      enlace:
        "https://prensacomunitaria.org/2022/06/denuncian-a-20-miembros-del-consejo-superior-universitario-por-nombramiento-ilegal-de-mazariegos/",
    },

    {
      imagen:
        "https://prensacomunitaria.org/wp-content/uploads/2022/06/be6c795e-69d4-4a13-a8c2-199272927536.jpg",
      descripcion:
        "SOS USAC denuncia criminalización y sabotaje contra el movimiento universitario",
      enlace:
        "https://prensacomunitaria.org/2022/06/sos-usac-denuncia-criminalizacion-y-sabotaje-contra-el-movimiento-universitario/",
    },
    {
      imagen:
        "https://prensacomunitaria.org/wp-content/uploads/2022/05/photo_2022-05-17_14-45-19.jpg",
      descripcion:
        "La CC da trámite a una apelación presentada por electores de SOS USAC",
      enlace:
        "https://prensacomunitaria.org/2022/05/la-cc-da-tramite-a-una-apelacion-presentada-por-electores-de-sos-usac/",
    },

    {
      imagen:
        "https://prensacomunitaria.org/wp-content/uploads/2022/04/photo_2022-04-28_13-29-46.jpg",
      descripcion:
        "Sos Usac denuncia penalmente a Gustavo Taracena, secretario general de la USAC",
      enlace:
        "https://prensacomunitaria.org/2022/04/sos-usac-denuncia-penalmente-a-gustavo-taracena-secretario-general-de-la-usac/",
    },
  ];
  return (
    <div className="w-4/5 mx-auto">
      <Swip arreglo={articulos} />
    </div>
  );
}
