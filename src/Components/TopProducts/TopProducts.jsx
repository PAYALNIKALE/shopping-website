import React from "react";
import Img1 from "../../assets/shirt.png";
import Img2 from "../../assets/shirt2.webp";
import Img3 from "../../assets/shirt3.jpg";
import Img4 from "../../assets/Shoes.webp";
import Img5 from "../../assets/mens-watch.webp";
import Img6 from "../../assets/mens-kurta-pajama.jpg";


import { FaStar } from "react-icons/fa";


const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Printed Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rerum iure voluptate, nesciunt maiores consectetur voluptatum officiis obcaecati deleniti est recusandae nostrum ducimus corrupti eum sit, dolore dolorum modi vitae?",
  },
   {
    id: 2,
    img: Img2,
    title: "Casual Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rerum iure voluptate, nesciunt maiores consectetur voluptatum officiis obcaecati deleniti est recusandae nostrum ducimus corrupti eum sit, dolore dolorum modi vitae?",
  },
   {
    id: 3,
    img: Img3,
    title: "Trending Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rerum iure voluptate, nesciunt maiores consectetur voluptatum officiicis obcaecati deleniti est recusandae nostrum ducimus corrupti eum sit, dolore dolorum modi vitae?",
  },
   {
    id: 4,
    img: Img4,
    title: "Men's Shoes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rerum iure voluptate, nesciunt maiores consectetur voluptatum officiicis obcaecati deleniti est recusandae nostrum ducimus corrupti eum sit, dolore dolorum modi vitae?",
  },
   {
    id: 5,
    img: Img5,
    title: "Men's Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rerum iure voluptate, nesciunt maiores consectetur voluptatum officiicis obcaecati deleniti est recusandae nostrum ducimus corrupti eum sit, dolore dolorum modi vitae?",
  },
   {
    id: 6,
    img: Img6,
    title: "Men's Ethnic kurta",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rerum iure voluptate, nesciunt maiores consectetur voluptatum officiicis obcaecati deleniti est recusandae nostrum ducimus corrupti eum sit, dolore dolorum modi vitae?",
  },
  
];

const TopProducts = ({ handleOrderPopup }) => {
return (
  <div className="container">
    <div className="text-center py-30">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Men's Section
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 
        md:grid-cols-3 gap-20 md:gap-5 place-items-center
        mt-10 pt-6 pb-8 ">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl text-center bg-white 
              dark:bg-gray-900 hover:bg-black/80 
              dark:hover:bg-primary hover:text-white
              relative shadow-xl duration-300 py-20 "
            >
              <div className="cursor-pointer hover:translate-x-6
                  duration-300">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[190px] block mx-auto
                  transform -translate-y-10 max-h-[180px]
                  group-hover:scale-105 duration-600 drop-shadow-md
                  "
                />
              </div>

              <div className="w-full flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-600" />
                ))}
              </div>

              <h1 className="text-xl font-bold">{data.title}</h1>

              <p
                className="text-gray-500 group-hover:text-white
                duration-300 text-sm line-clamp-2"
              >
                {data.description}
              </p>

              <button
                className="bg-primary hover:scale-105 duration-300 
                text-white py-1 px-4 rounded-full mt-4 
                group-hover:bg-white group-hover:text-primary"
                onClick={handleOrderPopup}
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
  );
};

export default TopProducts;



