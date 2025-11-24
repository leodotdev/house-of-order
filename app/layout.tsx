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
  title: "House of Order | Home Organizing & Styling",
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
  ],
  openGraph: {
    title: "House of Order | Home Organizing & Styling",
    description:
      "Transform your space into an organized, serene environment. Curating Order. Creating Harmony.",
    type: "website",
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
