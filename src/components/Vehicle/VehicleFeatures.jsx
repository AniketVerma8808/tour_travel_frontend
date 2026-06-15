import {
  Shield,
  Wifi,
  Snowflake,
  MapPinned,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safe Journey",
  },
  {
    icon: Wifi,
    title: "Free WiFi",
  },
  {
    icon: Snowflake,
    title: "AC Comfort",
  },
  {
    icon: MapPinned,
    title: "GPS Tracking",
  },
];

const VehicleFeatures = () => {
  return (
    <section className="pb-24">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="glass-card p-8 text-center"
            >
              <item.icon
                size={42}
                className="text-[#C9A227] mx-auto mb-4"
              />

              <h3 className="text-xl">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleFeatures;