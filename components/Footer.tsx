import React from 'react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12 border-b border-slate-800 pb-12">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Kacey Mediglobal</h3>
            <p className="text-slate-400 text-sm mb-6">
              {COMPANY_INFO.tagline}. Inspiring hope, together.
            </p>
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Kacey Mediglobal (OPC) Pvt. Ltd.<br />
              All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Our Products</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
             <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
             <p className="text-slate-400 text-sm leading-relaxed">
               The products listed are for professional medical use. 
               Images are for representation purposes only. 
               Trademarks belong to their respective owners.
             </p>
          </div>
        </div>

        <div className="text-center text-slate-600 text-xs">
          <p>Designed for Kacey Mediglobal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;