import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Plane, 
  Building2, 
  Compass, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  HelpCircle, 
  ArrowRight, 
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { travelServices } from '../data/travelData';
import { TravelService } from '../types';
import { ServiceConsultModal } from '../components/ServiceConsultModal';
import { VisaChecklistModal } from '../components/VisaChecklistModal';

export const ServicesPage: React.FC = () => {
  const [selectedServiceForConsult, setSelectedServiceForConsult] = useState<TravelService | null>(null);
  const [selectedServiceForChecklist, setSelectedServiceForChecklist] = useState<TravelService | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What countries do you provide visa assistance for from Ghana?",
      a: "We provide comprehensive consular document preparation, interview coaching, and biometric appointment scheduling for Schengen member states (France, Germany, Italy, Netherlands, Spain), the United Kingdom, United States, Canada, Dubai (UAE eVisa), South Africa, Kenya, and Egypt."
    },
    {
      q: "What is your visa consultation success rate?",
      a: "We maintain a high success rate by performing rigorous document pre-screening before submission. We verify bank statement validity, proof of socio-economic ties to Ghana, biometric photo standards, and authentic accommodation vouchers."
    },
    {
      q: "Can I book flights and hotels without visa approval?",
      a: "Yes! We issue certified verifiable flight itineraries and tentative hotel reservation vouchers specifically designed for embassy visa applications, ensuring you do not risk non-refundable flight purchases before your visa is granted."
    },
    {
      q: "How long in advance should I apply for my travel visa?",
      a: "We strongly recommend starting visa document preparation 6 to 8 weeks before your intended travel date for UK, USA, Canada, and Schengen visas, and 2 to 3 weeks for Dubai eVisas and East African tourist visas."
    }
  ];

  return (
    <>
      <SEO 
        title="Visa Assistance, Flight Ticketing & Travel Services | The Tourism People GH"
        description="Comprehensive travel services in Ghana: Schengen, UK, US & Dubai visa assistance, international flight ticketing, hotel booking, VIP airport protocol, and corporate travel concierge."
        canonicalPath="/services"
      />

      <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
        
        {/* Header Banner */}
        <section className="bg-[#0b2545] text-white py-16 px-6 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-4 relative z-10">
            <span className="text-[10px] font-mono font-bold tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1.5 rounded-full uppercase inline-block">
              Accredited Travel Concierge
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Comprehensive Travel & Consular Services
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-normal leading-relaxed">
              From strategic visa paperwork audit and biometric booking to charter flight coordination, resort reservations, and 24/7 client dispatch.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelServices.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-3xl p-7 border border-gray-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-[#0b2545] group-hover:bg-[#0b2545] group-hover:text-white transition-colors duration-300">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-gray-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      ⏱️ {service.timeline}
                    </span>
                  </div>

                  <div>
                    <h2 className="font-serif font-bold text-xl text-slate-900 leading-snug">
                      {service.name}
                    </h2>
                    <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  {service.additionalInfo && service.additionalInfo.length > 0 && (
                    <div className="pt-2 space-y-1.5 border-t border-gray-100">
                      <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                        Service Deliverables
                      </span>
                      {service.additionalInfo.slice(0, 3).map((info, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{info}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-gray-150 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedServiceForConsult(service)}
                    className="flex-1 bg-[#0b2545] hover:bg-[#15345c] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer text-center"
                  >
                    Inquire Service
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedServiceForChecklist(service)}
                    className="border border-gray-200 hover:border-gray-400 text-gray-700 py-2.5 px-3.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    Checklist
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-3xl mx-auto text-left">
            <div className="text-center mb-10">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0b2545] uppercase bg-[#0b2545]/5 px-3 py-1 rounded-full">
                Frequently Asked Questions
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 mt-2">
                Visa & Travel Clarifications
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div 
                    key={idx}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all shadow-xs"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between font-serif font-bold text-sm sm:text-base text-slate-900 cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 shrink-0 ml-4 ${isOpen ? 'rotate-180 text-[#0b2545]' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* Service Consult Modal */}
      <ServiceConsultModal 
        service={selectedServiceForConsult}
        onClose={() => setSelectedServiceForConsult(null)}
      />

      {/* Visa Checklist Modal */}
      <VisaChecklistModal 
        service={selectedServiceForChecklist}
        onClose={() => setSelectedServiceForChecklist(null)}
      />
    </>
  );
};
