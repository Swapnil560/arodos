import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ServiceCard } from '../ui/ServiceCard';
import { TestimonialSlider } from '../ui/TestimonialSlider';

export const VisionMission = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: agileRef, isVisible: agileVisible } = useScrollAnimation();

  return (
    <>
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className={`grid lg:grid-cols-2 gap-4 rounded-lg overflow-hidden shadow-lg transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Left Column - Our Vision */}
            <div className="relative p-5 flex flex-col justify-center min-h-[600px] rounded-lg overflow-hidden">
              {/* Background Video */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/our vision.mp4" type="video/mp4" />
              </video>
              
              {/* Semi-transparent overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
              
              {/* Top overlay */}
              <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-60 p-4 z-10">
                <div className="flex items-center mb-3">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                  <h3 className="text-white text-xl font-bold">Our Vision</h3>
                </div>
                <p className="text-white text-sm" style={{ lineHeight: '1.4' }}>
                  At Arodos, innovation drives us forward. We explore bold ideas and technologies, 
                  crafting impactful solutions that evolve with client needs, ensuring we always 
                  stay ahead in a fast-changing digital world.
                </p>
              </div>
            </div>
            
            {/* Right Column - Our Mission */}
            <div className="relative p-5 flex flex-col justify-center min-h-[600px] rounded-lg overflow-hidden bg-gray-800">
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
              <div className="absolute inset-0 bg-black bg-opacity-60" style={{ zIndex: 2 }}></div>
              
              {/* Top overlay */}
              <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-60 p-4" style={{ zIndex: 3 }}>
                <div className="flex items-center mb-3">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                  <h3 className="text-white text-xl font-bold">Our Mission</h3>
                </div>
                <p className="text-white text-sm" style={{ lineHeight: '1.4' }}>
                  Our clients guide every decision. We deeply understand their goals, creating 
                  custom solutions that deliver real value. As they grow and thrive, we do too — 
                  building lasting partnerships rooted in success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agile Approach Section */}
      <section id="agile-approach" ref={agileRef} className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className={`transform transition-all duration-700 ${
            agileVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Title */}
            <h2 className="agile-approach-title text-center text-5xl font-bold mb-5">
              <span style={{ color: '#FF0000', fontStyle: 'italic' }}>Agile</span>
              <span style={{ color: '#000000' }}> Approach</span>
            </h2>
            
            {/* Body Text */}
            <p className="agile-approach-text text-center mx-auto mb-5" style={{
              fontSize: '16px',
              color: '#333333',
              maxWidth: '800px',
              lineHeight: '1.6'
            }}>
              We thrive on collaboration, combining professional expertise with a problem-solving mindset. 
              Our team works seamlessly to deliver tailored, scalable solutions—ensuring quality, agility, 
              and measurable impact at every step.
            </p>
            
            {/* Three-Card Layout */}
            <div className="agile-cards-container flex justify-center gap-5" style={{ maxWidth: '1080px', margin: '0 auto' }}>
              {/* Card 1 - Customer First */}
              <div className="relative group overflow-hidden" style={{
                width: '280px',
                height: '480px',
                borderRadius: '10px',
                backgroundImage: 'url("/images/customer first.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(0, 0, 0, 0.2)',
                transform: 'perspective(1000px) translateZ(20px)',
                transition: 'all 0.3s ease-in-out'
              }}>
                {/* Bottom heading */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-bold text-center">Customer First</h3>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
                
                {/* Hover content */}
                <div className="absolute inset-0 p-5 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out z-20">
                  <h3 className="text-white text-2xl font-bold text-center mb-5" style={{ marginTop: '20px' }}>
                    1. Customer First
                  </h3>
                  <div className="flex items-center justify-center" style={{ height: '360px' }}>
                    <p className="text-white text-sm text-center" style={{ lineHeight: '1.6' }}>
                      Putting customers at the heart of everything we do to deliver value, trust, and long-term relationships.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Card 2 - Professional */}
              <div className="relative group overflow-hidden" style={{
                width: '360px',
                height: '400px',
                borderRadius: '10px',
                backgroundImage: 'url("/images/professional.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), 0 15px 30px rgba(0, 0, 0, 0.3)',
                transform: 'perspective(1000px) translateY(16px) translateZ(30px)',
                transition: 'all 0.3s ease-in-out'
              }}>
                {/* Bottom heading */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-bold text-center">Professional</h3>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
                
                {/* Hover content */}
                <div className="absolute inset-0 p-5 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out z-20">
                  <h3 className="text-white text-2xl font-bold text-center mb-5" style={{ marginTop: '20px' }}>
                    2. Professional
                  </h3>
                  <div className="flex items-center justify-center" style={{ height: '360px' }}>
                    <p className="text-white text-sm text-center" style={{ lineHeight: '1.6' }}>
                      Committed to excellence, we deliver innovative solutions backed by deep knowledge and a customer-focused approach.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Card 3 - Problem Solver */}
              <div className="relative group overflow-hidden" style={{
                width: '280px',
                height: '480px',
                borderRadius: '10px',
                backgroundImage: 'url("/images/problem solver.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(0, 0, 0, 0.2)',
                transform: 'perspective(1000px) translateZ(20px)',
                transition: 'all 0.3s ease-in-out'
              }}>
                {/* Bottom heading */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-bold text-center">Problem Solver</h3>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
                
                {/* Hover content */}
                <div className="absolute inset-0 p-5 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out z-20">
                  <h3 className="text-white text-2xl font-bold text-center mb-5" style={{ marginTop: '20px' }}>
                    3. Problem Solver
                  </h3>
                  <div className="flex items-center justify-center" style={{ height: '360px' }}>
                    <p className="text-white text-sm text-center" style={{ lineHeight: '1.6' }}>
                      Turning challenges into opportunities with smart, effective, and actionable solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-black">Our </span>
              <span className="text-red-500 italic">Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              Transforming visionary ideas into powerful, user-centric digital solutions that drive innovation, 
              enhance operational efficiency, and accelerate sustainable business growth in an ever-evolving digital landscape.
            </p>
          </div>

          {/* Service Cards */}
          <div className="max-w-5xl mx-auto">
            <ServiceCard
              number="01"
              title="Custom Website & Mobile App"
              description="Delivering a high-performance, mobile-friendly and user-centric online store to enhance customer experience, boost sales, and drive business growth for XYZ Retail Solutions."
              imagePlaceholder="💻"
              imageDescription="Laptop displaying webpage with hands on keyboard"
              layout="blue-left"
              imageUrl="/images/Custom Website & Mobile App.jpg"
            />
            
            <ServiceCard
              number="02"
              title="Custom ERP, CRM, AI Solution"
              description="We build intelligent ERP, CRM, and AI-powered systems that streamline operations, automate workflows, and provide actionable insights for data-driven decision-making."
              imagePlaceholder="⌨️"
              imageDescription="Workspace with code monitor"
              layout="blue-right"
              imageUrl="/images/customer first.jpg"
            />
            
            <ServiceCard
              number="03"
              title="Technology Assessment"
              description="Evaluating current technological capabilities to identify strengths and weaknesses, recommending improvements, and implementing solutions."
              imagePlaceholder="💻"
              imageDescription="Laptop on wooden desk with water glass"
              layout="blue-left"
              imageUrl="/images/Custom Website & Mobile App.jpg"
            />
            
            <ServiceCard
              number="04"
              title="Strategic Planning"
              description="Strategic planning in the context of consulting service aims to outline a roadmap for technology adoption or improvement, aligning IT goals with business objectives to drive growth and innovation."
              imagePlaceholder="⌨️"
              imageDescription="Workspace with code monitor and professional setup"
              layout="blue-right"
              imageUrl="/images/customer first.jpg"
            />
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-black">Our </span>
              <span className="text-red-500 italic">Clients</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed mb-12">
              We build trust through strong partnerships, blending expertise with innovation to create solutions that drive measurable success. Our approach ensures flexibility, quality, and impactful results every time.
            </p>
          </div>
          
          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Left Column - Statistics */}
            <div className="w-full lg:w-96 bg-white rounded-lg p-6 lg:p-8 shadow-lg flex items-center justify-center min-h-[300px] lg:h-[450px]">
              <div className="grid grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-12 w-full lg:w-auto">
                <div className="text-center lg:text-left">
                  <div className="text-gray-800 text-sm lg:text-lg mb-2">Brands partnered</div>
                  <div className="text-blue-600 text-2xl lg:text-3xl font-bold">35+</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-gray-800 text-sm lg:text-lg mb-2">Client satisfaction</div>
                  <div className="text-blue-600 text-2xl lg:text-3xl font-bold">98%</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-gray-800 text-sm lg:text-lg mb-2">Industries served</div>
                  <div className="text-blue-600 text-2xl lg:text-3xl font-bold">12+</div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Client Logos */}
            <div className="flex-1 bg-white rounded-lg p-6 lg:p-8 shadow-lg flex items-center justify-center min-h-[300px] lg:h-[450px]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 items-center justify-items-center w-full">
                {[
                  { name: 'YHA India', color: 'text-green-600', image: '/images/Yha.png' },
                  { name: 'Aurobindo', color: 'text-blue-600' },
                  { name: 'Aulas', color: 'text-purple-600', image: '/images/aulas.png' },
                  { name: 'Zemidi', color: 'text-red-600', image: '/images/auto.png' },
                  { name: 'Minbury', color: 'text-blue-600', image: '/images/minbury.png' },
                  { name: 'Electrower', color: 'text-blue-800', image: '/images/elect.png' },
                  { name: 'Brigosha', color: 'text-blue-600', image: '/images/brigosh.png' }
                ].map((client, index) => (
                  <div key={index} className={`w-24 h-12 lg:w-32 lg:h-16 ${client.image ? '' : 'bg-gray-100'} rounded flex items-center justify-center`}>
                    {client.image ? (
                      <img src={client.image} alt={client.name} className="max-w-full max-h-full object-contain" />
                    ) : (
                      <span className={`text-xs lg:text-sm font-semibold ${client.color}`}>{client.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Clients Say Section */}
      <section id="clients-say" className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-black">What Our </span>
              <span className="text-red-500 italic">Clients Say</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              Transforming visionary ideas into powerful, user-centric digital solutions that drive innovation, 
              enhance operational efficiency, and accelerate sustainable business growth in an ever-evolving digital landscape.
            </p>
          </div>
          
          {/* Testimonial Slider */}
          <TestimonialSlider />
        </div>
      </section>
    </>
  );

};