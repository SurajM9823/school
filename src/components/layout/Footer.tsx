import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Youtube, 
  Clock, 
  GraduationCap 
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-accent text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap size={28} className="text-secondary" />
              <div>
                <h4 className="text-lg font-bold text-white">Lord Buddha College</h4>
                <p className="text-xs text-gray-300">& Success Institute</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Dedicated to providing quality education and preparing students for a successful future through comprehensive
              learning programs and experienced faculty.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-secondary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-secondary transition-colors">
                  Courses & Programs
                </Link>
              </li>
              <li>
                <Link to="/admission" className="text-gray-300 hover:text-secondary transition-colors">
                  Admission
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-gray-300 hover:text-secondary transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/notice-board" className="text-gray-300 hover:text-secondary transition-colors">
                  Notice Board
                </Link>
              </li>
              <li>
                <Link to="/student-portal" className="text-gray-300 hover:text-secondary transition-colors">
                  Student Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Our Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-secondary transition-colors">
                  A Level Bridge Course
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-secondary transition-colors">
                  +2 Science & Management
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-secondary transition-colors">
                  Engineering Diploma Prep
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-secondary transition-colors">
                  Pharmacy Entrance
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-secondary transition-colors">
                  Staff Nurse Preparation
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-secondary transition-colors">
                  Scholarship Test
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-secondary flex-shrink-0 mt-1" />
                <span className="text-gray-300">Lord Buddha College, Lahan-1, New Buspark, Siraha</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-secondary flex-shrink-0" />
                <div className="text-gray-300">
                  <div>9804799049, 9842911650</div>
                  <div>9819982733, 9705199049</div>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-secondary flex-shrink-0" />
                <span className="text-gray-300">info@lordbuddhacollege.edu.np</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={20} className="text-secondary flex-shrink-0" />
                <span className="text-gray-300">Sun-Fri: 6:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-accent-dark py-4">
        <div className="container text-center text-gray-400 text-sm">
          <p>© {currentYear} Lord Buddha College & Success Institute. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;