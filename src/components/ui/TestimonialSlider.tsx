

const testimonials = [
  {
    quote: "Arodos delivered our MVP on time with exceptional quality. Their agile team truly understood our startup vision and executed flawlessly.",
    client: "Deepankar Bhattacharjya\n- Co-Founder & COO, ZEMIDI",
    logo: "Z",
    rating: "★★★★★",
    image: "/images/clients/deepankar.png"
  },
  {
    quote: "Arodos built a robust backend for our vehicle tracking system — scalable, secure, and API-first. They're our go-to engineering partner now",
    client: "David Pierce\n- Director NA Sales | POWWR",
    logo: "P",
    rating: "★★★★★",
    image: "/images/clients/david.png"
  }
];

export const TestimonialSlider = () => {



  return (
    <div className="max-w-6xl mx-auto relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 min-h-[250px] md:min-h-[300px] relative">
            {/* Quote icons */}
            <img src="/images/clients/open.png" alt="Quote open" className="absolute top-2 right-2 md:top-4 md:right-4 w-6 h-6 md:w-8 md:h-8 lg:w-11 lg:h-11" />
            <img src="/images/clients/close.png" alt="Quote close" className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-6 h-6 md:w-8 md:h-8 lg:w-11 lg:h-11 opacity-50" />
            <div className="flex flex-col items-start text-left h-full">
              {/* Client Image */}
              <div className="flex-shrink-0 mb-4">
                <div className={`${testimonial.client.includes('Deepankar') ? 'w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32' : 'w-14 h-14 md:w-20 md:h-20 lg:w-28 lg:h-28'} bg-white overflow-hidden rounded-full`}>
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.client} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-800 text-xl md:text-2xl font-bold flex items-center justify-center h-full">
                      {testimonial.logo}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Rating */}
              {testimonial.rating && (
                <div className="text-yellow-400 text-base md:text-lg mb-2 md:mb-3 ml-3 md:ml-6">
                  {testimonial.rating}
                </div>
              )}
              
              {/* Quote */}
              <blockquote className="text-xs md:text-sm lg:text-base text-gray-800 mb-3 md:mb-4 leading-relaxed flex-1 flex items-center">
                <span>{testimonial.quote}</span>
              </blockquote>
              
              {/* Client Name */}
              <cite className="text-gray-800 font-medium text-xs md:text-sm lg:text-base whitespace-pre-line">
                {testimonial.client}
              </cite>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};