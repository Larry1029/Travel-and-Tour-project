import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Download, Printer } from 'lucide-react';
import { TravelService } from '../types';

interface VisaChecklistModalProps {
  service: TravelService | null;
  onClose: () => void;
}

export const VisaChecklistModal: React.FC<VisaChecklistModalProps> = ({ service, onClose }) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  if (!service) return null;

  const defaultChecklist = [
    "Original Ghanaian Passport with at least 6 months validity from return date",
    "Two (2) recent passport-sized photographs on plain white background",
    "Official 6 months stamped Bank Statement with adequate travel funds balance",
    "Introductory employment letter or registered business registration certificates",
    "Confirmed return flight itinerary reservations",
    "Confirmed hotel accommodation or vetted host invitation credentials",
    "Proof of socio-economic ties to Ghana (land titles, family documents, investments)",
    "Travel Health Insurance with required consular coverage limits"
  ];

  const list = (service.additionalInfo && service.additionalInfo.length > 0) 
    ? service.additionalInfo 
    : defaultChecklist;

  const toggleItem = (idx: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / list.length) * 100);

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/50 backdrop-blur-xs" 
      id="checklist_modal_overlay"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl relative flex flex-col"
        id="checklist_modal_content"
      >
        {/* Header */}
        <div className="bg-[#0b2545] p-6 text-white relative shrink-0">
          <div className="absolute top-4 right-4">
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-lg text-xs font-mono cursor-pointer"
            >
              ✕ CLOSE
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#f0a500]">
              Consular Requirement Document Dossier
            </span>
          </div>

          <h3 className="font-serif font-semibold text-xl mt-1.5 pr-8 leading-tight text-white">
            {service.name} Checklist
          </h3>
          <p className="text-white/70 text-xs mt-1.5 font-normal leading-relaxed">
            Verify your supporting document requirements before scheduling biometric submission.
          </p>

          {/* Progress bar */}
          <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between gap-4">
            <div className="flex-1 bg-white/20 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-amber-400 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-xs font-mono font-bold text-amber-300 shrink-0">
              {completedCount}/{list.length} Ready ({progressPercent}%)
            </span>
          </div>
        </div>

        {/* Content list */}
        <div className="p-6 space-y-3 flex-1 overflow-y-auto">
          <p className="text-xs text-slate-500 font-medium">
            Check off each requirement as you prepare your submission folder:
          </p>

          <div className="space-y-2.5">
            {list.map((item, idx) => {
              const isChecked = !!checkedItems[idx];
              return (
                <div
                  key={idx}
                  onClick={() => toggleItem(idx)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start space-x-3 text-left ${
                    isChecked 
                      ? 'bg-emerald-50/50 border-emerald-300 text-emerald-950 shadow-2xs'
                      : 'bg-slate-50 hover:bg-slate-100 border-gray-200 text-slate-700'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-lg border mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                    isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-gray-300 bg-white'
                  }`}>
                    {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                  <span className={`text-xs leading-relaxed ${isChecked ? 'line-through opacity-80' : 'font-medium'}`}>
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions Footer */}
        <div className="p-5 border-t border-gray-150 bg-slate-50 flex items-center justify-between gap-3 shrink-0">
          <div className="text-left">
            <span className="text-[10px] text-gray-500 font-mono block">Estimated Agency Turnaround</span>
            <span className="text-xs font-mono font-bold text-[#0b2545]">{service.timeline}</span>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="border border-gray-250 bg-white hover:bg-slate-100 text-slate-800 px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-[#0b2545] hover:bg-[#15345c] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-sm"
            >
              Done Checklist
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
