import React from 'react';
import logo1 from '../assests/Our_Clientele/logo (1).png'
import logo2 from '../assests/Our_Clientele/logo (2).png'
import logo3 from '../assests/Our_Clientele/logo (3).png'
import logo4 from '../assests/Our_Clientele/logo (4).png'
import logo5 from '../assests/Our_Clientele/logo (5).png'
import logo6 from '../assests/Our_Clientele/logo (6).png'
import logo7 from '../assests/Our_Clientele/logo (7).png'
import logo8 from '../assests/Our_Clientele/logo (8).png'
import logo9 from '../assests/Our_Clientele/logo (9).png'
import logo10 from '../assests/Our_Clientele/logo (10).png'
import logo11 from '../assests/Our_Clientele/logo (11).png'
import logo12 from '../assests/Our_Clientele/logo (12).png'
import logo13 from '../assests/Our_Clientele/logo (13).png'
import logo14 from '../assests/Our_Clientele/logo (14).png'
import logo15 from '../assests/Our_Clientele/logo (15).png'
import logo16 from '../assests/Our_Clientele/logo (16).png'
import logo17 from '../assests/Our_Clientele/Client Logo-1.png'
import logo18 from '../assests/Our_Clientele/Client Logo-2.png'
import logo19 from '../assests/Our_Clientele/Client Logo-3.png'
import logo20 from '../assests/Our_Clientele/Client Logo-4.png'

import logo21 from '../assests/tested/CCMB.png';
import logo22 from '../assests/tested/CE.png';
import logo23 from '../assests/tested/CSIR.png';
import logo24 from '../assests/tested/GreenPro.png';
import logo25 from '../assests/tested/IIT.png';
import logo26 from '../assests/tested/ISO.png';
import logo27 from '../assests/tested/ROHS.png';
import logo28 from '../assests/tested/image 46.png';
import logo29 from '../assests/tested/image 44.png';
import logo30 from '../assests/tested/image 43.png';
import logo31 from '../assests/tested/image 42.png';
import logo32 from '../assests/tested/image 45.png';


const logos = [
logo21,logo22,logo23,logo24,logo25,logo26,logo27,logo28,logo29,logo30,logo31,logo32];

const OurClientele = () => {
    return (
        <>
        <h6 className="m-auto text-center text-4xl font-bold p-1 lg:p-3">Our <span className="text-[#1D9AD6]">Clientele</span></h6>

<div className="grid grid-cols-5 lg:grid-cols-6 gap-1 px-4 py-4 lg:px-10 lg:py-10">

{logos.map((logo, index) => (
                <div key={index} className="flex justify-center items-center">
                    <img src={logo} alt={`Client Logo ${index + 1}`} className="" />
                </div>
            ))}
        </div>
        </>
    );
};

export default OurClientele;
