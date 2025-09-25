import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const VisionMissionCards = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-12 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 rounded-lg overflow-hidden shadow-lg transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Left Column - Our Vision */}
          <div className="relative p-3 md:p-5 flex flex-col justify-center min-h-[300px] md:min-h-[400px] lg:min-h-[600px] rounded-lg overflow-hidden">
            {/* Background Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ zIndex: 1 }}
            >
              <source src="/videos/our vision.mp4" type="video/mp4" />
            </video>
            
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            
            {/* Top overlay */}
            <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-60 p-3 md:p-4 z-10">
              <div className="flex items-center mb-2 md:mb-3">
                <span className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full mr-2"></span>
                <h3 className="text-white text-lg md:text-xl font-bold">Our Vision</h3>
              </div>
              <p className="text-white text-sm md:text-base" style={{ lineHeight: '1.4' }}>
                To lead with innovation and deliver digital solutions that don't just meet today's challenges but evolve to power tomorrow's opportunities.
              </p>
            </div>
          </div>
          
          {/* Right Column - Our Mission */}
          <div className="relative p-3 md:p-5 flex flex-col justify-center min-h-[300px] md:min-h-[400px] lg:min-h-[600px] rounded-lg overflow-hidden">
            {/* Background Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ zIndex: 1 }}
            >
              <source src="/videos/Our mission.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20" style={{ zIndex: 2 }}></div>
            
            {/* Top overlay */}
            <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-60 p-3 md:p-4" style={{ zIndex: 3 }}>
              <div className="flex items-center mb-2 md:mb-3">
                <span className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full mr-2"></span>
                <h3 className="text-white text-lg md:text-xl font-bold">Our Mission</h3>
              </div>
              <p className="text-white text-sm md:text-base" style={{ lineHeight: '1.4' }}>
                We put clients first, delivering tailored digital solutions built on quality, innovation, and long-term value. Every project is crafted with precision and handled by experienced professionals to ensure measurable impact. 
                As our clients grow, we grow- building lasting partnerships rooted in trust and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};