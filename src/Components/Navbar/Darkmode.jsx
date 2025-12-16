// import React, { useEffect, useState } from 'react'
// import LightButton from "../..src/assets/LightButton.png"
// // imoort Lightbutton from "../../assets/light-mode-button.png"
// // imoort Darkbutton from "../../assets/dark-mode-button.png"
// // imoort DarkButton from "../../assets/DarkButton.png";
// import DarkButton from "../../assets/DarkButton.png";


// const Darkmode = () => {
//     const [theme, setTheme] = useState(
//         // localStorage.getItem("theme") ? localStorage.getItem    
//         // ("theme") : "light"
//            localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"

//     );
//     const element = document.documentElement;

//       // useEffect (()=>{
//       //   if(theme == "dark") {
//       //       element.classList.add("dark");
//       //       localStorage.setItem("theme" , "dark");
//       //   }
//       //   else {
//       //       element.classList.remove("dark");
//       //       localStorage.setItem("theme", "light");
//       //   }
//       // });
//        useEffect(() => {
//   const element = document.documentElement;

//   if (theme === "dark") {
//     element.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//   } else {
//     element.classList.remove("dark");
//     localStorage.setItem("theme", "light");
//   }
// }, [theme]);


//   return (
//     <div className="relative">
//       {/* <img 
//       scr={LightButton} 
//       alt="Light Button" 
//       onClick={() => {
//         setTheme(theme === "light" ? "dark" : "light");
//       }} 
//       className={`w-12 cursor-pointer drop-shadoww-
//         [1px_1px_1px_rgba(0,0,0,0.1)]
//         trasnsition-all duartion-300 absolute right-0 z-10
//         ${theme == "dark" ? "opacity-0" : "opacity-100"}`}
//       /> */}
//         <img
//         src={LightButton}
//         alt="Light Button"
//         onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//         className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
//         transition-all duration-300 absolute right-0 z-10
//         ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
//       />

//       {/* <img src={DarkButton} 
//       alt="Dark Button"
//       onClick={() => {
//         setTheme(theme == "light" ? "dark" : "light");
//       }}
//       className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
//       transition-all duartion-300" />
//     </div> */}
//      <img
//         src={DarkButton}
//         alt="Dark Button"
//         onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//         className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
//         transition-all duration-300
//         ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
//       />
//     </div>
//   );
// };

// export default Darkmode;


// import React, { useEffect, useState } from 'react';
// import LightButton from "../../assets/LightButtton.jpg";
// import DarkButton from "../../assets/DarkButton.png";

// const Darkmode = () => {
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme")
//       ? localStorage.getItem("theme")
//       : "light"
//   );

//   useEffect(() => {
//     const element = document.documentElement; // moved inside useEffect

//     if (theme === "dark") {
//       element.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       element.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [theme]); // only dependency

//   return (
//     <div className="relative">
//       {/* Light Button */}
//       <img
//         src={LightButton}
//         alt="Light Button"
//         onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//         className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
//         transition-all duration-300 absolute right-0 z-10
//         ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
//       />

//       {/* Dark Button */}
//       <img
//         src={DarkButton}
//         alt="Dark Button"
//         onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//         className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
//         transition-all duration-300
//         ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
//       />
//     </div>
//   );
// };

// export default Darkmode;



import React, { useEffect, useState } from 'react';
// import LightButton from "../../assets/LightButtton.jpg";
import LightButton from "../../assets/LightButtton.png"
import DarkButton from "../../assets/DarkButton.png";

const Darkmode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light"
  );

  useEffect(() => {
    const element = document.documentElement;

    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div
      className={`relative transition-all duration-500
      ${
        theme === "light"
          ? "brightness-110" // 🌞 BRIGHT MODE ACTIVATED
          : "brightness-80"  // 🌙 DIM DARK MODE
      }`}
    >
      {/* Light Button */}
      <img
        src={LightButton}
        alt="Light Button"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-15 cursor-pointer transition-all 
          duration-300 absolute right-0 z-10 
        ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
      />

      {/* Dark Button */}
      <img
        src={DarkButton}
        alt="Dark Button"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer transition-all duration-300
        ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
};

export default Darkmode;
