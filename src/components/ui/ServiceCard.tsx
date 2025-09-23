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
    <div className="bg-blue-500 p-8 flex flex-col relative">
      <div className="absolute top-6 left-6">
        <span className="text-white text-4xl font-bold">{number}</span>
        <div className="text-white text-2xl mt-1">/</div>
      </div>
      <div className="flex-1 flex flex-col justify-center mt-8">
        <h3 className="text-white text-2xl font-bold mb-4 text-center">
          {title}
        </h3>
        <p className="text-white text-base leading-relaxed text-center">
          {description}
        </p>
      </div>
    </div>
  );

  const ImageSection = (
    <div className="bg-gray-200 flex items-center justify-center" style={{
      backgroundImage: imageUrl ? `url("${imageUrl}")` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {!imageUrl && (
        <div className="text-gray-500 text-center">
          <div className="text-6xl mb-2">{imagePlaceholder}</div>
          <p className="text-sm">{imageDescription}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-8">
      <div className="grid md:grid-cols-2" style={{ height: '500px' }}>
        {isBlueLeft ? (
          <>
            {BlueSection}
            {ImageSection}
          </>
        ) : (
          <>
            {ImageSection}
            {BlueSection}
          </>
        )}
      </div>
    </div>
  );
};