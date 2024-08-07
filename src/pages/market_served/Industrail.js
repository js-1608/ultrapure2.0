
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from '../../components/Banner';
import banner from '../../assests/contactBanner.png'
import ProductList from '../../components/ProductList';
// import faqs from '../data/faqsData';
import faqs from '../../data/Data';
import { AirportSolutions } from './AirportSolutions';
import {Solution} from './Solution';
export default function Industrial() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  // Airport data
  const tableData = [
    { applicationArea: 'Whole building with Centralized Air Conditioning', solution: 'Pentagon AOP duct air purifiers' },
    { applicationArea: 'Spa areas', solution: 'Virushield/ GermiNOX/ Falcon S/ Falcon C' },
    { applicationArea: 'Washrooms/ restrooms', solution: 'Virushield/ GermiNOX' },
    { applicationArea: 'Pantry/ kitchen areas/ Cafeteria/ Lounges', solution: 'Virushield/ GermiNOX' },
    { applicationArea: 'Waiting areas', solution: 'Virushield/ GermiNOX/ Falcon S/ Falcon C' },
    { applicationArea: 'Smoking Zones', solution: 'Customized air purification (SmokoNOX)' },
    { applicationArea: 'Bags Check-in area', solution: 'Virushield/ GermiNOX/ Customized purifier' },
  ];

  const imageUrl = "publicbuilding/public (1).png";
  const problem = " Airports experience high foot traffic, leading to elevated levels of airborne pathogens, dust, VOCs, and pollutants from aircraft and ground vehicles. The constant movement of people and luggage stirs up dust and other particulates, while the presence of travelers from various locations increases the risk of spreading infectious diseases. Health Risks: Respiratory infections, asthma exacerbations, allergic reactions, and transmission of infectious diseases.";
  const health = [
    "Respiratory infections",
    "Asthma exacerbations",
    "Allergic reactions",
    "Transmission of infectious diseases"
  ];
  //POWER
  

  const powerimageUrl = "publicbuilding/public (1).png";
  const powerproblem = " Power plants emit large amounts of pollutants, including particulate matter, sulfur dioxide, nitrogen oxides, and VOCs, which can harm human health and the environment. Managing these emissions is crucial for regulatory compliance and community health.";
  const powerhealth = [
    "Respiratory" ,"cardiovascular diseases", "lung cancer"," premature death"
  ];

   //Public
   const publicpowertableData = [
    { applicationArea: 'Buses/ Trains with Centralized Air Conditioning ', solution: 'Pentagon AOP duct air purifiers or customized duct purifiers' },
    { applicationArea: 'Power generation plant', solution: 'Fresh air standalone unit/ Corrosion Control unit /Corrosion Coupons/ monitoring system' },
  
  ];

  const publicpowerimageUrl = "publicbuilding/public (1).png";
  const publicpowerproblem = " High density of passengers in public transportation systems, such as buses and trains, leads to increased airborne pathogens and poor air quality. Vehicle emissions and particulate matter from wear and tear further degrade the environment.";
  const publicpowerhealth = [
    "Respiratory infections", "asthma exacerbations", " cardiovascular problems"
  ];
    //•	Pulp
    const PulppowertableData = [
      { applicationArea: 'Cabins with Air Conditioning  ', solution: 'Virushield/ GermiNOX/ Falcon S/ Falcon C' },
      { applicationArea: 'Pulp and Paper industries', solution: 'Fresh air standalone unit/ Corrosion Control unit Corrosion Coupons/ monitoring system' },
    
    ];
  
    const PulppowerimageUrl = "publicbuilding/public (1).png";
    const Pulppowerproblem = " : The pulp and paper industry emits dust, chemical fumes, VOCs, and odors during production processes. These pollutants can affect workers' health and the surrounding community, necessitating effective air purification solutions.";
    const Pulppowerhealth = [
      "Respiratory issues", "skin and eye irritation",  "long-term exposure risks such as cancer"
    ];

     //refineries
     const refineriestableData = [
        { applicationArea: 'Cabins with Air Conditioning  ', solution: 'Virushield/ GermiNOX/ Falcon S/ Falcon C' },
        { applicationArea: 'Pulp and Paper industries', solution: 'Fresh air standalone unit/ Corrosion Control unit /Corrosion Coupons/ monitoring system' },
      
      ];
    
      const refineriesimageUrl = "publicbuilding/public (1).png";
      const refineriesproblem = " : Refineries release hazardous gases, VOCs, chemical fumes, and particulate matter during the processing of crude oil. These emissions pose significant health risks to workers and nearby residents, making air quality management a critical concern.";
      const refinerieshealth = [
        "Respiratory problems", "skin and eye irritation", "cancer", "other long-term health effects"
      ];

  return (
    <div>
      <Banner
        src={banner}
        title="Industrial / Transportation"
        text=""
        updated=""
        buttonUrl=""
        buttonText=""
      />
      <div className="flex flex-wrap ">
        <div className="flex-1 p-2 w-4/5">
          {/* Airports */}
          <section id="Airports" className=" border rounded shadow-lg m-5">
            <h1 className='text-4xl text-center font-bold '>Airport</h1>

            <div className="container mx-auto p-4 ">
              <AirportSolutions imageUrl={imageUrl} problem={problem} tableData={tableData} health={health} />
            </div>
          </section>

            {/* Power */}
            <section id="Power" className=" border rounded shadow-lg m-5">
            <h1 className='text-4xl text-center font-bold '>Power</h1>

            <div className="container mx-auto p-4 ">
              <Solution imageUrl={powerimageUrl} problem={powerproblem}  health={powerhealth} />
            </div>
          </section>

            {/* public */}
            <section id="Public" className=" border rounded shadow-lg m-5">
                <h1 className='text-4xl text-center font-bold '>Public Transportations</h1>

            <div className="container mx-auto p-4 ">
              <AirportSolutions imageUrl={publicpowerimageUrl} problem={publicpowerproblem} tableData={publicpowertableData} health={publicpowerhealth} />
            </div>
          </section>
          
          

           {/* Refineries */}
           <section id="Refineries" className=" border rounded shadow-lg m-5">
                <h1 className='text-4xl text-center font-bold '>Refineries</h1>

            <div className="container mx-auto p-4 ">
              <AirportSolutions imageUrl={refineriesimageUrl} problem={refineriesproblem} tableData={refineriestableData} health={refinerieshealth} />
            </div>
          </section>

            {/* Pulp*/}
            <section id="Pulp" className=" border rounded shadow-lg m-5">
                <h1 className='text-4xl text-center font-bold '>Pulp & Paper</h1>

            <div className="container mx-auto p-4 ">
              <AirportSolutions imageUrl={publicpowerimageUrl} problem={publicpowerproblem} tableData={publicpowertableData} health={publicpowerhealth} />
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
