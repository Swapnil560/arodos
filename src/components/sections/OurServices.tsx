import { ServiceCard } from '../ui/ServiceCard';

export const OurServices = () => {
  return (
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
            description="We don't just build apps- we craft user-centric, performance-driven digital experiences designed to engage, convert, and scale. 
            Every solution we create is tailored, intuitive, and built for impact, ensuring your brand stands out in the digital landscape."
            imagePlaceholder="💻"
            imageDescription="Laptop displaying webpage with hands on keyboard"
            layout="blue-left"
            imageUrl="/images/Custom Website & Mobile App.jpg"
          />
          
          <ServiceCard
            number="02"
            title="ERP, CRM & AI Solutions"
            description="Our approach to ERP, CRM, and AI is truly unique. We don't just automate workflows- we reimagine them, combining intelligence, efficiency, and security to deliver systems that think, adapt, and grow with your business. 
            Unlike conventional solutions, ours are engineered for seamless scalability and actionable insights."
            imagePlaceholder="⌨️"
            imageDescription="Workspace with code monitor"
            layout="blue-right"
            imageUrl="/images/customer first.jpg"
          />
          
          <ServiceCard
            number="03"
            title="Technology Assessment"
            description="We go beyond standard audits. Our deep-dive technology assessment uncovers hidden inefficiencies, identifies untapped opportunities, and charts a future-ready roadmap. 
            With Arodos Technologies, your tech stack becomes a strategic advantage, not just infrastructure."
            imagePlaceholder="💻"
            imageDescription="Laptop on wooden desk with water glass"
            layout="blue-left"
            imageUrl="/images/Custom Website & Mobile App.jpg"
          />
          
          <ServiceCard
            number="04"
            title="Strategic IT Planning"
            description="We create IT strategies tailored specifically to your business- no generic solutions, only plans that fit your unique goals. 
            We align technology with your vision in a way no one else does- crafting plans that accelerate growth, drive innovation, and maximize ROI. 
            Every recommendation is precise, actionable, and tailored to your unique business context."
            imagePlaceholder="⌨️"
            imageDescription="Workspace with code monitor and professional setup"
            layout="blue-right"
            imageUrl="/images/customer first.jpg"
          />
        </div>
      </div>
    </section>
  );
};