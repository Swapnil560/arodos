import { TestimonialSlider } from '../ui/TestimonialSlider';

export const ClientTestimonials = () => {
  return (
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
  );
};