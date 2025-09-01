import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaGoogle, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 to-blue-200 p-5">
      <div
        className={`relative w-[850px] h-[550px] bg-white rounded-[30px] shadow-2xl overflow-hidden transition-all duration-1000 ease-in-out ${
          isActive ? 'active' : ''
        }`}
      >
        {/* Login Form */}
        <div
          className={`absolute right-0 w-1/2 h-full bg-white flex items-center justify-center text-center p-10 z-10 transition-all duration-700 ease-in-out delay-1000 ${
            isActive ? 'right-1/2' : ''
          }`}
        >
          <form className="w-full">
            <h1 className="text-4xl font-semibold mb-2 text-gray-800">Login</h1>
            <div className="relative my-8">
              <input
                type="text"
                placeholder="Username"
                required
                className="w-full py-3 pr-12 pl-5 bg-gray-100 rounded-lg border-none outline-none text-base font-medium text-gray-800 placeholder-gray-500"
              />
              <FaUser className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
            </div>
            <div className="relative my-8">
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full py-3 pr-12 pl-5 bg-gray-100 rounded-lg border-none outline-none text-base font-medium text-gray-800 placeholder-gray-500"
              />
              <FaLock className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
            </div>
            <div className="my-4 text-sm text-gray-800">
              <a href="#" className="hover:underline">
                Forgot Password
              </a>
            </div>
            <button type="submit" className="w-full h-12 text-white bg-blue-500 rounded-lg shadow-md border-none cursor-pointer text-base font-semibold transition-colors duration-300 hover:bg-blue-600">
              Login
            </button>
            <p className="text-sm mt-4 text-gray-500">or login with social platforms</p>
            <div className="flex justify-center mt-4">
              <a href="#" className="inline-flex p-2 border-2 border-gray-300 rounded-lg text-2xl text-gray-700 mx-2 hover:bg-gray-100 transition-colors">
                <FaGoogle />
              </a>
              <a href="#" className="inline-flex p-2 border-2 border-gray-300 rounded-lg text-2xl text-gray-700 mx-2 hover:bg-gray-100 transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="inline-flex p-2 border-2 border-gray-300 rounded-lg text-2xl text-gray-700 mx-2 hover:bg-gray-100 transition-colors">
                <FaGithub />
              </a>
              <a href="#" className="inline-flex p-2 border-2 border-gray-300 rounded-lg text-2xl text-gray-700 mx-2 hover:bg-gray-100 transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </form>
        </div>

        {/* Register Form */}
        <div
          className={`absolute right-0 w-1/2 h-full bg-white flex items-center justify-center text-center p-10 z-10 transition-all duration-700 ease-in-out delay-1000 ${
            isActive ? 'right-1/2' : ''
          } ${isActive ? 'visible' : 'invisible'}`}
        >
          <form className="w-full">
            <h1 className="text-4xl font-semibold mb-2 text-gray-800">Register</h1>
            <div className="relative my-8">
              <input
                type="text"
                placeholder="Username"
                required
                className="w-full py-3 pr-12 pl-5 bg-gray-100 rounded-lg border-none outline-none text-base font-medium text-gray-800 placeholder-gray-500"
              />
              <FaUser className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
            </div>
            <div className="relative my-8">
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full py-3 pr-12 pl-5 bg-gray-100 rounded-lg border-none outline-none text-base font-medium text-gray-800 placeholder-gray-500"
              />
              <FaEnvelope className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
            </div>
            <div className="relative my-8">
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full py-3 pr-12 pl-5 bg-gray-100 rounded-lg border-none outline-none text-base font-medium text-gray-800 placeholder-gray-500"
              />
              <FaLock className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
            </div>
            <button type="submit" className="w-full h-12 text-white bg-blue-500 rounded-lg shadow-md border-none cursor-pointer text-base font-semibold transition-colors duration-300 hover:bg-blue-600">
              Register
            </button>
            <p className="text-sm mt-4 text-gray-500">or register with social platforms</p>
            <div className="flex justify-center mt-4">
              <a href="#" className="inline-flex p-2 border-2 border-gray-300 rounded-lg text-2xl text-gray-700 mx-2 hover:bg-gray-100 transition-colors">
                <FaGoogle />
              </a>
              <a href="#" className="inline-flex p-2 border-2 border-gray-300 rounded-lg text-2xl text-gray-700 mx-2 hover:bg-gray-100 transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="inline-flex p-2 border-2 border-gray-300 rounded-lg text-2xl text-gray-700 mx-2 hover:bg-gray-100 transition-colors">
                <FaGithub />
              </a>
              <a href="#" className="inline-flex p-2 border-2 border-gray-300 rounded-lg text-2xl text-gray-700 mx-2 hover:bg-gray-100 transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </form>
        </div>
        
        {/* Toggle Panel */}
        <div className="absolute w-full h-full before:content-[''] before:absolute before:-left-[250%] before:w-[300%] before:h-full before:bg-blue-500 before:rounded-[150px] before:z-20 before:transition-all before:duration-[1.8s] before:ease-in-out before:delay-300">
          <div
            className={`absolute w-1/2 h-full flex flex-col justify-center items-center text-white text-center p-10 z-20 transition-all duration-700 ease-in-out delay-1200 ${
              isActive ? 'left-[-50%]' : 'left-0'
            }`}
          >
            <h1 className="text-4xl font-semibold mb-2">Hello Welcome</h1>
            <p className="text-sm my-5">Don't have an account?</p>
            <button
              onClick={handleRegisterClick}
              className="w-40 h-12 text-white bg-transparent border-2 border-white rounded-lg shadow-none cursor-pointer text-base font-semibold transition-colors duration-300 hover:bg-white hover:text-blue-500"
            >
              Register
            </button>
          </div>
          <div
            className={`absolute w-1/2 h-full flex flex-col justify-center items-center text-white text-center p-10 z-20 transition-all duration-700 ease-in-out delay-1200 ${
              isActive ? 'right-0' : 'right-[-50%]'
            }`}
          >
            <h1 className="text-4xl font-semibold mb-2">Welcome Back!</h1>
            <p className="text-sm my-5">Already have an account?</p>
            <button
              onClick={handleLoginClick}
              className="w-40 h-12 text-white bg-transparent border-2 border-white rounded-lg shadow-none cursor-pointer text-base font-semibold transition-colors duration-300 hover:bg-white hover:text-blue-500"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;