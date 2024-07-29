import React from 'react';

const ProductList = ({ faqs }) => {
  return (
    <div className="flex flex-col">
      <h6 className='text-xl font-bold'>Explore Industries</h6>
      <hr className='text-black mt-2 border-black'></hr>
      {faqs.map(faq => (
        <div key={faq.id} className="mb-4 p-4 hover:shadow-lg">
          <h2 className='text-lg font-semibold'>{faq.heading}</h2>
          {faq.content.map((item, index) => (
            <div key={index} className="ml-4">
              <a href={item.href}  rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                {item.heading}
              </a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
