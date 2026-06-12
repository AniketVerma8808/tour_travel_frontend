const benefits = [
  "Premium Innova Crysta",
  "Professional Drivers",
  "Transparent Pricing",
  "Clean & Sanitized Vehicle",
  "24/7 Booking Support",
  "Comfortable Long Distance Travel",
];

const ServiceBenefits = () => {
  return (
    <section className="section-padding bg-[#111111]">

      <div className="container-custom">

        <div className="glass-card p-8 lg:p-12">

          <div className="text-center">

            <span className="section-subtitle">
              Benefits
            </span>

            <h2 className="section-title mt-4">
              Why Travelers
              <span className="gradient-text block">
                Prefer Us
              </span>
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-12">

            {benefits.map((item) => (
              <div
                key={item}
                className="border border-[#C9A227]/10 rounded-2xl p-5"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default ServiceBenefits;