import Logo from "../assets/logo.svg";

const Nav = () => {
  return (
    <>
      <nav className="bg-green-900 p-4 mx-auto w-full sticky top-0 left-0">
        <img src={Logo} alt="logo" className="ml-8 md:ml-12 lg:ml-16" />
      </nav>
    </>
  );
};

export default Nav;
