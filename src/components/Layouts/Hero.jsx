import Button from "../Elements/Button";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen lg:flex lg:justify-center  px-4 lg:px-20">
        <div className="pt-10  lg:flex lg:flex-row-reverse">
          <div className="lg:w-1/2 lg:pt-20 xl:pt-16">
            <div className="flex justify-center mb-10 lg:pl-36">
              <img
                className="rounded-full"
                src="/images/photo.jpg"
                alt=""
                width={400}
                height={400}
              />
            </div>
          </div>

          <div className="lg:w-1/2 lg:pt-20 xl:pt-24">
            <h1 className="text-5xl font-bold text-center lg:text-left ">
              Hi, I'm Rifqi
            </h1>
            <h3 className="text-3xl font-semibold text-center text-gray-600 mt-4 lg:text-left">
              Frontend Developer
            </h3>

            <p className="mt-5 text-md text-center lg:text-left">
              I'm a passionate frontend developer based in Indonesia,
              specializing in creating beautiful and functional web interfaces
              with React, HTML, CSS, and JavaScript. I love transforming ideas
              into engaging user experiences and constantly seek to enhance my
              skills through learning and hands-on projects.{" "}
            </p>
            <div className="w-full mt-10 flex justify-center gap-4 lg:justify-start">
              <Button colors="bg-black" widths="w-40" textColor="text-white">
                Get Started
              </Button>
              <Button colors="bg-black" widths="w-40" textColor="text-white">
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
