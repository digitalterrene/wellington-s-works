"use client";
import React from "react";
import { MdOutlineClear, MdRoofing } from "react-icons/md";
import { usePathname } from "next/navigation";
import { Button, Drawer } from "@material-tailwind/react";
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
  const pathname = usePathname();
  const [openRight, setOpenRight] = React.useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-[#1C2335] text-sm py-4 dark:bg-white">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="flex lg:w-96 gap-3 items-center text-xl font-semibold text-white dark:text-gray-800"
            href="/"
          >
            <img
              src="/icons/logo.png"
              className="font-bold bg-white rounded w-10  lg:w-16 text-5xl lg:text-6xl"
            />
            <p className="text-white text-lg lg:w-fit lg:text-2xl">
              Digital Painting Agency
            </p>
          </a>
          <Button
            className="ml-auto lg:hidden p-0 h-8 w-8 text-2xl flex justify-center bg-transparent   rounded-none text-white items-center"
            onClick={openDrawerRight}
          >
            <IoMdMenu />
          </Button>
        </div>
        <div
          id="navbar-dark"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <a
              className={`font-medium ${
                pathname === "/"
                  ? "text-white  border hover:bg-white hover:text-[#1C2335]  py-1 px-4"
                  : "text-gray-400"
              } dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
              href="/"
              aria-current="page"
            >
              Home
            </a>
            <a
              className={`font-medium ${
                pathname === "/portfolio"
                  ? "text-white  border hover:bg-white hover:text-[#1C2335]  py-1 px-4"
                  : "text-gray-400"
              } dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
              href="/portfolio"
            >
              Portfolio
            </a>
            <a
              className={`font-medium ${
                pathname === "/team"
                  ? "text-white  border hover:bg-white hover:text-[#1C2335]  py-1 px-4"
                  : "text-gray-400"
              } dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
              href="team"
            >
              Team
            </a>
            <a
              className={`font-medium ${
                pathname === "/contact-us"
                  ? "text-white  border hover:bg-white hover:text-[#1C2335]  py-1 px-4"
                  : "text-gray-400"
              } dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
              href="/contact-us"
            >
              Contact Us
            </a>
          </div>
        </div>
        <Drawer
          placement="right"
          open={openRight}
          onClose={closeDrawerRight}
          className="p-4"
        >
          <Button
            className="ml-auto p-0 h-8 w-8 bg-[#1C2335]  rounded-none text-2xl flex justify-center text-white items-center"
            onClick={closeDrawerRight}
          >
            <MdOutlineClear />
          </Button>
          <div
            id="navbar-dark"
            className="hs-collapse   overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <a
                className={`font-medium   dark:focus:outline-none text-[#1C2335] dark:focus:ring-1 dark:focus:ring-gray-600`}
                href="/"
                aria-current="page"
              >
                Home
              </a>
              <a
                className={`font-medium   dark:focus:outline-none text-[#1C2335] dark:focus:ring-1 dark:focus:ring-gray-600`}
                href="/portfolio"
              >
                Portfolio
              </a>
              <a
                className={`font-medium   dark:focus:outline-none text-[#1C2335] dark:focus:ring-1 dark:focus:ring-gray-600`}
                href="team"
              >
                Team
              </a>
              <a
                className={`font-medium   dark:focus:outline-none text-[#1C2335] dark:focus:ring-1 dark:focus:ring-gray-600`}
                href="/contact-us"
              >
                Contact Us
              </a>
            </div>
          </div>
        </Drawer>
      </nav>
    </header>
  );
}
