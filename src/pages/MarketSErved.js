import React from "react";
import Banner from "../components/Banner";
import banner from "../assests/market_banner.png";
import banner2 from "../assests/Group 195.png";

import FAQSection from "../components/FAQSection";
import ProductList from "../components/ProductList";
import faqs from "../data/Data";
import Banner2 from "../components/Banner2";

const MarketSErved = () => {
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
       <Banner2
        src={banner2}
        title="Explore Our Expertise"
        text="Explore the industries most relevant to you "
        updated=""
        buttonUrl=""
        buttonText=""
      />

      <div className="flex flex-wrap ">
        <div className="flex-1 p-10 w-full">
          <FAQSection faqs={faqs} />
        </div>
        {/* <div className=" p-4 w-1/5  border border-black m-5 rounded display_hide">
          <ProductList faqs={faqs} />
        </div> */}
      </div>
    </div>
  );
};

export default MarketSErved;
