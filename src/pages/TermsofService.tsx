import React from "react";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa"; // Import arrow icon

const TermsOfService = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Terms of Service
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Last Updated: [Insert Date]
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600">
              By accessing our website, you agree to these Terms of Service and our
              <span className="text-blue-600 cursor-pointer"> Privacy Policy</span>.
              If you do not agree, please discontinue use immediately.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              2. Services Provided
            </h2>
            <p className="text-gray-600">
              Abu Interiors offers interior design solutions, including wall decor,
              ceiling decor, and flooring services. All services are subject to
              availability and may change without notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              3. User Responsibilities
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Provide accurate and complete information when filling out forms.</li>
              <li>Use our services lawfully and refrain from harmful activities.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              4. Orders and Payments
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Prices are subject to change without notice.</li>
              <li>Payments must be made through our secure payment gateways.</li>
              <li>We reserve the right to cancel any order at our discretion.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              5. Cancellations and Refunds
            </h2>
            <p className="text-gray-600">
              Orders can be canceled within 24 hours by contacting us at +91 73378 30078.
              Refunds (if applicable) will be processed within 7-10 business days.
              Customized orders are non-refundable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              6. Intellectual Property
            </h2>
            <p className="text-gray-600">
              All content, including images, logos, and text, is the property of Abu Interiors
              and protected by copyright laws. Unauthorized use is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-600">
              Abu Interiors shall not be liable for any damages resulting from the use
              or inability to use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              8. Governing Law
            </h2>
            <p className="text-gray-600">
              These Terms are governed by the laws of India, without regard to conflict of law principles.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              9. Contact Us
            </h2>
            <p className="text-gray-600">
              If you have any questions, please contact us at:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Phone: +91 73378 30078</li>
              <li>Email: support@abuinteriors.com</li>
            </ul>
          </div>
        </div>
        {/* Back to Home Button */}
      <Link to="/" className="text-blue-500 hover:underline flex items-center gap-2 mt-6">
   ← Back to Home
</Link>
      </div>
    </section>
    
  );
};

export default TermsOfService;
