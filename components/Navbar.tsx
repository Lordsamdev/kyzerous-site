import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav h-20' : 'bg-white/90 backdrop-blur-sm h-24'} flex items-center`}>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="group" aria-label="Home">
          <img 
            src="assets/logo.png" 
            alt="Kyzerous" 
            className={`transition-all duration-300 ${scrolled ? 'h-8' : 'h-10'} w-auto`}
          />
        </Link>

        <div className="hidden md:flex space-x-10 items-center">
          <NavLink to="/" active={isActive('/')}>Home</NavLink>
          <NavLink to="/services" active={isActive('/services')}>Services</NavLink>
          <Link 
            to="/apply" 
            className="px-6 py-2.5 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors duration-200"
          >
            Apply
          </Link>
        </div>

        {/* Mobile Menu Icon (Simplified for this exercise) */}
        <div className="md:hidden">
          <Link to="/apply" className="text-sm font-medium border border-neutral-200 px-4 py-2 rounded-sm">
            Apply
          </Link>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ to: string; active: boolean; children: React.ReactNode }> = ({ to, active, children }) => (
  <Link 
    to={to} 
    className={`text-sm font-medium transition-colors duration-200 ${active ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900'}`}
  >
    {children}
  </Link>
);

export default Navbar;