import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  MapPin, 
  Sparkles, 
  Users, 
  Calendar, 
  CreditCard, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  HeartHandshake
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { DESTINATIONS, DESTINATION_INFO } from '../data/travelData';

export const PlanTripPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedDestination, setSelectedDestination] = useState('Ghana');
  const [selectedVibe, setSelectedVibe] = useState('Cultural Heritage & Eco');
  const [groupSize, setGroupSize] = useState('Couple (2 People)');
  const [travelMonth, setTravelMonth] = useState('Next 1-3 Months');
  const [duration, setDuration] = useState('7 - 10 Days');
  const [budgetTier, setBudgetTier] = useState('Premium Comfort ($2,500 - $5,000)');
  const [needsVisa, setNeedsVisa] = useState(true);
  const [needsFlights, setNeedsFlights] = useState(true);
  const [specialRequests, setSpecialRequests] = useState('');
  
  // Contact details
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const travelVibes = [
    { title: 'Cultural Heritage & Eco', desc: 'Castles, traditional drumming, rainforest canopies, and living history.' },
    { title: 'Wildlife & Safari', desc: 'Game drives, elephant encounters, waterfalls, and savannah sunsets.' },
    { title: 'Luxury & Beach Relaxation', desc: 'Private beach resorts, infinity pools, coastal breezes, and spa days.' },
    { title: 'Modern City & Nightlife', desc: 'Vibrant rooftop lounges, art galleries, fine dining, and markets.' },
    { title: 'Honeymoon & Romantic', desc: 'Intimate candlelit dining, private chauffeurs, and secluded ocean villas.' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <>
      <SEO 
        title="Custom Vacation & Safari Itinerary Planner | The Tourism People GH"
        description="Design your custom dream vacation from Ghana. Choose destinations, travel vibes, group size, and receive a tailored itinerary quote with flight and visa support."
        canonicalPath="/plan"
      />

      <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
        
        {/* Header Banner */}
        <section className="bg-[#0b2545] text-white py-14 px-6 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-3 relative z-10">
            <span className="text-[10px] font-mono font-bold tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1.5 rounded-full uppercase inline-block">
              Bespoke Concierge Planning
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Design Your Custom Dream Itinerary
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto font-normal">
              Tell us your preferred destination, style, and travel dates. Our travel curators will assemble a customized itinerary with transparent itemized pricing.
            </p>
          </div>
        </section>

        {/* Multi-step Planner Card */}
        <div className="max-w-4xl mx-auto px-6 -mt-6">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-6 sm:p-10 text-left">
            
            {/* Step Progress Bar */}
            {!isSubmitted && (
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-gray-500 mb-2">
                  <span className="text-[#0b2545] uppercase">Step {step} of 4</span>
                  <span>{step === 1 ? 'Destination' : step === 2 ? 'Experience Vibe' : step === 3 ? 'Preferences & Dates' : 'Contact Details'}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-[#0b2545] h-full rounded-full transition-all duration-300"
                    style={{ width: `${(step / 4) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase">
                    Itinerary Blueprint Queued
                  </span>
                  <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900">
                    Akwaaba, {fullName}!
                  </h2>
                  <p className="text-gray-500 text-sm max-w-md mx-auto">
                    We have registered your bespoke <strong>{selectedDestination}</strong> ({selectedVibe}) itinerary request.
                  </p>
                </div>

                {/* Summary ticket */}
                <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6 max-w-lg mx-auto text-left text-xs space-y-3 font-sans">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Destination:</span>
                    <span className="font-bold text-slate-900">{selectedDestination}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Travel Style:</span>
                    <span className="font-bold text-slate-900">{selectedVibe}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Group Size & Duration:</span>
                    <span className="font-bold text-slate-900">{groupSize} • {duration}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Target Timing:</span>
                    <span className="font-bold text-slate-900">{travelMonth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Representative:</span>
                    <span className="font-bold text-slate-900">{fullName} ({phone})</span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 max-w-md mx-auto">
                  Our Senior Travel Strategist is preparing your customized PDF itinerary proposal with itemized flight, lodging, and visa schedule. Expect contact within <strong>2-4 hours</strong>.
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setStep(1);
                    }}
                    className="bg-[#0b2545] text-white px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Plan Another Itinerary
                  </button>
                </div>
              </motion.div>
            ) : (
              <div>
                {/* STEP 1: DESTINATION */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-serif font-bold text-2xl text-slate-900">
                        Where would you like to travel?
                      </h2>
                      <p className="text-gray-500 text-xs mt-1">
                        Select a country or region you are excited to discover.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {DESTINATIONS.map((dest) => {
                        const isSelected = selectedDestination === dest;
                        return (
                          <button
                            key={dest}
                            type="button"
                            onClick={() => setSelectedDestination(dest)}
                            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#0b2545] text-white border-[#0b2545] shadow-md ring-2 ring-[#0b2545]/20'
                                : 'bg-slate-50 hover:bg-slate-100 border-gray-200 text-slate-800'
                            }`}
                          >
                            <span className="text-xs font-bold block">{dest}</span>
                            <span className={`text-[10px] block mt-1 line-clamp-1 ${isSelected ? 'text-slate-300' : 'text-gray-400'}`}>
                              {DESTINATION_INFO[dest]?.landmarks || 'Custom Tours'}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="bg-[#0b2545] hover:bg-[#15345c] text-white px-8 py-3.5 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer shadow-md"
                      >
                        <span>Continue to Travel Style</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: VIBE & EXPERIENCE STYLE */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-serif font-bold text-2xl text-slate-900">
                        What travel vibe matches your mood?
                      </h2>
                      <p className="text-gray-500 text-xs mt-1">
                        We tailor the activities, hotel styles, and pace according to your preferences.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {travelVibes.map((vibe) => {
                        const isSelected = selectedVibe === vibe.title;
                        return (
                          <div
                            key={vibe.title}
                            onClick={() => setSelectedVibe(vibe.title)}
                            className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? 'bg-indigo-50/70 border-indigo-500 ring-1 ring-indigo-500 shadow-xs'
                                : 'bg-slate-50 hover:bg-slate-100 border-gray-200'
                            }`}
                          >
                            <div className="text-left">
                              <h3 className="font-bold text-sm text-slate-900">{vibe.title}</h3>
                              <p className="text-xs text-gray-500 mt-0.5">{vibe.desc}</p>
                            </div>
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-4 ${
                              isSelected ? 'border-[#0b2545] bg-[#0b2545] text-white' : 'border-gray-300'
                            }`}>
                              {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="border border-gray-200 text-gray-600 px-6 py-3.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer hover:bg-slate-50"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="bg-[#0b2545] hover:bg-[#15345c] text-white px-8 py-3.5 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer shadow-md"
                      >
                        <span>Continue to Group & Dates</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: PREFERENCES & DATES */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-serif font-bold text-2xl text-slate-900">
                        Party Size, Timing & Budget
                      </h2>
                      <p className="text-gray-500 text-xs mt-1">
                        Help us calculate exact pricing brackets and lodging configurations.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5 text-left">
                        <label className="text-xs font-bold text-gray-700">Group / Traveler Size</label>
                        <select
                          value={groupSize}
                          onChange={(e) => setGroupSize(e.target.value)}
                          className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-none"
                        >
                          <option value="Solo Explorer (1 Person)">Solo Explorer (1 Person)</option>
                          <option value="Couple (2 People)">Couple (2 People)</option>
                          <option value="Small Family (3-4 People)">Small Family (3-4 People)</option>
                          <option value="Group / Corporate (5+ People)">Group / Corporate (5+ People)</option>
                        </select>
                      </div>

                      <div className="space-y-1.5 text-left">
                        <label className="text-xs font-bold text-gray-700">Preferred Travel Month / Timing</label>
                        <select
                          value={travelMonth}
                          onChange={(e) => setTravelMonth(e.target.value)}
                          className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-none"
                        >
                          <option value="Immediate (This Month)">Immediate (This Month)</option>
                          <option value="Next 1-3 Months">Next 1-3 Months</option>
                          <option value="Easter / Summer Holidays">Easter / Summer Holidays</option>
                          <option value="December Festive / Year-End">December Festive / Year-End</option>
                          <option value="Flexible / Just Exploring">Flexible / Just Exploring</option>
                        </select>
                      </div>

                      <div className="space-y-1.5 text-left">
                        <label className="text-xs font-bold text-gray-700">Trip Duration</label>
                        <select
                          value={duration}
                          onChange={(e) => setDuration(e.target.value)}
                          className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-none"
                        >
                          <option value="Weekend Gateway (3-4 Days)">Weekend Gateway (3-4 Days)</option>
                          <option value="5 - 6 Days (Express)">5 - 6 Days (Express)</option>
                          <option value="7 - 10 Days (Recommended)">7 - 10 Days (Recommended)</option>
                          <option value="2 Weeks+ (Grand Tour)">2 Weeks+ (Grand Tour)</option>
                        </select>
                      </div>

                      <div className="space-y-1.5 text-left">
                        <label className="text-xs font-bold text-gray-700">Target Budget Tier (Per Person)</label>
                        <select
                          value={budgetTier}
                          onChange={(e) => setBudgetTier(e.target.value)}
                          className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-none"
                        >
                          <option value="Economy Value ($1,200 - $2,500)">Economy Value ($1,200 - $2,500)</option>
                          <option value="Premium Comfort ($2,500 - $5,000)">Premium Comfort ($2,500 - $5,000)</option>
                          <option value="Luxury 5-Star VIP ($5,000+)">Luxury 5-Star VIP ($5,000+)</option>
                        </select>
                      </div>
                    </div>

                    {/* Checkbox Options */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-4 text-left">
                      <label className="flex items-center space-x-2.5 text-xs text-slate-700 cursor-pointer bg-slate-50 p-3 rounded-xl border border-gray-200 flex-1">
                        <input
                          type="checkbox"
                          checked={needsFlights}
                          onChange={(e) => setNeedsFlights(e.target.checked)}
                          className="w-4 h-4 rounded text-[#0b2545] focus:ring-0"
                        />
                        <span>Include Round-Trip Flights from Accra (ACC)</span>
                      </label>

                      <label className="flex items-center space-x-2.5 text-xs text-slate-700 cursor-pointer bg-slate-50 p-3 rounded-xl border border-gray-200 flex-1">
                        <input
                          type="checkbox"
                          checked={needsVisa}
                          onChange={(e) => setNeedsVisa(e.target.checked)}
                          className="w-4 h-4 rounded text-[#0b2545] focus:ring-0"
                        />
                        <span>Require Consular Visa / Paperwork Assistance</span>
                      </label>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="border border-gray-200 text-gray-600 px-6 py-3.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer hover:bg-slate-50"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setStep(4)}
                        className="bg-[#0b2545] hover:bg-[#15345c] text-white px-8 py-3.5 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer shadow-md"
                      >
                        <span>Final Step: Contact Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4: CONTACT DETAILS & SUBMIT */}
                {step === 4 && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h2 className="font-serif font-bold text-2xl text-slate-900">
                        Where should we send your quote?
                      </h2>
                      <p className="text-gray-500 text-xs mt-1">
                        Provide your direct contact details so our travel team can dispatch your itinerary blueprint.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-1.5 text-left">
                        <label className="text-xs font-bold text-gray-700">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Kwame Mensah"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5 text-left">
                          <label className="text-xs font-bold text-gray-700">Email Address *</label>
                          <input
                            type="email"
                            required
                            placeholder="kwame@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-none"
                          />
                        </div>

                        <div className="space-y-1.5 text-left">
                          <label className="text-xs font-bold text-gray-700">WhatsApp / Telephone *</label>
                          <input
                            type="tel"
                            required
                            placeholder="+233 (0) 244 000 000"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5 text-left">
                        <label className="text-xs font-bold text-gray-700">Special Notes or Specific Landmarks</label>
                        <textarea
                          placeholder="Mention any anniversary, dietary requests, preferred flight airline, or must-see landmarks..."
                          value={specialRequests}
                          onChange={(e) => setSpecialRequests(e.target.value)}
                          rows={3}
                          className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-none resize-none"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="border border-gray-200 text-gray-600 px-6 py-3.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer hover:bg-slate-50"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#0b2545] hover:bg-[#15345c] text-white px-8 py-3.5 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg"
                      >
                        {isSubmitting ? (
                          <span>Generating Itinerary Blueprint...</span>
                        ) : (
                          <>
                            <span>Request Custom Itinerary</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}

          </div>
        </div>

      </div>
    </>
  );
};
