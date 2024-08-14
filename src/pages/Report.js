import React from "react";
import Banner from "../components/Banner";
import Banner2 from "../components/Banner2";
import banner from "../assests/contactBanner.png";
import banner2 from "../assests/Group 200.png";
import { Link } from "react-router-dom";
import { FaCloudArrowDown } from "react-icons/fa6";

const Report = () => {
  return (
    <div>
      <Banner
        src={banner}
        title="Explore Our Expertise"
        text=" "
        updated=""
        buttonUrl=""
        buttonText=""
      />
      <Banner2
        src={banner2}
        title="Explore Our Expertise"
        text=" "
        updated=""
        buttonUrl=""
        buttonText=""
      />

      <div className="items-center bg-ultragreen text-white p-3 lg:px-4 py-2 rounded flex  font-semibold text-md lg:text-xl text-end justify-end">
        <Link
          className="  font-semibold text-md lg:text-lg flex items-center "
          to="./pdf/FINAL UEPL REPORT (1).pdf"
          download
        >
          Download Brochure{" "}
          <span className="ml-2">
            <FaCloudArrowDown className="ml-2 w-5 h-5" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Report;
