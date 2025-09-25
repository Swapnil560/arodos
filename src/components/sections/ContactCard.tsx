import { useState } from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

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
      <section id="contact-us" className="py-12 md:py-16" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-lg overflow-hidden" style={{ background: 'linear-gradient(135deg, #EF9A9A 0%, #E57373 50%, #EF5350 100%)', boxShadow: '0 8px 24px rgba(224, 224, 224, 0.3)' }}>
          <div className="flex flex-col lg:flex-row min-h-[600px] md:min-h-[700px] p-6 md:p-8 lg:p-12">
            {/* Left Section - Contact Info */}
            <div className="lg:w-1/2 flex items-center justify-center mb-6 lg:mb-0">
              <div className="text-center lg:text-left max-w-md w-full">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">Get in Touch</h2>
                <p className="text-sm md:text-base lg:text-lg text-white mb-6 md:mb-8 leading-relaxed">
                  Ready to transform your digital ideas into reality? 
                  Arodos is here to help you succeed!
                  Get in touch today, and let's start building 
                  something exceptional.
                </p>
                
                <div className="space-y-4 md:space-y-5">
                  <div className="text-white text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-1">
                      <img src="/images/phone.png" alt="Phone" className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4" />
                      <span className="text-sm md:text-base font-semibold">Phone</span>
                    </div>
                    <div className="text-sm md:text-base ml-8 md:ml-10 lg:ml-8">+919620861198</div>
                  </div>
                  <div className="text-white text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-1">
                      <img src="/images/mess.png" alt="Email" className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4" />
                      <span className="text-sm md:text-base font-semibold">Email</span>
                    </div>
                    <div className="text-sm md:text-base ml-8 md:ml-10 lg:ml-8">contact@arodos.com</div>
                  </div>
                  <div className="text-white text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-1">
                      <img src="/images/arrow (2).png" alt="Website" className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4" />
                      <span className="text-sm md:text-base font-semibold">Website</span>
                    </div>
                    <div className="text-sm md:text-base ml-8 md:ml-10 lg:ml-8">www.arodos.com</div>
                  </div>
                  <div className="text-white text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-1">
                      <img src="/images/loca.png" alt="Location" className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4" />
                      <span className="text-sm md:text-base font-semibold">Location</span>
                    </div>
                    <div className="text-sm md:text-base ml-8 md:ml-10 lg:ml-8">Guwahati, Bangalore</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - White Form Card */}
            <div className="lg:w-1/2 flex items-center justify-center">
              <Card className="p-6 md:p-8 w-full max-w-md" hover={false}>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3" style={{ color: '#000000' }}>Got a project in mind?</h3>
                <p className="text-sm md:text-base mb-4 md:mb-6" style={{ color: '#333333' }}>
                  Let us know what you need – our team will get in touch shortly.
                </p>

                <form onSubmit={handleSubmit} className="contact-form space-y-3 md:space-y-4">
                  <div>
                    <label className="block text-xs md:text-sm mb-1 md:mb-2" style={{ color: '#333333' }}>Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Please Enter your Full Name"
                      className="w-full h-9 md:h-10 px-3 md:px-4 border rounded text-xs md:text-sm focus:outline-none"
                      style={{ backgroundColor: '#F5F5F5', color: '#000000', borderColor: '#CCCCCC' }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm mb-1 md:mb-2" style={{ color: '#333333' }}>Work Email</label>
                    <input
                      type="email"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleChange}
                      placeholder="Enter your Business email Address"
                      className="w-full h-9 md:h-10 px-3 md:px-4 border rounded text-xs md:text-sm focus:outline-none"
                      style={{ backgroundColor: '#F5F5F5', color: '#000000', borderColor: '#CCCCCC' }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm mb-1 md:mb-2" style={{ color: '#333333' }}>Project Details</label>
                    <textarea
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Briefly Describe your project goals or any specific requirements"
                      rows={3}
                      className="w-full px-3 md:px-4 py-2 md:py-3 border rounded text-xs md:text-sm resize-none focus:outline-none"
                      style={{ backgroundColor: '#F5F5F5', color: '#000000', borderColor: '#CCCCCC' }}
                    />
                  </div>

                  <div className="pt-3 md:pt-4">
                    <Button type="submit" variant="primary" fullWidth>
                      Submit Request
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};