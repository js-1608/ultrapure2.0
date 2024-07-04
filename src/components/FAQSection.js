import React, { useState } from 'react';

const FAQSection = ({ faqs }) => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleToggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div>
      {faqs.map(faq => (
        <div key={faq.id} className="mb-4 p-4 border rounded-lg transition-shadow duration-300 hover:shadow-lg ">
          <h3
            onClick={() => handleToggleFAQ(faq.id)}
            className="text-xl cursor-pointer font-bold mt-2 mb-2"
          >
            {faq.heading}
          </h3>
          {/* <span aria-hidden="true" className='text-end'>&rarr;</span> */}

          {openFAQ === faq.id && (

            <div className="mt-2 flex flex-wrap place-content-center ">

              {faq.content.map((item, index) => (
                <div key={index} className=" m-5 ">

                  <img src={item.imageUrl} alt={item.heading} className="w-full h-auto" />
                  <h4 className=" bg-gray-100 mt-0">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline block p-2 text-lg font-semibold"
                    >
                      {item.heading}
                      {/* <span aria-hidden="true" className='text-end'>&rarr;</span> */}
                    </a> </h4>
                  <hr className='border-1 border-grey shadow-xl'></hr>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
