import React from 'react';
import { INDUSTRIES_DATA } from '../constants';
import { Globe, Zap, Briefcase, GraduationCap, Shield } from 'lucide-react';

const iconMap: any = { 
  'govt': Globe, 
  'enterprise': Zap, 
  'finance': Briefcase, 
  'education': GraduationCap 
};

const Industries: React.FC = () => {
  return (
    <div className="pt-40 pb-32 px-6 min-h-screen bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {INDUSTRIES_DATA.map((industry) => {
            const Icon = iconMap[industry.id] || Shield;
            return (
              <div 
                key={industry.id} 
                className="group bg-[#0a0a0b] border border-white/5 p-10 md:p-12 hover:border-[#00adef]/20 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-14 h-14 bg-[#00adef]/10 flex items-center justify-center border border-[#00adef]/20 rounded-sm group-hover:bg-[#00adef] group-hover:text-black transition-all duration-500">
                    <Icon size={24} className="text-[#00adef] group-hover:text-black transition-colors" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase">
                    {industry.name}
                  </h2>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed font-light mb-12">
                  {industry.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-auto">
                  <div>
                    <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6">
                      PRIMARY THREATS
                    </h4>
                    <ul className="space-y-3">
                      {industry.primaryThreats.map((threat) => (
                        <li key={threat} className="flex items-start gap-3 text-sm font-medium text-gray-400">
                          <span className="text-[#00adef] mt-1">•</span>
                          {threat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6">
                      CORE SOLUTIONS
                    </h4>
                    <ul className="space-y-3">
                      {industry.coreSolutions.map((solution) => (
                        <li key={solution} className="flex items-start gap-3 text-sm font-medium text-gray-400">
                          <span className="text-[#00adef] mt-1">•</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Industries;