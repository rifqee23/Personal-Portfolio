import Button from "../Elements/Button";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen md:flex md:flex-col md:justify-center md:items-center px-4">
        <div className="pt-20">
          <h1 className="text-5xl font-bold text-center">Hi, I'm Rifqi</h1>
          <h3 className="text-3xl font-semibold text-center text-gray-600 mt-4">
            Frontend Developer
          </h3>

          <p className="mt-5 text-md text-center">
            I'm a passionate frontend developer based in Indonesia, specializing
            in creating beautiful and functional web interfaces with React,
            HTML, CSS, and JavaScript. I love transforming ideas into engaging
            user experiences and constantly seek to enhance my skills through
            learning and hands-on projects.{" "}
          </p>
          <div className="w-full mt-10 flex justify-center gap-4">
            <Button colors="bg-black" widths="w-40" textColor="text-white">
              Get Started
            </Button>
            <Button colors="bg-black" widths="w-40" textColor="text-white">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
