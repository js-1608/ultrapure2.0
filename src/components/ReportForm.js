import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaArrowRight } from 'react-icons/fa6';

const ReportForm = () => {
  const [selectedReport, setSelectedReport] = useState('');
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [formStatus, setFormStatus] = useState(''); // State to handle form submission status

  const handleReportChange = (event) => {
    setSelectedReport(event.target.value);
    setFormVisible(true);
    setFormStatus(''); // Reset status when the form is re-displayed
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      report: selectedReport,
      name: formData.name,
      email: formData.email,
      phone: formData.phone
    };

    emailjs.send('service_w0y4uqi', 'template_8lnxjiz', templateParams, 'nVMndy3q-jQjrcEiu')
      .then((result) => {
        console.log(result.text);
        setFormStatus('success'); // Set status to success
        setFormVisible(false); // Hide the form after submission
      }, (error) => {
        console.log(error.text);
        setFormStatus('error'); // Set status to error
        setFormVisible(false); // Hide the form even if there's an error
      });
  };

  return (
    <div className="bg-gray-100 p-8 sm:p-5 lg:p-14 rounded-lg shadow-md mx-auto mt-8 mb-8 flex flex-col lg:flex-row items-center lg:justify-between">
      <div className="flex flex-col items-start mb-6 lg:mb-0">
        <div>
          <h2 className="text-4xl font-bold text-gray-800">Our <span className="text-blue-600">Test Reports</span></h2>
          <p className="text-gray-600 mt-2">Enter details to view test reports</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
        {!formVisible && formStatus === '' && (
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <select value={selectedReport} onChange={handleReportChange} className="block w-full lg:w-56 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select Report</option>
              <option value="Air Purifier (KC450-S8)">Air Purifier (KC450-S8)</option>
              <option value="In Duct Air Purifier (GX-01)">In Duct Air Purifier (GX-01)</option>
              <option value="Deep Clean Products">Deep Clean Products</option>
              <option value="Face Masks">Face Masks</option>
            </select>
            <button className="px-6 py-2 bg-gradient-to-r from-textBlue to-ultragreen text-white rounded-md hover:from-ultragreen hover:to-textBlue focus:outline-none flex items-center">Email Me</button>
          </div>
        )}

        {formVisible && formStatus === '' && (
          <form onSubmit={handleSubmit} className="space-y-4 w-full lg:w-auto">
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" required className="w-full lg:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required className="w-full lg:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" value={selectedReport} readOnly className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed focus:outline-none" />
          
            <button type="submit" className="px-6 py-2 bg-gradient-to-r from-textBlue to-ultragreen text-white rounded-md hover:from-ultragreen hover:to-textBlue focus:outline-none flex items-center">Submit
              <FaArrowRight className="ml-2" />
            </button>
          </form>
        )}

        {/* Conditionally render the success or error message */}
        {!formVisible && formStatus === 'success' && (
          <p className="text-green-500 mt-4">Email sent successfully!</p>
        )}
        {!formVisible && formStatus === 'error' && (
          <p className="text-red-500 mt-4">Failed to send email. Please try again.</p>
        )}
      </div>
    </div>
  );
};

export default ReportForm;
