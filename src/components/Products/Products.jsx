import Apple from "../../assets/Apple.png";
import lemon from "../../assets/lemon.png";
import Peach from "../../assets/Peach.png";
import Grape from "../../assets/Grape.png";
import kiwi2 from "../../assets/kiwi2.png";
import Mandarine from "../../assets/Mandarine.png";
import Pineapple from "../../assets/Pineapple.png";
import Soda2 from "../../assets/Soda2.png";
import { motion } from "framer-motion";

export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

const productsData = [
  {
    id: 1,
    name: "Spiro Spathis Peach",
    image: Peach,
    description:
      "The refreshing, velvety peach effect you need any time and any day. The peach flavor is tender, sweet and most of all delightful.",
    delay: 0.5,
  },
  {
    id: 2,
    image: Apple,
    name: "Spiro Spathis Apple",
    description:
      "A favorite classic the apple flavor in a much more refreshing taste. This one takes you on a trip down memory lane with a flavor of newness.",
    delay: 0.8,
  },
  {
    id: 3,
    image: lemon,
    name: "Spiro Spathis lemon",
    description:
      "Zesty and sharp in all the right ways the lemon flavor adds excitement sip by sip. The acidity of the lemon with the rippling effect of the soda make up a perfect combo.",
    delay: 1.1,
  },
  {
    id: 4,
    image: Grape,
    name: "Spiro Spathis Grape",
    description:
      "The only grape-flavored soda drink you need on a sunny day or a cozy night. The exotic fruit turns the soda drink into an explosion of unique flavors.",
    delay: 0.5,
  },
  {
    id: 5,
    image: Soda2,
    name: "Spiro Spathis Soda",
    description:
      "With the right amount of zest and tang; the Lemon Soda flavor gives you the kick of freshness any time of day.",
    delay: 0.8,
  },
  {
    id: 6,
    image: Pineapple,
    name: "Spiro Spathis Pineapple",
    description:
      "Just the right tang to the first of its kind, pineapple-flavored, soda drink. The flavour takes you on an adventure of tropical vibrance.",
    delay: 1.1,
  },
  {
    id: 7,
    image: Mandarine,
    name: "Spiro Spathis Mandarine",
    description:
      "Your all time favorite fruit is now in the mandarin-flavored Spiro Spathis with a citrusy twist. The amount of sourness versus sweetness is your way to an instant refresh.",
    delay: 0.5,
  },
  {
    id: 8,
    image: kiwi2,
    name: "Spiro Spathis kiwi",
    description:
      "Not your average soda flavor but certainly better. The unexpected Kiwi and soda fusion is for those with a fine taste and a knack for everything new.",
    delay: 0.8,
  },
];

function Products() {
  return (
    <div className="bg-gray-100 py-12" id="Products">
      <div className="container">
        <div className="relative">
          <motion.h2
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView={"show"}
            className="text-4xl font-bold text-center pb-10"
          >
            Our Products
          <div className="w-32 bg-primary h-1 absolute top-12 left-0 right-0 mx-auto"></div>
          </motion.h2>
        </div>
        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((product) => (
            <motion.div
              variants={fadeUp(product.delay)}
              initial="hidden"
              whileInView={"show"}
              key={product.id}
              className="flex flex-col items-center justify-center p-5 mx-auto shadow-lg rounded-xl bg-white"
            >
              <img
                src={product.image}
                alt={`Image of ${product.name}`}
                loading="lazy"
                className="w-[250px] mb-4 hover:rotate-12 hover:scale-110 duration-300"
              />
              <div className="text-center space-y-2">
                <h6 className="text-2xl font-bold text-center font-handwriting">
                  {product.name}
                </h6>
                <p className="text-base text-center text-gray-600">
                  {product.description}
                </p>
                <button className="!mt-5 border-2 border-primary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-white duration-200">
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
