import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Minus, Plus, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { TourPackage } from '../types';

interface TourBookingPaneProps {
  tour: TourPackage;
  onBookingComplete?: () => void;
}

export const TourBookingPane: React.FC<TourBookingPaneProps> = ({ tour, onBookingComplete }) => {
  const [travelerCounts, setTravelerCounts] = useState<Record<string, number>>({ Adult: 1 });
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [tourContactName, setTourContactName] = useState('');
  const [tourContactEmail, setTourContactEmail] = useState('');
  const [tourContactPhone, setTourContactPhone] = useState('');
  const [tourContactDate, setTourContactDate] = useState('');
  const [tourBookingLoading, setTourBookingLoading] = useState(false);
  const [tourBookingSubmitted, setTourBookingSubmitted] = useState(false);

  const calculatedTotal = tour.travelerPricing.reduce((sum, item) => {
    const count = travelerCounts[item.id] || 0;
    return sum + (item.price * count);
  }, 0);

  const handleTourBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tourContactName.trim() || !tourContactEmail.trim() || !tourContactPhone.trim()) return;

    setTourBookingLoading(true);
    setTimeout(() => {
      setTourBookingLoading(false);
      setTourBookingSubmitted(true);
    }, 1200);
  };

  if (tourBookingSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-6 md:p-8 text-center h-full flex flex-col items-center justify-center space-y-5 bg-white rounded-3xl border border-gray-150 shadow-sm"
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
        <div className="w-full bg-slate-50 border border-gray-250 rounded-2xl p-4.5 text-left text-xs divide-y shrink-0 space-y-3.5 divide-gray-100 shadow-2xs">
          <div className="pt-0 flex justify-between items-center text-[9px] uppercase font-mono font-medium text-gray-400">
            <span>Security Ticket ID</span>
            <span className="font-bold text-slate-800">TTP-VRC-{tour.id.slice(5).toUpperCase()}</span>
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
            <span className="font-mono font-black text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-150">{tour.currency}{calculatedTotal.toLocaleString()}</span>
          </div>
        </div>

        <div className="w-full space-y-2 flex flex-col">
          <div className="bg-slate-100 p-3.5 rounded-2xl text-[10px] text-gray-500 font-normal leading-relaxed text-left border mb-2">
            💡 The head of travel operations is queuing your booking details. Standard callback timing takes <strong>1 to 2 hours</strong> to email ({tourContactEmail}) or call your telephone ({tourContactPhone}) to finalize flight seats and passports.
          </div>
          
          {onBookingComplete && (
            <button
              type="button"
              onClick={onBookingComplete}
              className="w-full bg-slate-900 border border-slate-950 text-white hover:bg-slate-950 py-3 rounded-2xl text-xs font-bold transition-all uppercase tracking-wide cursor-pointer"
            >
              Acknowledge & Close
            </button>
          )}
        </div>
      </motion.div>
    );
  }

  if (showCheckoutForm) {
    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="p-5 md:p-7 flex flex-col h-full justify-between bg-white rounded-3xl border border-gray-150 shadow-sm"
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

            <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 text-[10px] text-gray-500 font-normal leading-normal">
              <div className="flex justify-between items-center mb-1 font-bold text-slate-700">
                <span>Summed Reservation Price:</span>
                <span className="font-mono text-xs">{tour.currency}{calculatedTotal.toLocaleString()}</span>
              </div>
              <span>Securing locks your rate before any flights seat hikes. No online credit card debit occurs yet. Official itinerary invoice will be dispatched.</span>
            </div>

            <button
              type="submit"
              disabled={tourBookingLoading}
              className="w-full bg-[#0b2545] hover:bg-[#15345c] text-white font-sans rounded-xl py-3 text-xs font-bold shadow-lg transition-all uppercase tracking-wide flex items-center justify-center space-x-2 cursor-pointer"
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
    );
  }

  return (
    <div className="p-5 md:p-7 flex flex-col h-full justify-between bg-white rounded-3xl border border-gray-150 shadow-sm" id="tour_passengers_calculator">
      
      {/* Top Selection */}
      <div className="space-y-4 text-left">
        <div>
          <span className="text-[9px] font-mono font-extrabold text-amber-600 tracking-widest uppercase block mb-1">
            PROPORTIONAL SCHEME
          </span>
          <div className="flex items-baseline space-x-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase font-mono">FROM</span>
            <span className="text-xl font-mono font-black text-slate-900">
              {tour.currency}{tour.startingPrice.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="space-y-2.5">
          <label className="text-[9px] font-bold font-sans text-[#0b2545] tracking-widest block uppercase border-b pb-2">
            SELECT TRAVELERS
          </label>

          <div className="space-y-2.5 divide-y divide-gray-100 max-h-[35vh] overflow-y-auto pr-1" id="pricing-selector-rows">
            {tour.travelerPricing.map((pricing) => {
              const count = travelerCounts[pricing.id] || 0;
              return (
                <div 
                  key={pricing.id} 
                  className="flex items-center justify-between pt-2.5 first:pt-0"
                >
                  <div className="text-left py-0.5">
                    <h5 className="text-xs font-bold text-gray-800 leading-none">{pricing.label}</h5>
                    <span className="text-[10px] text-gray-400 font-mono mt-1 block">{tour.currency}{pricing.price.toLocaleString()}</span>
                  </div>

                  <div className="flex items-center space-x-2.5">
                    {/* Decrement */}
                    <button
                      type="button"
                      onClick={() => {
                        setTravelerCounts(prev => ({
                          ...prev,
                          [pricing.id]: Math.max(0, (prev[pricing.id] || 0) - 1)
                        }));
                      }}
                      disabled={count === 0}
                      className={`w-6.5 h-6.5 rounded-full flex items-center justify-center transition-all border shrink-0 ${
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
                          [pricing.id]: (prev[pricing.id] || 0) + 1
                        }));
                      }}
                      className="w-6.5 h-6.5 rounded-full border border-slate-300 hover:border-slate-800 text-slate-800 bg-white hover:bg-slate-100 flex items-center justify-center transition-all shrink-0 cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                    </button>

                    {/* Subtotal */}
                    {count > 0 && (
                      <span className="text-[10px] font-mono font-bold text-emerald-700 w-16 text-right break-words shrink-0">
                        {tour.currency}{(pricing.price * count).toLocaleString()}
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
        <div className="bg-slate-50 p-4 rounded-2xl border border-gray-150 flex items-center justify-between">
          <div className="text-left">
            <span className="text-[9px] text-gray-400 font-bold block uppercase tracking-wider font-mono">Calculated Total</span>
            <span className="text-xl font-mono font-black text-[#0b2545]">
              {tour.currency}{calculatedTotal.toLocaleString()}
            </span>
          </div>
          {calculatedTotal === 0 && (
            <span className="text-[9px] text-amber-700 bg-amber-50 px-2 py-1 rounded-md text-right font-medium leading-none max-w-[130px]">Please select traveler volume.</span>
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
              : 'bg-[#0b2545] text-white hover:bg-[#15345c] hover:shadow-md'
          }`}
        >
          <span>PROCEED TO BOOK</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
