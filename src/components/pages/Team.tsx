"use client";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
export default function Team() {
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Our Team
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            These are the contractors that form our team
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
            <div className="flex items-center gap-x-4">
              <img
                className="rounded-full w-20 h-20"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                alt="Image Description"
              />
              <div className="grow">
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  Wellington
                </h3>
                <p className="text-xs uppercase text-gray-500">
                  Manager / Painter
                </p>
              </div>
            </div>

            <p className="mt-3 text-gray-500">
              As the painter on our team, my passion lies in transforming spaces
              with vibrant colors and impeccable finishes, ensuring each stroke
              adds a touch of artistic elegance to your surroundings.
            </p>

            <div className="mt-3 space-x-1">
              <a
                className="inline-flex justify-center items-center w-8 h-8  font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <AiFillInstagram />
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <IoLogoWhatsapp />
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
            <div className="flex items-center gap-x-4">
              <img
                className="rounded-full w-20 h-20"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                alt="Image Description"
              />
              <div className="grow">
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  Washington
                </h3>
                <p className="text-xs uppercase text-gray-500">Carpenter</p>
              </div>
            </div>

            <p className="mt-3 text-gray-500">
              Crafting with precision and skill, I am the carpenter on our team.
              From custom furniture pieces to intricate woodwork, my goal is to
              bring your vision to life, adding a touch of warmth and
              sophistication to your home or project.
            </p>

            <div className="mt-3 space-x-1">
              <a
                className="inline-flex justify-center items-center w-8 h-8  font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <AiFillInstagram />
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <IoLogoWhatsapp />
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
            <div className="flex items-center gap-x-4">
              <img
                className="rounded-full w-20 h-20"
                src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                alt="Image Description"
              />
              <div className="grow">
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  Mickel
                </h3>
                <p className="text-xs uppercase text-gray-500">Plumber</p>
              </div>
            </div>

            <p className="mt-3 text-gray-500">
              I am the plumber on our team, dedicated to ensuring the smooth
              flow of water and efficient plumbing systems. With attention to
              detail and a focus on functionality, I contribute to the overall
              comfort and functionality of your space.
            </p>

            <div className="mt-3 space-x-1">
              <a
                className="inline-flex justify-center items-center w-8 h-8  font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <AiFillInstagram />
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <IoLogoWhatsapp />
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
            <div className="flex items-center gap-x-4">
              <img
                className="rounded-full w-20 h-20"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                alt="Image Description"
              />
              <div className="grow">
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  Malcom
                </h3>
                <p className="text-xs uppercase text-gray-500">Builder</p>
              </div>
            </div>

            <p className="mt-3 text-gray-500">
              I take pride in being the builder of our team, dedicated to
              constructing sturdy foundations and structures that stand the test
              of time, with a keen eye for detail and a commitment to quality
              craftsmanship.
            </p>

            <div className="mt-3 space-x-1">
              <a
                className="inline-flex justify-center items-center w-8 h-8  font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <AiFillInstagram />
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <IoLogoWhatsapp />
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
            <div className="flex items-center gap-x-4">
              <img
                className="rounded-full w-20 h-20"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                alt="Image Description"
              />
              <div className="grow">
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  Wisdom
                </h3>
                <p className="text-xs uppercase text-gray-500">Tiler</p>
              </div>
            </div>

            <p className="mt-3 text-gray-500">
              As the tiler on our team, my expertise lies in creating seamless
              and visually stunning surfaces, meticulously placing each tile to
              bring both functionality and aesthetic appeal to your spaces.
            </p>

            <div className="mt-3 space-x-1">
              <a
                className="inline-flex justify-center items-center w-8 h-8  font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <AiFillInstagram />
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <IoLogoWhatsapp />
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          <a
            className="col-span-full lg:col-span-1 group flex flex-col justify-center text-center rounded-xl p-4 md:p-6 border border-dashed border-gray-200 hover:shadow-sm dark:border-gray-700"
            href="#"
          >
            <h3 className="text-lg text-gray-800 dark:text-gray-200">
              We are open to artnering!
            </h3>
            <div>
              <span className="inline-flex items-center gap-x-2 text-blue-600 group-hover:text-blue-700 dark:text-blue-500 dark:group-hover:text-blue-400">
                See the trades we accept
                <svg
                  className="flex-shrink-0 w-4 h-4"
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
