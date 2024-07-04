import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-col">
      {products.map(product => (
        <a key={product.id} href={product.href} 
        target="_blank" rel="noopener noreferrer" 
        className="mb-2 p-4 border rounded-lg transition-shadow duration-300 hover:shadow-lg">
          {product.name}
        </a>
      ))}
    </div>
  );
};

export default ProductList;
