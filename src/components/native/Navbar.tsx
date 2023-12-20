import React from "react";
import logo from "@/assets/brand/logo.png";
import { MdRoofing } from "react-icons/md";
export default function Navbar() {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-[#1C2335] text-sm py-4 dark:bg-white">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="flex w-96 gap-2 items-center text-xl font-semibold text-white dark:text-gray-800"
            href="/"
          >
            <MdRoofing className="font-bold text-6xl" />
            <p className="text-white w-fit text-3xl">Wellington's Works</p>
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-lg border border-gray-700 font-medium bg-gray-800 text-gray-400 shadow-sm align-middle hover:bg-gray-700/[.25] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              data-hs-collapse="#navbar-dark"
              aria-controls="navbar-dark"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
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
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-dark"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <a
              className="font-medium text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="/"
              aria-current="page"
            >
              Home
            </a>
            <a
              className="font-medium text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="/portfolio"
            >
              Portfolio
            </a>
            <a
              className="font-medium text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="team"
            >
              Team
            </a>
            <a
              className="font-medium text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="/contact-us"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
