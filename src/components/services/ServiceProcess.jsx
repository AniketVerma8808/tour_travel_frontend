import { motion } from "framer-motion";

const process = [
  { step: "01", title: "Book Your Ride" },
  { step: "02", title: "Confirm Details" },
  { step: "03", title: "Enjoy Journey" },
];

const ServiceProcess = () => {
  return (
    <section className="section-padding bg-[#080808]">

      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="section-subtitle">
            Simple Process
          </span>

          <h2 className="section-title mt-4">
            Travel In
            <span className="gradient-text block">
              Three Easy Steps
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">

          {process.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-8 text-center"
            >
              <h3 className="gradient-text text-6xl">
                {item.step}
              </h3>

              <h4 className="text-2xl mt-5">
                {item.title}
              </h4>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ServiceProcess;