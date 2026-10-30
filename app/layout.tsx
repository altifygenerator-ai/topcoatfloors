import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Top Coat Texas | Epoxy Floors & Concrete Coatings | Houston, TX",
  description: "Metallic epoxy, flake epoxy, polished concrete and concrete coatings for homes and businesses in Houston, Texas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=Barlow:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
