
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from '../../components/Banner';
import banner from '../../assests/contactBanner.png'
import ProductList from '../../components/ProductList';
// import faqs from '../data/faqsData';
import faqs from '../../data/Data';

import {Solution} from './Solution';

export default function Material() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  //Mining
  const imageUrl = "publicbuilding/public (1).png";
  const problem = " : Mining operations produce dust, silica particles, and harmful gases, posing significant health risks to miners. Proper air purification is crucial to protect workers and ensure regulatory compliance.";
  const health = [
   " Respiratory issues", "including silicosis"," lung cancer", "chronic obstructive pulmonary disease (COPD)"
  ];

//   Oil, Gas & Chemicals
  const dairyimageUrl = "publicbuilding/public (1).png";
  const dairyproblem = "The extraction and processing of oil, gas, and chemicals release a variety of pollutants, including chemical fumes, VOCs, gases, and particulate matter. These emissions can have severe health and environmental impacts.";
  const dairyhealth = [
    "Respiratory problems"," skin and eye irritation"," cancer", "other long-term health effects"
  ]; 

  //  Pulp & Paper
  const foodimageUrl = "publicbuilding/public (1).png";
  const foodproblem = "Similar to the challenges faced in industrial pulp and paper facilities, material processing in this industry involves dust, chemical emissions, VOCs, and odors that need to be effectively managed.";
  const foodhealth = [
    "Respiratory issues", "skin and eye irritation","long-term exposure risks such as cancer."
  ]; 


  return (
    <div>
      <Banner
        src={banner}
        title="Material Processing"
        text=""
        updated=""
        buttonUrl=""
        buttonText=""
      />
      <div className="flex flex-wrap ">
        <div className="flex-1 p-2 w-4/5">
          {/*Mining*/}
          <section id="Mining" className=" border rounded shadow-lg m-5 mb-16">
            <h1 className='text-2xl lg:text-4xl  ml-5 lg:ml-10 mt-5 font-bold '>Mining</h1>

            <div className="container mx-auto p-4 ">
              <Solution imageUrl={imageUrl} problem={problem} health={health} />
            </div>
          </section>

          {/* Dairy */}
          <section id="Oil" className=" border rounded shadow-lg m-5 mb-16">
            <h1 className='text-2xl lg:text-4xl  ml-5 lg:ml-10 mt-5 font-bold '>Oil, Gas & Chemicals</h1>

            <div className="container mx-auto p-4 ">
              <Solution imageUrl={dairyimageUrl} problem={dairyproblem} health={dairyhealth} />
            </div>
          </section>

          {/* Beverage Production */}
          <section id="Pulp" className=" border rounded shadow-lg m-5 mb-16">
            <h1 className='text-2xl lg:text-4xl  ml-5 lg:ml-10 mt-5 font-bold '>Pulp & Paper</h1>

            <div className="container mx-auto p-4 ">
              <Solution imageUrl={foodimageUrl} problem={foodproblem} health={foodhealth} />
            </div>
          </section>

        
        </div>
        
        <div className=" p-4 w-1/5  border border-black m-5 rounded display_hide">
          <ProductList faqs={faqs} />
        </div>
      </div>
    </div>


  );
}
