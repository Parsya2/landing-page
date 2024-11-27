import Logo from "../assets/logo.svg";
const Footer = () => {
  return (
    <>
      <footer className="bg-green-800 text-white p-4 border-t-2 flex flex-row items-start">
        <div className="container mx-auto">
          <img src={Logo} alt="logo" className="mx-auto mb-4 md:mb-0 md:mr-4 lg:float-left lg:mr-8 lg:mt-2" />
          <div className="flex flex-wrap justify-between gap-2">
            <ul className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
              <h1 className="text-base font-bold">Information</h1>
              <a href="#">
                <li className="font-normal text-sm">About Us</li>
              </a>
              <a href="#">
                <li className="font-normal text-sm">Origins</li>
              </a>
              <a href="#">
                <li className="font-normal text-sm">FAQs</li>
              </a>
              <a href="#">
                <li className="font-normal text-sm">Contact</li>
              </a>
              <a href="#">
                <li className="font-normal text-sm">Legal</li>
              </a>
            </ul>
            <ul className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
              <h1 className="text-base font-bold">Contact Us</h1>
              <li className="font-normal text-sm">contact@cyberdivisino.tn</li>
              <li className="font-normal text-sm">+216 29 065 054</li>
              <li className="font-normal text-sm">
                Susah, Imm Ibrahim, 6th Floor
              </li>
            </ul>
            <h1 className="font-medium text-lg">created by Amirmohamad.A</h1>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
