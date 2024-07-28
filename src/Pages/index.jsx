import About from "../components/Layouts/About";
import Hero from "../components/Layouts/Hero";
import Navbar from "../components/Layouts/Navbar";
import Project from "../components/Layouts/Project";
import Card from "../components/Fragments/Card";
const HomePage = () => {
  return (
    <div>
      <Navbar>
        <Hero />
        <About />
        <Project />
      </Navbar>
    </div>
  );
};

export default HomePage;
