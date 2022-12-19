import Link from "next/link";
import React from "react";
import {BsBoxArrowInRight} from 'react-icons/bs'
const Signup = () => {
  return (
  <div class="flex min-h-screen">
    <div class="flex flex-row w-full">

      <div class='hidden lg:flex flex-col justify-center   items-start bg-purple-200 lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg'>
        <div class='space-y-5'>
          <h1 class="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">Enter your account and discover new
            experiences</h1>
          
        </div>
          <p class="text-lg py-2 px-1">Already have an account?</p>
        <Link href={'/login'}
            class=" px-4 py-2 border-2 rounded-lg font-medium border-black bg-black text-white">Sign in  </Link>
       
      </div>

      <div class="flex flex-1 flex-col items-center justify-center px-10 relative">
        <div class="flex lg:hidden justify-between items-center w-full py-4">
          <div class="flex items-center justify-start space-x-3">
            <span class="bg-black rounded-full w-6 h-6"></span>
            <a href="#" class="font-medium text-lg">Brand</a>
          </div>
          <div class="flex items-center space-x-2">
            <span>Not a member? </span>
            <a href="#" class="underline font-medium text-[#070eff]">
              Sign up now
            </a>
          </div>
        </div>
        <div class="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
          <div class="flex flex-col space-y-2 text-center">
            <h2 class="text-3xl md:text-4xl font-bold">Register Yourself</h2>
            <p class="text-md md:text-xl">Sign up or log in to place the order,no password require!</p>
          </div>
          <div class="flex flex-col max-w-md space-y-5">
          <div>
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-black-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Username"
                    className="bg-black-50 border border-black-300 text-black-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-white dark:focus:ring-black-500 dark:focus:border-black-500"
                    required=""
                  />
                </div>
          <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-black-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@email.com"
                    className="bg-black-50 border border-black-300 text-black-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-white dark:focus:ring-black-500 dark:focus:border-black-500"
                    required=""
                  />
                </div>
          <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-black-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-black-50 border border-black-300 text-black-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-white dark:focus:ring-black-500 dark:focus:border-black-500"
                    required=""
                  />
                </div>
            <button class="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">Register Now </button>
            <div class="flex justify-center items-center">
              <span class="w-full border border-black"></span>
              <span class="px-4">Or</span>
              <span class="w-full border border-black"></span>
            </div>
            <button class="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
              <span class="absolute left-4">
                
              </span>
              <span>Sign up with Google</span>
            </button>
          </div>
        </div>
       

      </div>
    </div>
  </div>

  );
};

export default Signup;
