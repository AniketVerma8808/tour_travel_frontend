import AboutCTA from "../components/about/AboutCTA";
import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import JourneyTimeline from "../components/about/JourneyTimeline";
import WhyChooseUs from "../components/about/WhyChooseUs";


const About = () => {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <WhyChooseUs />
      <JourneyTimeline />
      <AboutCTA />
    </>
  );
};

export default About;