import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, BookOpen, GraduationCap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Admission', path: '/admission' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Notice Board', path: '/notice-board' },
    { name: 'News & Events', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap size={32} className="text-primary" />
            <div>
              <div className="text-xl font-bold text-primary">Lord Buddha College</div>
              <div className="text-xs text-gray-600">& Success Institute</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-primary bg-primary bg-opacity-10'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/student-portal"
              className="ml-2 btn btn-primary"
            >
              Student Portal
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100"
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <BookOpen size={24} className="text-primary" />
            <span className="text-lg font-bold text-primary">Lord Buddha College</span>
          </Link>
          <button
            onClick={closeMenu}
            className="p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100"
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-4 space-y-2 overflow-y-auto h-full pb-32">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-md font-medium ${
                  isActive
                    ? 'text-primary bg-primary bg-opacity-10'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                }`
              }
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/student-portal"
            className="block w-full mt-4 btn btn-primary"
            onClick={closeMenu}
          >
            Student Portal
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;