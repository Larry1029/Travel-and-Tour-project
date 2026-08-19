import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ArrowRight, ArrowLeft } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  category: 'all' | 'luxury' | 'visa' | 'tours';
  rating: number;
  text: string;
  date: string;
  avatarChar: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    name: "Kwame Mensah",
    location: "Accra, Ghana",
    category: "visa",
    rating: 5,
    text: "The premium visa team is absolute magic. They handled my dynamic flight itinerary, express consular biometric clearances, and biometric appointments. The visa was issued in record time without any hassle.",
    date: "May 2026",
    avatarChar: "K"
  },
  {
    id: 2,
    name: "Emily Henderson",
    location: "London, United Kingdom",
    category: "luxury",
    rating: 5,
    text: "Bespoke curation at its peak. Our island getaway in Zanzibar was planned flawlessly down to every single local transfer, evening cruise, and culinary reservation. Truly a five-star luxurious travel service.",
    date: "June 2026",
    avatarChar: "E"
  },
  {
    id: 3,
    name: "Aisha Al-Mansoori",
    location: "Dubai, UAE",
    category: "luxury",
    rating: 5,
    text: "I appreciated the ultra-premium hospitality coordinates the staff organized for my corporate associates during the multi-city tour. The support team stayed connected 24/7 during the entire itinerary.",
    date: "April 2026",
    avatarChar: "A"
  },
  {
    id: 4,
    name: "Sophia Martinez",
    location: "Chicago, United States",
    category: "tours",
    rating: 5,
    text: "Our family tour across United Kingdom of Great Britain and Northern Ireland was super enjoyable. Outstanding tour guides, custom comfortable transfers, and zero stress when looking for reservations.",
    date: "March 2026",
    avatarChar: "S"
  },
  {
    id: 5,
    name: "James Boateng",
    location: "Kumasi, Ghana",
    category: "visa",
    rating: 5,
    text: "I strongly recommend their priority visa advisory. The team was highly knowledgeable, professional, and helped track my visa application through their secure tracker wizard step-by-step.",
    date: "February 2026",
    avatarChar: "J"
  },
  {
    id: 6,
    name: "Nii Okai Aryee",
    location: "Accra, Ghana",
    category: "tours",
    rating: 5,
    text: "Wonderful vacation booking experience. From our cozy flights and seat reservations to safe local tour transfers, everything was executed with superb Ghanaian warmth and world-class professionalism.",
    date: "January 2026",
    avatarChar: "N"
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Experiences' },
  { id: 'luxury', label: 'Luxury Escapes' },
  { id: 'visa', label: 'Visa Success' },
  { id: 'tours', label: 'Curated Tours' }
] as const;

export function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'luxury' | 'visa' | 'tours'>('all');
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = TESTIMONIALS_DATA.filter(
    (t) => activeCategory === 'all' || t.category === activeCategory
  );

  // Safely adjust activeIndex if filtered results change
  const currentIndex = activeIndex >= filtered.length ? 0 : activeIndex;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % filtered.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  return (
    <section 
      className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden border-t border-slate-100" 
      id="testimonials_section"
    >
      {/* Soft Ambient Background Elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-20 pointer-events-none -translate-y-1/2" />
      <div className="absolute top-20 right-0 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0b2545] bg-[#0b2545]/5 px-3.5 py-1.5 rounded-full uppercase inline-block mb-3">
            Real Stories, Real Journeys
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0b2545] uppercase leading-[1.10]" id="testimonials_title">
            Our Clients, Globally Satisfied
          </h2>
          <p className="text-gray-500 font-sans text-sm md:text-base leading-relaxed mt-4 max-w-2xl mx-auto">
            Discover firsthand accounts of premium vacations curated and delivered seamlessly with priority support and expert care.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex justify-center mb-12 w-full" id="testimonials_category_filters">
          <div className="flex overflow-x-auto pb-3 gap-2.5 max-w-full scrollbar-none scroll-smooth">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setActiveIndex(0);
                  }}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase whitespace-nowrap transition-all duration-300 transform active:scale-95 border-2 ${
                    isActive
                      ? "bg-[#0b2545] border-[#0b2545] text-white shadow-md shadow-slate-100"
                      : "bg-white hover:bg-slate-50 border-slate-100 hover:border-slate-200 text-gray-500 hover:text-[#0b2545]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Display (Grid on desktop & tablet, Carousel slide control on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto text-left" id="testimonials_body_wrapper">
          
          {/* Left panel: Active focus testimonial spotlight */}
          <div className="md:col-span-7 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 p-8 sm:p-12 relative flex flex-col justify-between" id="active_spotlight_card">
            
            {/* Elegant watermarked Quote sign */}
            <div className="absolute top-8 right-8 text-slate-100">
              <Quote className="w-20 h-20 rotate-180" />
            </div>

            <div className="relative z-10">
              {/* Star review representation */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                ))}
              </div>

              {/* Dynamic Animated Text */}
              <AnimatePresence mode="wait">
                {filtered.length > 0 && (
                  <motion.div
                    key={currentIndex + "_" + activeCategory}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="min-h-[160px] sm:min-h-[120px]"
                  >
                    <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed font-medium italic">
                      "{filtered[currentIndex].text}"
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative z-10 border-t border-slate-100 pt-6 mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <AnimatePresence mode="wait">
                {filtered.length > 0 && (
                  <motion.div
                    key={`client-${filtered[currentIndex].id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center space-x-4"
                  >
                    {/* Circle Avatar monogram */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#0b2545] to-indigo-850 flex items-center justify-center font-serif text-white font-black text-sm uppercase shadow-sm shrink-0">
                      {filtered[currentIndex].avatarChar}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-gray-900 text-base leading-snug">{filtered[currentIndex].name}</h4>
                      <p className="text-xs text-gray-400 font-sans font-semibold">{filtered[currentIndex].location}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Carousel navigation buttons */}
              {filtered.length > 1 && (
                <div className="flex items-center space-x-2 self-end sm:self-auto">
                  <button
                    onClick={handlePrev}
                    className="w-9 h-9 rounded-full border border-slate-200 hover:border-slate-800 hover:bg-slate-50 flex items-center justify-center text-slate-700 transition"
                    title="Previous Testimonial"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <span className="text-[10px] font-mono font-bold text-slate-400">
                    {currentIndex + 1} / {filtered.length}
                  </span>
                  <button
                    onClick={handleNext}
                    className="w-9 h-9 rounded-full border border-slate-200 hover:border-slate-800 hover:bg-slate-50 flex items-center justify-center text-slate-700 transition"
                    title="Next Testimonial"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

          </div>

          {/* Right panel: Modern Bento Card list displaying supportive feedback */}
          <div className="md:col-span-5 flex flex-col gap-6" id="bento_testimonials_sidebar">
            {TESTIMONIALS_DATA.filter((item) => item.id !== (filtered[currentIndex]?.id || 1)).slice(0, 2).map((item) => (
              <div 
                key={item.id} 
                className="bg-white/60 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300 p-6 rounded-2xl flex flex-col justify-between flex-1 cursor-pointer"
                onClick={() => {
                  const targetIndex = filtered.findIndex((t) => t.id === item.id);
                  if (targetIndex !== -1) {
                    setActiveIndex(targetIndex);
                  } else {
                    // Switch to 'all' category first to find and center the card
                    setActiveCategory('all');
                    setTimeout(() => {
                      const allIndex = TESTIMONIALS_DATA.findIndex((t) => t.id === item.id);
                      if (allIndex !== -1) setActiveIndex(allIndex);
                    }, 50);
                  }
                }}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 stroke-amber-400" />
                      ))}
                    </div>
                    <span className="text-[9px] font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded uppercase font-bold">
                      {item.category === 'luxury' ? 'Premium luxury' : item.category === 'visa' ? 'Visa clearing' : 'Curated Tour'}
                    </span>
                  </div>
                  <p className="text-gray-500 font-sans text-xs leading-relaxed max-w-sm line-clamp-3 italic">
                    "{item.text}"
                  </p>
                </div>

                <div className="flex items-center space-x-3 pt-4 border-t border-slate-50 mt-4">
                  <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center font-serif text-[#0b2545] font-bold text-xs uppercase shrink-0">
                    {item.avatarChar}
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-xs text-slate-800 leading-tight">{item.name}</h5>
                    <p className="text-[10px] text-gray-400 font-sans font-semibold">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
