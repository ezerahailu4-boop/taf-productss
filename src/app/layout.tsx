import type { Metadata } from "next";
import "@fontsource/anton/400.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Master Optima 20W-50 SM | TAF Energies",
  description:
    "Master Optima 20W-50 SM — premium multi-grade gasoline engine oil. Engineered protection against wear, deposits, and thermal breakdown for older and high-mileage engines.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-ink text-paper">{children}</body>
    </html>
  );
}
