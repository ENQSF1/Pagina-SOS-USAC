import React from "react";
import SH from "@/components/SH";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";
import Link from "next/link";
import { FacebookProvider, Page } from "react-facebook";
export default function e() {
  return (
    <>
      <div className="min-h-screen w-4/5 bg-blue-200 mx-auto ">
        <div className="flex justify-around ">
          <div className="w-3/5">
            <p className="text-justify   ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              temporibus molestias veniam architecto excepturi doloribus ad.
              Veritatis nihil modi vitae aut, quaerat est quis nulla assumenda
              unde quia esse saepe sit dolore quidem et natus laudantium sunt
              doloremque ratione odit, dolorem enim exercitationem. Quis rem
              reprehenderit, vero tempore maiores non. Enim quis aut
              voluptatibus labore, explicabo dolorem officiis laudantium magnam
              possimus! Atque sequi voluptatibus doloribus quas, error laborum
              minus voluptas ducimus illum debitis, officia placeat eius,
              pariatur dignissimos odit? Porro magni cumque architecto dolore
              laborum dicta, reiciendis possimus. Enim molestias, asperiores
              doloremque ab, assumenda temporibus velit, molestiae dolore rerum
              cupiditate cum. Iste exercitationem fuga nulla omnis, sunt
              cupiditate, modi quasi a, quo quia ratione necessitatibus
              doloremque eveniet mollitia natus. Saepe at eligendi officiis
              officia eveniet iste dolore cupiditate architecto nobis! Ducimus
              asperiores quis minus at neque fuga incidunt blanditiis maiores
              esse magnam animi debitis tempore maxime doloremque, sint
              perferendis rem, officia eaque accusamus modi! Quasi possimus sunt
              ducimus labore quibusdam necessitatibus quis commodi at,
              asperiores distinctio perspiciatis, facere vel laudantium
              delectus. Deserunt accusantium itaque assumenda libero aliquam non
              repellat qui facilis voluptate dolorem, nulla enim eum. Corporis,
              temporibus. Quos aperiam tempora deserunt quam reprehenderit
              assumenda est. Maiores veritatis, nulla delectus reiciendis omnis
              quis minus possimus ratione. Harum libero facilis debitis nam
              explicabo reprehenderit hic, quos quia ducimus, sed quam? Iste,
              corrupti? Velit, ad officia eum fugit qui ipsum, saepe earum animi
              quia repellendus quasi veritatis. Libero at fugit voluptatem
              voluptas, odit corporis quidem! Ratione nostrum dolorum
              exercitationem consectetur sapiente, blanditiis sequi, facere
              incidunt quia modi, molestiae dolorem repellendus obcaecati maxime
              itaque sed fuga at perspiciatis corporis corrupti dicta illo!
              Perspiciatis earum fuga ad accusamus consectetur cumque corrupti,
              nam est autem repudiandae vel animi ipsum consequatur, molestias
              temporibus. Quos corporis consequuntur magnam pariatur at alias
              quis quo. Dolore dignissimos earum consectetur ea sit, delectus
              ullam. Placeat magni ducimus officiis harum debitis, itaque ipsam
              incidunt ab qui pariatur repudiandae alias animi odit saepe
              consectetur perferendis. Est quasi quisquam harum officia nesciunt
              recusandae, rem delectus quam perferendis nobis explicabo
              voluptatum aut! Deleniti amet quam illum obcaecati odio blanditiis
              error nisi itaque cum molestiae porro accusantium placeat, ipsum,
              cupiditate architecto quasi consectetur ea! Nobis quam architecto,
              animi doloremque excepturi quo? Eveniet, fuga in ipsa nisi
              deserunt aliquam rerum corrupti quod adipisci quibusdam maiores
              corporis eos veniam laboriosam, modi quam sunt eligendi error
              laudantium aspernatur voluptas placeat? Sed, eius, recusandae quis
              ipsa exercitationem quidem at aliquam ipsam officia magnam
              assumenda repellat accusantium voluptate aspernatur. Ea illo error
              eos mollitia veritatis fugiat eveniet, reiciendis facilis!
              Corporis aperiam placeat assumenda aut odit? Facilis
              exercitationem veniam, corrupti recusandae tempora repudiandae
              delectus expedita quibusdam rem, quae pariatur labore maiores
              repellat. A modi voluptatibus culpa voluptate temporibus illo nisi
              nostrum necessitatibus, officiis consectetur facilis nulla
              perspiciatis odio blanditiis atque adipisci ut aut obcaecati?
              Sequi, sunt perferendis? Debitis quasi sapiente sint nobis
              aliquid! Excepturi voluptatum sequi dolore molestias, sapiente a
              quas incidunt voluptates ut. Magni cupiditate quos aspernatur
              dolorem error? Repellendus, amet tenetur eum ipsa veritatis
              quibusdam doloribus ullam harum ipsam.
            </p>
          </div>
          <div className="w-1/5 bg-red-200 ">
            <div className="flex flex-col items-center justify-center">
              <img
                src="images/generales/savonne-2.webp"
                className="h-[200px] "
                alt="xd"
              />

              <div className="flex flex-col items-center justify-center mb-4">
                <div className=" flex mb-4">
                  <Link
                    className=" w-1/2 justify-center mx-2 bg-gray-800 text-white py-2 px-2  hover:bg-gray-500 "
                    href="/contactanos"
                  >
                    contactanos
                  </Link>

                  <Link
                    className=" w-1/2 justify-center mx-2 bg-gray-800 text-white py-2 px-6  hover:bg-gray-500"
                    href="/sumate"
                  >
                    sumate
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

                  <FaInstagram size={30} className="mx-2" />
                  <FaTwitter size={30} className="mx-2" />
                  <TiSocialPinterest size={30} className="mx-2" />
                </div>
                <img src="images/generales/sos.jpg" className="w-full " />
                <FacebookProvider>
                  <Page
                    href="https://www.facebook.com/people/SOS-USAC/100078927226794/"
                    tabs="timeline"
                    width="200"
                    height="400"
                    smallHeader={false}
                    adaptContainerWidth={true}
                    hideCover={true}
                    showFacepile={false}
                  />
                </FacebookProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
