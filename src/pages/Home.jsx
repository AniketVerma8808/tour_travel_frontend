import { useState } from "react";
import HeroSection from "../components/home/HeroSection";
import InnovaShowcaseSection from "../components/home/InnovaShowcaseSection";
import ServicesSection from "../components/home/ServicesSection";
import TrustedSection from "../components/home/TrustedSection";
import BookingPopup from "../components/common/BookingPopup";
import FeaturedPackagesSection from "../components/home/FeaturedPackagesSection";
import TestimonialsSlider from "../components/home/TestimonialsSlider";
import CTA from "../components/common/CTA";

const Home = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <HeroSection
        onBookNow={() => setBookingOpen(true)}
      />

      <TrustedSection />

      <FeaturedPackagesSection />

      <InnovaShowcaseSection />

      <ServicesSection />

      <TestimonialsSlider />

      <CTA
        subtitle="Ready To Travel"
        title="Book Your Premium Ride"
        highlight="Today"
        description="Airport Transfer, Kashi Darshan, Outstation Tours and Premium Innova Crysta bookings available 24/7."
        showWhatsapp={false}
        onBookNow={() => setBookingOpen(true)}
        callNumber="+919695957772"
      />

      <BookingPopup
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </>
  );
};

export default Home;