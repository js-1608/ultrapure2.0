import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import banner from "../assests/about_banner.png";
import banner2 from '../assests/Group 193.png';
import vision from "../assests/vision.png";
import mission from "../assests/mission.png";
import about1 from "../assests/about_detail (1).png";
import about2 from "../assests/about_detail (2).png";
import about3 from "../assests/about_detail (3).png";
import Newsletter from "../components/Newsletter";
import Banner from "../components/Banner";
import Banner2 from "../components/Banner2";
const About = () => {
	const [openFAQ, setOpenFAQ] = useState(null);
	const toggleFAQ = (id) => {
		setOpenFAQ(openFAQ === id ? null : id);
	};
	const faqs = [
		{ id: 1, question: "Company Overview", answer: "Company overview	Company overview Founded in 1992, Ultrapure Envirocare Pvt. Ltd. has become a trusted leader in air purification solutions. Committed to improving indoor air quality, our advanced technology and tailored approach ensure you experience the cleanest air possible. Headquartered in Mumbai, we have a strong footprint across India with offices in Delhi, Chennai, Bengaluru, Ahmedabad, and Kolkata. Stay connected with us to discover how we can help you create a healthier environment. \n Stay connected with us to discover how we can help you create a healthier environment." },
		{ id: 2, question: "Our Team", answer: "At Ultrapure, our success is powered by our passionate and innovative team. Our in-house research and development experts are constantly working to deliver cutting-edge air purification technology. Get to know the specialists dedicated to ensuring you breathe the cleanest air possible. " },
		{ id: 3, question: "Global presence", answer: "Ultrapure is not only a leader in India but also making a global impact. Our top-tier air purification solutions are trusted around the world, ensuring cleaner air for all. Explore our international reach and see how we’re contributing to a healthier planet." },
		{ id: 4, question: "Sustainable Initiative", answer: "At Ultrapure, sustainability is central to our mission. We are dedicated to developing eco-friendly air purification solutions that safeguard both your health and the environment. Our decarbonization efforts are aimed at minimizing carbon emissions across our manufacturing processes and product lifecycle. \n \n Discover our sustainable practices and how we’re helping to create a greener planet." },
		{id :5, question:"Customer-Centric Approach " , answer:"At Ultrapure, excellence is at the core of everything we do. Whether it’s product design, manufacturing, or customer service, we prioritize our customers' needs and satisfaction above all else."}
		// Add more FAQs as needed
	];
	return (
		<div className="overflow-x-hidden">
			<Banner
				src={banner}
				title="About Us"
				text="Welcome to Ultrapure, your trusted partner in cutting-edge air purification solutions, committed to enhancing indoor air quality for a healthier world."
				updated=""
				buttonUrl=""
				buttonText=""
			/>
			<Banner2
				src={banner2}
				title="About Us"
				text="Welcome to Ultrapure, your trusted partner in cutting-edge air purification solutions, committed to enhancing indoor air quality for a healthier world."
				updated=""
				buttonUrl=""
				buttonText=""
			/>

			<div className="container mx-auto p-4">
				<div className="flex flex-col md:flex-row">
					<div className="w-fit md:w-1/2 p-4  bg-gray-200 header_container m-5">
						<div className="  p-4 m-auto ">
							<img src={mission} alt="Email Logo" className="  m-auto " />

							<div className="p-5">
								<h5 className="font-bold text-center text-3xl lg:text-5xl mb-2">
									Mission
								</h5>
								<div classname="w-full">
									<p className=" text-md text-justify w-full lg:text-center lg:w-2/3 m-auto">
										Our mission is to revolutionize indoor air quality through eco-friendly and effective air purification solutions, thoughtfully designed to meet the unique needs of our clients in residential, commercial, and industrial sectors. We are dedicated to delivering products that not only enhance health and well-being but also support a sustainable future.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="w-fit md:w-1/2 p-4  bg-gray-200  header_container m-5 ">
						<div className="  p-4 m-auto ">
							<img src={vision} alt="Email Logo" className="  m-auto" />

							<div className="p-5">
								<h5 className="font-bold text-center text-3xl lg:text-5xl mb-2">
									Vision
								</h5>
								<div classname="w-full">
									<p className=" text-md text-justify w-full lg:text-center lg:w-2/3 m-auto">
									Our vision is to become the leading provider of air purification solutions, setting new benchmarks of excellence in the industry. We strive to innovate and expand our product range, with a constant commitment to customer satisfaction and environmental stewardship.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div class=" aboutbg  bg-cover bg-center">
				<div className=" p-6">
					{/* bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 */}
					<div className="w-full lg:max-w-5xl mx-auto bg-white p-2 lg:p-8 ">
						{faqs.map(faq => (
							<div key={faq.id} className="mb-4">
								<button
									className={`w-full text-left p-5 rounded-full text-2xl font-bold flex justify-between items-center focus:outline-none transition-colors duration-300 ${openFAQ === faq.id ? 'bg-gradient-to-r from-textBlue  to-ultragreen text-white' : 'bg-gray-200 text-black'}`}
									onClick={() => toggleFAQ(faq.id)}
								>
									<span className="text-lg">{faq.question}</span>
									<FontAwesomeIcon icon={openFAQ === faq.id ? faChevronDown : faChevronRight} />
								</button>
								{openFAQ === faq.id && (
									<div className=" p-4 bg-gray-100 rounded-lg">
										{faq.answer}
									</div>
								)}
							</div>
						))}
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

			<div className="p-5 m-2">
				<div className="container mx-auto ">
					<div className="flex flex-col md:flex-row">
						<div className="w-full md:w-3/5   ">
							<img
								src={about1}
								alt="Email Logo"
								className="lg:w-4/5 sm:w-full h-full  m-auto p-2"
							/>
						</div>
						<div className="m-auto lg:w-3/5 sm:w-full text-justify">
							<div className="lg:w-4/5 m-auto w-full">
								<h5 className="sm:text-3xl md:text-4xl lg:text-5xl  font-bold display_hide mb-5">
									In-House Manufacturing
								</h5>
								<div className=" m-auto p-5">
									<h6 className="text-2xl font-bold mb-2">
										Precision Engineering
									</h6>
									<p>
										Our skilled team of engineers and technicians meticulously
										craft each air purification system with precision and care,
										ensuring the highest quality standards
									</p>
								</div>
								<div className=" m-auto p-5">
									<h6 className="text-2xl font-bold mb-2">Quality Assurance</h6>
									<p>
										With our in-house manufacturing facilities, we maintain
										control over the entire production process, from raw
										materials to finished products, to deliver reliable and
										efficient solutions to our customers.
									</p>{" "}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container mx-auto ">
					<div className="flex flex-col md:flex-row">
						<div className="m-auto lg:w-3/5 sm:w-full text-justify ">
							<div className="lg:w-4/5 sm:w-full m-auto">
								<h5 className="sm:text-3xl md:text-4xl lg:text-5xl  font-bold display_hide mb-5">
									Research & Development
								</h5>
								<div className=" m-auto p-5">
									<h6 className="text-2xl font-bold mb-2">
										Pioneering Innovation
									</h6>
									<p>
										Our dedicated Research and Development (R&D) team works
										tirelessly to push the boundaries of air purification
										technology, seeking new and improved solutions to combat
										indoor air pollution.
									</p>{" "}
								</div>
								<div className=" m-auto p-5">
									<h6 className="text-2xl font-bold mb-2">
										Continuous Improvement
									</h6>
									<p>
										Through rigorous testing, experimentation, and collaboration
										with industry experts, we stay at the forefront of
										advancements in air quality management, driving innovation
										and progress.
									</p>
								</div>
							</div>
						</div>
						<div className="w-full md:w-3/5  display_hide p-0">
							<img
								src={about2}
								alt="Email Logo"
								className="lg:w-4/5 sm:w-full h-full  m-auto "
							/>
						</div>
					</div>
				</div>

				<div className="container mx-auto ">
					<div className="flex flex-col md:flex-row">
						<div className="w-full md:w-3/5   ">
							<img
								src={about3}
								alt="Email Logo"
								className="lg:w-4/5 sm:w-full h-full  m-auto  p-2"
							/>
						</div>
						<div className="m-auto lg:w-3/5 sm:w-full text-justify">
							<div className="lg:w-4/5 m-auto sm:w-full">
								<h5 className="sm:text-3xl md:text-4xl lg:text-5xl  font-bold display_hide mb-5">
									Our Commitment
								</h5>
								<div className=" m-auto p-5">
									<h6 className="text-2xl font-bold mb-2">
										Customer-Centric Approach
									</h6>
									<p>
										At Ultrapure, we are committed to excellence in everything
										we do. From product design and manufacturing to customer
										service and support, we prioritize the needs and
										satisfaction of our customers.
									</p>
								</div>
								<div className=" m-auto p-5">
									<h6 className="text-2xl font-bold mb-2">Building Trust</h6>
									<p>
										We believe in building long-lasting relationships with our
										customers and partners, based on trust, transparency, and
										mutual respect. Your satisfaction is our top priority, and
										we are here to support you every step of the way.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Newsletter />
		</div>
	);
};

export default About;
