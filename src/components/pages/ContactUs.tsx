import React from "react";

export default function ContactUs() {
  return (
    <div>
      <div className="   pb-10  lg:pb-14  ">
        <div
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1562762394-3acfba62a48e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGNvbnRhY3QlMjB1c3xlbnwwfHwwfHx8MA%3D%3D')`,
          }}
          className="p-20     text-white "
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold sm:text-4xl dark:text-white">
              Contact us
            </h1>
            <p className="mt-1  ">
              We'd love to talk about how we can help you.
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
            <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
              Fill in the form
            </h2>

            <form>
              <div className="grid gap-4 lg:gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="hs-firstname-contacts-1"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="hs-firstname-contacts-1"
                      id="hs-firstname-contacts-1"
                      className="py-3 px-4 block w-full  border border-[#1C2335] text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hs-lastname-contacts-1"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="hs-lastname-contacts-1"
                      id="hs-lastname-contacts-1"
                      className="py-3 px-4 block w-full  border border-[#1C2335] text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="hs-email-contacts-1"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="hs-email-contacts-1"
                      id="hs-email-contacts-1"
                      autoComplete="email"
                      className="py-3 px-4 block w-full  border border-[#1C2335] text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hs-phone-number-1"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="hs-phone-number-1"
                      id="hs-phone-number-1"
                      className="py-3 px-4 block w-full  border border-[#1C2335] text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="hs-about-contacts-1"
                    className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Details
                  </label>
                  <textarea
                    id="hs-about-contacts-1"
                    name="hs-about-contacts-1"
                    rows={4}
                    className="py-3 px-4 block w-full border border-[#1C2335] text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  ></textarea>
                </div>
              </div>

              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold   border-transparent bg-[#1C2335] text-white   disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Send inquiry
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">
                  We'll get back to you in 1-2 business days.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
