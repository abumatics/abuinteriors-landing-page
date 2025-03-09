import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    alt: "Modern living room with minimalist furniture",
    title: "Modern Living Space",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    alt: "Contemporary kitchen with wooden elements",
    title: "Elegant Kitchen Design",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    alt: "Minimalist bedroom with natural light",
    title: "Serene Bedroom",
  },
  {
    id: 4,
    src: "/lovable-uploads/in2.jpg",
    alt: "Interior design project",
    title: "Custom Interior",
  },
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  // 🟢 Intersection Observer for Animation
  const observeElements = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (sliderRef.current) observer.observe(sliderRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    observeElements();
  }, [observeElements]);

  // 🟢 Auto-Slide (Disabled in Fullscreen Mode)
  useEffect(() => {
    if (!isFullscreen) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isFullscreen]);

  // 🟢 Navigation Functions
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  // 🟢 Fullscreen Functions
  const openFullscreen = (index) => {
    setCurrentIndex(index);
    setIsFullscreen(true);
    document.body.style.overflow = "hidden"; // Prevent Scroll
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = "auto"; // Restore Scroll
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isFullscreen) return;
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "Escape") closeFullscreen();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-12 opacity-0">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle mx-auto">Explore our completed projects and transformations.</p>
        </div>

        {/* 🟢 Image Slider */}
        <div ref={sliderRef} className="relative max-w-6xl mx-auto opacity-0">
          <div className="relative overflow-hidden rounded-xl shadow-xl h-[400px]">
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-xl font-medium">{galleryImages[currentIndex].title}</h3>
            </div>
          </div>

          {/* 🟢 Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* 🟢 Thumbnail Preview */}
          <div className="flex justify-center gap-2 mt-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => openFullscreen(index)}
                className={`cursor-pointer overflow-hidden rounded-md ${currentIndex === index ? "ring-2 ring-primary" : ""}`}
              >
                <img src={image.src} alt={image.alt} className="w-24 h-16 object-cover rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🟢 Fullscreen View */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <button onClick={closeFullscreen} className="absolute top-4 right-4 text-white">
            <X size={32} />
          </button>
          <button onClick={prevSlide} className="absolute left-4 top-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full">
            <ChevronLeft size={32} />
          </button>
          <img src={galleryImages[currentIndex].src} alt={galleryImages[currentIndex].alt} className="max-h-screen max-w-screen-lg object-contain" />
          <button onClick={nextSlide} className="absolute right-4 top-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full">
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
