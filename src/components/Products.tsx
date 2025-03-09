
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      category: "EXQUISITE",
      title: "KITCHENS",
      description: "Our kitchen designs blend functionality with stunning aesthetics, creating the perfect heart for your home.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format",
    },
    {
      category: "PERFECT MATCH",
      title: "FITTED FURNITURE",
      description: "Custom designed furniture that perfectly fits your space and complements your lifestyle.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format",
    },
    {
      category: "MODERN LIVING",
      title: "LIVING SPACES",
      description: "Transform your living areas into elegant, comfortable spaces that reflect your personal style.",
      image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=1000&auto=format",
    }
  ];

  return (
    <section id="products" className="py-24 bg-[#f8f4e4]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-serif text-center mb-6 animate-slide-up">OUR PRODUCTS</h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-16 animate-slide-up animate-delay-1">
          Discover our range of high-quality interior products designed to elevate your space
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="flex flex-col hover-scale bg-white rounded-lg overflow-hidden shadow-md animate-slide-up"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 text-xs rounded-full">
                  {product.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-bold mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>
                <a href="#gallery" className="border border-black rounded-full px-6 py-2 inline-flex items-center justify-center font-serif hover:bg-black hover:text-white transition-colors self-start">
                  EXPLORE <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16 animate-slide-up animate-delay-4">
          <a href="#gallery" className="bg-black text-white rounded-full px-10 py-3 flex items-center font-serif hover:bg-gray-800 transition-colors shadow-lg">
            VIEW ALL COLLECTIONS <ArrowRight size={18} className="ml-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
