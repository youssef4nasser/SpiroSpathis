import { MdMenu } from 'react-icons/md'
import logo from '../assets/Logo1.jpg'
import { FaRegUser } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower'

const NavbarMenu = [
  { id: 1, name: 'Home', link: '#Home' },
  { id: 2, name: 'Products', link: '#Products' },
  { id: 3, name: 'Aboute', link: '#Aboute' },
  { id: 4, name: 'FAQ', link: '#FAQ' },
  { id: 5, name: 'Contact', link: '#Contact' },
]

function Navbar() {
  return (
    <div className="text-white py-8">
      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5, delay: 0.5}}
      className="container flex justify-between items-center">
        {/* Logo section */}
        <div className=''>  
          <img src={logo} alt="Logo spirospathis" className="max-w-[95px] rounded-full"/>
        </div>
        {/* Menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 relative z-40">
            {NavbarMenu.map((item)=>{
              return <li key={item.id}>
                <UpdateFollower mouseOptions={{
                  followSpeed: 1.5,
                  zIndex: 10,
                  backgroundColor: "white",
                  scale: 5,
                  mixBlendMode: "difference"
                }}>
                  <a href={item.link} className='inline-block text-base font-semibold py-2 px-3 uppercase'>{item.name}</a>
                </UpdateFollower>
                </li>
            })}
            <UpdateFollower 
            mouseOptions={{
              followSpeed: 1.5,
              zIndex: 10,
              backgroundColor: "white",
              scale: 5,
              mixBlendMode: "difference"
            }}>
              <button className='text-xl ps-14'><FaRegUser /></button>
            </UpdateFollower>
          </ul>
        </div>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <MdMenu className="text-4xl" />
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar