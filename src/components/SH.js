import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";

const SH = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center ">
        <div className="w-full md:w-1/4 flex items-center justify-center">
          <div>
            <img
              className="h-[150px] w-auto p-0"
              src="/images/generales/coti.webp"
              alt="Workflow"
            />
          </div>
        </div>
        <div className="w-full md:w-1/4 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center mb-4">
            <div className=" flex mb-4">
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

            <div className="flex justify-center">
              <a
                href="https://www.facebook.com/profile.php?id=100078927226794"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={30} className="mx-2" />
              </a>

              <FaInstagram size={30} className="mx-2" />
              <FaTwitter size={30} className="mx-2" />
              <TiSocialPinterest size={30} className="mx-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SH;
