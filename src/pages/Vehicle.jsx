
import CTA from "../components/common/CTA";
import FeaturedFleet from "../components/Vehicle/FeaturedFleet";
import VehicleFeatures from "../components/Vehicle/VehicleFeatures";
import VehicleHero from "../components/Vehicle/VehicleHero";

const Vehicle = () => {
  return (
    <>
      <VehicleHero />
      <VehicleFeatures />
      <FeaturedFleet />
      <CTA
        title="Ready To Book "
        highlight="Your Ride?"
        description="Choose your preferred vehicle and enjoy a safe, comfortable and luxurious journey with Saroj Kashi Travels."
      />
    </>
  );
};

export default Vehicle;