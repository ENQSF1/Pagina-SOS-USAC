import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";
import Image from "next/image";

export default function b() {
  return (
    <>
      <div className="bg-blue-100 w-full h-full">
        {" "}
        <div></div>
        <div className="flex items-center justify-center flex-wrap">
          <div className="grid grid-cols-3 gap-4 text-center flex-wrap">
            <div className="bg-red-200">1fsdfffffffffffffffffffffffff</div>
            <div className="bg-red-300">2gggggggggggggggggggggggg</div>
            <div className="bg-red-400">3gggggggggggggggggg</div>
            <div className="bg-red-500">4ggggggggggggg</div>
            <div className="bg-red-600">5ggggggggggggg</div>
            <div className="bg-red-700">6ggggggggg</div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-3  bg-blue-500">
            <div className="w-16 h-16 bg-red-200">1</div>
            <div className="w-16 h-16 bg-red-300">2</div>
            <div className="w-16 h-16  bg-red-400">3</div>
            <div className=" w-16 h-16 bg-red-500">4</div>
            <div className="w-16 h-16 bg-red-600">5</div>
            <div className="w-16 h-16 bg-red-700">6</div>
          </div>
        </div>
        <div className="bg-red-800 w-20  h-20 mx-auto my-auto  ">centrame</div>
        <div className="flex bg-red-800 mx-auto items-center justify-center p-2 text-center">
          <div className=" bg-blue-200">centrame Lorem ipsum</div>
          <div className="  bg-blue-400">centrame Lorem ipsum dolor</div>
        </div>
        <div className="flex bg-red-800 mx-auto  justify-center items-center p-2 text-center">
          <div className="w-1/4 bg-blue-200">a</div>
          <div className="w-1/4  bg-blue-400">b</div>
        </div>
        <div className="grid grid-cols-2">
          <div className=" bg-blue-200">a</div>
          <div className="  bg-blue-400">b</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <img src="images/generales/savonne-2.png " alt="Imagen 1" />
        <img src="images/generales/savonne-2.png " alt="Imagen 1" />
        <img src="images/generales/savonne-2.png " alt="Imagen 1" />
        <img src="images/generales/savonne-2.png " alt="Imagen 1" />
        <img src="images/generales/savonne-2.png " alt="Imagen 1" />
        <img src="images/generales/savonne-2.png " alt="Imagen 1" />
        <img src="images/generales/savonne-2.png " alt="Imagen 1" />
        <img src="images/generales/savonne-2.png " alt="Imagen 1" />
        <img src="images/generales/savonne-2.png " alt="Imagen 1" />
      </div>
      <div className=" flex items-center justify-center ">
        <div className="grid grid-cols-3 ">
          <div className="w-32 h-32 bg-blue-300">xd</div>
          <div className="w-32 h-32 bg-blue-300">xd</div>
          <div className="w-32 h-32 bg-blue-300">xd</div>
          <div className="w-32 h-32 bg-blue-300">xd</div>
          <div className="w-32 h-32 bg-blue-300">xd</div>
          <div className="w-32 h-32 bg-blue-300">xd</div>
          <div className="w-32 h-32 bg-blue-300">xd</div>
          <div className="w-32 h-32 bg-blue-300">xd</div>
          <div className="w-32 h-32 bg-blue-300">xd</div>
        </div>
      </div>
      <div className="flex justify-center  items-center">
        <div className="grid justify-center items-center grid-cols-3 bg-red-200 gap-4  ">
          <Image
            src="/images/generales/savonne-2.png "
            alt="Descripción de la imagen"
            width={300}
            height={300}
          />
          <Image
            src="/images/generales/savonne-2.png "
            alt="Descripción de la imagen"
            width={300}
            height={300}
          />
          <Image
            src="/images/generales/savonne-2.png "
            alt="Descripción de la imagen"
            className="mx-auto"
            width={200}
            height={200}
          />
          <Image
            src="/images/generales/savonne-2.png "
            alt="Descripción de la imagen"
            width={300}
            height={300}
          />
          <Image
            src="/images/generales/savonne-2.png "
            alt="Descripción de la imagen"
            width={300}
            height={300}
          />
          <Image
            src="/images/generales/savonne-2.png "
            alt="Descripción de la imagen"
            width={300}
            height={300}
          />
          <Image
            src="/images/generales/savonne-2.png "
            alt="Descripción de la imagen"
            width={300}
            height={300}
          />
          <Image
            src="/images/generales/savonne-2.png "
            alt="Descripción de la imagen"
            width={300}
            height={300}
          />
          <Image
            src="/images/generales/savonne-2.png "
            alt="Descripción de la imagen"
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
}
