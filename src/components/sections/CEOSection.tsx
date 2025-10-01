import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const CEOSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-6 sm:py-8 md:py-12 bg-white">
      <div className="mx-2 sm:mx-4">
        <div className={`transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 md:p-6">
            {/* Heading */}
            <h3 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style={{fontFamily: 'Mona Sans Expanded', fontWeight: 500, fontStyle: 'italic', letterSpacing: '-1%', textAlign: 'center'}}>
              <span style={{fontWeight: 'bold'}}>From the</span> <span style={{color: '#F40202'}}>CEO's</span> <span style={{fontWeight: 'bold'}}>Desk</span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 sm:gap-6 items-stretch">
              {/* Left Column - CEO Content */}
              <div className="flex flex-col justify-center p-3 sm:p-4 md:p-6 bg-gray-50 rounded-lg">
                <div className="text-gray-700 space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed" style={{fontFamily: 'Jost', fontWeight: 300}}>
                  <p>
                    With over 15 years of experience in the tech industry, I've always believed that quality should never be compromised for quantity. My journey has been shaped by a deep passion for innovation and scalability, whether it's designing resilient software architectures, securing cloud environments, or pushing the boundaries of AI and IoT.
                  </p>
                  
                  <p>
                    When I founded Arodos Technologies, my vision was simple- create a company where quality and precision lead every project, regardless of its size or complexity. I've always wanted to focus on building something unique, providing opportunities for talented minds from every corner of India to explore new technological horizons.
                  </p>
                  
                  <p>
                    At Arodos, we are not just building digital solutions; we are shaping the future of technology. Our mission is to deliver lasting value, drive innovation, and build meaningful relationships with every client.
                  </p>
                </div>
                
                {/* CEO Info at bottom left */}
                <div className="mt-4 sm:mt-6">
                  <div className="flex items-start gap-2 sm:block">
                    <div className="w-24 h-24 sm:hidden bg-gray-200 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer group">
                      <img 
                        src="/images/Screenshot 2025-10-01 141844.png" 
                        alt="Dhruba Sarma - CEO & Founder" 
                        className="w-full h-full object-contain object-center grayscale rounded-lg group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                    <div className="flex flex-col">

                      <p className="text-sm sm:text-lg font-bold text-gray-800">Dhruba Sarma</p>
                      <p className="text-xs sm:text-base text-gray-500 font-medium">Founder & CEO, Arodos Technologies</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - CEO Image */}
              <div className="hidden sm:block bg-gray-50 rounded-lg overflow-hidden h-64 sm:h-96 lg:h-[500px] cursor-pointer group">
                <img 
                  src="/images/Screenshot 2025-10-01 141844.png" 
                  alt="Dhruba Sarma - CEO & Founder" 
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};