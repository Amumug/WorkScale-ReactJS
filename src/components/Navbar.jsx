import lightLogo from "../assets/WorkScaleLogo-light.svg"
import darkLogo from "../assets/dark-logo.svg"
import styles from "../style";
import { navLinks } from "../constants";
import React, { useState } from "react";
import menuLight from "../assets/mingcute_menu-fill.svg"
import closeLight from "../assets/mingcute_close-fill.svg"
import menuDark from "../assets/mingcute_menu-fill 1.svg"
import closeDark from "../assets/mingcute_close-fill 1.svg"
import { IoMoon, IoSunny } from "react-icons/io5";


const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }


  return (
    

    < nav className="w-full flex py-6 justify-between items-center navbar" >  
      <img src={dark ? darkLogo : lightLogo} />

      <ul className="list-none sm:flex hidden justify-start ml-10 items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`text-neutral-500 dark:text-stone-400 dark:hover:text-neutral-300  hover:text-neutral-700 text-base font-semibold font-['Poppins', sans-serif] cursor-pointer ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href="#">
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <ul className="list-none sm:flex hidden justify-end ml-10 items-center flex-1">
        <li
          className={`text-neutral-500 dark:text-stone-400 dark:hover:text-neutral-300 hover:text-neutral-700 text-base font-semibold font-['Poppins', sans-serif] cursor-pointer mr-10`}
        >
          <a href="#">
            Contact
          </a>
        </li>

        <li
          className={`text-neutral-500 dark:text-stone-400 dark:hover:text-neutral-300 text-base hover:text-neutral-700 mr-7 font-semibold font-['Poppins', sans-serif] cursor-pointer`}
        >
          <a href="#">
            Join Today
          </a>
        </li>

        <li
          className={`text-neutral-500 text-base hover:text-neutral-700 font-semibold font-['Poppins', sans-serif] cursor-pointer`}
        >
          <button onClick={()=> darkModeHandler()} className="mt-2">
                {
                    
                    dark && <IoSunny className="w-[24px] h-[24px] dark:text-stone-400 dark:hover:text-neutral-300"/>
                }
                {
                    !dark && <IoMoon className="w-[24px] h-[24px]"/>
                }
            </button>
        </li>
      </ul>

      <div className="sm:hidden px-0 flex flex-1 justify-end items-center">
        <img src={toggle ? (dark ? closeDark : closeLight) : (dark ? menuDark : menuLight)} className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev) => !prev)} />

        <div className={`${toggle ? 'flex' : 'hidden'}  p-6 bg-black-gradient absolute top-20 right-0  my-2 w-full rounded-xl sidebar`}>
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
