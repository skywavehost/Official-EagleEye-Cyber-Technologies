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
    if (!resumeFile) return;
    setFormStatus('submitting');
    
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

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: submissionData,
        headers: { 'Accept': 'application/json' }
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
      setFormStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-6">
          <p className="text-[#00adef] font-black text-xs uppercase tracking-[0.4em]">HUMAN CAPITAL OPERATIONS</p>
          <h1 className="text-6xl font-black text-white uppercase tracking-tighter">Join the Front Lines</h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {JOB_OPENINGS.map((job) => (
            <div 
              key={job.id} 
              className="group p-8 border border-white/5 bg-[#0a0a0b] cursor-pointer hover:border-[#00adef]/40 transition-all"
              onClick={() => setSelectedJobId(selectedJobId === job.id ? null : job.id)}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-2 group-hover:text-[#00adef] transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Briefcase size={12} className="text-[#00adef]" /> {job.department}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={12} className="text-[#00adef]" /> {job.location}</span>
                  </div>
                </div>
                <ChevronRight className={`transition-transform duration-300 ${selectedJobId === job.id ? 'rotate-90 text-[#00adef]' : 'text-gray-600'}`} />
              </div>
              
              {selectedJobId === job.id && (
                <div className="mt-6 pt-6 border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
                    {job.description}
                  </p>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleApplyClick(job);
                    }}
                    className="bg-[#00adef] text-black px-8 py-3 rounded-sm text-xs font-black uppercase tracking-widest"
                  >
                    Apply Now
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {applyingJob && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-[#050505]/95 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl bg-[#0a0a0b] border border-white/10 shadow-2xl rounded-sm max-h-[90vh] overflow-y-auto">
              <button onClick={closeModal} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors z-20">
                <X size={24} />
              </button>

              {formStatus === 'success' ? (
                <div className="p-12 md:p-20 text-center space-y-8 animate-in zoom-in duration-500">
                  <CheckCircle className="text-[#00adef] mx-auto" size={40} />
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Credentials Transmitted</h3>
                  <button onClick={closeModal} className="px-10 py-4 bg-[#00adef] text-black font-black uppercase text-xs">Return</button>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-2 bg-[#050505] p-8 md:p-12 border-r border-white/5">
                     <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">{applyingJob.title}</h3>
                  </div>
                  <div className="lg:col-span-3 p-8 md:p-12">
                    <form className="space-y-8" onSubmit={handleSubmit}>
                      <input required name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-black border border-white/10 p-4 text-white" placeholder="Name" />
                      <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full bg-black border border-white/10 p-4 text-white" placeholder="Email" />
                      <div className="border-2 border-dashed border-white/10 p-8 text-center cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                        <input type="file" className="hidden" ref={fileInputRef} onChange={handleFileChange} accept=".pdf,.doc,.docx" />
                        <span className="text-xs text-gray-400">{resumeFile ? resumeFile.name : 'Upload Resume'}</span>
                      </div>
                      <textarea required name="statement" value={formData.statement} onChange={handleInputChange} rows={4} className="w-full bg-black border border-white/10 p-4 text-white resize-none" placeholder="Candidate Statement" />
                      <button type="submit" className="w-full bg-[#00adef] text-black py-5 font-black uppercase text-sm">Submit Application</button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Careers;