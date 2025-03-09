import React from "react";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa"; // Import arrow icon

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12 border border-gray-300">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center uppercase">Privacy Policy</h1>
        <p className="text-gray-600 text-center mb-6">
          Effective Date: <strong>March 2025</strong>
        </p>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Welcome to <strong>Abu Interiors</strong>. Your privacy is of utmost importance to us. This Privacy Policy
          outlines how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg">
          <li><strong>Personal Information:</strong> Name, email, phone number, and address when you contact us.</li>
          <li><strong>Payment Details:</strong> Securely processed via third-party providers.</li>
          <li><strong>Non-Personal Information:</strong> Browser type, device details, and website interaction data.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg">
          <li>To provide and improve our services.</li>
          <li>To process transactions and fulfill orders.</li>
          <li>To send updates, promotions, and service-related communications.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. How We Protect Your Information</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg">
          <li>SSL encryption for secure data transmission.</li>
          <li>Restricted access to personal data.</li>
          <li>Regular security audits and monitoring.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Sharing Your Information</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          We <strong>do not sell</strong> your personal information. However, we may share data with service providers (e.g., payment processors) or as required by law.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Cookies and Tracking Technologies</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Our website uses cookies to enhance your experience. You may adjust cookie settings via your browser.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Your Privacy Rights</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg">
          <li>Request access or corrections to your data.</li>
          <li>Unsubscribe from marketing communications.</li>
          <li>Request data deletion where legally applicable.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. Third-Party Links</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Our website may contain links to third-party sites. We are not responsible for their privacy policies.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">8. Changes to This Policy</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">9. Contact Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          If you have any questions, please contact us at:
        </p>
        <p className="text-gray-700 text-lg mt-2"><strong>Email:</strong> support@abuinteriors.com</p>
        <p className="text-gray-700 text-lg"><strong>Phone:</strong> +91 73378 30078</p>
        
        <p className="text-gray-700 text-lg leading-relaxed text-center mt-8 font-semibold">
          By using our website, you agree to this Privacy Policy.
        </p>
        {/* Back to Home Button */}
      <Link to="/" className="text-blue-500 hover:underline flex items-center gap-2 mt-6">
   ← Back to Home
</Link>
      </div>
   
      
    </div>
    
  );
};

export default PrivacyPolicy;
