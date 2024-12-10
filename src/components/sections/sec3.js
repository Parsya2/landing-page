import Img from "../../assets/img4.png"
const Sec3 = () => {
    return ( 
        <div className="flex flex-col items-center p-4 mt-8 text-center">
            <h1 className="font-bowlby text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl text-customYellowGreen">“ the best burger i’ve ever had “</h1>
            <img src={Img} alt="img" className="mt-5 w-full" />
        </div>
     );
}
 
export default Sec3;