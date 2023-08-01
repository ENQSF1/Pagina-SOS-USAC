import React, { useState, useEffect } from "react";

export default function post() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://apimocha.com/sosusac/candidatos")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
  console.log("daff");
  return (
    <>
      {data?.map((item) => (
        <div key={item.id} className="grid grid-cols-2 items-center">
          <div className="bg-red-100 m-2"> {item.nombre}</div>
          <div className="bg-blue-200 m-2">{item.introduccion}</div>
        </div>
      ))}
    </>
  );
}
