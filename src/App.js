import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tours from "./components/Tours";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  return ( 
  <>
     <Navbar />
     <Hero />
     <About />
     <Services/>
     <Tours />
     <Footer />
  </>
  );
};

export default App;
