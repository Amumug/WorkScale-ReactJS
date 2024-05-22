import lightLogo from "../assets/WorkScaleLogo.svg"
import moon from "../assets/moon.svg"
import styles from "../style";
import { navLinks } from "../constants";
import { useState } from "react";
import menu from "../assets/mingcute_menu-fill.svg"
import close from "../assets/mingcute_close-fill.svg"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)


  return (


    < nav className="w-full flex py-6 justify-between items-center navbar" >
      <img src={lightLogo} />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`text-neutral-500 text-base font-semibold font-['Poppins', sans-serif] cursor-pointer ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href="#">
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden px-0 flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} />
      </div>
    </nav >
  )
}

export default Navbar;
