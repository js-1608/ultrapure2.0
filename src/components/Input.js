import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Input = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Reset error state
    setError('');

    // EmailJS integration
    emailjs.send('service_4o2snl5', 'your_template_id', { email }, 'MQErJheZPyYzu9-9f')
      .then((response) => {
        console.log('Subscription successful:', response.status, response.text);
        setIsSubmitted(true);
        setEmail('');
      })
      .catch((error) => {
        console.error('Subscription failed:', error);
        setError('Something went wrong. Please try again later.');
      });
  };

  return (
    <div className="max-w-md mx-auto">
      {isSubmitted ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
          <p className="text-gray-700">You have successfully subscribed to our newsletter.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="items-center m-auto">
          <div className='flex flex-row '>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={handleChange}
            className="border p-2 rounded w-full max-w-md"
          />
          <button
            type="submit"
            className=" ml-1 bg-gradient-to-r from-textBlue to-ultragreen text-white rounded-md hover:from-ultragreen hover:to-textBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
            Subscribe
          </button>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        </form>
      )}
    </div>
  );
};

export default Input;
