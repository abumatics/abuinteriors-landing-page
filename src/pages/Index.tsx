
import NewNavbar from "../components/NewNavbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Products from "../components/Products";
import RealEstateProjects from "../components/RealEstateProjects";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";
import ImageGallery from "../components/ImageGallery";
import MapComponent from "../components/MapComponent";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <NewNavbar />
      <Hero />
      <Services />
      <RealEstateProjects />
      <Products />
      <About />
      <ImageGallery />
      <Contact />
      <MapComponent />
      <Footer />
      <WhatsappButton />
    
    </main>
  );
};

export default Index;
