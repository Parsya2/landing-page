import IMG1 from "../assets/img1.svg";
const Header = () => {
  return (
    <header className="bg-green-800">
      <div className="p-4 flex flex-col md:flex-row">
        <div className="inline mt-5">
          <h1 className="font-normal text-4xl md:text-6xl text-white mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
            placeat.
          </h1>
          <div className="hidden md:block">
            <p className="text-white text-base font-normal pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam
              arcu nunc, orci eu bibendum. Sed morbi pellentesque elit purus
              quam a sollicitudin convallis purus. Sed sed quam risus laoreet
              viverra id ut amet feugiat. Sed nec id id sed ut nulla aliquet
              neque. Sed est malesuada lobortis aliquam dolor eget donec
            </p>
            <button className="hover:bg-green-950 text-base font-medium mt-5 hover:text-white active:bg-green-950 active:text-white bg-white text-green-950 w-32 h-14 rounded-md">
              Lorem, ipsum.
            </button>
          </div>
        </div>
        <img src={IMG1} alt="img 1" className=" inline" />
      </div>
    </header>
  );
};

export default Header;
