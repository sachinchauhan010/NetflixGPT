import { useState } from "react";
import Header from "./Header";

const LogIn = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <div className="relative flex justify-center ">
      <Header />
        <img
          src="
        https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
          className=""
        ></img>
        <div className="flex flex-col items-start justify-center md:w-1/2 lg:w-1/3 absolute top-20 ml-auto mr-auto bg-gray-800 rounded-md bg-opacity-80 p-10">
          <p className="text-3xl font-bold text-white my-5">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </p>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Name"
              className="outline-none text-base px-4 rounded my-3 py-2 focus:outline-red-600 w-full bg-gray-600 opacity-90 text-white "
            />
          )}
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Phone Number"
              className="outline-none text-base px-4 rounded my-3 py-2 focus:outline-red-600 w-full bg-gray-600 opacity-90 text-white "
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="outline-none text-base px-4 rounded my-3 py-2 focus:outline-red-600 w-full bg-gray-600 opacity-90 text-white "
          />
          <input
            type="password"
            placeholder="Password "
            className="outline-none text-m px-4 rounded my-3 py-2 focus:outline-red-600 w-full bg-gray-600 opacity-90 text-white "
          />
          <button className="bg-red-600 w-full py-2 text-base font-semibold text-white my-3 rounded-md">
            Sign In
          </button>
          <p
            className="text-white text-medium cursor-pointer font-semibold mt-5"
            onClick={toggleForm}
          >
            {isSignInForm
              ? "New to Netflix!! Sign Up"
              : "Already Registered! Sign In"}
          </p>
        </div>
      </div>
    </>
  );
};
export default LogIn;
