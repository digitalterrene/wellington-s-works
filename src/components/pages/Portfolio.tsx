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
              <div className="flex flex-col items-center">
                <img
                  className="w-16"
                  src="https://cdn-icons-png.flaticon.com/128/10995/10995390.png"
                />
                <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-white/0 h-0.5 mt-6">
                  <div className="bg-[#26D701] w-60 h-0.5"></div>
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
              <div className="flex flex-col items-center">
                <img
                  className="w-16"
                  src="https://cdn-icons-png.flaticon.com/128/10797/10797053.png"
                />
                <div className="bg-gradient-to-r w-60 from-gray-200 via-gray-50 to-white/0 h-0.5 mt-6">
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
              <div className="flex flex-col items-center">
                <img
                  className="w-16"
                  src="https://cdn-icons-png.flaticon.com/128/10335/10335598.png"
                />
                <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-white/0 h-0.5 mt-6">
                  <div className="bg-[#2492FF]  w-60 h-0.5"></div>
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
              <div className="flex flex-col items-center">
                <img
                  className="w-16"
                  src="https://cdn-icons-png.flaticon.com/128/10926/10926053.png"
                />
                <div className="bg-gradient-to-r w-60 from-gray-200 via-gray-50 to-white/0 h-0.5 mt-6">
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
    </div>
  );
}
