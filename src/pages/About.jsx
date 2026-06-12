import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import JourneyTimeline from "../components/about/JourneyTimeline";
import WhyChooseUs from "../components/about/WhyChooseUs";
import CTA from "../components/common/CTA";


const About = () => {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <WhyChooseUs />
      <JourneyTimeline />
      <CTA
        title="Ready To Travel"
        highlight="In Comfort & Luxury?"
        description="Book your Innova Crysta today for airport transfers, local sightseeing and outstation tours."
        showWhatsapp={false}
        bgClass="bg-[#111111]"
      />
    </>
  );
};

export default About;