
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';


const Services = () => {
  const services = [
    {
      title: "Wall Decoration",
      description: "We specialize in elegant wall decoration solutions, offering a range of designs and finishes to enhance your space.",
      image: "https://images.unsplash.com/photo-1615529162924-f8605388461d?q=80&w=800&auto=format"
    },
    {
      title: "Ceiling Design",
      description: "Our ceiling design services include custom designs, lighting solutions, and innovative finishes that transform your interiors.",
      image: "/lovable-uploads/in4.jpg"
    },
    {
      title: "Wall Panels",
      description: "We supply high-quality wall panels at wholesale prices, providing innovative solutions for both commercial and residential projects.",
      image: "/lovable-uploads/in3.jpg"
    },
    {
      title: "Flooring Solutions",
      description: "We offer a variety of high-quality flooring options, from hardwood to tiles, providing durability and aesthetic appeal for your project.",
      image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=800&auto=format"
    }
  ];

  return (
    <section id="services" className="py-24 bg-black text-white relative">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <h2 className="text-5xl md:text-6xl font-serif mb-4 animate-slide-up">OUR SERVICES</h2>
          <div className="flex flex-col">
            <p className="text-2xl font-serif mb-6 animate-slide-up animate-delay-1">INTERIOR EXCELLENCE</p>
            <a href="#contact" className="inline-flex items-center text-white border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors animate-slide-up animate-delay-2">
              Request Service <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`relative group hover-scale overflow-hidden animate-slide-up`}
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className="relative h-80 overflow-hidden rounded-lg mb-4 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <h3 className="text-2xl font-serif font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-200 max-w-xs">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
