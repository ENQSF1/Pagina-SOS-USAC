import React from "react";
import Link from "next/link";

const Card = ({ nombre, introduccion, link, image }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center m-2">
        <div className="w-full md:w-1/4 flex items-center justify-center">
          <div>
            <img className="h-[200px]  w-auto p-0" src={image} alt="Workflow" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center mb-4">
            <div className="flex mx-auto border-b-2 m-2 border-black">
              <h2 className="w-full justify-center text-3xl font-bold text-center p-2">
                {nombre}
              </h2>
            </div>

            <div className="flex justify-center">
              <p className="text-gray-800 text-lg text-justify mx-4">
                {introduccion}

                {link && (
                  <Link
                    className="text-blue-800 hover:text-red-500"
                    href={link}
                  >
                    (ver mas)
                  </Link>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
