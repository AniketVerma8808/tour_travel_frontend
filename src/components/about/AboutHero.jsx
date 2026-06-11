import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="section-padding pt-40 relative overflow-hidden bg-[#080808]">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A227]/10 blur-[180px]" />

      <div className="container-custom relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="section-subtitle"
        >
          About Us
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="section-title mt-4"
        >
          Travel With Confidence
          <span className="gradient-text block">
            Travel With Comfort
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-3xl mx-auto mt-6"
        >
          Saroj Kashi Travels provides reliable,
          comfortable and premium transportation
          services for local sightseeing, airport
          transfers and outstation journeys.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHero;