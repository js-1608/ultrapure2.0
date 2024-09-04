import React from 'react';
  import Banner from '../components/Banner';
  import banner from '../assests/contactBanner.png';
  import banner2 from '../assests/Group 196.png';
import SearchBar2 from '../components/SearchProdut2';
import ImageGrid from '../components/ImageGrid';
import Banner2 from '../components/Banner2';
  const Product = () =>  {
	 const  data = [
		{ id: 1, name: 'Advanced Oxidation Plasma (AOP) Cell (for AHU)', description: 'Description of Product 1', path: '/aop' },
		{ id: 2, name: 'odorNOX Unit', description: 'Description of Product 1', path: '/OdorNOX' },
		{ id: 3, name: 'Virushield Air Purifier', description: 'Description of Product 1', path: '/vap' },
		{ id: 4, name: 'Corrosion Control Unit', description: 'Description of Product 1', path: '/ccu' },
		{ id: 5, name: 'germiNOX Air Purifier', description: 'Description of Product 1', path: '/gap' },
		{ id: 6, name: 'Falcon S Air Purifier', description: 'Description of Product 1', path: '/fsap' },
		{ id: 7, name: 'Falcon C Air Purifier', description: 'Description of Product 1', path: '/fcap' },
		{ id: 8, name: 'CBR Filter', description: 'Description of Product 1', path: '/cf' },
		{ id: 9, name: 'ESP Filter', description: 'Description of Product 1', path: '/ef' },
		{ id: 10, name: 'ultraSORB Chemical Media', description: 'Description of Product 1', path: '/ucm' },
		{ id: 11, name: 'Ceiling Suspended Air Purifier', description: 'Description of Product 1', path: '/csap' },

		
	  ];
	
const images = [
	{ src: '/products/Group 87.png', alt: 'Image 1', link: '/aop' },
	{ src: '/products/Group 88.png', alt: 'Image 2', link: '/OdorNOX' },
	{ src: '/products/Group 89.png', alt: 'Image 3', link: '/vap' },
	{ src: '/products/Group 112.png', alt: 'Image 4', link: '/ccu' },
	{ src: '/products/Group 90.png', alt: 'Image 5', link: '/gap' },
	{ src: '/products/Group 92.png', alt: 'Image 6', link: '/cf' },
	{ src: '/products/Group 91.png', alt: 'Image 7', link: '/fcap' },
	{ src: '/products/Group 94.png', alt: 'Image 8', link: '/ucm' },
	{ src: '/products/Group 93.png', alt: 'Image 9', link: '/ef' },
	{ src: '/products/Group 113.png', alt: 'Image 9', link: '/fsap' },
	{ src: '/products/Group 95.png', alt: 'Image 9', link: '/csap' },

  ];
  
	return (
	  <div className="overflow-x-hidden">
		 <Banner
        src={banner}
        title="Our Air Purification Range"
        text="Fill up the form and our Team will get back to you within 24 hours "
        updated=""
        buttonUrl=""
        buttonText=""
      />
	   <Banner2
        src={banner2}
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
  