import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

const DEFAULT_TITLE = "The Tourism People GH | Luxury Ghana Tours, Safaris & Bespoke Escapes";
const DEFAULT_DESC = "Premier Ghana tour operator and bespoke travel concierge. Book curated Ghana safaris, Cape Coast heritage tours, Dubai holiday packages, and consular visa services.";
const DEFAULT_KEYWORDS = "The Tourism People GH, Ghana tourism, Ghana travel agency, luxury tours Ghana, safaris Ghana, Cape Coast castle tour, Accra city tour, Dubai tour packages Ghana, US visa Ghana, UK visa Ghana, Schengen visa Ghana, passport services Accra";
const BASE_URL = "https://thetourismpeoplegh.com";
const DEFAULT_IMAGE = `${BASE_URL}/favicon-192x192.png`;

export const SEO: React.FC<SEOProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  keywords = DEFAULT_KEYWORDS,
  canonical = "/",
  ogType = "website",
  ogImage = DEFAULT_IMAGE,
  schema
}) => {
  const fullCanonical = canonical.startsWith("http") ? canonical : `${BASE_URL}${canonical.startsWith("/") ? canonical : `/${canonical}`}`;
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage.startsWith("/") ? ogImage : `/${ogImage}`}`;

  // Default TravelAgency Structured Data
  const defaultAgencySchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "The Tourism People GH",
    "url": BASE_URL,
    "logo": `${BASE_URL}/favicon-192x192.png`,
    "image": fullOgImage,
    "description": DEFAULT_DESC,
    "telephone": "+233 24 000 0000",
    "email": "concierge@thetourismpeoplegh.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Airport Residential Area",
      "addressLocality": "Accra",
      "addressRegion": "Greater Accra",
      "addressCountry": "GH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "5.6037",
      "longitude": "-0.1870"
    },
    "priceRange": "$$$",
    "currenciesAccepted": "USD, GHS, EUR, GBP"
  };

  const structuredData = schema 
    ? Array.isArray(schema) 
      ? [defaultAgencySchema, ...schema] 
      : [defaultAgencySchema, schema]
    : defaultAgencySchema;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="The Tourism People GH" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
