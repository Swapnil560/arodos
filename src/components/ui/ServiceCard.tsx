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
    <div className="bg-gradient-to-b from-blue-500 to-blue-300 p-6 md:p-8 flex flex-col relative min-h-[300px] md:min-h-[500px]">
      <div className="absolute top-4 left-4 md:top-6 md:left-6">
        <span className="text-white text-xl md:text-4xl font-bold">{number}</span>
        <div className="text-white text-base md:text-2xl mt-1">/</div>
      </div>
      <div className="flex-1 flex flex-col justify-center mt-8 md:mt-8">
        <h3 className="text-white text-base md:text-2xl font-bold mb-3 md:mb-4 text-center px-2">
          {title}
        </h3>
        <p className="text-white text-xs md:text-base leading-relaxed text-center px-2">
          {description}
        </p>
      </div>
    </div>
  );

  const ImageSection = (
    <div className="bg-gray-200 flex items-center justify-center p-4 md:p-8 min-h-[200px] md:min-h-[500px]" style={{
      backgroundImage: imageUrl ? `url("${imageUrl}")` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {!imageUrl && (
        <div className="text-gray-500 text-center">
          <div className="text-3xl md:text-6xl mb-2">{imagePlaceholder}</div>
          <p className="text-xs md:text-sm">{imageDescription}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-6 md:mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px] md:h-[500px]">
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