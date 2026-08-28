import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  CheckCircle2, 
  Minus, 
  Plus, 
  ArrowLeft, 
  ArrowRight 
} from 'lucide-react';
import { TourPackage } from '../types';
import { DUBAI_PACKAGE_OFFERS } from '../data/travelData';

interface TourDetailModalProps {
  selectedTour: TourPackage | null;
  onClose: () => void;
  onSelectTour: (tour: TourPackage) => void;
}

export function TourDetailModal({ selectedTour, onClose, onSelectTour }: TourDetailModalProps) {
  const [travelerCounts, setTravelerCounts] = useState<Record<string, number>>({});
  const [tourDetailActiveTab, setTourDetailActiveTab] = useState<'description' | 'inclusions' | 'itinerary' | 'dubai-offers'>('description');
  const [tourContactName, setTourContactName] = useState('');
  const [tourContactEmail, setTourContactEmail] = useState('');
  const [tourContactPhone, setTourContactPhone] = useState('');
  const [tourContactDate, setTourContactDate] = useState('');
  const [tourBookingSubmitted, setTourBookingSubmitted] = useState(false);
  const [tourBookingLoading, setTourBookingLoading] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  // Initialize traveler counts when selectedTour changes or is opened
  const handleOpenTour = (tour: TourPackage) => {
    onSelectTour(tour);
    const initialCounts: Record<string, number> = {};
    tour.travelerPricing.forEach((p) => {
      initialCounts[p.id] = p.id === 'Adult' ? 1 : 0;
    });
    setTravelerCounts(initialCounts);
    setTourDetailActiveTab('description');
    setShowCheckoutForm(false);
    setTourBookingSubmitted(false);
  };

  const handleTourBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTourBookingLoading(true);
    setTimeout(() => {
      setTourBookingLoading(false);
      setTourBookingSubmitted(true);
    }, 1500);
  };

  if (!selectedTour) return null;

  const calculatedTotal = selectedTour
    ? selectedTour.travelerPricing.reduce((sum, p) => {
        const count = travelerCounts[p.id] || (p.id === 'Adult' && Object.keys(travelerCounts).length === 0 ? 1 : 0);
        return sum + p.price * count;
      }, 0)
    : 0;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
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
          
          {/* Elegant Full-Page Navigation Header */}
          <div className="bg-white border-b border-gray-150 px-6 py-4 flex items-center justify-between shrink-0 z-50">
            <button
              onClick={onClose}
              className="flex items-center space-x-2.5 text-[#0b2545] hover:text-[#1d4270] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Main Escapes</span>
            </button>
            <div className="hidden sm:flex items-center space-x-3">
              <span className="text-[10px] font-mono tracking-widest text-[#0b2545] uppercase font-extrabold bg-[#0b2545]/5 px-3 py-1 rounded-md border border-[#0b2545]/10">
                Bespoke Experience Curator
              </span>
              <span className="text-xs text-gray-500 font-medium">|</span>
              <span className="text-xs font-semibold text-gray-700 font-sans">Official Booking Page</span>
            </div>
          </div>

          {/* Left Area and Right Area Content Body Wrapper */}
          <div className="flex-1 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden w-full h-full">

            {/* Left Area: Banner and Tabs (60% width) */}
            <div className="flex-1 flex flex-col h-auto md:h-full md:overflow-y-auto bg-white" id="tour_modal_left_pane">
            
              {/* Hero image header */}
              <div className="h-48 sm:h-64 md:h-72 w-full relative shrink-0">
                <img 
                  src={selectedTour.image} 
                  alt={selectedTour.name} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-black/20" />
                
                {/* Badge labels on the imagery */}
                <div className="absolute bottom-5 left-5 right-5 text-left md:bottom-7 md:left-7">
                  <div className="flex items-center space-x-2.5 mb-2 flex-wrap gap-y-1.5">
                    <span className="bg-amber-600 text-white text-[9px] font-bold font-mono px-2.5 py-1 rounded-md tracking-wider uppercase">
                      {selectedTour.region}
                    </span>
                    <span className="bg-white/25 backdrop-blur-xs text-white text-[9px] font-bold font-mono px-2.5 py-1 rounded-md tracking-wider animate-pulse">
                      ⏱️ {selectedTour.duration}
                    </span>
                  </div>
                  <h2 className="font-display font-black text-white text-lg sm:text-2xl md:text-3xl tracking-tight leading-tight uppercase">
                    {selectedTour.name}
                  </h2>
                </div>
              </div>

              {/* Clean & Elegant Dubai Package Offer Variant Selector */}
              {DUBAI_PACKAGE_OFFERS.some(o => o.id === selectedTour.id) && (
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
                      const isSelected = selectedTour.id === offer.id;
                      const origPrice = offer.startingPrice + 500;
                      return (
                        <button
                          key={offer.id}
                          type="button"
                          onClick={() => handleOpenTour(offer)}
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

              {/* Curated Sub Tabs Selector Block */}
              <div className="border-b border-gray-150 bg-slate-50 px-5 py-3 md:px-7 flex flex-wrap items-center gap-1.5 shrink-0" id="tour_subtabs_nav">
                {[
                  { id: 'description', label: 'Package Description' },
                  { id: 'inclusions', label: 'Inclusions & Exclusions' },
                  { id: 'itinerary', label: 'Itinerary Schedule' },
                  ...(DUBAI_PACKAGE_OFFERS.some(o => o.id === selectedTour.id) ? [{ id: 'dubai-offers', label: '✨ Compare All 6 Dubai Packages' }] : [])
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setTourDetailActiveTab(tab.id as any);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer ${
                      tourDetailActiveTab === tab.id
                        ? 'bg-[#0b2545] text-white shadow-xs'
                        : 'text-gray-500 hover:bg-gray-100 hover:text-slate-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Dynamic scrollable content area */}
              <div className="p-5 sm:p-6 md:p-8 flex-1 text-left">
                {tourDetailActiveTab === 'description' && (
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
                      <p className="text-gray-650 text-sm md:text-base leading-relaxed font-normal">
                        {selectedTour.description}
                      </p>
                    </div>
                    
                    <div className="bg-slate-50 p-5 rounded-2xl border border-gray-150">
                      <h5 className="font-bold text-gray-800 text-xs mb-3 flex items-center tracking-wide uppercase font-mono">
                        <Sparkles className="w-4 h-4 text-amber-500 mr-1.5 shrink-0" />
                        Highlight Travel Milestones
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-600">
                        {selectedTour.timelineDays.slice(0, 6).map((day, idx) => (
                          <div key={idx} className="flex items-start">
                            <span className="bg-white px-1.5 py-0.5 font-mono font-bold text-[#0b2545] rounded-md border text-[9px] mr-2 shrink-0">{day.day}</span>
                            <span className="font-medium text-slate-800 shrink-1">{day.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {tourDetailActiveTab === 'inclusions' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                  >
                    {/* What's Included */}
                    <div>
                      <h4 className="text-[10px] font-extrabold uppercase font-mono tracking-widest text-emerald-700 mb-3.5 flex items-center">
                        <span className="w-1.5 h-3 bg-emerald-600 mr-2 rounded-full inline-block"></span>
                        What Is Included (`What's Included`)
                      </h4>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedTour.inclusions.map((item, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-center space-x-2.5 p-3 rounded-2xl bg-emerald-50/20 border border-emerald-100 hover:border-emerald-200 transition-all"
                          >
                            <div className="w-4.5 h-4.5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 select-none">
                              <span className="text-[10px] font-extrabold font-sans">✓</span>
                            </div>
                            <span className="text-slate-850 text-xs font-semibold">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* What's Excluded */}
                    <div>
                      <h4 className="text-[10px] font-extrabold uppercase font-mono tracking-widest text-rose-700 mb-3.5 flex items-center">
                        <span className="w-1.5 h-3 bg-rose-600 mr-2 rounded-full inline-block"></span>
                        Exclusions (`Not Included`)
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedTour.exclusions.map((item, idx) => (
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

                {tourDetailActiveTab === 'itinerary' && (
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
                      {selectedTour.timelineDays.map((day, idx) => (
                        <div key={idx} className="relative">
                          {/* Connector Point */}
                          <div className="absolute -left-[32px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#0b2545] flex items-center justify-center z-10">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                          </div>
                          
                          <div className="space-y-1 bg-slate-50 p-4 rounded-2xl border border-slate-150 hover:border-slate-350 transition-colors">
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

                {tourDetailActiveTab === 'dubai-offers' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-[10px] font-extrabold uppercase font-mono tracking-widest text-[#0b2545] flex items-center">
                          <span className="w-1.5 h-3 bg-amber-600 mr-2 rounded-full inline-block"></span>
                          All 6 Exclusive Adansi Travels Dubai Offers
                        </h4>
                        <span className="text-emerald-700 bg-emerald-50 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-emerald-200">
                          ✨ GH₵500 Instant Discount Applied
                        </span>
                      </div>
                      <p className="text-gray-500 text-xs font-normal">
                        Explore each specially curated Dubai package offer. Select any package below to switch your booking view instantly.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {DUBAI_PACKAGE_OFFERS.map((offer) => {
                        const isSelected = selectedTour.id === offer.id;
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
                            {isSelected && (
                              <span className="absolute top-3 right-3 bg-amber-500 text-slate-950 font-bold text-[9px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                                <CheckCircle2 className="w-3 h-3" /> ACTIVE SELECTION
                              </span>
                            )}

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
                                onClick={() => handleOpenTour(offer)}
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

            {/* Right Area: Contact / Passenger selection panel (40% width) */}
            <div className="w-full md:w-[380px] lg:w-[420px] border-t md:border-t-0 md:border-l border-gray-150 bg-slate-50 flex flex-col justify-between shrink-0 h-auto md:h-full md:overflow-y-auto" id="tour_modal_right_pane">
              {tourBookingSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 md:p-8 text-center h-full flex flex-col items-center justify-center space-y-5"
                  id="tour_booking_success_card"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono font-extrabold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
                      VOUCHER RECEIVED
                    </span>
                    <h3 className="font-display font-black text-xl text-gray-900 tracking-tight leading-none mt-2.5">
                      Spot Reserved!
                    </h3>
                    <p className="text-[12px] text-gray-500 max-w-xs leading-relaxed mx-auto font-normal">
                      Akwaaba, <strong>{tourContactName}</strong>! Our ticketing systems have authenticated your pre-registration lock.
                    </p>
                  </div>

                  {/* Receipt Ticket Box */}
                  <div className="w-full bg-white border border-gray-250 rounded-2xl p-4.5 text-left text-xs divide-y shrink-0 space-y-3.5 divide-gray-100 shadow-2xs">
                    <div className="pt-0 flex justify-between items-center text-[9px] uppercase font-mono font-medium text-gray-400">
                      <span>Security Ticket ID</span>
                      <span className="font-bold text-slate-800">TTP-VRC-{selectedTour.id.slice(5).toUpperCase()}</span>
                    </div>
                    <div className="pt-2.5 flex justify-between items-start">
                      <span className="text-gray-500 font-medium shrink-0">Selected Spaces:</span>
                      <span className="text-right font-mono font-bold text-slate-800 leading-snug">
                        {(Object.entries(travelerCounts) as [string, number][])
                          .filter(([_, count]) => count > 0)
                          .map(([label, count]) => `${count}x ${label}`)
                          .join(', ') || "1x Adult"}
                      </span>
                    </div>
                    <div className="pt-2.5 flex justify-between items-center">
                      <span className="text-gray-500 font-medium">Representative:</span>
                      <span className="font-bold text-slate-800">{tourContactName}</span>
                    </div>
                    <div className="pt-2.5 flex justify-between items-center text-sm">
                      <span className="font-bold text-[#0b2545]">Vetted Total Price:</span>
                      <span className="font-mono font-black text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-150">{selectedTour.currency}{calculatedTotal.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="w-full space-y-2 flex-col">
                    <div className="bg-slate-150 p-3.5 rounded-2xl text-[10px] text-gray-500 font-normal leading-relaxed text-left border mb-2">
                      💡 The head of travel operations is queuing your booking details. Standard callback timing takes **1 to 2 hours** to email ({tourContactEmail}) or call your telephone ({tourContactPhone}) to finalize flight seats and passports.
                    </div>
                    
                    <button
                      type="button"
                      onClick={onClose}
                      className="w-full bg-slate-900 border border-slate-950 text-white hover:bg-slate-950 py-3 rounded-2xl text-xs font-bold transition-all uppercase tracking-wide cursor-pointer"
                    >
                      Acknowledge & Close
                    </button>
                  </div>
                </motion.div>
              ) : showCheckoutForm ? (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-5 md:p-7 flex flex-col h-full justify-between"
                  id="tour_booking_form_wrapper"
                >
                  <div className="space-y-4 text-left">
                    <button
                      type="button"
                      onClick={() => setShowCheckoutForm(false)}
                      className="text-[10px] text-gray-500 hover:text-black font-mono font-bold uppercase tracking-wider flex items-center mb-1 cursor-pointer"
                    >
                      ← BACK TO PRICING DETAILS
                    </button>
                    
                    <div>
                      <span className="text-[9px] font-mono font-black text-amber-700 tracking-widest uppercase block">
                        secure travel package rate
                      </span>
                      <h3 className="font-display font-black text-lg text-slate-900 tracking-tight leading-tight uppercase">
                        Representative Contact
                      </h3>
                    </div>

                    <form onSubmit={handleTourBookingSubmit} className="space-y-3.5" id="checkout_details_form">
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold font-mono text-slate-500 block uppercase">Full Representative Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ama Serwaa"
                          value={tourContactName}
                          onChange={(e) => setTourContactName(e.target.value)}
                          className="w-full bg-white border border-gray-250 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-hidden"
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold font-mono text-slate-500 block uppercase">Preferred Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. amaserwaa@example.com"
                          value={tourContactEmail}
                          onChange={(e) => setTourContactEmail(e.target.value)}
                          className="w-full bg-white border border-gray-250 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-hidden"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] font-bold font-mono text-slate-500 block uppercase">Phone / Whatsapp *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +233 (0) 244 555 666"
                          value={tourContactPhone}
                          onChange={(e) => setTourContactPhone(e.target.value)}
                          className="w-full bg-white border border-gray-250 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-hidden"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] font-bold font-mono text-slate-500 block uppercase">Preferred Travel Month / Timing *</label>
                        <input
                          type="text"
                          required
                          value={tourContactDate}
                          onChange={(e) => setTourContactDate(e.target.value)}
                          placeholder="e.g. Flexible / Desired Month"
                          className="w-full bg-white border border-gray-250 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-hidden font-mono"
                        />
                      </div>

                      <div className="bg-slate-200/50 p-4 rounded-xl border border-slate-300 text-[10px] text-gray-500 font-normal leading-normal">
                        <div className="flex justify-between items-center mb-1 font-bold text-slate-700">
                          <span>Summed Reservation Price:</span>
                          <span className="font-mono text-xs">{selectedTour.currency}{calculatedTotal.toLocaleString()}</span>
                        </div>
                        <span>Securing locks your rate before any flights seat hikes. No online credit card debit occurs yet. Invoice documentation will be dispatched.</span>
                      </div>

                      <button
                        type="submit"
                        disabled={tourBookingLoading}
                        className="w-full bg-black hover:bg-slate-800 text-white font-sans rounded-xl py-3 text-xs font-bold shadow-lg transition-all uppercase tracking-wide flex items-center justify-center space-x-2 cursor-pointer"
                      >
                        {tourBookingLoading ? (
                          <span>ISSUING RESERVATION CODE...</span>
                        ) : (
                          <span>SECURE PROMOTIONAL PRICE</span>
                        )}
                      </button>
                    </form>
                  </div>
                </motion.div>
              ) : (
                <div className="p-5 md:p-7 flex flex-col h-full justify-between" id="tour_passengers_calculator">
                  
                  {/* Top Selection */}
                  <div className="space-y-4 text-left">
                    <div>
                      <span className="text-[9px] font-mono font-extrabold text-amber-600 tracking-widest uppercase block mb-1">
                        PROPORTIONAL SCHEME
                      </span>
                      <div className="flex items-baseline space-x-1">
                        <span className="text-[10px] text-slate-400 font-bold uppercase font-mono">FROM</span>
                        <span className="text-xl font-mono font-black text-slate-905">
                          {selectedTour.currency}{selectedTour.startingPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <label className="text-[9px] font-bold font-sans text-[#0b2545] tracking-widest block uppercase border-b pb-2">
                        SELECT TRAVELERS
                      </label>

                      <div className="space-y-2.5 divide-y divide-gray-100 max-h-[35vh] overflow-y-auto pr-1" id="pricing-selector-rows">
                        {selectedTour.travelerPricing.map((pricing) => {
                          const count = travelerCounts[pricing.id] || (pricing.id === 'Adult' && Object.keys(travelerCounts).length === 0 ? 1 : 0);
                          return (
                            <div 
                              key={pricing.id} 
                              className="flex items-center justify-between pt-2.5 first:pt-0"
                            >
                              <div className="text-left py-0.5">
                                <h5 className="text-xs font-bold text-gray-800 leading-none">{pricing.label}</h5>
                                <span className="text-[10px] text-gray-400 font-mono mt-1 block">{selectedTour.currency}{pricing.price.toLocaleString()}</span>
                              </div>

                              <div className="flex items-center space-x-2.5">
                                {/* Decrement */}
                                <button
                                  type="button"
                                  onClick={() => {
                                    setTravelerCounts(prev => ({
                                      ...prev,
                                      [pricing.id]: Math.max(0, (prev[pricing.id] !== undefined ? prev[pricing.id] : (pricing.id === 'Adult' ? 1 : 0)) - 1)
                                    }));
                                  }}
                                  disabled={count === 0}
                                  className={`w-6.5 h-6.5 rounded-full flex items-center justify-center transition-all border shrink-0 cursor-pointer ${
                                    count === 0 
                                      ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50/50' 
                                      : 'border-slate-300 hover:border-slate-800 text-slate-800 bg-white hover:bg-slate-100'
                                  }`}
                                >
                                  <Minus className="w-3 h-3" />
                                </button>

                                {/* Count */}
                                <span className="w-4 text-center text-xs font-mono font-bold text-slate-900 select-none shrink-0">
                                  {count}
                                </span>

                                {/* Increment */}
                                <button
                                  type="button"
                                  onClick={() => {
                                    setTravelerCounts(prev => ({
                                      ...prev,
                                      [pricing.id]: (prev[pricing.id] !== undefined ? prev[pricing.id] : (pricing.id === 'Adult' ? 1 : 0)) + 1
                                    }));
                                  }}
                                  className="w-6.5 h-6.5 rounded-full border border-slate-300 hover:border-slate-800 text-slate-800 bg-white hover:bg-slate-100 flex items-center justify-center transition-all shrink-0 cursor-pointer"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>

                                {/* Subtotal */}
                                {count > 0 && (
                                  <span className="text-[10px] font-mono font-bold text-emerald-700 w-16 text-right break-words shrink-0">
                                    {selectedTour.currency}{(pricing.price * count).toLocaleString()}
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Summary Pricing & Action */}
                  <div className="pt-3 border-t border-gray-250 mt-3 space-y-3">
                    <div className="bg-white p-4.5 rounded-2xl border border-gray-150 flex items-center justify-between">
                      <div className="text-left">
                        <span className="text-[9px] text-gray-400 font-bold block uppercase tracking-wider font-mono">Calculated Total</span>
                        <span className="text-xl font-mono font-black text-[#0b2545]">
                          {selectedTour.currency}{calculatedTotal.toLocaleString()}
                        </span>
                      </div>
                      {calculatedTotal === 0 && (
                        <span className="text-[9px] text-amber-605 bg-amber-50 px-2 py-1 rounded-md text-right font-medium leading-none max-w-[130px]">Please select traveler volume.</span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        if (calculatedTotal > 0) {
                          setShowCheckoutForm(true);
                        }
                      }}
                      disabled={calculatedTotal === 0}
                      className={`w-full py-3.5 rounded-xl text-xs font-bold tracking-widest transition-all flex items-center justify-center space-x-2 select-none cursor-pointer ${
                        calculatedTotal === 0
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none border border-transparent'
                          : 'bg-[#0b2545] text-white hover:bg-slate-900 hover:shadow-md'
                      }`}
                    >
                      <span>PROCEED TO BOOK</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              )}
            </div>

          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
