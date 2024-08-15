import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import banner from '../assests/contactBanner.png';
import Banner2 from '../components/Banner2';
import notfoundimg from '../assests/oops.avif'
export default function NotFound() {
  return (
    <div>
         {/* <Banner
        src={banner}
        title="Page Not Found"
        text=""
        updated=""
        buttonUrl=""
        buttonText=""
      />
           <Banner2
        src={banner}
        title=""
        text="Page Not Found"
        updated=""
        buttonUrl=""
        buttonText=""
      /> */}
              <div className="text-center m-5">
              <img
          src={notfoundimg}
          alt="Card"
          className="w-1/3 h-1/3 object-cover opacity-100 text-center justify-center m-auto"
        />
       <h2 className=" font-bold text-5xl">404 -  <span className="text-textBlue">Page Not Found</span></h2>
       <h6 className="m-auto text-center text-xl  p-3">Our Sorry, the page you are looking for does not exist.</h6>
      <Link to="/" className="px-6 py-2 bg-gradient-to-r from-textBlue to-ultragreen text-white rounded-md hover:from-ultragreen hover:to-textBlue focus:outline-none ">Go back to Home</Link>
    </div>
    </div>
  );
}
