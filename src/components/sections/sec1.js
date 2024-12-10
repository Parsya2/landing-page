const Sec1 = () => {
  return (
    <div className="w-4/5 text-black bg-customYellowGreen rounded-3xl flex flex-col md:flex-row items-center justify-center p-4">
      <h1 className="font-bowlby text-2xl sm:text-4xl md:text-6xl md:w-1/2">the burger above all burgers</h1>
      <div className="md:w-1/2 flex flex-col items-center">
        <p className="font-semibold font-inter text-2xl m-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec
          ornare neque.
        </p>
        <button className="w-32 h-16 border-black border-4 shadow-my font-bowlby text-sm hover:rounded-md m-3 bg-customBeige">About Us</button>
      </div>
    </div>
  );
};

export default Sec1;
