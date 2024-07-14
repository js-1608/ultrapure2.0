import React from 'react';
import banner from "../assests/about_banner.png";
import vision from "../assests/vision.png";
import mission from "../assests/mission.png";
import about1 from "../assests/about_detail (1).png";
import about2 from "../assests/about_detail (2).png";
import about3 from "../assests/about_detail (3).png";
import Newsletter from '../components/Newsletter';
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
								<h5 className='font-bold text-center text-3xl mb-2'>Vission</h5>
								<p className='text-justify text-sm'>Our vision is to become the leading provider of air purification technology, setting new standards of excellence in the industry. We aim to continuously innovate and expand our product offerings, while maintaining a steadfast focus on customer satisfaction and environmental responsibility.
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

			<div className='p-5 m-2'>
				<div className="container mx-auto ">
					<div className="flex flex-col md:flex-row">
						<div className="w-full md:w-3/5   ">
							<img src={about1} alt="Email Logo" className="lg:w-4/5 sm:w-full h-full  m-auto " />

						</div>
						<div className="m-auto lg:w-3/5 sm:w-full text-justify">
							<div className='lg:w-4/5 m-auto sm:w-full'>
								<h5 className='text-3xl font-bold display_hide '>In-House Manufacturing</h5>
								<div className=" m-auto p-5">
									<h6 className='text-xl font-bold'>Precision Engineering</h6>
									<p>Our skilled team of engineers and technicians meticulously craft each air purification system with precision and care, ensuring the highest quality standards</p>
								</div>
								<div className=" m-auto p-5">
									<h6 className='text-xl font-bold'>Quality Assurance</h6>
									<p>With our in-house manufacturing facilities, we maintain control over the entire production process, from raw materials to finished products, to deliver reliable and efficient solutions to our customers.</p>						</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container mx-auto display_hide">
					<div className="flex flex-col md:flex-row">

						<div className="m-auto lg:w-3/5 sm:w-full text-justify ">
							<div className='lg:w-4/5 sm:w-full m-auto'>
								<h5 className='text-3xl font-bold display_hide '>Research & Development</h5>
								<div className=" m-auto p-5">
									<h6 className='text-xl font-bold'>Pioneering Innovation</h6>
									<p>Our dedicated Research and Development (R&D) team works tirelessly to push the boundaries of air purification technology, seeking new and improved solutions to combat indoor air pollution.</p>								</div>
								<div className=" m-auto p-5">
									<h6 className='text-xl font-bold'>Continuous Improvement</h6>
									<p>Through rigorous testing, experimentation, and collaboration with industry experts, we stay at the forefront of advancements in air quality management, driving innovation and progress.</p>						</div>
							</div>
						</div>
						<div className="w-full md:w-3/5  ">
							<img src={about2} alt="Email Logo" className="lg:w-4/5 sm:w-full h-full  m-auto " />

						</div>
					</div>
				</div>

				<div className="container mx-auto p-4">
					<div className="flex flex-col md:flex-row">
						<div className="w-full md:w-3/5 p-4  ">
							<img src={about3} alt="Email Logo" className="lg:w-4/5 sm:w-full h-full  m-auto " />

						</div>
						<div className="m-auto lg:w-3/5 sm:w-full text-justify">
							<div className="lg:w-4/5 m-auto sm:w-full">
								<h5 className='text-3xl font-bold display_hide '>Our Commitment</h5>
								<div className=" m-auto p-5">
									<h6 className='text-xl font-bold'>Customer-Centric Approach</h6>
									<p>At Ultrapure, we are committed to excellence in everything we do. From product design and manufacturing to customer service and support, we prioritize the needs and satisfaction of our customers.</p>
								</div>
								<div className=" m-auto p-5">
									<h6 className='text-xl font-bold'>Building Trust</h6>
									<p>We believe in building long-lasting relationships with our customers and partners, based on trust, transparency, and mutual respect. Your satisfaction is our top priority, and we are here to support you every step of the way.</p>	
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>


			<Newsletter />
		</div>
	);
}

export default About;
