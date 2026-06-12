import ServicesHero from "../components/services/ServicesHero";
import ServiceDetails from "../components/services/ServiceDetails";
import ServiceProcess from "../components/services/ServiceProcess";
import ServiceBenefits from "../components/services/ServiceBenefits";
import CTA from "../components/common/CTA";

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServiceDetails />
      <ServiceProcess />
      <ServiceBenefits />
      <CTA
        title="Ready To Travel"
        highlight="In Comfort & Luxury?"
        description="Book your premium Innova Crysta today and enjoy a safe, comfortable and memorable journey."
        showWhatsapp={false}
        bgClass="bg-[#080808]"
      />
    </>
  );
};

export default Services;