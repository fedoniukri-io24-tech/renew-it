import type { Metadata } from "next";
import { absoluteUrl, SITE, SITE_URL } from "./site";

type PageMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
};

export function createPageMetadata(options: PageMetadataOptions = {}): Metadata {
  const pageTitle = options.title ?? SITE.tagline;
  const description = options.description ?? SITE.description;
  const canonicalPath = options.path ?? "/";
  const canonical = absoluteUrl(canonicalPath);
  const ogImage = absoluteUrl(SITE.socialImage);
  const fullTitle = `${pageTitle} | ${SITE.name}`;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url: canonical,
      siteName: SITE.name,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1672,
          height: 941,
          alt: SITE.socialImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: options.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.tagline} | ${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  applicationName: SITE.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "business",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE_URL,
    siteName: SITE.name,
    title: `${SITE.tagline} | ${SITE.name}`,
    description: SITE.description,
    images: [
      {
        url: absoluteUrl(SITE.socialImage),
        width: 1672,
        height: 941,
        alt: SITE.socialImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.tagline} | ${SITE.name}`,
    description: SITE.description,
    images: [absoluteUrl(SITE.socialImage)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
