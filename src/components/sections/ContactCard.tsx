import { useState } from 'react';

export const ContactCard = () => {
  const placeholderStyle = `
    .contact-form input::placeholder,
    .contact-form textarea::placeholder {
      color: #808080 !important;
    }
  `;
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
    <>
      <style dangerouslySetInnerHTML={{ __html: placeholderStyle }} />
      <section id="contact-us" className="py-16" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-lg overflow-hidden" style={{ background: 'linear-gradient(135deg, #FF4444 0%, #CC0000 50%, #990000 100%)', boxShadow: '0 8px 24px rgba(224, 224, 224, 0.3)' }}>
          <div className="flex flex-col lg:flex-row min-h-[700px] p-12">
            {/* Left Section - Contact Info */}
            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="text-center lg:text-left max-w-md">
                <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-lg text-white mb-8 leading-relaxed">
                  Ready to transform your digital ideas into reality? 
                  Arodos is here to help you succeed!
                  Get in touch today, and let's start building 
                  something exceptional.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center text-white">
                    <img src="/images/phone.png" alt="Phone" className="w-6 h-6 mr-4" />
                    <span className="text-base">+919620861198</span>
                  </div>
                  <div className="flex items-center text-white">
                    <img src="/images/message.png" alt="Email" className="w-6 h-6 mr-4" />
                    <span className="text-base">mailto:contact@arodos.com</span>
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

            {/* Right Section - White Form Card */}
            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="bg-white rounded-lg p-8 w-full max-w-md" style={{ boxShadow: '0 4px 16px rgba(224, 224, 224, 0.4)' }}>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#000000' }}>Got a project in mind?</h3>
                <p className="text-base mb-6" style={{ color: '#333333' }}>
                  Let us know what you need – our team will get in touch shortly.
                </p>

                <form onSubmit={handleSubmit} className="contact-form space-y-4">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#333333' }}>Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Please Enter your Full Name"
                      className="w-full h-10 px-4 border rounded text-sm focus:outline-none"
                      style={{ backgroundColor: '#F5F5F5', color: '#000000', borderColor: '#CCCCCC' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#333333' }}>Work Email</label>
                    <input
                      type="email"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleChange}
                      placeholder="Enter your Business email Address"
                      className="w-full h-10 px-4 border rounded text-sm focus:outline-none"
                      style={{ backgroundColor: '#F5F5F5', color: '#000000', borderColor: '#CCCCCC' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#333333' }}>Project Details</label>
                    <textarea
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Briefly Describe your project goals or any specific requirements"
                      rows={4}
                      className="w-full px-4 py-3 border rounded text-sm resize-none focus:outline-none"
                      style={{ backgroundColor: '#F5F5F5', color: '#000000', borderColor: '#CCCCCC' }}
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full h-12 font-bold text-base rounded transition-all duration-200 cursor-pointer"
                      style={{ 
                        background: 'linear-gradient(to right, #007BFF, #0056B3)',
                        color: '#FFFFFF'
                      }}
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
    </>
  );
};