import { useState } from "react";
import HeroSection from "../components/home/HeroSection";
import InnovaShowcaseSection from "../components/home/InnovaShowcaseSection";
import ServicesSection from "../components/home/ServicesSection";
import TrustedSection from "../components/home/TrustedSection";
import BookingPopup from "../components/common/BookingPopup";

const Home = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <HeroSection
        onBookNow={() => setBookingOpen(true)}
      />
      <TrustedSection />
      <InnovaShowcaseSection />
      <ServicesSection />
      <BookingPopup
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </>
  );
};

export default Home;
