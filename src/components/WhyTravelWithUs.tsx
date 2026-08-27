import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { luxuryDestinationImage } from '../data/travelData';

interface WhyTravelWithUsProps {
  onPlanJourney?: () => void;
}

export const WhyTravelWithUs: React.FC<WhyTravelWithUsProps> = ({ onPlanJourney }) => {
  return (
    <section 
      className="py-24 bg-slate-50/70 relative overflow-hidden border-b border-slate-100" 
      id="why_travel_with_us_section"
    >
      {/* Decorative Grid Mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Curved dotted flight path background line */}
      <div className="absolute inset-x-0 top-12 pointer-events-none opacity-30 z-0 hidden md:block">
        <svg className="w-full h-80" viewBox="0 0 1200 350" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M 150 280 C 400 220 580 40 850 140 C 950 175 1020 120 1100 60" 
            stroke="#4f46e5" 
            strokeWidth="2" 
            strokeDasharray="6 6" 
            fill="none" 
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Premium Destination Showcase Mask (Now on the left) */}
          <div className="md:col-span-7 order-2 md:order-1 relative flex justify-center w-full" id="why_choose_us_showcase_col">
            
            {/* Continuous Mask Shape container - exactly side-by-side with staggered heights, matching the hero's layout */}
            <div 
              className="relative w-full aspect-[4/3] sm:aspect-square md:aspect-[4/3] max-w-[540px] md:h-[485px] lg:h-[500px] xl:h-[530px] overflow-visible"
              id="continuous_mask_reveal_grid"
            >
              {[
                {
                  // Capsule 1 (Left window, low-positioned) - Width exactly 28%
                  leftPercent: 5,
                  topPercent: 32,
                  widthPercent: 28,
                  heightPercent: 64,
                  borderRadiusClass: "rounded-[40px] sm:rounded-[60px] md:rounded-[70px]",
                  delay: 0.1,
                  hoverScale: 1.02,
                  zIndex: "z-10"
                },
                {
                  // Capsule 2 (Center window, large and tall) - Width exactly 28%
                  leftPercent: 36,
                  topPercent: 4,
                  widthPercent: 28,
                  heightPercent: 86.5,
                  borderRadiusClass: "rounded-[80px] sm:rounded-[110px] md:rounded-[134px]",
                  delay: 0.0,
                  hoverScale: 1.01,
                  zIndex: "z-20"
                },
                {
                  // Capsule 3 (Right window, high-positioned) - Width exactly 28%
                  leftPercent: 67,
                  topPercent: 12,
                  widthPercent: 28,
                  heightPercent: 74,
                  borderRadiusClass: "rounded-[40px] sm:rounded-[60px] md:rounded-[70px]",
                  delay: 0.2,
                  hoverScale: 1.02,
                  zIndex: "z-10"
                }
              ].map((mask, idx) => {
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: mask.delay, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: mask.hoverScale, transition: { duration: 0.3 } }}
                    className={`continuous-mask-child absolute overflow-hidden ${mask.borderRadiusClass} ${mask.zIndex} shadow-lg shadow-slate-200/60 border border-white/50 bg-slate-100 cursor-pointer transition-shadow hover:shadow-2xl hover:border-indigo-100/40`}
                    style={{
                      left: `${mask.leftPercent}%`,
                      top: `${mask.topPercent}%`,
                      width: `${mask.widthPercent}%`,
                      height: `${mask.heightPercent}%`
                    }}
                  >
                    {/* The continuous background image utilizing pure CSS scale & translation matching its layout */}
                    <div 
                      className="absolute bg-cover bg-center transition-transform duration-700 hover:scale-[1.02] origin-center"
                      style={{
                        backgroundImage: `url(${luxuryDestinationImage})`,
                        width: `${(100 / mask.widthPercent) * 100}%`,
                        height: `${(100 / mask.heightPercent) * 100}%`,
                        left: `-${(mask.leftPercent / mask.widthPercent) * 100}%`,
                        top: `-${(mask.topPercent / mask.heightPercent) * 100}%`,
                      }}
                    />
                    
                    {/* Exquisite glossy overlay reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none" />
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* RIGHT COLUMN: Content (Now on the right) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 order-1 md:order-2 flex flex-col justify-center space-y-6 text-left relative"
            id="why_choose_us_content_col"
          >
            {/* Skyline background in left column, very subtle */}
            <svg className="absolute -bottom-10 -left-6 w-[120%] h-32 text-[#0b2545]/5 pointer-events-none z-0 select-none hidden sm:block animate-pulse [animation-duration:8s]" viewBox="0 0 800 100" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M 50 100 L 90 40 L 130 100 Z" />
              <path d="M 110 100 L 140 55 L 170 100 Z" strokeDasharray="3 3" />
              <path d="M 230 100 L 230 70 L 240 70 L 240 55 C 240 45 250 45 250 40 C 250 45 260 45 260 55 L 260 70 L 270 70 L 270 100 Z" />
              <path d="M 350 100 C 360 80 365 50 368 20 L 372 20 C 375 50 380 80 390 100" />
              <line x1="363" y1="65" x2="377" y2="65" />
              <line x1="360" y1="85" x2="380" y2="85" />
              <line x1="368" y1="40" x2="372" y2="40" />
              <path d="M 470 100 C 470 70 490 60 500 100" />
              <path d="M 490 100 C 490 65 510 50 525 100" />
              <path d="M 515 100 C 515 75 530 65 545 100" />
              <path d="M 610 100 L 610 30 L 625 15 L 640 30 L 640 100" />
              <rect x="618" y="40" width="8" height="12" />
              <circle cx="622" cy="46" r="3" />
              <path d="M 700 100 L 700 80 C 700 70 710 65 730 65 C 750 65 760 70 760 80 L 760 100" />
              <path d="M 710 100 L 710 85 L 720 85 L 720 100" />
              <path d="M 730 100 L 730 85 L 740 85 L 740 100" />
              <path d="M 750 100 L 750 85 L 755 85 L 755 100" />
            </svg>

            <div className="space-y-4 relative z-10">
              <span className="text-[10px] font-mono font-extrabold tracking-widest text-[#4f46e5] bg-indigo-55/70 border border-indigo-100/30 px-3.5 py-1.5 rounded-full uppercase inline-block">
                Why Travel With Us
              </span>
              <h2 className="font-serif text-[#0b2545] text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]" id="why_travel_headline">
                We Make Every Journey <br />
                <span className="text-[#3b82f6] font-black">Memorable & Seamless</span>
              </h2>
            </div>

            <p className="text-gray-500 font-medium text-xs sm:text-sm leading-relaxed font-sans max-w-lg relative z-10" id="why_travel_description">
              At The Tourism People GH, we are dedicated to crafting flawlessly designed voyages that connect souls with unforgettable landscapes. From expedited international visas and passport protocols to custom-curated safaris, private resort escapes, and complete end-to-end travel support, our specialist team ensures that your transition from your screen to reality is entirely effortless.
            </p>

            {/* List of custom advantages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4 pt-2 relative z-10" id="why_travel_advantages_grid">
              {[
                { title: "International Tours", desc: "Premium flights & boutique resort stays across 15+ world destinations." },
                { title: "Expert Visa Support", desc: "Strategic paperwork filing and dedicated consular coordination." },
                { title: "Personalized Planning", desc: "Vibe-centric responsive itineraries matched to your exact style." },
                { title: "Curated Experiences", desc: "Local historic walks, private catamaran trips, and safari tracks." },
                { title: "End-to-End Concierge", desc: "24/7 dedicated support desk backing every single coordinate." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 group p-1 rounded-xl transition-all duration-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <div className="space-y-1 text-left">
                    <h4 className="text-[11px] font-bold text-slate-800 tracking-tight uppercase">{item.title}</h4>
                    <p className="text-[10.5px] text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <div className="pt-4 relative z-10">
              {onPlanJourney ? (
                <button
                  onClick={onPlanJourney}
                  className="bg-[#0b2545] hover:bg-[#15345c] text-white text-xs font-semibold tracking-wider py-4 px-8 rounded-xl transition-all duration-300 shadow-md shadow-gray-200 flex items-center justify-center space-x-2.5 cursor-pointer transform active:scale-98"
                  id="why_choose_primary_cta"
                >
                  <span>Plan Your Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <Link
                  to="/plan"
                  className="bg-[#0b2545] hover:bg-[#15345c] text-white text-xs font-semibold tracking-wider py-4 px-8 rounded-xl transition-all duration-300 shadow-md shadow-gray-200 inline-flex items-center justify-center space-x-2.5 cursor-pointer transform active:scale-98"
                  id="why_choose_primary_cta"
                >
                  <span>Plan Your Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
