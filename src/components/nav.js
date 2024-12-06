import Menu from "../assets/menu.svg";
import { useState } from "react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen ? <div className="flex flex-col border-b-2 border-customBeige pb-4">
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
      </div> : <div></div>}
      <nav className="sticky top-0 flex items-center">
        <h1 className="font-bowlby font-normal text-3xl text-white m-4">
          Burger
        </h1>
        <div className="hidden sm:flex m-4 absolute right-4 text-lg font-normal">
          <a href="#" className="text-white mx-2">
            ABOUT
          </a>
          <a href="#" className="text-white mx-2">
            MENU
          </a>
          <a
            href="#"
            className="text-black ms-4 bg-customLilac w-36 h-10 flex justify-center items-center hover:rounded-md active:rounded-md transition-all duration-500 ease-out"
          >
            ORDER ONLINE
          </a>
        </div>
        <img
          src={Menu}
          alt="menu"
          className="w-10 absolute right-5 sm:hidden"
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
