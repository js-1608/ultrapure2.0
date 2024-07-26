
import React, { useState } from 'react';
import ProductDisplay from '../../components/ProductDisplay';
// import Carousel from '../components/Carousel';
import Carousel from '../../components/Carousel.js'
import CarouselComponent from '../../components/CarouselComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import aop1 from 'product/aop.png'
// import FAQSection from '../components/FAQSection';
function Virushield() {
	const [openFAQ, setOpenFAQ] = useState(null);

	const faqs = [
		{ id: 1, question: "Features", answer: "Our return policy is..." },
		{ id: 2, question: "Protection From", answer: "You can track your order by..." },
		{ id: 3, question: "Benefits", answer: "You can track your order by..." },
		{ id: 4, question: "Application Area", answer: "Yes, you can purchase items in bulk by..." },
		// Add more FAQs as needed
	];


	const product = {
		headingText: "HVAC Duct Air Purification",
		title: "Advanced Oxidation Plasma (AOP) Cell",
		downloadFile: "./Product/aop/brochure.pdf",
		mainImage: 'product/aop.png',
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

			{/* faq */}
			<div className=" mx-auto bg-white p-8 rounded-lg shadow-lg">
				<h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
				{faqs.map(faq => (
					<div key={faq.id} className="mb-4">
						<button
							className={`w-full text-left p-4 rounded-full flex justify-between items-center focus:outline-none transition-colors duration-300 ${openFAQ === faq.id ? 'bg-gradient-to-r from-textBlue  to-ultragreen text-white' : 'bg-gray-200 text-black'}`}
							onClick={() => toggleFAQ(faq.id)}
						>
							<span className="text-lg">{faq.question}</span>
							<FontAwesomeIcon icon={openFAQ === faq.id ? faChevronDown : faChevronRight} />
						</button>
						{openFAQ === faq.id && (
							<div className=" p-4 bg-gray-100 rounded-lg">
								{faq.answer}
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

export default Virushield;
