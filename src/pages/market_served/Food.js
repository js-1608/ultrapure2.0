
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from '../../components/Banner';
import banner from '../../assests/contactBanner.png'
import ProductList from '../../components/ProductList';
// import faqs from '../data/faqsData';
import faqs from '../../data/Data';

import {Solution} from './Solution';

export default function Food() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  // Beverage Production
  const imageUrl = "publicbuilding/public (1).png";
  const problem = "  Beverage production facilities need to maintain high standards of cleanliness to prevent contamination. Airborne pollutants, including dust, VOCs, and microorganisms, can compromise product quality.";
  const health = [
    "Exposure to airborne microorganisms can lead to infections and respiratory issues. VOCs and dust can cause allergies and other respiratory problems."
  ];

//   dairy
  const dairyimageUrl = "publicbuilding/public (1).png";
  const dairyproblem = "  Dairy processing facilities face challenges with airborne bacteria, allergens, and VOCs. Maintaining a sterile environment is essential to ensure product safety and quality.";
  const dairyhealth = [
    "Respiratory issues", "allergic reactions", "potential infections from airborne bacteria"
  ]; 

  //   food
  const foodimageUrl = "publicbuilding/public (1).png";
  const foodproblem = "Food processing generates dust, allergens, VOCs, and odors that can affect product quality and worker health. Effective air purification is necessary to maintain hygiene standards and regulatory compliance.";
  const foodhealth = [
    "Respiratory problems", "allergic reactions", " exposure to harmful chemicals"
  ]; 


  return (
    <div>
      <Banner
        src={banner}
        title="Food and Beverage"
        text=""
        updated=""
        buttonUrl=""
        buttonText=""
      />
      <div className="flex flex-wrap ">
        <div className="flex-1 p-2 w-4/5">
          {/* Beverage Production */}
          <section id="Beverage" className=" border rounded shadow-lg m-5  mb-16">
            <h1 className='text-4xl  ml-5 lg:ml-10 mt-5 font-bold '>Beverage Production</h1>

            <div className="container mx-auto p-4 ">
              <Solution imageUrl={imageUrl} problem={problem} health={health} />
            </div>
          </section>

          {/* Dairy */}
          <section id="Dairy" className=" border rounded shadow-lg m-5  mb-16">
            <h1 className='text-4xl  ml-5 lg:ml-10 mt-5 font-bold '>Dairy Processes</h1>

            <div className="container mx-auto p-4 ">
              <Solution imageUrl={dairyimageUrl} problem={dairyproblem} health={dairyhealth} />
            </div>
          </section>

          {/* Beverage Production */}
          <section id="Food" className=" border rounded shadow-lg m-5 mb-16">
            <h1 className='text-4xl  ml-5 lg:ml-10 mt-5 font-bold '>Food Processing</h1>

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
