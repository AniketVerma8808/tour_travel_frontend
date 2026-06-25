import { motion } from "framer-motion";
import {
  Plane,
  MapPinned,
  Route,
  Building2,
  HeartHandshake,
  Train,
} from "lucide-react";

const services = [
  { icon: Plane, title: "Airport Transfer" },
  { icon: MapPinned, title: "Kashi Darshan" },
  { icon: Route, title: "Outstation Tours" },
  { icon: Building2, title: "Corporate Travel" },
  { icon: HeartHandshake, title: "Wedding Travel" },
  { icon: Train, title: "Railway Pickup" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const ServiceDetails = () => {
  return (
    <section className="section-padding bg-[#111111]">

      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* <span className="section-subtitle">
            What We Offer
          </span> */}

          {/* <h2 className="section-title mt-4">
            Designed For Every
            <span className="gradient-text block">
              Travel Requirement
            </span>
          </h2> */}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-14"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 0 25px rgba(201,162,39,0.15)",
                }}
                className="glass-card p-8 cursor-pointer"
              >
                <Icon size={34} className="text-[#C9A227]" />

                <h3 className="text-2xl mt-5">
                  {service.title}
                </h3>

                <p className="mt-4 text-[#c3c3c3]">
                  Comfortable travel experience
                  with professional drivers and premium Innova Crysta service.
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

    </section>
  );
};

export default ServiceDetails;