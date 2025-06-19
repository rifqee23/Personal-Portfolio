import React from "react";

const Card = (props) => {
  const { src, title, techIcons, children, link } = props;
  return (
    <>
      <figure className="bg-slate-800 max-w-sm w-full rounded-xl p-8 h-80 dark:bg-slate-800">
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="relative bg-blue-600 w-full group">
              <img
                className="mx-auto group-hover:scale-110 duration-500"
                src={src}
                alt="project"
              />
              <a
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white bg-opacity-50 group-hover:bg-opacity-75 rounded-lg p-2 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                href={link}
                target="_blank"
              >
                <p className="text-black font-semibold">View Site</p>
              </a>
            </div>
          </div>

          <div className="pt-6 space-y-4">
            <blockquote>
              <p className="text-lg font-medium text-white">“{title}.”</p>
            </blockquote>
            <p className="text-white font-semibold">Build With:</p>
            <div className="mt-2 flex gap-4 hover:bg-amber-50 rounded-xl  px-2">{techIcons}</div>
          </div>
        </div>
      </figure>
    </>
  );
};

export default Card;
