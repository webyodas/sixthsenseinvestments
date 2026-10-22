import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { BookingModal } from './components/BookingModal';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Academy } from './pages/Academy';
import { BlogPage } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Contact } from './pages/Contact';
import { Admin } from './pages/Admin';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedBlogSlug, setSelectedBlogSlug] = useState<string>('');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingService, setBookingService] = useState<string>('');

  // Handle URL hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      const path = window.location.pathname;

      if (path.includes('admin') || hash === 'admin' || hash === 'sixthsenseinvestments-admin') {
        setCurrentPage('admin');
      } else if (hash.startsWith('blog/')) {
        const slug = hash.replace('blog/', '');
        setSelectedBlogSlug(slug);
        setCurrentPage('blog-post');
      } else if (hash && ['home', 'about', 'services', 'academy', 'blog', 'contact', 'admin'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceTitle?: string) => {
    if (serviceTitle) setBookingService(serviceTitle);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-[100dvh] bg-[#090c10] text-[#f1f4f8] flex flex-col selection:bg-[#d4af37]/30 selection:text-[#f1f4f8]">
      {/* Navigation */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <Home 
            onNavigate={navigateTo} 
            onOpenBooking={() => handleOpenBooking()} 
          />
        )}

        {currentPage === 'about' && (
          <About 
            onNavigate={navigateTo} 
            onOpenBooking={() => handleOpenBooking()} 
          />
        )}

        {currentPage === 'services' && (
          <Services 
            onSelectService={(srv) => handleOpenBooking(srv)} 
          />
        )}

        {currentPage === 'academy' && (
          <Academy 
            onApply={() => handleOpenBooking('Stock Market Academy / Mentorship')} 
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage 
            onSelectBlog={(slug) => {
              setSelectedBlogSlug(slug);
              setCurrentPage('blog-post');
              window.location.hash = `blog/${slug}`;
            }} 
          />
        )}

        {currentPage === 'blog-post' && (
          <BlogPost 
            slug={selectedBlogSlug}
            onBack={() => navigateTo('blog')}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentPage === 'contact' && (
          <Contact />
        )}

        {currentPage === 'admin' && (
          <Admin />
        )}
      </main>

      {/* Global Booking Consultation Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        initialService={bookingService} 
      />

      {/* Sticky Mobile Action Bar (hidden in admin) */}
      {currentPage !== 'admin' && (
        <StickyMobileBar onOpenBooking={() => handleOpenBooking()} />
      )}

      {/* Institutional Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
