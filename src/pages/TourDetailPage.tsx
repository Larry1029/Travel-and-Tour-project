import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  CalendarDays, 
  Share2, 
  ShieldCheck 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { ALL_TOUR_PACKAGES, DUBAI_PACKAGE_OFFERS } from '../data/travelData';
import { TourBookingPane } from '../components/TourBookingPane';

export const TourDetailPage: React.FC = () => {
  const { tourId } = useParams<{ tourId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'description' | 'inclusions' | 'itinerary' | 'dubai-offers'>('description');
  const [copiedLink, setCopiedLink] = useState(false);

  const tour = ALL_TOUR_PACKAGES.find(t => t.id === tourId) || DUBAI_PACKAGE_OFFERS.find(t => t.id === tourId);

  if (!tour) {
    return (
      <div className="pt-32 pb-24 text-center px-6 min-h-[70vh] flex flex-col items-center justify-center">
        <SEO 
          title="Tour Not Found | The Tourism People GH"
          description="The requested tour package could not be found."
          canonicalPath="/tours"
        />
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-4">
          Tour Package Not Found
        </h1>
        <p className="text-gray-500 text-sm mb-8 max-w-md">
          The vacation package you are looking for may have been updated or moved.
        </p>
        <Link 
          to="/tours" 
          className="bg-[#0b2545] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider"
        >
          Browse All Tours
        </Link>
      </div>
    );
  }

  const isDubaiOffer = DUBAI_PACKAGE_OFFERS.some(o => o.id === tour.id);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": tour.name,
    "image": tour.image,
    "description": tour.description,
    "offers": {
      "@type": "Offer",
      "priceCurrency": tour.currency === "$" ? "USD" : "GHS",
      "price": tour.startingPrice,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "TravelAgency",
        "name": "The Tourism People GH"
      }
    }
  };

  return (
    <>
      <SEO 
        title={`${tour.name} - ${tour.duration} | The Tourism People GH`}
        description={`${tour.name} package: ${tour.description.slice(0, 155)}... Starting from ${tour.currency}${tour.startingPrice.toLocaleString()}. Book your luxury escape today.`}
        canonicalPath={`/tours/${tour.id}`}
        ogImage={tour.image}
        schemaJson={schemaJson}
      />

      <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
        
        {/* Top Breadcrumb Header */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/tours"
            className="flex items-center space-x-2 text-[#0b2545] hover:text-[#15345c] text-xs font-bold uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Tours</span>
          </Link>

          <button
            onClick={handleShare}
            className="flex items-center space-x-1.5 text-xs text-gray-500 hover:text-slate-900 bg-white border border-gray-200 px-3 py-1.5 rounded-lg shadow-2xs transition-all cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedLink ? 'Link Copied!' : 'Share Tour'}</span>
          </button>
        </div>

        {/* Main Content Layout */}
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: Image & Tabs & Details (7 cols) */}
            <div className="lg:col-span-7 xl:col-span-8 bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs text-left">
              
              {/* Hero Banner */}
              <div className="h-64 sm:h-80 md:h-96 w-full relative">
                <img 
                  src={tour.image} 
                  alt={tour.name} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                    <span className="bg-amber-600 text-white text-[10px] font-mono font-bold px-3 py-1 rounded-md uppercase">
                      {tour.region}
                    </span>
                    <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-mono font-bold px-3 py-1 rounded-md">
                      ⏱️ {tour.duration}
                    </span>
                  </div>

                  <h1 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
                    {tour.name}
                  </h1>
                </div>
              </div>

              {/* Dubai Variant Selector if applicable */}
              {isDubaiOffer && (
                <div className="bg-gradient-to-r from-amber-500/10 via-slate-50 to-amber-500/5 border-b border-amber-200/60 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#0b2545] tracking-wider">
                      Explore Other Dubai Offers:
                    </span>
                    <span className="text-emerald-700 font-mono text-[10px] font-bold">
                      ✨ GH₵500 Instant Discount
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {DUBAI_PACKAGE_OFFERS.map((offer) => {
                      const isSelected = tour.id === offer.id;
                      return (
                        <button
                          key={offer.id}
                          type="button"
                          onClick={() => navigate(`/tours/${offer.id}`)}
                          className={`p-2 rounded-xl text-left border transition-all cursor-pointer ${
                            isSelected 
                              ? 'bg-amber-500 text-slate-950 border-amber-500 font-bold shadow-xs' 
                              : 'bg-white text-slate-800 border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <span className="text-[9px] font-mono block uppercase">
                            {offer.duration}
                          </span>
                          <span className="text-xs line-clamp-1 block">
                            {offer.name.replace('ADANSI 13 ', '')}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Tabs Navigation */}
              <div className="border-b border-gray-150 bg-slate-50 px-6 py-3 flex flex-wrap gap-2">
                {[
                  { id: 'description', label: 'Package Overview' },
                  { id: 'inclusions', label: 'Inclusions & Exclusions' },
                  { id: 'itinerary', label: 'Day-by-Day Itinerary' },
                  ...(isDubaiOffer ? [{ id: 'dubai-offers', label: '✨ Compare Dubai Packages' }] : [])
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-[#0b2545] text-white shadow-xs'
                        : 'text-gray-500 hover:bg-gray-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Contents */}
              <div className="p-6 md:p-8">
                {activeTab === 'description' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xs font-mono font-bold text-[#0b2545] uppercase tracking-wider mb-2">
                        About This Journey
                      </h2>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {tour.description}
                      </p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl border border-gray-150">
                      <h3 className="font-bold text-gray-800 text-xs mb-3 flex items-center tracking-wide uppercase font-mono">
                        <Sparkles className="w-4 h-4 text-amber-500 mr-1.5" />
                        Key Highlights
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-600">
                        {tour.timelineDays.map((day, idx) => (
                          <div key={idx} className="flex items-start">
                            <span className="bg-white px-1.5 py-0.5 font-mono font-bold text-[#0b2545] rounded-md border text-[9px] mr-2 shrink-0">{day.day}</span>
                            <span className="font-medium text-slate-800">{day.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'inclusions' && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider mb-3.5">
                        What's Included in Your Package
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {tour.inclusions.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-2.5 p-3 rounded-xl bg-emerald-50/40 border border-emerald-100">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span className="text-xs font-medium text-slate-800">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xs font-mono font-bold text-rose-700 uppercase tracking-wider mb-3.5">
                        Exclusions (Not Included)
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {tour.exclusions.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-2.5 p-3 rounded-xl bg-rose-50/40 border border-rose-100">
                            <span className="text-rose-500 font-bold text-xs">✕</span>
                            <span className="text-xs font-normal text-slate-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'itinerary' && (
                  <div className="space-y-6">
                    <h2 className="text-xs font-mono font-bold text-[#0b2545] uppercase tracking-wider mb-4">
                      Complete Daily Schedule
                    </h2>
                    <div className="border-l-2 border-slate-200 ml-3 pl-6 space-y-6">
                      {tour.timelineDays.map((day, idx) => (
                        <div key={idx} className="relative">
                          <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0b2545] border-2 border-white" />
                          <div className="bg-slate-50 p-4 rounded-2xl border border-gray-150">
                            <span className="text-[9px] font-mono font-bold text-amber-700 uppercase block mb-1">
                              {day.day}
                            </span>
                            <h3 className="font-bold text-slate-900 text-sm mb-1">
                              {day.title}
                            </h3>
                            <p className="text-gray-500 text-xs leading-relaxed">
                              {day.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'dubai-offers' && (
                  <div className="space-y-6">
                    <h2 className="text-xs font-mono font-bold text-[#0b2545] uppercase tracking-wider mb-4">
                      All Dubai Package Options
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {DUBAI_PACKAGE_OFFERS.map((offer) => (
                        <div key={offer.id} className="p-4 rounded-2xl border border-gray-200 bg-slate-50 space-y-3">
                          <span className="text-[10px] font-mono font-bold text-[#0b2545] bg-white px-2 py-0.5 rounded border">
                            {offer.duration}
                          </span>
                          <h3 className="font-bold text-sm text-slate-900">{offer.name}</h3>
                          <p className="text-xs text-gray-500 line-clamp-2">{offer.description}</p>
                          <div className="pt-2 flex items-center justify-between border-t border-gray-200">
                            <span className="font-mono font-black text-slate-900 text-sm">
                              {offer.currency}{offer.startingPrice.toLocaleString()}
                            </span>
                            <Link
                              to={`/tours/${offer.id}`}
                              className="bg-[#0b2545] text-white px-3 py-1.5 rounded-lg text-xs font-bold"
                            >
                              View Offer
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN: Booking & Pricing Calculator (5 cols) */}
            <div className="lg:col-span-5 xl:col-span-4 sticky top-28">
              <TourBookingPane tour={tour} />
            </div>

          </div>
        </div>

      </div>
    </>
  );
};
