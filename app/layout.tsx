import type { Metadata } from "next";
import { Outfit, Cormorant } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://house-of-order.pages.dev"),
  title: {
    default: "House of Order | Home Organizing & Styling in Miami",
    template: "%s | House of Order",
  },
  description:
    "Professional home organization and styling services in Miami. Transform your space into an organized, serene environment. Curating Order. Creating Harmony.",
  keywords: [
    "home organization",
    "professional organizer",
    "Miami",
    "home styling",
    "decluttering",
    "closet organization",
    "pantry organization",
    "home organizer Miami",
    "professional organizing services",
  ],
  authors: [{ name: "House of Order" }],
  creator: "House of Order",
  publisher: "House of Order",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "House of Order | Home Organizing & Styling",
    description:
      "Transform your space into an organized, serene environment. Curating Order. Creating Harmony.",
    url: "https://house-of-order.pages.dev",
    siteName: "House of Order",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "House of Order - Beautifully organized home spaces",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "House of Order | Home Organizing & Styling",
    description:
      "Transform your space into an organized, serene environment. Curating Order. Creating Harmony.",
    images: [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1200&h=630&fit=crop&q=80",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
