
  import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Banner from '../components/Banner';
import banner from '../assests/contactBanner.png';
import banner2 from '../assests/Group 198.png';

import Newsletter from '../components/Newsletter';
import Banner2 from '../components/Banner2';
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    { id: 1, question: "What is your return policy?", answer: "Our return policy is..." },
    { id: 2, question: "How do I track my order?", answer: "You can track your order by..." },
    { id: 3, question: "Can I purchase items in bulk?", answer: "Yes, you can purchase items in bulk by..." },
    // Add more FAQs as needed
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <>
    <Banner
    src={banner}
    title="Frequently Asked Questions"
    text=""
    updated=""
    buttonUrl=""
    buttonText=""
  />
   <Banner2
    src={banner2}
    title="Frequently Asked Questions"
    text=""
    updated=""
    buttonUrl=""
    buttonText=""
  />

    <div className=" p-6">
        {/* bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 */}
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
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
    </div>
    <Newsletter/>
    </>
  );
};

export default FAQSection;
