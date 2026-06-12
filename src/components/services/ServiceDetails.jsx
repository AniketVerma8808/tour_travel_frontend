import {
  Plane,
  MapPinned,
  Route,
  Building2,
  HeartHandshake,
  Train,
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Transfer",
  },
  {
    icon: MapPinned,
    title: "Kashi Darshan",
  },
  {
    icon: Route,
    title: "Outstation Tours",
  },
  {
    icon: Building2,
    title: "Corporate Travel",
  },
  {
    icon: HeartHandshake,
    title: "Wedding Travel",
  },
  {
    icon: Train,
    title: "Railway Pickup",
  },
];

const ServiceDetails = () => {
  return (
    <section className="section-padding bg-[#111111]">

      <div className="container-custom">

        <div className="text-center">
          <span className="section-subtitle">
            What We Offer
          </span>

          <h2 className="section-title mt-4">
            Designed For Every
            <span className="gradient-text block">
              Travel Requirement
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-14">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="glass-card p-8 hover-lift"
              >
                <Icon
                  size={34}
                  className="text-[#C9A227]"
                />

                <h3 className="text-2xl mt-5">
                  {service.title}
                </h3>

                <p className="mt-4">
                  Comfortable travel experience
                  with professional drivers and
                  premium Innova Crysta service.
                </p>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default ServiceDetails;