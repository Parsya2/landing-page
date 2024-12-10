import { useState } from "react";
const Footer = () => {
    const [email,setEmail] = useState();
  return (
    <footer className="w-fit rounded-2xl bg-customLilac flex flex-col md:flex-row justify-between items-center p-4 gap-5 mt-8 mb-7">
      <h1 className="font-bowlby font-normal text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-black m-4">
        Burger
      </h1>
      <ul className="flex flex-col justify-center items-center mt-5">
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bowlby">MORE</h1>
        <a href="#">
            <li className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bowlby font-light">About</li>
        </a>
        <a href="#">
            <li className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bowlby font-light">Menu</li>
        </a>
        <a href="#">
            <li className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bowlby font-light">Location</li>
        </a>
        <a href="#">
            <li className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bowlby font-light">Privacy</li>
        </a>
      </ul>
      <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bowlby font-light mt-5">
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bowlby">HOURS</h1>
      Open from 11AM to 11PM  daily
      </div>
      <div className="mt-5">
        <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bowlby font-light">Join Our Newsletter</h1>
        <input type="email" className="bg-customLilac mt-5 border-2 rounded-lg w-full outline-none p-4 border-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bowlby font-light" onChange={(e)=>{
            setEmail(e.target.value)
        }} />
        <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bowlby font-light mt-5">
            {email}
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
