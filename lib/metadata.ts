import type { Metadata } from "next";
import { absoluteUrl, SITE, SITE_URL } from "./site";

type PageMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
};

function buildFullTitle(pageTitle: string): string {
  return `${pageTitle} | ${SITE.name}`;
}

function buildOpenGraphImage() {
  return {
    url: absoluteUrl(SITE.socialImage),
    secureUrl: absoluteUrl(SITE.socialImage),
    width: 1672,
    height: 941,
    alt: SITE.socialImageAlt,
    type: "image/png",
  };
}

function buildRobots(noIndex = false): NonNullable<Metadata["robots"]> {
  if (noIndex) {
    return { index: false, follow: false };
  }

  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  };
}

function buildGeoTags(): NonNullable<Metadata["other"]> {
  return {
    "geo.region": SITE.location.geoRegion,
    "geo.placename": SITE.location.city,
    "geo.position": `${SITE.location.latitude};${SITE.location.longitude}`,
    ICBM: `${SITE.location.latitude}, ${SITE.location.longitude}`,
    "content-language": "en-AE",
    coverage: SITE.coverage,
    target: "all",
    audience: "individuals, families, businesses in the UAE",
    "revisit-after": "7 days",
    rating: "general",
    distribution: "global",
  };
}

function buildSocialMetadata(
  pageTitle: string,
  description: string,
  canonical: string,
): Pick<Metadata, "openGraph" | "twitter"> {
  const fullTitle = buildFullTitle(pageTitle);
  const ogImage = buildOpenGraphImage();

  return {
    openGraph: {
      type: "website",
      locale: SITE.locale,
      alternateLocale: [...SITE.alternateLocales],
      url: canonical,
      siteName: SITE.name,
      title: fullTitle,
      description,
      countryName: SITE.location.country,
      emails: [SITE.email],
      phoneNumbers: [SITE.phoneE164],
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: {
        url: ogImage.url,
        alt: SITE.socialImageAlt,
      },
    },
  };
}

export function createPageMetadata(options: PageMetadataOptions = {}): Metadata {
  const pageTitle = options.title ?? SITE.title;
  const description = options.description ?? SITE.description;
  const canonicalPath = options.path ?? "/";
  const canonical = absoluteUrl(canonicalPath);

  return {
    title: pageTitle,
    description,
    keywords: [...SITE.keywords],
    alternates: {
      canonical,
    },
    ...buildSocialMetadata(pageTitle, description, canonical),
    robots: buildRobots(options.noIndex),
    other: buildGeoTags(),
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: buildFullTitle(SITE.title),
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  abstract: SITE.abstract,
  keywords: [...SITE.keywords],
  applicationName: SITE.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "business",
  classification: "Corporate Service Provider, UAE renewals, immigration services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    shortcut: "/favicon.png",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: SITE.name,
    statusBarStyle: "default",
  },
  alternates: {
    canonical: SITE_URL,
  },
  ...buildSocialMetadata(SITE.title, SITE.description, SITE_URL),
  robots: buildRobots(),
  other: buildGeoTags(),
};
