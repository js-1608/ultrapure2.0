import React from 'react';
import banner from "../assests/about_banner.png";
import vision from "../assests/vision.png";
import mission from "../assests/mission.png";
import about1 from "../assests/about_detail (1).png";
import about2 from "../assests/about_detail (2).png";
import about3 from "../assests/about_detail (3).png";

import Banner from '../components/Banner';
const About = () => {
	return (
		<div>
			<Banner
				src={banner}
				title="About Us"
				text="Welcome to Ultrapure Envirocare Pvt Ltd, a leading provider of innovative air purification solutions dedicated to enhancing indoor air quality worldwide."
				updated=""
				buttonUrl=""
				buttonText=""
			/>

			<div className="container mx-auto p-4">
				<div className="flex flex-col md:flex-row">
					<div className="w-fit md:w-1/2 p-4  bg-gray-200 header_container m-5">
						<div className="  p-4 m-auto ">
							<img src={mission} alt="Email Logo" className="  m-auto " />

							<div className='p-5'>
								<h5 className='font-bold text-center text-3xl mb-2'>Mission</h5>
								<p className='text-justify text-sm'>Our mission is to revolutionize indoor air quality by providing innovative and effective air purification solutions tailored to meet the diverse needs of our clients across residential, commercial, and industrial sectors. We are committed to delivering
									products that promote health, well-being, and sustainability.
								</p>
							</div>
						</div>
					</div>
					<div className="w-fit md:w-1/2 p-4  bg-gray-200  header_container m-5 ">
						<div className="  p-4 m-auto ">
							<img src={vision} alt="Email Logo" className="  m-auto" />

							<div className='p-5'>
								<h5 className='font-bold text-center text-3xl mb-2'>Mission</h5>
								<p className='text-justify text-sm'>Our mission is to revolutionize indoor air quality by providing innovative and effective air purification solutions tailored to meet the diverse needs of our clients across residential, commercial, and industrial sectors. We are committed to delivering
									products that promote health, well-being, and sustainability.
								</p>
							</div>
						</div>

					</div>
				</div>
			</div>

			{/* what's that section INCOMPLETE */}
			{/* <div>
			<div>Company Overview</div>
			<div>Our Team</div>
			<div>Global Presence</div>
			<div>Sustainability Initiatives</div>
		</div> */}


			<div className="container mx-auto p-4">
				<div className="flex flex-col md:flex-row">
					<div className="w-full md:w-3/5 p-4  ">
						<img src={about1} alt="Email Logo" className="w-2/3 h-full  m-auto " />

					</div>
					<div className="w-full md:w-1/3 ">
						<h5 className='font-bold'>Head Office</h5>
						3rd Floor, Ion House, Dr. E. Moses Road, Mahalaxmi, Mumbai-400011
					</div>

				</div>
			</div>





		</div>
	);
}

export default About;
