import Img2 from "../assets/img2.svg";
import Img3 from "../assets/img3.svg";
import Img5 from "../assets/img5.svg";
export const Sec = () => {
  return (
    <>
      <section className="bg-green-800 border-t-2 p-4 text-white">
        <div>
          <h1 className="text-white font-normal text-3xl md:text-6xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <ul className="text-white">
            <li className="border-y-2 my-5 hover:bg-green-200 hover:text-green-800">
              <h1 className="font-normal text-2xl m-2">Lorem, ipsum.</h1>
              <p className="font-normal text-sm m-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                quam arcu nunc, orci eu bibendum.{" "}
              </p>
            </li>
            <li className="border-y-2 my-5 hover:bg-green-200 hover:text-green-800">
              <h1 className="font-normal text-2xl m-2">Lorem, ipsum.</h1>
              <p className="font-normal text-sm m-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                quam arcu nunc, orci eu bibendum.{" "}
              </p>
            </li>
            <li className="border-y-2 my-5 hover:bg-green-200 hover:text-green-800">
              <h1 className="font-normal text-2xl m-2">Lorem, ipsum.</h1>
              <p className="font-normal text-sm m-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                quam arcu nunc, orci eu bibendum.{" "}
              </p>
            </li>
            <li className="border-y-2 my-5 hover:bg-green-200 hover:text-green-800">
              <h1 className="font-normal text-2xl m-2">Lorem, ipsum.</h1>
              <p className="font-normal text-sm m-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                quam arcu nunc, orci eu bibendum.{" "}
              </p>
            </li>
            <li className="border-y-2 my-5 hover:bg-green-200 hover:text-green-800">
              <h1 className="font-normal text-2xl m-2">Lorem, ipsum.</h1>
              <p className="font-normal text-sm m-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                quam arcu nunc, orci eu bibendum.{" "}
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full text-white flex flex-col sm:flex-row">
          <div className="my-5 border-l-2 pl-3">
            <h1 className="font-normal text-2xl">Lorem.</h1>
            <p className="font-normal text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              itaque, magnam quos nemo soluta alias nostrum minus ipsam placeat
              quia magni quo nobis, optio suscipit provident beatae natus
              voluptas vitae eligendi aliquid impedit. Maxime, molestiae
              reprehenderit, nisi delectus inventore iure veritatis accusamus
              sequi itaque harum cum neque placeat. Repudiandae, odio!
            </p>
          </div>
          <div className="my-5 border-l-2 pl-3">
            <h1 className="font-normal text-2xl">Lorem.</h1>
            <p className="font-normal text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              itaque, magnam quos nemo soluta alias nostrum minus ipsam placeat
              quia magni quo nobis, optio suscipit provident beatae natus
              voluptas vitae eligendi aliquid impedit. Maxime, molestiae
              reprehenderit, nisi delectus inventore iure veritatis accusamus
              sequi itaque harum cum neque placeat. Repudiandae, odio!
            </p>
          </div>
          <div className="my-5 border-l-2 pl-3">
            <h1 className="font-normal text-2xl">Lorem.</h1>
            <p className="font-normal text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              itaque, magnam quos nemo soluta alias nostrum minus ipsam placeat
              quia magni quo nobis, optio suscipit provident beatae natus
              voluptas vitae eligendi aliquid impedit. Maxime, molestiae
              reprehenderit, nisi delectus inventore iure veritatis accusamus
              sequi itaque harum cum neque placeat. Repudiandae, odio!
            </p>
          </div>
          <div className="my-5 border-l-2 pl-3">
            <h1 className="font-normal text-2xl">Lorem.</h1>
            <p className="font-normal text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              itaque, magnam quos nemo soluta alias nostrum minus ipsam placeat
              quia magni quo nobis, optio suscipit provident beatae natus
              voluptas vitae eligendi aliquid impedit. Maxime, molestiae
              reprehenderit, nisi delectus inventore iure veritatis accusamus
              sequi itaque harum cum neque placeat. Repudiandae, odio!
            </p>
          </div>
        </div>
        <div className="border-t-2">
          <h1 className="font-normal text-3xl md:text-6xl mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            deleniti odit laborum aliquid excepturi?
          </h1>
          <div className="flex gap-1 flex-col sm:flex-row justify-center mt-5">
            <img src={Img2} alt="img" />
            <img src={Img3} alt="img" />
            <img src={Img5} alt="img" />
          </div>
        </div>
        <div className="font-normal text-3xl md:text-6xl border-t-2 my-5 flex flex-col items-center justify-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          <button className="hover:bg-green-800 text-base font-medium mt-5 hover:border-2 hover:text-white active:bg-green-800 active:text-white bg-white text-green-950 w-32 h-14 rounded-md">
            Lorem, ipsum.
          </button>
        </div>
      </section>
    </>
  );
};

export default Sec;
