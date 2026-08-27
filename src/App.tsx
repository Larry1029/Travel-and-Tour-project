import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { FooterSection } from './components/FooterSection';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { ToursPage } from './pages/ToursPage';
import { TourDetailPage } from './pages/TourDetailPage';
import { PlanTripPage } from './pages/PlanTripPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-[#0b2545] selection:text-white" id="main_app_layout">
          {/* Top Sticky Modern Navigation Bar */}
          <Navbar />

          {/* Main Routing View Body */}
          <main className="flex-1 w-full" id="main_content_region">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tours" element={<ToursPage />} />
              <Route path="/tours/:tourId" element={<TourDetailPage />} />
              <Route path="/plan" element={<PlanTripPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Global Multi-Page Footer */}
          <FooterSection />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
