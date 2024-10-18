import { UpdateFollower } from "react-mouse-follower";
import Hero from "./components/Hero.jsx";
import Products from "./components/Products/Products.jsx";
import Banner from "./components/Banner/Banner.jsx";
import BannerText from "./components/Banner/BannerText.jsx";
import { FAQ } from "./components/FAQ/FAQ.jsx";
import TheFooter from "./components/TheFooter/TheFooter.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import ScrollToTop from './components/scrollToTop.jsx'
import Hand from "./components/loading/Loading.jsx";
import { useEffect } from "react";

// TO DO: add animaition when do scrool 

export default function App() {
  useEffect(() => {
    <Hand />
  }, [])
  
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower mouseOptions={{
        backgroundColor: "white",
        zIndex: 10,
        followSpeed: 1.5,
        scale: 2
      }}>
        <Hero />
        <Products />
        <Banner />
        <BannerText />
        <FAQ />
        <Contact />
        <TheFooter />
        <ScrollToTop />
      </UpdateFollower>
    </main>
  )
}