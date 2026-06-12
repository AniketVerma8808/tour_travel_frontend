import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";
import CTA from "../components/common/CTA";

const Contact = () => {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <CTA
  title="Book Your Premium Ride"
  highlight="Today"
  description="Airport Transfer, Kashi Darshan, Outstation Tours and Premium Innova Crysta bookings available 24/7."
  showWhatsapp={true}
/>
    </>
  );
};

export default Contact;