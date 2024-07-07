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

const logos = [
    logo1, logo2 ,logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12 ,logo13,logo14, logo15, logo16 ,logo17 ,logo18 ,logo19 ,logo20
];

const OurClientele = () => {
    return (
        <div className="grid grid-cols-10 gap-1 p-2">
            {logos.map((logo, index) => (
                <div key={index} className="flex justify-center items-center">
                    <img src={logo} alt={`Client Logo ${index + 1}`} className="" />
                </div>
            ))}
        </div>
    );
};

export default OurClientele;
