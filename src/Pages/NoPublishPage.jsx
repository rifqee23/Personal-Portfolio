import React from "react";

const NoPublishPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-center">
        This Project is Not Published Yet
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Please check back later for updates.
      </p>
      <a
        href="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200"
      >
        Go Back to Home
      </a>
    </div>
  );
};

export default NoPublishPage;
