import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import TopProducts from "./Components/TopProducts/TopProducts";
import Banner from "./Components/Banner/Banner";
import Subscribe from "./Components/Subscribe/Subscribe";
import Testomonials from "./Components/Testomonials/Testomonials";
import Footer from "./Components/Footer/Footer";   
import Hero from "./Components/Hero/Hero";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Login />
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Testomonials />
      <Footer />
    </div>
  );
}

export default App;
