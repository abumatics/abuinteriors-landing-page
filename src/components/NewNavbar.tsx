import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NewNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const leftNavItems = [
    { name: 'HOME', href: '#home' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PROJECTS', href: '#projects' },
  ];
  
  const rightNavItems = [
    { name: 'PRODUCTS', href: '#products' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'CONTACT US', href: '#contact', isButton: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {leftNavItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-red-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full relative animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Logo (centered) */}
          <div className="flex-shrink-0 animate-scale-in hover:animate-float transition-transform duration-300">
            <a href="#home" className="flex items-center">
              <img 
                src="/abu_interiors_transparent.png" 
                alt="Abu Interiors" 
                className="h-12 transition-transform hover:scale-110 duration-300"
              />
            </a>
          </div>

          {/* Right Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {rightNavItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 animate-fade-in ${
                  item.isButton 
                    ? 'bg-red-600 text-white px-6 py-2 rounded-full hover:bg-green-600 active:bg-blue-600 shadow-md hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0' 
                    : 'hover:text-red-600 after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full relative'
                }`}
                style={{ animationDelay: `${(index + leftNavItems.length) * 100}ms` }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-colors transform active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? <X size={24} className="animate-scale-in" /> : <Menu size={24} className="animate-scale-in" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md animate-slide-up">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {[...leftNavItems, ...rightNavItems].map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2 animate-fade-in ${
                  'isButton' in item && item.isButton 
                    ? 'bg-red-600 text-white hover:bg-green-600 active:bg-blue-600 hover:shadow-md' 
                    : 'text-gray-900 hover:bg-gray-50 hover:text-red-600'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default NewNavbar;
