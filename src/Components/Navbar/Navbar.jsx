// import React from 'react'
// import { IoMdSearch } from 'react-icons/io';
// import { HiMiniShoppingCart } from "react-icons/hi2";
// import { FaCaretDown } from 'react-icons/fa';
// import { GiShoppingBag } from "react-icons/gi";
// import Darkmode from './Darkmode';
// // import { data } from 'autoprefixer';

// const Menu = [
//     {
//         id: 1,
//         name: "Home",
//         link: "/#",
//     },

//     {
//         id: 2,
//         name: "Top Rated",
//         link: "/#sevices",
//     },

//     {
//         id: 3,
//         name: "Kids Wear",
//         link: "/#",
//     },

//     {
//         id: 4,
//         name: "Mens Wear",
//         link: "/#",
//     },

//     {
//         id: 5,
//         name: "Electronics",
//         link: "/#",
//     },
// ];

// const Dropdownlist = [
//     {
//         id: 1,
//         name: "Trading Products",
//         link: "/#",
//     },

//     {
//         id: 2,
//         name: "Best Selling",
//         link: "/#",
//     },
// ];

// const Navbar = ({handleOrderPopup}) => {
//   return (
//     <div className="shadow-md bg-gray-500
//     dark:bg-text-white duration-200 relative
//     z-40">
//       <div className="bg-primary/40 py-2">
//         <div className="container flex 
//         justify-between items-center">
            
//          <div>
//             <a href="#" className="font-bold
//             text-x1 items-center flex gap-1">
//                 <GiShoppingBag size={39} />
//                 Shop Me
//             </a>
//          </div>

//          <div className="flex justify-between
//           items-center gap-4">
//             <div className="relative group hidden
//             sm-block">
//                 <input type="text"
//                 placeholder="Search" className="w-[200px]
//                 sm-w-[200px] group-hover:w-[300px]
//                 transation-all duration-300 
//                 rounded-lg border border-gray-300
//                 py-1 px-2 text-sm focus:none focus:border-red-1
//                 focus:border-primary
//                 focus:border-gray-500
//                 dark:bg-state-800" />
//                 <IoMdSearch className="text-slate-800 
//                 group-hover:text=primary absolute
//                 top-1/2 =translate--y-1/2 right-3" />
//             </div>
//             <button onClick={() => {
//                 handleOrderPopup();
//             }}
//             className="bg-gradient-to-t
//              from-blue-500 to-purple-500
//             transition-all duration-200
//             text-white py-1 px-4 rounded-full
//             flex items-center pag-3 group"
//             >
//                 <span className="group-hover:block
//                 hidden transition-all duration-200 px-3
//                 ">Order</span>
//                  <HiMiniShoppingCart className="text-x1
//                  text-white drop-shadow-sm
//                  cursor-pointer" />
//            </button>
//            <div>
//             <DarkMode />
//            </div>
//          </div>
//         </div>
//      </div>
//      <div date aos="zomm-in" className="flex justify-center0">
//         <ul className="sm-flex hidden items-center
//         gap-4">
//             {Menu.map((data) => (
//                 <li key={data.id}>
//                     <a href={data.link} 
//                     className="inline-block px-4
//                     hover:text-primary duration-200">
//                         {data.name}</a>
//                 </li>
//             ))}
//             <li className="group relative
//             cursor-pointer">
//                 <a href="#" className="flex
//                 items-center gap-[2px] py-2">
//                     Tranding Products
//                     <span>
//                         <FaCaretDown className="transition-all
//                         duration-200
//                         group-hover:rotate-180" />
//                     </span>
//                 </a>
//                 <div className="absolute z-[9999]
//                 hidden group-hover:block w-[200px]
//                 rounded-md bg-white p-2 text-black
//                 shadow-md">
//                     <ul>
//                         {Dropdownlist.map ((data)=>{
//                             <li key={data.id}>
//                                 <a href={data.link}
//                                 className="inline-block w-full
//                                 rounded-md p-2 hover:bg-primary/20">
//                                     {data.name}
//                                 </a>
//                             </li>
//                         })}
//                     </ul>
//                 </div>
//             </li>
//         </ul>
//      </div>
//    </div>
//   );
// };

// export default Navbar;


import React from 'react'
import { IoMdSearch } from 'react-icons/io';
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaCaretDown } from 'react-icons/fa';
import { GiShoppingBag } from "react-icons/gi";
import Darkmode from './Darkmode';

const Menu = [
  { 
    id: 1, 
    name: "Home", 
    link: "/#" 
},

  { 
    id: 2, 
    name: "Top Rated", 
    link: "/#sevices" 
},

  { 
    id: 3,
    name: "Women's Wear", 
    link: "/#" 
},

  { 
    id: 4, 
    name: "Men's Wear", 
    link: "/#" 
},

  { 
    id: 5, 
    name: "Electronics", 
    link: "/#" 
},
];

const Dropdownlist = [
  { 
    id: 1, 
    name: "Trading Products", 
    link: "/#" 
},

  { 
    id: 2,
     name: "Best Selling", 
     link: "/#" 
    },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md font-Arimo bg-gray-500 dark:bg-gray-900 duration-200 relative z-40">
      
      {/* Top Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">

          {/* Logo */}
          <a href="#" className="font-bold text-xl items-center flex gap-1">
            <GiShoppingBag size={39} />
            Shop Me
          </a>

          {/* Search + Cart + Darkmode */}
          <div className="flex items-center gap-4">

            {/* Search */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 
                rounded-lg border border-gray-300 py-1 px-2 text-sm dark:bg-slate-800"
              />
              <IoMdSearch className="text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-t from-blue-500 to-purple-500 transition-all duration-200
                text-white py-1 px-4 rounded-full flex items-center p-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200 px-3">Order</span>
              <HiMiniShoppingCart className="text-xl text-white drop-shadow-sm" />
            </button>

            {/* Dark Mode */}
            <Darkmode />
          </div>
        </div>
      </div>

      {/* Bottom Menu */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">

          {Menu.map((data) => (
            <li key={data.id}>
              <a href={data.link} className="inline-block px-4 hover:text-primary duration-200">
                {data.name}
              </a>
            </li>
          ))}

          {/* Dropdown */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-1 py-2">
              Trending Products
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </a>

            <div className="absolute z-[9999] hidden group-hover:block w-[200px]
              rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {Dropdownlist.map((data) => (
                  <li key={data.id}>
                    <a href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
