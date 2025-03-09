import React from "react";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa"; // Import arrow icon

const CookiePolicy: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
        <p className="text-gray-600 mb-6">
          Welcome to <strong>Abu Interiors</strong>! This Cookie Policy explains how we use cookies when you visit our website, 
          <a href="http://www.abuinteriors.com" className="text-blue-500 hover:underline"> www.abuinteriors.com</a>. By continuing to use our site, you consent to the use of cookies as outlined below.
        </p>

        {/* Section 1: What Are Cookies */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">1. What Are Cookies?</h2>
          <p className="text-gray-600">
            Cookies are small text files stored on your device when you visit a website. They help improve user experience by remembering preferences, improving functionality, and analyzing website traffic.
          </p>
        </section>

        {/* Section 2: Types of Cookies We Use */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Types of Cookies We Use</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li><strong>Essential Cookies:</strong> Necessary for website functionality and security.</li>
            <li><strong>Performance Cookies:</strong> Help analyze site usage to improve performance.</li>
            <li><strong>Functional Cookies:</strong> Store user preferences for a personalized experience.</li>
            <li><strong>Analytics & Advertising Cookies:</strong> Used for tracking and targeted advertising.</li>
          </ul>
        </section>

        {/* Section 3: How We Use Cookies */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">3. How We Use Cookies</h2>
          <p className="text-gray-600">
            We use cookies to ensure security, analyze website traffic, provide a personalized experience, and optimize our marketing efforts.
          </p>
        </section>

        {/* Section 4: Third-Party Cookies */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Third-Party Cookies</h2>
          <p className="text-gray-600">
            Our website may use cookies from third-party services such as Google Analytics. We recommend reviewing their respective policies.
          </p>
        </section>

        {/* Section 5: Managing Cookies */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Managing Cookies</h2>
          <p className="text-gray-600">
            You can manage or disable cookies in your browser settings. Disabling cookies may affect website functionality.
          </p>
        </section>

        {/* Section 6: Updates to This Policy */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">6. Updates to This Cookie Policy</h2>
          <p className="text-gray-600">
            We may update this policy occasionally. Any changes will be posted on this page with the latest update date.
          </p>
        </section>

        {/* Section 7: Contact Information */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">7. Contact Us</h2>
          <p className="text-gray-600">
            For any questions about this Cookie Policy, please contact us at:
          </p>
          <ul className="mt-2 text-gray-600">
            <li>📧 <strong>Email:</strong> <a href="mailto:support@abuinteriors.com" className="text-blue-500 hover:underline">support@abuinteriors.com</a></li>
            <li>📞 <strong>Phone:</strong> +91 73378 30078</li>
          </ul>
        </section>

        {/* Consent Notice */}
        <p className="text-gray-600 text-sm text-center mt-6">
          *By using our website, you consent to our use of cookies as described in this policy.*
        </p>
        <Link to="/" className="text-blue-500 hover:underline flex items-center gap-2 mt-6">
   ← Back to Home
</Link>


      </div>
    </div>
  );
};

export default CookiePolicy;
