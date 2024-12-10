import Menu from "../assets/menu.svg";
import { useState } from "react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen ? <div className="flex flex-col border-b-2 border-customBeige pb-4 transition-all duration-500 ease-out bg-customGrey w-full h-44 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal">
        <a
          href="#"
          className="text-white mx-4 mb-4 mt-4 border-b-2 border-customBeige"
        >
          ABOUT
        </a>
        <a
          href="#"
          className="text-white mx-4 mb-4 border-b-2 border-customBeige"
        >
          MENU
        </a>
        <a
          href="#"
          className="text-black ms-4 bg-customLilac w-36 h-10 flex justify-center items-center hover:rounded-md active:rounded-md transition-all duration-500 ease-out"
        >
          ORDER ONLINE
        </a>
      </div> : <div className="transition-all duration-500 ease-out"></div>}
      <nav className="flex items-center bg-customGrey mt-11">
        <h1 className="font-bowlby font-normal text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-white m-4 absolute left-3">
          Burger
        </h1>
        <div className="hidden sm:flex m-4 absolute right-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal">
          <a href="#" className="text-white mx-5">
            ABOUT
          </a>
          <a href="#" className="text-white mx-5">
            MENU
          </a>
          <a
            href="#"
            className="text-black ms-4 bg-customLilac w-fit h-fit p-4 flex justify-center items-center hover:rounded-md active:rounded-md transition-all duration-500 ease-out"
          >
            ORDER ONLINE
          </a>
        </div>
        <img
          src={Menu}
          alt="menu"
          className="w-10 absolute right-5 sm:hidden cursor-pointer"
          onClick={() => {
            if (isOpen === true) {
              setIsOpen(false);
            } else {
              setIsOpen(true);
            }
          }}
        />
      </nav>
    </>
  );
};

export default Nav;
