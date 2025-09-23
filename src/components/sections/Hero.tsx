import { Logo } from '../ui/Logo';
import { Navigation } from '../ui/Navigation';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col bg-gray-900 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero section vid.mp4" type="video/mp4" />
      </video>
      
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Header */}
      <div className="relative z-10 flex justify-between items-start p-5">
        <Logo />
        <div className="relative mt-10">
          <Navigation />
        </div>
      </div>
      
      {/* Rating Section */}
      <div className="relative z-10 flex flex-col items-center mt-6">
        <div className="flex items-center mb-2">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">★</span>
          ))}
          <span className="text-yellow-400 text-xl opacity-70">★</span>
          <span className="text-white ml-2 text-sm">4.7</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-300 text-sm">Trusted by 100+ Happy Customers</span>
          <div className="flex ml-3 space-x-1">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">👤</div>
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">👤</div>
            <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">👤</div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center">
        {/* Headline */}
        <div className="mb-5">
          <h1 className="text-5xl leading-tight">
            <span className="text-white font-normal">Built to </span>
            <span className="text-red-500 font-bold italic">Shape the Future</span>
          </h1>
        </div>
        
        {/* Subtext */}
        <p className="text-gray-300 text-lg max-w-2xl mb-8 pt-5 leading-relaxed">
          Welcome to Arodos Technologies. We are a digital innovation partner focused on building 
          high-performance, scalable solutions across ERP, CRM, AI, and mobile app platforms.
        </p>
        
        {/* CTA Button */}
        <button
          onClick={() => scrollToSection('services')}
          className="bg-blue-600 text-white text-lg font-bold px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center mb-8"
        >
          Explore Our Expertise
          <span className="ml-2">→</span>
        </button>
        
        {/* Statistics */}
        <div className="flex space-x-8 mt-5">
          <div className="text-center w-30">
            <div className="text-white text-2xl font-bold">98%</div>
            <div className="text-gray-300 text-base">On-Time Delivery</div>
          </div>
          <div className="text-center w-30">
            <div className="text-white text-2xl font-bold">75</div>
            <div className="text-gray-300 text-base">Apps Launched</div>
          </div>
          <div className="text-center w-30">
            <div className="text-white text-2xl font-bold">120+</div>
            <div className="text-gray-300 text-base">Projects Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
};