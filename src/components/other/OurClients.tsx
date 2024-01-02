import React from "react";

export default function OurClients() {
  return (
    <div>
      {" "}
      <div className="max-w-[85rem] px-4  py-4 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mb-6">
          <h2 className="  text-2xl dark:text-gray-400 font-bold">
            Our Partners
          </h2>
        </div>

        <div className="flex justify-center items-center gap-x-6 sm:gap-x-12 lg:gap-x-24">
          <a href="https://www.tigerservices.co.za">
            <img
              className="lg:w-40 w-28 lg:h-20"
              src="https://www.tigerservices.co.za/sitepad-data/uploads/2021/08/LOGO.jpg"
            />
          </a>
          <a href="https://denicrafts.vercel.app">
            <img
              className="lg:w-40 w-28 lg:h-12"
              src="https://denicrafts.vercel.app/brand/logo.png"
            />
          </a>
          <a href="https://smanga-the-builder.vercel.app/">
            <img className="lg:w-64 w-28 lg:h-14" src="/images/smangabb.png" />
          </a>

          <a href="https://larrycodes.vertueal.com">
            <img className=" h-4 lg:h-8" src="/images/lcodes.png" />
          </a>
        </div>
      </div>
    </div>
  );
}
