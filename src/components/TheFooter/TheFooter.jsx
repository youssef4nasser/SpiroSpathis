import CardsImg from '../../assets/credit-cards-JstMMRFE.webp'
import { FaLinkedin, FaPhone, FaWikipediaW } from "react-icons/fa";
import Logo from "../../assets/Logo1.jpg";
import { FaMapLocation, FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

function TheFooter() {
  return (
    <footer className="bg-primary pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company details section  */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <img src={Logo} alt="Logo spirospathis" className="max-w-[100px] rounded-full"/>
            <div className="">
              <p className="flex items-center gap-2">
                <FaPhone />
                +201141955123
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaMapLocation /> Cairo, EG
              </p>
            </div>
          </motion.div>
          {/* Footer Links section  */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">Quick Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <ul className="space-y-4">
                  <li>Home</li>
                  <li>Aboute</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li>Home</li>
                  <li>Aboute</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Social Links section  */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">Follow us</h3>
            <div className="flex items-center gap-3 ">
              <a target='_blank' href="https://www.facebook.com/SpiroSpathisEG/"><FaFacebook className="text-3xl hover:scale-105 duration-300" /></a>
              <a target='_blank' href="https://www.instagram.com/spirospathiseg/"><FaInstagram className="text-3xl hover:scale-105 duration-300" /></a>
              <a target='_blank' href="https://www.linkedin.com/company/spiro-spathis"><FaLinkedin className="text-3xl hover:scale-105 duration-300" /></a>
              <a target='_blank' href="https://twitter.com/spirospathiseg"><FaXTwitter className="text-3xl hover:scale-105 duration-300" /></a>
              <a target='_blank' href="https://arz.wikipedia.org/wiki/%D8%B3%D8%A8%D9%8A%D8%B1%D9%88_%D8%B3%D8%A8%D8%A7%D8%AA%D8%B3"><FaWikipediaW className="text-3xl hover:scale-105 duration-300" /></a>
            </div>
            <div className="space-y-2">
              <p>Payment Methods</p>
              <img src={CardsImg} alt="" />
            </div>
          </motion.div>
        </div>
        {/* copyright section */}
        <p className="text-center mt-8 border-t-2 border-white/40 pt-8">
        &copy; 2024 All rights reserved by <span className="text-blue-500">
        <a href="https://www.linkedin.com/in/youssef-abozaid/"
          target="_blank" rel="noopener noreferrer">Youssef Abo-Zaid</a>
        </span>
        </p>
      </div>
    </footer>
  )
}

export default TheFooter