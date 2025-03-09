
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 min-h-screen flex items-center bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 md:pr-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight animate-slide-up">
              Transform Your Space
            </h1>
            <p className="text-xl text-gray-700 max-w-md animate-slide-up animate-delay-1">
              We turn ordinary spaces into extraordinary experiences through innovative interior design solutions.
            </p>
            <div className="pt-4 animate-slide-up animate-delay-2">
              <a href="#services" className="bg-red-600 text-white px-8 py-3 rounded-full inline-flex items-center hover:bg-red-700 transition-colors">
                Explore Services <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
          <div className="relative mt-10 md:mt-0 md:h-[500px] animate-slide-up animate-delay-3">
            <div className="bg-gray-300 w-full h-full rounded-lg overflow-hidden shadow-xl transform rotate-2">
              <div className="absolute inset-0 bg-black/5"></div>
              <img 
                src="/lovable-uploads/abuinteriorsoffice.jpg" 
                alt="Elegant Interior Design" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-lg overflow-hidden shadow-lg rotate-3 z-10 transform hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop" 
                alt="Interior Detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
