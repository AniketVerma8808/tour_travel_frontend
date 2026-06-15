import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Car,
} from "lucide-react";
import { motion } from "framer-motion";

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

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-[#111111]">

      <div className="container-custom">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="section-subtitle">
            Why Choose Us
          </span>

          <h2 className="section-title mt-4">
            Travel With
            <span className="gradient-text block">
              Confidence & Comfort
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14"
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariant}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  boxShadow:
                    "0 0 25px rgba(201,162,39,0.15)",
                }}
                className="glass-card p-8 text-center cursor-pointer"
              >
                <Icon
                  size={42}
                  className="text-[#C9A227] mx-auto"
                />

                <h3 className="text-xl mt-5 font-medium">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

    </section>
  );
};

export default WhyChooseUs;