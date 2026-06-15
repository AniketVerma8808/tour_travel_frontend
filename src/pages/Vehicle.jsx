import VehicleHero from "../components/vehicle/VehicleHero";
import FeaturedFleet from "../components/vehicle/FeaturedFleet";
import VehicleFeatures from "../components/vehicle/VehicleFeatures";
import WhyChooseOurFleet from "../components/vehicle/WhyChooseOurFleet";
import CTA from "../components/common/CTA";

const Vehicle = () => {
  return (
    <>
      <VehicleHero />

      <FeaturedFleet />

      <VehicleFeatures />

      <WhyChooseOurFleet />

      <CTA
        title="Ready To Book "
        highlight="Your Ride?"
        description="Choose your preferred vehicle and enjoy a safe, comfortable and luxurious journey with Saroj Kashi Travels."
      />
    </>
  );
};

export default Vehicle;