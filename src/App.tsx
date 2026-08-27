/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  MapPin, 
  Sparkles, 
  Plane, 
  Palmtree, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  Globe2, 
  CalendarDays, 
  MousePointer, 
  Map, 
  Sunset,
  Volume2,
  Lock,
  FileText,
  Briefcase,
  Search,
  UserCheck,
  Clock,
  Ticket,
  ShieldCheck,
  Building2,
  Minus,
  Plus,
  X,
  Menu,
  Info,
  ArrowLeft,
  Mail,
  Send
} from 'lucide-react';

// Import our beautiful generated images
// @ts-ignore
import airplaneImage from './assets/images/airplane_window_travel_1780755588338.png';
// @ts-ignore
import beachImage from './assets/images/tropical_beach_hammock_1780755605622.png';
// @ts-ignore
import logoImage from './assets/images/The tourism People 2-01.png';
const keyboardEscapeImage = '';
// @ts-ignore
import luxuryDestinationImage from './assets/images/luxury_destination_santorini_1781099766214.png';
// @ts-ignore
import chicagoBeanImage from './assets/images/chicago_bean_1781105228499.png';
// @ts-ignore
import statueOfLibertyImage from './assets/images/statue_of_liberty_1781105242101.png';
// @ts-ignore
import maldivesPavilionImage from './assets/images/maldives_pavilion_1781105569700.png';
// @ts-ignore
import saSafariSpringbokImage from './assets/images/sa_safari_springbok_1781106600913.png';
// @ts-ignore
import saDrakensbergPoolImage from './assets/images/sa_drakensberg_pool_1781106614554.png';
// @ts-ignore
import saCapetownStadiumImage from './assets/images/sa_capetown_stadium_1781106625964.png';
// @ts-ignore
import saCapetownSunsetImage from './assets/images/sa_capetown_sunset_1781106638544.png';
// @ts-ignore
import zanzibarBeachBoatsImage from './assets/images/zanzibar_beach_boats_1781107094826.png';
// @ts-ignore
import zanzibarAerialVillasImage from './assets/images/zanzibar_aerial_villas_1781107110717.png';
// @ts-ignore
import zanzibarWoodenJettyImage from './assets/images/zanzibar_wooden_jetty_1781107123345.png';
// @ts-ignore
import dubaiMuseumImage from './assets/images/dubai_museum_future_1781108110543.png';
// @ts-ignore
import dubaiBurjImage from './assets/images/dubai_burj_khalifa_1781108125416.png';
// @ts-ignore
import dubaiBeachWomenImage from './assets/images/dubai_beach_women_1782830100208.jpg';
// @ts-ignore
import dubaiCoverImage from './assets/images/dubai cover.jpeg';
// @ts-ignore
import usaCoverImage from './assets/images/USA cover.jpeg';
// @ts-ignore
import europeCoverImage from './assets/images/Europe cover.jpeg';
// @ts-ignore
import saCoverImage from './assets/images/SA cover.jpeg';
// @ts-ignore
import ukCoverImage from './assets/images/UK cover.jpeg';
// @ts-ignore
import moroccoWaterfallImage from './assets/images/morocco_waterfall_ouzoud_1781108376554.png';
// @ts-ignore
import moroccoAitBenhaddouImage from './assets/images/morocco_ait_benhaddou_1781108392646.png';
// @ts-ignore
import ukWindsorCastleImage from './assets/images/uk_windsor_castle_1781109135700.png';
// @ts-ignore
import ukTowerBridgeImage from './assets/images/uk_tower_bridge_1781109151328.png';
// @ts-ignore
import ukStonehengeImage from './assets/images/uk_stonehenge_1781109167836.png';

// Import our modern testimonials section
import { TestimonialsSection } from './components/TestimonialsSection';
import { FooterSection } from './components/FooterSection';

type VibeType = 'coastal' | 'culture' | 'adventure';

interface VibeData {
  tag: string;
  subTitle: string;
  landmark: string;
  duration: string;
  rating: string;
  highlights: string[];
  vibrantColor: string;
  accentText: string;
}

const VIBE_DETAILS: Record<VibeType, VibeData> = {
  coastal: {
    tag: "COASTAL PARADISE & SOUL ESCAPE",
    subTitle: "Unwind along Ghana's pristine coconut coastlines. Listen to the gentle Atlantic waves, stroll on warm white sands, and lounge on tropical shores at Busua and Lou Moon resorts.",
    landmark: "Busua Bay & Lou Moon Resort",
    duration: "6 Days, 5 Nights",
    rating: "4.95 (140+ reviews)",
    vibrantColor: "bg-teal-500",
    accentText: "text-teal-600",
    highlights: ["Scenic beach hammock lounging", "Surfing lessons in Busua Coast", "Freshly sourced seafood platters", "Sunset shoreline bonfire drumming"]
  },
  culture: {
    tag: "ROYAL HERITAGE & LIVING STORIES",
    subTitle: "Walk the historic corridors of Elmina, participate in majestic Ashanti durbars in Kumasi, and wear your custom-woven royal Kente cloth made straight by native craftsmen.",
    landmark: "Elmina Castle & Manhyia Palace",
    duration: "8 Days, 7 Nights",
    rating: "4.98 (290+ reviews)",
    vibrantColor: "bg-amber-500",
    accentText: "text-amber-600",
    highlights: ["Ancestral castle historic tours", "Royal Ashanti Palace gallery access", "Kente weaving workshops", "Traditional culinary masterclasses"]
  },
  adventure: {
    tag: "RAINFOREST CANOPY & ROAMING SAFARI",
    subTitle: "Heighten your senses suspend-walking above Kakum's primordial forests, track families of wild elephants in Mole Savannah, and swim under West Africa's tallest cascade.",
    landmark: "Kakum Canopy & Mole National Park",
    duration: "7 Days, 6 Nights",
    rating: "4.92 (180+ reviews)",
    vibrantColor: "bg-emerald-600",
    accentText: "text-emerald-700",
    highlights: ["Kakum 40-meter high canopy walk", "Driving & walking elephant safaris", "Wli Waterfall jungle trek", "Overnight wild luxury safari lodges"]
  }
};

export interface TravelService {
  id: string;
  name: string;
  category: 'passports' | 'visas' | 'ticketing' | 'group-tourism';
  description: string;
  timeline: string;
  priceEstimate?: string;
  badge?: string;
  additionalInfo?: string[];
}

export const SERVICES_CATALOG: TravelService[] = [
  {
    id: "passport-5days",
    name: "Expedited Passport Service (5-Day Rush)",
    category: "passports",
    description: "Authorized express protocol for emergency or last-minute international transit. Complete queue bypass and direct biometric coordination.",
    timeline: "5 Working Days",
    badge: "Express Priority",
    priceEstimate: "Official fee + premium processing support"
  },
  {
    id: "passport-20days",
    name: "Standard Passport Service (20-Day Standard)",
    category: "passports",
    description: "Reliable, structured assistance with new biometric applications, renewals, or lost passport tracking, completed directly without lines.",
    timeline: "20 Working Days",
    badge: "Official Tracked",
    priceEstimate: "Official entry fee + minimal guidance fee"
  },
  {
    id: "birth-cert",
    name: "Birth Certificate Application & Attestation",
    category: "passports",
    description: "Official search, authentic biometric birth registration, secure replacement certificates, and certified foreign ministry apostille attestation.",
    timeline: "7 - 10 Working Days",
    badge: "Ministry Handled",
    priceEstimate: "Guaranteed registration fee"
  },
  {
    id: "visa-china",
    name: "China Consular Visa (F, M, L, Z types)",
    category: "visas",
    description: "Official submission prep, approved tourist or business invitation verification, online application filing, and VIP consulate counter tracking.",
    timeline: "5 - 7 Business Days",
    badge: "Specialist Support",
    priceEstimate: "Enquire for cost"
  },
  {
    id: "visa-uk",
    name: "United Kingdom Visa (UK Visa Advisory)",
    category: "visas",
    description: "Expert supporting documents review, official UKVI online questionnaire filing, bank statement metrics validation, and custom tie proof building.",
    timeline: "10 - 15 Business Days",
    badge: "Advisory Success",
    priceEstimate: "Enquire for advisory fees"
  },
  {
    id: "visa-us",
    name: "United States Visa Prep (US Visa)",
    category: "visas",
    description: "In-depth DS-160 online form optimization, MRV slip activations, live mock-interview training, and active schedule slot optimization reviews.",
    timeline: "Flexible ( consular slot subject )",
    badge: "Highly Preparation-Driven",
    priceEstimate: "Preparation fee structure"
  },
  {
    id: "visa-dubai",
    name: "Dubai (UAE) Electronic Visa",
    category: "visas",
    description: "Direct tourist entry evisas. 100% cloud-hosted electronic submission, quick approval, and immediate PDF delivery verified with immigration codes.",
    timeline: "48 - 72 Hours Max",
    badge: "Instant Approval",
    priceEstimate: "All-inclusive consular entry fee"
  },
  {
    id: "visa-schengen",
    name: "Schengen State Visa Consultation",
    category: "visas",
    description: "Document curation for any of the Schengen member states. Absolute precision with travel itinerary requirements, accommodation, and global cover.",
    timeline: "10 - 15 Consular Days",
    badge: "29 Member States",
    priceEstimate: "Full application packaging"
  },
  {
    id: "schengen-dates",
    name: "Schengen Dates Availability & Guard Tracker",
    category: "visas",
    description: "Continuous tracking system monitoring embassy calendars for cancelled slots or newly opened candidate dates. Secure rare places instantly.",
    timeline: "Live Alert System",
    badge: "Schengen Dates Available",
    priceEstimate: "Free monitoring"
  },
  {
    id: "visa-maldives",
    name: "Maldives Luxury Entry Permit & IMUGA",
    category: "visas",
    description: "Official processing for arrivals in Male. Pre-submission of IMUGA declaration documents, luxury yacht route confirmations, and tax filings.",
    timeline: "24 Hours Delivery",
    badge: "Dream Getaway Setup",
    priceEstimate: "Permit assistance fee"
  },
  {
    id: "visa-zanzibar",
    name: "Zanzibar / Tanzania E-Visa & Mandatory Cover",
    category: "visas",
    description: "Official advisory for Tanzania e-visas, active validation of absolute mandatory local medical coverage policies, and health travel registrations.",
    timeline: "3 - 5 Business Days",
    badge: "Zanzibar Escape",
    priceEstimate: "Filing and Insurance assistance"
  },
  {
    id: "visa-bali",
    name: "Bali (Indonesia) E-VOA & Customs Pre-Clearance",
    category: "visas",
    description: "Electronic Indonesian Visa-on-Arrival (E-VOA) file acquisition, tourist levy tax pre-payment slips, and fast-track custom QR bar codes.",
    timeline: "48 Hours Guaranteed",
    badge: "Bali Retreat Setup",
    priceEstimate: "VOA + Processing fee"
  },
  {
    id: "visa-morocco",
    name: "Morocco Consular E-Visa Processing",
    category: "visas",
    description: "Authorized guidance for tourist access to the ancient cities of Marrakech and Casablanca. Precise support for letters and hotel reservation proofing.",
    timeline: "7 Business Days",
    badge: "North Africa Gateway",
    priceEstimate: "Complete processing packaging"
  },
  {
    id: "visa-southafrica",
    name: "South Africa E-Visa Express Processing",
    category: "visas",
    description: "Expert digital filing for South African Home Affairs online system. Secure upload and monitoring of financial files, flight bookings, and invitations.",
    timeline: "5 - 10 Business Days",
    badge: "100% Biometric Digitized",
    priceEstimate: "Processing assistance fee"
  },
  {
    id: "ticket-res",
    name: "Flights & Tickets Reservations",
    category: "ticketing",
    description: "Verifiable flight tickets reservations on certified global distribution networks. Meets requirements for tourist embassies and border pre-checks.",
    timeline: "Within 2 Hours",
    badge: "Verifiable PNR",
    priceEstimate: "Small reservation lock fee"
  },
  {
    id: "hotel-res",
    name: "Hotel Reservations Vouchers",
    category: "ticketing",
    description: "Fully confirmed hotel reservation vouchers with corporate discount benefits. Aligned with immigration verification standards globally.",
    timeline: "Immediate / Safe voucher",
    badge: "Vetted Lodging Voucher"
  },
  {
    id: "flight-itin",
    name: "Flight Itinerary Builder",
    category: "ticketing",
    description: "Bespoke daily air routes and travel itinerary documents mapping connecting flight times. Crafted nicely to avoid immigration issues.",
    timeline: "Instant Generation",
    badge: "Immigration Friendly"
  },
  {
    id: "tourism-packs",
    name: "Group Tourism Applications & Guided Packages",
    category: "group-tourism",
    description: "Comprehensive travel logistics for schools, companies, family circles, or associations studying and exploring West Africa or international routes.",
    timeline: "Custom Fitted Timing",
    badge: "Corporate & Group Specials"
  }
];

export interface TourPackage {
  id: string;
  name: string;
  duration: string;
  region: string;
  startingPrice: number;
  currency: string;
  description: string;
  inclusions: string[];
  exclusions: string[];
  image: string;
  timelineDays: { day: string; title: string; desc: string }[];
  travelerPricing: {
    id: string;
    label: string;
    subLabel: string;
    price: number;
  }[];
}

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: "tour-singapore-thailand",
    name: "ADANSI 13 EXPLORE SINGAPORE THAILAND",
    duration: "11 Days",
    region: "ASIA",
    startingPrice: 48580,
    currency: "GH₵",
    description: "Why choose between a vibrant city adventure and a relaxing cultural escape when you can have both? Experience two of Asia's most exciting destinations in one unforgettable journey. Discover ultra-futuristic buildings in Singapore alongside rich cultural temples and royal river life in Thailand.",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=compress&cs=tinysrgb&w=800",
    inclusions: [
      "Return flight",
      "Hotel accommodation with breakfast",
      "Guided city tour",
      "Airport transfers",
      "Travel insurance",
      "3 nights in Singapore",
      "6 nights in Bangkok",
      "Daily Breakfast",
      "Tours in Singapore",
      "City tour and River Cruise in Bangkok",
      "Complimentary Esim"
    ],
    exclusions: [
      "Tips and gratuities",
      "anything not mentioned in the inclusions"
    ],
    timelineDays: [
      { day: "Day 1", title: "Accra Departure & Flights", desc: "Board your international flight to Asia with premium meal services and full amenities onboard." },
      { day: "Day 2", title: "Singapore Arrival & Marina View", desc: "Arrive in Singapore. Check into your deluxe city hotel and enjoy a panoramic sunset view of the Marina Bay skyline." },
      { day: "Day 3", title: "Sentosa Island & Cable Cars", desc: "Explore the state-of-the-art Sentosa resorts, sensory trails, and glide through the clouds in high-altitude cable cars." },
      { day: "Day 4", title: "Gardens by the Bay & SkyPark", desc: "Visit world-famous supertree groves and step into the high-dome flower forests of Gardens by the Bay." },
      { day: "Day 5", title: "Fly to Bangkok & Night Cruise", desc: "Board a short regional flight to Bangkok. In the evening, step onto a premium wooden barge for a curated dinner cruise on the historical Chao Phraya River." },
      { day: "Day 6", title: "Grand Palace & Golden Temple", desc: "Explore the ancient royal temples of Bangkok, the Emerald Buddha shrine, and enjoy a guided traditional canal-boat ride." },
      { day: "Day 7", title: "Ayutthaya UNESCO Explorer", desc: "Embrace the monumental stone ruins of Siam's former capital, guided by native historians." },
      { day: "Day 8", title: "Floating Markets & Thai Cooking", desc: "Take a speed boat through exotic floating grocery markets and cook authentic dishes in an organic garden school." },
      { day: "Day 9", title: "Pattaya Resort & Beachside Rest", desc: "Transfer to a private beachside resort in Pattaya for pristine coastal activities and relaxation." },
      { day: "Day 10", title: "Coral Island Speedboat Excursion", desc: "Snorkel in turquoise reefs and relish an fresh seafood barbecue on the pristine sands of Coral Island." },
      { day: "Day 11", title: "Return Home Flights", desc: "Transfer to Bangkok Airport for departure flights back to Accra, ending your magnificent double-country story." }
    ],
    travelerPricing: [
      { id: "Adult", label: "Adult", subLabel: "GH₵48,580.00", price: 48580 },
      { id: "Couple", label: "Couple", subLabel: "GH₵96,750.00", price: 96750 },
      { id: "SingleSupplement", label: "Single Supplement", subLabel: "GH₵9,100.00", price: 9100 },
      { id: "ChildWithBed", label: "Child With Bed", subLabel: "GH₵45,980.00", price: 45980 },
      { id: "ChildWithoutBed", label: "Child Without Bed", subLabel: "GH₵41,290.00", price: 41290 },
      { id: "Infant", label: "Infant", subLabel: "GH₵7,150.00", price: 7150 }
    ]
  },
  {
    id: "tour-saltwater",
    name: "The Saltwater & Sanctuary Coastal Tour",
    duration: "6 Days",
    region: "WEST AFRICA",
    startingPrice: 34300,
    currency: "GH₵",
    description: "A gorgeous coastal traverse matching direct historic slavery education with restorative beachside meditation. Seek deep coastal restoration listening to the gentle Atlantic waves, strolling on warm white sands, and lounging on tropical shores at Busua and Lou Moon resorts.",
    image: "https://images.unsplash.com/photo-1506013013876-0bf8d4f9c101?auto=compress&cs=tinysrgb&w=800",
    inclusions: [
      "Luxury private beach resort lodging",
      "Daily Kundalini yoga session",
      "All organic gourmet coastal meals",
      "Cape Coast slave castle VIP entry",
      "Professional historians guiding",
      "Premium 4WD vehicles",
      "Complimentary local coconut refreshments"
    ],
    exclusions: [
      "Premium alcoholic cocktails",
      "Gratuities for local fishermen",
      "Personal items not listed"
    ],
    timelineDays: [
      { day: "Day 1", title: "Accra to Elmina Coastline Route", desc: "Depart Accra via clean luxury coach. Check into your heritage coastal lodging and sit around a beachside bonfire." },
      { day: "Day 2", title: "Elmina & Cape Coast Slave Castle Tour", desc: "Private VIP tour of the historic World Heritage castles with a senior curator. Procession through the Gate of No Return." },
      { day: "Day 3", title: "Kakum Rainforest Canopy Traverse", desc: "Hike up Kakum National Park and cross the 40-meter high swinging tree canopy walkways, followed by local raw honey tasting." },
      { day: "Day 4", title: "Busua Bay Beachside Oasis Rest", desc: "Unwind at Busua Bay with surfs, organic coconut oil massages, and private beach loungers." },
      { day: "Day 5", title: "Lou Moon Lagoon Boat Ride", desc: "Experience the private bays of Lou Moon, with pristine sea kayaking and a five-course local seafood gala dinner." },
      { day: "Day 6", title: "Scenic Return journey & Accra Arrival", desc: "Final beach sunrise meditation, then return overland to Accra with a visit to traditional clay bead-making workshops." }
    ],
    travelerPricing: [
      { id: "Adult", label: "Adult", subLabel: "GH₵34,300.00", price: 34300 },
      { id: "Couple", label: "Couple", subLabel: "GH₵62,500.00", price: 62500 },
      { id: "SingleSupplement", label: "Single Supplement", subLabel: "GH₵6,800.00", price: 6800 },
      { id: "ChildWithBed", label: "Child With Bed", subLabel: "GH₵31,000.00", price: 31000 },
      { id: "ChildWithoutBed", label: "Child Without Bed", subLabel: "GH₵27,500.00", price: 27500 },
      { id: "Infant", label: "Infant", subLabel: "GH₵4,900.00", price: 4900 }
    ]
  },
  {
    id: "tour-kingdom-of-gold",
    name: "Ashanti Kingdom of Gold Heritage Expedition",
    duration: "8 Days",
    region: "WEST AFRICA",
    startingPrice: 43400,
    currency: "GH₵",
    description: "Enter the Ashanti royal courts, explore centuries-old gold weaving traditions under royal curators, and dine with local tribal leaders during a legendary cultural feast. Perfect for those seeking deep connection with ancestral history.",
    image: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=compress&cs=tinysrgb&w=800",
    inclusions: [
      "Manhyia Palace VIP audience tickets",
      "Gold-weaving masterclass with Kente elders",
      "Traditional food workshops",
      "Five-star heritage hotel stays",
      "Local expert historians",
      "All museum tickets included",
      "Royal palace dinner invitation"
    ],
    exclusions: [
      "Custom hand-loomed royal Kente fabrics",
      "Tips for museum staff"
    ],
    timelineDays: [
      { day: "Day 1", title: "Accra to Kumasi Heritage Fly-In", desc: "Board an absolute executive short flight to Kumasi, the cultural heartbeat of West Africa." },
      { day: "Day 2", title: "Manhyia Palace Museum & Courts", desc: "Access the royal courts, read precious family archives, and learn the history of silver and gold stools." },
      { day: "Day 3", title: "Adanwomase Kente Loom Weaving", desc: "Hand-weave raw threads with senior royal weavers. Learn the deep code of Kente patterns." },
      { day: "Day 4", title: "Ntonso Adinkra Stamp workshop", desc: "Dye organic black fabrics with traditional dye made from badie tree barks, creating your own design story." },
      { day: "Day 5", title: "Sacred Lake Bosomtwe Expedition", desc: "Tour the only natural lake in Ghana, created by a meteor. Ride on traditional flat wooden trunks." },
      { day: "Day 6", title: "Ashanti Military Heritage Fort", desc: "Guided exploration of Kumasi Fort and Military Museum, detailing resistance codes." },
      { day: "Day 7", title: "Grand Royal Feast & Culinary Art", desc: "Dine inside private gardens with live traditional fontomfrom drumming and native storytelling." },
      { day: "Day 8", title: "Return flight to Accra", desc: "Take a morning flight back to Accra, packing your custom Kente and stamp artifacts." }
    ],
    travelerPricing: [
      { id: "Adult", label: "Adult", subLabel: "GH₵43,400.00", price: 43400 },
      { id: "Couple", label: "Couple", subLabel: "GH₵79,200.00", price: 79200 },
      { id: "SingleSupplement", label: "Single Supplement", subLabel: "GH₵8,500.00", price: 8500 },
      { id: "ChildWithBed", label: "Child With Bed", subLabel: "GH₵38,500.00", price: 38500 },
      { id: "ChildWithoutBed", label: "Child Without Bed", subLabel: "GH₵34,000.00", price: 34000 },
      { id: "Infant", label: "Infant", subLabel: "GH₵5,800.00", price: 5800 }
    ]
  },
  {
    id: "tour-canopy-safari",
    name: "Ghana Sacred Canopy & Mole Wildlife Safari",
    duration: "9 Days",
    region: "AFRICA WILDERNESS",
    startingPrice: 39200,
    currency: "GH₵",
    description: "A profound raw nature immersive journey, tracking savannah elephants and exploring untouched jungle water sources. Traverse the shaking canopy walkway of Kakum National Park and embark on open-roof 4x4 safaris in Mole.",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=compress&cs=tinysrgb&w=800",
    inclusions: [
      "Mole National Park boutique lodging",
      "Guided walking and driving safaris",
      "Kakum canopy entrance tickets",
      "4x4 private transport vehicles",
      "Native ranger protection",
      "In-country flights from Accra to Tamale",
      "All meals and premium campfires"
    ],
    exclusions: [
      "International flights to Accra",
      "Travel vaccination costs",
      "Binocular rentals"
    ],
    timelineDays: [
      { day: "Day 1", title: "Accra Gathering & Scenic Flight", desc: "Fly with our crew to Tamale, followed by a luxury 4x4 drive to Mole National Park." },
      { day: "Day 2", title: "Sunrise Walking Elephant Safari", desc: "Track wild elephants on foot with standard armed guards. Watch them bathe in natural watering holes." },
      { day: "Day 3", title: "Mole Jeep Safari & Sunset Ridge", desc: "Embark on an open-top safari vehicle to spot leopards, baboons, and exotic antelopes." },
      { day: "Day 4", title: "Mognori Eco-Village & Canoe Tour", desc: "Row down the pristine rivers on hand-carved canoes, exploring local herbal medicine traditions." },
      { day: "Day 5", title: "Larabanga Ancient Mosque visit", desc: "Visit the legendary 15th-century Sudanese-style mud-and-reed mosque and hear local mystic stories." },
      { day: "Day 6", title: "Canopy Walks at Kakum National Forest", desc: "Cross the shaking canopy rope walkways 40 meters above the forest floor." },
      { day: "Day 7", title: "Wli Waterfalls Jungle Trekking", desc: "Hike through lush jungle streams to the highest waterfalls in West Africa." },
      { day: "Day 8", title: "Tafi Atome Monkey Sanctuary", desc: "Feed holy mona monkeys directly from your hands in their natural organic habitat." },
      { day: "Day 9", title: "Final Accra Return route", desc: "Scenic road trippin back to Accra, stopping at local fruit plantations, ending your wilderness story." }
    ],
    travelerPricing: [
      { id: "Adult", label: "Adult", subLabel: "GH₵39,200.00", price: 39200 },
      { id: "Couple", label: "Couple", subLabel: "GH₵71,500.00", price: 71500 },
      { id: "SingleSupplement", label: "Single Supplement", subLabel: "GH₵7,400.00", price: 7400 },
      { id: "ChildWithBed", label: "Child With Bed", subLabel: "GH₵35,000.00", price: 35000 },
      { id: "ChildWithoutBed", label: "Child Without Bed", subLabel: "GH₵31,200.00", price: 31200 },
      { id: "Infant", label: "Infant", subLabel: "GH₵5,000.00", price: 5000 }
    ]
  },
  {
    id: "tour-best-of-europe-august",
    name: "BEST OF EUROPE (BERLIN • AMSTERDAM • BRUSSELS • PARIS)",
    duration: "12 Days / 11 Nights",
    region: "EUROPE",
    startingPrice: 52800,
    currency: "GH₵",
    description: "Imagine yourself strolling along the iconic canals of Amsterdam, witnessing the historical grandeur of Berlin, savoring exquisite chocolates in Brussels, and basking in the romantic ambiance of Paris - an unforgettable 11-night European escapade awaits! Complete with return flights, hotel stays, and daily breakfast.",
    image: europeCoverImage,
    inclusions: [
      "Return Flights",
      "3 Nights Hotel Accommodation in Berlin",
      "3 Nights Hotel Accommodation in Amsterdam",
      "4 Nights Hotel Accommodation in Paris",
      "Daily Breakfast Throughout",
      "Guided City Tours in Berlin, Amsterdam, Brussels & Paris",
      "Travel Insurance & Visa Assistance",
      "Guided Shopping & Airport Transfers"
    ],
    exclusions: [
      "Visa Fees (approx. 90 Euros)",
      "Driver & Guide Gratuity / Tips (approx. 3 Euros/person per day)",
      "Personal shopping & unlisted activities"
    ],
    timelineDays: [
      { day: "Day 1", title: "Accra to Berlin Flight & Hotel Check-in", desc: "Depart Accra for Berlin. Upon arrival, transfer to your hotel for check-in, welcome orientation, and a relaxing evening." },
      { day: "Day 2", title: "Berlin Historical Landmarks & Brandenburg Gate", desc: "Guided city tour exploring Reichstag Building, Brandenburg Gate, Checkpoint Charlie, and Berlin Wall Memorial." },
      { day: "Day 3", title: "Berlin Culture & Museum Island", desc: "Immerse in Prussian heritage on Museum Island, shop along Kurfürstendamm avenue, and savor German culinary delights." },
      { day: "Day 4", title: "Berlin to Scenic Amsterdam & Evening Canal Cruise", desc: "Travel to Amsterdam. Check into your hotel and take an evening glass-topped boat cruise along UNESCO canal waterways." },
      { day: "Day 5", title: "Amsterdam Windmills, Cheese & Historic Center", desc: "Discover iconic Dutch windmills, traditional cheese farms, Dam Square, and the vibrant flower market." },
      { day: "Day 6", title: "Van Gogh Museum & Cultural Exploration", desc: "Visit world-famous museums, explore boutique Jordaan quarter, and enjoy authentic Dutch pastries." },
      { day: "Day 7", title: "Amsterdam to Brussels & Chocolate Excursion", desc: "Journey to Brussels. Experience Grand Place, Manneken Pis, Atomium, and world-renowned Belgian chocolate tasting." },
      { day: "Day 8", title: "Brussels to Paris & Seine River Evening Cruise", desc: "Travel to the City of Light, Paris! Enjoy an evening illumination cruise along the Seine River under twinkling lights." },
      { day: "Day 9", title: "Paris City Landmarks & Eiffel Tower", desc: "Discover the Arc de Triomphe, Champs-Élysées, Notre-Dame, and ascend the Eiffel Tower for panoramic city views." },
      { day: "Day 10", title: "Louvre Museum & Parisian Shopping", desc: "Explore Louvre masterpieces including the Mona Lisa, followed by high-fashion shopping at Galeries Lafayette." },
      { day: "Day 11", title: "Versailles Palace & Leisure Evening", desc: "Excursion to the magnificent Palace of Versailles and royal gardens, returning to Paris for a farewell dinner." },
      { day: "Day 12", title: "Check-out & Return Flight to Accra", desc: "Enjoy your final Parisian breakfast, check out, and transfer to CDG Airport for your return flight home." }
    ],
    travelerPricing: [
      { id: "Adult", label: "Adult Single", subLabel: "GH₵52,800.00", price: 52800 },
      { id: "Couple", label: "Couple Package", subLabel: "GH₵105,710.00", price: 105710 },
      { id: "ChildWithBed", label: "Child With Bed", subLabel: "GH₵50,200.00", price: 50200 },
      { id: "ChildWithoutBed", label: "Child Without Bed", subLabel: "GH₵31,480.00", price: 31480 },
      { id: "SingleSupplement", label: "Single Supplement", subLabel: "GH₵8,600.00", price: 8600 },
      { id: "Infant", label: "Infant Rate", subLabel: "GH₵6,000.00", price: 6000 }
    ]
  },
  {
    id: "tour-explore-zanzibar-nairobi",
    name: "EXPLORE ZANZIBAR & NAIROBI",
    duration: "9 Days / 8 Nights",
    region: "EAST AFRICA",
    startingPrice: 35950,
    currency: "GH₵",
    description: "Immerse in aromatic spice farms, pristine Indian Ocean beach resorts, and rich historical Swahili Stone Town alleys. Step into a refreshing journey blending wild Nairobi safari adventure with pure island calm.",
    image: zanzibarBeachBoatsImage,
    inclusions: [
      "Return Flights",
      "Hotel Accommodation with Daily Breakfast",
      "Guided City Tours in Nairobi & Zanzibar",
      "Airport Transfers",
      "Travel Insurance & Visa Assistance",
      "Island Excursions & Safari Tours"
    ],
    exclusions: [
      "Yellow Fever Vaccination",
      "Personal Expenses & Gratuities",
      "Unlisted Activities"
    ],
    timelineDays: [
      { day: "Day 1", title: "Accra to Nairobi Flight & Hotel Check-in", desc: "Fly from Accra to Nairobi. Warm reception at JKIA airport and transfer to your luxury city hotel." },
      { day: "Day 2", title: "Nairobi Wildlife Safari, Giraffe Centre & Karen Blixen", desc: "Feed endangered Rothschild giraffes at Giraffe Centre, visit the Elephant Orphanage, and tour Karen Blixen Museum." },
      { day: "Day 3", title: "Nairobi to Zanzibar Flight & Oceanfront Check-in", desc: "Short flight to Zanzibar Island. Transfer through coastal villages to your beachfront resort in Nungwi." },
      { day: "Day 4", title: "Stone Town Swahili Heritage Walk & Aromatic Spice Farm", desc: "Explore historic coral stone alleys, Sultan Palaces, and smell fresh cloves, vanilla, and cinnamon on an organic spice farm." },
      { day: "Day 5", title: "Safari Blue Dhow Cruise & Sandbank Seafood Feast", desc: "Board a traditional wooden Dhow sailboat, snorkel in marine sanctuaries, and feast on fresh grilled seafood on a sandbank." },
      { day: "Day 6", title: "Prison Island Giant Tortoises & Turquoise Lagoon Swim", desc: "Take a wooden boat to Prison Island to feed 150-year-old giant tortoises and swim in clear turquoise waters." },
      { day: "Day 7", title: "Nungwi Beach Relaxation & Sunset Dhow Sailing", desc: "Leisure morning on white sandy beaches, followed by an evening sunset catamaran sailing cruise with live music." },
      { day: "Day 8", title: "Souvenir Shopping & Local Cultural Immersion", desc: "Shop for authentic Tanzanian crafts, spices, and tanzanite gemstones, enjoying a beachfront dinner." },
      { day: "Day 9", title: "Check-out & Return Flight to Accra", desc: "Enjoy a final Swahili breakfast, check out, and transfer to Zanzibar Airport for your return flight home." }
    ],
    travelerPricing: [
      { id: "Adult", label: "Adult Single", subLabel: "GH₵35,950.00", price: 35950 },
      { id: "Couple", label: "Couple Package", subLabel: "GH₵71,500.00", price: 71500 },
      { id: "ChildWithBed", label: "Child With Bed", subLabel: "GH₵33,345.00", price: 33345 },
      { id: "ChildWithoutBed", label: "Child Without Bed", subLabel: "GH₵31,590.00", price: 31590 },
      { id: "SingleSupplement", label: "Single Supplement", subLabel: "GH₵6,500.00", price: 6500 },
      { id: "Infant", label: "Infant Rate", subLabel: "GH₵3,900.00", price: 3900 }
    ]
  }
];

// Premium Curated Destinations representing initial and dynamically loaded items
const INITIAL_DEMO_DESTINATIONS = [
  "Dubai",
  "Maldives",
  "Bali",
  "Zanzibar",
  "United Kingdom",
  "United States"
];

// Dynamically compile active destinations from the Visa catalog!
const getVisaDestinationsList = () => {
  const visaCountries = SERVICES_CATALOG
    .filter((s) => s.category === "visas")
    .map((s) => {
      if (s.id.includes("china")) return "China";
      if (s.id.includes("uk")) return "United Kingdom";
      if (s.id.includes("us")) return "United States";
      if (s.id.includes("schengen")) return "Europe";
      if (s.id.includes("morocco")) return "Morocco";
      if (s.id.includes("southafrica")) return "South Africa";
      return null;
    })
    .filter((v): v is "China" | "United Kingdom" | "United States" | "Europe" | "Morocco" | "South Africa" => v !== null);
  
  const rawList = Array.from(new Set([...INITIAL_DEMO_DESTINATIONS, ...visaCountries]));

  // Sort according to preferred order: Dubai, United States, Europe, South Africa, United Kingdom, Maldives
  const preferred = [
    "Dubai",
    "United States",
    "Europe",
    "South Africa",
    "United Kingdom",
    "Maldives"
  ];

  return rawList.sort((a, b) => {
    const idxA = preferred.indexOf(a);
    const idxB = preferred.indexOf(b);
    if (idxA !== -1 && idxB !== -1) {
      return idxA - idxB;
    }
    if (idxA !== -1) return -1;
    if (idxB !== -1) return 1;
    return a.localeCompare(b);
  });
};

const DESTINATIONS = getVisaDestinationsList();

const DESTINATION_INFO: Record<string, { desc: string; landmarks: string }> = {
  "Dubai": { 
    desc: "Witness futuristic architectural marvels, legendary premium dining, and endless golden desert safaris.", 
    landmarks: "Burj Al Arab, Burj Khalifa, Dubai Marina" 
  },
  "Maldives": { 
    desc: "Relax in exclusive, high-density overwater villas, crystal clear turquoise lagoons, and lush coconut private sands.", 
    landmarks: "Overwater Villas, Intimate Beaches, Blue Lagoons" 
  },
  "Bali": { 
    desc: "Rejuvenate your soul among deep spiritual temples, volcanic forest ranges, and ancient terraced rice paddies.", 
    landmarks: "Tegalalang Rice Terraces, Uluwatu Temple, Beach Clubs" 
  },
  "Zanzibar": { 
    desc: "Immerse in aromatic spice farms, pristine Indian Ocean beach resorts, and rich historical Swahili stone alleys.", 
    landmarks: "Stone Town Alley, Nungwi Beaches, Island Resorts" 
  },
  "United Kingdom": { 
    desc: "Experience classical British royal estates, historical stone castles, and high-contrast London metropolitan culture.", 
    landmarks: "London Eye, Windsor Castle, Big Ben Clocktower" 
  },
  "United States": { 
    desc: "Explore breathtaking national canyons, world-scale cinematic entertainment hubs, and iconic coastal skylines.", 
    landmarks: "New York Times Square, Golden Gate Bridge, Yosemite Valley" 
  },
  "China": { 
    desc: "Wander through the awe-inspiring Great Wall, imperial dynasty relics, and ultra-futuristic magnetic skylines.", 
    landmarks: "Great Wall of China, Forbidden City, Shanghai Bund" 
  },
  "Europe": { 
    desc: "Stroll along iconic canals of Amsterdam, historical grandeur of Berlin, Belgian chocolates in Brussels, and romantic Paris in one 12-day journey.", 
    landmarks: "Brandenburg Gate, Canal Cruise, Grand Place, Eiffel Tower" 
  },
  "Morocco": { 
    desc: "Venture inside high-contrast vibrant spice markets, Sahara dunes, and the cozy cobalt towns of Chefchaouen.", 
    landmarks: "Marrakech Souks, Sahara Dunes, Medina Alleys" 
  },
  "South Africa": { 
    desc: "Adventure across dramatics coastal cliff routes, tabletop mountains, and world-class savannah safaris.", 
    landmarks: "Cape Town Coasts, Table Mountain, Kruger Wildlife Safari" 
  }
};

function getDestinationImages(destinationName: string): string[] {
  const name = destinationName.toLowerCase();
  if (name.includes("dubai")) {
    return [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=compress&cs=tinysrgb&w=800", // Burj Al Arab (Capsule 2)
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=compress&cs=tinysrgb&w=800", // Burj Khalifa / Downtown (Capsule 1)
      dubaiMuseumImage, // Custom Museum of the Future (Capsule 3)
      dubaiBurjImage    // Custom Burj Khalifa (Capsule 4)
    ];
  }
  if (name.includes("maldives")) {
    return [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=compress&cs=tinysrgb&w=800", // Overwater Villas
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=compress&cs=tinysrgb&w=800", // Turquoise lagoon beach
      maldivesPavilionImage, // Custom-generated gorgeous overwater pavilion at sunset - Capsule 3
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=compress&cs=tinysrgb&w=800"  // Tropical palms
    ];
  }
  if (name.includes("bali")) {
    return [
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=compress&cs=tinysrgb&w=800", // Uluwatu Cliff Temple
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=compress&cs=tinysrgb&w=800", // Beautiful exotic temple
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=compress&cs=tinysrgb&w=800", // Rice terrace green
      "https://images.unsplash.com/photo-1540206395-68808572332f?auto=compress&cs=tinysrgb&w=800"  // Ubud monkeys / forest
    ];
  }
  if (name.includes("zanzibar")) {
    return [
      zanzibarBeachBoatsImage,  // Custom beach with tourist boats in crystal turquoise water - Capsule 1
      zanzibarAerialVillasImage, // Custom overwater luxury wood bungalows - Capsule 2
      zanzibarWoodenJettyImage,  // Custom rustic beach wooden jetty/dock - Capsule 3
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=compress&cs=tinysrgb&w=800"  // Stone Town spice alleyways - Capsule 4
    ];
  }
  if (name.includes("china")) {
    return [
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=compress&cs=tinysrgb&w=800", // Great wall of china
      "https://images.unsplash.com/photo-1547989453-11e67ffb3885?auto=compress&cs=tinysrgb&w=800", // Asian Pagoda temple
      "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?auto=compress&cs=tinysrgb&w=800", // Shanghai Skyline
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=compress&cs=tinysrgb&w=800"  // Ancient temple/nature
    ];
  }
  if (name.includes("kingdom") || name.includes("uk")) {
    return [
      ukWindsorCastleImage, // Custom Windsor Castle Long Walk (Capsule 1)
      ukTowerBridgeImage,   // Custom Tower Bridge London (Capsule 2)
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=compress&cs=tinysrgb&w=800", // London Tower Bridge (Capsule 3)
      ukStonehengeImage     // Custom Stonehenge Wiltshire (Capsule 4)
    ];
  }
  if (name.includes("united states") || name.includes("us")) {
    return [
      chicagoBeanImage, // Chicago Bean (Cloud Gate) - Capsule 1 from exact attached replica
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=compress&cs=tinysrgb&w=800", // Golden Gate Bridge SF
      statueOfLibertyImage, // Statue of Liberty, NYC - Capsule 3 from exact attached replica
      "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=compress&cs=tinysrgb&w=800"  // Deep orange Grand Canyon
    ];
  }
  if (name.includes("europe") || name.includes("schengen")) {
    return [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=compress&cs=tinysrgb&w=800", // Paris Eiffel Tower
      "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=compress&cs=tinysrgb&w=800", // Amalfi Shoreline village
      "https://images.unsplash.com/photo-1473896100090-53523650d4c6?auto=compress&cs=tinysrgb&w=800", // Beautiful Santorini greecian dome
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=compress&cs=tinysrgb&w=800"  // Historic Rome Colosseum
    ];
  }
  if (name.includes("morocco")) {
    return [
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=compress&cs=tinysrgb&w=800", // Golden Sahara Dunes (Capsule 1)
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=compress&cs=tinysrgb&w=800", // Chefchaouen blue streets (Capsule 2)
      moroccoWaterfallImage,                                                            // Custom Ouzoud Falls landscape (Capsule 3)
      moroccoAitBenhaddouImage                                                          // Custom Aït Benhaddou clay citadel (Capsule 4)
    ];
  }
  if (name.includes("south africa") || name.includes("southafrica")) {
    return [
      saSafariSpringbokImage, // Custom Savanna Safari with springboks - Capsule 1
      saDrakensbergPoolImage,  // Custom Drakensberg peak reflecting in a rock pool - Capsule 2
      saCapetownStadiumImage,  // Custom Cape Town Stadium panoramic view - Capsule 3
      saCapetownSunsetImage    // Custom Cape Town panoramic sunset over harbor - Capsule 4
    ];
  }

  // Beautiful scenic travel backup image fallbacks
  return [
    "https://images.unsplash.com/photo-1506013013876-0bf8d4f9c101?auto=compress&cs=tinysrgb&w=800", 
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=compress&cs=tinysrgb&w=800", 
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=compress&cs=tinysrgb&w=800", 
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=compress&cs=tinysrgb&w=800"
  ];
}

const DISCOVERY_GRID_VARIANTS = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const DISCOVERY_CARD_VARIANTS = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      type: "spring",
      stiffness: 80,
      damping: 16
    } 
  }
};

const DISCOVERY_FILTERS = [
  "All",
  "USA",
  "United Kingdom",
  "Dubai",
  "Bali",
  "Maldives",
  "Zanzibar",
  "China",
  "Schengen state",
  "Morroco",
  "South Africa"
];

const destinationCards = DESTINATIONS.map(dest => {
  let country = dest;
  let city = dest;
  let filterCategory = dest;

  if (dest === "Dubai") {
    country = "UAE";
    city = "Dubai";
    filterCategory = "Dubai";
  } else if (dest === "Maldives") {
    country = "Maldives";
    city = "Maldives";
    filterCategory = "Maldives";
  } else if (dest === "Bali") {
    country = "Indonesia";
    city = "Bali";
    filterCategory = "Bali";
  } else if (dest === "Zanzibar") {
    country = "Tanzania & Kenya";
    city = "Zanzibar & Nairobi";
    filterCategory = "Zanzibar";
  } else if (dest === "United Kingdom") {
    country = "United Kingdom";
    city = "UK";
    filterCategory = "United Kingdom";
  } else if (dest === "United States") {
    country = "United States";
    city = "USA";
    filterCategory = "USA";
  } else if (dest === "China") {
    country = "China";
    city = "Beijing & Shanghai";
    filterCategory = "China";
  } else if (dest === "Europe") {
    country = "Europe";
    city = "Europe";
    filterCategory = "Europe";
  } else if (dest === "Morocco") {
    country = "Morocco";
    city = "Marrakech & Sahara";
    filterCategory = "Morroco";
  } else if (dest === "South Africa") {
    country = "South Africa";
    city = "Cape Town & Kruger Safari";
    filterCategory = "South Africa";
  }

  const images = getDestinationImages(dest);
  let cardImage = images[0] || images[1] || "https://images.unsplash.com/photo-1506013013876-0bf8d4f9c101?auto=compress&cs=tinysrgb&w=800";
  if (dest === "Dubai") {
    cardImage = dubaiCoverImage;
  } else if (dest === "United States") {
    cardImage = usaCoverImage;
  } else if (dest === "Europe") {
    cardImage = europeCoverImage;
  } else if (dest === "South Africa") {
    cardImage = saCoverImage;
  } else if (dest === "United Kingdom") {
    cardImage = ukCoverImage;
  }

  return {
    id: dest.toLowerCase().replace(/\s+/g, '-'),
    originalName: dest,
    country,
    city,
    filterCategory,
    image: cardImage,
    description: DESTINATION_INFO[dest]?.desc || "",
    landmarks: DESTINATION_INFO[dest]?.landmarks || ""
  };
});

export const DUBAI_PACKAGE_OFFERS: TourPackage[] = [
  {
    id: "tour-dubai-3star",
    name: "ADANSI 13 EXPLORE DUBAI 3-STAR",
    duration: "7 Days / 6 Nights",
    region: "MIDDLE EAST",
    startingPrice: 29140, // 29640 - 500
    currency: "GH₵",
    description: "Escape into a breathtaking 6-night odyssey through the shimmering skylines of Dubai and the regal cultural wonders of Abu Dhabi with Emirates flights, daily breakfast, guided shopping, and city tours.",
    image: dubaiCoverImage,
    inclusions: [
      "Emirates Flights",
      "6 Nights Hotel Accommodation",
      "UAE Tourist Visa",
      "Daily Breakfast",
      "Guided Shopping Tour in Dubai",
      "Tours in Dubai & Abu Dhabi",
      "Airport Transfers",
      "Tourism Tax Included",
      "Travel Insurance",
      "Complimentary Esim"
    ],
    exclusions: [
      "Tips and gratuities",
      "Personal shopping & unlisted activities"
    ],
    timelineDays: [
      { day: "Day 1", title: "Emirates Flight Arrival & Hotel Check-in", desc: "Arrive at Dubai International Airport via Emirates. Private transfer to your 3-star hotel with welcome orientation." },
      { day: "Day 2", title: "Dubai Modern City Tour & Fountain Show", desc: "Explore Dubai's iconic landmarks, Dubai Mall, and the mesmerizing Dubai Fountain performance." },
      { day: "Day 3", title: "Guided Souk Shopping & Creek Abra Ride", desc: "Discover authentic spices and gold artifacts at traditional souks after a traditional Abra boat ride." },
      { day: "Day 4", title: "Abu Dhabi Cultural Day Tour", desc: "Day trip to Abu Dhabi visiting the majestic Sheikh Zayed Grand Mosque and Louvre Museum exterior." },
      { day: "Day 5", title: "Desert Safari & BBQ Dinner", desc: "Thrill-filled 4x4 dune bashing, camel riding, Henna painting, and traditional Arabian BBQ dinner under the stars." },
      { day: "Day 6", title: "Leisure & Marina Dhow Cruise", desc: "Spend the day shopping at local centers followed by a serene evening Marina Dhow dinner cruise." },
      { day: "Day 7", title: "Check-out & Return Emirates Flight", desc: "Enjoy morning breakfast before transfer to DXB Airport for your return flight to Accra." }
    ],
    travelerPricing: [
      { id: "Adult", label: "Adult Single", subLabel: "GH₵29,140.00", price: 29140 },
      { id: "Couple", label: "Couple Package", subLabel: "GH₵58,380.00", price: 58380 },
      { id: "ChildWithBed", label: "Child With Bed", subLabel: "GH₵26,540.00", price: 26540 },
      { id: "ChildWithoutBed", label: "Child Without Bed", subLabel: "GH₵25,370.00", price: 25370 },
      { id: "Infant", label: "Infant Rate", subLabel: "GH₵4,050.00", price: 4050 }
    ]
  },
  {
    id: "tour-dubai-4star",
    name: "ADANSI 13 EXPLORE DUBAI 4-STAR",
    duration: "7 Days / 6 Nights",
    region: "MIDDLE EAST",
    startingPrice: 31350, // 31850 - 500
    currency: "GH₵",
    description: "Indulge in elevated 4-star luxury across 6 nights in Dubai with premium Emirates round-trip flights, guided shopping, return transfers, and comprehensive travel insurance.",
    image: dubaiCoverImage,
    inclusions: [
      "Emirates Flights",
      "6 Nights in Premium 4-Star Hotel",
      "Daily Breakfast",
      "UAE Tourist Visa",
      "Guided Shopping Tour",
      "City Sightseeing Tours in Dubai",
      "Return Airport Transfers",
      "Travel Insurance",
      "Tourism Tax Included"
    ],
    exclusions: [
      "Tips and gratuities",
      "Personal leisure expenses"
    ],
    timelineDays: [
      { day: "Day 1", title: "Luxury Check-in & Evening Walk", desc: "Welcome to Dubai! Private airport transfer to your 4-star hotel in downtown Dubai." },
      { day: "Day 2", title: "Burj Khalifa & Downtown Marvels", desc: "Ascend the iconic Burj Khalifa observation deck and shop at Dubai Mall." },
      { day: "Day 3", title: "Desert Safari, Dune Bashing & Live Shows", desc: "Golden sands adventure with quad bikes, camel rides, Tanoura dance, and gourmet BBQ." },
      { day: "Day 4", title: "Guided Luxury Shopping & Gold Souk", desc: "Curated shopping tour across premier Dubai malls and traditional market districts." },
      { day: "Day 5", title: "Palm Jumeirah & Marina Yacht Experience", desc: "Marvel at Atlantis The Palm and enjoy a luxury yacht cruise along the Marina." },
      { day: "Day 6", title: "Museum of the Future & Old Dubai", desc: "Immerse in futuristic innovation followed by historical Al Fahidi quarter walks." },
      { day: "Day 7", title: "Departure Transfer to Accra", desc: "Final morning breakfast and private transfer to DXB Airport for your return Emirates flight." }
    ],
    travelerPricing: [
      { id: "Adult", label: "Adult Single", subLabel: "GH₵31,350.00", price: 31350 },
      { id: "Couple", label: "Couple Package", subLabel: "GH₵62,800.00", price: 62800 },
      { id: "ChildWithBed", label: "Child With Bed", subLabel: "GH₵28,750.00", price: 28750 },
      { id: "ChildWithoutBed", label: "Child Without Bed", subLabel: "GH₵27,190.00", price: 27190 },
      { id: "Infant", label: "Infant Rate", subLabel: "GH₵4,050.00", price: 4050 }
    ]
  },
  {
    id: "tour-dubai-winter",
    name: "DUBAI WINTER ESCAPE (DECEMBER)",
    duration: "7 Days / 6 Nights",
    region: "MIDDLE EAST",
    startingPrice: 29725, // 30225 - 500
    currency: "GH₵",
    description: "Celebrate the festive end-of-year season in Dubai! Enjoy winter light festivals, desert safaris, Emirates flights, and 6 nights hotel stay.",
    image: dubaiCoverImage,
    inclusions: [
      "Emirates Flights",
      "6 Nights Hotel Accommodation",
      "Daily Breakfast",
      "UAE Tourist Visa",
      "Guided Shopping Tour",
      "Tours in Dubai",
      "Return Airport Transfer",
      "Travel Insurance",
      "Tourism Tax Included"
    ],
    exclusions: [
      "Tips and gratuities",
      "Optional winter activities (Ski Dubai)"
    ],
    timelineDays: [
      { day: "Day 1", title: "Festive Arrival & Hotel Check-in", desc: "Touchdown in winter Dubai. Private chauffeur transfer to your festive hotel." },
      { day: "Day 2", title: "Winter Miracle Garden & Global Village", desc: "Visit the breathtaking Miracle Garden floral sculptures and Global Village cultural pavilions." },
      { day: "Day 3", title: "Desert Sunset Safari & BBQ", desc: "Thrilling winter desert drive, sandboarding, and stargazing dinner camp." },
      { day: "Day 4", title: "Dubai Frame & Souk Shopping", desc: "Panoramas from Dubai Frame and shopping at authentic spice markets." },
      { day: "Day 5", title: "Festive Dhow Dinner Cruise", desc: "Relaxing evening boat cruise past glowing skyline towers with dinner." },
      { day: "Day 6", title: "Shopping Extravaganza at Mall of Emirates", desc: "Discover high-end fashion and optional indoor skiing experience." },
      { day: "Day 7", title: "Return Flight to Accra", desc: "Transfer to Dubai International Airport for your Emirates flight home." }
    ],
    travelerPricing: [
      { id: "Adult", label: "Adult Single", subLabel: "GH₵29,725.00", price: 29725 },
      { id: "Couple", label: "Couple Package", subLabel: "GH₵57,000.00", price: 57000 },
      { id: "ChildWithBed", label: "Child With Bed", subLabel: "GH₵27,125.00", price: 27125 },
      { id: "ChildWithoutBed", label: "Child Without Bed", subLabel: "GH₵25,830.00", price: 25830 },
      { id: "Infant", label: "Infant Rate", subLabel: "GH₵3,400.00", price: 3400 }
    ]
  },
  {
    id: "tour-dubai-abudhabi-12day",
    name: "ADANSI 13 EXPLORE ABU DHABI & DUBAI",
    duration: "12 Days / 11 Nights",
    region: "MIDDLE EAST",
    startingPrice: 33170, // 33670 - 500
    currency: "GH₵",
    description: "An incredible 12-day twin-destination journey featuring 3 nights in Abu Dhabi and 8 nights in Dubai, complete with Emirates flights, visas, and comprehensive city tours.",
    image: dubaiCoverImage,
    inclusions: [
      "Emirates Roundtrip Flights",
      "3 Nights Accommodation in Abu Dhabi",
      "8 Nights Accommodation in Dubai",
      "Dubai & UAE Tourist Visa",
      "Daily Breakfast Throughout",
      "Guided Shopping & City Tours",
      "Airport & Inter-city Transfers",
      "Tourism Tax & Travel Insurance",
      "Complimentary Esim"
    ],
    exclusions: [
      "Tips and gratuities",
      "Anything not mentioned in inclusions"
    ],
    timelineDays: [
      { day: "Day 1-3", title: "Abu Dhabi Cultural Immersion", desc: "Stay 3 nights in Abu Dhabi. Visit Sheikh Zayed Grand Mosque, Qasr Al Watan Palace, and Ferrari World." },
      { day: "Day 4-8", title: "Dubai Exploration & Desert Thrills", desc: "Transfer to Dubai for 8 nights. Experience Burj Khalifa, Desert Safari, Gold Souk, and Palm Jumeirah." },
      { day: "Day 9-11", title: "Shopping, Marina Yacht & Culture", desc: "Enjoy guided shopping tours, Creek cruises, and leisure beach days." },
      { day: "Day 12", title: "Return Flight to Accra", desc: "Transfer to DXB Airport for your Emirates flight home." }
    ],
    travelerPricing: [
      { id: "Adult", label: "Adult Single", subLabel: "GH₵33,170.00", price: 33170 },
      { id: "Couple", label: "Couple Package", subLabel: "GH₵66,440.00", price: 66440 },
      { id: "ChildWithBed", label: "Child With Bed", subLabel: "GH₵30,570.00", price: 30570 },
      { id: "ChildWithoutBed", label: "Child Without Bed", subLabel: "GH₵26,735.00", price: 26735 },
      { id: "Infant", label: "Infant Rate", subLabel: "GH₵3,400.00", price: 3400 }
    ]
  },
  {
    id: "tour-dubai-nairobi-combo",
    name: "ADANSI 13 EXPLORE NAIROBI & DUBAI COMBO",
    duration: "8 Days / 7 Nights",
    region: "MIDDLE EAST & AFRICA",
    startingPrice: 32715, // 33215 - 500
    currency: "GH₵",
    description: "The ultimate cross-continental escape! Experience Nairobi's vibrant wildlife and cultural tours before flying to Dubai for golden desert safaris and modern city cruises.",
    image: dubaiCoverImage,
    inclusions: [
      "Daily Breakfast Throughout",
      "7 Nights Accommodation",
      "Nairobi Day Visit & Wildlife Tours",
      "Guided City Tour in Dubai",
      "Guided Shopping Tour in Dubai",
      "UAE Tourist Visa",
      "Desert Safari & Dhow Cruise",
      "Travel Insurance Included"
    ],
    exclusions: [
      "Tips and gratuities",
      "Anything not mentioned in inclusions"
    ],
    timelineDays: [
      { day: "Day 1-2", title: "Nairobi Wildlife & Culture", desc: "Nairobi Giraffe Centre visit, David Sheldrick Elephant Orphanage, and authentic Kenyan feast." },
      { day: "Day 3-6", title: "Dubai City Tours & Desert Safari", desc: "Fly to Dubai. Enjoy city tours, Burj Khalifa views, and high-octane 4x4 desert dune bashing." },
      { day: "Day 7-8", title: "Dhow Cruise & Departure", desc: "Marina Dhow Cruise dinner, last minute shopping, and return flight to Accra." }
    ],
    travelerPricing: [
      { id: "Adult", label: "Adult Single", subLabel: "GH₵32,715.00", price: 32715 },
      { id: "Couple", label: "Couple Package", subLabel: "GH₵65,530.00", price: 65530 },
      { id: "ChildWithBed", label: "Child With Bed", subLabel: "GH₵30,115.00", price: 30115 },
      { id: "ChildWithoutBed", label: "Child Without Bed", subLabel: "GH₵27,765.00", price: 27765 },
      { id: "Infant", label: "Infant Rate", subLabel: "GH₵4,050.00", price: 4050 }
    ]
  },
  {
    id: "tour-dubai-diaspora",
    name: "ADANSI 13 DIASPORA EXPLORE DUBAI",
    duration: "13 Days / 12 Nights",
    region: "MIDDLE EAST",
    startingPrice: 28000, // 28500 - 500
    currency: "GH₵",
    description: "A soulful 13-day journey through the heart of the Emirates blending ultra-modern luxury and heritage from soaring heights at Burj Khalifa to desert safaris.",
    image: dubaiCoverImage,
    inclusions: [
      "12 Nights Hotel Accommodation",
      "Daily Breakfast",
      "UAE Tourist Visa",
      "Guided Shopping Tours",
      "Exquisite Dubai City Tours",
      "Travel Insurance",
      "Tourism Tax Included"
    ],
    exclusions: [
      "Tips and gratuities",
      "Personal shopping"
    ],
    timelineDays: [
      { day: "Day 1-4", title: "Heritage & Modern Skyline", desc: "Welcome to Dubai! Unpack, relax, and explore Old Dubai souks alongside modern skyscraper skylines." },
      { day: "Day 5-8", title: "Desert Safari, Marina Cruising & Malls", desc: "Thrill-filled desert safari, private yacht cruising, and world-class shopping experiences." },
      { day: "Day 9-13", title: "Abu Dhabi Day Excursions & Departure", desc: "Grand Mosque tour, beach relaxation days, souvenir shopping, and flight home." }
    ],
    travelerPricing: [
      { id: "Adult", label: "Adult Single", subLabel: "GH₵28,000.00", price: 28000 },
      { id: "Couple", label: "Couple Package", subLabel: "GH₵55,500.00", price: 55500 },
      { id: "ChildWithBed", label: "Child With Bed", subLabel: "GH₵24,800.00", price: 24800 },
      { id: "Infant", label: "Infant Rate", subLabel: "GH₵4,300.00", price: 4300 }
    ]
  }
];

export function getTourPackageForCard(cardOriginalName: string): TourPackage {
  const images = getDestinationImages(cardOriginalName);
  let primaryImg = images[0] || "https://images.unsplash.com/photo-1506013013876-0bf8d4f9c101?auto=compress&cs=tinysrgb&w=800";
  if (cardOriginalName === "Dubai") {
    primaryImg = dubaiCoverImage;
  } else if (cardOriginalName === "United States") {
    primaryImg = usaCoverImage;
  } else if (cardOriginalName === "Europe") {
    primaryImg = europeCoverImage;
  } else if (cardOriginalName === "South Africa") {
    primaryImg = saCoverImage;
  } else if (cardOriginalName === "United Kingdom") {
    primaryImg = ukCoverImage;
  }
  
  switch (cardOriginalName) {
    case "Dubai":
      return DUBAI_PACKAGE_OFFERS[0];
    
    case "Maldives":
      return {
        id: "tour-maldives-sanctuary",
        name: "MALDIVES OVERWATER SANCTUARY GETAWAY",
        duration: "7 Days",
        region: "INDIAN OCEAN",
        startingPrice: 56900,
        currency: "GH₵",
        description: "Relax in exclusive overwater villas, swim inside pristine turquoise lagoons, and stroll along pristine white coconut sands. Escape to absolute tranquility on a private reef island.",
        image: primaryImg,
        inclusions: [
          "Return international flights from Accra",
          "Premium seaplane or speed-boat roundtrip resort transfers",
          "6 Nights in a deluxe private Overwater Villa",
          "All-inclusive gourmet meal packages & premium soft drinks",
          "Sunset turtle & spinner dolphin catamaran cruise",
          "Private snorkeling excursion with master scuba divers"
        ],
        exclusions: [
          "Premium spa therapeutic treatments",
          "Motorized water sports (jet skis, parasailing)",
          "Grants or tips to resort crew"
        ],
        timelineDays: [
          { day: "Day 1", title: "Resort Seaplane Transfer to Overwater Paradise", desc: "Land at Velana Airport in Male and board a gorgeous seaplane. Glide over scattered emerald atolls before landing at your private island sanctuary." },
          { day: "Day 2", title: "Reef Snorkeling Safari with Marine Zoologists", desc: "Swim directly off your villa stairs into warm turquoise waters filled with colorful coral gardens and gentle sea turtles." },
          { day: "Day 3", title: "Catamaran Sailing & Dolphin Watching", desc: "Embark on an elegant catamaran cruise tracking active pods of spinner dolphins jumping against the horizon." },
          { day: "Day 4", title: "Luxury Floating Pool Breakfast & Massage", desc: "Relish an exquisite cooked breakfast floating in your villa plunge pool, followed by an overwater spa treatment." },
          { day: "Day 5", title: "Romantic Sandbank Picnic & Sunset", desc: "Spend the afternoon in complete solitude on a isolated sandbar surrounded by pristine blue ocean, sipping fresh coconut water." },
          { day: "Day 6", title: "Lagoon SUP Paddleboarding & Sea Kayaking", desc: "Enjoy leisurely coastal sports or practice yoga on the beach under professional Balinese masters." },
          { day: "Day 7", title: "Sunset Seaplane Flight & Departure", desc: "Fly back from your island resort to Male in the morning. Board your comfortable international flight home." }
        ],
        travelerPricing: [
          { id: "Adult", label: "Adult Single", subLabel: "GH₵56,900.00", price: 56900 },
          { id: "Couple", label: "Couple Package", subLabel: "GH₵108,050.00", price: 108050 },
          { id: "ChildWithBed", label: "Child With Bed", subLabel: "GH₵49,500.00", price: 49500 }
        ]
      };

    case "Bali":
      return {
        id: "tour-bali-rejuvenation",
        name: "BALI TROPICAL PALMS & SPIRITUAL REJUVENATION",
        duration: "8 Days",
        region: "INDONESIA",
        startingPrice: 32800,
        currency: "GH₵",
        description: "Rejuvenate your soul among deep spiritual temples, volcanic forest ranges, and ancient terraced rice paddies. Split your stay between natural mountain jungles and lively coastal beach clubs.",
        image: primaryImg,
        inclusions: [
          "Round-trip airfare and ground transport",
          "5 Nights luxury Ubud rainforest villa with breakfast",
          "2 Nights exotic Seminyak beachside resort stays",
          "Private driver & Englishspeaking guide throughout",
          "Balinese legacy temple tour with Tirta Empul ritual",
          "Uluwatu dramatic cliff entry and Kecak Fire Dance"
        ],
        exclusions: [
          "Alcoholic beverages and personal items",
          "Travel insurance (highly recommended)",
          "Laundry services at resort"
        ],
        timelineDays: [
          { day: "Day 1", title: "Ubud Arrival & Private Jungle Villa Check-in", desc: "Arrive in Denpasar. Enjoy a custom flower garland greeting and take a comfortable private drive to Ubud's lush mountain valleys." },
          { day: "Day 2", title: "Tegalalang Rice Paddy Hike & Jungle Swing", desc: "Walk down emerald terraced rice farms. Swing high above the dense forest canopy for breathtaking views." },
          { day: "Day 3", title: "Spiritual Tirta Empul Holy Temple Blessing", desc: "Participate in an ancient Balinese water purification ritual wearing authentic sarongs in sacred natural hot springs." },
          { day: "Day 4", title: "Balinese Culinary Art Class & Local Market Hike", desc: "Prepare delicious spiced dishes in a organic traditional compound kitchen using fresh ingredients." },
          { day: "Day 5", title: "Sailing to Nusa Penida Blue Cliffs", desc: "Take a speed boat ride to Kelingking Beach cliffs, snorkelling in crystal waters with giant manta rays." },
          { day: "Day 6", title: "Uluwatu Cliff Temple & Hypnotic Kecak Fire Dance", desc: "Ascend majestic cliffs. Watch raw traditional hypnotic fire dancing with the sunset melting into the Indian Ocean." },
          { day: "Day 7", title: "Indulgent Spa Day & Beach Party Nights", desc: "Savor a complete Balinese flower bath massage. Spend your final night celebrating at Seminyak’s premier beach lounges." },
          { day: "Day 8", title: "Return Flight Departure", desc: "Check out of your resort, grab some artisan souvenirs, and transfer to DPS Airport for international flight back to Accra." }
        ],
        travelerPricing: [
          { id: "Adult", label: "Adult Single", subLabel: "GH₵32,800.00", price: 32800 },
          { id: "Couple", label: "Couple Package", subLabel: "GH₵59,900.00", price: 59900 },
          { id: "ChildWithBed", label: "Child With Bed", subLabel: "GH₵29,100.00", price: 29100 },
          { id: "Infant", label: "Infant Rate", subLabel: "GH₵4,900.00", price: 4900 }
        ]
      };

    case "Zanzibar":
      return {
        id: "tour-explore-zanzibar-nairobi",
        name: "EXPLORE ZANZIBAR & NAIROBI",
        duration: "9 Days / 8 Nights",
        region: "EAST AFRICA",
        startingPrice: 35950,
        currency: "GH₵",
        description: "Immerse in aromatic spice farms, pristine Indian Ocean beach resorts, and rich historical Swahili Stone Town alleys. Step into a refreshing journey blending wild Nairobi safari adventure with pure island calm.",
        image: primaryImg,
        inclusions: [
          "Return Flights",
          "Hotel Accommodation with Daily Breakfast",
          "Guided City Tours in Nairobi & Zanzibar",
          "Airport Transfers",
          "Travel Insurance & Visa Assistance",
          "Island Excursions & Safari Tours"
        ],
        exclusions: [
          "Yellow Fever Vaccination",
          "Personal Expenses & Gratuities",
          "Unlisted Activities"
        ],
        timelineDays: [
          { day: "Day 1", title: "Accra to Nairobi Flight & Hotel Check-in", desc: "Fly from Accra to Nairobi. Warm reception at JKIA airport and transfer to your luxury city hotel." },
          { day: "Day 2", title: "Nairobi Wildlife Safari, Giraffe Centre & Karen Blixen", desc: "Feed endangered Rothschild giraffes at Giraffe Centre, visit the Elephant Orphanage, and tour Karen Blixen Museum." },
          { day: "Day 3", title: "Nairobi to Zanzibar Flight & Oceanfront Check-in", desc: "Short flight to Zanzibar Island. Transfer through coastal villages to your beachfront resort in Nungwi." },
          { day: "Day 4", title: "Stone Town Swahili Heritage Walk & Aromatic Spice Farm", desc: "Explore historic coral stone alleys, Sultan Palaces, and smell fresh cloves, vanilla, and cinnamon on an organic spice farm." },
          { day: "Day 5", title: "Safari Blue Dhow Cruise & Sandbank Seafood Feast", desc: "Board a traditional wooden Dhow sailboat, snorkel in marine sanctuaries, and feast on fresh grilled seafood on a sandbank." },
          { day: "Day 6", title: "Prison Island Giant Tortoises & Turquoise Lagoon Swim", desc: "Take a wooden boat to Prison Island to feed 150-year-old giant tortoises and swim in clear turquoise waters." },
          { day: "Day 7", title: "Nungwi Beach Relaxation & Sunset Dhow Sailing", desc: "Leisure morning on white sandy beaches, followed by an evening sunset catamaran sailing cruise with live music." },
          { day: "Day 8", title: "Souvenir Shopping & Local Cultural Immersion", desc: "Shop for authentic Tanzanian crafts, spices, and tanzanite gemstones, enjoying a beachfront dinner." },
          { day: "Day 9", title: "Check-out & Return Flight to Accra", desc: "Enjoy a final Swahili breakfast, check out, and transfer to Zanzibar Airport for your return flight home." }
        ],
        travelerPricing: [
          { id: "Adult", label: "Adult Single", subLabel: "GH₵35,950.00", price: 35950 },
          { id: "Couple", label: "Couple Package", subLabel: "GH₵71,500.00", price: 71500 },
          { id: "ChildWithBed", label: "Child With Bed", subLabel: "GH₵33,345.00", price: 33345 },
          { id: "ChildWithoutBed", label: "Child Without Bed", subLabel: "GH₵31,590.00", price: 31590 },
          { id: "SingleSupplement", label: "Single Supplement", subLabel: "GH₵6,500.00", price: 6500 },
          { id: "Infant", label: "Infant Rate", subLabel: "GH₵3,900.00", price: 3900 }
        ]
      };

    case "China":
      return {
        id: "tour-china-legacy",
        name: "CHINA DYNASTIC LEGACY & ULTRA FUTURISTIC EXPEDITION",
        duration: "9 Days",
        region: "EAST ASIA",
        startingPrice: 36000,
        currency: "GH₵",
        description: "Wander through the awe-inspiring Great Wall, imperial dynasty relics, and ultra-futuristic magnetic skylines. Experience high-speed bullet trains and exquisite Michelin-recommended dining.",
        image: primaryImg,
        inclusions: [
          "Return flights and bullet train transfers",
          "4 Nights deluxe Beijing hotel stays",
          "4 Nights luxury Shanghai Bund boutique stays",
          "Guided hikes on the Mutianyu Great Wall sector",
          "Forbidden City & Emperor Palace tickets with tour historian",
          "Daily gourmet lunches and dinners"
        ],
        exclusions: [
          "Chinese tourist visa fees",
          "Single room supplement surcharge",
          "Personal laundry services"
        ],
        timelineDays: [
          { day: "Day 1", title: "Beijing Arrival & Imperial Welcome", desc: "Land in Beijing. Private escort transfer to our premium hotel. Taste authentic Peking duck at a local heritage restaurant." },
          { day: "Day 2", title: "Mutianyu Great Wall of China Climb", desc: "Hike along the ancient Great Wall snaking through green mountains. Enjoy a scenic cable-car descent." },
          { day: "Day 3", title: "Forbidden City Royal Courtyards", desc: "Explore the imperial palace gardens, golden halls of the Ming Dynasty, and Tienanmen Square with a Chinese scholar." },
          { day: "Day 4", title: "Summer Palace Lake Cruise & Bullet Train Trip", desc: "Cruise on Kunming Lake. In the afternoon, board a high-speed bullet train crossing the country at 350km/h directly to Shanghai." },
          { day: "Day 5", title: "Shanghai Bund Sightseeing & Yu Garden", desc: "Walk along the historic colonial river Bund, then wander inside the 400-year-old classic garden of Yu." },
          { day: "Day 6", title: "Huangpu River Night Cruise & Skyline Tower", desc: "Ascend the ultra-tall Shanghai Tower, then cruise the sparkling neon rivers under towering glass skyscrapers." },
          { day: "Day 7", title: "Suzhou Water Town Gondola Excursion", desc: "Day trip to the Venice of the East, wandering ancient arched stone bridges and gliding on small hand-rowed canal boats." },
          { day: "Day 8", title: "Shopping, Jade Temple & Imperial Banquet", desc: "Savor gourmet dumplings and attend a magnificent tea-pouring kung-fu masterclass." },
          { day: "Day 9", title: "Return Journeys to Accra", desc: "Fly home from Pudong Airport with cherishable memories and local silk treasures." }
        ],
        travelerPricing: [
          { id: "Adult", label: "Adult Single", subLabel: "GH₵36,000.00", price: 36000 },
          { id: "Couple", label: "Couple Package", subLabel: "GH₵68,000.00", price: 68000 },
          { id: "ChildWithBed", label: "Child With Bed", subLabel: "GH₵32,000.00", price: 32000 }
        ]
      };

    case "United Kingdom":
      return {
        id: "tour-uk-monarchy",
        name: "CLASSICAL BRITISH HERITAGE & CASTLE EXPLORER",
        duration: "7 Days",
        region: "WESTERN EUROPE",
        startingPrice: 42000,
        currency: "GH₵",
        description: "Experience classical British royal estates, historical stone castles, and high-contrast London metropolitan culture. Wander Buckingham Palace and see the legendary Windsor Castle.",
        image: primaryImg,
        inclusions: [
          "Return flights & London Underground Oyster card",
          "6 Nights luxury hotel near Westminster",
          "Buckingham Palace, Tower of London, and Big Ben tour",
          "Day excursion to medieval Windsor Castle & Oxford University",
          "Premium Afternoon High Tea at luxury tea-salons",
          "Airport transfers"
        ],
        exclusions: [
          "UK Tourist Visa fees",
          "Theatre tickets (available upon request)",
          "Dinner alcoholic drinks"
        ],
        timelineDays: [
          { day: "Day 1", title: "London Arrival & Westminster Walk", desc: "Arrive at Heathrow Airport. Enjoy custom luxury transport to your hotel. Stroll in the afternoon past Big Ben and the Parliament." },
          { day: "Day 2", title: "Buckingham Palace Guards & Tower of London", desc: "Watch the Changing of the Guard, explore the world-famous Tower of London, and see the sparkling Crown Jewels." },
          { day: "Day 3", title: "Windsor Castle & Historical Oxford University", desc: "Enjoy a private coach ride to Her Majesty's royal fortress of Windsor Castle, then tour the colleges of Oxford." },
          { day: "Day 4", title: "London Eye VIP Capsule & Premium High Tea", desc: "Ride the London Eye inside a luxury fast-track capsule, followed by warm freshly baked scones with clotted cream." },
          { day: "Day 5", title: "British Museum & West End Show Night", desc: "Explore millennia-old world treasures like the Rosetta Stone, then enjoy a top-rated musical in the West End." },
          { day: "Day 6", title: "Shakespeare's Globe & Greenwich Meridian Walk", desc: "Cross the Thames river, explore the modern Southbank, and stand in both hemispheres on the Greenwich Prime Meridian." },
          { day: "Day 7", title: "Departure Flight Back Home", desc: "Do some tax-free shopping at Harrods, checkout, and transfer back to the airport for your return flights." }
        ],
        travelerPricing: [
          { id: "Adult", label: "Adult Single", subLabel: "GH₵42,000.00", price: 42000 },
          { id: "Couple", label: "Couple Package", subLabel: "GH₵78,900.00", price: 78900 },
          { id: "ChildWithBed", label: "Child With Bed", subLabel: "GH₵37,500.00", price: 37500 }
        ]
      };

    case "United States":
      return {
        id: "tour-us-skylines",
        name: "AMERICAN MAJESTIC SKYLINES & YOSEMITE CANYONS",
        duration: "8 Days",
        region: "NORTH AMERICA",
        startingPrice: 49500,
        currency: "GH₵",
        description: "Explore breathtaking national canyons, world-scale cinematic entertainment hubs, and iconic coastal skylines. Cross the Golden Gate Bridge and hike Yosemite's towering granite monoliths.",
        image: primaryImg,
        inclusions: [
          "Return flight tickets from Accra",
          "5 Nights 5-Star hotel close to Manhattan Times Square",
          "3 Nights custom wilderness lodge stays in Yosemite Valley",
          "Guided helicopter ride over the Statue of Liberty & Manhattan",
          "San Francisco Bay catamaran dinner cruise"
        ],
        exclusions: [
          "US travel visa (B1/B2 needed)",
          "National park activity fees",
          "Personal meals and tipping"
        ],
        timelineDays: [
          { day: "Day 1", title: "NYC Arrival & Times Square Neon Walk", desc: "Arrive in New York City. Check into your deluxe hotel in Central Park, then watch the spectacular billboards of Times Square." },
          { day: "Day 2", title: "Statue of Liberty Helicopter Flight & Summit Vanderbilt", desc: "Fly above Manhattan's skyline on a private chopper, then experience spectacular 360 views from the SUMMIT." },
          { day: "Day 3", title: "Broadway Show & Central Park Bike Tour", desc: "Rent custom bicycles to explore hidden bridges in Central Park, and watch an award-winning theater play in the evening." },
          { day: "Day 4", title: "Scenic Flight to San Francisco & Bay Cruise", desc: "Take a cross-country internal flight to SF. Board a luxury dinner cruise sliding right under the Golden Gate Bridge." },
          { day: "Day 5", title: "Yosemite National Valley Scenic Drive", desc: "Tour the breathtaking Yosemite National Park, check into your forest organic log cabins, and watch the Milky Way at bonfire." },
          { day: "Day 6", title: "Giant Sequoia Trees & Yosemite Falls Hike", desc: "Hike through ancient giant tree groves and stand near massive roaring waterfalls with professional mountain rangers." },
          { day: "Day 7", title: "Half Dome Sunrise & Napa Valley Winery", desc: "Capture sunset over the Half Dome mountain, then enjoy organic juice tasting and estate lunches in beautiful Napa." },
          { day: "Day 8", title: "Departing Flights to Accra", desc: "Private transport transfer to San Francisco Airport (SFO) for flights back to Accra." }
        ],
        travelerPricing: [
          { id: "Adult", label: "Adult Single", subLabel: "GH₵49,500.00", price: 49500 },
          { id: "Couple", label: "Couple Package", subLabel: "GH₵92,000.00", price: 92000 },
          { id: "ChildWithBed", label: "Child With Bed", subLabel: "GH₵42,000.00", price: 42000 }
        ]
      };

    case "Europe":
      return {
        id: "tour-best-of-europe-august",
        name: "BEST OF EUROPE (BERLIN • AMSTERDAM • BRUSSELS • PARIS)",
        duration: "12 Days / 11 Nights",
        region: "EUROPE",
        startingPrice: 52800,
        currency: "GH₵",
        description: "Imagine yourself strolling along the iconic canals of Amsterdam, witnessing the historical grandeur of Berlin, savoring exquisite chocolates in Brussels, and basking in the romantic ambiance of Paris - an unforgettable 11-night European escapade awaits! Complete with return flights, hotel stays, and daily breakfast, setting the stage for an adventure filled with rich culture and breathtaking sights.",
        image: primaryImg,
        inclusions: [
          "Return Flights",
          "3 Nights Hotel Accommodation in Berlin",
          "3 Nights Hotel Accommodation in Amsterdam",
          "4 Nights Hotel Accommodation in Paris",
          "Daily Breakfast Throughout",
          "Guided City Tours in Berlin, Amsterdam, Brussels & Paris",
          "Travel Insurance & Visa Assistance",
          "Guided Shopping & Airport Transfers"
        ],
        exclusions: [
          "Visa Fees (approx. 90 Euros)",
          "Driver & Guide Gratuity / Tips (approx. 3 Euros/person per day)",
          "Personal shopping & unlisted activities"
        ],
        timelineDays: [
          { day: "Day 1", title: "Accra to Berlin Flight & Hotel Check-in", desc: "Depart Accra for Berlin. Upon arrival, transfer to your hotel for check-in, welcome orientation, and a relaxing evening." },
          { day: "Day 2", title: "Berlin Historical Landmarks & Brandenburg Gate", desc: "Guided city tour exploring Reichstag Building, Brandenburg Gate, Checkpoint Charlie, and Berlin Wall Memorial." },
          { day: "Day 3", title: "Berlin Culture & Museum Island", desc: "Immerse in Prussian heritage on Museum Island, shop along Kurfürstendamm avenue, and savor German culinary delights." },
          { day: "Day 4", title: "Berlin to Scenic Amsterdam & Evening Canal Cruise", desc: "Travel to Amsterdam. Check into your hotel and take an evening glass-topped boat cruise along UNESCO canal waterways." },
          { day: "Day 5", title: "Amsterdam Windmills, Cheese & Historic Center", desc: "Discover iconic Dutch windmills, traditional cheese farms, Dam Square, and the vibrant flower market." },
          { day: "Day 6", title: "Van Gogh Museum & Cultural Exploration", desc: "Visit world-famous museums, explore boutique Jordaan quarter, and enjoy authentic Dutch pastries." },
          { day: "Day 7", title: "Amsterdam to Brussels & Chocolate Excursion", desc: "Journey to Brussels. Experience Grand Place, Manneken Pis, Atomium, and world-renowned Belgian chocolate tasting." },
          { day: "Day 8", title: "Brussels to Paris & Seine River Evening Cruise", desc: "Travel to the City of Light, Paris! Enjoy an evening illumination cruise along the Seine River under twinkling lights." },
          { day: "Day 9", title: "Paris City Landmarks & Eiffel Tower", desc: "Discover the Arc de Triomphe, Champs-Élysées, Notre-Dame, and ascend the Eiffel Tower for panoramic city views." },
          { day: "Day 10", title: "Louvre Museum & Parisian Shopping", desc: "Explore Louvre masterpieces including the Mona Lisa, followed by high-fashion shopping at Galeries Lafayette." },
          { day: "Day 11", title: "Versailles Palace & Leisure Evening", desc: "Excursion to the magnificent Palace of Versailles and royal gardens, returning to Paris for a farewell dinner." },
          { day: "Day 12", title: "Check-out & Return Flight to Accra", desc: "Enjoy your final Parisian breakfast, check out, and transfer to CDG Airport for your return flight home." }
        ],
        travelerPricing: [
          { id: "Adult", label: "Adult Single", subLabel: "GH₵52,800.00", price: 52800 },
          { id: "Couple", label: "Couple Package", subLabel: "GH₵105,710.00", price: 105710 },
          { id: "ChildWithBed", label: "Child With Bed", subLabel: "GH₵50,200.00", price: 50200 },
          { id: "ChildWithoutBed", label: "Child Without Bed", subLabel: "GH₵31,480.00", price: 31480 },
          { id: "SingleSupplement", label: "Single Supplement", subLabel: "GH₵8,600.00", price: 8600 },
          { id: "Infant", label: "Infant Rate", subLabel: "GH₵6,000.00", price: 6000 }
        ]
      };

    case "Morocco":
      return {
        id: "tour-morocco-souks",
        name: "MOROCCO IMPERIAL CITIES & GOLDEN SAHARA CAMPSET",
        duration: "7 Days",
        region: "NORTH AFRICA",
        startingPrice: 31000,
        currency: "GH₵",
        description: "Venture inside high-contrast vibrant spice markets, Sahara dunes, and the cozy cobalt towns of Chefchaouen. Spend a magical night at a nomadic desert campsite.",
        image: primaryImg,
        inclusions: [
          "Return flights and private 4x4 AC vehicles",
          "3 Nights luxury Riad hotel stays in Marrakech Medina",
          "1 Night boutique desert camp in the Sahara dunes",
          "Guided tour of Marrakech historic palaces & souks",
          "Camel trekking expedition and dune boarding",
          "Traditional Tagine cooking class"
        ],
        exclusions: [
          "Moroccan single visa cost",
          "Tips to tour guides & drivers",
          "Alcoholic beverages in the desert"
        ],
        timelineDays: [
          { day: "Day 1", title: "Marrakech Arrival & Magical Riad Stay", desc: "Arrive in Marrakech. Walk past courtyard orange trees and check into your historic carved-plaster Moorish Riad house." },
          { day: "Day 2", title: "Marrakech Palaces, Spice Souks & Djemaa El Fna", desc: "Visit Bahia Palace, Majorelle Gardens, then wander lively markets with storytellers, musicians, and snake charmers." },
          { day: "Day 3", title: "Scale Atlas Mountains & Ait Benhaddou Kasbah", desc: "Cross the spectacular snowcapped Atlas range and visit the ancient clay fortress of Ait Benhaddou." },
          { day: "Day 4", title: "Golden Sahara Sands & Camel Ride Trek", desc: "Embark on a camel ride caravan into the dunes. Stay at a luxury nomadic desert camp under millions of stars." },
          { day: "Day 5", title: "Sahara Sunrise & Todra Gorge Canyons", desc: "Watch the sun rise over the sands, climb massive Todra gorges, then return to a beautiful Riad lodging." },
          { day: "Day 6", title: "Tagine Cooking Class & Hammam Spa", desc: "Learn to slow-cook lamb with prunes, then relax inside a heated Moroccan steam Hammam with black soap scrub." },
          { day: "Day 7", title: "Departure Flights Back Home", desc: "Transfer to Casablanca Airport (CMN) for comfortable flight back home to Accra." }
        ],
        travelerPricing: [
          { id: "Adult", label: "Adult Single", subLabel: "GH₵31,000.00", price: 31000 },
          { id: "Couple", label: "Couple Package", subLabel: "GH₵58,000.00", price: 58000 },
          { id: "ChildWithBed", label: "Child With Bed", subLabel: "GH₵26,500.00", price: 26500 }
        ]
      };

    case "South Africa":
      return {
        id: "tour-south-africa-safari",
        name: "SOUTH AFRICA CAPE TOWN COASTS & KRUGER SAFARI",
        duration: "8 Days",
        region: "SOUTHERN AFRICA",
        startingPrice: 34500,
        currency: "GH₵",
        description: "Adventure across scenic coastal cliff routes, tabletop mountains, and world-class savannah safaris tracking the Big Five. Watch Cape penguins play and see lions hunt.",
        image: primaryImg,
        inclusions: [
          "In-country flights from Cape Town to Kruger Park",
          "4 Nights luxury Table Mountain view boutique lodging",
          "3 Nights private luxury safari suite lodge in Kruger National Park",
          "Table Mountain Cableway return pass",
          "All national park safari vehicle drives and native trackers"
        ],
        exclusions: [
          "South African tourist visa fees",
          "Personal meals not listed",
          "Safari equipment rentals"
        ],
        timelineDays: [
          { day: "Day 1", title: "Cape Town Arrival & Victoria Waterfront Harbor", desc: "Fly to Cape Town, enjoy escort transfer to your hotel. Dine on the bustling harbor waterfront with views of Table Mountain." },
          { day: "Day 2", title: "Table Mountain Cableway Ride & Penguin Beaches", desc: "Ride the rotating cablecar to the mountaintop, then drive to Boulder's Beach to walk with wild African penguins." },
          { day: "Day 3", title: "Chapman's Peak Scenic Drive & Cape of Good Hope", desc: "Cross the legendary cliffs of Chapman's Peak, stand at the southwestern tip of the African continent." },
          { day: "Day 4", title: "Fly to Kruger National Park & Sunset Safari Drive", desc: "Take a regional flight. Spot leopards, hyenas, and elephants on your very first sunset open-top 4x4 drive." },
          { day: "Day 5", title: "Sunrise Walking Savannah Safari & Big Five Tracking", desc: "Walk on foot tracking animal paw signs with an armed local ranger, followed by a delicious bush breakfast." },
          { day: "Day 6", title: "Kruger Day long Jeep Safari Exploration", desc: "Spend the entire day inside Sabi Sands reserves spotting pride of lions hunting, rhino families, and lazy leopards on branches." },
          { day: "Day 7", title: "Star-ring Canyon Panoramic Route & Blyde River", desc: "Drive past the dramatic Blyde River Canyon and Three Rondavels peak structures." },
          { day: "Day 8", title: "Fly Home from Johannesburg", desc: "Transfer to Kruger MP Airport or OR Tambo Airport (JNB) for return flights back to Accra." }
        ],
        travelerPricing: [
          { id: "Adult", label: "Adult Single", subLabel: "GH₵34,500.00", price: 34500 },
          { id: "Couple", label: "Couple Package", subLabel: "GH₵63,800.00", price: 63800 },
          { id: "ChildWithBed", label: "Child With Bed", subLabel: "GH₵31,000.00", price: 31000 }
        ]
      };

    default:
      return {
        id: "tour-custom-" + cardOriginalName.toLowerCase().replace(/\s+/g, '-'),
        name: `${cardOriginalName.toUpperCase()} PRIVATE VOYAGE & SIGHTSEEING EXPEDITION`,
        duration: "7 Days",
        region: "GLOBAL ADVENTURES",
        startingPrice: 29500,
        currency: "GH₵",
        description: `Explore the vibrant streets, rich historical monuments, and custom landmarks of ${cardOriginalName}. Curated exclusively for premium groups seeking high-fidelity discoveries.`,
        image: primaryImg,
        inclusions: [
          "Return flights & private airport car transport",
          "6 Nights in premium boutique lodgings",
          "Guided city landmarks explorer walk with local historian",
          "Daily gourmet traditional culinary meals",
          "All entrance tickets and regional permits"
        ],
        exclusions: [
          "Tourist visa application fees",
          "Gratuities and tips to your drivers",
          "Excess luggage expenses"
        ],
        timelineDays: [
          { day: "Day 1", title: "Arrival & Private Escort Transfer", desc: "Land at your destination, gather bags and transfer peacefully to your boutique base hotel." },
          { day: "Day 2", title: "Iconic Historical Landmarks Tour", desc: "See the worldrenowned historic sites with our expert native historians." },
          { day: "Day 3", title: "Local Cultural Art & Food Markets Walk", desc: "Savor fresh traditional food items directly from old markets and learn traditional handicraft weaving." },
          { day: "Day 4", title: "Nature Valley & Scenery Exploration", desc: "Drive out to surrounding parks and majestic water bodies for restorative hiking trails." },
          { day: "Day 5", title: "Private VIP Catamaran Cruise & Coastal Rest", desc: "Relished in private boat rides around beautiful coordinates, enjoying fresh BBQ on deck." },
          { day: "Day 6", title: "Farewell Gourmet Banquet Dinner", desc: "Celebrate with live native musical shows and delicious wine pairings with your travel companions." },
          { day: "Day 7", title: "Return Home Route", desc: "Checkout, buy premium native artifacts, and take comfortable transfers to the airport." }
        ],
        travelerPricing: [
          { id: "Adult", label: "Adult Single", subLabel: "GH₵29,500.00", price: 29500 },
          { id: "Couple", label: "Couple Package", subLabel: "GH₵54,000.00", price: 54000 },
          { id: "ChildWithBed", label: "Child With Bed", subLabel: "GH₵25,500.00", price: 25500 }
        ]
      };
  }
}

// Sub-component: WhyTravelWithUs (Visual Chooser & continuous mask image reveal)
export function WhyTravelWithUs({ onPlanJourney }: { onPlanJourney: () => void }) {
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
            
            {/* Dynamic floating travel illustration markers */}
            
            
            <motion.div
              animate={{ 
                y: [0, -5, 0],
                rotate: [12, 14, 11, 12]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[5%] bottom-[-5%] hidden md:flex text-indigo-505 pointer-events-none z-15"
            >
              
            </motion.div>

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
              <button
                onClick={onPlanJourney}
                className="bg-[#0b2545] hover:bg-[#15345c] text-white text-xs font-semibold tracking-wider py-4 px-8 rounded-xl transition-all duration-300 shadow-md shadow-gray-200 flex items-center justify-center space-x-2.5 cursor-pointer transform active:scale-98"
                id="why_choose_primary_cta"
              >
                <span>Plan Your Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'tour' | 'plan' | 'contact'>('home');
  const [activeNav, setActiveNav] = useState('hero_section');

  // Dynamic SEO page title & meta description updates
  useEffect(() => {
    const titles: Record<string, string> = {
      home: "The Tourism People GH | Luxury Ghana Tours, Safaris & Bespoke Escapes",
      tour: "Curated Ghana Tours & Travel Packages | The Tourism People GH",
      plan: "Plan Your Custom Ghana Voyage & Itinerary Builder | The Tourism People GH",
      contact: "Contact Concierge & Book Your Ghana Escape | The Tourism People GH"
    };
    const descriptions: Record<string, string> = {
      home: "Discover unforgettable Ghana travel experiences, curated luxury safaris, cultural expeditions, Cape Coast heritage tours, and tailor-made bespoke itineraries with The Tourism People GH.",
      tour: "Explore our hand-crafted, all-inclusive luxury travel packages across Ghana, South Africa, Zanzibar, UK, USA, Dubai, and Morocco with expert concierge guidance.",
      plan: "Build your dream Ghanaian voyage step-by-step with our interactive travel planner. Select your vibe, custom preferences, and let our specialists design your journey.",
      contact: "Get in touch with The Tourism People GH travel concierge in Accra. Reach our specialists for custom reservations, group tours, and bespoke corporate itineraries."
    };
    document.title = titles[currentPage] || titles.home;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', descriptions[currentPage] || descriptions.home);
    }
  }, [currentPage]);

  const handlePageChange = (page: 'home' | 'tour' | 'plan' | 'contact') => {
    setCurrentPage(page);
    setActiveNav(page === 'home' ? 'hero_section' : page === 'tour' ? 'curated-tours' : page === 'plan' ? 'vibe_selector' : 'contact_section');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const [selectedVibe, setSelectedVibe] = useState<VibeType>('coastal');
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasMovedMouse, setHasMovedMouse] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [bookingName, setBookingName] = useState('');
  const [activeTab, setActiveTab] = useState<'details' | 'itinerary'>('details');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Interactive countries showcase
  const [activeDestinationIndex, setActiveDestinationIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Destination Discovery Section States
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [discoverSearch, setDiscoverSearch] = useState('');

  // Preload all destination showcase images and essential media on mount for instant visual swap
  useEffect(() => {
    const listToPreload: string[] = [
      airplaneImage,
      beachImage,
      logoImage,
      keyboardEscapeImage,
      luxuryDestinationImage
    ];

    DESTINATIONS.forEach((dest) => {
      try {
        const destImages = getDestinationImages(dest);
        destImages.forEach((url) => {
          if (url && !listToPreload.includes(url)) {
            listToPreload.push(url);
          }
        });
      } catch (e) {
        console.warn("Failed to get images to preload for " + dest, e);
      }
    });

    listToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Services Hub and Consular States
  const [searchQuery, setSearchQuery] = useState('');
  const [activeServiceCategory, setActiveServiceCategory] = useState<'all' | 'passports' | 'visas' | 'ticketing' | 'group-tourism'>('all');
  const [selectedConsultService, setSelectedConsultService] = useState<TravelService | null>(null);
  const [serviceContactName, setServiceContactName] = useState('');
  const [serviceContactEmail, setServiceContactEmail] = useState('');
  const [serviceContactPhone, setServiceContactPhone] = useState('');
  const [serviceContactNotes, setServiceContactNotes] = useState('');
  const [showServiceSuccess, setShowServiceSuccess] = useState(false);

  // Custom Contact Form States
  const [contactFormFirstName, setContactFormFirstName] = useState('');
  const [contactFormLastName, setContactFormLastName] = useState('');
  const [contactFormEmail, setContactFormEmail] = useState('');
  const [contactFormMessage, setContactFormMessage] = useState('');
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);
  const [contactFormLoading, setContactFormLoading] = useState(false);
  const [showLiveChatNotice, setShowLiveChatNotice] = useState(false);

  // Interactive Tour Packages States
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const [travelerCounts, setTravelerCounts] = useState<Record<string, number>>({});
  const [tourDetailActiveTab, setTourDetailActiveTab] = useState<'description' | 'inclusions' | 'itinerary' | 'dubai-offers'>('description');
  const [tourContactName, setTourContactName] = useState('');
  const [tourContactEmail, setTourContactEmail] = useState('');
  const [tourContactPhone, setTourContactPhone] = useState('');
  const [tourContactDate, setTourContactDate] = useState('');
  const [tourBookingSubmitted, setTourBookingSubmitted] = useState(false);
  const [tourBookingLoading, setTourBookingLoading] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  // States for Interactive Luxury Itinerary Estimator Slider Suite
  const [estimateTravelers, setEstimateTravelers] = useState(2);
  const [estimateDays, setEstimateDays] = useState(7);
  const [estimateAccom, setEstimateAccom] = useState<'4star' | '5star' | 'overwater'>('5star');
  const [estimateFirstClass, setEstimateFirstClass] = useState(false);
  const [showEstimateSuccess, setShowEstimateSuccess] = useState(false);
  const [estimatorName, setEstimatorName] = useState('');
  const [estimatorPhone, setEstimatorPhone] = useState('');

  // Interactive Visa Document Checklist Wizard and Status Tracker states
  const [checklistService, setChecklistService] = useState<'gh-passport' | 'schengen-visa' | 'uk-visa' | 'us-visa'>('schengen-visa');
  const [trackerCode, setTrackerCode] = useState('');
  const [searchedTrackerCode, setSearchedTrackerCode] = useState('');

  const handleOpenTour = (tour: TourPackage) => {
    setSelectedTour(tour);
    const initialCounts: Record<string, number> = {};
    tour.travelerPricing.forEach((p) => {
      initialCounts[p.id] = p.id === 'Adult' ? 1 : 0;
    });
    setTravelerCounts(initialCounts);
    setTourDetailActiveTab('description');
    setShowCheckoutForm(false);
    setTourBookingSubmitted(false);
    setTourContactName('');
    setTourContactEmail('');
    setTourContactPhone('');
    setTourContactDate('');
  };

  const handleTourBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTourBookingLoading(true);
    setTimeout(() => {
      setTourBookingLoading(false);
      setTourBookingSubmitted(true);
    }, 1500);
  };

  const calculatedTotal = selectedTour
    ? selectedTour.travelerPricing.reduce((sum, p) => {
        const count = travelerCounts[p.id] || 0;
        return sum + p.price * count;
      }, 0)
    : 0;

  const handleServiceConsultSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (serviceContactName.trim() && serviceContactEmail.trim()) {
      setShowServiceSuccess(true);
      setTimeout(() => {
        setShowServiceSuccess(false);
        setSelectedConsultService(null);
        setServiceContactName('');
        setServiceContactEmail('');
        setServiceContactPhone('');
        setServiceContactNotes('');
      }, 6000);
    }
  };

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!contactFormFirstName.trim() || !contactFormLastName.trim() || !contactFormEmail.trim() || !contactFormMessage.trim()) return;
    
    setContactFormLoading(true);
    setTimeout(() => {
      setContactFormLoading(false);
      setContactFormSubmitted(true);
    }, 1200);
  };

  // Detect responsiveness & touch devices for autoplay rules
  useEffect(() => {
    const detectDevice = () => {
      const mobileWidth = window.innerWidth < 768;
      const touchSupport = ('ontouchstart' in window) && window.innerWidth < 768;
      setIsMobile(mobileWidth || touchSupport);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    detectDevice();
    window.addEventListener('resize', detectDevice);
    return () => window.removeEventListener('resize', detectDevice);
  }, []);

  // Listen for mousemove once to animate images and keep state permanently with zero scrolling overhead
  useEffect(() => {
    if (showSecondImage) return;

    let mobileTimerId: NodeJS.Timeout;

    const handleMouseMove = () => {
      setHasMovedMouse(true);
      setShowSecondImage(true);
    };

    if (!isMobile) {
      // Use { once: true } to automatically detach the event listener after the first trigger
      window.addEventListener('mousemove', handleMouseMove, { once: true });
    } else {
      // Automatic transition once on mobile after 2500ms
      mobileTimerId = setTimeout(() => {
        setShowSecondImage(true);
      }, 2500);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (mobileTimerId) clearTimeout(mobileTimerId);
    };
  }, [isMobile, showSecondImage]);

  // Continuously rotate destinations strictly every 10 seconds (optimized for smooth viewing and readability)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveDestinationIndex((prev) => (prev + 1) % DESTINATIONS.length);
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  // Active Navbar scroll spy listener
  useEffect(() => {
    if (currentPage !== 'home') return;
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220; // Appropriate offset for header height and layout
      
      const sections = [
        { id: 'hero_section', navId: 'hero_section' },
        { id: 'destination_discovery_section', navId: 'hero_section' },
        { id: 'vibe_selector', navId: 'vibe_selector' },
        { id: 'services-hub', navId: 'services-hub' },
        { id: 'curated-tours', navId: 'curated-tours' }
      ];

      let currentSection = 'hero_section';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = section.navId;
            break;
          }
        }
      }
      setActiveNav(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Execute immediately to catch correct position at startup
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  useEffect(() => {
    const handleScrollGeneral = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScrollGeneral, { passive: true });
    handleScrollGeneral();
    return () => window.removeEventListener('scroll', handleScrollGeneral);
  }, []);

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (bookingName.trim()) {
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        setBookingName('');
      }, 5000);
    }
  };

  const filteredCards = destinationCards.filter(card => {
    const cardCat = (card.filterCategory || '').trim().toLowerCase();
    const selFilter = (selectedFilter || 'All').trim().toLowerCase();
    
    let matchesFilter = selFilter === 'all';
    if (!matchesFilter) {
      if (selFilter === 'usa' || selFilter === 'united states') {
        matchesFilter = cardCat === 'usa' || cardCat === 'united states';
      } else if (selFilter === 'morocco' || selFilter === 'morroco') {
        matchesFilter = cardCat === 'morocco' || cardCat === 'morroco';
      } else if (selFilter === 'schengen state' || selFilter === 'europe' || selFilter === 'schengen') {
        matchesFilter = cardCat === 'schengen state' || cardCat === 'europe' || cardCat === 'schengen';
      } else {
        matchesFilter = cardCat === selFilter;
      }
    }
    
    const query = (discoverSearch || '').trim().toLowerCase();
    const matchesSearch = query === '' || 
      (card.city || '').toLowerCase().includes(query) || 
      (card.country || '').toLowerCase().includes(query) ||
      (card.originalName || '').toLowerCase().includes(query) ||
      (card.filterCategory || '').toLowerCase().includes(query);
      
    return matchesFilter && matchesSearch;
  });

  const vibeData = VIBE_DETAILS[selectedVibe];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased relative overflow-x-hidden selection:bg-black selection:text-white" id="main_app_layout">
      
      {/* Invisible Eager Preload Cache Wrapper to force download, cache, and GPU texture decoding right on application mount */}
      <div 
        className="fixed opacity-0 pointer-events-none select-none z-[-99] w-px h-px overflow-hidden" 
        style={{ width: '1px', height: '1px', left: '-999px', top: '-999px' }} 
        aria-hidden="true"
      >
        {Array.from(
          new Set([
            airplaneImage,
            beachImage,
            logoImage,
            keyboardEscapeImage,
            luxuryDestinationImage,
            ...DESTINATIONS.flatMap((dest) => getDestinationImages(dest))
          ])
        )
          .filter(Boolean)
          .map((url, i) => (
            <img key={`preload-img-${i}`} src={url} alt="" loading="eager" decoding="sync" />
          ))}
      </div>
      
      {/* Premium Top Navigation header */}
      <header 
        className={`fixed z-50 transition-all duration-500 ease-in-out left-1/2 -translate-x-1/2 ${
          isScrolled 
            ? 'top-4 w-[95%] sm:w-[90%] md:w-[85%] max-w-5xl bg-white/70 backdrop-blur-md shadow-xl border border-gray-100/80 rounded-2xl md:rounded-full h-14 md:h-16' 
            : 'top-0 w-full max-w-none bg-transparent md:bg-white/75 md:backdrop-blur-md border-b-0 h-20'
        }`}
        id="app_header"
      >
        <div className={`h-full flex items-center justify-between transition-all duration-500 ease-in-out ${
          isScrolled ? 'w-full px-6 sm:px-8' : 'w-full max-w-7xl mx-auto px-6'
        }`}>
          
          {/* Brand Logo - Styled clean and unbordered */}
          <div 
            className="flex items-center cursor-pointer group space-x-2 sm:space-x-3 transition-all duration-500 ease-in-out min-w-0" 
            id="brand_logo" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
          </div>

          {/* Desktop Nav Links - Standard Clean Travel Menu */}
          <nav className={`hidden md:flex items-center font-semibold transition-all duration-500 ease-in-out text-xs sm:text-sm ${
            isScrolled ? 'space-x-4 md:space-x-5' : 'space-x-6 md:space-x-8'
          }`} id="desktop_nav">
            <button 
              onClick={() => handlePageChange('home')}
              className={`transition-all duration-500 ease-in-out relative py-1 border-b-2 cursor-pointer ${
                currentPage === 'home' 
                  ? 'text-[#0b2545] font-black border-[#0b2545]' 
                  : 'text-gray-500 border-transparent hover:text-black'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => handlePageChange('tour')}
              className={`transition-all duration-500 ease-in-out relative py-1 border-b-2 cursor-pointer ${
                currentPage === 'tour' 
                  ? 'text-[#0b2545] font-black border-[#0b2545]' 
                  : 'text-gray-500 border-transparent hover:text-black'
              }`}
            >
              Tour
            </button>
            <button 
              onClick={() => handlePageChange('plan')}
              className={`transition-all duration-500 ease-in-out relative py-1 border-b-2 cursor-pointer ${
                currentPage === 'plan' 
                  ? 'text-[#0b2545] font-black border-[#0b2545]' 
                  : 'text-gray-500 border-transparent hover:text-black'
              }`}
            >
              Plan Your Trip
            </button>
          </nav>

          {/* Premium Right CTA Action */}
          <div className="flex items-center space-x-2 sm:space-x-3 transition-all duration-500 ease-in-out" id="header_cta">
            <div className={`hidden md:flex items-center space-x-2 text-[10px] font-mono text-gray-400 bg-slate-50 border border-gray-100 rounded-full transition-all duration-500 ease-in-out ${
              isScrolled ? 'opacity-0 scale-95 pointer-events-none max-w-0 overflow-hidden border-transparent px-0 py-0' : 'opacity-100 scale-100 max-w-[150px] px-2.5 py-1.5'
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            
            <button 
              onClick={() => handlePageChange('contact')}
              className={`hidden sm:inline-flex bg-[#0b2545] text-white hover:bg-[#15345c] rounded-full font-bold tracking-wider uppercase transition-all duration-500 ease-in-out shadow-sm items-center space-x-1.5 cursor-pointer text-xs ${
                isScrolled ? 'px-4 py-2' : 'px-5 py-2.5'
              }`}
              id="cta_contact_us"
            >
              <PhoneCall className={isScrolled ? "w-3 h-3" : "w-3.5 h-3.5"} />
              <span className="hidden md:inline">Contact Us</span>
              <span className="md:hidden inline">Contact</span>
            </button>

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
            {/* Dark Blur Backdrop (Dismiss on tap outside) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-[55] md:hidden cursor-pointer"
              aria-hidden="true"
            />

            {/* Mobile Floating Menu Card */}
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className={`fixed left-1/2 -translate-x-1/2 w-[92%] max-w-sm bg-white backdrop-blur-xl shadow-2xl border border-gray-200/80 rounded-3xl z-[60] p-6 flex flex-col space-y-6 md:hidden ${
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
                {[
                  { name: 'Home', id: 'home' },
                  { name: 'Tour', id: 'tour' },
                  { name: 'Plan Your Trip', id: 'plan' },
                  { name: 'Contact Us', id: 'contact' },
                ].map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => handlePageChange(item.id as any)}
                    className={`w-full py-3 px-4 rounded-2xl text-left font-display tracking-tight text-sm transition-all duration-200 flex items-center justify-between cursor-pointer active:scale-98 ${
                      currentPage === item.id
                        ? 'bg-[#0b2545] text-white font-bold shadow-md shadow-[#0b2545]/20'
                        : 'text-gray-700 hover:bg-slate-50 hover:text-[#0b2545] font-medium'
                    }`}
                  >
                    <span>{item.name}</span>
                    {currentPage === item.id ? (
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    )}
                  </button>
                ))}
              </div>

              {/* Ghana escape brand note inside mobile menu */}
              <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-mono tracking-widest text-[#0b2545] font-bold uppercase leading-none">The Tourism People GH</p>
                  <p className="text-[8px] sm:text-[9px] font-mono text-gray-400 mt-1">Ghana's Premium Travel Experience</p>
                </div>
                <div className="flex space-x-1.5 text-emerald-600 text-[9px] items-center font-mono bg-emerald-50/80 px-2.5 py-1 rounded-full border border-emerald-100/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Operational</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Condition for Home Screen View */}
      {currentPage === 'home' && (
        <>
          {/* Main Single-Screen Hero Section */}
          <section 
            className="relative pt-[5rem] md:pt-20 md:pb-0 md:min-h-screen flex items-center bg-[#f4f7f6] md:bg-white overflow-hidden" 
            id="hero_section"
          >
            {/* MOBILE ONLY SCREEN DESIGN - MATCHING SCREENSHOT PRECISELY */}
            <div className="md:hidden w-full flex flex-col justify-between relative z-20 select-none bg-gradient-to-b from-[#f5f8fa] via-[#eef2f5] to-[#f4f7f6]" id="mobile_hero_content">
              {/* Centered Premium Content Area */}
              <div className="flex flex-col items-center justify-center text-center px-5 pt-10 sm:pt-16 pb-4">
                <h1 className="font-serif text-[#0b2545] text-[2.5rem] sm:text-[3.2rem] font-bold tracking-tight leading-[1.1] mb-4" id="hero_main_title_mobile">
                  Explore the world <br />
                  with us.
                </h1>

                <p className="text-gray-500 font-sans font-light text-xs sm:text-sm leading-relaxed max-w-[85%] sm:max-w-[70%] mx-auto tracking-normal mt-2">
                  Our luxury travel agency coordinates pristine local lodging, express biometric visas, and custom-tailored itineraries to keep your escape completely stress-free.
                </p>

                {/* Shop-all exact replica button */}
                <div className="mt-6 md:mt-8">
                  <button
                    onClick={() => handlePageChange('plan')}
                    className="bg-[#191919] hover:bg-neutral-800 text-white font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase py-3 px-8 rounded-full shadow-md transition-all duration-300 cursor-pointer transform active:scale-95"
                    id="mobile_plan_journey_btn"
                  >
                    Plan Journey
                  </button>
                </div>
              </div>

              {/* Burj Al Arab Cover Image Section - occupying the lower portion of the screen height */}
              <div className="relative w-full h-[380px] sm:h-[485px] mt-2 overflow-hidden z-20 flex items-end">
                {/* Dubai Burj Al Arab iconic image as main background */}
                <img 
                  src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=compress&cs=tinysrgb&w=800" 
                  alt="Dubai Burj Al Arab" 
                  className="absolute inset-[0%] w-full h-full object-cover select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />

                {/* Elegant overlay to smoothly blend image into background */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-[#f4f7f6]" />

                {/* Floating pill/card duplicating screenshot product design */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[92%] sm:w-[80%] max-w-sm bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-100/90 p-3 flex items-center justify-between z-30 transition-all duration-300 hover:scale-[1.01]">
                  <div className="flex items-center">
                    {/* Tiny visual badge */}
                    <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-slate-50 border border-gray-100 flex items-center justify-center">
                      <img 
                        src={dubaiBurjImage} 
                        alt="Dubai Futuristic Escape" 
                        className="w-full h-full object-cover shrink-0"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Information labels */}
                    <div className="ml-3 text-left">
                      <span className="block font-sans font-extrabold text-[12px] text-gray-900 tracking-tight leading-tight">
                        Dubai Majestic Escape
                      </span>
                      <span className="block font-sans font-medium text-[9px] text-gray-400 mt-0.5 leading-none">
                        Premium Tour & Desert Safari
                      </span>
                      <span className="block font-mono font-black text-[10px] text-[#0b2545] mt-1.5">
                        GH₵28,500.00 <span className="text-[8px] font-medium text-gray-400">/ travelers</span>
                      </span>
                    </div>
                  </div>

                  {/* Circle plus CTA */}
                  <button 
                    onClick={() => handlePageChange('tour')}
                    className="w-9 h-9 rounded-full bg-[#111111] hover:bg-neutral-800 text-white flex items-center justify-center transition-transform active:scale-95 shadow-md cursor-pointer hover:rotate-90 duration-300 shrink-0"
                    title="Explore Dubai Escapes"
                    id="mobile_floating_plus_btn"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* DESKTOP & TABLET SPLIT SCREEN DESIGN - REMAINS PREMIUM AND COMPILABILITY FIRST */}
            <div className="hidden md:grid max-w-7xl mx-auto px-6 w-full grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center relative z-20">
              {/* LEFT SIDE CONTENT - HEADING & CURATOR */}
              <div className="md:col-span-6 xl:col-span-5 flex flex-col justify-center space-y-8 text-left" id="hero_left_content">
                {/* Crucial Title - permanently setting 'Explore the world with us' */}
                <div className="space-y-5">
                  <h1 className="font-serif text-[#0b2545] text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08]" id="hero_main_title">
                    Explore the world <br />
                    with us.
                  </h1>
                  
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeDestinationIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                      className="text-gray-500 text-sm md:text-base font-normal leading-relaxed max-w-lg min-h-[4rem]"
                    >
                      {DESTINATION_INFO[DESTINATIONS[activeDestinationIndex]]?.desc} Our luxury travel agency coordinates pristine local lodging, express biometric visas, and custom-tailored itineraries to keep your escape completely stress-free.
                    </motion.p>
                  </AnimatePresence>
                </div>

                {/* Action Buttons styled to design requirements */}
                <div className="flex flex-wrap items-center gap-4" id="action_cta_block">
                  <button
                    onClick={() => handlePageChange('plan')}
                    className="bg-[#0b2545] hover:bg-[#15345c] text-white text-xs md:text-sm font-semibold tracking-wide py-4 px-8 rounded-xl transition-all duration-300 shadow-md shadow-gray-150 flex items-center justify-center space-x-2 cursor-pointer"
                    id="hero_primary_cta"
                  >
                    <span>Plan Your Trip</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                  <button
                    onClick={() => handlePageChange('tour')}
                    className="bg-white hover:bg-slate-50 border border-gray-200 hover:border-slate-400 text-gray-700 text-xs md:text-sm font-semibold tracking-wide py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
                    id="hero_secondary_cta"
                  >
                    <span>Explore Tours</span>
                  </button>
                </div>

                {/* Interactive Carousel Pips to manually command slides */}
                <div className="flex items-center space-x-2 pt-2">
                  {DESTINATIONS.map((dest, idx) => (
                    <button
                      key={dest}
                      onClick={() => setActiveDestinationIndex(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${activeDestinationIndex === idx ? 'w-8 bg-[#0b2545]' : 'w-2.5 bg-gray-200 hover:bg-gray-400'}`}
                      title={`View ${dest}`}
                    />
                  ))}
                  <span className="text-[9px] font-mono text-gray-400 ml-2 font-bold uppercase">
                    ({activeDestinationIndex + 1}/{DESTINATIONS.length})
                  </span>
                </div>
              </div>

              {/* RIGHT SIDE CONTENT - THE DYNAMIC DESTINATION NAMES MOVED ON TOP OF THE STAGGERED VERTICAL IMAGES */}
              <div className="md:col-span-6 xl:col-span-7 flex flex-col relative md:-mt-6 lg:-mt-10 xl:-mt-14" id="hero_right_showcase">
                {/* Standing alone dynamic destination names display above the staggered images */}
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
                      className="text-4xl md:text-5xl font-serif font-extrabold text-[#0b2545] tracking-tight leading-none mt-2"
                    >
                      {DESTINATIONS[activeDestinationIndex]}
                    </motion.h3>
                  </AnimatePresence>
                </div>

                {/* Staggered Vertical Capsules Container (exactly side-by-side with staggered heights) */}
                <div className="grid grid-cols-4 gap-2 sm:gap-4 items-center animate-fade-in relative z-20">
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
                        className={`relative w-full overflow-hidden ${capsule.hClass} shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:scale-[1.02] hover:z-25 transition-all duration-300 bg-slate-50`}
                      >
                        {/* Sliding frame inside of the rounded constraints */}
                        <div className="relative w-full h-full">
                          <AnimatePresence mode="popLayout" initial={false}>
                            <motion.img
                              key={activeDestinationIndex + "_" + capsuleIdx}
                              src={imageUrl}
                              alt={DESTINATIONS[activeDestinationIndex]}
                              initial={{ x: "120%", opacity: 0.8 }}
                              animate={{ x: 0, opacity: 1 }}
                              exit={{ x: "-120%", opacity: 0.8 }}
                              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }} // Exquisite transitions
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

      {/* WHY CHOOSE US / WHY TRAVEL WITH US SECTION */}
      <WhyTravelWithUs onPlanJourney={() => handlePageChange('plan')} />

      {/* DESTINATION DISCOVERY SECTION */}
      <section className="py-24 bg-white relative overflow-hidden" id="destination_discovery_section">
        {/* Subtle decorative elements for premium design */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Header Area */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0b2545] bg-[#0b2545]/5 px-3.5 py-1.5 rounded-full uppercase inline-block mb-3">
              Dream, Plan, Explore
            </span>
            <h2 className="font-space font-black text-3xl sm:text-4xl md:text-5xl lg:text-4xl tracking-tighter text-[#0b2545] uppercase leading-[0.98] mb-6 md:text-5xl lg:text-6xl" id="discovery_title">
              YOU PICK THE PLACE,<br className="hidden sm:inline" /> WE PLAN THE JOURNEY
            </h2>
            <p className="text-gray-500 font-normal text-sm md:text-base leading-relaxed max-w-2xl mx-auto" id="discovery_description">
              Whether you're dreaming of tropical beaches, vibrant cities, mountain escapes, or cultural adventures, we'll help turn your travel goals into unforgettable experiences.
            </p>
          </div>

          {/* Destination Filters */}
          <div className="flex justify-center mb-6 w-full" id="discovery_filters_wrapper">
            <div className="flex overflow-x-auto pb-4 pt-1 px-4 gap-2.5 no-scrollbar max-w-full md:flex-wrap md:justify-center scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {DISCOVERY_FILTERS.map((filter) => {
                const isActive = selectedFilter === filter;
                return (
                  <button
                    key={filter}
                    id={`filter_pill_${filter.toLowerCase().replace(/\s+/g, '_')}`}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase whitespace-nowrap transition-all duration-350 transform active:scale-95 border-2 ${
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

          {/* Large Pill-Design Search Bar */}
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
                className="w-full pl-12 pr-12 py-4 bg-white border-2 border-slate-250 rounded-full text-sm text-[#0b2545] font-medium placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#0b2545]/5 focus:border-[#0b2545] transition-all duration-300 shadow-sm"
              />
              {discoverSearch && (
                <button
                  onClick={() => setDiscoverSearch("")}
                  className="absolute inset-y-0 right-0 pr-5 flex items-center text-xs font-bold text-slate-400 hover:text-[#0b2545] transition-colors"
                >
                  CLEAR
                </button>
              )}
            </div>
          </div>

          {/* Dynamic Grid Layout */}
          <motion.div 
            variants={DISCOVERY_GRID_VARIANTS}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
            id="discovery_card_grid"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredCards.slice(0, 6).map((card) => (
                <motion.div
                  key={card.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 18,
                    mass: 0.8
                  }}
                  className="group relative h-[380px] rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-end bg-slate-900 cursor-pointer"
                  id={`discovery_card_${card.id}`}
                  onClick={() => handleOpenTour(getTourPackageForCard(card.originalName))}
                >
                  {/* Real destination image */}
                  <img 
                    src={card.image} 
                    alt={`${card.city}, ${card.country}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none pointer-events-none"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-300 group-hover:via-black/45" />
                  
                  {/* Floating Elements / Content overlay */}
                  <div className="relative p-6 z-10 text-left">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-white/90 uppercase bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-md inline-block mb-2 border border-white/5">
                      {card.country}
                    </span>
                    <h3 className="font-serif text-white text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                      {card.city}
                    </h3>
                    
                    {/* Collapsible card description that expands on hover smoothly */}
                    <div className="max-h-0 opacity-0 group-hover:max-h-[85px] group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                      <p className="text-gray-300 text-xs font-normal leading-relaxed mb-4">
                        {card.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2 border-t border-white/10 mt-1">
                      <span className="text-[10px] font-mono text-white/95 font-medium">
                        {card.landmarks.split(',')[0]}
                      </span>
                      
                      {/* Interactive Button */}
                      <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-[#0b2545] flex items-center justify-center transition-all duration-300 shadow-sm">
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Rating / Badge on Top-Right */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="text-[10px] sm:text-xs font-semibold font-mono tracking-wide px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0b2545] shadow-xs flex items-center space-x-1 border border-slate-100">
                      <span className="text-amber-500">★</span>
                      <span>4.9</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View All Tours / Load More Interactive Catalyst */}
          {filteredCards.length > 0 && (
            <div className="text-center mt-12 mb-3" id="home_view_all_tours_btn_row">
              <button
                onClick={() => handlePageChange('tour')}
                className="inline-flex items-center space-x-2 bg-[#0b2545] hover:bg-[#113054] text-white font-space font-bold text-xs tracking-widest uppercase py-4 px-8 rounded-full transition-all shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] duration-205 cursor-pointer"
              >
                <span>View All Tours</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Empty State */}
          {filteredCards.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20 px-6 bg-slate-50/80 rounded-[24px] border border-dashed border-slate-205 max-w-lg mx-auto"
              id="discovery_empty_state"
            >
              <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 text-[#0b2545]">
                <Map className="w-6 h-6 opacity-60" />
              </div>
              <h4 className="text-[#0b2545] text-lg font-bold font-sans">No destinations found</h4>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                We couldn't find any results matching "{discoverSearch}". Try checking your spelling or select another category or filter pill.
              </p>
              <button
                onClick={() => { setDiscoverSearch(''); setSelectedFilter('All'); }}
                className="mt-6 px-5 py-2.5 text-xs font-bold text-white bg-[#0b2545] hover:bg-[#15345c] rounded-full transition-all tracking-wider uppercase shadow-md hover:shadow-lg active:scale-[0.98] duration-150"
              >
                Reset Search Filters
              </button>
            </motion.div>
          )}

        </div>
      </section>

      {/* Modern Testimonials Spotlight Section */}
      <TestimonialsSection />

      </>
    )}

      {/* plan page conditonal block */}
      {currentPage === 'plan' && (
        <>
          {/* EXQUISITE INTERACTIVE TRAVEL PLANNER SECTION */}
          <section className="bg-white py-24 border-b border-gray-150" id="vibe_selector">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Side: Creative Pitch */}
          <div className="md:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#0b2545]/5 rounded-full border border-[#0b2545]/10">
              <Sparkles className="w-3.5 h-3.5 text-[#0b2545]" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#0b2545] font-mono">
                Bespoke Voyage Customizer
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#0b2545] tracking-tight leading-none animate-fade-in-down">
              Interactive <br />
              Voyage Builder & <br />Live Planner
            </h2>
            
            <p className="text-gray-550 text-sm leading-relaxed font-normal">
              Select your favorite travel paradigm on the right panel to instantly check custom premium lodgings, verified itineraries, and tour schedules. Complete the swift consultation query to match coordinates with our head curators.
            </p>

            <div className="p-4 bg-amber-50/70 border border-amber-100 rounded-2xl space-y-1">
              <div className="text-[9px] font-mono tracking-widest font-extrabold text-amber-800 uppercase">
                Selected Vibe Paradigm
              </div>
              <div className="text-sm font-bold capitalize text-slate-850 flex items-center gap-1.5 font-sans">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                <span>{selectedVibe} Escapes & Guided Safaris</span>
              </div>
            </div>
          </div>

          {/* Right Side: The Interactive Board itself */}
          <div className="md:col-span-7 space-y-6">
            
            <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-xs" id="vibe_paradigm_tabs">
              <div className="text-[10px] font-mono tracking-widest font-extrabold text-gray-400 px-3 pt-2 pb-1.5 uppercase text-left">
                Choose Experience Paradigm:
              </div>
              
              <div className="grid grid-cols-3 gap-1">
                {(['coastal', 'culture', 'adventure'] as VibeType[]).map((vibe) => (
                  <button
                    key={vibe}
                    onClick={() => {
                      setSelectedVibe(vibe);
                      setActiveTab('details');
                    }}
                    className={`relative py-3 px-2 rounded-xl text-[11px] font-bold tracking-wide uppercase transition-all duration-300 z-10 cursor-pointer ${
                      selectedVibe === vibe 
                        ? 'bg-[#0b2545] text-white shadow-sm' 
                        : 'text-gray-500 hover:text-black hover:bg-slate-55'
                    }`}
                  >
                    <span className="flex items-center justify-center gap-1.5">
                      {vibe === 'coastal' && <Palmtree className="w-3.5 h-3.5" />}
                      {vibe === 'culture' && <Compass className="w-3.5 h-3.5" />}
                      {vibe === 'adventure' && <Sunset className="w-3.5 h-3.5" />}
                      <span>{vibe}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Vibe Details Board */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedVibe}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4 font-sans"
                id="vibe_details_board"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-left">
                  <span className={`text-[9px] font-mono font-extrabold tracking-widest px-2.5 py-1 rounded-md text-white ${vibeData.vibrantColor}`}>
                    {vibeData.tag}
                  </span>
                  <span className="text-xs font-semibold text-gray-650 flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-[#EF4444]" />
                    {vibeData.landmark}
                  </span>
                </div>

                <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-normal text-left">
                  {vibeData.subTitle}
                </p>

                {/* Sub Tab Controls inside details board */}
                <div className="border-b border-gray-100 flex space-x-4 text-xs font-semibold" id="details_tabs">
                  <button 
                    onClick={() => setActiveTab('details')}
                    className={`pb-2 border-b-2 transition-colors cursor-pointer ${activeTab === 'details' ? 'border-[#0b2545] text-[#0b2545]' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
                  >
                    Experiences Included
                  </button>
                  <button 
                    onClick={() => setActiveTab('itinerary')}
                    className={`pb-2 border-b-2 transition-colors cursor-pointer ${activeTab === 'itinerary' ? 'border-[#0b2545] text-[#0b2545]' : 'border-transparent text-gray-400 hover:text-[#0b2545]'}`}
                  >
                    Quick Booking Request
                  </button>
                </div>

                {/* Tab content rendered with standard client state */}
                {activeTab === 'details' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-left" id="vibe_highlights_grid">
                    {vibeData.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start text-xs text-slate-700 font-medium whitespace-normal" id={`highlight_item_${idx}`}>
                        <CheckCircle2 className={`w-3.5 h-3.5 mr-2 mt-0.5 shrink-0 ${vibeData.accentText}`} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-3" id="booking_form">
                    <div className="text-xs text-gray-500 font-medium text-left">Leave your name to customize a secure {vibeData.duration} journey:</div>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        required
                        value={bookingName}
                        onChange={(e) => setBookingName(e.target.value)}
                        placeholder="Enter your name" 
                        className="flex-1 bg-slate-50 border border-gray-205 rounded-xl px-3.5 py-2 text-xs focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#0b2545]"
                      />
                      <button 
                        type="submit"
                        className="bg-[#0b2545] hover:bg-[#15345c] text-white rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer"
                      >
                        Send Inquiry
                      </button>
                    </div>
                    {showSuccessModal && (
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-2.5 bg-emerald-50 text-emerald-800 text-[11px] rounded-lg border border-emerald-100 flex items-center gap-2 text-left"
                        id="booking_success"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Akwaaba, <strong>{bookingName}</strong>! Our Head of Travel Curator has locked in this selection. We'll consult you shortly!</span>
                      </motion.div>
                    )}
                  </form>
                )}

                {/* Rating & stats */}
                <div className="pt-2 border-t border-gray-150 flex items-center justify-between text-xs text-gray-500 font-mono">
                  <span>Flexible duration: <strong className="text-[#0b2545]">{vibeData.duration}</strong></span>
                  <span className="flex items-center">⭐ <strong className="text-black ml-1 font-sans">{vibeData.rating}</strong></span>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </section>

      {/* INTERACTIVE LUXURY BUDGET & ITINERARY ESTIMATOR SLIDER SUITE */}
      <section className="bg-slate-50 py-24 border-b border-gray-150 animate-fade-in" id="luxury-estimator">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="text-xs font-mono tracking-widest font-extrabold text-amber-600 uppercase">
              Tailored Flight & Hotel Calculators
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-gray-900 tracking-tight">
              Instant Luxury Cost Projection
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Calibrate your travel configuration in real-time. Slide the parameters to review starting rate estimates, luxury accommodation options, and VIP airport fast-track service inclusions.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[32px] border border-gray-200 shadow-xl space-y-10">
            
            {/* Slider Parameters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Parameter 1: Number of Travelers */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold text-gray-850">
                  <span>Number of Travelers</span>
                  <span className="text-[#0b2545] font-mono bg-blue-50 px-2.5 py-1 rounded-md text-xs font-extrabold">{estimateTravelers} {estimateTravelers === 1 ? 'Guest' : 'Guests'}</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="12" 
                  value={estimateTravelers} 
                  onChange={(e) => setEstimateTravelers(parseInt(e.target.value))}
                  className="w-full accent-[#0b2545] h-1.5 bg-gray-100 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[9px] text-gray-400 font-mono">
                  <span>1 Guest</span>
                  <span>6 Guests</span>
                  <span>12 Guests</span>
                </div>
              </div>

              {/* Parameter 2: Duration in Days */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold text-gray-855">
                  <span>Voyage Duration</span>
                  <span className="text-[#0b2545] font-mono bg-blue-50 px-2.5 py-1 rounded-md text-xs font-extrabold">{estimateDays} Nights</span>
                </div>
                <input 
                  type="range" 
                  min="3" 
                  max="24" 
                  value={estimateDays} 
                  onChange={(e) => setEstimateDays(parseInt(e.target.value))}
                  className="w-full accent-[#0b2545] h-1.5 bg-gray-100 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[9px] text-gray-400 font-mono">
                  <span>3 Nights</span>
                  <span>14 Nights</span>
                  <span>24 Nights</span>
                </div>
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 pt-8">
              
              {/* Parameter 3: Lodging tier selection */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-805 block text-left">Accommodation Paradigm</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: '4star', label: 'Boutique 4★', desc: 'Premium Classic' },
                    { id: '5star', label: 'Elite Luxury 5★', desc: 'Curated Mansion' },
                    { id: 'overwater', label: 'Glass Oasis 5★+', desc: 'Overwater Villa' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setEstimateAccom(t.id as any)}
                      className={`p-3 rounded-2xl border text-left flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                        estimateAccom === t.id 
                          ? 'border-[#0b2545] bg-[#0b2545]/5 ring-1 ring-[#0b2545]' 
                          : 'border-gray-200 bg-slate-50 hover:bg-slate-100 text-gray-700'
                      }`}
                    >
                      <span className="text-xs font-black leading-snug">{t.label}</span>
                      <span className="text-[9px] text-gray-400 font-medium leading-none mt-1">{t.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter 4: Royal First-Class flights */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-810 block text-left">Transit Paradigm</label>
                <button
                  type="button"
                  onClick={() => setEstimateFirstClass(!estimateFirstClass)}
                  className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all duration-250 cursor-pointer ${
                    estimateFirstClass 
                      ? 'border-amber-400 bg-amber-50/40 text-amber-950 ring-1 ring-amber-400' 
                      : 'border-gray-200 bg-slate-50 hover:bg-slate-100 text-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">✈️</span>
                    <div className="text-left leading-none">
                      <span className="text-xs font-black">Royal First-Class Upgrade</span>
                      <p className="text-[10px] text-gray-400 font-medium mt-1 leading-snug">Premium suite flights & VIP boarding lounges</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${estimateFirstClass ? 'bg-amber-500 border-amber-600 text-white' : 'border-gray-300'}`}>
                    {estimateFirstClass && <span className="text-[10px] font-bold">✓</span>}
                  </div>
                </button>
              </div>

            </div>

            {/* Calculation Cost Presentation */}
            {(() => {
              const basePrice = 8500;
              const durationCost = 950 * estimateDays;
              const lodgingMultiplier = estimateAccom === '4star' ? 1.0 : estimateAccom === '5star' ? 1.8 : 2.5;
              const flightCost = estimateFirstClass ? 12000 : 0;
              const totalPricePerPerson = Math.round((basePrice + durationCost) * lodgingMultiplier + flightCost);
              const projectedGrandTotal = totalPricePerPerson * estimateTravelers;

              return (
                <div className="bg-[#0b2545] rounded-3xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden" id="estimate_output">
                  {/* Background visual graphics */}
                  <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-slate-55 rounded-full filter blur-3xl opacity-20 pointer-events-none" />
                  
                  <div className="space-y-2 text-center md:text-left relative z-10">
                    <span className="text-[9px] font-mono font-bold tracking-widest text-amber-400 uppercase">Interactive Live Estimate</span>
                    <h3 className="text-2xl md:text-3xl font-serif font-black text-white">Estimated Cost Grand Total</h3>
                    <ul className="text-[11px] text-blue-150 space-y-1 font-sans text-left">
                      <li>• Price per guest: <strong>GH₵ {totalPricePerPerson.toLocaleString()}</strong></li>
                      <li>• Lodging selection: <strong>{estimateAccom === '4star' ? 'Boutique 4★ Inn' : estimateAccom === '5star' ? 'Elite 5★ Mansion' : 'Overwater Glass Oasis'}</strong></li>
                      <li>• Flight Selection: <strong>{estimateFirstClass ? 'Royal First-Class Suite (Included)' : 'Standard Commercial Flights'}</strong></li>
                    </ul>
                  </div>

                  <div className="text-center md:text-right relative z-10 shrink-0">
                    <div className="text-[10px] font-mono text-blue-200 uppercase tracking-widest font-bold">Estimated Grand Total</div>
                    <span className="text-3xl md:text-4xl font-mono font-black text-white tracking-tight">
                      GH₵ {projectedGrandTotal.toLocaleString()}
                    </span>
                    <div className="text-[9px] text-blue-200/85 mt-1">Excludes customized excursion requests</div>
                  </div>
                </div>
              );
            })()}

            {/* Dispatch Planner Consultation Form */}
            <div className="border-t border-gray-100 pt-8" id="estimate_consultation">
              <h4 className="text-base font-serif font-extrabold text-gray-900 mb-4 text-left">Submit This Projection for Priority Curation</h4>
              {showEstimateSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-2"
                >
                  <span className="text-2xl">🎉</span>
                  <h5 className="text-sm font-bold text-emerald-950">Bespoke Inquiry Successfully Dispatched!</h5>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto leading-relaxed">
                    Outstanding selection! Our head travel master has received your specifications. A physical itinerary draft will be sent to you in less than 24 hours. Akwaaba!
                  </p>
                </motion.div>
              ) : (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (estimatorName.trim() && estimatorPhone.trim()) {
                      setShowEstimateSuccess(true);
                      setTimeout(() => {
                        setShowEstimateSuccess(false);
                        setEstimatorName('');
                        setEstimatorPhone('');
                      }, 7000);
                    }
                  }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                >
                  <div>
                    <input 
                      type="text" 
                      placeholder="Enter Full Name" 
                      required
                      value={estimatorName}
                      onChange={(e) => setEstimatorName(e.target.value)}
                      className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3.5 text-xs focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#0b2545]"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="WhatsApp Phone Number" 
                      required
                      value={estimatorPhone}
                      onChange={(e) => setEstimatorPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3.5 text-xs focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#0b2545]"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="bg-[#0b2545] hover:bg-[#15345c] text-white font-sans text-xs font-bold tracking-widest uppercase rounded-xl py-3.5 transition-all text-center cursor-pointer shadow-xs active:scale-95 duration-150"
                  >
                    Dispatch Coordinates →
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      </>
    )}

      {/* Dynamic Consultation modal Overlay */}
        <AnimatePresence>
          {selectedConsultService && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/50 backdrop-blur-xs" 
              id="service_modal_overlay"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl relative"
                id="service_modal_content"
              >
                
                {/* Visual header */}
                <div className="bg-[#0b2545] p-6 text-white relative">
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => setSelectedConsultService(null)}
                      className="text-white/60 hover:text-white bg-white/10 hover:bg-white/20 px-2 py-1 rounded-lg text-xs font-mono"
                    >
                      ✕ CLOSE
                    </button>
                  </div>
                  
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#f0a500]">
                    Officially Vetted Consultation
                  </span>
                  <h3 className="font-serif font-semibold text-xl mt-1 pr-6 leading-tight text-white">
                    {selectedConsultService.name}
                  </h3>
                  <p className="text-white/70 text-xs mt-2 font-normal leading-relaxed">
                    {selectedConsultService.description}
                  </p>
                </div>

                <div className="p-6">
                  {showServiceSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center py-6 space-y-4"
                      id="service_modal_success"
                    >
                      <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-150 flex items-center justify-center text-emerald-600 mx-auto">
                        <CheckCircle2 className="w-6 h-6 animate-bounce" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-gray-800 text-base">Agency Consultation Requested Successfully!</h4>
                        <p className="text-xs text-gray-500 max-w-md mx-auto">
                          Thank you <strong>{serviceContactName}</strong>. Our Head of Travel and Consular Operations is reviewing your documentation parameters.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-2xl text-[11px] text-gray-500 font-medium max-w-sm mx-auto flex items-center justify-between mt-2">
                        <span>Expected Response Window:</span>
                        <span className="font-mono text-[#0b2545] font-extrabold bg-white px-2 py-1 rounded-md border border-gray-150 shadow-2xs">3 to 6 Hours (GMT)</span>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleServiceConsultSubmit} className="space-y-4" id="consultation_form_box">
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-bold font-mono tracking-wider text-slate-500 block uppercase">Full Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={serviceContactName}
                            onChange={(e) => setServiceContactName(e.target.value)}
                            className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-hidden"
                          />
                        </div>
                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-bold font-mono tracking-wider text-slate-500 block uppercase">Email Address *</label>
                          <input
                            type="email"
                            required
                            placeholder="johndoe@example.com"
                            value={serviceContactEmail}
                            onChange={(e) => setServiceContactEmail(e.target.value)}
                            className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-hidden"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5 text-left">
                        <label className="text-[10px] font-bold font-mono tracking-wider text-slate-500 block uppercase">WhatsApp / Telephone</label>
                        <input
                          type="tel"
                          placeholder="+233 (0) 54 000 0000"
                          value={serviceContactPhone}
                          onChange={(e) => setServiceContactPhone(e.target.value)}
                          className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-hidden"
                        />
                      </div>

                      <div className="space-y-1.5 text-left">
                        <label className="text-[10px] font-bold font-mono tracking-wider text-slate-500 block uppercase">Urgent Travel Dates or Consular Target Needs</label>
                        <textarea
                          placeholder="Please mention any key passport urgency, airport paths, preferred travel weeks, or special requests..."
                          value={serviceContactNotes}
                          onChange={(e) => setServiceContactNotes(e.target.value)}
                          rows={3}
                          className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-hidden resize-none"
                        />
                      </div>

                      <div className="pt-2 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                        <div className="flex items-center space-x-1.5 text-emerald-600">
                          <Lock className="w-3.5 h-3.5" />
                          <span>Encrypted Secure Protocol</span>
                        </div>
                        <span>Agency Speed: <strong>{selectedConsultService.timeline}</strong></span>
                      </div>

                      <div className="pt-2 flex gap-3">
                        <button
                          type="button"
                          onClick={() => setSelectedConsultService(null)}
                          className="flex-1 border border-gray-200 text-gray-700 bg-white hover:bg-slate-50 rounded-xl py-3 text-xs font-semibold hover:border-gray-350 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="flex-1 bg-[#0b2545] hover:bg-[#15345c] text-white rounded-xl py-3 text-xs font-bold shadow-lg transition-all"
                        >
                          Send Official Inquiry
                        </button>
                      </div>

                    </form>
                  )}
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic Interactive Tour Package Detail & Booking Modal (Opening as a dedicated whole new page view) */}
        <AnimatePresence>
          {selectedTour && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[120] bg-white flex flex-col h-screen w-screen overflow-hidden" 
              id="tour_modal_overlay"
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="w-full h-full flex flex-col bg-white overflow-hidden relative"
                id="tour_modal_content"
              >
                
                {/* Elegant Full-Page Navigation Header */}
                <div className="bg-white border-b border-gray-150 px-6 py-4 flex items-center justify-between shrink-0 z-50">
                  <button
                    onClick={() => setSelectedTour(null)}
                    className="flex items-center space-x-2.5 text-[#0b2545] hover:text-[#1d4270] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Main Escapes</span>
                  </button>
                  <div className="hidden sm:flex items-center space-x-3">
                    <span className="text-[10px] font-mono tracking-widest text-[#0b2545] uppercase font-extrabold bg-[#0b2545]/5 px-3 py-1 rounded-md border border-[#0b2545]/10">
                      Bespoke Experience Curator
                    </span>
                    <span className="text-xs text-gray-500 font-medium">|</span>
                    <span className="text-xs font-semibold text-gray-700 font-sans">Official Booking Page</span>
                  </div>
                </div>

                {/* Left Area and Right Area Content Body Wrapper */}
                 <div className="flex-1 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden w-full h-full">

                  {/* Left Area: Banner and Tabs (60% width) */}
                  <div className="flex-1 flex flex-col h-auto md:h-full md:overflow-y-auto bg-white" id="tour_modal_left_pane">
                  
                  {/* Hero image header */}
                  <div className="h-48 sm:h-64 md:h-72 w-full relative shrink-0">
                    <img 
                      src={selectedTour.image} 
                      alt={selectedTour.name} 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-black/20" />
                    
                    {/* Badge labels on the imagery */}
                    <div className="absolute bottom-5 left-5 right-5 text-left md:bottom-7 md:left-7">
                      <div className="flex items-center space-x-2.5 mb-2 flex-wrap gap-y-1.5">
                        <span className="bg-amber-600 text-white text-[9px] font-bold font-mono px-2.5 py-1 rounded-md tracking-wider uppercase">
                          {selectedTour.region}
                        </span>
                        <span className="bg-white/25 backdrop-blur-xs text-white text-[9px] font-bold font-mono px-2.5 py-1 rounded-md tracking-wider animate-pulse">
                          ⏱️ {selectedTour.duration}
                        </span>
                        
                      </div>
                      <h2 className="font-display font-black text-white text-lg sm:text-2xl md:text-3xl tracking-tight leading-tight uppercase">
                        {selectedTour.name}
                      </h2>
                    </div>
                  </div>

                  {/* Clean & Elegant Dubai Package Offer Variant Selector */}
                  {DUBAI_PACKAGE_OFFERS.some(o => o.id === selectedTour.id) && (
                    <div className="bg-gradient-to-r from-amber-500/10 via-slate-50 to-amber-500/5 border-b border-amber-200/60 p-4 sm:p-5 md:px-7 shrink-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-3">
                        <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                          <span className="bg-[#0b2545] text-white text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-lg uppercase tracking-wider">
                            Adansi Travels Dubai Offers
                          </span>
                          <span className="bg-emerald-100 text-emerald-800 text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-md flex items-center gap-1 border border-emerald-200">
                            <Sparkles className="w-3 h-3 text-emerald-600 shrink-0" />
                            GH₵500 Discount Applied
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">
                          Select a package offer to view details & book:
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                        {DUBAI_PACKAGE_OFFERS.map((offer) => {
                          const isSelected = selectedTour.id === offer.id;
                          const origPrice = offer.startingPrice + 500;
                          return (
                            <button
                              key={offer.id}
                              type="button"
                              onClick={() => handleOpenTour(offer)}
                              className={`text-left p-2.5 rounded-xl transition-all border cursor-pointer flex flex-col justify-between relative ${
                                isSelected
                                  ? 'bg-white border-amber-500 ring-2 ring-amber-500/30 shadow-md scale-[1.02]'
                                  : 'bg-white/80 border-gray-200 hover:border-gray-300 hover:bg-white'
                              }`}
                            >
                              {isSelected && (
                                <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-slate-950 rounded-full p-0.5 shadow-xs">
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                </span>
                              )}
                              <div>
                                <span className="text-[9px] font-mono font-bold uppercase text-amber-700 block truncate">
                                  {offer.duration}
                                </span>
                                <h5 className="font-extrabold text-slate-900 text-xs leading-snug line-clamp-2 mt-0.5">
                                  {offer.name.replace('ADANSI 13 ', '')}
                                </h5>
                              </div>
                              <div className="mt-2 pt-1.5 border-t border-gray-100 flex items-baseline gap-1 flex-wrap">
                                <span className="text-[10px] text-gray-400 line-through font-mono">
                                  {offer.currency}{origPrice.toLocaleString()}
                                </span>
                                <span className="text-xs font-black text-[#0b2545] font-mono">
                                  {offer.currency}{offer.startingPrice.toLocaleString()}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Curated Sub Tabs Selector Block */}
                  <div className="border-b border-gray-150 bg-slate-50 px-5 py-3 md:px-7 flex flex-wrap items-center gap-1.5 shrink-0" id="tour_subtabs_nav">
                    {[
                      { id: 'description', label: 'Package Description' },
                      { id: 'inclusions', label: 'Inclusions & Exclusions' },
                      { id: 'itinerary', label: 'Itinerary Schedule' },
                      ...(DUBAI_PACKAGE_OFFERS.some(o => o.id === selectedTour.id) ? [{ id: 'dubai-offers', label: '✨ Compare All 6 Dubai Packages' }] : [])
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => {
                          setTourDetailActiveTab(tab.id as any);
                        }}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold tracking-wide transition-all ${
                          tourDetailActiveTab === tab.id
                            ? 'bg-[#0b2545] text-white shadow-xs'
                            : 'text-gray-500 hover:bg-gray-100 hover:text-slate-900'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Dynamic scrollable content area */}
                  <div className="p-5 sm:p-6 md:p-8 flex-1 text-left">
                    {tourDetailActiveTab === 'description' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                      >
                        <div>
                          <h4 className="text-[10px] font-extrabold uppercase font-mono tracking-widest text-[#0b2545] mb-2 flex items-center">
                            <span className="w-1.5 h-3 bg-amber-600 mr-2 rounded-full inline-block"></span>
                            Immersive Travel Overview
                          </h4>
                          <p className="text-gray-650 text-sm md:text-base leading-relaxed font-normal">
                            {selectedTour.description}
                          </p>
                        </div>
                        
                        <div className="bg-slate-50 p-5 rounded-2xl border border-gray-150">
                          <h5 className="font-bold text-gray-800 text-xs mb-3 flex items-center tracking-wide uppercase font-mono">
                            <Sparkles className="w-4 h-4 text-amber-500 mr-1.5 shrink-0" />
                            Highlight Travel Milestones
                          </h5>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-600">
                            {selectedTour.timelineDays.slice(0, 6).map((day, idx) => (
                              <div key={idx} className="flex items-start">
                                <span className="bg-white px-1.5 py-0.5 font-mono font-bold text-[#0b2545] rounded-md border text-[9px] mr-2 shrink-0">{day.day}</span>
                                <span className="font-medium text-slate-800 shrink-1">{day.title}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {tourDetailActiveTab === 'inclusions' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                      >
                        {/* What's Included */}
                        <div>
                          <h4 className="text-[10px] font-extrabold uppercase font-mono tracking-widest text-emerald-700 mb-3.5 flex items-center">
                            <span className="w-1.5 h-3 bg-emerald-600 mr-2 rounded-full inline-block"></span>
                            What Is Included (`What's Included`)
                          </h4>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {selectedTour.inclusions.map((item, idx) => (
                              <div 
                                key={idx} 
                                className="flex items-center space-x-2.5 p-3 rounded-2xl bg-emerald-50/20 border border-emerald-100 hover:border-emerald-200 transition-all"
                              >
                                <div className="w-4.5 h-4.5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 select-none">
                                  <span className="text-[10px] font-extrabold font-sans">✓</span>
                                </div>
                                <span className="text-slate-850 text-xs font-semibold">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* What's Excluded */}
                        <div>
                          <h4 className="text-[10px] font-extrabold uppercase font-mono tracking-widest text-rose-700 mb-3.5 flex items-center">
                            <span className="w-1.5 h-3 bg-rose-600 mr-2 rounded-full inline-block"></span>
                            Exclusions (`Not Included`)
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {selectedTour.exclusions.map((item, idx) => (
                              <div 
                                key={idx} 
                                className="flex items-center space-x-2.5 p-3 rounded-2xl bg-rose-50/20 border border-rose-100 hover:border-rose-200 transition-all"
                              >
                                <div className="w-4.5 h-4.5 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 shrink-0 select-none font-bold">
                                  <span className="text-[10px]">✕</span>
                                </div>
                                <span className="text-slate-700 text-xs font-normal capitalize">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {tourDetailActiveTab === 'itinerary' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                      >
                        <h4 className="text-[10px] font-extrabold uppercase font-mono tracking-widest text-[#0b2545] mb-4 flex items-center">
                          <span className="w-1.5 h-3 bg-amber-600 mr-2 rounded-full inline-block"></span>
                          Complete Day-by-Day Route Itinerary
                        </h4>
                        
                        <div className="relative border-l-2 border-slate-150 ml-3 pl-6 space-y-5">
                          {selectedTour.timelineDays.map((day, idx) => (
                            <div key={idx} className="relative">
                              {/* Connector Point */}
                              <div className="absolute -left-[32px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#0b2545] flex items-center justify-center z-10">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                              </div>
                              
                              <div className="space-y-1 bg-slate-50 p-4 rounded-2xl border border-slate-150 hover:border-slate-350 transition-colors">
                                <span className="text-[9px] font-mono font-bold text-amber-700 uppercase tracking-widest">
                                  {day.day}
                                </span>
                                <h5 className="font-display font-extrabold text-gray-800 text-sm leading-snug">
                                  {day.title}
                                </h5>
                                <p className="text-gray-500 text-xs font-normal leading-relaxed">
                                  {day.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {tourDetailActiveTab === 'dubai-offers' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-[10px] font-extrabold uppercase font-mono tracking-widest text-[#0b2545] flex items-center">
                              <span className="w-1.5 h-3 bg-amber-600 mr-2 rounded-full inline-block"></span>
                              All 6 Exclusive Adansi Travels Dubai Offers
                            </h4>
                            <span className="text-emerald-700 bg-emerald-50 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-emerald-200">
                              ✨ GH₵500 Instant Discount Applied
                            </span>
                          </div>
                          <p className="text-gray-500 text-xs font-normal">
                            Explore each specially curated Dubai package offer. Select any package below to switch your booking view instantly.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {DUBAI_PACKAGE_OFFERS.map((offer) => {
                            const isSelected = selectedTour.id === offer.id;
                            const origPrice = offer.startingPrice + 500;
                            return (
                              <div
                                key={offer.id}
                                className={`p-4 rounded-2xl border transition-all flex flex-col justify-between space-y-3 relative ${
                                  isSelected
                                    ? 'bg-amber-500/5 border-amber-500 shadow-md ring-1 ring-amber-500'
                                    : 'bg-slate-50/80 border-gray-200 hover:border-gray-300 hover:bg-white'
                                }`}
                              >
                                {isSelected && (
                                  <span className="absolute top-3 right-3 bg-amber-500 text-slate-950 font-bold text-[9px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                                    <CheckCircle2 className="w-3 h-3" /> ACTIVE SELECTION
                                  </span>
                                )}

                                <div>
                                  <div className="flex items-center space-x-2 mb-1">
                                    <span className="bg-[#0b2545] text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded">
                                      {offer.duration}
                                    </span>
                                    
                                  </div>

                                  <h5 className="font-extrabold text-slate-900 text-sm leading-snug">
                                    {offer.name}
                                  </h5>

                                  <p className="text-gray-500 text-xs mt-1.5 line-clamp-2">
                                    {offer.description}
                                  </p>
                                </div>

                                <div className="pt-3 border-t border-gray-150 flex items-center justify-between">
                                  <div>
                                    <span className="text-[10px] text-gray-400 line-through font-mono block">
                                      {offer.currency}{origPrice.toLocaleString()}
                                    </span>
                                    <span className="text-base font-black text-[#0b2545] font-mono">
                                      {offer.currency}{offer.startingPrice.toLocaleString()}
                                    </span>
                                  </div>

                                  <button
                                    type="button"
                                    onClick={() => handleOpenTour(offer)}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                      isSelected
                                        ? 'bg-amber-500 text-slate-950 shadow-xs'
                                        : 'bg-[#0b2545] text-white hover:bg-[#15345c]'
                                    }`}
                                  >
                                    {isSelected ? 'Currently Viewing' : 'Select Package'}
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Right Area: Contact / Passenger selection panel (40% width) */}
                <div className="w-full md:w-[380px] lg:w-[420px] border-t md:border-t-0 md:border-l border-gray-150 bg-slate-50 flex flex-col justify-between shrink-0 h-auto md:h-full md:overflow-y-auto" id="tour_modal_right_pane">
                  {tourBookingSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-6 md:p-8 text-center h-full flex flex-col items-center justify-center space-y-5"
                      id="tour_booking_success_card"
                    >
                      <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      
                      <div className="space-y-1.5">
                        <span className="text-[9px] font-mono font-extrabold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
                          VOUCHER RECEIVED
                        </span>
                        <h3 className="font-display font-black text-xl text-gray-900 tracking-tight leading-none mt-2.5">
                          Spot Reserved!
                        </h3>
                        <p className="text-[12px] text-gray-500 max-w-xs leading-relaxed mx-auto font-normal">
                          Akwaaba, <strong>{tourContactName}</strong>! Our ticketing systems have authenticated your pre-registration lock.
                        </p>
                      </div>

                      {/* Receipt Ticket Box */}
                      <div className="w-full bg-white border border-gray-250 rounded-2xl p-4.5 text-left text-xs divide-y shrink-0 space-y-3.5 divide-gray-100 shadow-2xs">
                        <div className="pt-0 flex justify-between items-center text-[9px] uppercase font-mono font-medium text-gray-400">
                          <span>Security Ticket ID</span>
                          <span className="font-bold text-slate-800">TTP-VRC-{selectedTour.id.slice(5).toUpperCase()}</span>
                        </div>
                        <div className="pt-2.5 flex justify-between items-start">
                          <span className="text-gray-500 font-medium shrink-0">Selected Spaces:</span>
                          <span className="text-right font-mono font-bold text-slate-800 leading-snug">
                            {(Object.entries(travelerCounts) as [string, number][])
                              .filter(([_, count]) => count > 0)
                              .map(([label, count]) => `${count}x ${label}`)
                              .join(', ') || "1x Adult"}
                          </span>
                        </div>
                        <div className="pt-2.5 flex justify-between items-center">
                          <span className="text-gray-500 font-medium">Representative:</span>
                          <span className="font-bold text-slate-800">{tourContactName}</span>
                        </div>
                        <div className="pt-2.5 flex justify-between items-center text-sm">
                          <span className="font-bold text-[#0b2545]">Vetted Total Price:</span>
                          <span className="font-mono font-black text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-150">{selectedTour.currency}{calculatedTotal.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="w-full space-y-2 flex-col">
                        <div className="bg-slate-150 p-3.5 rounded-2xl text-[10px] text-gray-500 font-normal leading-relaxed text-left border mb-2">
                          💡 The head of travel operations is queuing your booking details. Standard callback timing takes **1 to 2 hours** to email ({tourContactEmail}) or call your telephone ({tourContactPhone}) to finalize flight seats and passports.
                        </div>
                        
                        <button
                          type="button"
                          onClick={() => setSelectedTour(null)}
                          className="w-full bg-slate-900 border border-slate-950 text-white hover:bg-slate-950 py-3 rounded-2xl text-xs font-bold transition-all uppercase tracking-wide cursor-pointer"
                        >
                          Acknowledge & Close
                        </button>
                      </div>
                    </motion.div>
                  ) : showCheckoutForm ? (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-5 md:p-7 flex flex-col h-full justify-between"
                      id="tour_booking_form_wrapper"
                    >
                      <div className="space-y-4 text-left">
                        <button
                          type="button"
                          onClick={() => setShowCheckoutForm(false)}
                          className="text-[10px] text-gray-500 hover:text-black font-mono font-bold uppercase tracking-wider flex items-center mb-1 cursor-pointer"
                        >
                          ← BACK TO PRICING DETAILS
                        </button>
                        
                        <div>
                          <span className="text-[9px] font-mono font-black text-amber-700 tracking-widest uppercase block">
                            secure travel package rate
                          </span>
                          <h3 className="font-display font-black text-lg text-slate-900 tracking-tight leading-tight uppercase">
                            Representative Contact
                          </h3>
                        </div>

                        <form onSubmit={handleTourBookingSubmit} className="space-y-3.5" id="checkout_details_form">
                          <div className="space-y-1">
                            <label className="text-[9px] font-bold font-mono text-slate-500 block uppercase">Full Representative Name *</label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Ama Serwaa"
                              value={tourContactName}
                              onChange={(e) => setTourContactName(e.target.value)}
                              className="w-full bg-white border border-gray-250 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-hidden"
                            />
                          </div>
                          
                          <div className="space-y-1">
                            <label className="text-[9px] font-bold font-mono text-slate-500 block uppercase">Preferred Email *</label>
                            <input
                              type="email"
                              required
                              placeholder="e.g. amaserwaa@example.com"
                              value={tourContactEmail}
                              onChange={(e) => setTourContactEmail(e.target.value)}
                              className="w-full bg-white border border-gray-250 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-hidden"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[9px] font-bold font-mono text-slate-500 block uppercase">Phone / Whatsapp *</label>
                            <input
                              type="tel"
                              required
                              placeholder="e.g. +233 (0) 244 555 666"
                              value={tourContactPhone}
                              onChange={(e) => setTourContactPhone(e.target.value)}
                              className="w-full bg-white border border-gray-250 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-hidden"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[9px] font-bold font-mono text-slate-500 block uppercase">Preferred Travel Month / Timing *</label>
                            <input
                              type="text"
                              required
                              value={tourContactDate}
                              onChange={(e) => setTourContactDate(e.target.value)}
                              placeholder="e.g. Flexible / Desired Month"
                              className="w-full bg-white border border-gray-250 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-[#0b2545] focus:outline-hidden font-mono"
                            />
                          </div>

                          <div className="bg-slate-200/50 p-4 rounded-xl border border-slate-300 text-[10px] text-gray-500 font-normal leading-normal">
                            <div className="flex justify-between items-center mb-1 font-bold text-slate-700">
                              <span>Summed Reservation Price:</span>
                              <span className="font-mono text-xs">{selectedTour.currency}{calculatedTotal.toLocaleString()}</span>
                            </div>
                            <span>Securing locks your rate before any flights seat hikes. No online credit card debit occurs yet. Invoice documentation will be dispatched.</span>
                          </div>

                          <button
                            type="submit"
                            disabled={tourBookingLoading}
                            className="w-full bg-black hover:bg-slate-800 text-white font-sans rounded-xl py-3 text-xs font-bold shadow-lg transition-all uppercase tracking-wide flex items-center justify-center space-x-2 cursor-pointer"
                          >
                            {tourBookingLoading ? (
                              <span>ISSUING RESERVATION CODE...</span>
                            ) : (
                              <span>SECURE PROMOTIONAL PRICE</span>
                            )}
                          </button>
                        </form>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="p-5 md:p-7 flex flex-col h-full justify-between" id="tour_passengers_calculator">
                      
                      {/* Top Selection */}
                      <div className="space-y-4 text-left">
                        <div>
                          <span className="text-[9px] font-mono font-extrabold text-amber-600 tracking-widest uppercase block mb-1">
                            PROPORTIONAL SCHEME
                          </span>
                          <div className="flex items-baseline space-x-1">
                            <span className="text-[10px] text-slate-400 font-bold uppercase font-mono">FROM</span>
                            <span className="text-xl font-mono font-black text-slate-905">
                              {selectedTour.currency}{selectedTour.startingPrice.toLocaleString()}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-2.5">
                          <label className="text-[9px] font-bold font-sans text-[#0b2545] tracking-widest block uppercase border-b pb-2">
                            SELECT TRAVELERS
                          </label>

                          <div className="space-y-2.5 divide-y divide-gray-100 max-h-[35vh] overflow-y-auto pr-1" id="pricing-selector-rows">
                            {selectedTour.travelerPricing.map((pricing) => {
                              const count = travelerCounts[pricing.id] || 0;
                              return (
                                <div 
                                  key={pricing.id} 
                                  className="flex items-center justify-between pt-2.5 first:pt-0"
                                >
                                  <div className="text-left py-0.5">
                                    <h5 className="text-xs font-bold text-gray-800 leading-none">{pricing.label}</h5>
                                    <span className="text-[10px] text-gray-400 font-mono mt-1 block">{selectedTour.currency}{pricing.price.toLocaleString()}</span>
                                  </div>

                                  <div className="flex items-center space-x-2.5">
                                    {/* Decrement */}
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setTravelerCounts(prev => ({
                                          ...prev,
                                          [pricing.id]: Math.max(0, (prev[pricing.id] || 0) - 1)
                                        }));
                                      }}
                                      disabled={count === 0}
                                      className={`w-6.5 h-6.5 rounded-full flex items-center justify-center transition-all border shrink-0 ${
                                        count === 0 
                                          ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50/50' 
                                          : 'border-slate-300 hover:border-slate-800 text-slate-800 bg-white hover:bg-slate-100'
                                      }`}
                                    >
                                      <Minus className="w-3 h-3" />
                                    </button>

                                    {/* Count */}
                                    <span className="w-4 text-center text-xs font-mono font-bold text-slate-900 select-none shrink-0">
                                      {count}
                                    </span>

                                    {/* Increment */}
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setTravelerCounts(prev => ({
                                          ...prev,
                                          [pricing.id]: (prev[pricing.id] || 0) + 1
                                        }));
                                      }}
                                      className="w-6.5 h-6.5 rounded-full border border-slate-300 hover:border-slate-800 text-slate-800 bg-white hover:bg-slate-100 flex items-center justify-center transition-all shrink-0"
                                    >
                                      <Plus className="w-3 h-3" />
                                    </button>

                                    {/* Subtotal */}
                                    {count > 0 && (
                                      <span className="text-[10px] font-mono font-bold text-emerald-700 w-16 text-right break-words shrink-0">
                                        {selectedTour.currency}{(pricing.price * count).toLocaleString()}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Summary Pricing & Action */}
                      <div className="pt-3 border-t border-gray-250 mt-3 space-y-3">
                        <div className="bg-white p-4.5 rounded-2xl border border-gray-150 flex items-center justify-between">
                          <div className="text-left">
                            <span className="text-[9px] text-gray-400 font-bold block uppercase tracking-wider font-mono">Calculated Total</span>
                            <span className="text-xl font-mono font-black text-[#0b2545]">
                              {selectedTour.currency}{calculatedTotal.toLocaleString()}
                            </span>
                          </div>
                          {calculatedTotal === 0 && (
                            <span className="text-[9px] text-amber-605 bg-amber-50 px-2 py-1 rounded-md text-right font-medium leading-none max-w-[130px]">Please select traveler volume.</span>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            if (calculatedTotal > 0) {
                              setShowCheckoutForm(true);
                            }
                          }}
                          disabled={calculatedTotal === 0}
                          className={`w-full py-3.5 rounded-xl text-xs font-bold tracking-widest transition-all flex items-center justify-center space-x-2 select-none cursor-pointer ${
                            calculatedTotal === 0
                              ? 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none border border-transparent'
                              : 'bg-[#0b2545] text-white hover:bg-slate-900 hover:shadow-md'
                          }`}
                        >
                          <span>PROCEED TO BOOK</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>
                  )}
                </div>

                {/* Closing tag for our left/right custom flexible body wrapper */}
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      {/* tour page conditional block */}
      {currentPage === 'tour' && (
        <>
          {/* CURATED INTERACTIVE VOYAGES DISCOVERY HUB */}
          <section className="py-24 bg-white relative overflow-hidden animate-fade-in" id="curated-tours">
            {/* Subtle decorative elements for premium design */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-30 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
              
              {/* Header Area */}
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs font-mono font-bold tracking-widest text-[#0b2545] bg-[#0b2545]/5 px-3.5 py-1.5 rounded-full uppercase inline-block mb-3">
                  Dream, Plan, Explore
                </span>
                <h2 className="font-space font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter text-[#0b2545] uppercase leading-[0.98] mb-6" id="discovery_title">
                  YOU PICK THE PLACE,<br className="hidden sm:inline" /> WE PLAN THE JOURNEY
                </h2>
                <p className="text-gray-500 font-normal text-sm md:text-base leading-relaxed max-w-2xl mx-auto" id="discovery_description">
                  Whether you're dreaming of tropical beaches, vibrant cities, mountain escapes, or cultural adventures, we'll help turn your travel goals into unforgettable experiences.
                </p>
              </div>

              {/* Destination Filters */}
              <div className="flex justify-center mb-6 w-full" id="discovery_filters_wrapper">
                <div className="flex overflow-x-auto pb-4 pt-1 px-4 gap-2.5 no-scrollbar max-w-full md:flex-wrap md:justify-center scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                  {DISCOVERY_FILTERS.map((filter) => {
                    const isActive = selectedFilter === filter;
                    return (
                      <button
                        key={filter}
                        id={`filter_pill_${filter.toLowerCase().replace(/\s+/g, '_')}`}
                        onClick={() => setSelectedFilter(filter)}
                        className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase whitespace-nowrap transition-all duration-350 transform active:scale-95 border-2 ${
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

              {/* Large Pill-Design Search Bar */}
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
                    className="w-full pl-12 pr-12 py-4 bg-white border-2 border-slate-250 rounded-full text-sm text-[#0b2545] font-medium placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#0b2545]/5 focus:border-[#0b2545] transition-all duration-300 shadow-sm"
                  />
                  {discoverSearch && (
                    <button
                      onClick={() => setDiscoverSearch("")}
                      className="absolute inset-y-0 right-0 pr-5 flex items-center text-xs font-bold text-slate-400 hover:text-[#0b2545] transition-colors"
                    >
                      CLEAR
                    </button>
                  )}
                </div>
              </div>

              {/* Dynamic Grid Layout */}
              <motion.div 
                variants={DISCOVERY_GRID_VARIANTS}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
                id="discovery_card_grid"
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  {filteredCards.map((card) => (
                    <motion.div
                      key={card.id}
                      layout
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                      transition={{ 
                        type: "spring",
                        stiffness: 100,
                        damping: 18,
                        mass: 0.8
                      }}
                      className="group relative h-[380px] rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-end bg-slate-900 cursor-pointer"
                      id={`discovery_card_${card.id}`}
                      onClick={() => handleOpenTour(getTourPackageForCard(card.originalName))}
                    >
                      {/* Real destination image */}
                      <img 
                        src={card.image} 
                        alt={`${card.city}, ${card.country}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none pointer-events-none"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-300 group-hover:via-black/45" />
                      
                      {/* Floating Elements / Content overlay */}
                      <div className="relative p-6 z-10 text-left">
                        <span className="text-[10px] font-mono font-bold tracking-widest text-white/90 uppercase bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-md inline-block mb-2 border border-white/5">
                          {card.country}
                        </span>
                        <h3 className="font-serif text-white text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                          {card.city}
                        </h3>
                        
                        {/* Collapsible card description that expands on hover smoothly */}
                        <div className="max-h-0 opacity-0 group-hover:max-h-[85px] group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                          <p className="text-gray-300 text-xs font-normal leading-relaxed mb-4">
                            {card.description}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between pt-2 border-t border-white/10 mt-1">
                          <span className="text-[10px] font-mono text-white/95 font-medium">
                            {card.landmarks.split(',')[0]}
                          </span>
                          
                          {/* Interactive Button */}
                          <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-[#0b2545] flex items-center justify-center transition-all duration-300 shadow-sm">
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </div>

                      {/* Rating / Badge on Top-Right */}
                      <div className="absolute top-4 right-4 z-10">
                        <div className="text-[10px] sm:text-xs font-semibold font-mono tracking-wide px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0b2545] shadow-xs flex items-center space-x-1 border border-slate-100">
                          <span className="text-amber-500">★</span>
                          <span>4.9</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* Empty State */}
              {filteredCards.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-20 px-6 bg-slate-50/80 rounded-[24px] border border-dashed border-slate-205 max-w-lg mx-auto"
                  id="discovery_empty_state"
                >
                  <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 text-[#0b2545]">
                    <Map className="w-6 h-6 opacity-60" />
                  </div>
                  <h4 className="text-[#0b2545] text-lg font-bold font-sans">No destinations found</h4>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    We couldn't find any results matching "{discoverSearch}". Try checking your spelling or select another category or filter pill.
                  </p>
                  <button
                    onClick={() => { setDiscoverSearch(''); setSelectedFilter('All'); }}
                    className="mt-6 px-5 py-2.5 text-xs font-bold text-white bg-[#0b2545] hover:bg-[#15345c] rounded-full transition-all tracking-wider uppercase shadow-md hover:shadow-lg active:scale-[0.98] duration-150"
                  >
                    Reset Search Filters
                  </button>
                </motion.div>
              )}

            </div>
          </section>

      </>
    )}

      {/* Contact Us Page Block */}
      {currentPage === 'contact' && (
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="pt-32 pb-24 bg-[#f8f9fa] min-h-screen relative overflow-hidden animate-fade-in" 
          id="contact_page"
        >
          {/* Subtle decoration elements */}
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-slate-100 rounded-full blur-3xl opacity-40 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-start">
              
              {/* Left Column: Get in touch & Info (Matches Mockup Left Side) */}
              <div className="md:col-span-5 lg:col-span-4 text-left space-y-8" id="contact_info_column">
                <div className="space-y-6">
                  <h1 className="font-space font-black text-slate-900 text-5xl sm:text-[54px] tracking-tight leading-[1.08] uppercase">
                    Get in &mdash;<br />
                    touch with us
                  </h1>
                  
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-sm font-sans font-medium">
                    We're here to help! Whether you have a question about our services, need assistance with your account, or want to provide feedback, our team is ready to assist you.
                  </p>
                </div>

                <div className="space-y-6 pt-2">
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-gray-400 uppercase font-black tracking-wider">Email:</div>
                    <a 
                      href="mailto:Info@thetourismpeoplegh.com" 
                      className="text-lg font-black text-[#0b2545] hover:underline block cursor-pointer transition-colors"
                    >
                      Info@thetourismpeoplegh.com
                    </a>
                  </div>

                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-gray-400 uppercase font-black tracking-wider">Phone / WhatsApp:</div>
                    <a 
                      href="tel:+233542722608" 
                      className="text-lg font-black text-[#0b2545] hover:underline block cursor-pointer transition-colors"
                    >
                      0542722608
                    </a>
                  </div>

                  <div className="text-[11px] font-mono font-medium text-gray-400 uppercase tracking-wide">
                    Available Monday to Friday, 9 AM - 6 PM GMT
                  </div>
                </div>

                {/* Live Chat / WhatsApp Button */}
                <div className="pt-4 flex flex-col items-start relative">
                  <a 
                    href="https://wa.me/233542722608?text=Hello%20The%20Tourism%20People%2C%20I%20would%20like%20to%20inquire%20about%20your%20travel%20packages%20and%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black hover:bg-neutral-850 text-white select-none pl-6 pr-1.5 py-1.5 rounded-full flex items-center space-x-6 text-[11px] font-extrabold tracking-widest uppercase transition-all duration-300 transform active:scale-95 cursor-pointer shadow-md border border-neutral-800"
                    id="live_chat_button"
                  >
                    <span>Live Chat (WhatsApp)</span>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xs">
                      <ArrowRight className="w-4 h-4 text-black" />
                    </div>
                  </a>
                </div>
              </div>

              {/* Middle Column: Unaltered Attached Image Panel (Using image as background) */}
            

              {/* Right Column: White Card Form (Matches Mockup Right Side Card) */}
              <div className="md:col-span-7 lg:col-span-8" id="contact_form_column">
                <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-slate-150/40 shadow-md">
                  <AnimatePresence mode="wait">
                    {!contactFormSubmitted ? (
                      <motion.form 
                        key="contact-form"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -10 }}
                        onSubmit={handleContactSubmit}
                        className="space-y-5"
                        id="contact_interactive_form"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* First Name Input */}
                          <div className="flex flex-col space-y-1.5 text-left">
                            <label className="text-[11px] font-bold text-slate-700 tracking-tight">First Name</label>
                            <input 
                              type="text"
                              required
                              placeholder="Enter your first name..."
                              value={contactFormFirstName}
                              onChange={(e) => setContactFormFirstName(e.target.value)}
                              className="w-full px-4 py-3 bg-[#f8f9fa] border border-slate-200 rounded-xl text-xs font-semibold text-[#0b2545] focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-slate-400 transition-all font-sans"
                            />
                          </div>

                          {/* Last Name Input */}
                          <div className="flex flex-col space-y-1.5 text-left">
                            <label className="text-[11px] font-bold text-slate-700 tracking-tight">Last Name</label>
                            <input 
                              type="text"
                              required
                              placeholder="Enter your last name..."
                              value={contactFormLastName}
                              onChange={(e) => setContactFormLastName(e.target.value)}
                              className="w-full px-4 py-3 bg-[#f8f9fa] border border-slate-200 rounded-xl text-xs font-semibold text-[#0b2545] focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-slate-400 transition-all font-sans"
                            />
                          </div>
                        </div>

                        {/* Email Address Input */}
                        <div className="flex flex-col space-y-1.5 text-left">
                          <label className="text-[11px] font-bold text-slate-700 tracking-tight">Email</label>
                          <input 
                            type="email"
                            required
                            placeholder="Enter your email address..."
                            value={contactFormEmail}
                            onChange={(e) => setContactFormEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-[#f8f9fa] border border-slate-200 rounded-xl text-xs font-semibold text-[#0b2545] focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-slate-400 transition-all font-sans"
                          />
                        </div>

                        {/* Travel Vision / Message Input */}
                        <div className="flex flex-col space-y-1.5 text-left">
                          <label className="text-[11px] font-bold text-slate-700 tracking-tight">How can we help you?</label>
                          <textarea 
                            required
                            rows={5}
                            placeholder="Enter your message..."
                            value={contactFormMessage}
                            onChange={(e) => setContactFormMessage(e.target.value)}
                            className="w-full px-4 py-3 bg-[#f8f9fa] border border-slate-200 rounded-xl text-xs font-semibold text-[#0b2545] focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-slate-400 transition-all resize-none leading-relaxed font-sans"
                          />
                        </div>

                        {/* Submit Button aligned bottom right */}
                        <div className="flex justify-end pt-2">
                          <button
                            type="submit"
                            disabled={contactFormLoading}
                            className="bg-black hover:bg-neutral-850 text-white select-none pl-6 pr-1.5 py-1.5 rounded-full flex items-center space-x-6 text-[11px] font-extrabold tracking-widest uppercase transition-all duration-300 transform active:scale-95 cursor-pointer shadow-md border border-neutral-800"
                          >
                            <span>{contactFormLoading ? 'Sending...' : 'Send Message'}</span>
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xs">
                              <ArrowRight className="w-4 h-4 text-black" />
                            </div>
                          </button>
                        </div>
                      </motion.form>
                    ) : (
                      <motion.div 
                        key="contact-success"
                        initial={{ opacity: 0, scale: 0.98, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="bg-emerald-50/10 rounded-2xl p-6 border border-emerald-100 text-left relative"
                        id="contact_success_receipt"
                      >
                        <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        
                        <h4 className="font-space font-black text-xl text-[#0b2545] uppercase tracking-wide mb-2 animate-fade-in">
                          Thank You For Reaching Out
                        </h4>
                        
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                          Hi <strong>{contactFormFirstName} {contactFormLastName}</strong>, your request has been logged successfully. Our dedicated vacation specialists are reviewing your suggestions and will connect with you at <strong>{contactFormEmail}</strong> as quickly as possible.
                        </p>

                        <button
                          onClick={() => {
                            setContactFormSubmitted(false);
                            setContactFormFirstName('');
                            setContactFormLastName('');
                            setContactFormEmail('');
                            setContactFormMessage('');
                          }}
                          className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#0b2545] hover:underline flex items-center space-x-1 cursor-pointer"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          <span>SEND ANOTHER MESSAGE</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

            </div>
          </div>
        </motion.section>
      )}

      {/* FOOTER */}
      <FooterSection onPageChange={handlePageChange} logoUrl={logoImage} />

    </div>
  );
}
