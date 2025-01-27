import "../globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import Navbar from "@src/layouts/Navbar";
import Footer from "@src/layouts/Footer";
import siteConfig from "site.config";
import { nunitoFont } from "@src/utils/fonts";

export function generateStaticParams() {
  return siteConfig.locales.map((locale) => ({ locale }));
}

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={nunitoFont.className} lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

const BASE_URL = "https://serdargokhan.dev";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: "Default SEO Title",
      template: "%s | Serdar Gökhan",
    },
    description: "Default SEO Description",
    icons: {
      shortcut: "/favicon.ico",
      apple: "static/apple-icon.png",
      other: [
        {
          url: "static/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          url: "static/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
      ],
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
    alternates: {
      languages: {
        "x-default": BASE_URL,
        en: `${BASE_URL}/en`,
        tr: `${BASE_URL}/tr`,
      },
      canonical: BASE_URL,
    },
    verification: {
      google: "UJthXaWw4SK7do_wKDjzQXss3tPHWfF0dXCBjfQrZek",
    },
    twitter: {
      card: "summary_large_image",
      creator: "@serdarrgokhann",
    },
    openGraph: {
      title: "Serdar Gökhan",
      description: "Default SEO Description",
      url: BASE_URL,
      siteName: "Serdar Gökhan",
      locale: "en",
      type: "website",
    },
  };
}
