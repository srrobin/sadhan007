import { useEffect } from "react";

// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Hireme from "./components/Hireme";
import Possession from "./components/Possession";
import ProjectNew from "./components/ProjectNew";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Navbar from "./Layouts/Navbar";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      {/* <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Possession />
      <Testimonials />

      <ProjectNew />
      <Hireme />
      <Contact /> */}
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Possession />
      <Testimonials />
      <ProjectNew />
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Sadhan Kirtonia</h6>
        <p>copyright © SSR (cis)</p>
      </footer>
    </div>
  );
};

export default App;
