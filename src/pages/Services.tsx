import React from 'react';
import { SERVICES_DATA } from '../constants';
import { Shield, Globe, Lock, Cpu, Database, Activity, CheckCircle2, ChevronRight } from 'lucide-react';

const iconMap: any = { Shield, Globe, Lock, Cpu, Database, Activity };

const ServiceSectionLabel: React.FC<{ icon: any; label: string }> = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-4 mb-8">
    <div className="w-10 h-10 bg-[#00adef]/10 flex items-center justify-center border border-[#00adef]/20 rounded-sm">
      <Icon className="text-[#00adef]" size={20} />
    </div>
    <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">{label}</span>
  </div>
);

const Services: React.FC = () => {
  const getCategory = (id: string) => {
    switch (id) {
      case 'consulting': return 'ADVISORY';
      case 'network-security': return 'OPERATIONAL';
      case 'data-protection': return 'GOVERNANCE';
      case 'monitoring': return 'MANAGED OPS';
      case 'vulnerability': return 'RECONNAISSANCE';
      case 'zero-trust': return 'ARCHITECTURE';
      default: return 'SECURITY';
    }
  };

  const getServiceImage = (id: string) => {
    switch (id) {
      case 'consulting': return "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop";
      case 'network-security': return "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200&h=800";
      case 'data-protection': return "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop";
      case 'monitoring': return "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200&h=800";
      case 'vulnerability': return "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop";
      case 'zero-trust': return "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop";
      default: return "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop";
    }
  };

  return (
    <div className="pt-32 pb-40 px-6 min-h-screen bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <p className="text-[#00adef] font-black text-xs uppercase tracking-[0.3em] mb-6">CAPABILITIES</p>
          <h1 className="text-6xl md:text-7xl font-black text-white leading-none tracking-tighter mb-10">
            Precision Security <br />
            <span className="text-gray-500">for Modern Systems.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
            From deep-packet network inspection to high-level strategic governance, our services are 
            modular, scalable, and designed for rigorous regulatory environments.
          </p>
        </div>

        <div className="space-y-48">
          {SERVICES_DATA.map((service, index) => {
            const Icon = (iconMap[service.icon] as any) || Shield;
            const isEven = index % 2 === 0;
            const category = getCategory(service.id);
            const image = getServiceImage(service.id);

            return (
              <div 
                key={service.id}
                className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 space-y-10">
                  <div>
                    <ServiceSectionLabel icon={Icon} label={category} />
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-400 text-lg leading-relaxed font-light">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <div>
                      <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        TECHNICAL FOCUS
                        <div className="flex-grow h-px bg-white/10"></div>
                      </h4>
                      <ul className="space-y-4">
                        {service.outcomes.map((outcome) => (
                          <li key={outcome} className="flex items-start gap-3 text-gray-500 text-sm font-medium">
                            <ChevronRight size={14} className="text-[#00adef] mt-1 flex-shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        OUTCOMES
                        <div className="flex-grow h-px bg-white/10"></div>
                      </h4>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-gray-500 text-sm font-medium">
                          <CheckCircle2 size={16} className="text-[#00adef] mt-0.5 flex-shrink-0" />
                          Reduced attack surface
                        </li>
                        <li className="flex items-start gap-3 text-gray-500 text-sm font-medium">
                          <CheckCircle2 size={16} className="text-[#00adef] mt-0.5 flex-shrink-0" />
                          Regulatory posture improvement
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex-1 w-full lg:w-1/2">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-white/5 shadow-2xl">
                    <img 
                      src={image} 
                      alt={service.title} 
                      className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
                    />
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

export default Services;