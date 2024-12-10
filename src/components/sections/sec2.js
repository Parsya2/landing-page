const Sec2 = () => {
  return (
    <>
      <div className="felx flex-col md:flex-row items-center justify-center w-4/5 mt-20">
      <div className="bg-custom1 h-753 rounded-2xl relative">
        <div className="bg-customGrey rounded-2xl flex flex-col items-center justify-center h-40 w-2/3 text-center p-4 absolute bottom-3 left-3">
          <h1 className="font-bowlby text-xl md:text-2xl text-white w-full left-5">salt & Vinegar french fries</h1>
          <a href="#" className="text-customLilac text-lg md:text-xl">
            order online
          </a>
        </div>
      </div>
      <div className="bg-custom2 h-753 rounded-2xl relative mt-12">
        <div className="bg-customGrey rounded-2xl flex flex-col items-center justify-center h-40 w-2/3 text-center p-4 absolute bottom-3 left-3">
          <h1 className="font-bowlby text-xl md:text-2xl text-white w-full left-5">crispy chicken sandwich</h1>
          <a href="#" className="text-customLilac text-lg md:text-xl">
            order online
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Sec2;
