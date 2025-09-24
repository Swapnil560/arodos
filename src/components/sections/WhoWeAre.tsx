import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const WhoWeAre = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="who-we-are" ref={ref} className="py-12 md:py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Left Column - Text */}
          <div className="order-2 lg:order-1 p-3 md:p-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5">
              <span className="text-red-500 italic">Who</span>
              <span className="text-black"> We Are</span>
            </h2>
            
            <div className="space-y-3 md:space-y-4 text-gray-800 text-sm md:text-base leading-relaxed">
              <p>
                Born in Assam, built with global ambition- Arodos Technologies was founded post-COVID to bring world-class digital solutions closer to home.
              </p>
              
              <p>
                Today, we partner with businesses, startups, and institutions across India, the US, Canada, and worldwide, delivering AI-driven ERP systems, custom web and mobile apps, and scalable digital services designed for growth and reliability.
              </p>
              
              <p>
                Every project- no matter its complexity or size- is crafted with precision, care, and attention to detail. This ensures that our clients receive top-notch, secure, and affordable solutions that truly transform the way they operate.
              </p>
              
              {showMore && (
                <p>
                  With each partnership, we aim to make technology not just accessible, but innovative and dependable- with a commitment to delivering utmost customer satisfaction every step of the way.
                </p>
              )}
            </div>
            
            <div className="mt-4 md:mt-5">
              <button 
                onClick={() => setShowMore(!showMore)}
                className="text-blue-600 text-sm hover:underline hover:text-blue-700 transition-colors duration-300"
              >
                {showMore ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 p-3 md:p-5">
            <img
              src="/images/About-Us.jpg"
              alt="Team stacking hands over laptops and documents"
              className="w-full h-64 md:h-80 lg:h-96 xl:h-[500px] rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};