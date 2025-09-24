import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const WhoWeAre = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="who-we-are" ref={ref} className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-8 items-center transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ minHeight: '650px' }}>
          {/* Left Column - Text */}
          <div className="p-5" style={{ minHeight: '650px' }}>
            <h2 className="text-5xl font-bold mb-5">
              <span className="text-red-500 italic">Who</span>
              <span className="text-black"> We Are</span>
            </h2>
            
            <div className="space-y-4 text-gray-800 text-base leading-relaxed">
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
            
            <div className="mt-5">
              <button 
                onClick={() => setShowMore(!showMore)}
                className="text-blue-600 text-sm hover:underline hover:text-blue-700 transition-colors duration-300"
              >
                {showMore ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="p-5" style={{ minHeight: '650px' }}>
            <img
              src="/images/About-Us.jpg"
              alt="Team stacking hands over laptops and documents"
              className="w-full rounded-lg shadow-lg object-cover"
              style={{ height: '650px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};