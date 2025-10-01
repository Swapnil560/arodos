import { Logo } from '../ui/Logo';
import { Navigation } from '../ui/Navigation';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col bg-gray-900 rounded-3xl mx-2 md:mx-4 mt-2 md:mt-4 mb-2 md:mb-4">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>
      
      {/* Header */}
      <div className="relative z-10 flex justify-between items-start p-5">
        <Logo />
        <div className="relative mt-10 mr-2">
          <Navigation />
        </div>
      </div>
      
      {/* Rating Section */}
      <div className="relative z-0 flex flex-col items-center mt-6">
        <div className="flex items-center mb-2">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">★</span>
          ))}
          <span className="text-yellow-400 text-xl opacity-70">★</span>
          <span className="text-white ml-2 text-sm">4.7</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-300 text-sm font-jost">Trusted by 100+ Happy Customers</span>
          <div className="ml-3">
            <img src="/images/ppl.png" alt="Users" className="w-12 h-6" />
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-0 flex-1 flex flex-col items-center justify-center px-4 text-center md:px-8">
        {/* Headline */}
        <div className="mb-5 max-w-4xl">
          <h1 style={{fontFamily: 'Mona Sans Expanded', fontWeight: 800, fontSize: window.innerWidth < 768 ? '32px' : '80px', lineHeight: window.innerWidth < 768 ? '36px' : '74px', letterSpacing: '-1%', textAlign: 'center', verticalAlign: 'middle'}}>
            <span className="text-white">Build </span>
            <span style={{color: '#F40202', fontWeight: 900, textShadow: '2px 2px 4px rgba(0,0,0,0.5), 1px 1px 2px rgba(244,2,2,0.3)', letterSpacing: '1px'}}>Innovative</span>
            <span className="text-white"> Solutions at Affordable Cost</span>
          </h1>
        </div>
        
        {/* Subtext */}
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mb-8 pt-5 leading-relaxed px-4 md:px-0 font-jost">
          Trusted Globally for Reliable, High-Performance Web, Mobile, ERP, CRM, and AI 
          Development- Delivered on Time, Within budget, & Built to Last.
        </p>
        
        {/* CTA Button */}
        <div className="mb-8">
          <button 
            onClick={() => scrollToSection('services')}
            className="bg-white font-jost px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium"
            style={{ color: '#870000' }}
          >
            Explore Our Expertise →
          </button>
        </div>
        
        {/* Statistics */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-5">
          <div className="text-center w-30">
            <div className="text-white text-2xl font-bold" style={{fontFamily: 'Mona Sans Expanded'}}>98%</div>
            <div className="text-gray-300 text-base" style={{fontFamily: 'Mona Sans Expanded'}}>On-Time Delivery</div>
          </div>
          <div className="text-center w-30">
            <div className="text-white text-2xl font-bold" style={{fontFamily: 'Mona Sans Expanded'}}>75</div>
            <div className="text-gray-300 text-base" style={{fontFamily: 'Mona Sans Expanded'}}>Apps Launched</div>
          </div>
          <div className="text-center w-30">
            <div className="text-white text-2xl font-bold" style={{fontFamily: 'Mona Sans Expanded'}}>120+</div>
            <div className="text-gray-300 text-base" style={{fontFamily: 'Mona Sans Expanded'}}>Projects Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
};