const MapComponent = () => {
    return (
      <div className="h-96 w-full relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.4958252950264!2d74.55264127493716!3d13.988588786428462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc437622eb363f%3A0x4168da5571323ac0!2sAbu%20Interiors!5e0!3m2!1sen!2sin!4v1741177425924!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Abu Interiors location"
        ></iframe>
      </div>
    );
  };
  
  export default MapComponent;
  