import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    // ✅ Validate Email Format (Only @gmail.com Allowed)
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email!",
        description: "Please enter a valid @gmail.com address.",
      });
      setIsSubmitting(false);
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        toast({
          title: "Failed!",
          description: data.message,
        });
      }
    } catch (error) {
      console.error("Email Sending Error:", error);
      toast({
        title: "Error!",
        description: "Something went wrong!",
      });
    }
    setIsSubmitting(false);
  };
  
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 7337830078",
      link: "tel:+91 7337830078"
    },
    {
      icon: Mail,
      title: "Email",
      content: "sales@abuinteriors.com",
      link: "mailto:sales@abuinteriors.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Abu Interiors, Moulana Azad Road, Asiya Trade Center, Bhatkal - 581 320",
      link: "https://maps.app.goo.gl/CaaQKY9nuRUN7Wd47"
    }
  ];

  return (
    <section id="contact" className="bg-[#f8f4e4] pt-24 pb-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif mb-6 flex items-center animate-slide-up">
            CONTACT <div className="mx-4 bg-black text-white rounded-full p-2"><ArrowRight size={24} /></div> US
          </h2>
          <p className="text-gray-700 max-w-xl text-center animate-slide-up animate-delay-1">
            We'd love to hear from you. Get in touch with our team for consultations, inquiries, or to schedule a meeting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2 animate-slide-up animate-delay-2">
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-serif mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.link}
                    className="flex items-start hover:text-red-600 transition-colors"
                  >
                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-12">
                <h4 className="font-medium mb-4">Working Hours</h4>
                <div className="flex justify-between text-gray-600">
                  <span>Monday - Thursday:</span>
                  <span>10:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Friday:</span>
                  <span>3:00 PM - 9:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Saturday - Sunday:</span>
                  <span>10:00 AM - 9:00 PM</span>
                </div>
              
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 animate-slide-up animate-delay-3">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-serif mb-6">Send a Message</h3>
             <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div>
    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
    <input
      type="text"
      id="firstName"
      name="firstName"
      value={formData.firstName}
      onChange={handleChange}
      required
      pattern="[A-Za-z\s]+"
      title="Only letters are allowed"
      className="w-full px-4 py-3 bg-gray-100 rounded-lg border-none focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
      placeholder="Your first name"
    />
  </div>
  
  <div>
    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
    <input
      type="text"
      id="lastName"
      name="lastName"
      value={formData.lastName}
      onChange={handleChange}
      required
      pattern="[A-Za-z\s]+"
      title="Only letters are allowed"
      className="w-full px-4 py-3 bg-gray-100 rounded-lg border-none focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
      placeholder="Your last name"
    />
  </div>

  <div>
    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
    <input
      type="tel"
      id="phone"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      required
      pattern="\d{10}"
      inputMode="numeric"
      title="Please enter a valid 10-digit phone number"
      className="w-full px-4 py-3 bg-gray-100 rounded-lg border-none focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
      placeholder="Your phone number"
    />
  </div>

  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
      pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
      title="Email must be a valid @gmail.com address"
      className="w-full px-4 py-3 bg-gray-100 rounded-lg border-none focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
      placeholder="Your email address"
    />
  </div>

  <div className="md:col-span-2">
    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
    <textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      required
      rows={5}
      className="w-full px-4 py-3 bg-gray-100 rounded-lg border-none focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
      placeholder="Tell us about your project..."
    />
  </div>

  <div className="md:col-span-2 flex justify-end mt-4">
    <button
      type="submit"
      disabled={isSubmitting}
      className="px-10 py-3 rounded-lg bg-red-600 text-white font-medium transition-colors hover:bg-red-700 shadow-md disabled:opacity-70"
    >
      {isSubmitting ? 'Sending...' : 'Send Message'}
    </button>
  </div>
</form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
