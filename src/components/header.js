import Img from '../assets/img1.png'
const Header = () => {
    return ( 
        <header className="p-4 flex flex-col items-center justify-center text-white mt-20">
            <h1 className=" block text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-normal font-bowlby">
            NEW YORK’S FAVORITE ORGANIC HAMBURGER JOINT
            </h1>
            <img src={Img} alt="img" />
        </header>
     );
}
 
export default Header;