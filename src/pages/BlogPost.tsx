import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, User, Share2, Sparkles, ShieldCheck } from 'lucide-react';
import { api } from '../services/api';
import { Blog } from '../types';

interface BlogPostProps {
  slug: string;
  onBack: () => void;
  onOpenBooking: () => void;
}

export const BlogPost: React.FC<BlogPostProps> = ({ slug, onBack, onOpenBooking }) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBlog();
    window.scrollTo(0, 0);
  }, [slug]);

  const loadBlog = async () => {
    setLoading(true);
    try {
      const data = await api.getBlogBySlug(slug);
      setBlog(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="pt-40 pb-20 text-center text-slate-400">
        Loading article from Cloudflare D1...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="pt-40 pb-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">Article Not Found</h2>
        <p className="text-slate-400 text-sm">The requested insight could not be retrieved.</p>
        <button
          onClick={onBack}
          className="px-5 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs uppercase"
        >
          Back to Insights
        </button>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 space-y-10 text-left">
      {/* Back button */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Insights</span>
        </button>
      </div>

      {/* Meta & Title */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-bold px-3 py-1 rounded-full">
            {blog.category}
          </span>
          <span className="text-slate-500 text-xs">•</span>
          <span className="flex items-center gap-1.5 text-xs text-slate-400">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>{blog.read_time}</span>
          </span>
          <span className="text-slate-500 text-xs">•</span>
          <span className="text-xs text-slate-400">
            {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15]">
          {blog.title}
        </h1>

        <div className="flex items-center gap-3 pt-2 text-xs text-slate-300 border-t border-slate-800/80">
          <img 
            src="/assets/images/profile_pic_150.jpg" 
            alt="Mann Jain" 
            className="w-8 h-8 rounded-full border border-amber-400"
          />
          <div>
            <p className="font-bold text-white">{blog.author}</p>
            <p className="text-[11px] text-slate-500">Founder & SEBI Registered Research Analyst</p>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      {blog.cover_image && (
        <div className="rounded-2xl overflow-hidden border border-slate-800 h-80 sm:h-96 bg-slate-900 shadow-2xl">
          <img
            src={blog.cover_image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-slate-800 text-slate-200 text-sm sm:text-base leading-relaxed space-y-6 whitespace-pre-line font-normal">
        {blog.content}
      </div>

      {/* Regulatory Notice & Author Badge */}
      <div className="bg-slate-950 border border-slate-900 rounded-2xl p-6 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>SEBI Compliance & Disclosure Notice</span>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed">
          The analysis and case studies shared in this article are authored for educational and informative purposes 
          by SEBI Registered Research Analyst Mann Jain. Past performance does not guarantee future results. 
          Securities investments are subject to market risks. Read all scheme and advisory documents carefully before investing.
        </p>
      </div>

      {/* Post CTA */}
      <div className="glass-card rounded-2xl p-8 border border-amber-500/30 text-center space-y-4 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
        <h3 className="text-2xl font-bold text-white">Interested in Applying This Framework?</h3>
        <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto">
          Schedule an institutional advisory consultation or explore our PMS allocation strategies.
        </p>
        <button
          onClick={onOpenBooking}
          className="px-7 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20"
        >
          Book Portfolio Consultation
        </button>
      </div>
    </article>
  );
};
