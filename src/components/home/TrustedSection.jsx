import { ShieldCheck, Star, Headphones, BadgeCheck } from "lucide-react";

const stats = [
  {
    value: "500+",
    title: "Successful Trips",
  },
  {
    value: "98%",
    title: "Customer Satisfaction",
  },
  {
    value: "24/7",
    title: "Support Available",
  },
  {
    value: "5★",
    title: "Average Rating",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description:
      "Customer safety remains our highest priority on every journey.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Service",
    description:
      "Professional service with trusted and reliable travel support.",
  },
  {
    icon: Star,
    title: "Premium Experience",
    description:
      "Comfortable travel experience designed for families and groups.",
  },
  {
    icon: Headphones,
    title: "24/7 Assistance",
    description: "Quick support whenever you need help during your trip.",
  },
];

const TrustedSection = () => {
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        {/* Section Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="section-subtitle">Trusted By Travelers</span>

          <h2 className="section-title mt-4">
            Travel With Confidence &
            <span className="gold-text"> Peace Of Mind</span>
          </h2>

          <p className="mt-6">
            We are committed to delivering safe, comfortable and memorable
            travel experiences with premium service standards.
          </p>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {stats.map((item, index) => (
            <div key={index} className="glass-card p-8 text-center">
              <h3 className="text-4xl md:text-5xl font-bold gold-text">
                {item.value}
              </h3>

              <p className="mt-3">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Trust Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {trustPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="glass-card p-7 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-full border border-[#D4AF37]/30 flex items-center justify-center mb-5">
                  <Icon size={26} className="text-[#D4AF37]" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
