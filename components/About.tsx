
import React from 'react';
import { Target, TrendingUp, Users, Globe, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-indigo-50 blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Intro Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-blue-50 rounded-full mb-6 border border-blue-100 shadow-sm">
            <Users className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-sm font-bold text-blue-700 uppercase tracking-wider">About The Company</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
            Connecting Global Healthcare
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-slate-600 space-y-6 leading-relaxed">
            <p>
              <span className="font-semibold text-slate-900">Kacey Mediglobal (OPC) Pvt. Ltd.</span>, founded in 2020, represents the synergy of leading medical device manufacturers united by a vision to elevate healthcare solutions globally.
            </p>
            <p>
              Headquartered in <span className="text-blue-600 font-medium">Mumbai, India</span>, we serve as a vital bridge, trading premium medical consumables, surgical implants, and equipment to markets across African Continent, Eurasia, Southeast Asia, and SAARC nations.
            </p>
          </div>
        </div>

        {/* Mission & Vision Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Mission Card */}
          <div className="group relative h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Background Image - Optimized with WebP and Lazy Loading */}
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=75&fm=webp" 
                alt="Corporate Team Accomplishing Mission Together" 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/80 to-blue-900/30 opacity-90 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
              <div>
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Our Mission</h3>
                <div className="h-1 w-12 bg-blue-400 rounded-full"></div>
              </div>

              <div>
                <blockquote className="text-xl font-medium text-blue-100 italic mb-6">
                  "Together We Serve"
                </blockquote>
                <p className="text-slate-100 text-lg leading-relaxed mb-6 opacity-95">
                  To establish a robust connection between Indian manufacturing excellence and the global healthcare community. We are dedicated to delivering innovative, world-class products that enhance patient care worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Background Image - Optimized with WebP and Lazy Loading */}
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=75&fm=webp" 
                alt="Global Connection" 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-indigo-900/30 opacity-90 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
              <div>
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Our Vision</h3>
                <div className="h-1 w-12 bg-indigo-400 rounded-full"></div>
              </div>

              <div>
                <p className="text-slate-100 text-lg leading-relaxed mb-6 opacity-95">
                  To achieve <span className="text-white font-semibold">exponential growth</span> and position Indian medical technology on the global platform. We aim to inspire hope by adding tangible value to the wider community through accessible, high-quality healthcare solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;