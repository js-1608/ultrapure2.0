import React, { useState } from "react";
import ProductDisplay from "../../components/ProductDisplay";
// import Carousel from '../components/Carousel';
import Carousel from "../../components/Carousel.js";
import CarouselComponent from "../../components/CarouselComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import g42 from './product/G42.png'
import { FaCloudArrowDown } from "react-icons/fa6";

import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import tech1 from "../../assests/technology (1).png";
// import tech2 from "../../assests/technology (2).png";
import tech3 from "../../assests/plasmOX.png";
// import aop1 from 'product/aop.png'
// import FAQSection from '../components/FAQSection';
function Virushield() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Features",
      answer: {
        type: "iconText",
        iconContent: [
          {
            // icon: "../product/aop/Group 121.png",
            // text: "Our return policy is...",
            image: "../product/aop/Group 121.png",
            additionalText: "Active & Passive Technology",
          },
          {
            // icon: "../product/aop/Group 122.png",
            // text: "Our shipping policy is...",
            image: "../product/aop/Group 122.png",
            additionalText: "Plug and Play",
          },
          {
            // icon: "../product/aop/Group 124.png",
            // text: "Our warranty policy is...",
            image: "../product/aop/Group 124.png",
            additionalText: "Lightweight & Noise-free",
          },
          // {
          // 	// icon: "../product/aop/Group 125.png",
          // 	// text: "Our support policy is...",
          // 	image: "../product/aop/Group 125.png",
          // 	additionalText: "Additional support information..."
          // }
        ],
      },
    },
    {
      id: 2,
      question: "Benefits",
      answer: {
        type: "list",
        items: [
          "Enhances Indoor air quality of conditioned spaces.",
          "Energy-e­icient and safe solution.",
          "Very e­ective on viruses like Corona family virus.",
          "Prevent bioaerosol cross-contamination.",
          "Eliminate gaseous contamination, SO2, NO2, Ozone etc. and mitigate odors.",
          " Independent Equipments having cleaning performance in Independent matter",
        ],
      },
    },
    {
      id: 3,
      question: "Protection From",
      answer: {
        type: "images",
        images: [
          "../product/aop/Group 126.png",
          "../product/aop/Group 127.png",
          "../product/aop/Group 128.png",
          "../product/aop/Group 129.png",
          "../product/aop/Group 130.png",
          "../product/aop/Group 131.png",
        ],
        imagescontent: [
          "Pathogenic Food Odor",
          "Food Odor",
          "Washroom Odor",
          "VOCS & Formaldehyde",
          "Hospital Odor",
          "Particulate Matter",
        ],
      },
    },
    {
      id: 4,
      question: "Application Area",
      answer: {
        type: "words",
        words: [
          "Government",
          "Airport",
          "Offices",
          "Residential",
          "University",
          "Hospitality",
          "Transportation",
          "Factories",
          "Residential",
          "Railways",
        ],
      },
    },
  ];

  const product = {
    headingText: "HVAC Duct Air Purification",
    title: "Virushield Air Purifer",
    downloadFile:
      "https://ultrapureindia.in/pdf/Wallhung Or Virushield Flyer.pdf",
    mainImage: "product/virshulfield.png",
    relativeImages: [
      "products/Group 89.png",
      "products/Group 89.png",
      "products/Group 89.png",
      "products/Group 89.png",
    ],
  };
  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };
  return (
    <div className="overflow-x-hidden">
      <ProductDisplay
        headingText={product.headingText}
        title={product.title}
        downloadFile={product.downloadFile}
        mainImage={product.mainImage}
        relativeImages={product.relativeImages}
      />

      <div className="flex flex-col md:flex-row  p-4 md:p-8 rounded-lg">
        <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-6 flex flex-col justify-center">
          <p className="text-gray-700 p-8 text-justify">
            The Ultrapure UV technology utilizes a patented system that differs
            from traditional germicidal UV-C technology. It generates intense UV
            radiation within a specialized reflection chamber, leading to an
            Advanced Oxidation Penta plasma reaction. This reaction involves UV
            light energy reacting with oxygen, ozone, moisture, and a hydrated
            chamber to produce cleansing plasma ions like Ozone, Hydroxyls, and
            super oxide ions. This process helps suppress bacterial and mold
            growth, reduce odors, and improve air quality.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-between items-center">
          <div className="w-1/2">
            <img src={tech1} alt="plasma" className=" h-auto rounded-lg" />
            {/* <h6 className="font-bold text-sm">nanoX® Technology</h6> */}
          </div>

          <div className="w-1/2">
            <img src={tech3} alt="plasma" className=" h-auto rounded-lg" />
            {/* <h6 className="font-bold w-full text-sm">plasmOX® Technology</h6> */}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row  p-4 md:p-8 rounded-lg">
        <div className="w-full md:w-1/3 flex justify-between items-center">
          <div className="w-2/3 text-center justify-center m-auto">
            <img src="product/G42.png" alt="plasma" className="  rounded-lg" />
            {/* <h6 className="font-bold w-full text-sm">Modular Decontamination Unit - 42</h6> */}
          </div>
        </div>
        <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-6 flex flex-col justify-center">
          <h1 className="font-bold w-full text-xl md:text-2xl  lg:text-3xl p-3">
            Modular Decontamination Unit - 42
          </h1>
          <p className="text-gray-700 p-3 pr-3 lg:pr-8 text-justify">
            The Ultrapure Modular air decontamination unit, featuring the
            Advanced Oxidation Plasma system, utilizes an antimicrobial catalyst
            reflector that releases plasma of friendly oxidizers when a
            proprietary nanoX chamber is exposed to moisture in the air. Our
            in-house-designed and developed wall-mounted air purifiers, enhanced
            by nanoX & and plasmOX & technologies, generate both positively and
            negatively charged ions that actively neutralize aerosolized
            microbes, hospital odors, restroom and food odors, and volatile
            organic compounds (VOCs) from cleaning chemicals.
          </p>

          <a
            href="https://ultrapureindia.in/pdf/Modular Decontamination Unit - 42.pdf"
            rel="noreferrer"
            target="_blank"
            className=" flex items-center text-textBlue hover:text-ultragreen text-md lg:text-xl p-3"
          >
            Download Brochure{" "}
            <span className="ml-2">
              <FaCloudArrowDown className="ml-2 w-5 h-5" />
            </span>
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row  p-4 md:p-8 rounded-lg">
        <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-6 flex flex-col justify-center">
          <h1 className="font-bold w-full text-xl md:text-2xl  lg:text-3xl p-8">
            Modular Decontamination Unit - 84
          </h1>
          <p className="text-gray-700 p-3 pl-8 lg:pr-8 text-justify">
            The Ultrapure Modular air decontamination unit, featuring the
            Advanced Oxidation Plasma system, utilizes an antimicrobial catalyst
            reflector that releases plasma of friendly oxidizers when a
            proprietary nanoX chamber is exposed to moisture in the air. Our
            in-house-designed and developed wall-mounted air purifiers, enhanced
            by nanoX & and plasmOX & technologies, generate both positively and
            negatively charged ions that actively neutralize aerosolized
            microbes, hospital odors, restroom and food odors, and volatile
            organic compounds (VOCs) from cleaning chemicals.
          </p>

          <a
            href="https://ultrapureindia.in/pdf/Modular Decontamination Unit - 84.pdf"
            rel="noreferrer"
            target="_blank"
            className=" flex items-center text-textBlue hover:text-ultragreen text-md lg:text-xl p-3 lg:pl-8"
          >
            Download Brochure{" "}
            <span className="ml-2">
              <FaCloudArrowDown className="ml-2 w-5 h-5" />
            </span>
          </a>
        </div>
        <div className="w-full md:w-1/3 flex justify-between items-center">
          <div className="w-2/3 text-center justify-center m-auto">
            <img src="product/G84.png" alt="plasma" className="  rounded-lg" />
            {/* <h6 className="font-bold w-full text-sm">Modular Decontamination Unit - 42</h6> */}
          </div>
        </div>
      </div>
      {/* faq */}
      <div className="mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2> */}
        {faqs.map((faq) => (
          <div key={faq.id} className="mb-4">
            <button
              className={`w-full text-left p-4 rounded-full flex justify-between items-center focus:outline-none transition-colors duration-300 ${
                openFAQ === faq.id
                  ? "bg-gradient-to-r from-textBlue to-ultragreen text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => toggleFAQ(faq.id)}
            >
              <span className="text-lg">{faq.question}</span>
              <FontAwesomeIcon
                icon={openFAQ === faq.id ? faChevronDown : faChevronRight}
              />
            </button>
            {openFAQ === faq.id && (
              <div className="p-4 bg-gray-100 rounded-lg">
                {faq.answer.type === "iconText" && (
                  <div className="space-y-4 flex flex-wrap">
                    {faq.answer.iconContent.map((content, index) => (
                      <div
                        key={index}
                        className="flex sm:flex-wrap items-center w-full lg:w-1/4  p-3 font-semibold"
                      >
                        {/* <img src={content.icon} alt="Icon" className="h-6 w-6 mr-2" />
											  <span>{content.text}</span> */}
                        <div className="flex items-center">
                          <img
                            src={content.image}
                            alt="Image"
                            className="h-15 w-15 mx-2"
                          />
                          <span>{content.additionalText}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {faq.answer.type === "list" && (
                  <ul className="list-disc list-inside">
                    {faq.answer.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
                {faq.answer.type === "images" && (
                  <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {faq.answer.images.map((image, index) => (
                      <div key={index} className="text-center">
                        <img
                          src={image}
                          alt={`Image ${index + 1}`}
                          className=" mx-auto"
                        />
                        <span className="block mt-2">
                          {faq.answer.imagescontent[index]}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                {faq.answer.type === "words" && (
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 ">
                    {faq.answer.words.map((word, index) => (
                      <li key={index}>{word}</li>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* product carousel */}
      {/* <Carousel /> */}
      {/* client tested carousel	 */}
      <CarouselComponent />
    </div>
  );
}

export default Virushield;
