import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { CollectionPage } from './pages/CollectionPage';
import { ArtisanJournal } from './components/ArtisanJournal';
import { AdminDashboard } from './components/AdminDashboard';
import { ContactSection } from './components/ContactSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { InquiryModal } from './components/InquiryModal';
import { SizingGuideModal } from './components/SizingGuideModal';
import { FloatingControls } from './components/FloatingControls';
import { Footer } from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f8] dark:bg-[#1C1C1C] text-[#1b1b1b] dark:text-[#fcf9f8] transition-colors duration-300 font-sans-body selection:bg-[#c25a3f] selection:text-white dark:selection:bg-[#00A699]">
      <ScrollToTop />
      
      {/* Header Bar */}
      <Header />

      {/* Main Content Area with React Router */}
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<CollectionPage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/journal" element={<ArtisanJournal />} />
          <Route path="/inquiries" element={<ContactSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Modals & Drawers */}
      <ProductDetailModal />
      <CartDrawer />
      <InquiryModal />
      <SizingGuideModal />
      <FloatingControls />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;

