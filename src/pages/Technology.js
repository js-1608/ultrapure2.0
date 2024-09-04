import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import banner from "../assests/ourtechnology_banner.png";
import banner2 from "../assests/Group 194.png";

import nanox from "../assests/nanoX technology.png";
import ultrasorb from "../assests/ultrasorb technology.png";
import plasma from "../assests/plasmOX Technology.png";
import CarouselComponent from "../components/CarouselComponent";
import tech1 from "../assests/technology (1).png";
import tech2 from "../assests/technology (2).png";
import tech3 from "../assests/plasmOX.png";
import Newsletter from "../components/Newsletter";
import Banner2 from "../components/Banner2";

export default function Technology() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="overflow-x-hidden">
      <Banner
        src={banner}
        title="Our Technology"
        text="Fill up the form and our Team will get back to you within 24 hours"
        updated=""
        buttonUrl=""
        buttonText=""
      />
      <Banner2
        src={banner2}
        title="Our Technology"
        text="Fill up the form and our Team will get back to you within 24 hours"
        updated=""
        buttonUrl=""
        buttonText=""
      />

      <div className="flex flex-col md:flex-row  p-4 md:p-8 rounded-lg">
        <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-6 flex flex-col justify-center">
          <p className="text-gray-700 p-8 text-justify">
            nanoX Technology is at the forefront of our air purification
            solutions, harnessing the power of nature-friendly oxidizers to
            effectively eliminate viruses, microbes, and pollutants from indoor
            environments. By utilizing UV light to activate nano Titanium
            dioxide, nanoX generates hydroxyl radicals, which act as powerful
            oxidizers, breaking down harmful contaminants at the molecular
            level. This innovative technology offers continuous air purification
            and disinfection, providing peace of mind and protection against
            airborne pathogens.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-evenly items-center">
          <div className="w-1/4">
            <img src={tech1} alt="plasma" className=" h-auto rounded-lg" />
            <h6 className="font-bold text-sm">nanoX® Technology</h6>
          </div>
          <div className="w-1/4">
            <img src={tech2} alt="plasma" className="h-auto rounded-lg" />
            <h6 className="font-bold text-sm">plasmOX® Technology</h6>
          </div>
          <div className="w-1/4">
            <img src={tech3} alt="plasma" className=" h-auto rounded-lg" />
            <h6 className="font-bold w-full text-sm">plasmOX® Technology</h6>
          </div>
        </div>
      </div>
      <CarouselComponent />

      <section id="section1">
        <div className="flex flex-col md:flex-row bg-gray-50 p-4 md:p-8 rounded-lg">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img src={nanox} alt="plasma" className="w-3/4 h-auto rounded-lg" />
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-6 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-2">nanoX® Technology</h2>
            <p className="text-gray-700">
              nanoX Technology is at the forefront of our air purification
              solutions, harnessing the power of nature-friendly oxidizers to
              effectively eliminate viruses, microbes, and pollutants from
              indoor environments. By utilizing UV light to activate nano
              Titanium dioxide, nanoX generates hydroxyl radicals, which act as
              powerful oxidizers, breaking down harmful contaminants at the
              molecular level. This innovative technology offers continuous air
              purification and disinfection, providing peace of mind and
              protection against airborne pathogens.{" "}
            </p>
          </div>
        </div>
      </section>

      <section id="section2">
        <div className="flex flex-col md:flex-row bg-gray-50 p-4 md:p-8 rounded-lg">
          <div className="w-full md:w-1/2 flex justify-center items-center display_hide_big">
            <img
              src={plasma}
              alt="plasma"
              className="w-3/4 h-auto rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-6 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-2">plasmOX® Technology</h2>
            <p className="text-gray-700">
              plasmOX Technology harnesses the power of bipolar ionization to
              improve air quality by reducing particulate matter and
              neutralizing airborne contaminants. By emitting positively and
              negatively charged ions, plasmOX Bipolar Ionizers attach to
              particles and pollutants, causing them to clump together and fall
              out of the air. This innovative technology enhances air
              purification by targeting particulate contamination, promoting
              better respiratory health and overall well-being.{" "}
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center display_hide">
            <img
              src={plasma}
              alt="plasma"
              className="w-3/4 h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      <section id="section3">
        <div className="flex flex-col md:flex-row bg-gray-50 p-4 md:p-8 rounded-lg">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={ultrasorb}
              alt="plasma"
              className="w-3/4 h-auto rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-6 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-2">ultraSORB® Technology</h2>
            <p className="text-gray-700">
              ultraSORB Technology offers effective removal of gaseous
              contaminants, odors, and volatile organic compounds (VOCs) through
              specialized chemical media filtration. Designed to adsorb and
              neutralize harmful gases, ultraSORB Chemical Media ensures clean
              and odor-free indoor air quality, creating a fresh and inviting
              atmosphere for occupants. This innovative technology provides
              peace of mind and protection against gaseous contamination in
              various indoor environments.{" "}
            </p>
          </div>
        </div>
      </section>
      <Newsletter />
    </div>
  );
}
