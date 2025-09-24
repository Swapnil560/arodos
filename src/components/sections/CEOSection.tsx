import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const CEOSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-2 md:py-3 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Left Column - CEO Image */}
              <div className="lg:col-span-2 relative h-48 sm:h-56 md:h-64 lg:h-full min-h-[180px] lg:min-h-[79px]">
                <img 
                  src="/images/ceo-placeholder.jpg" 
                  alt="Dhruba Sarma - CEO & Founder" 
                  className="w-full h-full object-cover object-center sm:object-top md:object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 lg:hidden">
                  <h3 className="text-white text-sm sm:text-lg md:text-xl font-bold mb-1">From the CEO's Desk</h3>
                  <p className="text-white/90 text-xs sm:text-sm">Dhruba Sarma</p>
                </div>
              </div>
              
              {/* Right Column - CEO Content */}
              <div className="lg:col-span-3 p-3 sm:p-4 md:p-6 lg:p-2 xl:p-3 flex flex-col justify-center">
                <div className="mb-3 lg:mb-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 hidden lg:block">
                    From the CEO's Desk
                  </h3>
                  <div className="flex items-center mb-3 lg:mb-4">
                    <div className="w-8 sm:w-10 lg:w-12 h-1 bg-red-500 mr-3 lg:mr-4"></div>
                    <p className="text-lg sm:text-xl md:text-2xl text-red-500 font-bold">
                      Dhruba Sarma
                    </p>
                  </div>
                  <p className="text-gray-500 font-medium text-base sm:text-lg">
                    Founder & CEO, Arodos Technologies
                  </p>
                </div>
                
                <div className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed space-y-2 sm:space-y-3 lg:space-y-6">
                  <p>
                    With over 15 years of experience in the tech industry, I've always believed that quality should never be compromised for quantity. My journey has been shaped by a deep passion for innovation and scalability, whether it's designing resilient software architectures, securing cloud environments, or pushing the boundaries of AI and IoT.
                  </p>
                  
                  <p>
                    When I founded Arodos Technologies, my vision was simple- create a company where quality and precision lead every project, regardless of its size or complexity. I've always wanted to focus on building something unique, providing opportunities for talented minds from every corner of India to explore new technological horizons.
                  </p>
                  
                  <p>
                    Having led a team of 100 developers in the past, I know the importance of empowering people and fostering an environment where ideas grow, thrive, and make a real impact. At Arodos, we are not just building digital solutions; we are shaping the future of technology.
                  </p>
                  
                  <p>
                    Every day at Arodos is fueled by my passion for learning and my commitment to turning challenges into groundbreaking solutions. Our mission is to deliver lasting value, drive innovation, and build meaningful relationships with every client.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};