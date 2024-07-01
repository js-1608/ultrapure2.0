import React from 'react';
import banner from "../assests/about_banner.png";
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
				<div className="w-full md:w-1/2 p-4  ">
						{/* <img src="" alt="Email Logo" className="w-3/5 h-4/5  m-auto header_container" /> */}
						<div className="  p-4 m-auto header_container">
							<h5 className='font-bold'>Head Office</h5>
							3rd Floor, Ion House, Dr. E. Moses Road, Mahalaxmi, Mumbai-400011
						</div>

					</div>
					<div className="w-full md:w-1/2 p-4  ">
						{/* <img src="" alt="Email Logo" className="w-3/5 h-4/5  m-auto header_container" /> */}
						<div className="  p-4 m-auto header_container">
							<h5 className='font-bold'>Head Office</h5>
							3rd Floor, Ion House, Dr. E. Moses Road, Mahalaxmi, Mumbai-400011
						</div>

					</div>
				</div>
			</div>


			<div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row">
				<div className="w-full md:w-3/5 p-4  ">
                    <img src="" alt="Email Logo" className="w-3/5 h-4/5  m-auto border_left" />

                    </div>
                    <div className="w-full md:w-2/6 p-4 m-auto">
                    <h5 className='font-bold'>Head Office</h5>
                    3rd Floor, Ion House, Dr. E. Moses Road, Mahalaxmi, Mumbai-400011
                    </div>
                   
                </div>
            </div>

			<div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-2/6 p-4 m-auto">
                    <h5 className='font-bold'>Head Office</h5>
                    3rd Floor, Ion House, Dr. E. Moses Road, Mahalaxmi, Mumbai-400011
                    </div>
                    <div className="w-full md:w-3/5 p-4  ">
                    <img src="" alt="Email Logo" className="w-3/5 h-4/5  m-auto border_left" />

                    </div>
                </div>
            </div>

			<div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row">
				<div className="w-full md:w-3/5 p-4  ">
                    <img src="" alt="Email Logo" className="w-3/5 h-4/5  m-auto border_left" />

                    </div>
                    <div className="w-full md:w-2/6 p-4 m-auto">
                    <h5 className='font-bold'>Head Office</h5>
                    3rd Floor, Ion House, Dr. E. Moses Road, Mahalaxmi, Mumbai-400011
                    </div>
                   
                </div>
            </div>


		</div>
	);
}

export default About;
