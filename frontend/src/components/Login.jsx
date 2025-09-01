import React, { useState } from "react";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg1.png')" }} // Replace with your image path
    >
      <div className="w-full max-w-sm bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 text-white">
        {/* Logo */}
        <div className="text-center items-center flex justify-center flex-col">
        <img src="/logo.png" alt="logo" className="w-30 h-30"/>
        </div>

        {/* Form Title */}
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {isRegister ? "Register" : "Login"}
        </h2>

        {/* Form */}
        <form className="space-y-4">
          {isRegister && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          )}

          <input
            type="email"
            placeholder="username@gmail.com"
            className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          {!isRegister && (
            <p className="text-sm text-right text-gray-300 hover:text-white cursor-pointer">
              Forgot Password?
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-sky-700 hover:bg-sky-800 transition py-2 rounded-lg font-semibold cursor-pointer"
          >
            {isRegister ? "Register" : "Sign In"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-500" />
          <span className="px-2 text-sm text-gray-300">or continue with</span>
          <hr className="flex-grow border-gray-500" />
        </div>

        {/* Social Login */}
        <div className="flex justify-center gap-4">
          <button className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition cursor-pointer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-6 h-6" />
          </button>
          <button className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition cursor-pointer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Github" className="w-6 h-6" />
          </button>
          <button className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition cursor-pointer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" className="w-6 h-6" />
          </button>
        </div>

        {/* Toggle Login/Register */}
        <p className="text-sm text-center mt-6 text-gray-300">
          {isRegister ? "Already have an account?" : "Don’t have an account yet?"}{" "}
          <span
            className="text-sky-400 cursor-pointer hover:underline"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Login" : "Register for free"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
