import "./globals.css";
import Cursor from "@/components/Cursor";
import SiteFx from "@/components/SiteFx";

export const metadata = {
  title: "Jeremy Ellsworth Designs LLC | Premium Brand & Vehicle Wrap Design Services",
  description:
    "je.design — Building Brands That Empower Growth. Tailored creative solutions, logo design, and vehicle wrap services that make your business stand out.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,100..900;1,62..125,100..900&family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=Caveat:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Cursor />
        {children}
        <SiteFx />
      </body>
    </html>
  );
}
