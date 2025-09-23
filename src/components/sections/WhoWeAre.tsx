import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const WhoWeAre = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gray-100">
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
                Arodos Technologies began post-COVID when our founder returned from Bengaluru to Assam, 
                determined to serve his own people with world-class tech solutions.
              </p>
              
              <p>
                We now deliver ERP, AI, and custom app development to empower businesses, startups, 
                and institutions to grow faster.
              </p>
              
              <p>
                With a client base spread across India, US and Canada, we specialize in systems that 
                handle scale, security, and smart automation.
              </p>
            </div>
            
            <div className="mt-5">
              <button className="text-blue-600 text-sm hover:underline hover:text-blue-700 transition-colors duration-300">
                Read More →
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