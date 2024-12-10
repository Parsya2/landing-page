import Sec1 from "./sections/sec1";
import Sec2 from "./sections/sec2";
import Sec3 from "./sections/sec3";
import Sec4 from "./sections/sec4";
const Section = () => {
    return ( 
        <section className="p-4 flex flex-col items-center">
            <Sec1/>
            <Sec2/>
            <Sec3/>
            <Sec4/>
        </section>
     );
}
 
export default Section;