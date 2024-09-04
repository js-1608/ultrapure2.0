// WorkWithUs.js
import React from 'react';
import Banner from '../components/Banner';
import banner from '../assests/contactBanner.png';
import banner2 from '../assests/Group 198.png';
import Newsletter from '../components/Newsletter';
import { MdArrowOutward } from "react-icons/md";
import Banner2 from '../components/Banner2';
import { Link } from 'react-router-dom';
const jobPositions = [
  {
    title: 'Frontend Developer',
    description: 'Develop and maintain web applications using React.'
  },
  {
    title: 'Backend Developer',
    description: 'Design and implement server-side logic using Node.js.'
  },
  {
    title: 'UI/UX Designer',
    description: 'Create user-friendly interfaces and improve user experience.'
  },
  // Add more positions as needed
];

const WorkWithUs = () => {
  return (
    <div className="overflow-x-hidden">
    <Banner
    src={banner}
    title="Work With Us"
    text=""
    updated=""
    buttonUrl=""
    buttonText=""
  />
  <Banner2
    src={banner2}
    title="Work With Us"
    text=""
    updated=""
    buttonUrl=""
    buttonText=""
  />

    <div className="max-w-6xl mx-auto py-8 ">
      <h1 className="text-2xl g:text-3xl font-bold text-left mb-8">Be the part of our mission</h1>
      {jobPositions.map((position, index) => (
        <div key={index} className="flex justify-between items-center p-4 mb-4  border-b border-gray-800 ">
          <div>
            <h2 className="text-xl font-bold">{position.title}</h2>
            <p className="text-gray-700">{position.description}</p>
          </div>
          <button className="flex items-center  py-2 px-4 rounded hover:bg-ultragreen">
            <Link to="">Apply</Link>
            <MdArrowOutward className="ml-2 w-5 h-5"/>

            {/* <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg> */}
          </button>
        </div>
      ))}
    </div>

    <Newsletter/>
    </div>
  );
};

export default WorkWithUs;
