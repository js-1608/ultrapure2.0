
  
  import React, { useState } from 'react';
  import ProductDisplay from '../../components/ProductDisplay.js';
  // import Carousel from '../components/Carousel';
  import Carousel from '../../components/Carousel.js'
  import CarouselComponent from '../../components/CarouselComponent.js';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
  // import aop1 from 'product/aop.png'
  // import FAQSection from '../components/FAQSection';
  import tech1 from "../../assests/technology (1).png";
  import tech2 from "../../assests/technology (2).png";
  import tech3 from "../../assests/plasmOX.png";
  function UltraSORB() {
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
						image: "../product/UltraSORB/Group 151.png",
						additionalText: "No Bypass"
					},
					{
						// icon: "../product/aop/Group 122.png",
						// text: "Our shipping policy is...",
						image: "../product/UltraSORB/Group 154.png",
						additionalText: "Low Pressure Drop"
					},
					{
						// icon: "../product/aop/Group 124.png",
						// text: "Our warranty policy is...",
						image: "../product/UltraSORB/Group 155.png",
						additionalText: "Turbulent Flow"
					},
					{
						// icon: "../product/aop/Group 125.png",
						// text: "Our support policy is...",
						image: "../product/UltraSORB/Group 156.png",
						additionalText: "Full Optimization"
					},
					{
						// icon: "../product/aop/Group 125.png",
						// text: "Our support policy is...",
						image: "../product/UltraSORB/Group 152.png",
						additionalText: "Composite Structure"
					},
					{
						// icon: "../product/aop/Group 125.png",
						// text: "Our support policy is...",
						image: "../product/UltraSORB/Group 153.png",
						additionalText: "Lifem Testable"
					},
                 
				]
			}
		},
		{
			id: 2,
			question: "Benefits",
			answer: {
				type: "list",
				items: ["Designed for removing toxic, corrosive and odorous gases (acid gases, aldehydes, amines).",
                        "Chemical Filters use the adsorption and the Chemisorption process to Treat the Gaseous Contamination both Organic / Inorganic compound "]
			}
		},
		{
			id: 3,
			question: "Protection From",
			answer: {
				type: "images",
				images: ["../product/UltraSORB/H2s.png", "../product/UltraSORB/Asset 14.png", "../product/UltraSORB/Asset 13.png", "../product/UltraSORB/Asset 12.png", "../product/UltraSORB/Asset 11.png", "../product/ultraSORB/Asset 10.png"],
				imagescontent: ["Hydrogen Sulphie","Nitrogen Oxides ", "Sulphur Dioxide", "Ammonia ", "Formaldehyde", "Chlorine", ]

			}
		},
		{
			id: 4,
			question: "Application Area",
			answer: {
				type: "words",
				words: [
					"Government", "Airport", "Offices", "Residential", "University",
					"Hospitality", "Transportation", "Factories", "Residential", "Railways", 
				]
			}
		}
	];

  
  
      const product = {
          headingText: "For Gases Filtration",
          title: "ultraSORB MediaultraSORB Media",
          downloadFile: "./Product/aop/brochure.pdf",
          mainImage: 'product/ultrasorb.png',
          relativeImages: [
              "./Product/ultrasorb.png",
              "./Product/ultrasorb.png",
              "./Product/ultrasorb.png",
              "./Product/ultrasorb.png",
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
  
           
             
<div className="flex flex-col md:flex-row  p-4 md:p-8 rounded-lg">
				<div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-6 flex flex-col justify-center">
					<p className="text-gray-700 p-8 text-justify">
					UltraSORB is a highly efficient air purification solution designed by ULTRAPURE®. It excels in removing moisture, odors, and harmful gases from the air, ensuring a clean and healthy environment.					</p>
				</div>
				<div className="w-full md:w-1/2 flex justify-evenly items-center">
					<div className="w-1/2">
						<img src={tech2} alt="plasma" className=" h-auto rounded-lg" />
						{/* <h6 className="font-bold text-sm">nanoX® Technology</h6> */}
					</div>

					{/* <div className="w-1/2">
						<img src={tech3} alt="plasma" className=" h-auto rounded-lg" />
						<h6 className="font-bold w-full text-sm">plasmOX® Technology</h6>
					</div> */}
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
												<img src={content.image} alt="Image" className="h-15 w-15 mx-2" />
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
										<img src={image} alt={`Image ${index + 1}`} className="h-20 w-20 mx-auto" />
										<span className="block mt-2">{faq.answer.imagescontent[index]}</span>
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
  
  export default UltraSORB;
  