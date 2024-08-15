
import React, { useState } from 'react';
import ProductDisplay from '../../components/ProductDisplay';
// import Carousel from '../components/Carousel';
import Carousel from '../../components/Carousel.js'
import CarouselComponent from '../../components/CarouselComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import tech1 from "../../assests/technology (1).png";
import tech2 from "../../assests/technology (2).png";
import tech3 from "../../assests/plasmOX.png";
// import aop1 from 'product/aop.png'
// import FAQSection from '../components/FAQSection';
function Corrosion() {
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
						additionalText: "Dampers are provided for pressurization (if required)"
					},
					{
						// icon: "../product/aop/Group 122.png",
						// text: "Our shipping policy is...",
						image: "../product/CS/Group 165.png",
						additionalText: "Electronic fan’s are used for the High Energy Efficiency."
					},
					{
						// icon: "../product/aop/Group 124.png",
						// text: "Our warranty policy is...",
						image: "../product/CS/Group 165.png",
						additionalText: "Dust filters are provided for  the Trapping of Dust Particles"
					},
					{
						// icon: "../product/aop/Group 125.png",
						// text: "Our support policy is...",
						image: "../product/CS/Group 165.png",
						additionalText: "Controllers is provided which gives same machine to run from 20% to 120%"
					},
                    {
						// icon: "../product/aop/Group 125.png",
						// text: "Our support policy is...",
						image: "../product/CS/Group 165.png",
						additionalText: "Painted 1.4G single skin with insulation inside"
					},
                    {
						// icon: "../product/aop/Group 125.png",
						// text: "Our support policy is...",
						image: "../product/CS/Group 165.png",
						additionalText: "Grid Matrix filters are used for low static pressure"
					},
                 
				]
			}
		},
		{
			id: 2,
			question: "Benefits",
			answer: {
				type: "list",
				items: ["To maintain data centers equipment reliability & elimination of corrosive contaminants." ,
"This Fresh Air Unit/Recirculation tackle the problems of gaseous contamination and to safeguard electronic media. ",
"Air scrubbing equipment that specifically remove the H2S and SO2 in the indoor air and bring the severity levels to G1 (mild) as per ISA Standards",
"Designed for removing toxic, corrosive and odorous gases, (acid gases, aldehydes, amines).",
"Chemical Filters use the adsorption and the Chemisorption process to Treat the Gaseous Contamination both Organic / Inorganic compound ."]
			}
		},
		{
			id: 3,
			question: "Protection From",
			answer: {
				type: "images",
				images: ["../product/aop/Group 126.png", "../product/aop/Group 127.png", "../product/aop/Group 128.png", "../product/aop/Group 129.png", "../product/aop/Group 130.png", "../product/aop/Group 131.png"],
				imagescontent: ["Viruses", "Bacteria", "Formaldehyde", "VOC’s", "Gases & Odor", "PM2.5 & PM10"]

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
		headingText: "FOR CORROSION CONTROL",
		title: "Data Centre Electronic Corrosion Prevention Unit",

		downloadFile: "https://ultrapureindia.in/pdf/Data%20Centre%20Catalog.pdf",
		mainImage: 'product/ccu/Group 179.png',
		relativeImages: [
			"./Product/aop.png",
			"./Product/aop.png",
			"./Product/aop.png",
			"./Product/aop.png",
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
					The Data Centre Electric Corrosion Prevention Unit by ULTRAPURE® is engineered to maintain the reliability of data center equipment by eliminating corrosive contaminants. This advanced Fresh Air Unit/Recirculation system tackles gaseous contamination, safeguarding electronic media.					</p>
				</div>
				<div className="w-full md:w-1/2 flex justify-between items-center">
					<div className="w-1/2">
						<img src={tech1} alt="plasma" className=" h-auto rounded-lg" />
						<h6 className="font-bold text-sm">nanoX® Technology</h6>
					</div>

					<div className="w-1/2">
						<img src={tech3} alt="plasma" className=" h-auto rounded-lg" />
						<h6 className="font-bold w-full text-sm">plasmOX® Technology</h6>
					</div>
				</div>
			</div>
			{/* faq */}
			<div className="mx-auto bg-white p-8 rounded-lg shadow-lg">
				{faqs.map((faq) => (
					<div key={faq.id} className="mb-4">
						<button
							className={`w-full text-left p-4 rounded-full flex justify-between items-center focus:outline-none transition-colors duration-300 ${openFAQ === faq.id
								? "bg-gradient-to-r from-textBlue to-ultragreen text-white"
								: "bg-gray-200 text-black"
								}`}
							onClick={() => toggleFAQ(faq.id)}
						>
							<span className="text-lg font-bold">{faq.question}</span>
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
												<img src={content.image} alt="product" className="h-15 w-15 mx-2" />
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
									<div className="gap-2 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5">
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
			<Carousel />
			{/* client tested carousel	 */}
			<CarouselComponent />
		</div>
	);
}

export default Corrosion;
