"use client";
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
export default function DynamicHeroImage() {
  const services = [
    "Brick Work",
    "Plastering",
    "Rhinolite",
    "Paving",
    "Painting",
    "Tiling",
    "Plumbing",
    "Ceilings",
    "Built-in Cupboards",
    "Irrigation",
    "Tennis Courts Revamp",
  ];
  return (
    <div className=" bg-blue-50  lg:flex   items-center hsed-[580px] w-full ">
      <div className="text-2xl p-10     lg:text-6xl font-bold lg:w-1/2 text-[#345873] ">
        <p className="text-blue-600 lg:text-4xl mb-2">Experienced</p>{" "}
        <Typewriter
          options={{
            strings: services,
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
      <div className=" lg:hidden grid grid-cols-3 ">
        <img
          className="h-60 object-cover object-center"
          src="https://res.cloudinary.com/dq4ceizj6/image/upload/v1704135675/digital_painting_agency/paving/IMG-20231231-WA0015_slyiej.jpg"
        />
        <img
          className="h-60 object-cover object-center"
          src="https://res.cloudinary.com/dq4ceizj6/image/upload/v1704135674/digital_painting_agency/paving/IMG-20231231-WA0011_h3roen.jpg"
        />
        <img
          className="h-60 object-cover object-center"
          src="https://res.cloudinary.com/dq4ceizj6/image/upload/v1704135777/digital_painting_agency/paving/IMG-20231231-WA0131_d01ou9.jpg"
        />
      </div>
      <div className="    hidden lg:flex relative w-1/2 items-center  ">
        <div class=" ">
          <div class="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
            <img
              className=""
              src="https://res.cloudinary.com/dq4ceizj6/image/upload/v1704136643/digital_painting_agency/paving/IMG-20231231-WA0175_n3j78y.jpg"
            />
            <img src="https://res.cloudinary.com/dq4ceizj6/image/upload/v1704139069/digital_painting_agency/paving/IMG-20231231-WA0246_r5pu94.jpg" />
            <img
              className=""
              src="https://res.cloudinary.com/dq4ceizj6/image/upload/v1704135992/digital_painting_agency/paving/IMG-20231231-WA0047_qe6x2e.jpg"
            />
            <img src="https://res.cloudinary.com/dq4ceizj6/image/upload/v1704136084/digital_painting_agency/paving/IMG-20231231-WA0066_psohql.jpg" />
            <img src="https://res.cloudinary.com/dq4ceizj6/image/upload/v1704135777/digital_painting_agency/paving/IMG-20231231-WA0131_d01ou9.jpg" />
            <img
              className=""
              src="https://res.cloudinary.com/dq4ceizj6/image/upload/v1704135842/digital_painting_agency/paving/IMG-20231231-WA0218_an8m2m.jpg"
            />
            <img src="https://res.cloudinary.com/dq4ceizj6/image/upload/v1704135675/digital_painting_agency/paving/IMG-20231231-WA0014_qewq8g.jpg" />
            <img
              className=""
              src="https://res.cloudinary.com/dq4ceizj6/image/upload/v1704135695/digital_painting_agency/paving/IMG-20231231-WA0009_i1ii8d.jpg"
            />
            <img src="https://res.cloudinary.com/dq4ceizj6/image/upload/v1704136613/digital_painting_agency/paving/IMG-20231231-WA0164_qetku7.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
