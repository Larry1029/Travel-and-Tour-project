import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Search, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  CalendarDays,
  Users
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { 
  ALL_TOUR_PACKAGES, 
  DUBAI_PACKAGE_OFFERS 
} from '../data/travelData';
import { TourDetailModal } from '../components/TourDetailModal';
import { TourPackage } from '../types';

export const ToursPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);

  const regions = ['All', 'Middle East', 'Africa & Safaris', 'Europe & Schengen', 'Tropical Escapes'];

  const filteredTours = ALL_TOUR_PACKAGES.filter(tour => {
    const matchesRegion = selectedRegion === 'All' || 
      (selectedRegion === 'Middle East' && tour.region.toLowerCase().includes('middle east')) ||
      (selectedRegion === 'Africa & Safaris' && (tour.region.toLowerCase().includes('africa') || tour.region.toLowerCase().includes('ghana') || tour.region.toLowerCase().includes('east africa'))) ||
      (selectedRegion === 'Europe & Schengen' && (tour.region.toLowerCase().includes('europe') || tour.region.toLowerCase().includes('schengen'))) ||
      (selectedRegion === 'Tropical Escapes' && (tour.region.toLowerCase().includes('indian ocean') || tour.region.toLowerCase().includes('tropical')));

    const matchesSearch = searchQuery === '' ||
      tour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesRegion && matchesSearch;
  });

  return (
    <>
      <SEO 
        title="Curated Tour Packages & Escapes | The Tourism People GH"
        description="Browse premium international tour packages from Ghana: Dubai 6-Day Escapes, Maldives Water Villas, Kenya Safari Expeditions, European Heritage, and local Ghanaian eco-tours."
        canonicalPath="/tours"
      />

      <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
        
        {/* Page Header Banner */}
        <section className="bg-[#0b2545] text-white py-16 px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="max-w-7xl mx-auto text-center relative z-10 space-y-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1.5 rounded-full uppercase inline-block">
              Worldwide Expeditions & Escapes
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Curated Tour Packages & Itineraries
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-normal leading-relaxed">
              Every package is vetted for exceptional standard: curated 4-5 star hotels, certified English-speaking local guides, biometric visa assistance, and seamless airport coordination.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-12">
          
          {/* Dubai Special Offers Section */}
          <div className="mb-16 bg-gradient-to-br from-amber-500/10 via-white to-amber-500/5 rounded-3xl border border-amber-200/80 p-6 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-amber-100 pb-4">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="bg-[#0b2545] text-white text-[10px] font-mono font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                    Featured Partnership Offers
                  </span>
                  <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-md flex items-center gap-1 border border-emerald-200">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    GH₵500 Instant Discount
                  </span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0b2545]">
                  Exclusive Dubai Tour Packages
                </h2>
              </div>
              <p className="text-xs text-gray-500 max-w-md text-left md:text-right">
                In partnership with premier hospitality operators, lock in discounted flights, 4-star luxury stays, desert safaris, and Burj Khalifa VIP entry.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DUBAI_PACKAGE_OFFERS.map((offer) => {
                const origPrice = offer.startingPrice + 500;
                return (
                  <div 
                    key={offer.id}
                    className="bg-white rounded-2xl border border-amber-200/60 p-5 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between text-left"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md uppercase">
                          ⏱️ {offer.duration}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-150">
                          -GH₵500 OFF
                        </span>
                      </div>

                      <h3 className="font-serif font-bold text-lg text-slate-900 leading-snug">
                        {offer.name}
                      </h3>

                      <p className="text-gray-500 text-xs mt-2 line-clamp-3 leading-relaxed">
                        {offer.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-gray-400 line-through font-mono block">
                          {offer.currency}{origPrice.toLocaleString()}
                        </span>
                        <span className="text-lg font-black text-[#0b2545] font-mono">
                          {offer.currency}{offer.startingPrice.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <Link
                          to={`/tours/${offer.id}`}
                          className="bg-[#0b2545] hover:bg-[#15345c] text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs"
                        >
                          Details
                        </Link>
                        <button
                          type="button"
                          onClick={() => setSelectedTour(offer)}
                          className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Filter & Search Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex overflow-x-auto pb-2 gap-2 [scrollbar-width:none]">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                    selectedRegion === region
                      ? 'bg-[#0b2545] text-white shadow-sm'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[280px]">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search packages by destination..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-full text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-none"
              />
            </div>
          </div>

          {/* Tour Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <div 
                key={tour.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group text-left"
              >
                {/* Image header */}
                <div className="h-56 w-full relative overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0b2545]/80 backdrop-blur-md text-white text-[9px] font-mono font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {tour.region}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                      ⏱️ {tour.duration}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif font-bold text-xl leading-tight">
                      {tour.name}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                    {tour.description}
                  </p>

                  {/* Highlights Pill */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      Package Inclusions
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {tour.inclusions.slice(0, 3).map((inc, idx) => (
                        <span key={idx} className="bg-slate-100 text-slate-700 text-[10.5px] px-2.5 py-1 rounded-lg font-medium">
                          ✓ {inc}
                        </span>
                      ))}
                      {tour.inclusions.length > 3 && (
                        <span className="bg-slate-100 text-slate-500 text-[10px] px-2 py-1 rounded-lg font-medium">
                          +{tour.inclusions.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer & Actions */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-gray-400 block uppercase font-medium">From</span>
                      <span className="font-mono font-black text-lg text-[#0b2545]">
                        {tour.currency}{tour.startingPrice.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        to={`/tours/${tour.id}`}
                        className="bg-[#0b2545] hover:bg-[#15345c] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm"
                      >
                        Full Details
                      </Link>
                      <button
                        type="button"
                        onClick={() => setSelectedTour(tour)}
                        className="border border-gray-200 hover:border-gray-400 text-slate-700 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                      >
                        Book
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Tour Detail Modal */}
      {selectedTour && (
        <TourDetailModal 
          tour={selectedTour} 
          onClose={() => setSelectedTour(null)} 
          onSelectTour={(t) => setSelectedTour(t)}
        />
      )}
    </>
  );
};
