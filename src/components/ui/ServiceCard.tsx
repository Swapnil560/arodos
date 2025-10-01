interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  imagePlaceholder: string;
  imageDescription: string;
  layout: 'blue-left' | 'blue-right';
  imageUrl?: string;
}

export const ServiceCard = ({ 
  number, 
  title, 
  description, 
  imagePlaceholder, 
  imageDescription, 
  layout,
  imageUrl 
}: ServiceCardProps) => {
  const isBlueLeft = layout === 'blue-left';
  
  const BlueSection = (
    <div className="p-4 md:p-6 flex flex-col relative min-h-[250px] md:min-h-[350px]" style={{ backgroundColor: '#EAEAEA' }}>
      <div className="absolute top-3 left-3 md:top-4 md:left-4">
        <span className="drop-shadow-lg" style={{ color: '#F40202', fontFamily: 'Mona Sans Expanded', fontWeight: 300, fontStyle: 'Light', fontSize: '64px', lineHeight: '28px', letterSpacing: '-1%', verticalAlign: 'middle' }}>{number}</span>
      </div>
      <div className="flex-1 flex flex-col justify-center mt-2 md:mt-4 px-2 py-1">
        <h3 className="text-black mb-1 md:mb-2 text-left drop-shadow-md" style={{ fontFamily: 'Mona Sans Expanded', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '26px', lineHeight: '28px', letterSpacing: '-1%', verticalAlign: 'middle' }}>
          {title}
        </h3>
        <p className="text-gray-600 text-xs md:text-sm lg:text-base text-left overflow-hidden drop-shadow-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );

  const ImageSection = (
    <div className="bg-white/30 backdrop-blur-sm flex items-center justify-center p-3 md:p-6 min-h-[150px] md:min-h-[350px] relative overflow-hidden" style={{
      backgroundImage: imageUrl ? `url("${imageUrl}")` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
      {!imageUrl && (
        <div className="text-red-600/90 text-center z-10">
          <div className="text-2xl md:text-5xl mb-2 drop-shadow-lg">{imagePlaceholder}</div>
          <p className="text-xs md:text-sm drop-shadow-md">{imageDescription}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="rounded-xl shadow-xl overflow-hidden mt-4 md:mt-6 border border-white/30" style={{ backgroundColor: '#EAEAEA' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[300px] md:h-[350px]">
        {isBlueLeft ? (
          <>
            {BlueSection}
            {ImageSection}
          </>
        ) : (
          <>
            <div className="order-2 md:order-1">{ImageSection}</div>
            <div className="order-1 md:order-2">{BlueSection}</div>
          </>
        )}
      </div>
    </div>
  );
};