import { web } from "../../obj/index.jsx";
import Card from "../Fragments/Card.jsx";

const Project = (props) => {
  return (
    <div
      id="project"
      className="w-full pb-4 pt-12 py-10 px-4  lg:px-20 xl:px-40 "
    >
      <div className="max-w-6xl mx-auto p-4 mb-5">
        <p className="text-4xl font-bold inline border-b-4 border-pink-600 ms-4">
          Project
        </p>
      </div>
      <div className="flex flex-col items-center lg:flex-row gap-10">
        {web.map((item, index) => {
          return (
            <Card
              key={index}
              src={item.image}
              title={item.name}
              techIcons={item.icon}
              link={item.link}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
