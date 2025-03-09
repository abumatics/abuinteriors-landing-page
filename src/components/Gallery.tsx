
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "/lovable-uploads/566eff23-c806-4b71-a5ba-b920e12eb75b.png",
  "/lovable-uploads/da0ca280-6684-4abd-9d97-42bea4d9c0c4.png",
  "/lovable-uploads/79e3a5e8-552a-41bd-bf33-a1e838c7b9d9.png",
  "/lovable-uploads/7a08d951-01bc-44e0-9bd6-39e85f102f49.png",
  "/lovable-uploads/0fb46e04-8600-4d28-9fd8-5ac0da2c090f.png",
  "/lovable-uploads/125678ef-f44b-4438-bc43-674e62def500.png",
  "/lovable-uploads/a95abf86-d219-4661-bf78-44fc9d6adf2e.png",
  "/lovable-uploads/a1a9c0df-e5cf-4b8b-8b86-0216e7031029.png",
  "/lovable-uploads/659d3ae0-3fd0-45dd-b2da-4efd79c970c7.png",
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<number | null>(null);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      goToNext();
    }, 5000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="relative h-[40vh] md:h-[60vh] lg:h-[70vh]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img 
              src={image} 
              alt={`Interior design showcase ${index + 1}`} 
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsAnimating(true);
              setTimeout(() => setIsAnimating(false), 500);
            }}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
