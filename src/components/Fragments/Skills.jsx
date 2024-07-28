const Skills = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="w-full h-full ">
        <div className="max-w-6xl mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Skills
            </p>
            <p className="py-4">These are the technologies I've worked with</p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 flex flex-col justify-between">
              <img
                className="w-20 mx-auto"
                src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
                alt="HTML icon"
              />
              <div>
                <p className="my-4">HTML</p>
                <p className="my-4">Advanced</p>
              </div>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 flex flex-col justify-between">
              <img
                className="w-20 mx-auto"
                src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
                alt="HTML icon"
              />
              <div>
                <p className="my-4">CSS</p>
                <p className="my-4">Intermediate</p>
              </div>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 flex flex-col justify-between">
              <img
                className="w-20 mx-auto"
                src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                alt="HTML icon"
              />
              <div>
                <p className="my-4">JavaScript</p>
                <p className="my-4">Intermediate</p>
              </div>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 flex flex-col justify-between">
              <img
                className="w-20 mx-auto"
                src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                alt="HTML icon"
              />
              <div>
                <p className="my-4">React</p>
                <p className="my-4">Intermediate</p>
              </div>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-10 flex flex-col justify-between">
              <img
                className="w-20 mx-auto"
                src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"
                alt="HTML icon"
              />
              <div>
                <p className="my-4">Tailwind</p>
                <p className="my-4">Advanced</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
