import React from 'react' 
import { FiShoppingBag } from 'react-icons/fi';
import { FaMapLocation, FaMapLocationDot } from 'react-icons/fa6';
import { 
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaYoutube,
    FaMobileAlt,
    FaMap,
} from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';

const FooterLinks = [
    {
        title: "Home",
        link: "/#"
    },
     {
        title: "About Us",
        link: "/about us"
    },
     {
        title: "Contact Us",
        link: "/contact us"
    },
     {
        title: "Our Blog",
        link: "/our blog"
    },
    {
        title: "Reviews",
        link: "/reviews"
    },
    {
        title: "Terms & Conditions",
        link: "/terms-and-conditions"
    },
     {
        title: "Privacy Policy",
        link: "/privacy-policy"
    },
    {
        title: "Cookies Policy",
        link: "/cookies-policy"
    },
]

const FooterLink = [
    {
        title: "Resources",
        link: "/#"
    },
     {
        title: "Website builder and Web design articles",
        link: "/Website builder and Web design articles"
    },
     {
        title: "Learning Center",
        link: "/learning center"
    },
     {
        title: "FAQs",
        link: "/faqs"
    },
    {
        title: "Forgot Password",
        link: "/forgot-password"
    },
    {
        title: "Account Verification",
        link: "/account-verification"
    },
]

const Footer = () => {
  return (
    <div className="text-white bg-[#29272a]">
        <div className="container">
            <div
              data-aos="zoom-in"
              className="grid md:grid-cols-3 pb-44 pt-5">
                <div className="py-9 px-10">
                    <h1 className="sm:text-3xl text-xl font-bold
                    sm:text-left text-justify mb-3 flex
                    items-center gap-1 py-4 ">
                        <FiShoppingBag size="40" />
                        ShopMe
                    </h1>
                    <p>
                        Copyright © 2004-2050 
                        ShopMe™ -
                        All Rights Reserved. All trademarks 
                        are the copyright are the all property of their respective owners/holder.

                    </p>
                </div>
                <div>
                    <div className="py-9 px-8">
                        <h1 className="sm-text-xl text-xl font-bold
                        sm:text-left text-justify mb-3">
                            COMPANY
                        </h1>
                        <ul className="flex flex-col gap-3">
                            {FooterLinks.map((link) => (
                                <li 
                                 className="cursor-pointer
                                 hover:text-primary hover:translate-x-1
                                 duration-300 text-gray-200"
                                 key={link.title}>{link.title}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="py-8 px-4">
                        <h1 className="sm-text-xl text-xl font-bold
                        sm:text-left text-justify mb-3 cursor-pointer
                                 hover:text-primary hover:translate-x-1
                                 duration-300">
                                SUPPORT
                        </h1>
                        <ul className="flex flex-col gap-3">
                            {FooterLink.map((link) => (
                                <li 
                                 className="cursor-pointer
                                 hover:text-primary hover:translate-x-1
                                 duration-300 text-gray-200"
                                 key={link.title}>{link.title}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-4 mt-6 py-5 px-10 ">
                        <a href="#">
                            <FaInstagram className="text-3xl " size="40" />
                        </a>
                        <a href="#">
                            <FaFacebook className="text-3xl" size="40" />
                        </a>
                        <a href="#">    
                            <FaTwitter className="text-3xl" size="40" />
                        </a>
                        <a href="#">
                            <FaLinkedin className="text-3xl" size="40" />
                        </a>
                        <a href="#">
                            <FaYoutube className="text-3xl" size="40" />
                        </a>
                    </div>
                    <div className="mt-5 py-3 px-10 ">
                        <div className="flex items-center gap-3 cursor-pointer
                                 hover:text-primary hover:translate-x-1
                                 duration-300">
                            <FaMapLocationDot />
                            <p>Indore, Madhya Pradesh, India</p>
                        </div>
                        <div className="flex items-center gap-3 mt-5 cursor-pointer
                                 hover:text-primary hover:translate-x-1
                                 duration-300 ">
                            <IoCall />
                            <p>+91 12345 67890</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;