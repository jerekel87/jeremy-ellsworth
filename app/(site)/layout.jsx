import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import VideoLightbox from "@/components/VideoLightbox";
import GoogleBadge from "@/components/GoogleBadge";

export default function SiteLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ContactModal />
      <VideoLightbox />
      <GoogleBadge />
    </>
  );
}
