import { useState } from 'react'
import Apple from '../assets/Apple.png'
import lemon from '../assets/lemon.png'
import Peach from '../assets/Peach.png'
import Navbar from './Navbar.jsx'
import { motion, AnimatePresence, easeInOut } from "framer-motion"
import { FaWhatsapp } from 'react-icons/fa'
import { UpdateFollower } from 'react-mouse-follower'

const slideRight =(delay)=>{
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easeInOut,
        delay: delay,
        },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const heroData = [
  {
    id: 1,
    image: Peach,
    name: 'Spiro Spathis Peach',
    description: 'The refreshing, velvety peach effect you need any time and any day. The peach flavor is tender, sweet and most of all delightful.',
    price: '$0.40',
    modal: "Peach",
    bgColor: "#DE9F7E"
    },
  {
    id: 2,
    image: Apple,
    name: 'Spiro Spathis Apple',
    description: 'A favorite classic the apple flavor in a much more refreshing taste. This one takes you on a trip down memory lane with a flavor of newness.',
    price: '$0.30',
    modal: "Apple",
    bgColor: "#AA8135"
  },
    {
      id: 3,
      image: lemon,
      name: 'Spiro Spathis lemon',
      description: 'Zesty and sharp in all the right ways the lemon flavor adds excitement sip by sip. The acidity of the lemon with the rippling effect of the soda make up a perfect combo.',
      price: '$0.50',
      modal: "lemon",
      bgColor: "#4EA04B"
    },
]

function Hero() {
  const [activeData, setActiveData] = useState(heroData[0])

  const handleActiveData = (data)=>{
    setActiveData(data)
  }

  return <>
    <motion.div
    initial={{backgroundColor:activeData.bgColor}}
    animate={{backgroundColor:activeData.bgColor}}
    transition={{duration: 0.8}}
    id='Home'
    >
      {/* navbar component */}
      <Navbar />

      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[605px]">
        {/* Data Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1 text-white relative z-40">
          <div className="space-y-5 text-center md:text-left">
            <AnimatePresence mode='wait'>
              <UpdateFollower mouseOptions={{
                backgroundColor: "white",
                zIndex: 10,
                scale: 10,
                followSpeed: 0.5,
                mixBlendMode: "difference"
              }}>
                <motion.h1 
                key={activeData.id}
                variants={slideRight(0.3)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow text-white">
                  {activeData.name}
                </motion.h1>
              </UpdateFollower>
            </AnimatePresence>
           
            <AnimatePresence mode='wait'>
              <UpdateFollower 
              mouseOptions={{
                backgroundColor: activeData.bgColor,
                zIndex: 99999,
                followSpeed: 0.5,
                rotate: -720,
                scale: 6,
                backgroundElement: (
                  <div>
                    <img src={activeData.image} />
                  </div>
                )
              }}
              >
                <motion.p 
                key={activeData.id}
                variants={slideRight(0.5)}
                initial="hidden"
                animate="show"
                exit="exit"
                className='text-sm leading-loose text-white/80'>{activeData.description}</motion.p>
              </UpdateFollower>
            </AnimatePresence>
           
            <AnimatePresence mode='wait'>
            <motion.button 
            key={activeData.id}
            variants={slideRight(0.7)}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{color: activeData.bgColor}}
            className='px-4 py-2 bg-white inline-block font-normal rounded-sm'>Order Now</motion.button>
            </AnimatePresence>
            {/* list seprator */}
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.2, ease: "easeInOut"}}
            className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-10">
              <div className="w-20 h-[1px] bg-white"></div>
              <p className='uppercase'>Top Recommendation</p>
              <div className="w-20 h-[1px] bg-white"></div>
            </motion.div>
            {/* image swither */}
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.2, ease: "easeInOut"}}
            className="grid grid-cols-3 gap-10">
              {heroData.map((data)=>{
                return (
                  <UpdateFollower 
                  key={data.id}
                  mouseOptions={{
                    backgroundColor: activeData.bgColor,
                    zIndex: 99999,
                    followSpeed: 0.5,
                    scale: 5,
                    text: "View Details",
                    textFontSize: "3px"
                    }}>
                    <div onClick={()=>handleActiveData(data)}  className="cursor-pointer space-y-3 hover:scale-105 transition-all duration-200">
                      <div className="flex justify-center">
                      <img 
                      src={data.image} 
                      className={`w-[150px] img-shadow ${activeData.image == data.image ? "opacity-100 scale-125" : "opacity-50"}`} 
                      alt={data.name}
                      />
                      </div>
                      <div className='text-center !mt-6 space-y-1'>
                        <p className='text-base line-through opacity-50'>{data.price}</p>
                        <p className='text-xl font-bold'>{data.price}</p>
                      </div>
                    </div>
                  </UpdateFollower>
                );
              })}
            </motion.div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="felx flex-col justify-end items-center relative order-1 md:order-2">
          <AnimatePresence mode='wait'>
            <motion.img
              key={activeData.id}
              initial={{opacity: 0, x: 100}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.5, delay: 0, ease: "easeInOut"}}
              exit={{
                opacity: 0,
                x: -100,
                transition: {
                  duration: 0.5,
                },
              }}
              src={activeData.image}
              className="w-full h-[500px] object-cover object-center md:w-[500px] img-shadow"
              alt={activeData.name}
            />
          </AnimatePresence>

          <AnimatePresence mode='wait'>
          <motion.div 
          key={activeData.id}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.4, delay: 0, ease: "easeInOut"}}
          exit={{
            opacity: 0,
            x: -100,
            transition: {
              duration: 0.4,
            },
          }}
          className="text-white/5 text-[230px] font-Poppins font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {activeData.modal}
          </motion.div>
          </AnimatePresence>
        </div>
        {/* whatsap icon */}
        <div className="text-3xl text-green-500 cursor-pointer fixed right-10 bottom-10 hover:rotate-[360deg] duration-500 z-[9999]">
          <span>
            <FaWhatsapp />
          </span>
        </div>
      </div>
    </motion.div>
  </>
}

export default Hero