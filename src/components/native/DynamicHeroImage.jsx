"use client";
import React from "react";
import logo from "@/assets/brand/logo.png";
import { Carousel } from "@material-tailwind/react";
import Typewriter from "typewriter-effect";
export default function DynamicHeroImage() {
  return (
    <div className="w-full bg-blue-50 py-10 lg:py-32">
      <div className=" bg-cover bg-no-repeat pl-6 lg:pl-32 lg:flex justify-between  items-center h-[560px] w-full object-cover">
        <div className="text-2xl lg:text-6xl font-bold lg:w-1/2 text-[#345873] ">
          <p className="text-blue-600 lg:text-4xl mb-2">Experienced</p>{" "}
          <Typewriter
            options={{
              strings: ["Building", "Plumbing", "Tiling", "Painting"],
              autoStart: true,
              loop: true,
            }}
          />{" "}
          <p className="text-blue-600 lg:text-4xl mt-2">
            services for your home
          </p>{" "}
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
        <div className="flex relative items-center  ">
          <img
            style={{ zIndex: 70 }}
            src="https://img.freepik.com/free-photo/masonry-worker-outside-wall-with-trowel-knife_1150-13620.jpg?size=626&ext=jpg&ga=GA1.1.1135384207.1703006759&semt=ais"
            className="h-96 lg:w-60 -ml-3 lg:-ml-0 mt-4 lg:mt-0 relative  object-cover"
          />
          <div className="w-auto hidden lg:block">
            <img
              style={{ zIndex: 20 }}
              src="https://img.freepik.com/free-photo/piping-with-taps_169016-5374.jpg?size=626&ext=jpg&ga=GA1.1.1135384207.1703006759&semt=sph"
              className=" z-50 relative object-cover "
            />
            <img
              src="https://img.freepik.com/free-photo/wall-painting-with-roller_23-2148903465.jpg?size=626&ext=jpg&ga=GA1.1.1135384207.1703006759&semt=sph"
              className=" h-96"
            />
          </div>

          <img
            src="https://img.freepik.com/free-photo/batako-wall-texture-street_272375-3178.jpg?size=626&ext=jpg&ga=GA1.1.1135384207.1703006759&semt=sph"
            className="-ml-10 hidden lg:block  h-96 w-96"
          />
        </div>
      </div>
    </div>
  );
}
