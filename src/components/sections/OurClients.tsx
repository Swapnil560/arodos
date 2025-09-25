import { Card } from '../ui/Card';

export const OurClients = () => {
  return (
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
          <Card className="w-full lg:w-96 p-4 md:p-6 lg:p-8 flex items-center justify-center min-h-[200px] md:min-h-[300px] lg:h-[450px]" hover={false}>
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
          </Card>
          
          {/* Right Column - Client Logos */}
          <Card className="flex-1 p-4 md:p-6 lg:p-8 flex items-center justify-center min-h-[200px] md:min-h-[300px] lg:h-[450px]" hover={false}>
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
          </Card>
        </div>
      </div>
    </section>
  );
};