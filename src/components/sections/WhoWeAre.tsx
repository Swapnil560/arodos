import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const WhoWeAre = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="who-we-are" ref={ref} className="pt-8 pb-6 bg-gray-100">
      <div className="mx-2 md:mx-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-3 items-stretch bg-white rounded-lg shadow-lg p-3 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Left Column - Text */}
          <div className="order-2 lg:order-1 p-2 bg-gray-50 rounded-lg">
            <h2 className="text-xl md:text-3xl font-bold mb-2">
              <span className="text-red-500 italic">Who</span>
              <span className="text-black"> We Are</span>
            </h2>
            
            <div className="space-y-2 text-gray-800" style={{fontFamily: 'Jost', fontWeight: 300, fontSize: window.innerWidth < 768 ? '16px' : '20px', lineHeight: window.innerWidth < 768 ? '20px' : '24px', letterSpacing: '0%', verticalAlign: 'middle'}}>
              <p>
                Born in Assam, built with global ambition- Arodos Technologies was founded post-COVID to bring world-class digital solutions closer to home.
              </p>
              
              <p>
                Today, we partner with businesses, startups, and institutions across India, the US, Canada, and worldwide, delivering AI-driven ERP systems, custom web and mobile apps, and scalable digital services designed for growth and reliability.
              </p>
              
              <p>
                Every project- no matter its complexity or size- is crafted with precision, care, and attention to detail. This ensures that our clients receive top-notch, secure, and affordable solutions that truly transform the way they operate.
              </p>
              
              <p>
                With each partnership, we aim to make technology not just accessible, but innovative and dependable- with a commitment to delivering utmost customer satisfaction every step of the way.
              </p>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 p-2 bg-gray-50 rounded-lg">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-48 md:h-full rounded-lg shadow-lg object-cover"
            >
              <source src="/videos/2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};