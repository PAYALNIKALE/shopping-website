import React from "react";
import Image1 from "../../assets/Ethnic.jpg";
import Image2 from "../../assets/WomenWestern.jpg";
import Image3 from "../../assets/Jeans.jpg";
import Image4 from "../../assets/LipsStick.jpg";
import Image5 from "../../assets/Bags.jpg";
import Image6 from "../../assets/Women Sandals.webp";
import Image7 from "../../assets/best-perfume-for-women.jpg";
import Image8 from "../../assets/Heels.webp";
import Image9 from "../../assets/Women shampoo.avif";
import Image10 from "../../assets/Necklace.jpg";
import { FaStar } from "react-icons/fa";


const ProductsData = [
  {
    id: 1,
    image: Image1,
    title: "Women Ethnic Wear",
    rating: 5.0,
    color: "Velvet",
    aosDelay: "0",
  },
  {
    id: 2,
    image: Image2,
    title: "Women Western",
    rating: 4.0,
    color: "White",
    aosDelay: "200",
  },
  {
    id: 3,
    image: Image3,
    title: "Jeans",
    rating: 4.5,
    color: "Yellow",
    aosDelay: "400",
  },
  {
    id: 4,
    image: Image4,
    title: "Lip-Care Makeup",
    rating: 4.8,
    color: "Pink",
    aosDelay: "600",
  },
  {
    id: 5,
    image: Image5,
    title: "Bags",
    rating: 4.3,
    color: "Multicolour",
    aosDelay: "800",
  },
  {
    id: 6,
    image: Image6,
    title: "Sandal",
    rating: 4.3,
    color: "White",
    aosDelay: "800",
  },
  {
    id: 7,
    image: Image7,
    title: "Perfume",
    rating: 5.5,
    color: "Multi",
    aosDelay: "800",
  },
  {
    id: 8,
    image: Image8,
    title: "Heels",
    rating: 3.6,
    color: "Light Brown",
    aosDelay: "800",
  },
  {
    id: 9,
    image: Image9,
    title: "Shampoo",
    rating: 5.1,
    color: "Coffee Brown",
    aosDelay: "800",
  },
  {
    id: 10,
    image: Image10,
    title: "Necklece",
    rating: 5.5,
    color: "Beautiful Jewellery",
    aosDelay: "800"
  },
];

const Products = ({ handleOrderPopup }) => {
  return (
    <div className="mt-10 mb-12">
      <div className="container mx-auto">
        
        {/* Top Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Women's Section
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
                        place-items-center gap-5  cursor-pointer hover:translate-x-6
                        duration-300 ">
          {ProductsData.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up "
              data-aos-delay={item.aosDelay}
              className="space-y-9 cursor-pointer hover:translate-x-6
                  duration-300 py-6"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[300px] w-[220px] object-cover rounded-md"
              />

              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.color}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>{item.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
{/* 
        {/* Button */}
        {/* <div className="flex justify-center">
          <button className="bg-primary hover:scale-105 duration-300 
                text-white py-1 px-4 rounded-full mt-4 
                group-hover:bg-white group-hover:text-primary"
                >
            View all products
          </button>
        </div> */} 

        <div className="flex justify-center ">
      <button
        className="bg-primary hover:scale-105 duration-300 
                   text-white py-1 px-4 rounded-full mt-4 
                   group-hover:bg-white group-hover:text-primary
                   cursor-pointer hover:translate-x-6 pb-20"
        onClick={() => {handleOrderPopup()}}
      >
        View all products
      </button>
    </div>

      </div>
    </div>
  );
};

export default Products;
