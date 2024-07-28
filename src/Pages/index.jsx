import About from "../components/Layouts/About";
import Hero from "../components/Layouts/Hero";
import Navbar from "../components/Layouts/Navbar";
import Project from "../components/Layouts/Project";
import Card from "../components/Fragments/Card";
import Contact from "../components/Layouts/Contact";
const HomePage = () => {
  return (
    <div>
      <Navbar>
        <Hero />
        <About />
        <Project />
        <Contact />
      </Navbar>
    </div>
  );
};

export default HomePage;
