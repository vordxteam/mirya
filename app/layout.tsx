import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./ui/typography.css";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import CTA from "./Layout/CTA";
import CTAConditional from "./Layout/CTAExclusion";
import I18nProvider from './components/I18nProvider'; // Make sure path is correct

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mirya",
  description: "Automate Anything - No Code - No Promises - No Limit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased overflow-x-hidden`}>
        <I18nProvider> {/* UNCOMMENTED */}
          <Header />
          <div className="pt-[124px]">{children}</div>
          <CTAConditional/>
          <Footer />
        </I18nProvider> {/* UNCOMMENTED */}
      </body>
    </html>
  );
}