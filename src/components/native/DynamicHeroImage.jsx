"use client";
import React from "react";
import logo from "@/assets/brand/logo.png";
import { Carousel } from "@material-tailwind/react";
import Typewriter from "typewriter-effect";
export default function DynamicHeroImage() {
  return (
    <div className=" bg-blue-50 lg:px-32 lg:flex   items-center h-[560px] w-full ">
      <div className="text-2xl p-10 lg:p-0   lg:text-6xl font-bold lg:w-1/2 text-[#345873] ">
        <p className="text-blue-600 lg:text-4xl mb-2">Experienced</p>{" "}
        <Typewriter
          options={{
            strings: ["Building", "Plumbing", "Tiling", "Painting"],
            autoStart: true,
            loop: true,
          }}
        />{" "}
        <p className="text-blue-600 lg:text-4xl mt-2">services for your home</p>{" "}
        <a
          href="/get-a-quote"
          className="py-3 px-4 inline-flex hover:text-blue-600 hover:border-blue-600   border-transparent bg-blue-600 text-white items-center gap-x-2 text-sm font-medium  mt-6  lg:mt-40 border    shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Get a Quote
          <svg
            class="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className=" lg:hidden grid grid-cols-3 bg-blue-600/50">
        <img
          className="h-60 object-cover object-center"
          src="https://plus.unsplash.com/premium_photo-1680787305991-c8d3096624dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRlcnxlbnwwfHwwfHx8MA%3D%3D"
        />
        <img
          className="h-60 object-cover object-center"
          src="https://images.unsplash.com/photo-1523413307857-ef24c53571ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGlsaW5nfGVufDB8fDB8fHww"
        />
        <img
          className="h-60 object-cover object-center"
          src="https://images.unsplash.com/photo-1542013936693-884638332954?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGx1bWJpbmd8ZW58MHx8MHx8fDA%3D"
        />
      </div>
      <div className="  hidden lg:flex relative w-2/3 items-center  ">
        <div class="p-5 sm:p-8">
          <div class="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
            <img src="https://source.unsplash.com/bYuI23mnmDQ" />
            <img src="https://source.unsplash.com/Nllx4R-2c3o" />
            <img src="https://source.unsplash.com/lp40q07DIe0" />
            <img src="https://source.unsplash.com/wfalq01jJuU" />
            <img src="https://source.unsplash.com/rMHNK_skwwU" />
            <img src="https://source.unsplash.com/WBMjuGpbrCQ" />
            <img src="https://source.unsplash.com/nCUZ5BYBL_o" />
            <img src="https://source.unsplash.com/3u4fzMQZhjc" />
            <img src="https://source.unsplash.com/haOIqIPSwps" />
          </div>
        </div>
      </div>
    </div>
  );
}
