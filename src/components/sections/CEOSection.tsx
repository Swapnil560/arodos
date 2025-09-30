import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const CEOSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-2 md:py-3 bg-white">
      <div className="mx-2 md:mx-4">
        <div className={`transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white rounded-lg shadow-lg p-4">
            {/* Heading */}
            <h3 className="mb-6" style={{fontFamily: 'Mona Sans Expanded', fontWeight: 500, fontStyle: 'italic', fontSize: '48px', lineHeight: '47px', letterSpacing: '-1%', textAlign: 'center', verticalAlign: 'middle'}}>
              <span style={{fontWeight: 'bold'}}>From the</span> <span style={{color: '#F40202'}}>CEO's</span> <span style={{fontWeight: 'bold'}}>Desk</span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
              {/* Left Column - CEO Content */}
              <div className="flex flex-col justify-center p-3 bg-gray-50 rounded-lg">
                <div className="text-gray-700 space-y-2" style={{fontFamily: 'Jost', fontWeight: 300, fontSize: '16px', lineHeight: '20px', letterSpacing: '0%', verticalAlign: 'middle'}}>
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
                <div className="mt-4">
                  <p className="text-lg font-bold text-gray-800">Dhruba Sarma</p>
                  <p className="text-gray-500 font-medium">Founder & CEO, Arodos Technologies</p>
                </div>
              </div>
              
              {/* Right Column - CEO Image */}
              <div className="bg-gray-50 rounded-lg overflow-hidden h-80">
                <img 
                  src="/images/Ceo.jpg" 
                  alt="Dhruba Sarma - CEO & Founder" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};