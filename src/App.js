import Nav from "./components/nav";
import Header from "./components/header";
import Section from "./components/section";
import Footer from "./footer";
function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Nav/>
      <Header/>
      <Section/>
      <Footer/>
    </div>
  );
}

export default App;
