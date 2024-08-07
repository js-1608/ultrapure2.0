
  
  import React, { useState } from 'react';
  import ProductDisplay from '../../components/ProductDisplay.js';
  // import Carousel from '../components/Carousel';
  import Carousel from '../../components/Carousel.js'
  import CarouselComponent from '../../components/CarouselComponent.js';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
  // import aop1 from 'product/aop.png'
  // import FAQSection from '../components/FAQSection';
  import tech1 from "../../assests/iacs.png";
 

  function CBR() {
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
						image: "../product/cbr/Group 142.png ",
						additionalText: "Easily Instal.pngled In the existing HVAC system"
					},
					{
						// icon: "../product/aop/Group 122.png",
						// text: "Our shipping policy is...",
						image: "../product/cbr/Group 143.png",
						additionalText: "Very Low Pressure Drop & Enegry Consumption"
					},
					{
						// icon: "../product/aop/Group 124.png",
						// text: "Our warranty policy is...",
						image: "../product/cbr/Group 144.png",
						additionalText: "Flexible & Cost Eective Solution"
					},
					{
						// icon: "../product/aop/Group 125.png",
						// text: "Our support policy is...",
						image: "../product/cbr/Group 145.png",
						additionalText: "Eiciency of MERV-16 Filter"
					}
				]
			}
		},
		{
			id: 2,
			question: "Benefits ",
			answer: {
				type: "list",
				items: ["Comprehensive protection from Chemical, Biological & Radiological threat",
						"High filtration e­iciency for PM and gases contaminants.",
						"Remove >99.5% of PM0.3",
						"Active carbon layer adsorb gases & protects from toxic warfare gases.",
						"Very e­ective on viruses like Corona family virus.",
						"E­iciency of MERV 16 filter",
						"Very Low Pressure drop & Energy consumption"]
			}
		},
		{
			id: 3,
			question: "Protection From",
			answer: {
				type: "images",
				images: ["../product/cbr/Layer_1.png", "../product/cbr/Layer_1 (1).png", "../product/cbr/Layer_1 (2).png", "../product/cbr/Layer_1 (3).png", "../product/cbr/Layer 4.png", "../product/cbr/Layer_1 (4).png"],
				imagescontent: ["PM2.5, PM10,Dust & Pollens", "Spores & Dander", "VOCS & Odor", "SOx & NOx ", "Formaldehyde", "Viruses & Bacteria"]

			}
		},
		{
			id: 4,
			question: "Application Area",
			answer: {
				type: "words",
				words: [
					"Word1", "Word2", "Word3", "Word4", "Word5", "Word6",
					"Word7", "Word8", "Word9", "Word10", "Word11", "Word12"
				]
			}
		}
	];
  
      const product = {
          headingText: "DEFENCE AGAINST AIRBORNE",
          title: "Chemical BiologicalRadiological Filter (CBR)",
          downloadFile: "./pdf/Chemical Biological Radiological Filtration System.pdf",
          mainImage: 'product/CBR.png',
          relativeImages: [
              "product/CBR.png",
              "product/CBR.png",
              "product/CBR.png",
              "product/CBR.png",
          ],
      };
      const toggleFAQ = (id) => {
          setOpenFAQ(openFAQ === id ? null : id);
      };
  
      return (
          <div>
              <ProductDisplay
                  headingText={product.headingText}
                  title={product.title}
                  downloadFile={product.downloadFile}
                  mainImage={product.mainImage}
                  relativeImages={product.relativeImages}
              />
  
          
              {/* faq */}
              <div className="flex flex-col md:flex-row  p-4 md:p-8 rounded-lg">
				<div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-6 flex flex-col justify-center">
					<p className="text-gray-700 p-8 text-justify">
					Ultrapure's revolutionary Chemical Biological Radiological (CBR) air filtration technology combines an electrostatically charged filter with a particle charging section and a gas filter. This system efficiently destroys airborne viruses, bacteria, molds, VOCs, and microscopic particles, while offering massive dust holding capacity with extremely low pressure drop. Unlike standard filters, Ultrapure's CBR filtration provides high efficiency even for the smallest particle sizes, including tobacco smoke, bacteria, and viruses.</p>
					</div>
				<div className="w-full md:w-1/2 flex justify-between items-center">
					<div className="w-1/2">
						<img src={tech1} alt="plasma" className=" h-auto rounded-lg" />
					</div>

					<div className="w-1/2">
						
						<h6 className="font-bold  text-2xl w-1/2">Tested by IACS University Kolkata</h6>
					</div>
				</div>
			</div>
			{/* faq */}
			<div className="mx-auto bg-white p-8 rounded-lg shadow-lg">
				<h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
				{faqs.map((faq) => (
					<div key={faq.id} className="mb-4">
						<button
							className={`w-full text-left p-4 rounded-full flex justify-between items-center focus:outline-none transition-colors duration-300 ${openFAQ === faq.id
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
											<div key={index} className="flex sm:flex-wrap items-center w-full lg:w-1/4  p-3 font-semibold">
												{/* <img src={content.icon} alt="Icon" className="h-6 w-6 mr-2" />
												<span>{content.text}</span> */}
												<div className="flex items-center">
												<img src={content.image} alt="features" className="h-15 w-15 mx-2" />
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
										<img src={image} alt={`Image ${index + 1}`} className=" mx-auto" />
										<span className="block mt-2">{faq.answer.imagescontent[index]}</span>
										</div>
									))}
									</div>
								)}
								{faq.answer.type === "words" && (
									<div className="grid grid-cols-6 gap-2">
										{faq.answer.words.map((word, index) => (
											<span key={index}>{word}</span>
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
  
  export default CBR;
  