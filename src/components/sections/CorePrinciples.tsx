import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const CorePrinciples = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activePrinciple, setActivePrinciple] = useState(1);

  const principles = [
    {
      number: 1,
      title: "Client-Centric Approach",
      description: "We put your goals at the heart of every solution, delivering experiences that exceed expectations.",
      icon: "/images/hands.png"
    },
    {
      number: 2,
      title: "Professional Excellence",
      description: "Every solution is crafted by skilled professionals, combining creativity, precision, and technical expertise.",
      icon: "/images/services/icons/1.png"
    },
    {
      number: 3,
      title: "Innovation & Impact",
      description: "We transform challenges into opportunities, delivering smarter, faster, and innovative solutions.",
      icon: "/images/services/icons/2.png"
    },
    {
      number: 4,
      title: "Quality Assurance",
      description: "Each project is built to be secure, scalable, and future-ready, maintaining the highest quality standards.",
      icon: "/images/services/icons/3.png"
    },
    {
      number: 5,
      title: "Affordability, Transparency & Trust",
      description: "We deliver high-performance digital solutions without compromising on cost or clarity, making technology accessible for all.",
      icon: "/images/services/icons/4.png"
    }
  ];

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        {/* Header */}
        <div className="text-center mb-12 px-4">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl" style={{ 
            fontFamily: 'Mona Sans Expanded', 
            fontWeight: 500, 
            fontStyle: 'italic', 
            fontSize: 'clamp(24px, 5vw, 48px)', 
            lineHeight: 'clamp(22px, 5vw, 47px)', 
            letterSpacing: '-1%', 
            textAlign: 'center' 
          }}>
            <span style={{ color: 'black', fontWeight: '900', fontSize: '1.2em' }}>5</span>
            <span style={{ color: '#F40202' }}> Core Principles</span>
            <span style={{ color: 'black', fontWeight: '900', fontSize: '1.1em' }}> that Keep Arodos Ahead</span>
          </h1>
        </div>
        
        {/* Interactive Slide Layout */}
        <div className="hidden md:flex h-[500px] max-w-6xl mx-auto">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className={`transition-all duration-500 ease-in-out ${
                principle.number === activePrinciple
                  ? 'w-1/2 bg-red-600 text-white rounded-lg shadow-lg p-8 flex flex-col justify-center'
                  : 'w-1/8 bg-gray-100 hover:bg-gray-200 cursor-pointer flex items-center justify-center mx-1'
              }`}
              style={{
                width: principle.number === activePrinciple ? '50%' : '12.5%'
              }}
              onClick={() => setActivePrinciple(principle.number)}
            >
              <div className="flex items-center mb-6">
                <img src={principle.icon} alt="hands" className={`object-cover rounded-full mr-4 transition-all duration-500 ${
                  principle.number === activePrinciple ? 'w-28 h-28' : 'w-0 h-0 opacity-0'
                }`} />
              </div>
              {principle.number === activePrinciple ? (
                <>
                  <h2 className="text-2xl font-bold mb-4">
                    {principle.number}. {principle.title}
                  </h2>
                  <p className="text-lg leading-relaxed" style={{ lineHeight: '1.5' }}>
                    {principle.description}
                  </p>
                </>
              ) : (
                <div className="transform -rotate-90 whitespace-nowrap">
                  <span className="text-black font-bold" style={{ fontSize: '14px' }}>
                    {principle.number}. {principle.title}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Mobile Layout */}
        <div className="md:hidden space-y-4 px-4">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className={`p-6 rounded-lg transition-all duration-300 ${
                principle.number === activePrinciple
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-black'
              }`}
              onClick={() => setActivePrinciple(principle.number)}
            >
              <div className="flex items-center mb-4">
                <img src={principle.icon} alt="hands" className="w-14 h-14 object-cover rounded-full mr-4 transition-all duration-500" />
                <h3 className="text-lg font-bold">
                  {principle.number}. {principle.title}
                </h3>
              </div>
              {principle.number === activePrinciple && (
                <p className="text-sm leading-relaxed">
                  {principle.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};