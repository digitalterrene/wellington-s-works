import React from "react";
import dots from "@/assets/icons/dots.png";
import wearetop from "@/assets/images/wearetopnotch.png";
import afforda from "@/assets/images/afforda.png";
export default function ReasonsWhyUs() {
  return (
    <div className=" w-full">
      <div className="lg:flex lg:p-40 p-4 gap-8  items-center  justify-between">
        <div className="lg:w-2/3 lg:pr-12 space-y-3 mb-4">
          <p className="lg:text-5xl text-2xl mb-6 font-bold">Why Choose Us</p>
          <hr />
          <li className="lg:text-2xl font-bold  ">Quality and Expertise</li>
          <div className="  bg-gray-100/50 p-8   rounded-none text-gray-600">
            When you choose us, you're opting for unparalleled quality and
            expertise. Our team comprises seasoned professionals who bring years
            of experience and skill to every project. From intricate details in
            design to the flawless execution of tasks, our commitment to
            excellence is unwavering.
          </div>
          <li className=";g:text-2xl font-bold  ">Customer-Centric Approach</li>
          <div className="mb-6 bg-pink-50/30 p-8  rounded-none text-gray-600">
            We understand that your satisfaction is the cornerstone of our
            success. From the initial consultation to the completion of the
            project, we prioritize clear communication and transparency. We
            listen to your needs, offer tailored solutions, and keep you
            informed every step of the way.
          </div>
          <li className="lg:text-2xl font-bold  ">
            Proven Track Record and Trust
          </li>
          <div className="mb-6 bg-yellow-50 p-8  rounded-none text-gray-600">
            Trust is earned, and over the years, we have built a solid
            reputation for reliability and integrity. Our proven track record
            showcases successful projects, satisfied clients, and a commitment
            to delivering on our promises. When you choose us, you're selecting
            a partner you can trust.
          </div>
        </div>
        <div className="lg:w-1/2 -mt-10">
          <div className="ml-auto  lg:-mr-12 w-fit">
            <img src={dots.src} className="-mb-8 lg:ml-16 w-32" />
          </div>
          <img
            className="lg:h-[500px] w-full object-cover object-start h-60"
            src="https://res.cloudinary.com/dq4ceizj6/image/upload/v1704135694/digital_painting_agency/paving/IMG-20231231-WA0006_v2vegb.jpg"
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
