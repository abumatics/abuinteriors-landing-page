import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/15a96Y8Rdt/" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/abu.interiors?igsh=cTRyZTJ2bzcyZ3I4" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/abu-interiors/" },
    { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/7337830078" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Products", href: "#products" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ];

  const services = [
    "Wall Decoration",
    "Ceiling Design",
    "Wall Panels",
    "Flooring Solutions",
    "Interior Consultation",
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 7337830078",
      link: "tel:+91 7337830078",
    },
    {
      icon: Mail,
      title: "Email",
      content: "sales@abuinteriors.com",
      link: "mailto:sales@abuinteriors.com",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Abu Interiors, Moulana Azad Road, Asiya Trade Center, Bhatkal - 581 320",
      link: "https://maps.app.goo.gl/CaaQKY9nuRUN7Wd47",
    },
  ];

  return (
    <footer className="bg-[#11142A] text-white">
      <div className="container mx-auto px-4">
        <div className="pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <img src="/abu_interiors_transparent.png" alt="Abu Interiors" className="h-16 brightness-0 invert mb-6" />
              <p className="text-gray-400 mb-8 max-w-md">
                Abu Interiors transforms ordinary spaces into extraordinary experiences through innovative design solutions.
              </p>
              <div className="flex items-center space-x-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-red-600 transition-colors p-3 rounded-full"
                    aria-label={link.label}
                  >
                    <link.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2 md:col-start-6">
              <h3 className="text-xl font-medium mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-3">
              <h3 className="text-xl font-medium mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-3">
              <h3 className="text-xl font-medium mb-6">Contact Info</h3>
              <ul className="space-y-4">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <item.icon size={18} className="mt-1 mr-3 text-gray-400" />
                    <a href={item.link} className="text-gray-400 hover:text-white transition-colors">
                      {item.content}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="py-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Abumatics. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-gray-500 text-sm">
            <a href="/PrivacyPolicy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/TermsOfService" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/CookiePolicy" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
