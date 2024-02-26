import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";
import Link from "next/link";

const SH = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center flex-wrap  ">
        <div className="w-full md:w-1/4 flex items-center justify-center ">
          <div>
            <img
              className="h-[150px] w-auto p-0"
              src="/images/generales/savonne-2.webp"
              alt="Workflow"
            />
          </div>
        </div>
        <div className="w-full md:w-1/4 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center mb-4">
            <div className=" flex mb-4">
              <Link
                className=" w-1/2 justify-center mx-2 bg-gray-800 text-white py-2 px-2  hover:bg-gray-500 font-bold"
                href="/contactanos"
              >
                Contactanos
              </Link>

              <Link
                className=" w-1/2 justify-center mx-2 bg-gray-800 text-white py-2 px-6 hover:bg-gray-500 font-bold"
                href="/sumate"
              >
                Sumate
              </Link>
            </div>

            <div className="flex justify-center">
              <a
                href="https://www.facebook.com/profile.php?id=100078927226794"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={30} className="mx-2" />
              </a>
              <a
                href="https://twitter.com/sosusacgt?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={30} className="mx-2" />
              </a>
              <a
                href="https://www.instagram.com/sosusac/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={30} className="mx-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SH;
