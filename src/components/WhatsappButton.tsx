
import { useState, useEffect } from 'react';
import { FaWhatsapp } from "react-icons/fa";


const WhatsappButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <a
      href="https://wa.me/7337830078" // Replace with the actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 
        rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-500 
        hover:scale-150 hover:shadow-xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={30} className="animate-pulse-soft" />
    </a>
  );
};

export default WhatsappButton;
