import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const AgileApproach = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="agile-approach" ref={ref} className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Title */}
          <h2 className="agile-approach-title text-center text-5xl font-bold mb-5">
            <span style={{ color: '#FF6B6B', fontStyle: 'italic' }}>Agile</span>
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
  );
};