
import React, { useState, useRef } from 'react';
import { Shield, Upload, Send, CheckCircle2, AlertCircle, FileText, Image as ImageIcon, X } from 'lucide-react';

const FORMSPREE_URL = 'https://formspree.io/f/mzdprzpq';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    industry: 'govt',
    briefing: ''
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles].slice(0, 3)); // Limit to 3 files
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    const submissionData = new FormData();
    submissionData.append('Name', formData.name);
    submissionData.append('Email', formData.email);
    submissionData.append('Organization', formData.organization);
    submissionData.append('Industry', formData.industry);
    submissionData.append('Message', formData.briefing);
    submissionData.append('_subject', `New Security Audit Request from ${formData.organization}`);
    
    files.forEach((file, index) => {
      submissionData.append(`attachment_${index}`, file);
    });

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: submissionData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setFormState('error');
    }
  };

  if (formState === 'success') {
    return (
      <div className="pt-40 pb-32 px-6 min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
          <div className="w-24 h-24 bg-[#00adef]/10 rounded-full flex items-center justify-center mx-auto border border-[#00adef]/30">
            <CheckCircle2 size={48} className="text-[#00adef]" />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Transmission Successful</h1>
            <p className="text-gray-400 font-light leading-relaxed">
              Your security audit request has been encrypted and transmitted to our command center. 
              A Senior Security Architect will review your environment and contact you within 24 hours.
            </p>
          </div>
          <button 
            onClick={() => {
              setFormState('idle');
              setFormData({ name: '', email: '', organization: '', industry: 'govt', briefing: '' });
              setFiles([]);
            }}
            className="text-[#00adef] text-xs font-black uppercase tracking-[0.3em] hover:text-white transition-colors"
          >
            Send Another Transmission
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-32 px-6 min-h-screen bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column: Context & Trust */}
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-[#00adef] font-black text-xs uppercase tracking-[0.4em]">CONTACT OPERATIONS</p>
              <h1 className="text-6xl font-black text-white uppercase tracking-tighter leading-none">
                Initiate <br />
                <span className="text-gray-500">Security Audit.</span>
              </h1>
              <p className="text-xl text-gray-400 font-light leading-relaxed max-w-xl">
                Ready to harden your critical infrastructure? Provide your environment details and our 
                offensive security team will conduct a preliminary reconnaissance.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 p-6 bg-[#0a0a0b] border border-white/5 rounded-sm">
                <div className="w-12 h-12 bg-[#00adef]/10 flex items-center justify-center border border-[#00adef]/20 rounded-sm">
                  <Shield className="text-[#00adef]" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-2">E2EE Data Handling</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">All submissions are encrypted at rest and in transit. Your architecture diagrams are protected by military-grade protocols.</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-[#0a0a0b] border border-white/5 rounded-sm">
                <div className="w-12 h-12 bg-[#00adef]/10 flex items-center justify-center border border-[#00adef]/20 rounded-sm">
                  <AlertCircle className="text-[#00adef]" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-2">Immediate Response</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Our Global Security Operations Center (GSOC) maintains a 24-hour SLA for all audit requests.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="bg-[#0a0a0b] border border-white/5 p-10 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#00adef 1px, transparent 1px), linear-gradient(90deg, #00adef 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
              {formState === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest rounded-sm">
                  Transmission Failed. Please verify your connection and try again.
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Operator Name</label>
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    type="text"
                    className="w-full bg-black border border-white/10 p-4 text-white font-medium outline-none focus:border-[#00adef] transition-colors"
                    placeholder="Full legal name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Work Email</label>
                  <input 
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    className="w-full bg-black border border-white/10 p-4 text-white font-medium outline-none focus:border-[#00adef] transition-colors"
                    placeholder="e.g. security@corp.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Organization</label>
                  <input 
                    required
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    type="text"
                    className="w-full bg-black border border-white/10 p-4 text-white font-medium outline-none focus:border-[#00adef] transition-colors"
                    placeholder="Company or Agency name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Industry Segment</label>
                  <select 
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-white/10 p-4 text-white font-medium outline-none focus:border-[#00adef] transition-colors appearance-none"
                  >
                    <option value="govt">Government & Defense</option>
                    <option value="finance">Financial Services</option>
                    <option value="enterprise">Large Enterprise</option>
                    <option value="edu">Higher Education</option>
                    <option value="edu">Healtcare</option>
                    <option value="edu">Small or Mid Enterprise</option>
                    <option value="other">Others</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Security Briefing</label>
                <textarea 
                  required
                  name="briefing"
                  value={formData.briefing}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-black border border-white/10 p-4 text-white font-medium outline-none focus:border-[#00adef] transition-colors resize-none"
                  placeholder="Describe your current security challenges or auditing requirements..."
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Assets & Architecture (Images/PDF)</label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-white/10 bg-black hover:border-[#00adef]/40 transition-all p-10 text-center cursor-pointer group"
                >
                  <input 
                    type="file" 
                    className="hidden" 
                    ref={fileInputRef} 
                    onChange={handleFileChange}
                    multiple
                    accept="image/*,.pdf"
                  />
                  <Upload className="mx-auto text-gray-500 group-hover:text-[#00adef] transition-colors mb-4" size={32} />
                  <p className="text-sm text-gray-400 font-medium">Click to upload architecture diagrams or network logs</p>
                  <p className="text-[10px] text-gray-600 mt-2 uppercase tracking-widest">MAX 3 FILES (IMAGE OR PDF)</p>
                </div>

                {files.length > 0 && (
                  <div className="grid grid-cols-1 gap-3">
                    {files.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-sm">
                        <div className="flex items-center gap-3 overflow-hidden">
                          {file.type.startsWith('image/') ? <ImageIcon size={16} className="text-[#00adef]" /> : <FileText size={16} className="text-gray-400" />}
                          <span className="text-xs text-gray-300 truncate">{file.name}</span>
                        </div>
                        <button 
                          type="button"
                          onClick={() => removeFile(idx)}
                          className="p-1 hover:text-red-400 transition-colors"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button 
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full bg-[#00adef] hover:bg-[#33beff] text-black py-5 font-black uppercase text-sm tracking-[0.2em] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-wait"
              >
                {formState === 'submitting' ? (
                  <>ENCRYPTING DATA...</>
                ) : (
                  <>
                    SUBMIT <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
