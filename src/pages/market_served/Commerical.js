
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from '../../components/Banner';
import banner from '../../assests/contactBanner.png'
import ProductList from '../../components/ProductList';
// import faqs from '../data/faqsData';
import faqs from '../../data/Data';
import { AirportSolutions } from './AirportSolutions';
export default function Commerical() {
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
  const problem = "Problems: Airports experience high foot traffic, leading to elevated levels of airborne pathogens, dust, VOCs, and pollutants from aircraft and ground vehicles. The constant movement of people and luggage stirs up dust and other particulates, while the presence of travelers from various locations increases the risk of spreading infectious diseases. Health Risks: Respiratory infections, asthma exacerbations, allergic reactions, and transmission of infectious diseases.";
  const health = "Health Risks: Respiratory infections, asthma exacerbations, allergic reactions, and transmission of infectious diseases."

  // halls data
  const HallstableData = [
    { applicationArea: 'Whole building with Centralized Air Conditioning ', solution: 'Pentagon AOP duct air purifiers' },
    { applicationArea: 'Where centralized air conditioning absent:	', solution: 'Virushield/ GermiNOX' },
    { applicationArea: 'Grocery storage room', solution: 'Virushield/ GermiNOX' },
    { applicationArea: 'Washrooms/ restrooms', solution: 'Virushield/ GermiNOX' },
    { applicationArea: 'Food court/ kitchen areas/ Cafeteria/ 	Virushield/ GermiNOX', solution: 'Virushield/ GermiNOX/ Falcon S/ Falcon C' },
    { applicationArea: 'Play/ Fun Zones', solution: 'Customized air purification (SmokoNOX)' },
    { applicationArea: 'Changing room', solution: 'Virushield/ GermiNOX/ Customized purifier' },
  ];
  const HallsimageUrl = "publicbuilding/public (8).png";
  const Hallsproblem = "Halls and malls are large, enclosed spaces that can accumulate dust, odors, VOCs, and airborne bacteria due to high visitor turnover and diverse activities such as food preparation and retail operations. Poor ventilation can exacerbate these issues, leading to an unpleasant environment for shoppers and staff.";
  const Hallshealth = "Allergies, respiratory problems, headaches, and increased susceptibility to infections."

  // Restaurants data
  const RestaurantstableData = [
    { applicationArea: 'Whole building with Centralized Air Conditioning', solution: 'Pentagon AOP duct air purifiers' },
    { applicationArea: 'Spa areas', solution: 'Virushield/ GermiNOX/ Falcon S/ Falcon C' },
    { applicationArea: 'Washrooms/ restrooms', solution: 'Virushield/ GermiNOX' },
    { applicationArea: 'Pantry/ kitchen areas/ Cafeteria/ Lounges', solution: 'Virushield/ GermiNOX' },
    { applicationArea: 'Waiting areas', solution: 'Virushield/ GermiNOX/ Falcon S/ Falcon C' },
    { applicationArea: 'Smoking Zones', solution: 'Customized air purification (SmokoNOX)' },
    { applicationArea: 'Bags Check-in area', solution: 'Virushield/ GermiNOX/ Customized purifier' },
  ];
  const RestaurantsimageUrl = "publicbuilding/public (5).png";
  const Restaurantsproblem = "Restaurants generate odors, smoke, VOCs, and airborne grease particles from cooking activities. These pollutants can spread throughout the dining area, creating an unpleasant experience for customers and posing health risks for staff. Proper ventilation and air purification are essential to manage these contaminants.";
  const Restaurantshealth = "Respiratory issues, allergies, headaches, and irritation from smoke and VOCs";

  // Officies
  const OfficestableData = [
    { applicationArea: 'Whole building with Centralized Air Conditioning ', solution: 'Pentagon AOP duct air purifiers' },
    // { applicationArea: 'Where centralized air conditioning absent:', solution: '' },
    { applicationArea: 'Conference room/cabins/ seminar rooms, etc.', solution: 'Virushield/ GermiNOX' },
    { applicationArea: 'Washrooms/ restrooms', solution: 'Virushield/ GermiNOX' },
    { applicationArea: 'Pantry/ kitchen areas/ Cafeteria', solution: 'Virushield/ GermiNOX/ Falcon S/ Falcon C' },
    { applicationArea: 'Waiting rooms/ reception', solution: 'Customized air purification (SmokoNOX)' },
  ];
  const OfficesimageUrl = "publicbuilding/public (6).png";
  const Officesproblem = "Office environments often suffer from indoor air pollutants, including VOCs from office equipment, dust, mold spores, and poor ventilation. These factors can lead to 'sick building syndrome,' where occupants experience health issues such as headaches, dizziness, and respiratory problems, impacting productivity and well-being.";
  const Officeshealth = "Headaches, fatigue, respiratory problems, and irritation of the eyes, nose, and throat.";
  
  return (
    <div>
      <Banner
        src={banner}
        title="Commercial & Public Buildings"
        text="IMPORTANCE OF INDOOR AIR QUALITY IN DIFFERENT MARKET SEGMENTS "
        updated=""
        buttonUrl=""
        buttonText=""
      />
      <div className="flex flex-wrap ">
        <div className="flex-1 p-2 w-4/5">
        {/* Airports */}
          <section id="Airports">
            <h1 className='text-4xl text-center font-bold '>Airport</h1>
            <div className="container mx-auto p-4">
              <AirportSolutions imageUrl={imageUrl} problem={problem} tableData={tableData} health={health} />
            </div>
          </section>

          {/* Restaurants */}
          <section id="Restaurants">
            <h1 className='text-4xl text-center font-bold '>	Restaurants</h1>
            <div className="container mx-auto p-4">
              <AirportSolutions imageUrl={RestaurantsimageUrl} problem={Restaurantsproblem} tableData={RestaurantstableData} health={Restaurantshealth} />
            </div>
          </section>

           {/* Officies */}
           <section id="Offices">
            <h1 className='text-4xl text-center font-bold '>Offices</h1>
            <div className="container mx-auto p-4">
              <AirportSolutions imageUrl={OfficesimageUrl} problem={Officesproblem} tableData={OfficestableData} health={Officeshealth} />
            </div>
          </section>

             {/* Halls */}
             <section id="Halls">
            <h1 className='text-4xl text-center font-bold '>	Halls & Malls</h1>
            <div className="container mx-auto p-4">
              <AirportSolutions imageUrl={HallsimageUrl} problem={Hallsproblem} tableData={HallstableData} health={Hallshealth} />
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
