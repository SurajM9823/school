import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary py-20 relative">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with us for inquiries, admissions, or any questions you may have.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      Lord Buddha College, Lahan-1, <br />
                      New Buspark, Siraha, Nepal
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone Numbers</h3>
                    <p className="text-gray-600">
                      9804799049, 9842911650, <br />
                      9819982733, 9705199049
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Address</h3>
                    <p className="text-gray-600">
                      info@lordbuddhacollege.edu.np <br />
                      admissions@lordbuddhacollege.edu.np
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Operating Hours</h3>
                    <p className="text-gray-600">
                      Sunday - Friday: 6:00 AM - 6:00 PM <br />
                      Saturday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-bold text-lg mb-3">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary bg-opacity-10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary bg-opacity-10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary bg-opacity-10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Location</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Visit us at our campus located in Lahan, Siraha. We're conveniently situated near the New Bus Park.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            {/* Placeholder for Google Map - In a real implementation, this would be an iframe with Google Maps */}
            <div className="bg-gray-300 h-[400px] flex items-center justify-center">
              <p className="text-gray-600">Google Map will be displayed here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Find answers to common questions about our college, programs, and admissions.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold">What are the admission requirements?</h3>
                  <span className="transition-transform duration-300 open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-5 w-5 text-gray-500">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    Admission requirements vary by program. Generally, you need to have completed SEE/SLC for bridge courses 
                    and entrance preparation programs. Specific programs may have additional requirements. Please visit our 
                    Admission page or contact our admission office for detailed information.
                  </p>
                </div>
              </details>
              
              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold">How can I apply for admission?</h3>
                  <span className="transition-transform duration-300 open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-5 w-5 text-gray-500">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    You can apply for admission by filling out our online application form on the Admission page, 
                    or by visiting our campus and submitting a physical application. Ensure that you have all the 
                    required documents ready when applying.
                  </p>
                </div>
              </details>
              
              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold">Are there any scholarships available?</h3>
                  <span className="transition-transform duration-300 open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-5 w-5 text-gray-500">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    Yes, we offer scholarships based on merit and financial need. Our scholarship test is scheduled for 
                    4th Baisakh. The scholarship amount ranges from partial to full fee waivers depending on your performance 
                    in the test and other criteria. Contact our admission office for more details.
                  </p>
                </div>
              </details>
              
              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold">How can I schedule a campus tour?</h3>
                  <span className="transition-transform duration-300 open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-5 w-5 text-gray-500">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    To schedule a campus tour, you can contact our admission office by phone or email, or fill out the 
                    contact form on this page. We conduct campus tours on weekdays between 10:00 AM and 4:00 PM, subject 
                    to prior appointment.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;