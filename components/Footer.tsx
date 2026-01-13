import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-neutral-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-8 md:mb-0">
          <span className="text-xl font-bold tracking-tighter text-neutral-900">Kyzerous</span>
          <p className="text-neutral-500 text-sm mt-2">© {new Date().getFullYear()} Kyzerous. All rights reserved.</p>
        </div>
        <div className="flex space-x-8 text-sm text-neutral-500">
           <Link to="/" className="hover:text-neutral-900 transition-colors">Home</Link>
           <Link to="/services" className="hover:text-neutral-900 transition-colors">Services</Link>
           <Link to="/apply" className="hover:text-neutral-900 transition-colors">Apply</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;