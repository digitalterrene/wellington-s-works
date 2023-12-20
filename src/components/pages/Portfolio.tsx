import React from "react";

export default function Portfolio() {
  return (
    <div>
      <div>
        <div className="mx-auto text-center p-10">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
            Our Portfolio
          </h1>
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
              <div>
                <img
                  className="w-16"
                  src="https://cdn-icons-png.flaticon.com/128/10995/10995390.png"
                />
                <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-white/0 h-0.5 mt-6">
                  <div className="bg-[#26D701] w-full h-0.5"></div>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Completed
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Jobs completed up to date:
                    <span className="text-[#26D701]">5678</span>
                  </p>
                </div>
              </div>
              <div>
                <img
                  className="w-16"
                  src="https://cdn-icons-png.flaticon.com/128/10797/10797053.png"
                />
                <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-white/0 h-0.5 mt-6">
                  <div className="bg-[#FFDF5E] w-1/2 h-0.5"></div>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Clients
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    We have over <span className="text-[#FFDF5E]">31</span>{" "}
                    clients
                  </p>
                </div>
              </div>
              <div>
                <img
                  className="w-16"
                  src="https://cdn-icons-png.flaticon.com/128/10335/10335598.png"
                />
                <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-white/0 h-0.5 mt-6">
                  <div className="bg-[#2492FF] w-full h-0.5"></div>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Avg Rating
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Our google rating is{" "}
                    <span className="text-[#2492FF]">4.2</span> stars
                  </p>
                </div>
              </div>
              <div>
                <img
                  className="w-16"
                  src="https://cdn-icons-png.flaticon.com/128/10926/10926053.png"
                />
                <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-white/0 h-0.5 mt-6">
                  <div className="bg-[#007B9A] w-9 h-0.5"></div>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Avg Cost
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    We are highly affordable
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="space-y-2">
            <img
              className="w-full h-auto object-cover"
              src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
            />
            <img
              className="w-full h-auto object-cover"
              src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
              alt="Image Description"
            />
            <img
              className="w-full h-auto object-cover"
              src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="Image Description"
            />
          </div>
          <div className="space-y-2">
            <img
              className="w-full h-auto object-cover"
              src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              alt="Image Description"
            />
            <img
              className="w-full h-auto object-cover"
              src="https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="Image Description"
            />
          </div>
          <div className="space-y-2">
            <img
              className="w-full h-auto object-cover"
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
            />
            <img
              className="w-full h-auto object-cover"
              src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
              alt="Image Description"
            />
            <img
              className="w-full h-auto object-cover"
              src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
            />
          </div>
          <div className="space-y-2">
            <img
              className="w-full h-auto object-cover"
              src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
              alt="Image Description"
            />
            <img
              className="w-full h-auto object-cover"
              src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3465&q=80"
              alt="Image Description"
            />
          </div>
        </div>
      </div>
      <div className="relative my-20 overflow-hidden">
        <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
          <div className="md:pe-8 md:w-1/2 xl:pe-0 xl:w-5/12">
            <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-gray-200">
              Solving problems for every{" "}
              <span className="text-blue-600 dark:text-blue-500">team</span>
            </h1>
            <p className="mt-3 text-base text-gray-500">
              Built on standard web technology, teams use Preline to build
              beautiful cross-platform hybrid apps in a fraction of the time.
            </p>

            <div className="mt-8 grid">
              <button
                type="button"
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <svg
                  className="w-4 h-auto"
                  width="46"
                  height="47"
                  viewBox="0 0 46 47"
                  fill="none"
                >
                  <path
                    d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                    fill="#34A853"
                  />
                  <path
                    d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                    fill="#EB4335"
                  />
                </svg>
                Sign up with Google
              </button>
            </div>

            <div className="py-6 flex items-center text-sm text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:me-6 after:flex-[1_1_0%] after:border-t after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
              Or
            </div>

            <form>
              <div className="mb-4">
                <label
                  htmlFor="hs-hero-name-2"
                  className="block text-sm font-medium dark:text-white"
                >
                  <span className="sr-only">Full name</span>
                </label>
                <input
                  type="text"
                  id="hs-hero-name-2"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Full name"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="hs-hero-email-2"
                  className="block text-sm font-medium dark:text-white"
                >
                  <span className="sr-only">Email address</span>
                </label>
                <input
                  type="email"
                  id="hs-hero-email-2"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Email address"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="hs-hero-password-2"
                  className="block text-sm font-medium dark:text-white"
                >
                  <span className="sr-only">Password</span>
                </label>
                <input
                  type="email"
                  id="hs-hero-password-2"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Password"
                />
              </div>

              <div className="grid">
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="hidden md:block md:absolute md:top-0 md:start-1/2 md:end-0 h-full bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')] bg-no-repeat bg-center bg-cover"></div>
      </div>
    </div>
  );
}
