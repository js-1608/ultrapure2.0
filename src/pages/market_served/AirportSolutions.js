import React from "react";
import { Link } from "react-router-dom";
export const AirportSolutions = ({ imageUrl, problem, tableData, health }) => {
  return (
    <div className=" p-0 lg:p-6 ">
      <div className="flex">
        <div className="p-2 w-full lg:w-3/4 sm:w-full">
          <img
            src={imageUrl}
            alt="Airport"
            className="w-full h-64 object-cover  rounded m-auto display_hide_big"
          />

          <h4 className="text-xl font-semibold">The Problem:</h4>
          <p className="mb-4 text-md text-justify">{problem}</p>
          <h4 className="text-xl font-semibold">Health Risks:</h4>
          <ul className="mb-4 text-md list-disc pl-5">
            {health.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <img
          src={imageUrl}
          alt="Airport"
          className="w-1/2 h-64 object-cover  rounded m-auto display_hide"
        />
 
      </div>
      <table className="w-full mb-4 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Application Area</th>
            <th className="p-2 border">Ultrapure Solution</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-100">
              <td className="p-2 border">{row.applicationArea}</td>
              <td className="p-2 border">{row.solution}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-left">
        {/* <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Contact Us
        </button> */}
        <Link to="/contact" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 p-5">
          Contact us
        </Link>
      </div>
    </div>
  );
};
