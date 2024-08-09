import React from "react";
import Banner from "../components/Banner";
import phone from "../assests/phone.png";
import mail from "../assests/mail.png";
import map1 from "../assests/map1.png";
import map2 from "../assests/map2.png";

import location from "../assests/location.png";

import contactBanner from "../assests/contactBanner.png";

import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Banner
        src={contactBanner}
        title="Get In Touch"
        text="Fill up the form and our Team will get back to you within 24 hours "
        updated=""
        buttonUrl=""
        buttonText=""
      />

      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/6 p-4 m-auto">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <div className="flex items-center mb-4">
              <img src={mail} alt="Email Logo" className="w-12 h-12 mr-2" />
              <div>
                <h6 className="font-bold">Email</h6>
                <span className="text-gray-700">info@ultrapureindia.in</span>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <img src={phone} alt="Email Logo" className="w-12 h-12 mr-2" />
              <div>
                <h6 className="font-bold">Phone</h6>
                <span className="text-gray-700">1800-1100-50 (Toll Free)</span>
              </div>
            </div>

            <div className="flex items-center">
              <img
                src={location}
                alt="Contact Logo"
                className="w-12 h-12 mr-2"
              />
              <div>
                <h6 className="font-bold">Address</h6>
                <span className="text-gray-700">
                  3rd Floor, Ion House, Dr. E. Moses Road, Mahalaxmi,
                  Mumbai-400011
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/5 p-4">
            <Form />
          </div>
        </div>
      </div>

      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 text-start lg:text-end  m-auto p-5 lg:p-0">
            <h5 className="font-bold text-xl lg:text-3xl ">Head Office</h5>
            <p className="text-md lg:text-xl">
              3rd Floor, Ion House, Dr. E. Moses Road, Mahalaxmi, Mumbai-400011
            </p>
          </div>
          <div className="w-full md:w-3/5 m-auto ">
            <img
              src={map1}
              alt="Email Logo"
              className="w-3/5 h-4/5  m-auto border_left"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row ">
          <div className="w-full md:w-2/5 text-start lg:text-end  m-auto">
            <h5 className="font-bold text-xl lg:text-3xl ">
              Registered Office
            </h5>
            <p className="text-md lg:text-xl">
              {" "}
              CB-344, 2nd Floor, Ring Road Naraina, New Delhi- 110028
            </p>
          </div>
          <div className="w-full md:w-3/5 m-auto ">
            <img
              src={map2}
              alt="Email Logo"
              className="w-3/5 h-4/5  m-auto border_left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
