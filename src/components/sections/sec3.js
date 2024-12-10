import Img from "../../assets/img4.png"
const Sec3 = () => {
    return ( 
        <div className="flex flex-col items-center p-4 mt-20 text-center">
            <h1 className="font-bowlby text-5xl md:text-7xl text-customYellowGreen">“ the best burger i’ve ever had “</h1>
            <img src={Img} alt="img" className="mt-5 w-full" />
        </div>
     );
}
 
export default Sec3;