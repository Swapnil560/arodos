import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Arodos delivered our MVP on time with exceptional quality. Their agile team truly understood our startup vision and executed flawlessly.",
    client: "Deepankar Bhattacharjya - Co-Founder & COO, ZEMIDI",
    logo: "Z",
    rating: "★★★★★",
    image: "/images/Deepankar Bhattacharjya.png"
  },
  {
    quote: "Arodos built a robust backend for our vehicle tracking system — scalable, secure, and API-first. They're our go-to engineering partner now",
    client: "David Pierce - Director NA Sales | POWWR",
    logo: "P",
    rating: "★★★★★",
    image: "/images/David Pierce.png"
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
            {testimonials[currentSlide].rating && (
              <div className="text-yellow-400 text-2xl mb-4">
                {testimonials[currentSlide].rating}
              </div>
            )}
            <blockquote className="text-2xl text-gray-800 mb-8 leading-relaxed min-h-24 flex items-start justify-center relative">
              <img src="/images/open.png" alt="" className="w-20 h-20 absolute -top-4 -left-12" />
              <span className="px-12">{testimonials[currentSlide].quote}</span>
              <img src="/images/close.png" alt="" className="w-20 h-20 absolute -bottom-4 -right-12" />
            </blockquote>
            <cite className="text-blue-500 font-medium text-lg">
              {testimonials[currentSlide].client}
            </cite>
          </div>
          
          {/* Client Logo Circle */}
          <div className="flex-shrink-0">
            <div className={`${testimonials[currentSlide].client.includes('Deepankar') ? 'w-48 h-48' : 'w-40 h-40'} bg-white overflow-hidden`}>
              {testimonials[currentSlide].image ? (
                <img 
                  src={testimonials[currentSlide].image} 
                  alt={testimonials[currentSlide].client} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-800 text-4xl font-bold">
                  {testimonials[currentSlide].logo}
                </span>
              )}
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