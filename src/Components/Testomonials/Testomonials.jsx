import React from 'react' 
import Slider from 'react-slick';


const TestomonialsData = [
 {
    id: 1,
    name: "Shweta Vishwakarma",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum corrupti natus doloribus, est laboriosam excepturi voluptate eius accusamus hic nam unde odit maxime quod laudantium id non amet quia aut error odio.",
    img: "https://picsum.photos/101/101"
 },
  {
    id: 2,
    name: " Sidhesh Patil",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum corrupti natus doloribus, est laboriosam excepturi voluptate eius accusamus hic nam unde odit maxime quod laudantium id non amet quia aut error odio.",
    img: "https://picsum.photos/102/102"
 },
  {
    id: 3,
    name: "Priya Solanki",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum corrupti natus doloribus, est laboriosam excepturi voluptate eius accusamus hic nam unde odit maxime quod laudantium id non amet quia aut error odio.",
    img: "https://picsum.photos/104/104"
 },
  {
    id: 4,
    name: "Payal N",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum corrupti natus doloribus, est laboriosam excepturi voluptate eius accusamus hic nam unde odit maxime quod laudantium id non amet quia aut error odio.",
    img: "https://picsum.photos/103/103"
 },
  {
    id: 5,
    name: "Sharddha Ambre",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum corrupti natus doloribus, est laboriosam excepturi voluptate eius accusamus hic nam unde odit maxime quod laudantium id non amet quia aut error odio.",
    img: "https://picsum.photos/105/105"
 },
];

const Testomonials = () => {

    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
        {
        // breakpoint: 10000,
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            // slidesToShow: 3,
            // slidesToScroll: 1,
            // infinite: true,
        }
     },
     {
    //    breakpoint: 1024,
        breakpoint: 640,
        settings: {
            slidesToShow: 1,
            // slidesToShow: 2,
            // slidesToScroll: 1,
            // infinite: true,
        }, 
     },
    //  {
    //     breakpoint: 640,
    //     settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //     }
    //  },
    ],
    };
  return (
    <div className="py-10 mb-10 cursor-pointer
    bg-gray-100 dark:bg-slate-900
    duration-300">
        <div className="container">
            <div className="text-center mb-10 max-w-[600px]
            mx-auto">
                <p data-aos="zoom-out" className="text-primary font-bold text-sm-[24px]">
                    ShopMe App
                </p>
                <h1 data-aos="zoom-out" className="text-3xl
                font-bold py-4"></h1>
                <p data-aos="zoom-out" className="text-sm
                text-gray-200">
                    ShopMe, India's no.1 online fashion destination justifies its fashion relevance by bringing somthing new and chic to the table on th daily. 
                    fashion trends seems to change in the blink of an eye, and ShopMe ensures that you are always ahead of the curve.
                    The shopMe app is a one-stop fashion solution that caters to the sartorial needs of fashion enthusiasts across India.
                    With an extensive collection of clothing, footwear, accessories, and more, the app offers a seamless shopping experience at your fingertips!!
                    </p>
            </div>
            <div data-aos="zoom-in">
                <Slider {...settings}>
                    {TestomonialsData.map((data) => (
                        <div className="my-5 px-4 sm:px-6 md:px-9">
                            <div key={data.id} 
                             className="gap-4 shadow-gray-50
                             py-8 px-6 rounded-lg 
                             dark:bg-slate-600 bg-primary/10 relative">
                                <div className="mb-4 py-5 px-10
                                flex justify-center items-center rounded-full">
                                    <img src={data.img} 
                                    alt="" 
                                    className="rounded-full w-30 h-30" />
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <div className="space-y-3">
                                        <p className="text-xs
                                        dark:text-slate-200 text-gray-700">
                                            {data.text}
                                        </p>
                                        <h1 className="text-xl font-bold
                                        dark:text-slate-300 text-black/80
                                        dark:text-light">
                                            {data.name}
                                        </h1>
                                    </div>
                                </div>
                                <p className="text-black/20 text-9xl
                                font-serif absolute -top-0 right-0">
                                </p>
                            </div> 
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
  );
};

export default Testomonials;
