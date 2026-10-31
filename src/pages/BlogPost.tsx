import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { api } from '../services/api';
import { Blog } from '../types';
import { Logo } from '../components/Logo';
import { MarkdownRenderer } from '../components/MarkdownRenderer';

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
      <div className="pt-40 pb-20 text-center text-[#8b9bb4]">
        Retrieving research note from Cloudflare D1...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="pt-40 pb-20 text-center space-y-4">
        <h2 className="font-serif text-2xl text-[#f1f4f8]">Research Note Not Found</h2>
        <p className="text-[#8b9bb4] text-sm">The requested publication could not be located.</p>
        <button
          onClick={onBack}
          className="px-5 py-2 rounded bg-[#d4af37] text-[#090c10] font-medium text-xs"
        >
          Back to research
        </button>
      </div>
    );
  }

  return (
    <article className="pt-36 pb-24 max-w-3xl mx-auto px-4 sm:px-6 space-y-10 text-left">
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-medium text-[#8b9bb4] hover:text-[#f1f4f8] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to research index</span>
        </button>
      </div>

      <header className="space-y-4">
        <div className="flex items-center gap-3 text-xs text-[#8b9bb4]">
          <span className="text-[#d4af37] font-medium">{blog.category}</span>
          <span>·</span>
          <span>{blog.read_time}</span>
          <span>·</span>
          <span>
            {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-[#f1f4f8] leading-[1.12] tracking-tight">
          {blog.title}
        </h1>

        <div className="flex items-center gap-3 pt-4 text-xs">
          <div className="w-8 h-8 rounded-full bg-[#121720] border border-[#d4af37]/30 flex items-center justify-center">
            <Logo className="w-4 h-4 text-[#d4af37]" variant="gold" />
          </div>
          <div>
            <p className="font-medium text-[#f1f4f8]">{blog.author}</p>
            <p className="text-[#8b9bb4]">Founder & SEBI Registered Research Analyst</p>
          </div>
        </div>
      </header>

      {blog.cover_image && (
        <figure className="space-y-2">
          <div className="aspect-[16/9] rounded-xl overflow-hidden bg-[#121720]">
            <img
              src={blog.cover_image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        </figure>
      )}

      {/* Article body */}
      <div className="pt-2 pb-6">
        <MarkdownRenderer content={blog.content} />
      </div>

      {/* Statutory Disclosure Notice */}
      <div className="p-6 bg-[#121720] rounded-xl space-y-2 text-xs text-[#8b9bb4]">
        <div className="flex items-center gap-2 text-[#d4af37] font-medium">
          <ShieldCheck className="w-4 h-4" />
          <span>Statutory compliance disclosure</span>
        </div>
        <p className="leading-relaxed">
          The analysis and case studies shared here are authored for educational and informative purposes by SEBI Registered Research Analyst Mann Jain (Reg: INZXXXXX8032). Past performance is not indicative of future returns. Securities investments are subject to market risks.
        </p>
      </div>

      {/* Consultation Prompt */}
      <div className="p-8 bg-[#121720] rounded-xl space-y-4">
        <h3 className="font-serif text-2xl text-[#f1f4f8]">Evaluate this methodology for your portfolio</h3>
        <p className="text-sm text-[#8b9bb4]">
          Schedule a direct advisory review with Mann Jain or explore our PMS allocation framework.
        </p>
        <button
          onClick={onOpenBooking}
          className="px-6 py-3 bg-[#d4af37] hover:bg-[#e5c158] text-[#090c10] font-medium rounded text-xs transition-colors flex items-center gap-2"
        >
          <span>Schedule consultation</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
};
