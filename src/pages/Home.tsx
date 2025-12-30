import React from 'react';
import ScannerAnimation from '../components/ScannerAnimation';
import { ChevronRight, Lock, Cpu, Activity, ShieldCheck, ArrowRight, Zap, Network, Cloud, Shield } from 'lucide-react';

const Home: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505] px-6">
        {/* Background Network Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Global Network Grid"
            className="w-full h-full object-cover opacity-20 scale-105"
          />
          {/* Overlay layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] opacity-60" />
          {/* Cyber Overlay Effect */}
          <div className="absolute inset-0 bg-[#050505]/40 backdrop-blur-[2px]" />
        </div>

        {/* Scanning Animation Layer */}
        <ScannerAnimation />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center pt-20 flex-grow flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00adef]/10 border border-[#00adef]/20 text-[#00adef] text-xs font-bold uppercase tracking-widest mb-8 animate-pulse shadow-[0_0_15px_rgba(0,173,239,0.2)] mx-auto">
             <div className="w-1.5 h-1.5 rounded-full bg-[#00adef] animate-ping"></div>
             Mission-Critical Resilience
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 tracking-tighter uppercase">
            Securing your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00adef] to-[#00adef] drop-shadow-[0_0_30px_rgba(0,173,239,0.3)]">
              Digital Assets
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            EagleEye Cyber Technologies provides sovereign-grade protection for government, 
            enterprise, and regulated global industries. Zero Trust. Zero Compromise.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button 
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-10 py-5 bg-[#00adef] text-black font-black uppercase text-sm tracking-widest rounded-sm transform transition hover:scale-105 hover:bg-[#33beff] active:scale-95 shadow-[0_0_30px_rgba(0,173,239,0.4)]"
            >
              Request Threat Assessment
            </button>
            <button 
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white font-bold uppercase text-sm tracking-widest rounded-sm hover:bg-white/5 hover:border-white/40 transition backdrop-blur-sm"
            >
              Explore Solutions
            </button>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="relative z-10 w-full max-w-5xl mx-auto pb-16 px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-y border-white/10 py-10">
            <div className="space-y-1">
              <p className="text-[10px] font-black text-[#00adef] uppercase tracking-widest opacity-90">Uptime Reliability</p>
              <p className="text-2xl md:text-3xl font-black text-white tracking-tighter">99.99%</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black text-[#00adef] uppercase tracking-widest opacity-90">Threats Blocked Monthly</p>
              <p className="text-2xl md:text-3xl font-black text-white tracking-tighter">25K+</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black text-[#00adef] uppercase tracking-widest opacity-90">Incident Response Time</p>
              <p className="text-2xl md:text-3xl font-black text-white tracking-tighter">&lt; 15m</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black text-[#00adef] uppercase tracking-widest opacity-90">Compliance Grade</p>
              <p className="text-2xl md:text-3xl font-black text-white tracking-tighter">FISMA High</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
           <div className="w-px h-6 bg-gradient-to-b from-[#00adef] to-transparent"></div>
        </div>
      </section>

      {/* 01-CAPABILITIES SECTION */}
      <section className="py-32 bg-[#050505] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <p className="text-[#00adef] font-black text-xs uppercase tracking-[0.3em] mb-4">01-CAPABILITIES</p>
              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase">
                <span className="bg-[#00adef] px-3 py-1 inline-block text-black">Full-Spectrum</span><br />Cybersecurity Operations
              </h2>
            </div>
            <button 
              onClick={() => onNavigate('services')}
              className="text-gray-500 font-bold uppercase text-xs tracking-[0.2em] flex items-center gap-2 group hover:text-[#00adef] transition-all mb-4"
            >
              View all capabilities <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-[#0a0a0b] border border-white/5 hover:border-[#00adef]/40 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Shield size={80} />
              </div>
              <div className="w-12 h-12 bg-[#00adef]/10 rounded-sm flex items-center justify-center mb-10 group-hover:bg-[#00adef] transition-colors duration-500">
                <Shield className="text-[#00adef] group-hover:text-black transition-colors" size={24} />
              </div>
              <h3 className="text-2xl font-black text-white mb-6 leading-tight uppercase tracking-wide group-hover:text-[#00adef] transition-colors">
                Cybersecurity Advisory
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed font-light">
                Elite strategic guidance for C-suite and government leadership to navigate complex threat landscapes.
              </p>
              <button 
                onClick={() => onNavigate('services')}
                className="text-[#00adef] text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all"
              >
                Detailed Strategy <ChevronRight size={14} />
              </button>
            </div>

            <div className="p-10 bg-[#0a0a0b] border border-white/5 hover:border-[#00adef]/40 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Network size={80} />
              </div>
              <div className="w-12 h-12 bg-[#00adef]/10 rounded-sm flex items-center justify-center mb-10 group-hover:bg-[#00adef] transition-colors duration-500">
                <Network className="text-[#00adef] group-hover:text-black transition-colors" size={24} />
              </div>
              <h3 className="text-2xl font-black text-white mb-6 leading-tight uppercase tracking-wide group-hover:text-[#00adef] transition-colors">
                Network Hardening
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed font-light">
                Securing the perimeter and internal fabrics against sophisticated persistent threats (APTs) and lateral movement.
              </p>
              <button 
                onClick={() => onNavigate('services')}
                className="text-[#00adef] text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all"
              >
                Infrastucture Audit <ChevronRight size={14} />
              </button>
            </div>

            <div className="p-10 bg-[#0a0a0b] border border-white/5 hover:border-[#00adef]/40 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Cloud size={80} />
              </div>
              <div className="w-12 h-12 bg-[#00adef]/10 rounded-sm flex items-center justify-center mb-10 group-hover:bg-[#00adef] transition-colors duration-500">
                <Cloud className="text-[#00adef] group-hover:text-black transition-colors" size={24} />
              </div>
              <h3 className="text-2xl font-black text-white mb-6 leading-tight uppercase tracking-wide group-hover:text-[#00adef] transition-colors">
                Cloud Ecosystems
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed font-light">
                Hardening AWS, Azure, and Google Cloud environments with sovereign-grade data sovereignty controls.
              </p>
              <button 
                onClick={() => onNavigate('services')}
                className="text-[#00adef] text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all"
              >
                Cloud Governance <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 02-ETHOS SECTION */}
      <section className="py-40 bg-[#050505] px-6 overflow-hidden relative border-t border-white/5">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #00adef 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content Column */}
            <div className="space-y-12">
              <div className="space-y-4">
                <p className="text-[#00adef] font-black text-xs uppercase tracking-[0.5em] flex items-center gap-2">
                  <span className="text-[#00adef]">#</span> 02-ETHOS
                </p>
                <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase">
                  <span className="bg-[#00adef] px-3 py-1 inline-block text-black">Never Trust.</span><br />Always Verify.
                </h2>
              </div>
              
              <p className="text-gray-400 text-xl leading-relaxed max-w-xl font-light">
                We implement <span className="text-white font-bold">Zero Trust Architectures</span> that treat every data node as a potential threat vector, 
                enforcing granular validation at every layer.
              </p>

              {/* 2x2 Grid of Features with Expansion Hover Effect */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 pt-8">
                <div className="space-y-4 p-4 -m-4 rounded-sm transition-all duration-300 hover:bg-white/5 hover:scale-[1.05] group">
                  <div className="flex items-center gap-3">
                    <Lock className="text-gray-500 group-hover:text-[#00adef] transition-colors" size={20} strokeWidth={1.5} />
                    <h4 className="text-sm font-black text-white uppercase tracking-wider">Immutable Security</h4>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed font-medium">
                    Hardened baselines that resist environmental tampering.
                  </p>
                </div>

                <div className="space-y-4 p-4 -m-4 rounded-sm transition-all duration-300 hover:bg-white/5 hover:scale-[1.05] group">
                  <div className="flex items-center gap-3">
                    <Activity className="text-gray-500 group-hover:text-[#00adef] transition-colors" size={20} strokeWidth={1.5} />
                    <h4 className="text-sm font-black text-white uppercase tracking-wider">Real-time Telemetry</h4>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed font-medium">
                    Comprehensive visibility across global distributed stacks.
                  </p>
                </div>

                <div className="space-y-4 p-4 -m-4 rounded-sm transition-all duration-300 hover:bg-white/5 hover:scale-[1.05] group">
                  <div className="flex items-center gap-3">
                    <Cpu className="text-gray-500 group-hover:text-[#00adef] transition-colors" size={20} strokeWidth={1.5} />
                    <h4 className="text-sm font-black text-white uppercase tracking-wider">Post-Quantum Defense</h4>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed font-medium">
                    Proactive encryption ready for next-gen computation.
                  </p>
                </div>

                <div className="space-y-4 p-4 -m-4 rounded-sm transition-all duration-300 hover:bg-white/5 hover:scale-[1.05] group">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-gray-500 group-hover:text-[#00adef] transition-colors" size={20} strokeWidth={1.5} />
                    <h4 className="text-sm font-black text-white uppercase tracking-wider">Automated Response</h4>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed font-medium">
                    Algorithmic containment and adaptive mitigation.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side Column - Square Image Ratio */}
            <div className="relative">
              <div className="rounded-sm overflow-hidden border border-white/5 shadow-2xl">
                <img 
                  src="https://skywavehost.com/wp-content/uploads/2025/12/ChatGPT-Image-Dec-23-2025-08_27_09-AM.jpg" 
                  alt="Security Engineering Operations" 
                  className="w-full aspect-square object-cover opacity-60" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#050505] px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#0a0a0b] border border-white/10 p-16 md:p-24 rounded-sm text-center relative overflow-hidden group shadow-2xl">
            {/* Background technical pattern */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #00adef 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00adef]/5 rounded-full blur-[120px] pointer-events-none group-hover:bg-[#00adef]/10 transition-colors duration-1000"></div>
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
                Ready to Harden Your Environment?
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                Contact our engineering team today to schedule a comprehensive security assessment 
                and discover the EagleEye advantage.
              </p>
              <div className="pt-6">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="bg-white text-black px-10 py-4 font-black uppercase text-xs tracking-[0.2em] rounded-sm hover:bg-gray-200 transition-all flex items-center gap-3 mx-auto shadow-[0_15px_30px_rgba(255,255,255,0.1)]"
                >
                  Speak with a Consultant <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;