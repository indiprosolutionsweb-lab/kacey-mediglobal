
import React from 'react';

interface Location {
  id: string;
  name: string;
  top: string;
  left: string;
}

const locations: Location[] = [
  { id: 'by', name: 'Belarus', top: '20.5%', left: '57.6%' },
  { id: 'bi', name: 'Burundi', top: '51.8%', left: '58.3%' },
  { id: 'kh', name: 'Cambodia', top: '43.1%', left: '79.1%' },
  { id: 'et', name: 'Ethiopia', top: '46.2%', left: '61.2%' },
  { id: 'in', name: 'India', top: '38.6%', left: '71.9%' },
  { id: 'id', name: 'Indonesia', top: '52.5%', left: '82.2%' },
  { id: 'kz', name: 'Kazakhstan', top: '23.3%', left: '68.3%' },
  { id: 'ke', name: 'Kenya', top: '49.4%', left: '60.6%' },
  { id: 'mm', name: 'Myanmar', top: '38.3%', left: '76.7%' },
  { id: 'np', name: 'Nepal', top: '36.8%', left: '73.5%' },
  { id: 'ng', name: 'Nigeria', top: '44.4%', left: '52.2%' },
  { id: 'ru', name: 'Russia', top: '16.7%', left: '77.8%' },
  { id: 'za', name: 'South Africa', top: '66.7%', left: '56.7%' },
  { id: 'lk', name: 'Sri Lanka', top: '45.1%', left: '72.8%' },
  { id: 'tz', name: 'Tanzania', top: '53.3%', left: '59.7%' },
  { id: 'ug', name: 'Uganda', top: '49.4%', left: '58.9%' },
  { id: 'vn', name: 'Vietnam', top: '42.2%', left: '79.9%' },
  { id: 'zm', name: 'Zambia', top: '57.3%', left: '57.7%' },
];

const GlobalReach: React.FC = () => {
  return (
    <section id="clients" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-blue-500 font-semibold tracking-widest uppercase text-sm">Global Footprint</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">Clients Served Worldwide</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Delivering excellence in medical technology to healthcare providers across Asia, Africa, and beyond.
          </p>
        </div>

        <div className="relative w-full aspect-[2/1] bg-slate-800/50 rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden backdrop-blur-sm">
          {/* World Map Image - Optimized with smaller size and modern format */}
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Blue_Marble_2002.png/1280px-Blue_Marble_2002.png" 
            alt="World Map" 
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

          {locations.map((loc) => (
            <div 
              key={loc.id}
              className="absolute group"
              style={{ top: loc.top, left: loc.left }}
            >
              <div className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
                <span className="absolute inline-flex h-4 w-4 rounded-full bg-blue-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 border-2 border-white shadow-lg"></span>
                
                <div className="absolute bottom-full mb-2 hidden group-hover:block whitespace-nowrap z-20">
                  <div className="bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded shadow-lg transform -translate-x-1/2 left-1/2">
                    {loc.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-white"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {locations.sort((a, b) => a.name.localeCompare(b.name)).map((loc) => (
            <div key={loc.id} className="flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-full border border-slate-700 hover:border-blue-500 transition-colors cursor-default">
              <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-300">{loc.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
