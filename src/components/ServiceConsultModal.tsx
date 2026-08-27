import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Lock } from 'lucide-react';
import { TravelService } from '../types';

interface ServiceConsultModalProps {
  service: TravelService | null;
  onClose: () => void;
}

export const ServiceConsultModal: React.FC<ServiceConsultModalProps> = ({ service, onClose }) => {
  const [serviceContactName, setServiceContactName] = useState('');
  const [serviceContactEmail, setServiceContactEmail] = useState('');
  const [serviceContactPhone, setServiceContactPhone] = useState('');
  const [serviceContactNotes, setServiceContactNotes] = useState('');
  const [showServiceSuccess, setShowServiceSuccess] = useState(false);

  if (!service) return null;

  const handleServiceConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceContactName.trim() || !serviceContactEmail.trim()) return;

    setShowServiceSuccess(true);
    setTimeout(() => {
      setShowServiceSuccess(false);
      onClose();
    }, 4500);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/50 backdrop-blur-xs" 
      id="service_modal_overlay"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl relative"
        id="service_modal_content"
      >
        {/* Visual header */}
        <div className="bg-[#0b2545] p-6 text-white relative">
          <div className="absolute top-4 right-4">
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-lg text-xs font-mono cursor-pointer"
            >
              ✕ CLOSE
            </button>
          </div>
          
          <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#f0a500]">
            Officially Vetted Consultation
          </span>
          <h3 className="font-serif font-semibold text-xl mt-1 pr-6 leading-tight text-white">
            {service.name}
          </h3>
          <p className="text-white/70 text-xs mt-2 font-normal leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="p-6">
          {showServiceSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-6 space-y-4"
              id="service_modal_success"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-150 flex items-center justify-center text-emerald-600 mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-800 text-base">Agency Consultation Requested Successfully!</h4>
                <p className="text-xs text-gray-500 max-w-md mx-auto">
                  Thank you <strong>{serviceContactName}</strong>. Our Head of Travel and Consular Operations is reviewing your documentation parameters.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl text-[11px] text-gray-500 font-medium max-w-sm mx-auto flex items-center justify-between mt-2">
                <span>Expected Response Window:</span>
                <span className="font-mono text-[#0b2545] font-extrabold bg-white px-2 py-1 rounded-md border border-gray-150 shadow-2xs">3 to 6 Hours (GMT)</span>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleServiceConsultSubmit} className="space-y-4" id="consultation_form_box">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold font-mono tracking-wider text-slate-500 block uppercase">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={serviceContactName}
                    onChange={(e) => setServiceContactName(e.target.value)}
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-hidden"
                  />
                </div>
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold font-mono tracking-wider text-slate-500 block uppercase">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="johndoe@example.com"
                    value={serviceContactEmail}
                    onChange={(e) => setServiceContactEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-bold font-mono tracking-wider text-slate-500 block uppercase">WhatsApp / Telephone</label>
                <input
                  type="tel"
                  placeholder="+233 (0) 54 000 0000"
                  value={serviceContactPhone}
                  onChange={(e) => setServiceContactPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-hidden"
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-bold font-mono tracking-wider text-slate-500 block uppercase">Urgent Travel Dates or Consular Target Needs</label>
                <textarea
                  placeholder="Please mention any key passport urgency, airport paths, preferred travel weeks, or special requests..."
                  value={serviceContactNotes}
                  onChange={(e) => setServiceContactNotes(e.target.value)}
                  rows={3}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-hidden resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                <div className="flex items-center space-x-1.5 text-emerald-600">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Encrypted Secure Protocol</span>
                </div>
                <span>Agency Speed: <strong>{service.timeline}</strong></span>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 border border-gray-200 text-gray-700 bg-white hover:bg-slate-50 rounded-xl py-3 text-xs font-semibold hover:border-gray-300 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#0b2545] hover:bg-[#15345c] text-white rounded-xl py-3 text-xs font-bold shadow-lg transition-all cursor-pointer"
                >
                  Send Official Inquiry
                </button>
              </div>

            </form>
          )}
        </div>

      </motion.div>
    </div>
  );
};
