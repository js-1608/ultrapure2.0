// DownloadGrid.js
import React from 'react';
import { FaCloudArrowDown } from "react-icons/fa6";
import Banner from '../components/Banner';
import banner from '../assests/contactBanner.png'

const files = [
  { name: 'Test Certificates', url: '/path/to/document1.pdf' },
  { name: 'AOP Catalog', url: '/path/to/document2.pdf' },
  { name: 'Virushield Catalog', url: '/path/to/document3.pdf' },
  { name: 'Case Studies', url: '/path/to/document4.pdf' },
  { name: 'Data Centre Catalog', url: '/path/to/document5.pdf' },
  { name: 'Company Profile', url: '/path/to/document6.pdf' },
  { name: 'Ultrapure Product Catalog', url: '/path/to/document7.pdf' },
  { name: 'Document 8', url: '/path/to/document8.pdf' },
  { name: 'Document 9', url: '/path/to/document9.pdf' },
];

const Download = () => {
  return (
    <>
   <Banner
    src={banner}
    title="Download Section"
    text=""
    updated=""
    buttonUrl=""
    buttonText=""
  />
    <div className="max-w-6xl mx-auto py-8 ">
      {/* <h1 className="text-3xl font-bold text-center mb-8">Download Documents</h1> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 lg:p-2">
        {files.map((file, index) => (
          <div key={index} className="flex flex-col items-center bg-gray-100 rounded-lg shadow border_left2  p-7">
            <h2 className="lg:text-xl font-bold mb-4">{file.name}</h2>
            <a href={file.url} download className="flex items-center  py-2 px-4 rounded hover:text-blue-700">
              Download
              <FaCloudArrowDown  className="ml-2 w-5 h-5"/>

            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Download;
