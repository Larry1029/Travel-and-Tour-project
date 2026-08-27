import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  CheckCircle2, 
  Send, 
  Globe 
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Vacation Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <>
      <SEO 
        title="Contact Us & Travel Desk | The Tourism People GH"
        description="Contact The Tourism People GH in Accra, Ghana. Book international vacation tours, consult on travel visas, flight ticketing, and custom corporate retreats."
        canonicalPath="/contact"
      />

      <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
        
        {/* Banner */}
        <section className="bg-[#0b2545] text-white py-16 px-6 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-4 relative z-10">
            <span className="text-[10px] font-mono font-bold tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1.5 rounded-full uppercase inline-block">
              24/7 Global Travel Concierge
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Get in Touch With Our Travel Team
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-normal leading-relaxed">
              Whether you are planning your next family holiday, a luxury safari, or need urgent consular visa support, we are here to assist you.
            </p>
          </div>
        </section>

        {/* Contact Content Grid */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: Contact info & office coordinates */}
            <div className="lg:col-span-5 space-y-6 text-left">
              
              <div className="bg-white rounded-3xl p-7 border border-gray-200 shadow-xs space-y-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#0b2545] tracking-widest block">
                    Headquarters
                  </span>
                  <h2 className="font-serif font-bold text-2xl text-slate-900 mt-1">
                    Accra, Ghana
                  </h2>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-[#0b2545] shrink-0">
                      <MapPin className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Office Location</span>
                      <p className="text-gray-500 mt-0.5 leading-relaxed">
                        Airport Residential Area / East Legon Corridor, Greater Accra Region, Ghana
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-[#0b2545] shrink-0">
                      <Phone className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Telephone & WhatsApp</span>
                      <p className="text-gray-500 mt-0.5 leading-relaxed font-mono">
                        +233 (0) 54 000 0000 / +233 (0) 24 400 0000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-[#0b2545] shrink-0">
                      <Mail className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Official Inquiries</span>
                      <p className="text-gray-500 mt-0.5 leading-relaxed font-mono">
                        info@thetourismpeoplegh.com / bookings@thetourismpeoplegh.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-[#0b2545] shrink-0">
                      <Clock className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Office Hours</span>
                      <p className="text-gray-500 mt-0.5 leading-relaxed">
                        Monday – Friday: 8:00 AM – 6:00 PM (GMT)<br />
                        Saturday: 9:00 AM – 2:00 PM (GMT)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Trust Card */}
              <div className="bg-[#0b2545] text-white rounded-3xl p-6 shadow-md space-y-2">
                <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs font-bold">
                  <Globe className="w-4 h-4" />
                  <span>Licensed Travel Agency</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Registered with the Ghana Tourism Authority (GTA). Fully bonded travel agency ensuring your travel funds and flight security are safeguarded.
                </p>
              </div>

            </div>

            {/* RIGHT COLUMN: Contact message form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-xs text-left">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h2 className="font-serif font-bold text-2xl text-slate-900">
                    Message Dispatched Successfully!
                  </h2>
                  <p className="text-gray-500 text-xs sm:text-sm max-w-md mx-auto">
                    Thank you <strong>{name}</strong>. Our Senior Travel Manager has received your inquiry and will follow up via email ({email}) or telephone ({phone || 'provided number'}).
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSuccess(false);
                        setName('');
                        setEmail('');
                        setPhone('');
                        setMessage('');
                      }}
                      className="bg-[#0b2545] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-[#0b2545] tracking-widest block">
                      Direct Messaging
                    </span>
                    <h2 className="font-serif font-bold text-2xl text-slate-900 mt-1">
                      Send an Inquiry
                    </h2>
                    <p className="text-gray-500 text-xs mt-1">
                      Fill out the form below and an agent will respond within 2 to 4 business hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Abena Osei"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="abena@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700">Phone / WhatsApp Number</label>
                      <input
                        type="tel"
                        placeholder="+233 24 000 0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700">Inquiry Subject</label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-none"
                      >
                        <option value="General Vacation Inquiry">General Vacation Inquiry</option>
                        <option value="Dubai 6-Day Package Booking">Dubai 6-Day Package Booking</option>
                        <option value="Schengen / UK Visa Assistance">Schengen / UK Visa Assistance</option>
                        <option value="Corporate / Group Retreat">Corporate / Group Retreat</option>
                        <option value="Ghana Heritage Eco-Tour">Ghana Heritage Eco-Tour</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700">Your Message or Detailed Request *</label>
                    <textarea
                      required
                      placeholder="Tell us about your proposed travel dates, destination desires, number of travelers, or questions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#0b2545] hover:bg-[#15345c] text-white py-3.5 rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending Your Message...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Dispatch Travel Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </>
  );
};
