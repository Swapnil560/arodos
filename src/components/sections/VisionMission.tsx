import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ServiceCard } from '../ui/ServiceCard';
import { TestimonialSlider } from '../ui/TestimonialSlider';

export const VisionMission = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: agileRef, isVisible: agileVisible } = useScrollAnimation();

  return (
    <>
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
            <p className="agile-approach-text text-center mx-auto mb-8 md:mb-5 px-4" style={{
              fontSize: '16px',
              color: '#333333',
              maxWidth: '800px',
              lineHeight: '1.6'
            }}>
              We thrive on collaboration, combining professional expertise with a problem-solving mindset. 
              Our team works seamlessly to deliver tailored, scalable solutions—ensuring quality, agility, 
              and measurable impact at every step.
            </p>
            
            {/* Three-Card Layout with 3D Perspective */}
            <div className="agile-cards-container flex flex-col md:flex-row justify-center gap-6 md:gap-8" style={{ 
              maxWidth: '1200px', 
              margin: '0 auto',
              perspective: '1000px'
            }}>
              {/* Card 1 - Customer First (Rotated Right) */}
              <div className="relative group overflow-hidden agile-card" style={{
                width: '320px',
                height: '480px',
                borderRadius: '10px',
                backgroundImage: 'url("/images/customer first.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                transform: 'rotateY(15deg)',
                transition: 'all 0.3s ease-in-out',
                transformStyle: 'preserve-3d'
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
              
              {/* Card 2 - Professional (Center, No Rotation) */}
              <div className="relative group overflow-hidden agile-card agile-card-center" style={{
                width: '320px',
                height: '480px',
                borderRadius: '10px',
                backgroundImage: 'url("/images/professional.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
                transform: 'rotateY(0deg) scale(1.05) translateY(30px)',
                transition: 'all 0.3s ease-in-out',
                transformStyle: 'preserve-3d',
                zIndex: 2
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
              
              {/* Card 3 - Problem Solver (Rotated Left) */}
              <div className="relative group overflow-hidden agile-card" style={{
                width: '320px',
                height: '480px',
                borderRadius: '10px',
                backgroundImage: 'url("/images/problem solver.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                transform: 'rotateY(-15deg)',
                transition: 'all 0.3s ease-in-out',
                transformStyle: 'preserve-3d'
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
      <section id="services" className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              <span className="text-black">Our </span>
              <span className="text-red-500 italic">Services</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed px-4">
              Turning your ideas into scalable, innovative digital products that deliver measurable ROI for your business.
            </p>
          </div>

          {/* Service Cards */}
          <div className="max-w-5xl mx-auto">
            <ServiceCard
              number="01"
              title="Custom Websites & Mobile Apps"
              description="We don't just build apps- we craft user-centric, performance-driven digital experiences designed to engage, convert, and scale. Every solution we create is tailored, intuitive, and built for impact, ensuring your brand stands out in the digital landscape."
              imagePlaceholder="💻"
              imageDescription="Laptop displaying webpage with hands on keyboard"
              layout="blue-left"
              imageUrl="/images/Custom Website & Mobile App.jpg"
            />
            
            <ServiceCard
              number="02"
              title="ERP, CRM & AI Solutions"
              description="Our approach to ERP, CRM, and AI is truly unique. We don't just automate workflows- we reimagine them, combining intelligence, efficiency, and security to deliver systems that think, adapt, and grow with your business. Unlike conventional solutions, ours are engineered for seamless scalability and actionable insights."
              imagePlaceholder="⌨️"
              imageDescription="Workspace with code monitor"
              layout="blue-right"
              imageUrl="/images/customer first.jpg"
            />
            
            <ServiceCard
              number="03"
              title="Technology Assessment"
              description="We go beyond standard audits. Our deep-dive technology assessment uncovers hidden inefficiencies, identifies untapped opportunities, and charts a future-ready roadmap. With Arodos Technologies, your tech stack becomes a strategic advantage, not just infrastructure."
              imagePlaceholder="💻"
              imageDescription="Laptop on wooden desk with water glass"
              layout="blue-left"
              imageUrl="/images/Custom Website & Mobile App.jpg"
            />
            
            <ServiceCard
              number="04"
              title="Strategic IT Planning"
              description="We create IT strategies tailored specifically to your business- no generic solutions, only plans that fit your unique goals. We align technology with your vision in a way no one else does- crafting plans that accelerate growth, drive innovation, and maximize ROI. Every recommendation is precise, actionable, and tailored to your unique business context."
              imagePlaceholder="⌨️"
              imageDescription="Workspace with code monitor and professional setup"
              layout="blue-right"
              imageUrl="/images/customer first.jpg"
            />
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-12 md:py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              <span className="text-black">Our </span>
              <span className="text-red-500 italic">Clients</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed mb-8 md:mb-12 px-4">
              We build trust through strong partnerships, blending expertise with innovation to create solutions that drive measurable success. Our approach ensures flexibility, quality, and impactful results every time.
            </p>
          </div>
          
          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Left Column - Statistics */}
            <div className="w-full lg:w-96 bg-white rounded-lg p-4 md:p-6 lg:p-8 shadow-lg flex items-center justify-center min-h-[200px] md:min-h-[300px] lg:h-[450px]">
              <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 md:gap-6 lg:gap-12 w-full lg:w-auto">
                <div className="text-center lg:text-left">
                  <div className="text-gray-800 text-xs md:text-sm lg:text-lg mb-1 md:mb-2">Brands partnered</div>
                  <div className="text-blue-600 text-xl md:text-2xl lg:text-3xl font-bold">35+</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-gray-800 text-xs md:text-sm lg:text-lg mb-1 md:mb-2">Client satisfaction</div>
                  <div className="text-blue-600 text-xl md:text-2xl lg:text-3xl font-bold">98%</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-gray-800 text-xs md:text-sm lg:text-lg mb-1 md:mb-2">Industries served</div>
                  <div className="text-blue-600 text-xl md:text-2xl lg:text-3xl font-bold">12+</div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Client Logos */}
            <div className="flex-1 bg-white rounded-lg p-4 md:p-6 lg:p-8 shadow-lg flex items-center justify-center min-h-[200px] md:min-h-[300px] lg:h-[450px]">
              <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-8 items-center justify-items-center w-full">
                {[
                  { name: 'YHA India', color: 'text-green-600', image: '/images/Yha.png' },
                  { name: 'Aurobindo', color: 'text-blue-600' },
                  { name: 'Aulas', color: 'text-purple-600', image: '/images/aulas.png' },
                  { name: 'Zemidi', color: 'text-red-600', image: '/images/auto.png' },
                  { name: 'Minbury', color: 'text-blue-600', image: '/images/minbury.png' },
                  { name: 'Electrower', color: 'text-blue-800', image: '/images/elect.png' },
                  { name: 'Brigosha', color: 'text-blue-600', image: '/images/brigosh.png' }
                ].map((client, index) => (
                  <div key={index} className={`w-20 h-12 md:w-32 md:h-20 lg:w-40 lg:h-24 ${client.image ? '' : (client.name === 'Aurobindo' ? '' : 'bg-gray-100')} rounded flex items-center justify-center`}>
                    {client.image ? (
                      <img src={client.image} alt={client.name} className="w-full h-full object-contain" />
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
      <section id="clients-say" className="py-12 md:py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              <span className="text-black">What Our </span>
              <span className="text-red-500 italic">Clients Say</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed px-4">
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