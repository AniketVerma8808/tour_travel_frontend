import {
  Plane,
  MapPinned,
  Building2,
  Train,
  HeartHandshake,
  Route,
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Transfer",
    description:
      "Timely pickup and drop services for domestic and international flights.",
  },
  {
    icon: MapPinned,
    title: "Kashi Darshan",
    description:
      "Comfortable sightseeing tours covering major temples and attractions.",
  },
  {
    icon: Route,
    title: "Outstation Tours",
    description:
      "Convenient travel for Ayodhya, Prayagraj and nearby destinations.",
  },
  {
    icon: Building2,
    title: "Corporate Travel",
    description:
      "Professional transportation solutions for meetings and business trips.",
  },
  {
    icon: HeartHandshake,
    title: "Wedding Travel",
    description:
      "Elegant transportation arrangements for wedding guests and families.",
  },
  {
    icon: Train,
    title: "Railway Pickup",
    description:
      "Reliable pickup and drop services from all major railway stations.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-[#111111] relative overflow-hidden">
      {/* Glow */}

      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227]/10 blur-[180px]" />

      <div className="container-custom relative z-10">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="section-subtitle">
            Our Services
          </span>

          <h2 className="section-title mt-4">
            Travel Solutions For
            <span className="gradient-text block">
              Every Journey
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto">
            Whether you need local sightseeing, airport
            transfers or long-distance travel, we provide
            comfortable transportation tailored to your
            requirements.
          </p>
        </div>

        {/* Services Grid */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="glass-card p-8 hover-lift"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#C9A227]/10 flex items-center justify-center">
                  <Icon
                    size={30}
                    className="text-[#C9A227]"
                  />
                </div>

                <h3 className="text-2xl mt-6">
                  {service.title}
                </h3>

                <p className="mt-4">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;