import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  PhoneCall, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

// @ts-ignore
import solutechLogo from '../assets/images/Primary white font.png';
import { logoImage } from '../data/travelData';

interface FooterSectionProps {
  onPageChange?: (page: 'home' | 'tour' | 'plan' | 'contact') => void;
  logoUrl?: string;
}

export function FooterSection({ onPageChange, logoUrl = logoImage }: FooterSectionProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail('');
    }, 1200);
  };

  return (
    <footer className="w-full relative overflow-hidden bg-[#051426] border-t border-slate-805/40 text-slate-300 pt-16 pb-12 px-6 sm:px-12 md:px-16 xl:px-20 select-none shadow-[0_-12px_40px_-15px_rgba(0,0,0,0.5)]" id="premium_rich_footer">
      
      {/* Ambient Mesh Gradient Blur Orbs mirroring the reference look */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] rounded-full bg-[#1e40af]/15 blur-[140px] pointer-events-none" />

      <div className="w-full max-w-none relative z-10">

        {/* Top Header section mirroring the "Ready to start syncing..." structure */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-16 border-b border-white/10 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center gap-8 max-w-3xl">
            <Link 
              to="/"
              className="cursor-pointer block border-none p-0 bg-transparent rounded-2xl focus:outline-none hover:scale-[1.02] active:scale-95 transition-all duration-300 shrink-0 self-start md:self-auto"
              title="Return to Home"
            >
              <img 
                src={logoUrl} 
                alt="The Tourism People Logo" 
                className="h-20 sm:h-24 w-auto object-contain bg-white rounded-2xl p-1.5 shadow-xl"
                referrerPolicy="no-referrer"
              />
            </Link>
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
                Ready to embark on <br className="hidden sm:inline" />
                your extraordinary escape?
              </h2>
            </div>
          </div>
          <div className="shrink-0 self-start md:self-auto">
            <Link 
              to="/contact"
              className="bg-white hover:bg-slate-100 text-slate-950 px-8 py-3.5 rounded-full font-bold text-sm shadow-xl active:scale-95 hover:scale-[1.02] transition-all duration-300 cursor-pointer inline-flex items-center gap-2 border border-transparent"
            >
              <span>Contact our Concierge</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </Link>
          </div>
        </div>

        {/* Bottom Columns Grid - Left Aligned in order of reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 pt-16 pb-12 text-left relative z-10">
          
          {/* Column 1: Newsletter & Horizontal Inline Email Form (5/12 grid span) */}
          <div className="md:col-span-5 space-y-5">
            <h4 className="text-xs font-bold text-amber-500 tracking-widest uppercase font-mono">Newsletter</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md font-sans">
              We'd love to share our passion for travel with you. Get absolute priority flight price drops, visa consulate updates, and premium curated vacation logs.
            </p>

            <AnimatePresence mode="wait">
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2.5 max-w-md w-full" id="footer_newsletter_form">
                  <div className="relative flex-1 w-full">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400 transition-all duration-300"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto shrink-0 bg-white/10 hover:bg-white text-white hover:text-slate-950 rounded-xl px-6 py-3 text-xs font-bold transition-all duration-300 border border-white/25 active:scale-95 uppercase tracking-wider cursor-pointer"
                  >
                    <span>{loading ? 'Subscribing...' : 'Subscribe'}</span>
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 text-left max-w-md"
                >
                  <div className="flex items-center space-x-2 text-emerald-400 mb-1">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider">Subscribed Successfully</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal font-sans">
                    You've successfully subscribed to our early flight & tour notifications logs. Prepare to be inspired!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* GTA Certified Tag */}
            <div className="inline-flex items-center space-x-2.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <div className="text-left">
                <p className="text-[10px] font-bold text-white uppercase tracking-wider leading-none">GTA LICENSED AGENCY</p>
                <p className="text-[9px] text-[#a5c2eb] font-mono leading-none mt-1">GTA/TA/GH/2026-0089</p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2/12 grid span to allow wide spacing) */}
          <div className="md:col-span-2 md:col-start-6 space-y-5">
            <h4 className="text-xs font-bold text-amber-500 tracking-widest uppercase font-mono">Quick Links</h4>
            <ul className="space-y-3 text-xs text-slate-400 font-medium font-sans">
              <li>
                <Link to="/" className="cursor-pointer hover:text-white transition-colors duration-200 block text-left">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tours" className="cursor-pointer hover:text-white transition-colors duration-200 block text-left">
                  Curated Tours
                </Link>
              </li>
              <li>
                <Link to="/plan" className="cursor-pointer hover:text-white transition-colors duration-200 block text-left">
                  Plan Journey
                </Link>
              </li>
              <li>
                <Link to="/services" className="cursor-pointer hover:text-white transition-colors duration-200 block text-left">
                  Services & Visas
                </Link>
              </li>
              <li>
                <Link to="/contact" className="cursor-pointer hover:text-white transition-colors duration-200 block text-left">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Tour Locations (2/12 grid span) */}
          <div className="md:col-span-2 space-y-5">
            <h4 className="text-xs font-bold text-amber-500 tracking-widest uppercase font-mono">Tour Locations</h4>
            <ul className="space-y-3 text-xs text-slate-400 font-medium font-sans">
              <li>
                <Link to="/tours" className="cursor-pointer hover:text-white transition-colors duration-200 block text-left">
                  Dubai Packages
                </Link>
              </li>
              <li>
                <Link to="/tours" className="cursor-pointer hover:text-white transition-colors duration-200 block text-left">
                  Maldives Escapes
                </Link>
              </li>
              <li>
                <Link to="/tours" className="cursor-pointer hover:text-white transition-colors duration-200 block text-left">
                  Zanzibar Getaways
                </Link>
              </li>
              <li>
                <Link to="/tours" className="cursor-pointer hover:text-white transition-colors duration-200 block text-left">
                  Best of Europe
                </Link>
              </li>
              <li>
                <Link to="/tours" className="cursor-pointer hover:text-white transition-colors duration-200 block text-left">
                  Kruger Safari & Cape Town
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: SoluTech Custom Credit Logo & Information Space (3/12 grid span) */}
          <div className="md:col-span-3 flex flex-col gap-1">
            <h4 className="text-xs font-bold text-amber-500 tracking-widest uppercase font-mono">Partner Credit</h4>
            
            <div className="flex items-center gap-3 -my-2 sm:-my-3" style={{ paddingTop: '12.5px', paddingBottom: '12.5px' }}>
              <span className="text-[11px] font-sans font-bold tracking-wider text-slate-400 uppercase whitespace-nowrap shrink-0">
                Made by
              </span>
              <a 
                href="mailto:solutechghana@gmail.com"
                className="hover:scale-[1.03] active:scale-95 transition-all duration-300 focus:outline-none flex items-center"
                title="Contact SoluTech Developer Support"
              >
                <img 
                  src={solutechLogo} 
                  alt="SoluTech" 
                  className="h-24 sm:h-28 w-auto object-contain brightness-100 -my-6 sm:-my-8"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>

            <div className="flex flex-col gap-2.5 text-xs text-slate-400 font-mono pt-2 -mt-1">
              <div className="flex items-center space-x-2.5 hover:text-teal-300 transition-colors cursor-pointer">
                <PhoneCall className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <a href="tel:+233557111347" className="hover:underline">
                  +233 557 111 347
                </a>
              </div>

              <div className="flex items-center space-x-2.5 hover:text-teal-300 transition-colors cursor-pointer">
                <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <a href="mailto:solutechghana@gmail.com" className="hover:underline">
                  solutechghana@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-2.5 text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Accra, Ghana</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Socials & Corporate Compliance Line */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 relative z-10 text-[11px]">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <p className="text-slate-500 font-sans font-semibold">
              © 2026 The Tourism People GH. Fully recognized by the Ministry of Tourism, Arts & Culture of Ghana.
            </p>
            <p className="text-slate-600 font-mono">
              Designed with bespoke luxury. Powered by authentic local flight & visa escrows. Approved by GTA.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2 font-semibold font-sans text-slate-500">
            <span className="hover:text-white transition duration-200 cursor-pointer">Security Certifications</span>
            <span className="hover:text-white transition duration-200 cursor-pointer">Privacy Guidelines</span>
            <span className="hover:text-white transition duration-200 cursor-pointer">Native Host Agreements</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
