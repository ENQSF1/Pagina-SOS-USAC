import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";

export default function c() {
  {
    /*           solo le quite el w-1/2 al segundo de abajo*/
  }
  return (
    <>
      <div className="flex bg-red-800 flex-col  md:flex-row items-center justify-center p-2 text-center">
        <div className="sm:w-full md:w-1/4 bg-blue-200 items-center justify-center  flex ">
          <img
            src="images/generales/savonne-2.webp"
            className="h-[150px] "
            alt="xd"
          />
        </div>
        <div className="sm:w-full md:w-1/4 justify-center items-center bg-blue-400">
          <div className="flex justify-center items-center bg-gray-500">
            <div className=" flex  justify-center items-center">
              <a
                className=" w-1/2 justify-center mx-2 bg-gray-800 text-white py-2 px-2  hover:bg-gray-500 "
                href="https://www.youtube.com/watch?v=0ZV2xXs6N5s&list=RDMMVLLyzqkH6cs&index=9"
              >
                contactanos
              </a>

              <a
                className=" w-1/2 justify-center mx-2 bg-gray-800 text-white py-2 px-6  hover:bg-gray-500"
                href="https://forms.gle/QviaauucC8YmkKgAA"
                target="_blank"
                rel="noopener noreferrer"
              >
                sumate
              </a>
            </div>
          </div>
          <div className=" bg-green-800 flex justify-center ">
            <FaInstagram size={30} className="mx-2" />
            <FaTwitter size={30} className="mx-2" />
            <TiSocialPinterest size={30} className="mx-2" />
            <TiSocialPinterest size={30} className="mx-2" />
          </div>
        </div>
      </div>

      {/* fsdfsdfsdfsdfsdfsfsdfsdfsdfsdf */}

      <div className="flex bg-red-800 flex-col  md:flex-row items-center justify-center p-2 text-center">
        <div className="sm:w-full md:w-1/4 bg-blue-200 items-center justify-center  flex ">
          <img
            src="images/generales/savonne-2.png "
            className="h-[150px] "
            alt="xd"
          />
        </div>
        <div className="sm:w-full md:w-1/4 justify-center items-center bg-blue-400">
          <div className="flex justify-center items-center bg-gray-500">
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
          <div className=" bg-green-800 flex justify-center ">
            <FaInstagram size={30} className="mx-2" />
            <FaTwitter size={30} className="mx-2" />
            <TiSocialPinterest size={30} className="mx-2" />
            <TiSocialPinterest size={30} className="mx-2" />
          </div>
        </div>
      </div>

      {/* tercero */}

      <div className="flex bg-red-800 flex-col  md:flex-row items-center justify-center p-2 text-center">
        <div className="sm:w-full md:w-1/4 bg-blue-200 items-center justify-center  flex ">
          <img
            src="images/generales/savonne-2.png "
            className="h-[150px] "
            alt="xd"
          />
        </div>
        <div className="sm:w-full md:w-1/4 justify-center items-center bg-blue-400">
          <div className="flex justify-center items-center bg-gray-500">
            <div className=" w-1/2 bg-red-200">
              <a
                className=" justify-center mx-2 bg-gray-800 text-white py-2 px-2  hover:bg-gray-500 "
                href="https://www.youtube.com/watch?v=0ZV2xXs6N5s&list=RDMMVLLyzqkH6cs&index=9"
              >
                contactanos
              </a>
            </div>
            <div className=" w-1/2 bg-red-200">
              <a
                className=" justify-center mx-2 bg-gray-800 text-white py-2 px-6  hover:bg-gray-500"
                href="https://forms.gle/QviaauucC8YmkKgAA"
                target="_blank"
                rel="noopener noreferrer"
              >
                sumate
              </a>
            </div>
          </div>
          <div className=" bg-green-800 flex justify-center ">
            <FaInstagram size={30} className="mx-2" />
            <FaTwitter size={30} className="mx-2" />
            <TiSocialPinterest size={30} className="mx-2" />
            <TiSocialPinterest size={30} className="mx-2" />
          </div>
        </div>
      </div>
    </>
  );
}
