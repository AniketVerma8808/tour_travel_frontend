import { motion } from "framer-motion";

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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 lg:p-12"
        >

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

            {benefits.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="border border-[#C9A227]/10 rounded-2xl p-5"
              >
                {item}
              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default ServiceBenefits;