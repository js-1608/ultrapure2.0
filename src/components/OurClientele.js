import React from 'react';

const logos = [
    './Our_Clientele/Group 48.png', 'logo2.png', 'logo3.png', 
    'Client Logo-08.png', 'Client Logo-08.png', 'Client Logo-08.png', 
    'Client Logo-08.png', 'Client Logo-08.png', 'Client Logo-08.png', 
    'Client Logo-08.png', 'Client Logo-08.png', 'Client Logo-08.png', 
    'Client Logo-08.png', 'Client Logo-08.png', 'Client Logo-08.png',]

const OurClientele = () => {
    return (
        <div className="flex flex-wrap justify-center mx-4 my-8">
            {logos.map((logo, index) => (
                <div key={index} className="flex justify-center items-center w-1/5 p-4">
                    <img src={`${logo}`} alt={`Client Logo ${index + 1}`} className="max-w-full h-auto" />
                </div>
            ))}
        </div>
    );
};

export default OurClientele;
