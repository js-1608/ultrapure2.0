import React from 'react';
import Banner from '../components/Banner';
import banner from '../assests/market_banner.png';
import FAQSection from '../components/FAQSection';
import ProductList from '../components/ProductList';

const faqs = [
  { 
    id: 1, 
    heading: 'Commerical & Public Buildings', 
    content: [
      { imageUrl: 'publicbuilding/public (1).png', heading: 'Airports', href: 'https://example.com/answer1' },
      { imageUrl: 'publicbuilding/public (2).png', heading: 'Hospitals & IVF Centres', href: 'https://example.com/answer1' },
      { imageUrl: 'publicbuilding/public (3).png', heading: 'Museums', href: 'https://example.com/answer1' },
      { imageUrl: 'publicbuilding/public (4).png', heading: 'Schools & Universities', href: 'https://example.com/answer1' },
      { imageUrl: 'publicbuilding/public (5).png', heading: 'Restaurants', href: 'https://example.com/answer1' },
      { imageUrl: 'publicbuilding/public (6).png', heading: 'Offices', href: 'https://example.com/answer1' },
      { imageUrl: 'publicbuilding/public (7).png', heading: 'Hotels', href: 'https://example.com/answer2' },
      { imageUrl: 'publicbuilding/public (8).png', heading: 'Halls & Malls', href: 'https://example.com/answer2' }

    ] 
  },

  { 
    id: 2, 
    heading: 'Industrial/Transportation', 
    content: [
      { imageUrl: 'industrail/industry (1).png', heading: 'Airport', href: 'https://example.com/answer3' },
      { imageUrl: 'industrail/industry (5).png', heading: 'Power Generation', href: 'https://example.com/answer3' },
      { imageUrl: 'industrail/industry (4).png', heading: 'Public Transportations', href: 'https://example.com/answer3' },
      { imageUrl: 'industrail/industry (3).png', heading: 'Refineries', href: 'https://example.com/answer3' },
      { imageUrl: 'industrail/industry (2).png', heading: 'Pulp & Paper' , href: 'https://example.com/answer3' },

    ] 
  },

  { 
    id: 3, 
    heading: 'Food and Beverage', 
    content: [
      { imageUrl: 'food/food (1).png', heading: 'Beverage Production', href: 'https://example.com/answer3' },
      { imageUrl: 'food/food (3).png', heading: 'Dairy Processes', href: 'https://example.com/answer4' },
      { imageUrl: 'food/food (2).png', heading: 'Food Processing', href: 'https://example.com/answer4' }

    ] 
  },



  { 
    id: 4, 
    heading: 'Material Processing', 
    content: [
      { imageUrl: 'material/material (1).png', heading: 'Mining', href: 'https://example.com/answer3' },
      { imageUrl: 'material/material (2).png', heading: 'Oil, Gas & Chemicals', href: 'https://example.com/answer3' },
      { imageUrl: 'material/material (3).png', heading: 'Pulp & Paper', href: 'https://example.com/answer3' },
    ] 
  },

  { 
    id: 5, 
    heading: 'Water/Waste', 
    content: [
      { imageUrl: 'waste/waste (1).png', heading: 'Corrosion Control', href: 'https://example.com/answer3' },
      { imageUrl: 'waste/waste (2).png', heading: 'Odor Control', href: 'https://example.com/answer3' },
      { imageUrl: 'waste/waste (3).png', heading: 'Emergency Gas Scrubbing', href: 'https://example.com/answer3' },
    ] 
  },


];

const products = [
  { id: 1, name: 'Commerical & Public Buildings',list:['Airports', 'Halls & Malls' ,'Hotels', 'Museums','Offices', 'Restaurants,Schools & Universities' , 'Hospitals/ IVFCentres'], href: '/product1' },
  { id: 2, name: 'Industrial/Transportation',list:['Airport','Power Generation','Public Transportation','Pulp and Paper','Refineries'], href: '/product2' },
  { id: 3, name: 'Food & Beverages',list:['Beverage Production','Dairy Processes','Food Processing'], href: '/product2' },
  { id: 4, name: 'Material Processing',list:['Mining', 'Oil, Gas & Chemicals',' Pulp & Paper'], href: '/product2' },
  { id: 5, name: 'Water/Waste',list:['Corrosion Control','Emergency Gas Scrubbing','Odor Control'], href: '/product2' },

  // Add more products as needed
];


  const MarketSErved = () =>  {
	return (
	  <div>
   <Banner
        src={banner}
        title="Explore Our Expertise"
        text="Explore the industries most relevant to you "
        updated=""
        buttonUrl=""
        buttonText=""
      />

<div className="flex flex-wrap ">
      <div className="flex-1 p-4 w-4/5">
        <FAQSection faqs={faqs} />
      </div>
      <div className=" p-4 w-1/5  border border-black m-5 rounded display_hide">
        <ProductList products={products} />
      </div>
    </div>
	  </div>
	);
  }
  
  export default MarketSErved;







  