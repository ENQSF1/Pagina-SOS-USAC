import React, { useState } from "react";
import { useEffect } from "react";
import Acordeon from "@/components/Acordeon";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";
export default function d() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://apimocha.com/sosusac/valores")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {/* <div>
        {data?.map((item) => (
          <div key={item.id}>
            <div className="bg-red-200">{item.titulo}</div>
            <div className="bg-red-400">{item.introduccion}</div>
            {item.cuerpo.split("\n\n").map((paragraph, index) => (
              <React.Fragment key={index}>
                <p className="bg-blue-300">{paragraph}</p> <br />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div> */}
      <div className=" w-full  bg-yellow-200 grid justify-center items-center text-center  md:grid-cols-4   ">
        <div className="bg-blue-800 md:col-start-2  ">
          <div className="flex items-center justify-center">
            <a
              className=" justify-center mx-2 bg-gray-800 text-white py-2 px-2  hover:bg-gray-500 "
              href="https://www.youtube.com/watch?v=0ZV2xXs6N5s&list=RDMMVLLyzqkH6cs&index=9"
            >
              contactanos
            </a>

            <a
              className=" justify-center mx-2 bg-gray-800 text-white py-2 px-6  hover:bg-gray-500"
              href="https://forms.gle/QviaauucC8YmkKgAA"
              target="_blank"
              rel="noopener noreferrer"
            >
              sumate
            </a>
          </div>
          <div className="bg-red-500 items-center justify-center flex ">
            <div className="bg-blue-200 grid grid-cols-4 justify-center items-center ">
              <a
                className="bg-red-200 "
                href="https://www.facebook.com/profile.php?id=100078927226794"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={30} className="mx-2 bg-green-200" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100078927226794"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={30} className="mx-2" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100078927226794"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiSocialPinterest size={30} className="mx-2" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100078927226794"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={30} className="mx-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-red-400  flex items-center justify-center   ">
          <img
            className="h-[150px] w-auto p-0"
            src="/images/generales/savonne-2.png"
            alt="Workflow"
          />
        </div>
      </div>
      <div className="bg-blue-400 flex items-center justify-center flex-col  md:flex-row    ">
        <div className="bg-blue-300 w-32 h-32">1</div>
        <div className="bg-blue-400  w-32 h-32">2</div>
        <div className="bg-blue-500 w-32 h-32">3</div>
        <div className="bg-blue-600 w-32 h-32">4</div>
        <div className="bg-blue-700 w-32 h-32">5</div>
        <div className="bg-blue-800 w-32 h-32">6</div>
      </div>

      <div className="bg-blue-500 w-1/2 mx-auto flex  flex-col md:flex-row">
        <div className="bg-red-200 w-full md:w-3/4">a</div>
        <div className="bg-red-400  w-full md:w-1/4">b</div>
      </div>
    </>
  );
}
