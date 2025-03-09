
import { ArrowRight } from 'lucide-react';

const RealEstateProjects = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 order-2 md:order-1">
            <div className="relative">
              <div className="relative transform rotate-2 overflow-hidden rounded-lg shadow-2xl h-[400px] md:h-[500px] animate-slide-up">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format"
                  alt="Real estate project"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary text-white p-4 rounded-lg shadow-lg z-10 animate-slide-up animate-delay-2">
                <p className="font-serif text-lg">PREMIUM DESIGN</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-6 order-1 md:order-2 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif transform -rotate-3 mb-8 animate-slide-up">
              REAL ESTATE
              <br />
              PROJECT DESIGN
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg animate-slide-up animate-delay-1">
              Our real estate design projects blend aesthetics with functionality, 
              creating spaces that captivate and inspire. From concept to completion, 
              we transform properties into extraordinary living environments.
            </p>
            <a href="#gallery" className="bg-white text-black rounded-full px-8 py-3 inline-flex items-center font-serif hover:bg-gray-200 transition-colors animate-slide-up animate-delay-2">
              View Projects <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
          
          <div className="md:col-span-5 order-3 mt-12 md:mt-0">
            <div className="relative transform -rotate-3 overflow-hidden rounded-lg shadow-2xl h-[300px] animate-slide-up animate-delay-3">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format"
                alt="Real estate project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
          
          <div className="md:col-span-7 order-4 md:pl-12">
            <p className="text-xl text-gray-300 font-serif animate-slide-up animate-delay-4">
              "We believe that exceptional design can transform not just spaces, but the way people live, work and interact with their environment."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstateProjects;
