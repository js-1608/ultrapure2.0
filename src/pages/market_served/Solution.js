import React from "react";

export const Solution = ({ imageUrl, problem, health }) => {
  return (
    <div className=" p-0 lg:p-6">
      <div className="flex">
        <div className="p-2 w-full lg:w-3/4 sm:w-full">
          {/* <img
            src={imageUrl}
            alt="Airport"
            className="w-full h-64 object-cover  rounded m-auto display_hide_big"
          /> */}

          <h4 className="text-xl font-semibold">The Problem:</h4>
          <p className="mb-4 text-md text-justify">{problem}</p>
          <h4 className="text-xl font-semibold">Health Risks:</h4>
          <ul className="mb-4 text-md list-disc pl-5">
            {health.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {/* <img
          src={imageUrl}
          alt="Airport"
          className="w-full h-64 object-cover  rounded m-auto display_hide"
        /> */}
 
      </div>
      <div className="flex ">
        {/* <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Contact Us
        </button> */}
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
        Contact Us
        </button>
      </div>
    </div>
  );
};
