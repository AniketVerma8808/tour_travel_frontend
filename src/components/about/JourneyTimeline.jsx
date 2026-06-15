import { motion } from "framer-motion";

const stats = [
  {
    number: "500+",
    title: "Successful Trips",
  },
  {
    number: "24/7",
    title: "Support",
  },
  {
    number: "5★",
    title: "Customer Rating",
  },
  {
    number: "100%",
    title: "Customer Satisfaction",
  },
];

// container animation (stagger effect)
const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// card animation
const cardVariant = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.85,
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

const JourneyTimeline = () => {
  return (
    <section className="section-padding bg-[#080808]">

      <div className="container-custom">

        {/* Grid Wrapper */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >

          {stats.map((item, index) => (
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

              {/* Number */}
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="gradient-text text-5xl font-bold"
              >
                {item.number}
              </motion.h3>

              {/* Title */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-3 text-[#c3c3c3]"
              >
                {item.title}
              </motion.p>

            </motion.div>
          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default JourneyTimeline;