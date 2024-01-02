import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/native/Navbar";
interface Metadata {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url: string;
  siteName?: string;
  type?: string;
  locale?: string;
  author?: string;
  twitterHandle?: string;
  social: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Painting Agency",
  description: `Discover unmatched construction expertise in Johannesburg with Digital Painting Agency. 
                Specializing in precise painting, paving, plumbing, and more. Elevate your spaces with our craftsmanship!`,
  keywords: [
   "Construction experts",
  "Painting specialists",
  "Johannesburg builders",
  "Paving services",
  "Plumbing solutions",
  "Built-in cabinets",
  "Tennis court revamps",
  "Precision craftsmanship",
  "Residential construction",
  "Digital Painting Agency"
  ],
  image:
    "https://res.cloudinary.com/dq4ceizj6/image/upload/v1704137208/digital_painting_agency/paving/IMG-20231231-WA0235_dt3rtm.jpg",
  url: "https://dpa.vertueal.com",
  siteName: "Digital Painting Agency",
  type: "website",
  locale: "en_US",
  author: "Larry Codes",
  twitterHandle: "@dpa_vertueal",
  social: {
    twitter: "https://twitter.com/dpa_vertueal",
    facebook: "https://www.facebook.com/dpa_vertueal",
    instagram: "https://www.instagram.com/dpa_vertueal",
    linkedin: "https://www.linkedin.com/in/dpa_vertueal",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="   ">
          <Navbar />
        </div>

        {children}
      </body>
    </html>
  );
}
