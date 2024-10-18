import { motion } from "framer-motion";
import { fadeUp } from "../Products/Products.jsx";

export const Contact = () => {
  return (
    <section className="py-10 bg-gray-100" id="Contact">
      <div className="container">
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView={"show"}
          className="text-center"
        >
          {/* <p className="font-medium text-blue-500">Contact us</p> */}
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
            We’d love to hear from you
          </h1>
          <p className="mt-3 text-gray-500">Chat to our friendly team.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
            className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl lg:max-w-xl mt-8"
          >
            <form>
              <div className="flex-1">
                <label className="block mb-2 text-sm text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  // placeholder="John Doe"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div className="flex-1 mt-6">
                <label className="block mb-2 text-sm text-gray-600">
                  Email address
                </label>
                <input
                  type="email"
                  // placeholder="johndoe@example.com"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div className="flex-1 mt-6">
                <label className="block mb-2 text-sm text-gray-600">
                  Subject
                </label>
                <input
                  type="text"
                  // placeholder="Message for support"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div className="w-full mt-6">
                <label className="block mb-2 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  // placeholder="Tell us about your needs..."
                ></textarea>
              </div>
              <div className="flex items-center justify-center w-full">
                <div className="relative group">
                  <button className="relative mt-10 w-full inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                    <span className="relative z-10 block px-6 py-3 rounded-xl bg-white-950">
                      <div className="relative z-10 flex items-center space-x-2">
                        <span className="transition-all duration-500 group-hover:translate-x-1">
                          get in touch
                        </span>
                      </div>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
          {/* Cards */}
          <div className="grid grid-cols-1 gap-12 mt-10">
            <motion.div
              variants={fadeUp(0.3)}
              initial="hidden"
              whileInView="show"
              className="p-4 rounded-lg bg-green-50 md:p-6 "
            >
              <span className="inline-block p-3 text-gray-500 rounded-lg bg-blue-100/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800">
                Call us
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Mon-Fri from 8am to 5pm.
              </p>
              <p className="mt-2 text-sm text-blue-500">16494</p>
            </motion.div>

            <motion.div
              variants={fadeUp(0.3)}
              initial="hidden"
              whileInView="show"
              className="p-4 rounded-lg bg-green-50 md:p-6 "
            >
              <span className="inline-block p-3 text-gray-500 rounded-lg bg-blue-100/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800">
                Visit us
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Visit our office HQ..
              </p>
              <p className="mt-2 text-sm text-blue-500">
                Building 1183, Block 6 Sayed Zakaria، St. Masaken Sheraton,
                Cairo
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp(0.3)}
              initial="hidden"
              whileInView="show"
              className="p-4 rounded-lg bg-green-50 md:p-6 "
            >
              <span className="inline-block p-3 gray-500 rounded-lg bg-blue-100/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 4.5H2.25C1.01 4.5 0 5.51 0 6.75v10.5c0 1.24 1.01 2.25 2.25 2.25h19.5c1.24 0 2.25-1.01 2.25-2.25V6.75c0-1.24-1.01-2.25-2.25-2.25zm-9.75 7.5L2.25 6.75h19.5L12 12z"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800">
                Chat to support
              </h2>
              <p className="mt-2 text-sm text-gray-500">We’re here to help.</p>
              <p className="mt-2 text-sm text-blue-500">
                info@spirospathis.com
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
