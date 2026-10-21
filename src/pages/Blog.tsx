import React, { useState, useEffect } from 'react';
import { Search, Calendar, Clock, ArrowRight, Sparkles, BookOpen, User } from 'lucide-react';
import { api } from '../services/api';
import { Blog } from '../types';

interface BlogProps {
  onSelectBlog: (slug: string) => void;
}

export const BlogPage: React.FC<BlogProps> = ({ onSelectBlog }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Case Studies', 'Wealth Advisory', 'Academy & Events', 'Market Insights'];

  useEffect(() => {
    loadBlogs();
  }, [category]);

  const loadBlogs = async () => {
    setLoading(true);
    try {
      const data = await api.getBlogs(category);
      setBlogs(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const filteredBlogs = blogs.filter(b => 
    b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24 space-y-16">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-left space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-amber-400">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Market Research & Case Studies</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Financial Intelligence & <br />
            <span className="gold-gradient-text">Tactical Alpha Insights</span>
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Case studies, technical trade breakdowns, and wealth structuring principles authored by 
            Founder & SEBI Registered Research Analyst <strong>Mann Jain</strong>.
          </p>
        </div>
      </section>

      {/* FILTER & SEARCH CONTROLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  category === cat
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search financial insights..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        {loading ? (
          <div className="text-center py-20 text-slate-400 text-sm">
            Retrieving insights from Cloudflare D1...
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-20 text-slate-500 text-sm">
            No articles found matching your criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((b) => (
              <article
                key={b.id}
                onClick={() => onSelectBlog(b.slug)}
                className="glass-card rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between text-left cursor-pointer group hover:border-amber-500/40"
              >
                <div>
                  <div className="h-52 overflow-hidden bg-slate-900 relative">
                    <img
                      src={b.cover_image || '/assets/images/img_4.jpg'}
                      alt={b.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-amber-300 border border-amber-500/30">
                      {b.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-400" />
                        <span>{b.read_time}</span>
                      </span>
                      <span>•</span>
                      <span>{new Date(b.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>

                    <h2 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2">
                      {b.title}
                    </h2>

                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {b.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between text-xs font-bold text-amber-400 border-t border-slate-800/80 mt-2">
                  <span className="text-[11px] text-slate-400 font-normal">By {b.author}</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Analysis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
