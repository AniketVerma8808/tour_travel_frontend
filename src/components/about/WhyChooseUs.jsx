import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Car,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure Travel",
  },
  {
    icon: Clock3,
    title: "24/7 Availability",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Pricing",
  },
  {
    icon: Car,
    title: "Premium Innova Crysta",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-[#111111]">

      <div className="container-custom">

        <div className="text-center max-w-3xl mx-auto">

          <span className="section-subtitle">
            Why Choose Us
          </span>

          <h2 className="section-title mt-4">
            Travel With
            <span className="gradient-text block">
              Confidence & Comfort
            </span>
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="glass-card p-8 text-center hover-lift"
              >
                <Icon
                  size={40}
                  className="text-[#C9A227] mx-auto"
                />

                <h3 className="text-xl mt-5">
                  {item.title}
                </h3>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;