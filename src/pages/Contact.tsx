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
      setFiles(prev => [...prev, ...newFiles].slice(0, 3));
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
    
    files.forEach((file, index) => {
      submissionData.append(`attachment_${index}`, file);
    });

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: submissionData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch (err) {
      setFormState('error');
    }
  };

  if (formState === 'success') {
    return (
      <div className="pt-40 pb-32 px-6 min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
          <CheckCircle2 size={48} className="text-[#00adef] mx-auto" />
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Transmission Successful</h1>
          <button onClick={() => setFormState('idle')} className="text-[#00adef] text-xs font-black uppercase">Send Another</button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-32 px-6 min-h-screen bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <h1 className="text-6xl font-black text-white uppercase tracking-tighter">Initiate Audit.</h1>
            <p className="text-xl text-gray-400 font-light max-w-xl">Ready to harden your critical infrastructure?</p>
          </div>

          <div className="bg-[#0a0a0b] border border-white/5 p-10 md:p-12 relative">
            <form onSubmit={handleSubmit} className="space-y-8">
              <input required name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-black border border-white/10 p-4 text-white" placeholder="Operator Name" />
              <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full bg-black border border-white/10 p-4 text-white" placeholder="Work Email" />
              <textarea required name="briefing" value={formData.briefing} onChange={handleInputChange} rows={4} className="w-full bg-black border border-white/10 p-4 text-white resize-none" placeholder="Briefing..." />
              <div onClick={() => fileInputRef.current?.click()} className="border-2 border-dashed border-white/10 p-10 text-center cursor-pointer">
                <input type="file" className="hidden" ref={fileInputRef} onChange={handleFileChange} multiple accept="image/*,.pdf" />
                <span className="text-sm text-gray-500">{files.length > 0 ? `${files.length} files selected` : 'Upload Assets'}</span>
              </div>
              <button type="submit" disabled={formState === 'submitting'} className="w-full bg-[#00adef] text-black py-5 font-black uppercase text-sm">
                {formState === 'submitting' ? 'Transmitting...' : 'Submit Transmission'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;