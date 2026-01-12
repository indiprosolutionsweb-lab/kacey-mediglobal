import React from 'react';
import { COMPANY_INFO } from '../constants';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-slate-900 h-[600px] overflow-hidden">
      {/* Background Image with Overlay - Optimized URL for LCP */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=75&fm=webp"
          alt="Medical Technology"
          className="w-full h-full object-cover opacity-40"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-blue-400 border border-blue-500/30 bg-blue-900/20 mb-6">
            <span className="mr-2 h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            Innovating Healthcare
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
            {COMPANY_INFO.tagline}
            <span className="block text-blue-500 mt-2">Across The Globe</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
            Connecting Indian manufacturing excellence with global healthcare needs. 
            We provide world-class orthopedic implants, surgical instruments, and hospital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30"
            >
              Explore Products
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-500 text-base font-medium rounded-md text-slate-200 hover:bg-slate-800 hover:text-white transition-all"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;