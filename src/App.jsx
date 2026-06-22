import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingQuote from "./components/FloatingQuote";
import BeforeAfter from "./components/BeforeAfter"; 
import Stats from "./components/Stats"; 

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingQuote />
      <BeforeAfter />
      <Stats />
    </>
  );
}

export default App;