import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-purple-500 to-pink-500">
      <div className=" bg-white rounded-xl shadow-xl w-[480px] overflow-hidden">
        
        {/* Top Illustration Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
          <h2 className="text-lg font-semibold text-center">
            Welcome to the website
          </h2>
          <p className="text-xs text-center mt-1 opacity-80">
            Login to continue shopping
          </p>

          <div className="flex justify-center mt-4">
            <img
              src="src/assets/ShopMe.jpg"
              alt="shopping"
              className="w-45 rounded-md"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="p-6">
          <h3 className="text-center font-semibold text-gray-700 mb-4">
            USER LOGIN
          </h3>

          <form className="space-y-3 ">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none text-black focus:ring-2 focus:ring-purple-500 cursor-pointer "
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none text-black focus:ring-2 focus:ring-purple-500 cursor-pointer"
            />

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded-md text-sm font-semibold hover:bg-pink-600 transition cursor-pointer"
            >
              LOGIN
            </button>
          </form>

          <p className="text-xs text-center text-gray-600 mt-4 cursor-pointer 
                       font-bold text-decoration-line: underline">
            Forgot password?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
