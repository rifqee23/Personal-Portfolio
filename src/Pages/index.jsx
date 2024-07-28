import About from "../components/Layouts/About";
import Hero from "../components/Layouts/Hero";
import Navbar from "../components/Layouts/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar>
        <Hero />
        <About />
      </Navbar>
    </div>
  );
};

export default HomePage;
