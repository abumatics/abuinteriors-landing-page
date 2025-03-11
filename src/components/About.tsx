
const About = () => {
  return (
    <section id="about" className="py-24 bg-[#f8f4e4] relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-serif text-center mb-16 animate-slide-up">ABOUT US</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-900 w-full aspect-square relative rounded-lg overflow-hidden shadow-xl animate-slide-up animate-delay-1">
            <img
              src="https://images.unsplash.com/photo-1544194215-541c2d3561a4?q=80&w=1200&auto=format"
              alt="About Us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-xl font-serif">SINCE 2012</p>
              <h3 className="text-3xl font-bold">Creating Exceptional Spaces</h3>
            </div>
          </div>
          
          <div className="animate-slide-up animate-delay-2">
            <h3 className="text-3xl font-serif mb-6">What We Do</h3>
            <p className="mb-8 text-lg text-gray-700">
              We specialize in creating interior spaces that reflect your personal style while being functional and comfortable. Whether it's a modern apartment, a cozy home, or a corporate office, we make it happen with our expert designs.
            </p>
            <p className="mb-8 text-lg text-gray-700">
              Our team of experienced designers and craftsmen work collaboratively to ensure every project meets our high standards of quality and aesthetics.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">10+</div>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">250+</div>
                <p className="text-sm text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">200+</div>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up animate-delay-3">
            <h3 className="text-3xl font-serif mb-6">The End Result</h3>
            <p className="text-lg text-gray-700 mb-8">
              From the first sketch to the final touches, we work hand-in-hand with our clients to ensure every detail aligns with their vision. The end result is always a space that is both beautiful and practical, a reflection of our craftsmanship and your taste.
            </p>
            <a href="#contact" className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              Get in Touch
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-4 animate-slide-up animate-delay-4">
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600&auto=format"
                alt="Our work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=600&auto=format"
                alt="Our work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
