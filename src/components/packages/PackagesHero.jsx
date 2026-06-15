import { motion } from "framer-motion";

const PackagesHero = () => {
  return (
    <section className="relative min-h-[80vh] section-padding flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1800')",
        }}
      />

      {/* Existing Theme Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="max-w-4xl"
        >
          <span className="section-subtitle">
            Discover India With Comfort & Luxury
          </span>

          <h1 className="section-title mt-4 mb-6">
            Handcrafted Travel Packages
            <span className="gradient-text block">
              For Every Journey
            </span>
          </h1>

          <p className="text-lg md:text-xl max-w-3xl">
            Explore spiritual destinations, heritage cities,
            family vacations, weekend getaways and customized
            tours across India with premium travel experiences
            designed for comfort, safety and unforgettable memories.
          </p>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#080808] to-transparent z-[5]" />
    </section>
  );
};

export default PackagesHero;