import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./ui/typography.css";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import CTA from "./Layout/CTA";
import CTAConditional from "./Layout/CTAExclusion";
import I18nProvider from './components/I18nProvider'; // Make sure path is correct
import FooterConditional from "./Layout/FooterExclusion";
import { Toaster } from "react-hot-toast";

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
          <FooterConditional />
          
           <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 4000,
              style: {
                background: "#FFFFFF",
                color: "#000000",
                border: "1px solid #1E293B",
                zIndex: 9999990000,
                position: "relative",
              },
              success: {
                iconTheme: {
                  primary: "#22C55E",
                  secondary: "#FFFFFF",
                },
              },
              error: {
                iconTheme: {
                  primary: "#EF4444",
                  secondary: "#FFFFFF",
                },
              },
            }}
          />
        </I18nProvider> {/* UNCOMMENTED */}
      </body>
    </html>
  );
}