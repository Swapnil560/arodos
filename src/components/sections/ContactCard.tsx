import { useState } from 'react';

export const ContactCard = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    projectDetails: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-us" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Left Section - Red Background */}
            <div className="lg:w-1/2 bg-red-500 p-12 flex items-center justify-center">
              <div className="text-center lg:text-left max-w-md">
                <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-lg text-white mb-8 leading-relaxed">
                  Ready to build the future? Reach out to Aroodos Technologies for innovative, scalable solutions. 
                  Let's collaborate to turn your vision into reality.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center text-white">
                    <img src="/images/phone.png" alt="Phone" className="w-6 h-6 mr-4" />
                    <span className="text-base">+91 9620861198</span>
                  </div>
                  <div className="flex items-center text-white">
                    <img src="/images/message.png" alt="Email" className="w-6 h-6 mr-4" />
                    <span className="text-base">contact@arodos.com</span>
                  </div>
                  <div className="flex items-center text-white">
                    <img src="/images/arrow (2).png" alt="Website" className="w-6 h-6 mr-4" />
                    <span className="text-base">www.arodos.com</span>
                  </div>
                  <div className="flex items-center text-white">
                    <img src="/images/location.png" alt="Location" className="w-6 h-6 mr-4" />
                    <span className="text-base">Guwahati, Bangalore</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="lg:w-1/2 p-12 flex items-center justify-center">
              <div className="w-full max-w-md">
                <h3 className="text-2xl font-bold text-black mb-3">Got a project in mind?</h3>
                <p className="text-base text-gray-600 mb-6">
                  Let us know what you need – our team will get in touch shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Please Enter your Full Name"
                      className="w-full h-10 px-4 bg-gray-100 border border-gray-300 rounded text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Work Email</label>
                    <input
                      type="email"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleChange}
                      placeholder="Enter your Business email Address"
                      className="w-full h-10 px-4 bg-gray-100 border border-gray-300 rounded text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Project Details</label>
                    <textarea
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Briefly Describe your project goals or any specific requirements"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded text-sm placeholder-gray-500 resize-none focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-48 h-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold text-base rounded hover:from-blue-600 hover:to-blue-800 transition-all duration-200 mx-auto block cursor-pointer"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};