import type { Metadata, Viewport } from "next";
import "@fontsource/anton/400.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#ff7a00",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tafenergies.com"),
  title: "TAF Master Optima 20W-50 API SM | Heavy-Duty Engine Protection",
  description:
    "Master Optima 20W-50 API SM multi-grade gasoline engine oil. Engineered in the UAE and distributed across Ethiopia by TAF Energies PLC. High-shear protection, ZDDP anti-wear chemistry, and thermal stability for legacy and high-mileage engines.",
  keywords: [
    "TAF Energies PLC",
    "Master Optima 20W-50",
    "API SM engine oil",
    "gasoline motor oil Ethiopia",
    "Addis Ababa lubricants",
    "high-mileage engine oil",
    "20W-50 motor oil UAE",
    "heavy-duty gasoline oil",
  ],
  authors: [{ name: "TAF Energies PLC" }],
  openGraph: {
    title: "TAF Master Optima 20W-50 API SM Engine Oil",
    description:
      "High-shear protection, ZDDP anti-wear barrier, and deposit control for older and high-mileage gasoline engines. Made in UAE, distributed by TAF Energies PLC in Ethiopia.",
    url: "https://tafenergies.com",
    siteName: "TAF Energies PLC",
    images: [
      {
        url: "/images/bottle-cutout.png",
        width: 800,
        height: 800,
        alt: "TAF Master Optima 20W-50 SM 4L Canister",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TAF Master Optima 20W-50 API SM Engine Oil",
    description:
      "Engineered in UAE for high-mileage engines. Distributed across Ethiopia by TAF Energies PLC.",
    images: ["/images/bottle-cutout.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full bg-ink text-paper selection:bg-flame-500 selection:text-ink">
        {children}
      </body>
    </html>
  );
}
