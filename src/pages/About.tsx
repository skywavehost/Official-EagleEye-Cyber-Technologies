import React from 'react';
import { ShieldCheck, Target, Users, Award, Eye, Compass } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          <div className="flex-1 space-y-8">
            <div className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              Our Security Ethos
            </div>
            <h1 className="text-6xl font-black text-white uppercase tracking-tighter leading-tight">
              Mission Critical <br />
              <span className="text-cyan-500">Excellence.</span>
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Founded in the crucible of sovereign defense, EagleEye Cyber Technologies was built to bridge the gap between 
              emerging threats and enterprise resilience. We don't just secure systems; we defend legacies.
            </p>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
               <div className="p-8 bg-[#0a0a0b] border border-white/5 space-y-4">
                  <ShieldCheck className="text-cyan-500" size={32} />
                  <h3 className="text-white font-black uppercase text-xs tracking-widest">Resilience</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">Persistent defense through adversarial analysis.</p>
               </div>
               <div className="p-8 bg-[#0a0a0b] border border-white/5 space-y-4 translate-y-8">
                  <Target className="text-cyan-500" size={32} />
                  <h3 className="text-white font-black uppercase text-xs tracking-widest">Precision</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">Targeted hardening of high-value assets.</p>
               </div>
               <div className="p-8 bg-[#0a0a0b] border border-white/5 space-y-4">
                  <Users className="text-cyan-500" size={32} />
                  <h3 className="text-white font-black uppercase text-xs tracking-widest">Integrity</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">Absolute transparency in operations.</p>
               </div>
               <div className="p-8 bg-[#0a0a0b] border border-white/5 space-y-4 translate-y-8">
                  <Award className="text-cyan-500" size={32} />
                  <h3 className="text-white font-black uppercase text-xs tracking-widest">Authority</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">Recognized globally by security standard bodies.</p>
               </div>
            </div>
          </div>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          <div className="p-12 md:p-16 bg-white/[0.02] border border-white/10 rounded-sm relative overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500">
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                  <Target className="text-cyan-500" size={24} />
                </div>
                <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-400 font-light leading-relaxed">
                To architect the world’s most resilient digital ecosystems, empowering sovereign nations and 
                global enterprises to operate fearlessly.
              </p>
            </div>
          </div>

          <div className="p-12 md:p-16 bg-white/[0.02] border border-white/10 rounded-sm relative overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500">
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                  <Eye className="text-cyan-500" size={24} />
                </div>
                <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-400 font-light leading-relaxed">
                A future where digital trust is absolute and the integrity of global data is preserved.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;