import React from "react";
import { FaBeer } from 'react-icons/fa'; 
import BannerImg from "../../assets/Wintersale.gif";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaSalesforce } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="min-h-[850px]   flex justify-center 
    items-center py-2 sm:py-0 pt-10">
      <div className="container">
        <div data-aos="zoom-in">
          <img
            className="max-w-[950px] h-[550px] w-full mx-auto object-cover py-10"
            src={BannerImg}
            alt="Winter Sale Banner"/>
        </div>

        <div className="flex flex-col justify-center gap-6 sm:pt-0 py-5 px-8">
          <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
            Winter Sale up to 50% Off
          </h1>

          <p data-aos="fade-up"
            className="text-sm text-gray-500 tracking-wide leading-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            similique voluptatum, debitis ab quibusdam ipsa impedit nemo magnam
            officia labore enim neque quam! Mollitia incidunt vel, dignissimos
            dicta cumque provident.
          </p>
          <div className="flex flex-row gap-20 ">
            <div data-aos="fade-down" className="flex items-center gap-4">
              <MdProductionQuantityLimits className="text-4xl h-12 w-12 shadow-sm p-4 
              rounded-full bg-orange-100 dark:bg-purple-800" />
              <p>Quality Products</p>
            </div>

          <div className="flex flex-row gap-20 ">
            <div data-aos="fade-up" className="flex items-center gap-4">
              <TbTruckDelivery className="text-4xl h-12 w-12 shadow-sm p-4 
              rounded-full bg-orange-100 dark:bg-pink-500" />
              <p>Fast Delivery</p>
            </div>

          <div className="flex flex-row gap-20 ">
            <div data-aos="fade-down" className="flex items-center gap-4">
              <GiTakeMyMoney className="text-4xl h-12 w-12 shadow-sm p-4 
              rounded-full bg-green-100 dark:bg-red-600" />
              <p>Easy Payment Method</p>
            </div>

          <div className="flex flex-row gap-20 ">
          <div className="flex flex-row py-5 gap-20 ">
            <div data-aos="fade-up" className="flex items-center gap-4">
              <FaSalesforce className="text-4xl h-12 w-12 shadow-sm p-4 
              rounded-full bg-green-100  dark:bg-yellow-400" />
              <p>Get Offers</p>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;








































































