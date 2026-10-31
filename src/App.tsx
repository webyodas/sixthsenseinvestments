import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { BookingModal } from './components/BookingModal';
import { Home } from './pages/Home';

// ARCHIVED ENTERPRISE MODULES (100% preserved for post-pitch conversion)
import { About as AboutArchived } from './pages/About';
import { Services as ServicesArchived } from './pages/Services';
import { Academy as AcademyArchived } from './pages/Academy';
import { BlogPage as BlogArchived } from './pages/Blog';
import { BlogPost as BlogPostArchived } from './pages/BlogPost';
import { Contact as ContactArchived } from './pages/Contact';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingService, setBookingService] = useState<string>('');
  const [archivedView, setArchivedView] = useState<string | null>(null);
  const [selectedBlogSlug, setSelectedBlogSlug] = useState<string>('');

  // Handle in-page section scrolling & preserved archive deep-links
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (!hash) {
        setArchivedView(null);
        return;
      }

      if (hash.startsWith('archive-blog/')) {
        setSelectedBlogSlug(hash.replace('archive-blog/', ''));
        setArchivedView('blog-post');
      } else if (['archive-about', 'archive-services', 'archive-academy', 'archive-blog', 'archive-contact'].includes(hash)) {
        setArchivedView(hash);
      } else {
        // Single-Page In-Section Scroll
        setArchivedView(null);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleScrollTo = (sectionId: string) => {
    if (archivedView) {
      setArchivedView(null);
      window.location.hash = '';
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (serviceTitle?: string) => {
    if (serviceTitle) setBookingService(serviceTitle);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-[100dvh] bg-[#090c10] text-[#f1f4f8] flex flex-col selection:bg-[#d4af37]/30 selection:text-[#f1f4f8]">
      {/* Navigation */}
      <Navbar onScrollTo={handleScrollTo} onNavigate={handleScrollTo} />

      {/* Main Single-Page Portfolio Showcase */}
      <main className="flex-1">
        {archivedView === 'archive-about' ? (
          <AboutArchived onOpenBooking={() => handleOpenBooking()} onNavigate={handleScrollTo} />
        ) : archivedView === 'archive-services' ? (
          <ServicesArchived onSelectService={(title) => handleOpenBooking(title)} />
        ) : archivedView === 'archive-academy' ? (
          <AcademyArchived onApply={() => handleOpenBooking('Trading Mentorship')} />
        ) : archivedView === 'archive-blog' ? (
          <BlogArchived onSelectBlog={(slug) => { setSelectedBlogSlug(slug); setArchivedView('blog-post'); }} />
        ) : archivedView === 'blog-post' ? (
          <BlogPostArchived slug={selectedBlogSlug} onBack={() => setArchivedView('archive-blog')} onOpenBooking={() => handleOpenBooking()} />
        ) : archivedView === 'archive-contact' ? (
          <ContactArchived />
        ) : (
          <Home 
            onNavigate={handleScrollTo} 
            onOpenBooking={handleOpenBooking} 
          />
        )}
      </main>

      {/* Footer */}
      <Footer onScrollTo={handleScrollTo} onNavigate={handleScrollTo} />

      {/* Sticky Bottom Mobile Bar */}
      <StickyMobileBar onOpenBooking={() => handleOpenBooking()} />

      {/* Lead Consultation Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        initialService={bookingService} 
      />
    </div>
  );
}
export default App;