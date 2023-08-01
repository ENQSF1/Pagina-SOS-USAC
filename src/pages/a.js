import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";

export default function a() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className=" w-full  bg-yellow-200 grid justify-center items-center text-center  md:grid-cols-4   ">
          <div className="bg-green-300  ">a</div>

          <div className="bg-blue-800  md:col-start-2 ">
            <div className="bg-red-400">d</div>
            <div className="bg-red-400">d</div>
            <div className="bg-red-400">d</div>
            <div className="bg-red-400">d</div>
            <div className="grid grid-cols-2 ">
              <div className="m-2 bg-gray-600 p-2">boton1</div>
              <div className="m-2 bg-gray-600 p-2">boton2</div>
            </div>
            <div className="bg-red-500 items-center justify-center flex ">
              <div className="bg-blue-200 grid grid-cols-4 ">
                <a
                  href="https://www.facebook.com/profile.php?id=100078927226794"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={30} className="mx-2" />
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
              src="/images/coti.png"
              alt="Workflow"
            />
          </div>
          <div className="bg-green-400 ">d</div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab magni
        tempore perferendis ex explicabo, molestias, accusantium qui commodi
        nesciunt ratione quidem distinctio voluptatibus incidunt error! Quam
        debitis alias vel! Tempora repellendus, deserunt in illo blanditiis
        iusto. Quo sequi, labore distinctio numquam aliquid in dicta hic
        assumenda repudiandae suscipit, fugit ratione deserunt soluta dolores
        officia voluptatem nemo veritatis sint. Odit quidem quibusdam, quae
        debitis soluta dolorem iste mollitia eum tempore ea accusantium,
        voluptatibus quas fugit. Dolorum, eos. Aspernatur, sequi iste. Quo
        quaerat distinctio necessitatibus magnam non est alias commodi, dolor ab
        reprehenderit itaque architecto. Ducimus exercitationem reprehenderit,
        velit officia libero alias.
      </p>
      <div className="items-center justify-center flex">
        <div className="bg-red-800 text-white  grid grid-cols-3 gap-2 ">
          <div className="bg-blue-800 w-32 h-32 items-center justify-center flex ">
            1
          </div>
          <div className="bg-blue-800 w-32 h-32 items-center justify-center flex ">
            2
          </div>
          <div className="bg-blue-800 w-32 h-32 items-center justify-center flex ">
            3
          </div>
          <div className="bg-blue-800 w-32 h-32 items-center justify-center flex ">
            4
          </div>
          <div className="bg-blue-800 w-32 h-32 items-center justify-center flex ">
            5
          </div>
          <div className="bg-blue-800 w-32 h-32 items-center justify-center flex ">
            6
          </div>
          <div className="bg-blue-800 w-32 h-32 items-center justify-center flex ">
            7
          </div>
        </div>
      </div>
    </>
  );
}
