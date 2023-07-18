import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Slider() {
  const slides = [
    {
      url: "/images/valores/1.png",
    },
    {
      url: "/images/valores/2.png",
    },
    {
      url: "/images/valores/3.png",
    },

    {
      url: "/images/valores/4.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000); // Cambia la imagen cada 5 segundos

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  return (
    <>
      <div className="w-full    min-w-full  relative group">
        <img
          src={`${slides[currentIndex].url}`}
          className="w-full h-full rounded-2x2 bg-center  duration-1000 relative transition-opacity"
        />

        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer ${
                currentIndex === slideIndex ? "text-white" : ""
              }`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
      <p className=" w-full px-10 mx-auto my-8 text-justify ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius illum sit
        nihil est, accusamus, praesentium veniam nisi ipsam autem doloremque,
        expedita iusto! Ex repellendus eius, repellat consectetur unde ea quos,
        corporis eligendi impedit odio et repudiandae aspernatur veritatis
        eveniet ducimus quia mollitia commodi ullam eos temporibus iste.
        Deleniti harum, illum error magni laboriosam dolore nostrum aliquid rem
        dolor placeat delectus distinctio quibusdam, earum adipisci similique
        molestiae fugit excepturi atque quam a eos sit recusandae necessitatibus
        repudiandae! Voluptas obcaecati rerum optio dicta laudantium iure,
        placeat asperiores? Culpa architecto laboriosam dolor maxime, illo
        minima accusantium sequi perferendis reiciendis! Rem, sint! Tenetur ea,
        doloremque ratione nesciunt minima sint optio nobis nemo architecto quos
        expedita, vitae eveniet esse exercitationem, qui eligendi mollitia
        ducimus dicta perferendis non odio. Expedita laboriosam numquam optio
        hic in quo sapiente voluptas, distinctio natus reprehenderit eos, earum,
        voluptatem labore maiores quasi sit. Ipsum, consectetur. Est ducimus
        eligendi eveniet sint ab odio ipsam, perferendis asperiores at quibusdam
        dolore magni eos voluptatum veritatis neque tenetur vel voluptas, aut
        illum consequatur sapiente, iure eius ullam? Debitis maxime fuga animi
        non, ut, odit consequuntur voluptatem, deleniti eos voluptate saepe!
        Quasi tenetur totam, asperiores distinctio neque quas expedita autem
        illo iure voluptate ex sequi animi.
      </p>
    </>
  );
}

export default Slider;
