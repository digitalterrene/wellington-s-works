"use client";
import { ImQuotesLeft } from "react-icons/im";
import React, { useEffect } from "react";
import Carousel from "../native/Carousel";
import OurClients from "../other/OurClients";
import dizzy from "@/assets/icons/dizzy.png";
import ReasonsWhyUs from "../other/ReasonsWhyUs";
import Footer from "../native/Footer";
export default function RootPage() {
  return (
    <div className="">
      <div className="lg:p-20 p-4 lg:flex justify-between w-full bg-[#1C2335]">
        <div>
          <p className="text-white font-bold  lg:text-6xl">
            What Our Manager Often Say
          </p>
          <button className="text-white hover:bg-white p-2 hover:text-[#1C2335] mt-6 lg:mt-20 border w-fit lg:p-4">
            Meet the Manager
          </button>
        </div>
        <div style={{ position: "relative" }}>
          <img
            src="https://res.cloudinary.com/dq4ceizj6/image/upload/v1704137248/digital_painting_agency/paving/IMG-20231231-WA0241_pejfnj.jpg"
            className="ml-auto object-top object-cover rounded-full w-24 lg:w-60 h-24 lg:h-60"
          />
          <div className="lg:w-[500px] w-[320px] h-fit lg:h-52 z-50 lg:mr-40 relative rounded-xl text-white lg:-mt-32 bg-white/20">
            <div className="relative ml-6 lg:ml-0 h-full">
              <ImQuotesLeft
                width="16"
                height="16"
                className="absolute -top-8 lg:-top-6 -start-8 h-16 w-16 text-gray-100 dark:text-gray-700"
              />
              <div className="relative lg:w-11/12 z-10">
                <p className="text-white p-8 pr-12 text-xs lg:text-xl dark:text-white">
                  <em>
                    It's not about speeding up to cut costs at the expence of a
                    quality job delivery; It's about ticking every box of the
                    client's expectations that they may speed up giving you more
                    jobs
                  </em>
                </p>
              </div>
              <ImQuotesLeft
                width="16"
                height="16"
                className="absolute -bottom-5 -end-8 h-16 w-16 transform scale-x-[-1] text-gray-100 dark:text-gray-700"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dq4ceizj6/image/upload/v1704139247/digital_painting_agency/paving/IMG-20231231-WA0249_gob0cz.jpg')`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className=" h-[470px] mt-10  lg:mt-0 lg:h-[900px] "
      >
        <div className="lg:h-[800px] items-center sticky top-32 gap-10 lg:flex justify-between  mb-72 p-10 lg:p-20">
          <img
            className="w-[800px] object-cover object-center h-[470px] lg:h-[600px]"
            src="https://res.cloudinary.com/dq4ceizj6/image/upload/v1704135842/digital_painting_agency/paving/IMG-20231231-WA0218_an8m2m.jpg"
          />
          <div className="bg-white/60 p-8 h-fit w-full">
            <p className="border-b flex justify-between border-[#1C2335] pb-3 font-semibold  lg:text-2xl">
              Painting walls, roofs and everything paintable{" "}
              <span className="text-blue-600 text-3xl ml-6">01</span>{" "}
            </p>
            <p className="border-b flex justify-between border-[#1C2335] mt-6 pb-3 font-semibold  lg:text-2xl">
              Plumbing installations and maintanances
              <span className="text-blue-600 text-3xl ml-6">02</span>{" "}
            </p>
            <p className="border-b flex justify-between border-[#1C2335] mt-6 pb-3 font-semibold  lg:text-2xl">
              Building structures and partionings
              <span className="text-blue-600 text-3xl ml-auto">03</span>{" "}
            </p>
            <p className="border-b flex justify-between border-[#1C2335] mt-6 pb-3 font-semibold  lg:text-2xl">
              Tiling floors, walls and pavings
              <span className="text-blue-600 text-3xl ml-auto">04</span>{" "}
            </p>
            <p className="border-b flex justify-between border-[#1C2335] mt-6 pb-3 font-semibold  lg:text-2xl">
              General and client's-specifics
              <span className="text-blue-600 text-3xl ml-auto">05</span>{" "}
            </p>
          </div>
        </div>
        <div className="-mt-60 bg-gray-50  lg:max-w-5xl mx-auto h-fit lg:h-[660px] border">
          <p className="text-lg lg:text-6xl font-bold text-center p-4 lg:p-10">
            Testimonials
          </p>
        </div>
        <div className=" lg:-mt-[560px] -mt-20  h-full  w-full lg:px-20">
          <Carousel />
        </div>
        <div className="lg:-mt-96">
          <OurClients />
        </div>
        <div className="w-full lg:flex justify-between bg-[#163C59] text-white">
          <div className="lg:p-32 flex  p-8">
            <div className="lg:space-y-4 flex gap-1  items-center lg:flex-col">
              <p className=" lg:text-3xl font-bold">Do you have a </p>
              <p className="text-blue-600 lg:text-7xl font-bold">
                Construction
              </p>
              <p className=" lg:text-3xl font-bold">problem ?</p>
            </div>
          </div>
          <img
            className=" object-cover object-center"
            src="https://img.freepik.com/free-photo/woman-being-fed-up-taking-care-problems-loaded-her-head-holding-hand-hair-pursing-lips-with-sad-annoyed-smile-holding-arm-waist-being-tired-bothered-with-troubles_176420-23313.jpg?size=626&ext=jpg&ga=GA1.1.1135384207.1703006759&semt=sph"
          />
        </div>
        <ReasonsWhyUs />
        <div className="pt-20">
          <Footer />
        </div>
      </div>
    </div>
  );
}
