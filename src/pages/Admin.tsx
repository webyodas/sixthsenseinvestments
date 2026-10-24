import React, { useState, useEffect } from 'react';
import { 
  Users, BookOpen, TrendingUp, Download, Search, Filter, Plus, 
  Trash2, Edit, Eye, CheckCircle2, Clock, AlertCircle, RefreshCw, 
  Lock, ArrowRight, ShieldCheck, Database, MessageSquare, Phone, 
  Mail, X, Save, FileText, ChevronRight
} from 'lucide-react';
import { api } from '../services/api';
import { Lead, Blog } from '../types';
import { Logo } from '../components/Logo';

export const Admin: React.FC = () => {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('ssi_admin_auth') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');

  // Active view tab: 'dashboard' | 'leads' | 'blogs'
  const [activeTab, setActiveTab] = useState<'dashboard' | 'leads' | 'blogs'>('dashboard');

  // Leads state
  const [leads, setLeads] = useState<Lead[]>([]);
  const [leadsLoading, setLeadsLoading] = useState(false);
  const [leadStatusFilter, setLeadStatusFilter] = useState('All');
  const [leadSearch, setLeadSearch] = useState('');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [leadNotes, setLeadNotes] = useState('');

  // Blogs state
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [blogsLoading, setBlogsLoading] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Partial<Blog> | null>(null);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const loadData = async () => {
    setLeadsLoading(true);
    setBlogsLoading(true);
    try {
      const [leadsData, blogsData] = await Promise.all([
        api.getLeads(),
        api.getBlogs('All', 'All')
      ]);
      setLeads(leadsData);
      setBlogs(blogsData);
    } catch (e) {
      console.error(e);
    } finally {
      setLeadsLoading(false);
      setBlogsLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === 'sixthsense2026' || passcode.trim() === 'admin') {
      setIsAuthenticated(true);
      sessionStorage.setItem('ssi_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Invalid passcode. Use default: sixthsense2026');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('ssi_admin_auth');
  };

  // --- LEADS ACTIONS ---
  const handleUpdateStatus = async (id: number, newStatus: Lead['status']) => {
    const success = await api.updateLeadStatus(id, newStatus);
    if (success) {
      setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
      if (selectedLead && selectedLead.id === id) {
        setSelectedLead({ ...selectedLead, status: newStatus });
      }
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedLead) return;
    const success = await api.updateLeadStatus(selectedLead.id, selectedLead.status, leadNotes);
    if (success) {
      setLeads(leads.map(l => l.id === selectedLead.id ? { ...l, notes: leadNotes } : l));
      setSelectedLead({ ...selectedLead, notes: leadNotes });
      alert('Notes saved successfully.');
    }
  };

  const exportLeadsCSV = () => {
    if (leads.length === 0) {
      alert('No leads to export.');
      return;
    }
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Service Interested', 'Investment Budget', 'Status', 'Date', 'Notes'];
    const rows = leads.map(l => [
      l.id,
      `"${l.name.replace(/"/g, '""')}"`,
      `"${l.email.replace(/"/g, '""')}"`,
      `"${l.phone.replace(/"/g, '""')}"`,
      `"${(l.service_interested || '').replace(/"/g, '""')}"`,
      `"${(l.investment_budget || '').replace(/"/g, '""')}"`,
      l.status,
      l.created_at,
      `"${(l.notes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `sixthsense_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // --- BLOGS ACTIONS ---
  const handleOpenNewBlog = () => {
    setEditingBlog({
      title: '',
      slug: '',
      category: 'Market Insights',
      excerpt: '',
      content: '',
      author: 'Mann Jain (Founder & SEBI R.A.)',
      cover_image: '/assets/images/img_18.jpg',
      status: 'Published',
      read_time: '4 min read'
    });
    setIsBlogModalOpen(true);
  };

  const handleSaveBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBlog || !editingBlog.title || !editingBlog.content) {
      alert('Please provide title and content.');
      return;
    }

    if (editingBlog.id) {
      // Update
      const ok = await api.updateBlog(editingBlog.id, editingBlog);
      if (ok) {
        setIsBlogModalOpen(false);
        loadData();
      }
    } else {
      // Create
      const res = await api.createBlog(editingBlog as any);
      if (res.success) {
        setIsBlogModalOpen(false);
        loadData();
      }
    }
  };

  const handleDeleteBlog = async (id: number) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      await api.deleteBlog(id);
      setBlogs(blogs.filter(b => b.id !== id));
    }
  };

  // KPI calculations
  const totalLeads = leads.length;
  const newLeads = leads.filter(l => l.status === 'New').length;
  const convertedLeads = leads.filter(l => l.status === 'Converted').length;
  const publishedBlogsCount = blogs.filter(b => b.status === 'Published').length;

  const filteredLeads = leads.filter(l => {
    const matchesStatus = leadStatusFilter === 'All' || l.status === leadStatusFilter;
    const matchesSearch = 
      l.name.toLowerCase().includes(leadSearch.toLowerCase()) ||
      l.email.toLowerCase().includes(leadSearch.toLowerCase()) ||
      l.phone.includes(leadSearch) ||
      l.service_interested.toLowerCase().includes(leadSearch.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // --- RENDER PASSCODE LOGIN ---
  if (!isAuthenticated) {
    return (
      <div data-ui="admin-login" className="pt-40 pb-28 min-h-[80vh] flex items-center justify-center px-4">
        <div className="bg-[#121720] max-w-md w-full rounded-2xl p-8 text-center space-y-6">
          <div className="w-14 h-14 bg-[#1a2230] rounded-xl flex items-center justify-center mx-auto">
            <Logo className="w-8 h-8 text-[#d4af37]" variant="gold" />
          </div>

          <div className="space-y-1">
            <h2 className="font-serif text-2xl text-[#f1f4f8]">Sixth Sense Admin HQ</h2>
            <p className="text-xs text-[#8b9bb4]">Management Portal · Cloudflare D1 Integrated</p>
          </div>

          {authError && (
            <div className="bg-[#241315] text-[#f87171] text-xs py-2 px-3 rounded">
              {authError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Enter Admin Passcode..."
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full bg-[#090c10] rounded px-4 py-3 text-sm text-center text-[#f1f4f8] placeholder-[#4b5563] focus:outline-none focus:ring-1 focus:ring-[#d4af37] tracking-widest"
              />
              <p className="text-[11px] text-[#8b9bb4] mt-2">Default Passcode: <code className="text-[#d4af37]">sixthsense2026</code></p>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#d4af37] hover:bg-[#e5c158] text-[#090c10] font-medium rounded text-xs transition-colors"
            >
              Authenticate & Access
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- RENDER AUTHENTICATED ADMIN PANEL ---
  return (
    <div data-ui="admin-panel" className="pt-28 pb-20 min-h-[100dvh] text-[#f1f4f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* TOP ADMIN HEADER */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6">
          <div className="flex items-center gap-3">
            <Logo className="w-8 h-8 text-[#d4af37]" variant="gold" />
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-xs text-emerald-400 font-medium">Cloudflare D1 Live Connected</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl text-[#f1f4f8] mt-1">
                Sixth Sense Investments — Admin HQ
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadData}
              className="p-2.5 bg-slate-900 border border-slate-800 hover:bg-slate-800 rounded-xl text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-colors"
              title="Refresh Data from Cloudflare D1"
            >
              <RefreshCw className={`w-4 h-4 ${(leadsLoading || blogsLoading) ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Sync Data</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-slate-900/80 border border-slate-800 hover:bg-rose-500/20 hover:border-rose-500/40 text-rose-400 rounded-xl text-xs font-semibold transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* NAVIGATION TABS */}
        <div className="flex items-center gap-2 pb-3">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2 rounded text-xs font-medium transition-colors flex items-center gap-2 ${
              activeTab === 'dashboard'
                ? 'bg-[#1a2230] text-[#f1f4f8]'
                : 'text-[#8b9bb4] hover:text-[#f1f4f8] bg-[#121720]'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Overview & KPIs</span>
          </button>

          <button
            onClick={() => setActiveTab('leads')}
            className={`px-4 py-2 rounded text-xs font-medium transition-colors flex items-center gap-2 ${
              activeTab === 'leads'
                ? 'bg-[#1a2230] text-[#f1f4f8]'
                : 'text-[#8b9bb4] hover:text-[#f1f4f8] bg-[#121720]'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Lead Base CRM</span>
            <span className="bg-[#090c10] text-[10px] px-1.5 py-0.5 rounded text-[#d4af37]">
              {leads.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('blogs')}
            className={`px-4 py-2 rounded text-xs font-medium transition-colors flex items-center gap-2 ${
              activeTab === 'blogs'
                ? 'bg-[#1a2230] text-[#f1f4f8]'
                : 'text-[#8b9bb4] hover:text-[#f1f4f8] bg-[#121720]'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Blog CMS & Insights</span>
            <span className="bg-[#090c10] text-[10px] px-1.5 py-0.5 rounded text-[#d4af37]">
              {blogs.length}
            </span>
          </button>
        </div>

        {/* TAB 1: OVERVIEW & KPIS */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8 text-left">
            {/* 4 Top KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-[#121720] rounded-xl p-6 space-y-2">
                <div className="flex items-center justify-between text-[#8b9bb4] text-xs font-medium">
                  <span>Total Inquiries</span>
                  <Users className="w-4 h-4 text-[#d4af37]" />
                </div>
                <div className="font-serif text-3xl text-white">{totalLeads}</div>
                <p className="text-[11px] text-emerald-400 font-medium">Logged in Cloudflare D1</p>
              </div>

              <div className="bg-[#121720] rounded-xl p-6 space-y-2">
                <div className="flex items-center justify-between text-[#8b9bb4] text-xs font-medium">
                  <span>Pending New Leads</span>
                  <Clock className="w-4 h-4 text-[#d4af37]" />
                </div>
                <div className="font-serif text-3xl text-[#d4af37]">{newLeads}</div>
                <p className="text-[11px] text-[#8b9bb4] font-medium">Awaiting advisory callback</p>
              </div>

              <div className="bg-[#121720] rounded-xl p-6 space-y-2">
                <div className="flex items-center justify-between text-[#8b9bb4] text-xs font-medium">
                  <span>Converted Clients</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="font-serif text-3xl text-emerald-400">{convertedLeads}</div>
                <p className="text-[11px] text-emerald-400 font-medium">Active PMS & Advisory</p>
              </div>

              <div className="bg-[#121720] rounded-xl p-6 space-y-2">
                <div className="flex items-center justify-between text-[#8b9bb4] text-xs font-medium">
                  <span>Published Insights</span>
                  <BookOpen className="w-4 h-4 text-[#d4af37]" />
                </div>
                <div className="font-serif text-3xl text-white">{publishedBlogsCount}</div>
                <p className="text-[11px] text-[#8b9bb4] font-medium">Public articles live</p>
              </div>
            </div>

            {/* Quick Actions & Telemetry */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between pb-3">
                  <h3 className="text-base font-bold text-white">Recent Inquiries Stream</h3>
                  <button onClick={() => setActiveTab('leads')} className="text-xs text-[#d4af37] hover:underline">
                    View All Leads →
                  </button>
                </div>

                {leads.length === 0 ? (
                  <p className="text-xs text-slate-400 py-6 text-center">No leads logged yet. Submit a test form on the website!</p>
                ) : (
                  <div className="space-y-3">
                    {leads.slice(0, 4).map((l) => (
                      <div key={l.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                        <div>
                          <p className="font-bold text-white">{l.name}</p>
                          <p className="text-[11px] text-slate-400">{l.service_interested} • {l.investment_budget}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            l.status === 'New' ? 'bg-amber-500/20 text-amber-300' :
                            l.status === 'Converted' ? 'bg-emerald-500/20 text-emerald-300' :
                            'bg-slate-800 text-slate-300'
                          }`}>
                            {l.status}
                          </span>
                          <span className="text-[10px] text-slate-500">
                            {new Date(l.created_at).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Database Telemetry */}
              <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4 text-xs">
                <div className="flex items-center gap-2 text-white font-medium pb-2">
                  <Database className="w-4 h-4 text-[#d4af37]" />
                  <span>Cloudflare Infrastructure</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Database Engine:</span>
                    <span className="text-white">Cloudflare D1 SQL</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Database Name:</span>
                    <span className="text-[#d4af37]">sixthsense-db</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Region:</span>
                    <span className="text-emerald-400 font-medium">APAC (Singapore)</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Sync Status:</span>
                    <span className="text-emerald-400 font-medium">Active & Live</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleOpenNewBlog}
                    className="w-full py-2.5 bg-[#d4af37] hover:bg-[#e5c158] text-[#090c10] font-medium rounded text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Write New Blog Post</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: LEADS CRM TABLE */}
        {activeTab === 'leads' && (
          <div className="space-y-6 text-left">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Search & Filter */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative min-w-[240px]">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search leads by name, email, phone..."
                    value={leadSearch}
                    onChange={(e) => setLeadSearch(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <select
                  value={leadStatusFilter}
                  onChange={(e) => setLeadStatusFilter(e.target.value)}
                  className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="All">All Statuses</option>
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Qualified">Qualified</option>
                  <option value="Converted">Converted</option>
                  <option value="Archived">Archived</option>
                </select>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={exportLeadsCSV}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-medium transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Export to CSV</span>
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="bg-[#121720] rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#090c10] text-[#8b9bb4] text-xs font-medium">
                    <tr>
                      <th className="py-3 px-4">Contact</th>
                      <th className="py-3 px-4">Service & Budget</th>
                      <th className="py-3 px-4">Submitted</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody data-ui className="divide-y divide-slate-800/60">
                    {filteredLeads.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="py-12 text-center text-slate-500">
                          No leads found matching current filter.
                        </td>
                      </tr>
                    ) : (
                      filteredLeads.map((l) => (
                        <tr key={l.id} className="hover:bg-slate-900/40 transition-colors">
                          <td className="py-3.5 px-4">
                            <p className="font-bold text-white text-sm">{l.name}</p>
                            <p className="text-[11px] text-slate-400 flex items-center gap-1.5 mt-0.5">
                              <Mail className="w-3 h-3 text-slate-500" />
                              <span>{l.email}</span>
                            </p>
                            <p className="text-[11px] text-slate-400 flex items-center gap-1.5 mt-0.5">
                              <Phone className="w-3 h-3 text-slate-500" />
                              <span>{l.phone}</span>
                            </p>
                          </td>

                          <td className="py-3.5 px-4">
                            <span className="font-medium text-slate-200">{l.service_interested}</span>
                            <p className="text-[11px] text-amber-400 font-semibold mt-0.5">{l.investment_budget}</p>
                          </td>

                          <td className="py-3.5 px-4 text-slate-400">
                            {new Date(l.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            <p className="text-[10px] text-slate-500">{new Date(l.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                          </td>

                          <td className="py-3.5 px-4">
                            <select
                              value={l.status}
                              onChange={(e) => handleUpdateStatus(l.id, e.target.value as any)}
                              className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border focus:outline-none cursor-pointer ${
                                l.status === 'New' ? 'bg-amber-500/10 text-amber-300 border-amber-500/30' :
                                l.status === 'Contacted' ? 'bg-sky-500/10 text-sky-300 border-sky-500/30' :
                                l.status === 'Qualified' ? 'bg-teal-500/10 text-teal-300 border-teal-500/30' :
                                l.status === 'Converted' ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' :
                                'bg-slate-800 text-slate-400 border-slate-700'
                              }`}
                            >
                              <option value="New" className="bg-slate-900 text-white">New</option>
                              <option value="Contacted" className="bg-slate-900 text-white">Contacted</option>
                              <option value="Qualified" className="bg-slate-900 text-white">Qualified</option>
                              <option value="Converted" className="bg-slate-900 text-white">Converted</option>
                              <option value="Archived" className="bg-slate-900 text-white">Archived</option>
                            </select>
                          </td>

                          <td className="py-3.5 px-4 text-right space-x-2">
                            <a
                              href={`https://wa.me/${l.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(l.name)},%20this%20is%20Mann%20Jain%20from%20Sixth%20Sense%20Investments%20regarding%20your%20inquiry.`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex p-1.5 bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white rounded-lg transition-colors"
                              title="Message on WhatsApp"
                            >
                              <MessageSquare className="w-4 h-4" />
                            </a>

                            <button
                              onClick={() => {
                                setSelectedLead(l);
                                setLeadNotes(l.notes || '');
                              }}
                              className="inline-flex p-1.5 bg-slate-800 text-slate-300 hover:bg-amber-500 hover:text-slate-950 rounded-lg transition-colors"
                              title="View & Edit Notes"
                            >
                              <FileText className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: BLOG CMS */}
        {activeTab === 'blogs' && (
          <div className="space-y-6 text-left">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">Financial Insights & Blog CMS</h2>
                <p className="text-xs text-slate-400">Author and publish articles directly to Cloudflare D1.</p>
              </div>

              <button
                onClick={handleOpenNewBlog}
                className="px-4 py-2 bg-[#d4af37] hover:bg-[#e5c158] text-[#090c10] font-medium rounded text-xs flex items-center gap-1.5 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Write New Insight</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((b) => (
                <div key={b.id} className="bg-[#121720] rounded-xl p-5 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#8b9bb4]">
                      <span className="bg-[#1a2230] px-2 py-0.5 rounded text-[#d4af37] font-medium">
                        {b.category}
                      </span>
                      <span className={b.status === 'Published' ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                        {b.status}
                      </span>
                    </div>

                    <h3 className="font-bold text-white text-base line-clamp-2">{b.title}</h3>
                    <p className="text-xs text-slate-400 line-clamp-2">{b.excerpt}</p>
                  </div>

                  <div className="flex items-center justify-between pt-3 text-xs">
                    <span className="text-[10px] text-slate-500">{new Date(b.created_at).toLocaleDateString()}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setEditingBlog(b);
                          setIsBlogModalOpen(true);
                        }}
                        className="p-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg transition-colors"
                        title="Edit Blog"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => handleDeleteBlog(b.id)}
                        className="p-1.5 bg-slate-900 hover:bg-rose-500/20 text-rose-400 rounded-lg transition-colors"
                        title="Delete Blog"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* LEAD NOTES MODAL */}
      {selectedLead && (
        <div data-ui="modal" className="fixed inset-0 z-50 bg-[#090c10]/90 flex items-center justify-center p-4">
          <div className="bg-[#121720] max-w-lg w-full rounded-2xl p-6 border border-slate-800 space-y-4 text-left">
            <div className="flex items-center justify-between pb-3">
              <h3 className="text-lg font-bold text-white">Lead Details: {selectedLead.name}</h3>
              <button onClick={() => setSelectedLead(null)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <p><strong className="text-white">Email:</strong> {selectedLead.email}</p>
              <p><strong className="text-white">Phone:</strong> {selectedLead.phone}</p>
              <p><strong className="text-white">Service:</strong> {selectedLead.service_interested}</p>
              <p><strong className="text-white">Budget:</strong> {selectedLead.investment_budget}</p>
              {selectedLead.message && (
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-slate-300 mt-2">
                  <p className="font-bold text-white mb-1">Client Message:</p>
                  <p>{selectedLead.message}</p>
                </div>
              )}
            </div>

            <div className="space-y-1 pt-2">
              <label className="text-xs font-bold text-white">Internal Advisory Notes:</label>
              <textarea
                rows={4}
                value={leadNotes}
                onChange={(e) => setLeadNotes(e.target.value)}
                placeholder="Add notes from WhatsApp or phone discussion..."
                className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-amber-400"
              ></textarea>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setSelectedLead(null)}
                className="px-4 py-2 bg-slate-900 text-slate-300 rounded-lg text-xs"
              >
                Close
              </button>
              <button
                onClick={handleSaveNotes}
                className="px-5 py-2 bg-amber-500 text-slate-950 font-bold rounded-lg text-xs"
              >
                Save Notes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BLOG CMS MODAL */}
      {isBlogModalOpen && editingBlog && (
        <div data-ui="modal" className="fixed inset-0 z-50 bg-[#090c10]/90 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#121720] max-w-2xl w-full rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-5 text-left my-8">
            <div className="flex items-center justify-between pb-3">
              <h3 className="text-lg font-bold text-white">
                {editingBlog.id ? 'Edit Article' : 'Compose New Financial Insight'}
              </h3>
              <button onClick={() => setIsBlogModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveBlog} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Article Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Budget Day Breakdown: Key Market Levels"
                  value={editingBlog.title || ''}
                  onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Category</label>
                  <select
                    value={editingBlog.category || 'Market Insights'}
                    onChange={(e) => setEditingBlog({ ...editingBlog, category: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Case Studies">Case Studies</option>
                    <option value="Wealth Advisory">Wealth Advisory</option>
                    <option value="Academy & Events">Academy & Events</option>
                    <option value="Market Insights">Market Insights</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Status</label>
                  <select
                    value={editingBlog.status || 'Published'}
                    onChange={(e) => setEditingBlog({ ...editingBlog, status: e.target.value as any })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Published">Published</option>
                    <option value="Draft">Draft</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Short Excerpt *</label>
                <textarea
                  rows={2}
                  required
                  placeholder="1-2 sentence executive summary..."
                  value={editingBlog.excerpt || ''}
                  onChange={(e) => setEditingBlog({ ...editingBlog, excerpt: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Full Article Content (Markdown format supported) *</label>
                <textarea
                  rows={8}
                  required
                  placeholder="Write your thesis, market levels, risk parameters..."
                  value={editingBlog.content || ''}
                  onChange={(e) => setEditingBlog({ ...editingBlog, content: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-amber-400"
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsBlogModalOpen(false)}
                  className="px-4 py-2 bg-slate-900 text-slate-300 rounded-lg text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#d4af37] hover:bg-[#e5c158] text-[#090c10] font-medium rounded text-xs transition-colors"
                >
                  Save & Publish to D1
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
