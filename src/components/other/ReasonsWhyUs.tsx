import React from "react";
import dots from "@/assets/icons/dots.png";
import wearetop from "@/assets/images/wearetopnotch.png";
import afforda from "@/assets/images/afforda.png";
export default function ReasonsWhyUs() {
  return (
    <div className=" w-full">
      <div className="lg:flex lg:p-40 p-4 gap-8  items-center  justify-between">
        <div className="lg:w-2/3 space-y-3 mb-4">
          <p className="lg:text-5xl text-2xl font-bold">
            This is the reason why many people use our services
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div>states</div>
        </div>
        <div className="lg:w-1/2 -mt-10">
          <div className="ml-auto  lg:-mr-12 w-fit">
            <img src={dots.src} className="-mb-8 lg:ml-16 w-32" />
          </div>
          <img
            className="lg:h-96 object-cover object-center h-60"
            src="https://img.freepik.com/free-photo/abstract-app-social-web-service-object_1418-520.jpg?size=626&ext=jpg&ga=GA1.1.1135384207.1703006759&semt=sph"
          />
          <div className=" -ml-16 w-fit">
            <img src={dots.src} className="-mt-8    w-32" />
          </div>
        </div>
      </div>
      <div className="lg:grid   lg:px-20  gap-4 grid-cols-2">
        <div className="flex bg-[#163C59] h-fit   text-white w-full">
          <div className="w-1/2 space-y-3">
            <div className="px-6 py-2 h-fit w-fit bg-red-900 text-3xl flex items-center justify-center font-bold text-white">
              1
            </div>
            <p className="font-bold px-6 lg:text-2xl">We are Top Notch</p>
            <p className="px-6 text-xs lg:text-md">
              We do not brag but our clients seems to rate us very highly. And
              as a humble people, just like every reasonable person, we believe
              the client is always right
            </p>
          </div>
          <img className="w-1/2  lg:h-80 object-cover  " src={wearetop.src} />
        </div>
        <div className="flex lg:flex-row flex-row-reverse bg-[#163C59] h-fit text-white w-full">
          <div className="w-1/2 space-y-3">
            <div className="px-6 py-2 h-fit w-fit bg-red-900  text-3xl flex items-center justify-center font-bold text-white">
              2
            </div>
            <p className="font-bold px-6 lg:text-2xl">Affordability</p>
            <p className="px-6 text-xs lg:text-md">
              We pride in making your as our client, you get your desired
              services from us at a price that you will genuenily lable
              'affordable'. All this is done with zero compromizations
            </p>
          </div>
          <img
            className="w-1/2 lg:h-80 object-cover object-center"
            src={afforda.src}
          />
        </div>
      </div>
    </div>
  );
}
