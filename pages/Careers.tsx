import React, { useState, useEffect, useRef } from 'react';
import { JOB_OPENINGS } from '../constants';
import { Briefcase, MapPin, Clock, ChevronRight, CheckCircle, X, Send, FileText, Shield, Loader2, Upload, Paperclip } from 'lucide-react';
import { JobPosition } from '../types';

const FORMSPREE_URL = 'https://formspree.io/f/mzdprzpq';

const Careers: React.FC = () => {
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [applyingJob, setApplyingJob] = useState<JobPosition | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [progress, setProgress] = useState(0);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    clearance: 'NONE',
    statement: ''
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const closeModal = () => {
    if (formStatus === 'submitting') return;
    setApplyingJob(null);
    setFormStatus('idle');
    setProgress(0);
    setResumeFile(null);
    setFormData({ name: '', email: '', clearance: 'NONE', statement: '' });
  };

  const handleApplyClick = (job: JobPosition) => {
    setApplyingJob(job);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setResumeFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeFile) {
      alert("Please upload your resume to continue.");
      return;
    }
    setFormStatus('submitting');
    
    // UI Progress Simulation
    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      currentProgress += Math.random() * 20;
      if (currentProgress > 95) currentProgress = 95;
      setProgress(Math.floor(currentProgress));
    }, 150);

    const submissionData = new FormData();
    submissionData.append('Candidate Name', formData.name);
    submissionData.append('Email', formData.email);
    submissionData.append('Job Title', applyingJob?.title || 'Unknown Position');
    submissionData.append('Clearance', formData.clearance);
    submissionData.append('Statement', formData.statement);
    submissionData.append('Resume', resumeFile);
    submissionData.append('_subject', `New Application: ${applyingJob?.title} - ${formData.name}`);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: submissionData,
        headers: {
          'Accept': 'application/json'
        }
      });

      clearInterval(progressInterval);
      setProgress(100);

      if (response.ok) {
        setTimeout(() => setFormStatus('success'), 500);
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      clearInterval(progressInterval);
      console.error('Application error:', err);
      setFormStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-6">
          <p className="text-[#00adef] font-black text-xs uppercase tracking-[0.4em]">HUMAN CAPITAL OPERATIONS</p>
          <h1 className="text-6xl font-black text-white uppercase tracking-tighter">Join the Front Lines</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            We are looking for elite minds to defend global digital infrastructure. 
            At EagleEye, you aren't just an employee; you are a sentinel.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-black text-white uppercase mb-8 border-l-4 border-[#00adef] pl-4 tracking-tight">Active Missions</h2>
          {JOB_OPENINGS.map((job) => (
            <div 
              key={job.id} 
              className={`group p-8 border border-white/5 bg-[#0a0a0b] cursor-pointer hover:border-[#00adef]/40 transition-all relative overflow-hidden ${
                selectedJobId === job.id ? 'border-[#00adef]/60' : ''
              }`}
              onClick={() => setSelectedJobId(selectedJobId === job.id ? null : job.id)}
            >
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-2 group-hover:text-[#00adef] transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Briefcase size={12} className="text-[#00adef]" /> {job.department}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={12} className="text-[#00adef]" /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} className="text-[#00adef]" /> {job.type}</span>
                  </div>
                </div>
                <ChevronRight className={`transition-transform duration-300 ${selectedJobId === job.id ? 'rotate-90 text-[#00adef]' : 'text-gray-600'}`} />
              </div>
              
              {selectedJobId === job.id && (
                <div className="mt-6 pt-6 border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-300 relative z-10">
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
                    {job.description}
                  </p>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleApplyClick(job);
                    }}
                    className="bg-[#00adef] text-black px-8 py-3 rounded-sm text-xs font-black uppercase tracking-widest hover:bg-[#33beff] transition-all shadow-[0_0_20px_rgba(0,173,239,0.2)]"
                  >
                    Apply Now
                  </button>
                </div>
              )}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00adef]/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#00adef]/10 transition-colors pointer-events-none"></div>
            </div>
          ))}
        </div>

        {applyingJob && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-[#050505]/95 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="relative w-full max-w-4xl bg-[#0a0a0b] border border-white/10 shadow-2xl rounded-sm max-h-[90vh] overflow-y-auto custom-scrollbar">
              
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors z-20"
              >
                <X size={24} />
              </button>

              {formStatus === 'success' ? (
                <div className="p-12 md:p-20 text-center space-y-8 animate-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-[#00adef]/10 rounded-full flex items-center justify-center mx-auto border border-[#00adef]/30">
                    <CheckCircle className="text-[#00adef]" size={40} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Credentials Transmitted</h3>
                    <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md mx-auto">
                      Your packet has been encrypted and dispatched to HR Command.
                    </p>
                  </div>
                  <div className="pt-4">
                    <button 
                      onClick={closeModal}
                      className="px-10 py-4 bg-[#00adef] text-black font-black uppercase text-xs tracking-widest hover:bg-[#33beff] transition-all"
                    >
                      Return to Command
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
                  <div className="lg:col-span-2 bg-[#050505] p-8 md:p-12 border-r border-white/5">
                    <div className="space-y-8 sticky top-0">
                      <div>
                        <p className="text-[#00adef] font-black text-[10px] uppercase tracking-[0.3em] mb-3">APPLYING FOR MISSION</p>
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-tight mb-4">{applyingJob.title}</h3>
                        <div className="flex flex-col gap-3 text-gray-500 text-xs font-bold uppercase tracking-widest">
                          <span className="flex items-center gap-2"><Briefcase size={14} className="text-[#00adef]" /> {applyingJob.department}</span>
                          <span className="flex items-center gap-2"><MapPin size={14} className="text-[#00adef]" /> {applyingJob.location}</span>
                        </div>
                      </div>

                      <div className="space-y-4 pt-8 border-t border-white/10">
                        <h4 className="text-[10px] font-black text-white uppercase tracking-widest">Briefing Summary</h4>
                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                          {applyingJob.description}
                        </p>
                      </div>

                      <div className="p-4 bg-[#00adef]/5 border border-[#00adef]/10 rounded-sm space-y-3">
                         <div className="flex items-center gap-2">
                           <Shield size={14} className="text-[#00adef]" />
                           <span className="text-[10px] font-black text-[#00adef] uppercase tracking-widest">Secure Dispatch</span>
                         </div>
                         <p className="text-[10px] text-gray-500 leading-tight">
                           Application data is routed through our secure gateway and mirrored to HR Command Centers.
                         </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-3 p-8 md:p-12 relative overflow-hidden">
                    {formStatus === 'submitting' && (
                      <div className="absolute inset-0 z-50 bg-[#0a0a0b]/90 backdrop-blur-md flex flex-col items-center justify-center p-12 text-center space-y-6">
                        <Loader2 className="text-[#00adef] animate-spin" size={48} />
                        <div className="space-y-2 w-full max-w-xs">
                          <p className="text-[#00adef] font-black text-[10px] uppercase tracking-[0.3em]">TRANSMITTING PACKET</p>
                          <div className="h-1 w-full bg-white/5 overflow-hidden">
                             <div 
                               className="h-full bg-[#00adef] transition-all duration-300" 
                               style={{ width: `${progress}%` }}
                             />
                          </div>
                          <p className="text-gray-500 font-mono text-[10px]">{progress}% Complete</p>
                        </div>
                      </div>
                    )}

                    <form className="space-y-8" onSubmit={handleSubmit}>
                      {formStatus === 'error' && (
                        <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest rounded-sm">
                          Transmission Failed. Please check your connection.
                        </div>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Full Legal Name</label>
                          <input 
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            type="text"
                            className="w-full bg-black border border-white/10 p-4 text-white font-medium outline-none focus:border-[#00adef] transition-colors"
                            placeholder="OPERATOR NAME"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Primary Email</label>
                          <input 
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            type="email"
                            className="w-full bg-black border border-white/10 p-4 text-white font-medium outline-none focus:border-[#00adef] transition-colors"
                            placeholder="COMMUNICATION NODE"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Resume Attachment (PDF/DOC)</label>
                        {!resumeFile ? (
                          <div 
                            onClick={() => fileInputRef.current?.click()}
                            className="border-2 border-dashed border-white/10 bg-black hover:border-[#00adef]/40 transition-all p-8 text-center cursor-pointer group rounded-sm"
                          >
                            <input 
                              type="file" 
                              className="hidden" 
                              ref={fileInputRef} 
                              onChange={handleFileChange}
                              accept=".pdf,.doc,.docx"
                            />
                            <Upload className="mx-auto text-gray-500 group-hover:text-[#00adef] transition-colors mb-4" size={24} />
                            <p className="text-xs text-gray-400 font-medium">Click to upload your professional dossier</p>
                            <p className="text-[9px] text-gray-600 mt-2 uppercase tracking-widest">PDF, DOC, DOCX (MAX 10MB)</p>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between p-4 bg-[#00adef]/5 border border-[#00adef]/20 rounded-sm">
                            <div className="flex items-center gap-3">
                              <Paperclip className="text-[#00adef]" size={18} />
                              <div className="flex flex-col">
                                <span className="text-xs text-white font-bold truncate max-w-[180px] md:max-w-[250px]">{resumeFile.name}</span>
                                <span className="text-[9px] text-gray-500 uppercase tracking-widest">{(resumeFile.size / 1024 / 1024).toFixed(2)} MB</span>
                              </div>
                            </div>
                            <button 
                              type="button"
                              onClick={removeFile}
                              className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-red-400 transition-colors"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Security Clearance Level</label>
                        <select 
                          name="clearance"
                          value={formData.clearance}
                          onChange={handleInputChange}
                          className="w-full bg-black border border-white/10 p-4 text-white font-bold text-xs uppercase tracking-widest outline-none focus:border-[#00adef] transition-colors appearance-none cursor-pointer"
                        >
                          <option value="NONE">NONE</option>
                          <option value="PUBLIC TRUST">PUBLIC TRUST</option>
                          <option value="SECRET">SECRET</option>
                          <option value="TOP SECRET">TOP SECRET</option>
                          <option value="TS/SCI + POLY">TS/SCI + POLY</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Candidate Statement</label>
                        <textarea 
                          required
                          name="statement"
                          value={formData.statement}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full bg-black border border-white/10 p-4 text-white font-medium outline-none focus:border-[#00adef] transition-colors resize-none"
                          placeholder="Why are you the right sentinel for this mission?"
                        />
                      </div>

                      <button 
                        type="submit"
                        className="w-full bg-[#00adef] text-black py-5 font-black uppercase text-sm tracking-[0.2em] transition-all flex items-center justify-center gap-3 hover:bg-[#33beff]"
                      >
                        SUBMIT APPLICATION <Send size={18} />
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mt-32 p-12 bg-[#0a0a0b] border border-white/5 rounded-sm text-center">
           <div className="max-w-2xl mx-auto space-y-6">
              <h4 className="text-white font-black uppercase tracking-[0.2em] text-sm">Pre-Selection Requirements</h4>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                All candidates must pass a multi-stage technical evaluation and baseline security screening. 
                EagleEye is an Equal Opportunity Employer focused on merit and technical integrity.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;