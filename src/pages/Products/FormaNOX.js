
import React, { useState } from 'react';
import ProductDisplay from '../../components/ProductDisplay';
// import Carousel from '../components/Carousel';
import Carousel from '../../components/Carousel.js'
import CarouselComponent from '../../components/CarouselComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import tech1 from "../../assests/technology (1).png";
// import tech2 from "../../assests/technology (2).png";
import tech3 from "../../assests/plasmOX.png";
// import aop1 from 'product/aop.png'
// import FAQSection from '../components/FAQSection';
function FormaNOX() {
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
						image: "../product/CS/Group 165.png",
						additionalText: "Easy to installed & Retro fit system."
					},
					{
						// icon: "../product/aop/Group 122.png",
						// text: "Our shipping policy is...",
						image: "../product/CS/Group 165.png",
						additionalText: "3 stage filtration system - self charge filters, Grid matrix filter & Air Contamination Chamber"
					},
					{
						// icon: "../product/aop/Group 124.png",
						// text: "Our warranty policy is...",
						image: "../product/CS/Group 165.png",
						additionalText: "Ozone Free air purification system"
					},
                    {
						// icon: "../product/aop/Group 124.png",
						// text: "Our warranty policy is...",
						image: "../product/CS/Group 165.png",
						additionalText: "Unit constructed using powder coated Single-skinned acoustic inner sheet with minimum 25 mm thick Nitrile insulation."
					},
                    {
						// icon: "../product/aop/Group 124.png",
						// text: "Our warranty policy is...",
						image: "../product/CS/Group 165.png",
						additionalText: "Air contamination chamber powered by nanoX® & plasmOX® Technology"
					},
					// {
					// 	// icon: "../product/aop/Group 125.png",
					// 	// text: "Our support policy is...",
					// 	image: "../product/aop/Group 125.png",
					// 	additionalText: "Additional support information..."
					// }
				]
			}
		},
		{
			id: 2,
			question: "Benefits",
			answer: {
				type: "list",
				items: ["Effectively removes toxic gases to ensure a safe and healthy environment.",
                    "Eliminates unpleasant odors, providing a fresh and clean atmosphere.",
                   "Utilizes advanced 3-stage filtration for comprehensive air purification.",
                   "Incorporates innovative nanoX® and plasmOX® technologies for superior air quality.",
                   "Operates without producing harmful ozone, making it safe for continuous use.",
                    "Easy to install and retrofit, saving time and reducing costs.",
                   "Built with durable materials for long-lasting performance and noise reduction.",
                    "Neutralizes harmful chemicals through chemisorption, enhancing safety.",
                   "Designed for energy efficiency, reducing operational costs.",
                    "Requires minimal maintenance due to robust design and quality materials."]
			}
		},
		{
			id: 3,
			question: "Protection From",
			answer: {
				type: "images",
				images: ["../product/aop/Group 126.png", "../product/aop/Group 127.png", "../product/aop/Group 128.png", "../product/aop/Group 129.png", "../product/aop/Group 130.png", "../product/aop/Group 131.png"],
				imagescontent: ["Pathogenic Food Odor","Food Odor", "Washroom Odor", "VOCS & Formaldehyde", "Hospital Odor", "Particulate Matter", ]

			}
		},
		{
			id: 4,
			question: "Application Area",
			answer: {
				type: "words",
				words: [
					"Commercial Buildings",
                   " Industrial Facilities",
                    "Laboratories",
                    "Healthcare Settings",
                     "Research Facilities",
                   "Manufacturing Plants",
                  "Educational Institutions",
                  "Public Transportation Hubs",
                 " Data Centers",
                    "Food and Beverage Processing Units"
				]
			}
		}
	];

	const product = {
		headingText: "Formaldehyde Gas Scrubber",
		title: "formaNOX",
		downloadFile: "https://ultrapureindia.in/pdf/FormaldehydeNOX.pdf",
		mainImage: 'product/Group 258.png',
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
              <h1 className="lg:text-2xl  text-xl font-bold mt-2">Product Info</h1>

				  <p className="text-gray-700 p-8 text-justify">
                  ULTRAPURE® Unit provides a fresh, clean and odour-free environment for human beings.
                  However, formaNOX is ideal for removing toxic gases and eliminating odours from the air. It purifies the air inside the mortuary and autopsy room through the process of oxidation and chemisorption.				  </p>
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
		  {/* faq */}
		  <div className="mx-auto bg-white p-8 rounded-lg shadow-lg">
			  {/* <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2> */}
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
										  <div key={index} className="flex sm:flex-wrap items-center w-full lg:w-1/3  p-3 font-semibold">
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
									  <img src={image} alt={`Image ${index + 1}`} className=" mx-auto" />
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

export default FormaNOX;
