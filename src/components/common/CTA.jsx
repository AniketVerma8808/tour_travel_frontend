import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const CTA = ({
  subtitle = "Ready To Travel",
  title = "Book Your Premium Ride",
  highlight = "Today",
  description = "Airport Transfer, Kashi Darshan, Outstation Tours and Premium Innova Crysta bookings available 24/7.",
  showWhatsapp = true,
  bgClass = "",
  onBookNow,
  callNumber = "+919695957772",
}) => {
  return (
    <section
      className={`section-padding relative overflow-hidden ${bgClass}`}
    >
      <div className="container-custom">

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass-card p-10 lg:p-16 text-center relative"
        >

          {/* Subtitle */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            {subtitle}
          </motion.span>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="section-title mt-4"
          >
            {title}
            <span className="gradient-text block">
              {highlight}
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-2xl mx-auto text-[#c3c3c3]"
          >
            {description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-5 mt-8"
          >

            {/* Call Button */}
            <motion.a
              href={`tel:${callNumber}`}
              whileHover={{
                scale: 1.08,
                boxShadow:
                  "0 0 25px rgba(201,162,39,0.25)",
              }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              <Phone size={18} />
              Call Now
            </motion.a>

            {/* WhatsApp / Book Button */}
            {showWhatsapp ? (
              <motion.a
                href={`https://wa.me/${callNumber.replace("+", "")}`}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  scale: 1.08,
                  borderColor: "#c9a227",
                }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline flex items-center gap-2"
              >
                <MessageCircle size={18} />
                WhatsApp
              </motion.a>
            ) : (
              <motion.button
                onClick={onBookNow}   
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline flex items-center gap-2"
              >
                <ArrowRight size={18} />
                Book Now
              </motion.button>
            )}

          </motion.div>

          {/* Bottom Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-sm text-zinc-400"
          >
            24/7 Support • Premium Service • Instant Booking
          </motion.p>

        </motion.div>

      </div>
    </section>
  );
};

export default CTA;