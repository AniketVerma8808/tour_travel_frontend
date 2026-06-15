import heroInnova from "../../assets/hero-innova.webp";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroInnova})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 hero-overlay" />

      <div className="container-custom relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="section-subtitle"
        >
          About Saroj Kashi Travels
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="section-title mt-5"
        >
          Premium Travel Experience
          <span className="gradient-text block">
            Across Varanasi
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto mt-6 text-lg"
        >
          We provide reliable Innova Crysta travel
          services for airport transfers, local
          sightseeing, family trips and outstation
          journeys with comfort, safety and
          professionalism.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHero;