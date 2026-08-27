import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';
import { TourPackage } from '../types';
import { DUBAI_PACKAGE_OFFERS } from '../data/travelData';
import { TourBookingPane } from './TourBookingPane';

interface TourDetailModalProps {
  tour: TourPackage | null;
  onClose: () => void;
  onSelectTour?: (tour: TourPackage) => void;
}

export const TourDetailModal: React.FC<TourDetailModalProps> = ({ tour, onClose, onSelectTour }) => {
  const [activeTab, setActiveTab] = useState<'description' | 'inclusions' | 'itinerary' | 'dubai-offers'>('description');

  if (!tour) return null;

  const isDubaiOffer = DUBAI_PACKAGE_OFFERS.some(o => o.id === tour.id);

  return (
    <div 
      className="fixed inset-0 z-[120] bg-white flex flex-col h-screen w-screen overflow-hidden" 
      id="tour_modal_overlay"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        className="w-full h-full flex flex-col bg-white overflow-hidden relative"
        id="tour_modal_content"
      >
        {/* Navigation Bar */}
        <div className="bg-white border-b border-gray-150 px-6 py-4 flex items-center justify-between shrink-0 z-50">
          <button
            onClick={onClose}
            className="flex items-center space-x-2.5 text-[#0b2545] hover:text-[#1d4270] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Escapes</span>
          </button>
          
          <div className="flex items-center space-x-3">
            <Link
              to={`/tours/${tour.id}`}
              onClick={onClose}
              className="text-[11px] font-bold text-indigo-700 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg border border-indigo-100 flex items-center gap-1.5 transition-all"
            >
              <span>Direct Link Page</span>
              <ExternalLink className="w-3 h-3" />
            </Link>

            <span className="hidden sm:inline text-[10px] font-mono tracking-widest text-[#0b2545] uppercase font-extrabold bg-[#0b2545]/5 px-3 py-1 rounded-md border border-[#0b2545]/10">
              Bespoke Experience Curator
            </span>
          </div>
        </div>

        {/* Content Body Wrapper */}
        <div className="flex-1 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden w-full h-full">

          {/* Left Area: Banner and Tabs (60% width) */}
          <div className="flex-1 flex flex-col h-auto md:h-full md:overflow-y-auto bg-white" id="tour_modal_left_pane">
            
            {/* Hero image header */}
            <div className="h-48 sm:h-64 md:h-72 w-full relative shrink-0">
              <img 
                src={tour.image} 
                alt={tour.name} 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-black/20" />
              
              {/* Badge labels */}
              <div className="absolute bottom-5 left-5 right-5 text-left md:bottom-7 md:left-7">
                <div className="flex items-center space-x-2.5 mb-2 flex-wrap gap-y-1.5">
                  <span className="bg-amber-600 text-white text-[9px] font-bold font-mono px-2.5 py-1 rounded-md tracking-wider uppercase">
                    {tour.region}
                  </span>
                  <span className="bg-white/25 backdrop-blur-xs text-white text-[9px] font-bold font-mono px-2.5 py-1 rounded-md tracking-wider">
                    ⏱️ {tour.duration}
                  </span>
                </div>
                <h2 className="font-display font-black text-white text-lg sm:text-2xl md:text-3xl tracking-tight leading-tight uppercase">
                  {tour.name}
                </h2>
              </div>
            </div>

            {/* Dubai Package Offers Selector */}
            {isDubaiOffer && (
              <div className="bg-gradient-to-r from-amber-500/10 via-slate-50 to-amber-500/5 border-b border-amber-200/60 p-4 sm:p-5 md:px-7 shrink-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-3">
                  <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                    <span className="bg-[#0b2545] text-white text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-lg uppercase tracking-wider">
                      Adansi Travels Dubai Offers
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-md flex items-center gap-1 border border-emerald-200">
                      <Sparkles className="w-3 h-3 text-emerald-600 shrink-0" />
                      GH₵500 Discount Applied
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">
                    Select a package offer to view details & book:
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                  {DUBAI_PACKAGE_OFFERS.map((offer) => {
                    const isSelected = tour.id === offer.id;
                    const origPrice = offer.startingPrice + 500;
                    return (
                      <button
                        key={offer.id}
                        type="button"
                        onClick={() => onSelectTour && onSelectTour(offer)}
                        className={`text-left p-2.5 rounded-xl transition-all border cursor-pointer flex flex-col justify-between relative ${
                          isSelected
                            ? 'bg-white border-amber-500 ring-2 ring-amber-500/30 shadow-md scale-[1.02]'
                            : 'bg-white/80 border-gray-200 hover:border-gray-300 hover:bg-white'
                        }`}
                      >
                        {isSelected && (
                          <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-slate-950 rounded-full p-0.5 shadow-xs">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </span>
                        )}
                        <div>
                          <span className="text-[9px] font-mono font-bold uppercase text-amber-700 block truncate">
                            {offer.duration}
                          </span>
                          <h5 className="font-extrabold text-slate-900 text-xs leading-snug line-clamp-2 mt-0.5">
                            {offer.name.replace('ADANSI 13 ', '')}
                          </h5>
                        </div>
                        <div className="mt-2 pt-1.5 border-t border-gray-100 flex items-baseline gap-1 flex-wrap">
                          <span className="text-[10px] text-gray-400 line-through font-mono">
                            {offer.currency}{origPrice.toLocaleString()}
                          </span>
                          <span className="text-xs font-black text-[#0b2545] font-mono">
                            {offer.currency}{offer.startingPrice.toLocaleString()}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Subtabs Selector */}
            <div className="border-b border-gray-150 bg-slate-50 px-5 py-3 md:px-7 flex flex-wrap items-center gap-1.5 shrink-0" id="tour_subtabs_nav">
              {[
                { id: 'description', label: 'Package Description' },
                { id: 'inclusions', label: 'Inclusions & Exclusions' },
                { id: 'itinerary', label: 'Itinerary Schedule' },
                ...(isDubaiOffer ? [{ id: 'dubai-offers', label: '✨ Compare All 6 Dubai Packages' }] : [])
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#0b2545] text-white shadow-xs'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content area */}
            <div className="p-5 sm:p-6 md:p-8 flex-1 text-left">
              {activeTab === 'description' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h4 className="text-[10px] font-extrabold uppercase font-mono tracking-widest text-[#0b2545] mb-2 flex items-center">
                      <span className="w-1.5 h-3 bg-amber-600 mr-2 rounded-full inline-block"></span>
                      Immersive Travel Overview
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                      {tour.description}
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-5 rounded-2xl border border-gray-150">
                    <h5 className="font-bold text-gray-800 text-xs mb-3 flex items-center tracking-wide uppercase font-mono">
                      <Sparkles className="w-4 h-4 text-amber-500 mr-1.5 shrink-0" />
                      Highlight Travel Milestones
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-600">
                      {tour.timelineDays.slice(0, 6).map((day, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="bg-white px-1.5 py-0.5 font-mono font-bold text-[#0b2545] rounded-md border text-[9px] mr-2 shrink-0">{day.day}</span>
                          <span className="font-medium text-slate-800 shrink-1">{day.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'inclusions' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div>
                    <h4 className="text-[10px] font-extrabold uppercase font-mono tracking-widest text-emerald-700 mb-3.5 flex items-center">
                      <span className="w-1.5 h-3 bg-emerald-600 mr-2 rounded-full inline-block"></span>
                      What Is Included
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {tour.inclusions.map((item, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center space-x-2.5 p-3 rounded-2xl bg-emerald-50/20 border border-emerald-100 hover:border-emerald-200 transition-all"
                        >
                          <div className="w-4.5 h-4.5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 select-none">
                            <span className="text-[10px] font-extrabold font-sans">✓</span>
                          </div>
                          <span className="text-slate-800 text-xs font-semibold">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-extrabold uppercase font-mono tracking-widest text-rose-700 mb-3.5 flex items-center">
                      <span className="w-1.5 h-3 bg-rose-600 mr-2 rounded-full inline-block"></span>
                      Exclusions (Not Included)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {tour.exclusions.map((item, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center space-x-2.5 p-3 rounded-2xl bg-rose-50/20 border border-rose-100 hover:border-rose-200 transition-all"
                        >
                          <div className="w-4.5 h-4.5 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 shrink-0 select-none font-bold">
                            <span className="text-[10px]">✕</span>
                          </div>
                          <span className="text-slate-700 text-xs font-normal capitalize">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'itinerary' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h4 className="text-[10px] font-extrabold uppercase font-mono tracking-widest text-[#0b2545] mb-4 flex items-center">
                    <span className="w-1.5 h-3 bg-amber-600 mr-2 rounded-full inline-block"></span>
                    Complete Day-by-Day Route Itinerary
                  </h4>
                  
                  <div className="relative border-l-2 border-slate-150 ml-3 pl-6 space-y-5">
                    {tour.timelineDays.map((day, idx) => (
                      <div key={idx} className="relative">
                        <div className="absolute -left-[32px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#0b2545] flex items-center justify-center z-10">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                        </div>
                        
                        <div className="space-y-1 bg-slate-50 p-4 rounded-2xl border border-slate-150 hover:border-slate-300 transition-colors">
                          <span className="text-[9px] font-mono font-bold text-amber-700 uppercase tracking-widest">
                            {day.day}
                          </span>
                          <h5 className="font-display font-extrabold text-gray-800 text-sm leading-snug">
                            {day.title}
                          </h5>
                          <p className="text-gray-500 text-xs font-normal leading-relaxed">
                            {day.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'dubai-offers' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-[10px] font-extrabold uppercase font-mono tracking-widest text-[#0b2545] flex items-center">
                      <span className="w-1.5 h-3 bg-amber-600 mr-2 rounded-full inline-block"></span>
                      All 6 Exclusive Adansi Travels Dubai Offers
                    </h4>
                    <span className="text-emerald-700 bg-emerald-50 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-emerald-200">
                      ✨ GH₵500 Instant Discount Applied
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {DUBAI_PACKAGE_OFFERS.map((offer) => {
                      const isSelected = tour.id === offer.id;
                      const origPrice = offer.startingPrice + 500;
                      return (
                        <div
                          key={offer.id}
                          className={`p-4 rounded-2xl border transition-all flex flex-col justify-between space-y-3 relative ${
                            isSelected
                              ? 'bg-amber-500/5 border-amber-500 shadow-md ring-1 ring-amber-500'
                              : 'bg-slate-50/80 border-gray-200 hover:border-gray-300 hover:bg-white'
                          }`}
                        >
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="bg-[#0b2545] text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded">
                                {offer.duration}
                              </span>
                            </div>

                            <h5 className="font-extrabold text-slate-900 text-sm leading-snug">
                              {offer.name}
                            </h5>

                            <p className="text-gray-500 text-xs mt-1.5 line-clamp-2">
                              {offer.description}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-gray-150 flex items-center justify-between">
                            <div>
                              <span className="text-[10px] text-gray-400 line-through font-mono block">
                                {offer.currency}{origPrice.toLocaleString()}
                              </span>
                              <span className="text-base font-black text-[#0b2545] font-mono">
                                {offer.currency}{offer.startingPrice.toLocaleString()}
                              </span>
                            </div>

                            <button
                              type="button"
                              onClick={() => onSelectTour && onSelectTour(offer)}
                              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                                  : 'bg-[#0b2545] text-white hover:bg-[#15345c]'
                              }`}
                            >
                              {isSelected ? 'Currently Viewing' : 'Select Package'}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Area: Booking Pane */}
          <div className="w-full md:w-[380px] lg:w-[420px] border-t md:border-t-0 md:border-l border-gray-150 bg-slate-50 flex flex-col justify-between shrink-0 h-auto md:h-full md:overflow-y-auto" id="tour_modal_right_pane">
            <TourBookingPane tour={tour} onBookingComplete={onClose} />
          </div>

        </div>
      </motion.div>
    </div>
  );
};
