import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Search, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  CalendarDays 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { WhyTravelWithUs } from '../components/WhyTravelWithUs';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { TourDetailModal } from '../components/TourDetailModal';
import { 
  DESTINATIONS, 
  DESTINATION_INFO, 
  getDestinationImages, 
  DISCOVERY_FILTERS, 
  destinationCards, 
  getTourPackageForCard,
  DUBAI_PACKAGE_OFFERS
} from '../data/travelData';
import { TourPackage } from '../types';

export const HomePage: React.FC = () => {
  const [activeDestinationIndex, setActiveDestinationIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [discoverSearch, setDiscoverSearch] = useState("");
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);

  // Auto rotate hero destination carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDestinationIndex((prev) => (prev + 1) % DESTINATIONS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const filteredCards = destinationCards.filter(card => {
    const matchesCategory = selectedFilter === "All" || 
      card.filterCategory.toLowerCase() === selectedFilter.toLowerCase() || 
      (selectedFilter === "Schengen state" && card.filterCategory.toLowerCase().includes("europe"));
    const matchesSearch = discoverSearch === "" || 
      card.originalName.toLowerCase().includes(discoverSearch.toLowerCase()) || 
      card.country.toLowerCase().includes(discoverSearch.toLowerCase()) ||
      card.city.toLowerCase().includes(discoverSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO 
        title="The Tourism People GH | Luxury Ghana Tours, Safaris & Global Escapes"
        description="Discover authentic Ghana travel, curated luxury safaris, Cape Coast heritage tours, Dubai escapes, Maldives villas, and custom-tailored itineraries with The Tourism People GH."
        canonicalPath="/"
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-100 bg-white" id="hero_section">
        {/* Subtle radial ambient background light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-60" />
          <div className="absolute top-1/3 -right-32 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center relative z-20">
          
          {/* LEFT SIDE CONTENT - HEADING & ACTIONS */}
          <div className="md:col-span-6 xl:col-span-5 flex flex-col justify-center space-y-8 text-left" id="hero_left_content">
            
            <div className="space-y-5">
              <div className="inline-flex items-center space-x-2 bg-[#0b2545]/5 text-[#0b2545] px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Premier Travel Agency Ghana</span>
              </div>

              <h1 className="font-serif text-[#0b2545] text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08]" id="hero_main_title">
                Explore the world <br />
                with us.
              </h1>
              
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeDestinationIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-600 text-sm md:text-base font-normal leading-relaxed max-w-lg min-h-[4rem]"
                >
                  {DESTINATION_INFO[DESTINATIONS[activeDestinationIndex]]?.desc} Our luxury travel agency coordinates pristine local lodging, express biometric visas, and custom-tailored itineraries to keep your escape completely stress-free.
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4" id="action_cta_block">
              <Link
                to="/plan"
                className="bg-[#0b2545] hover:bg-[#15345c] text-white text-xs md:text-sm font-semibold tracking-wide py-4 px-8 rounded-xl transition-all duration-300 shadow-md shadow-gray-200 flex items-center justify-center space-x-2 cursor-pointer"
                id="hero_primary_cta"
              >
                <span>Plan Your Trip</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link
                to="/tours"
                className="bg-white hover:bg-slate-50 border border-gray-200 hover:border-slate-400 text-gray-700 text-xs md:text-sm font-semibold tracking-wide py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
                id="hero_secondary_cta"
              >
                <span>Explore Tours</span>
              </Link>
            </div>

            {/* Carousel Pips */}
            <div className="flex items-center space-x-2 pt-2">
              {DESTINATIONS.map((dest, idx) => (
                <button
                  key={dest}
                  onClick={() => setActiveDestinationIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeDestinationIndex === idx ? 'w-8 bg-[#0b2545]' : 'w-2.5 bg-gray-200 hover:bg-gray-400'
                  }`}
                  title={`View ${dest}`}
                />
              ))}
              <span className="text-[9px] font-mono text-gray-400 ml-2 font-bold uppercase">
                ({activeDestinationIndex + 1}/{DESTINATIONS.length})
              </span>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT - STAGGERED VERTICAL IMAGES */}
          <div className="md:col-span-6 xl:col-span-7 flex flex-col relative md:-mt-6 lg:-mt-10 xl:-mt-14" id="hero_right_showcase">
            <div className="mb-3 text-left z-30" id="dynamic-dest-top-badge">
              <span className="text-xs font-mono font-bold tracking-widest text-[#8b5cf6] uppercase">
                Discover Destination
              </span>
              <AnimatePresence mode="wait">
                <motion.h3
                  key={activeDestinationIndex}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#0b2545] tracking-tight leading-none mt-2"
                >
                  {DESTINATIONS[activeDestinationIndex]}
                </motion.h3>
              </AnimatePresence>
            </div>

            {/* Staggered Vertical Capsules Container */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 items-center relative z-20">
              {[
                { 
                  hClass: "h-[180px] sm:h-[300px] md:h-[380px] rounded-[20px] sm:rounded-[60px] md:rounded-[90px]", 
                  imageIdx: 0,
                  delay: 0.0
                },
                { 
                  hClass: "h-[210px] sm:h-[350px] md:h-[440px] rounded-[24px] sm:rounded-[70px] md:rounded-[100px] mt-4 sm:mt-10", 
                  imageIdx: 1,
                  delay: 0.15
                },
                { 
                  hClass: "h-[160px] sm:h-[270px] md:h-[340px] rounded-[16px] sm:rounded-[50px] md:rounded-[80px]", 
                  imageIdx: 2,
                  delay: 0.3
                },
                { 
                  hClass: "h-[190px] sm:h-[320px] md:h-[400px] rounded-[20px] sm:rounded-[60px] md:rounded-[90px] mt-2 sm:mt-4", 
                  imageIdx: 3,
                  delay: 0.45
                }
              ].map((capsule, capsuleIdx) => {
                const imgList = getDestinationImages(DESTINATIONS[activeDestinationIndex]);
                const imageUrl = imgList[capsule.imageIdx] || imgList[0];

                return (
                  <motion.div
                    key={capsuleIdx}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: capsule.delay, ease: "easeOut" }}
                    className={`relative w-full overflow-hidden ${capsule.hClass} shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 bg-slate-50`}
                  >
                    <div className="relative w-full h-full">
                      <AnimatePresence mode="popLayout" initial={false}>
                        <motion.img
                          key={activeDestinationIndex + "_" + capsuleIdx}
                          src={imageUrl}
                          alt={DESTINATIONS[activeDestinationIndex]}
                          initial={{ x: "120%", opacity: 0.8 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: "-120%", opacity: 0.8 }}
                          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute inset-0 w-full h-full object-cover select-none"
                          referrerPolicy="no-referrer"
                        />
                      </AnimatePresence>
                      <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-300" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* WHY TRAVEL WITH US SECTION */}
      <WhyTravelWithUs />

      {/* FEATURED DESTINATIONS DISCOVERY SECTION */}
      <section className="py-24 bg-white relative overflow-hidden" id="featured_discovery">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0b2545] bg-[#0b2545]/5 px-3.5 py-1.5 rounded-full uppercase inline-block mb-3">
              Dream, Plan, Explore
            </span>
            <h2 className="font-space font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter text-[#0b2545] uppercase leading-[0.98] mb-6" id="discovery_title">
              YOU PICK THE PLACE,<br className="hidden sm:inline" /> WE PLAN THE JOURNEY
            </h2>
            <p className="text-gray-500 font-normal text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Whether you're dreaming of tropical beaches, vibrant cities, mountain escapes, or cultural adventures, we'll help turn your travel goals into unforgettable experiences.
            </p>
          </div>

          {/* Destination Filters */}
          <div className="flex justify-center mb-6 w-full" id="discovery_filters_wrapper">
            <div className="flex overflow-x-auto pb-4 pt-1 px-4 gap-2.5 max-w-full md:flex-wrap md:justify-center scroll-smooth [scrollbar-width:none]">
              {DISCOVERY_FILTERS.map((filter) => {
                const isActive = selectedFilter === filter;
                return (
                  <button
                    key={filter}
                    id={`filter_pill_${filter.toLowerCase().replace(/\s+/g, '_')}`}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase whitespace-nowrap transition-all duration-300 transform active:scale-95 border-2 cursor-pointer ${
                      isActive
                        ? "bg-[#0b2545] border-[#0b2545] text-white shadow-md shadow-slate-200"
                        : "bg-slate-50 hover:bg-slate-100 border-slate-100 hover:border-slate-200 text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-16 relative px-4" id="discovery_search_wrapper">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-slate-400">
                <Search className="w-5 h-5 text-[#0b2545]/60" />
              </span>
              <input
                type="text"
                value={discoverSearch}
                onChange={(e) => setDiscoverSearch(e.target.value)}
                placeholder="Search by country or city name"
                className="w-full pl-12 pr-12 py-4 bg-white border-2 border-slate-200 rounded-full text-sm text-[#0b2545] font-medium placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#0b2545]/5 focus:border-[#0b2545] transition-all duration-300 shadow-sm"
              />
            </div>
          </div>

          {/* Destination Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCards.map((card) => {
              const tourPkg = getTourPackageForCard(card.originalName);
              return (
                <div 
                  key={card.id}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-150 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group text-left"
                >
                  <div className="h-56 w-full overflow-hidden relative">
                    <img 
                      src={card.image} 
                      alt={card.originalName} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold text-slate-900 flex items-center gap-1 shadow-sm">
                      <span>⭐</span>
                      <span>4.9</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300 block">
                        {card.city}, {card.country}
                      </span>
                      <h3 className="font-serif font-bold text-xl leading-tight">
                        {card.originalName}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                      {card.description}
                    </p>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-gray-400 block uppercase font-medium">Starting From</span>
                        <span className="font-mono font-black text-base text-[#0b2545]">
                          {tourPkg.currency}{tourPkg.startingPrice.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Link
                          to={`/tours/${tourPkg.id}`}
                          className="bg-[#0b2545] hover:bg-[#15345c] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer"
                        >
                          View Tour
                        </Link>
                        <button
                          type="button"
                          onClick={() => setSelectedTour(tourPkg)}
                          className="border border-gray-200 hover:border-gray-400 text-gray-700 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
                        >
                          Quick Book
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/tours"
              className="inline-flex items-center space-x-2 bg-[#0b2545] hover:bg-[#15345c] text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg transition-all"
            >
              <span>Explore All Global Packages & Offers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* TOUR MODAL IF QUICK BOOK OPENED */}
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
