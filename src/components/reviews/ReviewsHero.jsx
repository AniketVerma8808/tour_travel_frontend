import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import heroInnova from "../../assets/hero-innova.webp";

const ReviewsHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">

      {/* Background */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroInnova})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 hero-overlay" />

      <div className="container-custom relative z-10">

        <div className="max-w-4xl">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            Customer Experiences
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="section-title mt-4"
          >
            Trusted By
            <span className="gradient-text block">
              Happy Travelers
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mt-6 text-lg"
          >
            Discover what our customers say about airport transfers,
            Kashi Darshan tours and premium travel experiences.
          </motion.p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { n: "4.9★", t: "Average Rating" },
              { n: "500+", t: "Trips Completed" },
              { n: "120+", t: "Reviews" },
              { n: "24/7", t: "Support" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-5 text-center"
              >
                <h3 className="gradient-text text-3xl">
                  {s.n}
                </h3>
                <p>{s.t}</p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Floating Review Card */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="hidden xl:block absolute right-10 top-1/2 -translate-y-1/2 w-80"
        >
          <div className="glass-card p-6">
            <Quote className="text-[#C9A227]" />

            <div className="flex gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill="#C9A227"
                  className="text-[#C9A227]"
                />
              ))}
            </div>

            <p className="mt-4">
              Excellent service. Clean vehicle and smooth experience.
            </p>

            <div className="mt-5 border-t border-white/10 pt-4">
              <h4>Rahul Sharma</h4>
              <p className="text-sm">Delhi</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ReviewsHero;