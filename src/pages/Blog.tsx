import React, { useState, useEffect } from 'react';
import { Search, ArrowRight } from 'lucide-react';
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

  const categories = ['All', 'Case Studies', 'Wealth Advisory', 'Academy & Events', 'Mentorship & Education', 'Market Insights'];

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
    <div className="pt-36 pb-24 space-y-16 text-left">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-4 max-w-3xl">
          <p className="text-xs text-[#d4af37] font-medium tracking-wide">
            Market research & disclosures
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#f1f4f8] leading-[1.08] tracking-tight">
            Research notes & trade breakdowns.
          </h1>
          <p className="text-base sm:text-lg text-[#8b9bb4] leading-relaxed font-normal">
            Case studies, technical analysis, and wealth structuring principles authored by Founder & SEBI Registered Research Analyst Mann Jain.
          </p>
        </div>
      </section>

      {/* FILTER & SEARCH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded text-xs font-medium transition-colors ${
                  category === cat
                    ? 'bg-[#1a2230] text-[#f1f4f8]'
                    : 'text-[#8b9bb4] hover:text-[#f1f4f8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-[#8b9bb4] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search research notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#121720] rounded pl-10 pr-4 py-2 text-xs text-[#f1f4f8] placeholder-[#4b5563] focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
            />
          </div>
        </div>
      </section>

      {/* ARTICLES LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        {loading ? (
          <div className="text-center py-20 text-[#8b9bb4] text-sm">
            Retrieving notes from Cloudflare D1...
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-20 text-[#8b9bb4] text-sm">
            No research notes found matching your criteria.
          </div>
        ) : (
          <div className="space-y-6">
            {filteredBlogs.map((b) => (
              <article 
                key={b.id}
                onClick={() => onSelectBlog(b.slug)}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start cursor-pointer group hover:bg-[#121720]/50 px-3 rounded transition-colors"
              >
                <div className="md:col-span-3 space-y-1">
                  <span className="text-xs text-[#d4af37] font-medium">{b.category}</span>
                  <p className="text-xs text-[#8b9bb4]">
                    {new Date(b.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} · {b.read_time}
                  </p>
                </div>

                <div className="md:col-span-6 space-y-2">
                  <h2 className="font-serif text-2xl text-[#f1f4f8] group-hover:text-[#d4af37] transition-colors leading-snug">
                    {b.title}
                  </h2>
                  <p className="text-sm text-[#8b9bb4] leading-relaxed line-clamp-2">
                    {b.excerpt}
                  </p>
                  <p className="text-xs text-[#8b9bb4]">By {b.author}</p>
                </div>

                <div className="md:col-span-3 flex md:justify-end items-center">
                  <span className="text-xs font-medium text-[#f1f4f8] group-hover:text-[#d4af37] flex items-center gap-1">
                    <span>Read research note</span>
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
