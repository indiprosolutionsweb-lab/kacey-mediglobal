
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About us', href: '#about' },
    { name: 'Values', href: '#values' },
    { name: 'Products', href: '#products' },
    { name: 'Clients served', href: '#clients' },
    { name: 'Articles and Blogs', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Adjusted height from h-36/40 to h-24 for a much slimmer, professional sticky bar */}
        <div className="flex justify-between items-center h-24">
          
          {/* Logo Area - Maintaining maximum possible scale within the slimmer bar */}
          <div className="flex-shrink-0 flex items-center h-full">
            <a href="#home" className="block h-full py-1.5">
              <img 
                src={COMPANY_INFO.logoUrl} 
                alt={COMPANY_INFO.name} 
                className="h-full w-auto object-contain mix-blend-multiply [image-rendering:optimizeQuality] transition-transform duration-500 hover:scale-105" 
                style={{ filter: 'contrast(1.02) saturate(1.05)' }}
              />
            </a>
          </div>

          {/* Desktop Menu - Refined spacing for slim bar */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 h-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm lg:text-[15px] font-bold transition-all duration-200 whitespace-nowrap border-b-2 border-transparent hover:border-blue-600"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-slate-100 focus:outline-none transition-all"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-6 pt-4 pb-8 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-lg font-bold text-slate-800 hover:text-blue-600 hover:bg-blue-50 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
