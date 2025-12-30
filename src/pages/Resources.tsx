import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';
import { Search, Calendar, User, Tag, ChevronRight, ArrowLeft, Share2, Clock, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { BlogPost } from '../types';

const FORMSPREE_URL = 'https://formspree.io/f/mzdprzpq';

const ImageWithLoader: React.FC<{ src: string; alt: string; className?: string; initialOpacity?: number }> = ({ src, alt, className = "", initialOpacity = 0.7 }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img 
      src={src} 
      alt={alt} 
      loading="lazy"
      onLoad={() => setIsLoaded(true)}
      style={{ opacity: isLoaded ? 1 : 0 }}
      className={`${className} transition-opacity duration-1000 ease-in-out`}
    />
  );
};

const Resources: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const categories = ['All', 'Cyber Strategy', 'Research', 'Threat Intel', 'Compliance'];

  const filteredPosts = activeCategory === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setNewsletterStatus('submitting');
    
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: newsletterEmail,
          _subject: `New Newsletter Subscription: ${newsletterEmail}`,
          source: 'Intelligence Digest Section'
        }),
      });

      if (response.ok) {
        setNewsletterStatus('success');
        setNewsletterEmail('');
      } else {
        setNewsletterStatus('error');
      }
    } catch (error) {
      setNewsletterStatus('error');
    }
  };

  if (selectedPost) {
    return (
      <div className="pt-32 pb-40 px-6 min-h-screen bg-[#050505] animate-in fade-in duration-500">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-2 text-gray-500 hover:text-[#00adef] transition-colors mb-12 uppercase text-[10px] font-black tracking-widest"
          >
            <ArrowLeft size={16} /> Back to Resources
          </button>

          <div className="space-y-8 mb-12">
            <div className="flex flex-wrap items-center gap-6 text-[#00adef] text-[10px] font-black uppercase tracking-widest">
              <span className="px-4 py-1.5 bg-[#00adef] text-black rounded-sm shadow-[0_0_20px_rgba(0,173,239,0.3)]">
                {selectedPost.category}
              </span>
              <span className="flex items-center gap-2 text-gray-500"><Clock size={14} /> 6 Min Read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter">
              {selectedPost.title}
            </h1>
          </div>

          <div className="aspect-[16/8] w-full mb-16 border border-white/10 rounded-sm overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#0a0a0b]">
            <ImageWithLoader 
              src={selectedPost.imageUrl} 
              alt={selectedPost.title} 
              className="w-full h-full object-cover brightness-110 contrast-110"
            />
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="text-xl text-gray-300 font-light leading-relaxed mb-12 border-l-4 border-[#00adef] pl-8 py-2">
              {selectedPost.excerpt}
            </div>
            <div className="space-y-8">
              {selectedPost.content.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-gray-400 text-lg leading-loose font-light whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-black text-white uppercase tracking-tighter mb-6">Security Intelligence</h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              In-depth research and expert analysis from EagleEye Labs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div key={post.id} className="group bg-[#0a0a0b] border border-white/5 flex flex-col hover:border-[#00adef]/40 transition-all duration-500 h-full overflow-hidden">
              <div className="relative h-64 overflow-hidden bg-[#0a0a0b]">
                <ImageWithLoader 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-all duration-700" 
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#00adef] text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm shadow-xl">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 
                  onClick={() => setSelectedPost(post)}
                  className="text-2xl font-bold text-white mb-4 leading-tight hover:text-[#00adef] transition-colors cursor-pointer uppercase tracking-tight"
                >
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1 font-light">
                  {post.excerpt}
                </p>
                <button 
                  onClick={() => setSelectedPost(post)}
                  className="flex items-center gap-2 text-[#00adef] text-xs font-black uppercase tracking-widest transition-all mt-auto"
                >
                  Read Analysis <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;