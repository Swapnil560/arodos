import { useState } from 'react';
import { Card } from '../ui/Card';
import { generateWebsiteTemplate } from '../ui/websiteGenerator';

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
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear form fields immediately
    setFormData({
      fullName: '',
      workEmail: '',
      projectDetails: ''
    });
    setGeneratedImage(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGenerateTemplate = async () => {
    if (!formData.projectDetails.trim()) return;
    
    setIsGenerating(true);
    try {
      const imageUrl = await generateWebsiteTemplate(formData.projectDetails);
      setGeneratedImage(imageUrl);
    } catch (error) {
      console.error('Error generating template:', error);
    }
    setIsGenerating(false);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: placeholderStyle }} />
      <section id="contact-us" className="min-h-screen flex flex-col bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-2xl sm:rounded-3xl mx-2 md:mx-4 mt-2 md:mt-4 mb-2 md:mb-4 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      <div className="max-w-6xl mx-auto px-3 sm:px-4 flex-1 flex items-center">
        <div className="w-full bg-transparent">
          <div className="flex flex-col lg:flex-row min-h-[500px] sm:min-h-[600px] md:min-h-[700px] p-4 sm:p-6 md:p-8 lg:p-12">
            {/* Left Section - Contact Info */}
            <div className="lg:w-1/2 flex flex-col mb-8 lg:mb-0 py-2 sm:py-4 lg:mr-20 relative z-10">
              <div className="text-left max-w-md w-full">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6">Get in Touch</h2>
                <p className="text-sm sm:text-base md:text-lg text-white mb-6 sm:mb-8 leading-relaxed">
                  Ready to transform your digital ideas into reality? 
                  Arodos is here to help you succeed!
                  Get in touch today, and let's start building 
                  something exceptional.
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="text-white flex items-center hover:bg-white/10 p-2 rounded-lg transition-all duration-300 hover:scale-105">
                    <img src="/images/phone.png" alt="Phone" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 md:mr-4" />
                    <span className="text-sm sm:text-base font-semibold mr-2">Phone</span>
                    <span className="text-xs sm:text-sm md:text-base">+919620861198</span>
                  </div>
                  <div className="text-white flex items-center hover:bg-white/10 p-2 rounded-lg transition-all duration-300 hover:scale-105">
                    <img src="/images/mess.png" alt="Email" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 md:mr-4" />
                    <span className="text-sm sm:text-base font-semibold mr-2">Email</span>
                    <a href="mailto:contact@arodos.com" className="text-xs sm:text-sm md:text-base hover:underline hover:text-yellow-300 transition-colors duration-300">contact@arodos.com</a>
                  </div>
                  <div className="text-white flex items-center hover:bg-white/10 p-2 rounded-lg transition-all duration-300 hover:scale-105">
                    <img src="/images/arrow (2).png" alt="Website" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 md:mr-4" />
                    <span className="text-sm sm:text-base font-semibold mr-2">Website</span>
                    <a href="http://www.arodos.com" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm md:text-base hover:underline hover:text-yellow-300 transition-colors duration-300">www.arodos.com</a>
                  </div>
                  <div className="text-white flex items-center hover:bg-white/10 p-2 rounded-lg transition-all duration-300 hover:scale-105">
                    <img src="/images/loca.png" alt="Location" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 md:mr-4" />
                    <span className="text-sm sm:text-base font-semibold mr-2">Location</span>
                    <span className="text-xs sm:text-sm md:text-base">Guwahati, Bangalore</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - White Form Card */}
            <div className="lg:w-1/2 flex items-center justify-center lg:ml-8 relative z-10">
              <Card className="p-4 sm:p-6 md:p-8 w-full max-w-md transform hover:scale-105 transition-all duration-300 hover:shadow-xl" hover={false}>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent animate-pulse">Got a project in mind?</h3>
                <p className="text-xs sm:text-sm md:text-base mb-4 sm:mb-6" style={{ color: '#333333' }}>
                  Let us know what you need – our team will get in touch shortly.
                </p>

                <form onSubmit={handleSubmit} className="contact-form space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-xs sm:text-sm mb-1 sm:mb-2" style={{ color: '#333333' }}>Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Please Enter your Full Name"
                      className="w-full h-8 sm:h-9 md:h-10 px-2 sm:px-3 md:px-4 border rounded text-xs sm:text-sm focus:outline-none"
                      style={{ backgroundColor: '#F5F5F5', color: '#000000', borderColor: '#CCCCCC' }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm mb-1 sm:mb-2" style={{ color: '#333333' }}>Work Email</label>
                    <input
                      type="email"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleChange}
                      placeholder="Enter your Business email Address"
                      className="w-full h-8 sm:h-9 md:h-10 px-2 sm:px-3 md:px-4 border rounded text-xs sm:text-sm focus:outline-none"
                      style={{ backgroundColor: '#F5F5F5', color: '#000000', borderColor: '#CCCCCC' }}
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <label className="block text-xs sm:text-sm" style={{ color: '#333333' }}>Project Details</label>
                      <button
                        type="button"
                        onClick={handleGenerateTemplate}
                        disabled={isGenerating || !formData.projectDetails.trim()}
                        className="flex items-center space-x-1 px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-md hover:from-cyan-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                        title="Generate website prototype"
                      >
                        {isGenerating ? (
                          <>
                            <div className="w-3 h-3 border border-white border-t-transparent rounded-full animate-spin"></div>
                            <span className="hidden sm:inline">Generate</span>
                          </>
                        ) : (
                          <>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="hidden sm:inline">Generate</span>
                          </>
                        )}
                      </button>
                    </div>
                    <textarea
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Briefly Describe your project goals or any specific requirements"
                      rows={6}
                      className="w-full px-2 sm:px-3 md:px-4 py-2 sm:py-3 border rounded text-xs sm:text-sm resize-none focus:outline-none"
                      style={{ backgroundColor: '#F5F5F5', color: '#000000', borderColor: '#CCCCCC' }}
                    />
                    {generatedImage && (
                      <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                        <p className="text-xs text-blue-700 mb-2 font-medium">✨ Website Template Preview:</p>
                        <div className="relative group">
                          <img
                            src={generatedImage}
                            alt="Website Template"
                            className="w-full h-24 sm:h-32 object-cover rounded-lg"
                          />
                          <button
                            onClick={() => setGeneratedImage(null)}
                            className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 text-gray-500 hover:text-red-600 p-1 sm:p-1.5 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                            title="Delete template"
                          >
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                            </svg>
                          </button>
                        </div>
                        <p className="text-xs text-gray-600 mt-2">demo</p>
                      </div>
                    )}
                  </div>

                  <div className="pt-2 sm:pt-3 md:pt-4 flex justify-center">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ fullName: '', workEmail: '', projectDetails: '' });
                        setGeneratedImage(null);
                      }}
                      className="bg-white font-jost px-6 py-3 rounded-lg transition-all duration-300 font-medium border border-gray-600"
                      style={{ color: '#870000' }}
                      onMouseEnter={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = '#F40202';
                        target.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = 'white';
                        target.style.color = '#870000';
                      }}
                      onMouseDown={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = '#F40202';
                        target.style.color = 'white';
                        target.style.transform = 'scale(0.95)';
                      }}
                      onMouseUp={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = '#F40202';
                        target.style.color = 'white';
                        target.style.transform = 'scale(1)';
                      }}
                      onTouchStart={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = '#F40202';
                        target.style.color = 'white';
                        target.style.transform = 'scale(0.95)';
                      }}
                      onTouchEnd={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = 'white';
                        target.style.color = '#870000';
                        target.style.transform = 'scale(1)';
                      }}
                    >
                      Submit Request →
                    </button>
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