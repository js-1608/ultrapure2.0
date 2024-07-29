import React from 'react';

export const AirportSolutions = ({ imageUrl, problem, tableData ,health}) => {
  return (
    <div className="p-6 border rounded shadow-lg">
        <div className='flex'>
      <img src={imageUrl} alt="Airport" className="w-full h-64 object-cover  rounded m-auto" />
      <div className='p-4'>
        <h4 className='text-xl font-semibold'>Problem:</h4>
      <p className="mb-4 text-lg">{problem}</p>
      <h4 className='text-xl font-semibold'>Health:</h4>
      <p className="mb-4 text-lg">{health}</p>
      </div>
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
      <div className="flex justify-evenly">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Contact Us</button>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Reach Us</button>
      </div>
    </div>
  );
};
