import { FAQ_ITEMS } from "@/lib/faq";
import { HOW_IT_WORKS_STEPS, LICENSE_SERVICE_FEE } from "@/lib/how-it-works";
import { absoluteUrl, SITE, SITE_SERVICES, SITE_URL } from "@/lib/site";

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function buildServiceOffers(services: readonly string[]) {
  return services.map((name) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name,
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: SITE.location.country,
      },
    },
  }));
}

export default function StructuredData() {
  const allServices = [
    ...SITE_SERVICES.corporate,
    ...SITE_SERVICES.visas,
    ...SITE_SERVICES.other,
  ];

  const organization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(SITE.logo),
    },
    image: absoluteUrl(SITE.socialImage),
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phoneE164,
    foundingDate: "2014",
    slogan: SITE.tagline,
    knowsAbout: SITE.keywords.slice(0, 20),
    areaServed: [
      {
        "@type": "Country",
        name: SITE.location.country,
      },
      {
        "@type": "AdministrativeArea",
        name: "Dubai",
      },
      {
        "@type": "AdministrativeArea",
        name: "Abu Dhabi",
      },
      {
        "@type": "AdministrativeArea",
        name: "Sharjah",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.location.city,
      addressRegion: SITE.location.region,
      addressCountry: SITE.location.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.location.latitude,
      longitude: SITE.location.longitude,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phoneE164,
        email: SITE.email,
        contactType: "customer service",
        areaServed: SITE.location.countryCode,
        availableLanguage: ["English", "Arabic"],
      },
    ],
    sameAs: [SITE.whatsapp],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE.name,
    url: SITE_URL,
    image: absoluteUrl(SITE.socialImage),
    description: SITE.shortDescription,
    telephone: SITE.phoneE164,
    email: SITE.email,
    priceRange: "AED 299+",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.location.city,
      addressRegion: SITE.location.region,
      addressCountry: SITE.location.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.location.latitude,
      longitude: SITE.location.longitude,
    },
    areaServed: {
      "@type": "Country",
      name: SITE.location.country,
    },
    parentOrganization: {
      "@id": `${SITE_URL}/#organization`,
    },
    knowsAbout: [
      "UAE trade license renewal",
      "UAE visa renewal",
      "Emirates ID renewal",
      "Golden Visa UAE",
      "Corporate service provider Dubai",
      "Free zone license renewal",
      "Mainland company renewal",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "UAE Renewal Services",
      itemListElement: buildServiceOffers(allServices),
    },
    makesOffer: {
      "@type": "Offer",
      name: LICENSE_SERVICE_FEE.name,
      description: LICENSE_SERVICE_FEE.description,
      price: LICENSE_SERVICE_FEE.amount,
      priceCurrency: LICENSE_SERVICE_FEE.currency,
      url: absoluteUrl("/#offer"),
      availability: "https://schema.org/InStock",
      areaServed: {
        "@type": "Country",
        name: SITE.location.country,
      },
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE.name,
    alternateName: ["Renew It", "RenewIt", "renew-it.ae"],
    description: SITE.shortDescription,
    inLanguage: ["en-AE", "en"],
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "CommunicateAction",
      name: "Request a renewal quote",
      target: absoluteUrl("/#contact"),
    },
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: buildFullTitle(),
    description: SITE.description,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(SITE.socialImage),
      width: 1672,
      height: 941,
      caption: SITE.socialImageAlt,
    },
    inLanguage: "en-AE",
    dateModified: new Date().toISOString().slice(0, 10),
    breadcrumb: {
      "@id": `${SITE_URL}/#breadcrumb`,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".heroTitle", ".heroSubtitle"],
    },
    mainEntity: {
      "@id": `${SITE_URL}/#localbusiness`,
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: absoluteUrl("/#services"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Contact",
        item: absoluteUrl("/#contact"),
      },
    ],
  };

  const serviceList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/#services`,
    name: "UAE documents Renew-It can renew",
    numberOfItems: allServices.length,
    itemListElement: allServices.map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      url: absoluteUrl("/#services"),
    })),
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${SITE_URL}/#howto`,
    name: "How to renew UAE documents with Renew-It",
    description:
      "Four simple steps to renew trade licenses, visas, Emirates IDs and corporate documents across the UAE.",
    totalTime: "P7D",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: LICENSE_SERVICE_FEE.currency,
      value: String(LICENSE_SERVICE_FEE.amount),
    },
    step: HOW_IT_WORKS_STEPS.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.text,
      url: absoluteUrl(`/#how-it-works`),
    })),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLdScript data={organization} />
      <JsonLdScript data={localBusiness} />
      <JsonLdScript data={website} />
      <JsonLdScript data={webPage} />
      <JsonLdScript data={breadcrumb} />
      <JsonLdScript data={serviceList} />
      <JsonLdScript data={howTo} />
      <JsonLdScript data={faqPage} />
    </>
  );
}

function buildFullTitle(): string {
  return `${SITE.title} | ${SITE.name}`;
}
