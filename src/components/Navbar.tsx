import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, PhoneCall, ArrowRight, Sparkles } from 'lucide-react';
import { logoImage } from '../data/travelData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tours', path: '/tours' },
    { name: 'Plan Your Trip', path: '/plan' },
    { name: 'Services & Visas', path: '/services' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <>
      <header 
        className={`fixed z-50 transition-all duration-500 ease-in-out left-1/2 -translate-x-1/2 ${
          isScrolled 
            ? 'top-4 w-[95%] sm:w-[90%] md:w-[85%] max-w-5xl bg-white/80 backdrop-blur-md shadow-xl border border-gray-100/80 rounded-2xl md:rounded-full h-14 md:h-16' 
            : 'top-0 w-full max-w-none bg-white/75 backdrop-blur-md border-b border-slate-100 h-20'
        }`}
        id="app_header"
      >
        <div className={`h-full flex items-center justify-between transition-all duration-500 ease-in-out ${
          isScrolled ? 'w-full px-6 sm:px-8' : 'w-full max-w-7xl mx-auto px-6'
        }`}>
          
          {/* Brand Logo */}
          <Link 
            to="/"
            className="flex items-center cursor-pointer group space-x-2 sm:space-x-3 transition-all duration-500 ease-in-out min-w-0" 
            id="brand_logo" 
          >
            <img 
              src={logoImage}
              alt="The Tourism People GH Logo" 
              className={`object-contain group-hover:scale-105 transition-all duration-500 ease-in-out shrink-0 mix-blend-multiply ${
                isScrolled ? 'w-[2.5rem] h-[2.5rem] sm:w-10 sm:h-10' : 'w-[3.25rem] h-[3.25rem] sm:w-12 sm:h-12'
              }`}
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col justify-center min-w-0">
              <span className="font-display font-bold tracking-tight text-gray-900 flex items-center leading-none text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                <span className="hidden sm:inline">The </span>Tourism People <span className="text-[#0b2545] font-extrabold ml-1 sm:ml-1.5 font-mono text-[10px] sm:text-xs">GH</span>
              </span>
              <span className={`hidden sm:block text-[9px] font-mono tracking-widest text-gray-400 uppercase font-medium transition-all duration-500 ease-in-out overflow-hidden ${
                isScrolled ? 'opacity-0 max-h-0 mt-0 pointer-events-none' : 'opacity-100 max-h-4 mt-0.5'
              }`}>
                Authentic Ghana Escapes
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className={`hidden md:flex items-center font-semibold transition-all duration-500 ease-in-out text-xs sm:text-sm ${
            isScrolled ? 'space-x-4 md:space-x-5' : 'space-x-6 md:space-x-7'
          }`} id="desktop_nav">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path}
                to={link.path}
                className={({ isActive }) => `transition-all duration-300 ease-in-out relative py-1 border-b-2 cursor-pointer ${
                  isActive 
                    ? 'text-[#0b2545] font-black border-[#0b2545]' 
                    : 'text-gray-500 border-transparent hover:text-black hover:border-gray-300'
                }`}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right CTA Action */}
          <div className="flex items-center space-x-2 sm:space-x-3 transition-all duration-500 ease-in-out" id="header_cta">
            <div className={`hidden lg:flex items-center space-x-2 text-[10px] font-mono text-gray-400 bg-slate-50 border border-gray-100 rounded-full transition-all duration-500 ease-in-out ${
              isScrolled ? 'opacity-0 scale-95 pointer-events-none max-w-0 overflow-hidden border-transparent px-0 py-0' : 'opacity-100 scale-100 max-w-[150px] px-2.5 py-1.5'
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] text-gray-600 font-medium">Accra Concierge</span>
            </div>
            
            <Link 
              to="/contact"
              className={`hidden sm:inline-flex bg-[#0b2545] text-white hover:bg-[#15345c] rounded-full font-bold tracking-wider uppercase transition-all duration-500 ease-in-out shadow-sm items-center space-x-1.5 cursor-pointer text-xs ${
                isScrolled ? 'px-4 py-2' : 'px-5 py-2.5'
              }`}
              id="cta_contact_us"
            >
              <PhoneCall className={isScrolled ? "w-3 h-3" : "w-3.5 h-3.5"} />
              <span className="hidden md:inline">Contact Us</span>
              <span className="md:hidden inline">Contact</span>
            </Link>

            {/* Mobile Burger Menu Button */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMobileMenuOpen((prev) => !prev);
              }}
              className="md:hidden relative z-50 p-2 text-gray-800 hover:text-[#0b2545] active:scale-95 focus:outline-none transition-all border border-gray-200/80 bg-white/95 shadow-sm rounded-full cursor-pointer flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 shrink-0"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-900" />
              ) : (
                <Menu className="w-5 h-5 text-gray-900" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Backdrop & Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-[55] md:hidden cursor-pointer"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className={`fixed left-1/2 -translate-x-1/2 w-[92%] max-w-sm bg-white backdrop-blur-xl shadow-2xl border border-gray-200/80 rounded-3xl z-[60] p-6 flex flex-col space-y-5 md:hidden ${
                isScrolled ? 'top-20' : 'top-24'
              }`}
            >
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <span className="text-[11px] font-mono font-bold tracking-widest text-gray-400 uppercase">
                  Menu Navigation
                </span>
                <button 
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-gray-900 text-xs font-mono font-semibold uppercase flex items-center gap-1"
                >
                  <span>Close</span>
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex flex-col space-y-1.5">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => `w-full py-3 px-4 rounded-2xl text-left font-display tracking-tight text-sm transition-all duration-200 flex items-center justify-between cursor-pointer active:scale-98 ${
                      isActive
                        ? 'bg-[#0b2545] text-white font-bold shadow-md shadow-[#0b2545]/20'
                        : 'text-gray-700 hover:bg-slate-50 hover:text-[#0b2545] font-medium'
                    }`}
                  >
                    {({ isActive }) => (
                      <>
                        <span>{item.name}</span>
                        {isActive ? (
                          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                        )}
                      </>
                    )}
                  </NavLink>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-mono tracking-widest text-[#0b2545] font-bold uppercase leading-none">The Tourism People GH</p>
                  <p className="text-[8px] sm:text-[9px] font-mono text-gray-400 mt-1">Ghana's Premier Travel Experience</p>
                </div>
                <div className="flex space-x-1.5 text-emerald-600 text-[9px] items-center font-mono bg-emerald-50/80 px-2.5 py-1 rounded-full border border-emerald-100/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Online Concierge</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
