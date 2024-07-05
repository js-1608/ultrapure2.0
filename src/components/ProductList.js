import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-col">
      <h6 className='text-xl font-bold'>Explore Industries</h6>
      <hr className='text-black mt-2 border-black' ></hr>
      {products.map(product => (
        <a key={product.id} href={product.href} 
        target="_blank" rel="noopener noreferrer" 
        className="mb-2 p-4  hover:shadow-lg">
          <h2 className='text-lg font-semibold'>{product.name}</h2>
              {product.list.map((item, index) => (
              <div key={index} className=" ">
                <a>{item}</a>
            </div>
          ))}

        </a>
      ))}
    </div>
  );
};

export default ProductList;
