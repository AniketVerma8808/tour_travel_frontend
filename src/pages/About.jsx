import { useState } from "react";
import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import JourneyTimeline from "../components/about/JourneyTimeline";
import WhyChooseUs from "../components/about/WhyChooseUs";
import CTA from "../components/common/CTA";
import BookingPopup from "../components/common/BookingPopup";
import OwnerSection from "../components/about/OwnerSection";


const About = () => {
  const [openBooking, setOpenBooking] = useState(false);

  return (
    <>
      <AboutHero />
      <AboutStory />
      <WhyChooseUs />
      <OwnerSection/>
      <JourneyTimeline />
      <CTA
        title="Ready To Travel"
        highlight="In Comfort & Luxury?"
        description="Book your Innova Crysta today for airport transfers, local sightseeing and outstation tours."
        showWhatsapp={false}
        bgClass="bg-[#111111]"
        onBookNow={() => setOpenBooking(true)}
      />
      <BookingPopup
        isOpen={openBooking}
        onClose={() => setOpenBooking(false)}
      />
    </>
  );
};

export default About;