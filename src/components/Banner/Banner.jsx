import { motion } from "framer-motion"
import banner from "../../assets/banner/banner.jpg";
import { fadeUp } from "../Products/Products.jsx";

function Banner() {
  return (
    <section id="Aboute">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-6 gap-12">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x:0}}
            transition={{duration: 0.8, delay: 0.3, ease: "easeInOut"}}
            src={banner}
            alt="Banner Image"
            className="w-[300px] md:w-[400px] mx-auto rounded-lg"
          />
        </div>
        {/* Banner text info section */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <motion.h2 
            variants={fadeUp(0.7)}
            initial="hidden"
            whileInView="show"
            className="text-3xl lg:text-4xl font-semibold text-gray-900">
              Refresh Your World with spiro spathis
            </motion.h2>
            <motion.p 
            variants={fadeUp(0.5)}
            initial="hidden"
            whileInView="show"
            className="text-lg text-gray-500">
              Spiro Spathis brings a burst of vibrant flavors and effervescent fun to
              your day! Whether you are looking to quench your thirst with a
              zesty apple, tangy lemon, or one of our many other fruit-inspired
              flavors, Spiro Spathis is your go-to drink for a refreshing and exciting
              experience. Dive into the world of Spiro Spathis and let every sip spark
              your senses with its bold, bubbly, and refreshing taste!
            </motion.p>
            <motion.button 
            variants={fadeUp(.8)}
            initial="hidden"
            whileInView="show"
            className="!mt-5 border-2 border-primary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-white duration-200">
              Buy Now
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
