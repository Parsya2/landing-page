import Img from '../assets/img1.png'
const Header = () => {
    return ( 
        <header className="p-4 flex flex-col items-center justify-center text-white">
            <h1 className=" block text-center text-3xl sm:text-6xl font-normal font-bowlby">
            NEW YORK’S FAVORITE ORGANIC HAMBURGER JOINT
            </h1>
            <img src={Img} alt="img" />
        </header>
     );
}
 
export default Header;