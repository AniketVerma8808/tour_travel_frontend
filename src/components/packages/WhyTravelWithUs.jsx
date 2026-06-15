import {
  ShieldCheck,
  Headphones,
  Car,
  BadgeDollarSign,
} from "lucide-react";

const benefits = [
  {
    icon: Car,
    title: "Luxury Fleet",
    desc: "Premium vehicles maintained for maximum comfort.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Travel",
    desc: "Verified drivers and secure travel experience.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Dedicated travel assistance whenever you need.",
  },
  {
    icon: BadgeDollarSign,
    title: "Best Pricing",
    desc: "Transparent rates without hidden charges.",
  },
];

const WhyTravelWithUs = () => {
  return (
    <section className="section-padding bg-[#111111]">
      <div className="container-custom">

        <div className="text-center mb-16">
          <p className="section-subtitle">
            Why Choose Us
          </p>

          <h2 className="section-title">
            Travel With Confidence
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="glass-card p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#c9a227]/10 border border-[#c9a227]/20 flex items-center justify-center mx-auto mb-5">
                  <Icon
                    className="text-[#c9a227]"
                    size={30}
                  />
                </div>

                <h3 className="text-xl mb-3">
                  {item.title}
                </h3>

                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyTravelWithUs;