import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Works />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
