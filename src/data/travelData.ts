import { VibeType, VibeData, TravelService, TourPackage, DestinationCard } from '../types';

// Asset Images
// @ts-ignore
import airplaneImage from '../assets/images/airplane_window_travel_1780755588338.png';
// @ts-ignore
import beachImage from '../assets/images/tropical_beach_hammock_1780755605622.png';
// @ts-ignore
import logoImage from '../assets/images/The tourism People 2-01.png';
// @ts-ignore
import luxuryDestinationImage from '../assets/images/luxury_destination_santorini_1781099766214.png';
// @ts-ignore
import chicagoBeanImage from '../assets/images/chicago_bean_1781105228499.png';
// @ts-ignore
import statueOfLibertyImage from '../assets/images/statue_of_liberty_1781105242101.png';
// @ts-ignore
import maldivesPavilionImage from '../assets/images/maldives_pavilion_1781105569700.png';
// @ts-ignore
import saSafariSpringbokImage from '../assets/images/sa_safari_springbok_1781106600913.png';
// @ts-ignore
import saDrakensbergPoolImage from '../assets/images/sa_drakensberg_pool_1781106614554.png';
// @ts-ignore
import saCapetownStadiumImage from '../assets/images/sa_capetown_stadium_1781106625964.png';
// @ts-ignore
import saCapetownSunsetImage from '../assets/images/sa_capetown_sunset_1781106638544.png';
// @ts-ignore
import zanzibarBeachBoatsImage from '../assets/images/zanzibar_beach_boats_1781107094826.png';
// @ts-ignore
import zanzibarAerialVillasImage from '../assets/images/zanzibar_aerial_villas_1781107110717.png';
// @ts-ignore
import zanzibarWoodenJettyImage from '../assets/images/zanzibar_wooden_jetty_1781107123345.png';
// @ts-ignore
import dubaiMuseumImage from '../assets/images/dubai_museum_future_1781108110543.png';
// @ts-ignore
import dubaiBurjImage from '../assets/images/dubai_burj_khalifa_1781108125416.png';
// @ts-ignore
import dubaiBeachWomenImage from '../assets/images/dubai_beach_women_1782830100208.jpg';
// @ts-ignore
import dubaiCoverImage from '../assets/images/dubai cover.jpeg';
// @ts-ignore
import usaCoverImage from '../assets/images/USA cover.jpeg';
// @ts-ignore
import europeCoverImage from '../assets/images/Europe cover.jpeg';
// @ts-ignore
import saCoverImage from '../assets/images/SA cover.jpeg';
// @ts-ignore
import ukCoverImage from '../assets/images/UK cover.jpeg';
// @ts-ignore
import moroccoWaterfallImage from '../assets/images/morocco_waterfall_ouzoud_1781108376554.png';
// @ts-ignore
import moroccoAitBenhaddouImage from '../assets/images/morocco_ait_benhaddou_1781108392646.png';
// @ts-ignore
import ukWindsorCastleImage from '../assets/images/uk_windsor_castle_1781109135700.png';
// @ts-ignore
import ukTowerBridgeImage from '../assets/images/uk_tower_bridge_1781109151328.png';
// @ts-ignore
import ukStonehengeImage from '../assets/images/uk_stonehenge_1781109167836.png';

export {
  airplaneImage,
  beachImage,
  logoImage,
  luxuryDestinationImage,
  chicagoBeanImage,
  statueOfLibertyImage,
  maldivesPavilionImage,
  saSafariSpringbokImage,
  saDrakensbergPoolImage,
  saCapetownStadiumImage,
  saCapetownSunsetImage,
  zanzibarBeachBoatsImage,
  zanzibarAerialVillasImage,
  zanzibarWoodenJettyImage,
  dubaiMuseumImage,
  dubaiBurjImage,
  dubaiBeachWomenImage,
  dubaiCoverImage,
  usaCoverImage,
  europeCoverImage,
  saCoverImage,
  ukCoverImage,
  moroccoWaterfallImage,
  moroccoAitBenhaddouImage,
  ukWindsorCastleImage,
  ukTowerBridgeImage,
  ukStonehengeImage
};

export const VIBE_DETAILS: Record<VibeType, VibeData> = {
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

export const INITIAL_DEMO_DESTINATIONS = [
  "Dubai",
  "Maldives",
  "Bali",
  "Zanzibar",
  "United Kingdom",
  "United States"
];

export const getVisaDestinationsList = () => {
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

export const DESTINATIONS = getVisaDestinationsList();

export const DESTINATION_INFO: Record<string, { desc: string; landmarks: string }> = {
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

export function getDestinationImages(destinationName: string): string[] {
  const name = destinationName.toLowerCase();
  if (name.includes("dubai")) {
    return [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=compress&cs=tinysrgb&w=800", // Burj Al Arab
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=compress&cs=tinysrgb&w=800", // Burj Khalifa
      dubaiMuseumImage,
      dubaiBurjImage
    ];
  }
  if (name.includes("maldives")) {
    return [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=compress&cs=tinysrgb&w=800",
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=compress&cs=tinysrgb&w=800",
      maldivesPavilionImage,
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=compress&cs=tinysrgb&w=800"
    ];
  }
  if (name.includes("bali")) {
    return [
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=compress&cs=tinysrgb&w=800",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=compress&cs=tinysrgb&w=800",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=compress&cs=tinysrgb&w=800",
      "https://images.unsplash.com/photo-1540206395-68808572332f?auto=compress&cs=tinysrgb&w=800"
    ];
  }
  if (name.includes("zanzibar")) {
    return [
      zanzibarBeachBoatsImage,
      zanzibarAerialVillasImage,
      zanzibarWoodenJettyImage,
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=compress&cs=tinysrgb&w=800"
    ];
  }
  if (name.includes("china")) {
    return [
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=compress&cs=tinysrgb&w=800",
      "https://images.unsplash.com/photo-1547989453-11e67ffb3885?auto=compress&cs=tinysrgb&w=800",
      "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?auto=compress&cs=tinysrgb&w=800",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=compress&cs=tinysrgb&w=800"
    ];
  }
  if (name.includes("kingdom") || name.includes("uk")) {
    return [
      ukWindsorCastleImage,
      ukTowerBridgeImage,
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=compress&cs=tinysrgb&w=800",
      ukStonehengeImage
    ];
  }
  if (name.includes("united states") || name.includes("us")) {
    return [
      chicagoBeanImage,
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=compress&cs=tinysrgb&w=800",
      statueOfLibertyImage,
      "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=compress&cs=tinysrgb&w=800"
    ];
  }
  if (name.includes("europe") || name.includes("schengen")) {
    return [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=compress&cs=tinysrgb&w=800",
      "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=compress&cs=tinysrgb&w=800",
      "https://images.unsplash.com/photo-1473896100090-53523650d4c6?auto=compress&cs=tinysrgb&w=800",
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=compress&cs=tinysrgb&w=800"
    ];
  }
  if (name.includes("morocco")) {
    return [
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=compress&cs=tinysrgb&w=800",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=compress&cs=tinysrgb&w=800",
      moroccoWaterfallImage,
      moroccoAitBenhaddouImage
    ];
  }
  if (name.includes("south africa") || name.includes("southafrica")) {
    return [
      saSafariSpringbokImage,
      saDrakensbergPoolImage,
      saCapetownStadiumImage,
      saCapetownSunsetImage
    ];
  }

  return [
    "https://images.unsplash.com/photo-1506013013876-0bf8d4f9c101?auto=compress&cs=tinysrgb&w=800", 
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=compress&cs=tinysrgb&w=800", 
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=compress&cs=tinysrgb&w=800", 
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=compress&cs=tinysrgb&w=800"
  ];
}

export const DISCOVERY_GRID_VARIANTS = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

export const DISCOVERY_CARD_VARIANTS = {
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

export const DISCOVERY_FILTERS = [
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

export const destinationCards: DestinationCard[] = DESTINATIONS.map(dest => {
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
    startingPrice: 29140,
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
    startingPrice: 31350,
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
    startingPrice: 29725,
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
    startingPrice: 33170,
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
    startingPrice: 32715,
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
    startingPrice: 28000,
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
