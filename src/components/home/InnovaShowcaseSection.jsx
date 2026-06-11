import {
  Users,
  Briefcase,
  Snowflake,
  Fuel,
  CheckCircle2,
} from "lucide-react";

import heroInnova from "../../assets/hero-innova.webp";

const features = [
  "Premium Captain Comfort",
  "Spacious Leg Room",
  "Large Luggage Capacity",
  "Professional Chauffeur",
  "Perfect For Family Trips",
  "Ideal For Long Distance Travel",
];

const specs = [
  {
    icon: Users,
    value: "7",
    label: "Seater",
  },
  {
    icon: Briefcase,
    value: "5+",
    label: "Luggage",
  },
  {
    icon: Snowflake,
    value: "Dual",
    label: "AC Zones",
  },
  {
    icon: Fuel,
    value: "Tour",
    label: "Ready",
  },
];

const InnovaShowcaseSection = () => {
  return (
    <section className="section-padding bg-[#080808] relative overflow-hidden">
      {/* Glow */}

      <div className="absolute left-0 top-0 w-96 h-96 bg-[#C9A227]/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#C9A227]/10 blur-[180px]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">
          {/* Image */}

          <div className="relative">
            <div className="absolute inset-0 bg-[#C9A227]/10 blur-[100px]" />

            <img
              src={heroInnova}
              alt="Toyota Innova Crysta"
              className="relative z-10 w-full hero-car"
            />

            {/* Floating Badge */}

            <div className="absolute bottom-5 left-5 glass-card px-5 py-4 z-20">
              <h4 className="font-semibold">
                Toyota Innova Crysta
              </h4>

              <p className="text-sm mt-1">
                Premium Travel Experience
              </p>
            </div>
          </div>

          {/* Content */}

          <div>
            <span className="section-subtitle">
              Our Vehicle
            </span>

            <h2 className="section-title mt-4">
              Travel In
              <span className="gradient-text block">
                Luxury & Comfort
              </span>
            </h2>

            <p className="mt-6 max-w-xl">
              Experience every journey in our premium
              Toyota Innova Crysta. Designed for family
              tours, airport transfers, corporate travel
              and outstation trips with unmatched comfort
              and spacious interiors.
            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#C9A227]"
                  />

                  <span className="text-zinc-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Specs */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {specs.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="glass-card p-5 text-center"
                  >
                    <Icon
                      size={24}
                      className="text-[#C9A227] mx-auto mb-3"
                    />

                    <h3 className="gradient-text text-2xl font-bold">
                      {item.value}
                    </h3>

                    <p className="text-sm mt-1">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovaShowcaseSection;