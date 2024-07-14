import React from 'react';
  import Banner from '../components/Banner';
  import banner from '../assests/contactBanner.png'
import SearchBar2 from '../components/SearchProdut2';
import ImageGrid from '../components/ImageGrid';
  const Product = () =>  {
	 const  data = [
		{ id: 1, name: 'al', description: 'Description of Product 1', path: '/product1' },
		{ id: 2, name: 'Product 2', description: 'Description of Product 2', path: '/product2' },
		{ id: 3, name: 'Product 3', description: 'Description of Product 3', path: '/product3' },
		// Add more data as needed
	  ];
	
const images = [
	{ src: '/products/Group 87.png', alt: 'Image 1', link: '/product1' },
	{ src: '/products/Group 88.png', alt: 'Image 2', link: '/product2' },
	{ src: '/products/Group 89.png', alt: 'Image 3', link: '/product3' },
	{ src: '/products/Group 90.png', alt: 'Image 4', link: '/product4' },
	{ src: '/products/Group 91.png', alt: 'Image 5', link: '/product5' },
	{ src: '/products/Group 92.png', alt: 'Image 6', link: '/product6' },
	{ src: '/products/Group 93.png', alt: 'Image 7', link: '/product7' },
	{ src: '/products/Group 94.png', alt: 'Image 8', link: '/product8' },
	{ src: '/products/Group 95.png', alt: 'Image 9', link: '/product9' },
  ];
  
	return (
	  <div>
		 <Banner
        src={banner}
        title="Our Air Purification Range"
        text="Fill up the form and our Team will get back to you within 24 hours "
        updated=""
        buttonUrl=""
        buttonText=""
      />
        <SearchBar2 data={data} />

				<div className="flex items-center justify-center ">
			<ImageGrid images={images} />
			</div>
		</div>
	);
  }
  
  export default Product;
  