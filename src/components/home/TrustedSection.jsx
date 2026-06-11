import {
  ShieldCheck,
  Star,
  Users,
  Clock3,
} from "lucide-react";

const trustData = [
  {
    icon: Users,
    number: "7",
    title: "Seater Comfort",
  },
  {
    icon: ShieldCheck,
    number: "100%",
    title: "Sanitized Vehicle",
  },
  {
    icon: Clock3,
    number: "24/7",
    title: "Booking Support",
  },
  {
    icon: Star,
    number: "AC",
    title: "Premium Comfort",
  },
];

const TrustedSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-[#080808] to-[#111111] relative overflow-hidden">
      {/* Glow */}

      <div className="absolute top-0 left-0 w-80 h-80 bg-[#C9A227]/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C9A227]/10 blur-[150px]" />

      <div className="container-custom relative z-10">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="section-subtitle">
            Trusted By Travelers
          </span>

          <h2 className="section-title mt-4">
            Why Customers
            <span className="gradient-text block">
              Choose Us
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto">
            Experience premium Innova Crysta travel
            service with professional drivers, transparent
            pricing and 24/7 availability for local and
            outstation journeys.
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {trustData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="glass-card p-6 lg:p-8 text-center hover-lift"
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 mx-auto rounded-full bg-[#C9A227]/10 flex items-center justify-center">
                  <Icon
                    size={28}
                    className="text-[#C9A227]"
                  />
                </div>

                <h3 className="gradient-text text-3xl lg:text-4xl font-bold mt-5">
                  {item.number}
                </h3>

                <p className="mt-3 text-sm lg:text-base">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Bar */}

        <div className="glass-card p-6 lg:p-8 mt-14 text-center">
          <h3 className="text-2xl lg:text-4xl font-bold">
            Your Trusted Partner For
            <span className="gradient-text block mt-2">
              Luxury Travel Across
              Varanasi & Uttar Pradesh
            </span>
          </h3>

          <p className="mt-5 max-w-3xl mx-auto">
            Comfortable seating, professional chauffeur,
            luggage space and premium travel experience
            for families, corporate clients and tourists.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;