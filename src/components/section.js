import Sec1 from "./sections/sec1";
import Sec2 from "./sections/sec2";
const Section = () => {
    return ( 
        <section className="p-4 flex flex-col items-center">
            <Sec1/>
            <Sec2/>
        </section>
     );
}
 
export default Section;