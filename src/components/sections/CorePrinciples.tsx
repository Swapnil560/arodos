import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const CorePrinciples = () => {
  const { ref, isVisible } = useScrollAnimation();

  const principles = [
    {
      number: "1",
      title: "Client-Centric Approach",
      description: "We put your goals at the heart of every solution, delivering experiences that exceed expectations."
    },
    {
      number: "2", 
      title: "Professional Excellence",
      description: "Every solution is crafted by skilled professionals, combining creativity, precision, and technical expertise."
    },
    {
      number: "3",
      title: "Innovation & Impact", 
      description: "We transform challenges into opportunities, delivering smarter, faster, and innovative solutions."
    },
    {
      number: "4",
      title: "Quality & Assurance",
      description: "Each project is built to be secure, scalable, and future-ready, maintaining the highest quality standards."
    },
    {
      number: "5",
      title: "Affordable & Transparent",
      description: "We deliver high-performance digital solutions without compromising on cost or clarity, making technology accessible for all."
    }
  ];

  return (
    <section ref={ref} className="py-12 md:py-20" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Title */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-black">5 Core Principles that Keep </span>
              <span className="text-red-500 italic">Arodos Ahead!</span>
            </h2>
          </div>
          
          {/* Principles Layout */}
          <div className="space-y-6">
            {/* First Row - Cards 1 & 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {principles.slice(0, 2).map((principle, index) => (
                <div key={index} className="group bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 border border-blue-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg ring-2 ring-gray-300 ring-opacity-50 group-hover:scale-110 transition-transform duration-300">
                      {principle.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second Row - Card 3 (Center) */}
            <div className="flex justify-center">
              <div className="group bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 border border-indigo-100 max-w-2xl w-full">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg ring-2 ring-gray-300 ring-opacity-50 group-hover:scale-110 transition-transform duration-300">
                    {principles[2].number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {principles[2].title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {principles[2].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Third Row - Cards 4 & 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {principles.slice(3, 5).map((principle, index) => (
                <div key={index + 3} className="group bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 border border-blue-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg ring-2 ring-gray-300 ring-opacity-50 group-hover:scale-110 transition-transform duration-300">
                      {principle.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};