"use client";

import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex
                    flex-col
                    items-center
                    min-h-screen
                    px-4
                    sm:px-8
                    md:px-16
                    bg-[#252B42]
                    overflow-hidden">

      <nav className="w-full p-4">

        <div className="container
                        mx-auto
                        flex
                        justify-between
                        items-center">

          {/* Hamburger Icon for Mobile Screens */}
          <div className="md:hidden">

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">

              {/* Hamburger Icon */}
              <svg className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">

                <path strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.6"
                  d="M4 6h16M4 12h16m-7 6h7">
                </path>
              </svg>

            </button>

          </div>

          {/* Logo Div for "BrandName" */}
          <div className="text-white
                            text-[20px]
                            md:text-[24px]
                            font-bold">
            BrandName
          </div>

          {/* Navigation Menu for Desktop Screens */}
          <div className="hidden
                          md:flex
                          space-x-6
                          lg:space-x-8
                          text-white
                          text-[14px]
                          lg:text-[16px]
                          font-medium">

            <span className="cursor-pointer hover:text-[#23A6F0]">Home</span>
            <span className="cursor-pointer hover:text-[#23A6F0]">Product</span>
            <span className="cursor-pointer hover:text-[#23A6F0]">Pricing</span>
            <span className="cursor-pointer hover:text-[#23A6F0]">Contact</span>

          </div>

          {/* Login and JOIN US Buttons */}
          <div className="flex
                          space-x-2
                          md:space-x-4
                          items-center">

            <span className="text-[#ffffff]
                             text-[14px]
                             hover:text-[#cccccc]
                             cursor-pointer">Login</span>

            <button className="bg-[#23A6F0]
                              text-white
                                px-4
                                py-2
                                rounded
                                text-[14px]
                                hover:bg-[#5b5f62]">JOIN US</button>
          </div>
        </div>

        {/* Responsive Mobile Menu */}
        {isMenuOpen && (
          <div className="flex flex-col mt-4 space-y-4 md:hidden text-white text-center text-[16px] font-medium">
            <span className="cursor-pointer hover:text-[#23A6F0]" onClick={() => setIsMenuOpen(false)}>Home</span>
            <span className="cursor-pointer hover:text-[#23A6F0]" onClick={() => setIsMenuOpen(false)}>Product</span>
            <span className="cursor-pointer hover:text-[#23A6F0]" onClick={() => setIsMenuOpen(false)}>Pricing</span>
            <span className="cursor-pointer hover:text-[#23A6F0]" onClick={() => setIsMenuOpen(false)}>Contact</span>
          </div>
        )}
      </nav>

      {/* Remaining page content */}
      <div className="flex flex-col items-center gap-8 mt-16 md:mt-20 text-center">
        <div>
          <div className="text-[#35A6F0] text-[16px] font-bold">Welcome</div>
          <h1 className="text-[32px] sm:text-[48px] md:text-[58px] font-bold text-[#ffffff] leading-tight mt-4">
            Selling on the<br className="hidden md:block" /> internet like a pro
          </h1>
          <p className="text-[#ffffff] mt-4 max-w-[90%] sm:max-w-[80%] md:max-w-[542px] pt-4 mx-auto leading-[1.6]">
            We know how large objects will act, but things on a small scale just do not act that way.
          </p>
          <div className="flex space-x-3.5 mt-8 justify-center items-center pt-3.5">
            <button className="border border-[#35A6F0] bg-[#35A6F0] text-white px-11 py-4 rounded hover:bg-[#5b5f62] hover:border-[#5b5f62]">
              Get Quote Now
            </button>
            <button className="border border-[#35A6F0] text-[#35A6F0] px-11 py-4 rounded hover:bg-[#5b5f62] hover:border-[#ffffff] hover:text-[#ffffff]">
              Learn More
            </button>
          </div>
        </div>

        {/* Cards Row */}
        <div className="flex flex-wrap 
                        justify-center
                        gap-6
                        md:gap-8
                        mt-16">

          {/* Card Box 1 */}
          <div className="bg-white
                          text-black
                          p-6
                          rounded-lg
                          shadow-md
                          w-full
                          sm:w-[280px]
                          md:w-[300px]
                          lg:w-[328px]
                          cursor-pointer">

            <div className="w-16
                            h-16
                            rounded-xl
                            bg-[#FFDCD1]
                            mx-start
                            mb-4
                            cursor-pointer">
            </div>

            <h2 className="font-bold
                          text-start
                          mt-4
                          cursor-pointer">
              Training Courses
            </h2>

            <div className="h-[2px]
                          bg-[#E74040]
                          w-12
                          mx-start
                          my-3
                          cursor-pointer">
            </div>

            <p className="text-start
                          text-sm
                          cursor-pointer">
              The gradual accumulation of information about atomic and small-scale behaviour...
            </p>

          </div>

          {/* Card Box 2 */}
          <div className="bg-white
                          text-black
                          p-6
                          rounded-lg
                          shadow-md
                          w-full
                          sm:w-[280px]
                          md:w-[300px]
                          lg:w-[328px]
                          cursor-pointer">

            <div className="w-16
                            h-16 rounded-xl
                            bg-[#B9EAA8]
                            mx-start
                            mb-4
                            cursor-pointer">
            </div>

            <h2 className="font-bold
                          text-start
                          mt-4
                          cursor-pointer">
              2,769 Online Courses
            </h2>

            <div className="h-[2px]
                          bg-[#E74040]
                          w-12
                          mx-start
                          my-3
                          cursor-pointer">
            </div>

            <p className="text-start
                          text-sm
                          cursor-pointer">
              The gradual accumulation of information about atomic and small-scale behaviour...
            </p>
          </div>

          {/* Card Box 3 */}
          <div className="bg-[#35A6F0]
                        text-white
                          p-6
                          rounded-lg
                          shadow-md
                          w-full
                          sm:w-[280px]
                          md:w-[300px]
                          lg:w-[328px]
                          cursor-pointer">

            <div className="w-16
                            h-16 rounded-xl 
                            bg-white 
                            mx-start 
                            mb-4
                            cursor-pointer">
            </div>

            <h2 className="font-bold
                          text-start
                          mt-4
                          cursor-pointer">
              Training Courses
            </h2>

            <div className="h-[2px]
                          bg-white
                            w-12
                            mx-start
                            my-3
                            cursor-pointer"></div>

            <p className="text-start
                          text-sm
                          cursor-pointer">
              The gradual accumulation of information about atomic and small-scale behaviour...
            </p>

          </div>
        </div>
      </div>
    </div>
  );

}
