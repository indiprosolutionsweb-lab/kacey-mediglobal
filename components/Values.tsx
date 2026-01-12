
import React from 'react';
import { CORE_VALUES } from '../constants';
import { ShieldCheck, Briefcase, Scale, Handshake, Award, Smile } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Briefcase,
  Scale,
  Handshake,
  Award,
  Smile
};

const Values: React.FC = () => {
  return (
    <section id="values" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
            Core Values
          </h2>
          <p className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-6">
            Our Foundation of Excellence
          </p>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            These values are implemented in every aspect of the company and are combined with our deep understanding of the market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_VALUES.map((value, index) => {
            const Icon = iconMap[value.iconName];
            return (
              <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mb-4">
                  {Icon && <Icon className="h-6 w-6 text-blue-400" />}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
