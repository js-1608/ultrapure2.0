
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from '../../components/Banner';
import banner from '../../assests/contactBanner.png'
import ProductList from '../../components/ProductList';
// import faqs from '../data/faqsData';
import faqs from '../../data/Data';

import {Solution} from './Solution';

export default function Waste() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  //Corrosion Control
  const imageUrl = "publicbuilding/public (1).png";
  const problem = " :Airborne chemicals in water and wastewater treatment facilities can cause corrosion of equipment and infrastructure. This can lead to increased maintenance costs and potential system failures.";
  const health = [
   " Exposure to harmful chemicals", "respiratory issues",  "potential long-term health effects from inhalation of corrosive agents"
  ];

//   •	Emergency
  const EmergencyimageUrl = "publicbuilding/public (1).png";
  const Emergencyproblem = "TTreatment plants may face sudden releases of toxic gases, including hydrogen sulfide and chlorine, requiring immediate and effective air purification to protect workers and the surrounding community.";
  const Emergencyhealth = [
    "Acute respiratory distress"," eye and skin irritation",  "long-term health issues from exposure to toxic gases"
  ]; 

  //  Odor Control
  const  OdorimageUrl = "publicbuilding/public (1).png";
  const  Odorproblem = "Similar to the challenges faced in industrial pulp and paper facilities, material processing in this industry involves dust, chemical emissions, VOCs, and odors that need to be effectively managed.";
  const  Odorhealth = [
    "Respiratory issues", "skin and eye irritation","long-term exposure risks such as cancer."
  ]; 


  return (
    <div>
      <Banner
        src={banner}
        title="Water/Waste"
        text=""
        updated=""
        buttonUrl=""
        buttonText=""
      />
      <div className="flex flex-wrap ">
        <div className="flex-1 p-2 w-4/5">
          {/*Corrosion*/}
          <section id="Corrosion" className=" border rounded shadow-lg m-5 mb-16">
            <h1 className='text-4xl  ml-5 lg:ml-10 mt-5 font-bold '>Corrosion Control</h1>

            <div className="container mx-auto p-4 ">
              <Solution imageUrl={imageUrl} problem={problem} health={health} />
            </div>
          </section>

          {/* Dairy */}
          <section id="Odor" className=" border rounded shadow-lg m-5 mb-16">
            <h1 className='text-4xl  ml-5 lg:ml-10 mt-5 font-bold '>Odor Control</h1>

            <div className="container mx-auto p-4 ">
              <Solution imageUrl={ OdorimageUrl} problem={ Odorproblem} health={ Odorhealth} />
            </div>
          </section>

          {/* Beverage Production */}
          <section id="Emergency" className=" border rounded shadow-lg m-5 mb-16">
            <h1 className='text-4xl  ml-5 lg:ml-10 mt-5 font-bold '>Emergency Gas Scrubbing</h1>
            <div className="container mx-auto p-4 ">
              <Solution imageUrl={EmergencyimageUrl} problem={Emergencyproblem} health={Emergencyhealth} />
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
