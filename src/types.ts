export type VibeType = 'coastal' | 'culture' | 'adventure';

export interface VibeData {
  tag: string;
  subTitle: string;
  landmark: string;
  duration: string;
  rating: string;
  highlights: string[];
  vibrantColor: string;
  accentText: string;
}

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

export interface TimelineDay {
  day: string;
  title: string;
  desc: string;
}

export interface TravelerPrice {
  id: string;
  label: string;
  subLabel: string;
  price: number;
}

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
  timelineDays: TimelineDay[];
  travelerPricing: TravelerPrice[];
}

export interface DestinationCard {
  id: string;
  originalName: string;
  country: string;
  city: string;
  filterCategory: string;
  image: string;
  description: string;
  landmarks: string;
}
