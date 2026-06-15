import { motion } from "framer-motion";

const ServicesHero = () => {
  return (
    <section className="section-padding pt-40 relative overflow-hidden bg-[#080808]">

      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-96 h-96 bg-[#C9A227]/10 blur-[180px]"
      />

      <div className="container-custom text-center relative z-10">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="section-subtitle"
        >
          Premium Services
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="section-title mt-4"
        >
          Luxury Travel Solutions
          <span className="gradient-text block">
            For Every Journey
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto mt-6"
        >
          From airport transfers and temple visits
          to outstation tours and corporate travel,
          we ensure comfort, reliability and a premium experience.
        </motion.p>

      </div>

    </section>
  );
};

export default ServicesHero;