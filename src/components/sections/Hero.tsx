import { Logo } from '../ui/Logo';
import { Navigation } from '../ui/Navigation';
import { Button } from '../ui/Button';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col bg-gray-900">
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
          <span className="text-gray-300 text-sm">Trusted by 100+ Happy Customers</span>
          <div className="ml-3">
            <img src="/images/ppl.png" alt="Users" className="w-12 h-6" />
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-0 flex-1 flex flex-col items-center justify-center px-4 text-center md:px-8">
        {/* Headline */}
        <div className="mb-5 max-w-4xl">
          <h1 className="text-3xl md:text-5xl leading-tight">
            <span className="text-white font-normal">Build Innovative Solutions </span>
            <span className="text-red-500 font-bold italic">at Affordable Cost</span>
          </h1>
        </div>
        
        {/* Subtext */}
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mb-8 pt-5 leading-relaxed px-4 md:px-0">
          Trusted Globally for Reliable, High-Performance Web, Mobile, ERP, CRM, and AI 
          Development- Delivered on Time, Within budget, & Built to Last.
        </p>
        
        {/* CTA Button */}
        <div className="mb-8">
          <Button onClick={() => scrollToSection('services')}>
            Explore Our Expertise →
          </Button>
        </div>
        
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