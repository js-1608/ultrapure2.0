import React from 'react';
  import Banner from '../components/Banner';
  import banner from '../assests/contactBanner.png'
import SearchBar2 from '../components/SearchProdut2';
import ImageGrid from '../components/ImageGrid';
  const Product = () =>  {
	 const  data = [
		{ id: 1, name: 'Advanced Oxidation Plasma (AOP) Cell (for AHU)', description: 'Description of Product 1', path: '/aop' },
		{ id: 2, name: 'odorNOX Unit', description: 'Description of Product 1', path: '/OdorNOX' },
		{ id: 3, name: 'Virushield Air Purifier', description: 'Description of Product 1', path: '/vap' },
		{ id: 4, name: 'Corrosion Control Unit', description: 'Description of Product 1', path: '/product1' },
		{ id: 5, name: 'germiNOX Air Purifier', description: 'Description of Product 1', path: '/product1' },
		{ id: 6, name: 'Falcon S Air Purifier', description: 'Description of Product 1', path: '/product1' },
		{ id: 7, name: 'Falcon C Air Purifier', description: 'Description of Product 1', path: '/product1' },
		{ id: 8, name: 'CBR Filter', description: 'Description of Product 1', path: '/product1' },
		{ id: 9, name: 'ESP Filter', description: 'Description of Product 1', path: '/product1' },
		{ id: 10, name: 'ultraSORB Chemical Media', description: 'Description of Product 1', path: '/product1' },
		{ id: 11, name: 'Ceiling Suspended Air Purifier', description: 'Description of Product 1', path: '/product1' },

		
	  ];
	
const images = [
	{ src: '/products/Group 87.png', alt: 'Image 1', link: '/aop' },
	{ src: '/products/Group 88.png', alt: 'Image 2', link: '/OdorNOX' },
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
        <Search	Bar2 data={data} />

				<div className="flex items-center justify-center ">
			<ImageGrid images={images} />
			</div>
		</div>
	);
  }
  
  export default Product;
  