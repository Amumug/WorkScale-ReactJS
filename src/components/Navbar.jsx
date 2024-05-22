import lightLogo from "../assets/WorkScaleLogo-light.svg"
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

      <ul className="list-none sm:flex hidden justify-start ml-10 items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`text-neutral-500 hover:text-neutral-700 text-base font-semibold font-['Poppins', sans-serif] cursor-pointer ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href="#">
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <ul className="list-none sm:flex hidden justify-end ml-10 items-center flex-1">
        <li
          className={`text-neutral-500 hover:text-neutral-700 text-base font-semibold font-['Poppins', sans-serif] cursor-pointer mr-10`}
        >
          <a href="#">
            Contact
          </a>
        </li>

        <li
          className={`text-neutral-500 text-base hover:text-neutral-700 mr-7 font-semibold font-['Poppins', sans-serif] cursor-pointer`}
        >
          <a href="#">
            Join Today
          </a>
        </li>

        <li
          className={`text-neutral-500 text-base hover:text-neutral-700 font-semibold font-['Poppins', sans-serif] cursor-pointer`}
        >
          <img src={moon} />
        </li>
      </ul>

      <div className="sm:hidden px-0 flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev) => !prev)} />

        <div className={`${toggle ? 'flex' : 'hidden'}  p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`text-neutral-300 text-base font-semibold font-['Poppins', sans-serif] cursor-pointer ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}
              >
                <a href="#">
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav >
  )
}

export default Navbar;
