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
}) => {
  return (
    <section
      className={`section-padding relative overflow-hidden ${bgClass}`}
    >
      <div className="container-custom">
        <div className="glass-card p-10 lg:p-16 text-center">
          <span className="section-subtitle">
            {subtitle}
          </span>

          <h2 className="section-title mt-4">
            {title}
            <span className="gradient-text block">
              {highlight}
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto">
            {description}
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-8">
            <a
              href="tel:+918808761609"
              className="btn-primary"
            >
              <Phone size={18} />
              Call Now
            </a>

            {showWhatsapp ? (
              <a
                href="https://wa.me/918808761609"
                target="_blank"
                rel="noreferrer"
                className="btn-outline flex items-center gap-2"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            ) : (
              <button className="btn-outline flex items-center gap-2">
                <ArrowRight size={18} />
                Book Now
              </button>
            )}
          </div>

          <p className="mt-6 text-sm text-zinc-400">
            24/7 Support • Premium Service • Instant Booking
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;