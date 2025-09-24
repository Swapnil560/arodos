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



  return (
    <div className="max-w-6xl mx-auto relative">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-12 lg:p-16 min-h-[300px] md:min-h-80">
        <div className="flex flex-col md:flex-row items-center justify-between h-full gap-6 md:gap-0">
          <div className="flex-1 text-center md:pr-6 lg:pr-12 order-2 md:order-1">
            {testimonials[currentSlide].rating && (
              <div className="text-yellow-400 text-lg md:text-2xl mb-3 md:mb-4">
                {testimonials[currentSlide].rating}
              </div>
            )}
            <blockquote className="text-sm md:text-lg lg:text-2xl text-gray-800 mb-4 md:mb-8 leading-relaxed min-h-[60px] md:min-h-24 flex items-center justify-center relative px-4">
              <span>{testimonials[currentSlide].quote}</span>
            </blockquote>
            <cite className="text-blue-500 font-medium text-sm md:text-base lg:text-lg">
              {testimonials[currentSlide].client}
            </cite>
          </div>
          
          {/* Client Logo Circle */}
          <div className="flex-shrink-0 order-1 md:order-2">
            <div className={`${testimonials[currentSlide].client.includes('Deepankar') ? 'w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48' : 'w-20 h-20 md:w-28 md:h-28 lg:w-40 lg:h-40'} bg-white overflow-hidden rounded-full`}>
              {testimonials[currentSlide].image ? (
                <img 
                  src={testimonials[currentSlide].image} 
                  alt={testimonials[currentSlide].client} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-800 text-2xl md:text-3xl lg:text-4xl font-bold flex items-center justify-center h-full">
                  {testimonials[currentSlide].logo}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Slide Indicators */}
      <div className="flex justify-center mt-6 md:mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
              index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};