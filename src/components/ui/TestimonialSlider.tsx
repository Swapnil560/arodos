import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Their expertise transformed our digital presence, boosting our efficiency significantly.",
    client: "Minbury - CEO John Doe",
    logo: "M"
  },
  {
    quote: "Innovative solutions that drove measurable growth for our business.",
    client: "Brigosha Technologies - Jane Smith",
    logo: "B"
  },
  {
    quote: "A reliable partner in navigating the ever-evolving digital landscape.",
    client: "Auranayak - Michael Lee",
    logo: "A"
  }
];

export const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="max-w-6xl mx-auto relative">
      <div className="bg-white rounded-2xl shadow-lg p-16 min-h-80">
        <div className="flex items-center justify-between h-full">
          <div className="flex-1 text-center pr-12">
            <blockquote className="text-2xl text-gray-800 mb-8 leading-relaxed min-h-24 flex items-center justify-center">
              "{testimonials[currentSlide].quote}"
            </blockquote>
            <cite className="text-blue-500 font-medium text-lg">
              {testimonials[currentSlide].client}
            </cite>
          </div>
          
          {/* Client Logo Circle */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-4xl font-bold">
                {testimonials[currentSlide].logo}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50"
      >
        <span className="text-gray-600 text-xl">‹</span>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50"
      >
        <span className="text-gray-600 text-xl">›</span>
      </button>
      
      {/* Slide Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};