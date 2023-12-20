"use client";
import { ImQuotesLeft } from "react-icons/im";
import React from "react";
import Carousel from "../native/Carousel";
import OurClients from "../other/OurClients";
import dizzy from "@/assets/icons/dizzy.png";
import ReasonsWhyUs from "../other/ReasonsWhyUs";
import Footer from "../native/Footer";
export default function RootPage() {
  return (
    <div className="">
      <div className="p-20 flex justify-between w-full bg-[#1C2335]">
        <div>
          <p className="text-white font-bold  text-6xl">
            What Our Manager Often Say
          </p>
          <button className="text-white hover:bg-white hover:text-[#1C2335] mt-20 border w-fit p-4">
            Meet the Manager
          </button>
        </div>
        <div style={{ position: "relative" }}>
          <img
            src="https://img.freepik.com/free-photo/cheerful-young-man-dressed-shirt-wearing-hat_171337-17093.jpg?size=626&ext=jpg&ga=GA1.1.1135384207.1703006759&semt=ais"
            className="ml-auto objecte cente object-cover rounded-full w-60 h-60"
          />
          <div className="w-[500px] h-52 z-50 mr-40 relative rounded-xl text-white -mt-32 bg-white/20">
            <div className="relative h-full">
              <ImQuotesLeft
                width="16"
                height="16"
                className="absolute -top-6 -start-8 h-16 w-16 text-gray-100 dark:text-gray-700"
              />
              <div className="relative w-11/12 z-10">
                <p className="text-white p-8 pr-12 sm:text-xl dark:text-white">
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
          backgroundImage: `url('https://img.freepik.com/free-photo/painting-walls-pink_53876-63286.jpg?size=626&ext=jpg&ga=GA1.1.1135384207.1703006759&semt=sph')`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className=" h-[900px] "
      >
        <div className="h-[800px] items-center sticky top-32 gap-10 flex justify-between mb-72 p-20">
          <img src="https://img.freepik.com/free-photo/medium-shot-smiley-man-posing-with-helmet_23-2148920601.jpg?size=626&ext=jpg&ga=GA1.1.1135384207.1703006759&semt=ais" />
          <div className="bg-white/60 p-8 h-fit w-full">
            <p className="border-b flex justify-between border-[#1C2335] pb-3 font-semibold text-2xl">
              Painting walls, roofs and everything paintable{" "}
              <span className="text-blue-600 text-3xl ml-6">01</span>{" "}
            </p>
            <p className="border-b flex justify-between border-[#1C2335] mt-6 pb-3 font-semibold text-2xl">
              Plumbing installations and maintanances
              <span className="text-blue-600 text-3xl ml-6">02</span>{" "}
            </p>
            <p className="border-b flex justify-between border-[#1C2335] mt-6 pb-3 font-semibold text-2xl">
              Building structures and partionings
              <span className="text-blue-600 text-3xl ml-auto">03</span>{" "}
            </p>
            <p className="border-b flex justify-between border-[#1C2335] mt-6 pb-3 font-semibold text-2xl">
              Tiling floors, walls and pavings
              <span className="text-blue-600 text-3xl ml-auto">04</span>{" "}
            </p>
            <p className="border-b flex justify-between border-[#1C2335] mt-6 pb-3 font-semibold text-2xl">
              General and client's-specifics
              <span className="text-blue-600 text-3xl ml-auto">05</span>{" "}
            </p>
          </div>
        </div>
        <div className="-mt-60 bg-gray-50 max-w-5xl mx-auto h-[660px] border">
          <p className="text-6xl font-bold text-center p-10">Testimonials</p>
        </div>
        <div className=" -mt-[560px] h-full  w-full px-20">
          <Carousel />
        </div>
        <OurClients />
        <div className="w-full flex justify-between bg-[#F5F4F9]">
          <div className="p-32  ">
            <p className=" text-3xl font-bold">
              You have a
              <span className="text-blue-600 text-7xl p-2">Construction</span>
              problem?
            </p>
            <div className="flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/64/64818.png"
                className=" h-32 "
              />
              <div className="mt-32 ml-20   ">
                <img src={dizzy.src} className="w-20 " />
              </div>
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
