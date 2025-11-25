import React from "react";
import Slider from "react-slick";   // ✅ FIXED: Added back
import "slick-carousel/slick/slick.css";    // ✅ FIXED
import "slick-carousel/slick/slick-theme.css"; // ✅ FIXED

import Image from "../../assets/women.jpg";
import Image2 from "../../assets/ShoppingTrolley.png";
import Image3 from "../../assets/sale-removebg-preview.png";

const ImageList = [
  {
    id: 1,
    image: Image,
    title: "Upto 50% off all Men's Collection with free delivery",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    image: Image2,
    title: "30% off on all women's wear and free delivery",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    image: Image3,
    title: "Exclusive Sale! 40% off on selected items",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function Hero({ handleOrderPopup }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
  };

  return (
    <div
      className="relative overflow-hidden min-h-[555px] sm:min-h-[700px]
      bg-gray-400 flex justify-center items-center dark:bg-slate-950
       dark:text-white duration-300"
    >
      {/* Background Shape */}
      <div
        className="h-[700px] w-[700px] bg-primary/40 
        absolute top-1/2 right-5 rounded-3xl rotate-45-z-10 "
      ></div>

      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">

                {/* Left Content */}
                <div
                  className="flex flex-col justify-center gap-6 
                   text-center sm:text-left order-2 sm:order-1 relative z-10 py-10"
                >
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold py-10"
                  >
                    {data.title}
                  </h1>

                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>

    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="300"
    >
      <button
        onClick={handleOrderPopup}
        className="bg-gradient-to-r from-primary to-secondary
        hover:scale-105 duration-200 text-white py-2 px-6 rounded-full"
      >
        Order Now
      </button>
    </div>
                </div>

                {/* Right Image */}
                <div className="order-1 sm:order-2">
                  <div data-aos="zoom-in" className="relative z-10">
                    <img
                      src={data.image}
                      alt="slider"
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px]
                      sm:scale-105 lg:scale-110 object-contain mx-auto"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
