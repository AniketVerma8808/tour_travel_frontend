import {
  Phone,
  MessageCircle,
} from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="glass-card text-center p-8 lg:p-12">
          <span className="section-subtitle">
            Ready To Travel
          </span>

          <h2 className="section-title mt-4">
            Book Your Premium Ride
            <span className="gradient-text block">
              Today
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-5">
            Airport Transfer, Kashi Darshan,
            Outstation Tours and Premium Innova
            Crysta bookings available 24/7.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href="tel:+918808761609"
              className="btn-primary"
            >
              <Phone size={18} />
              Call Now
            </a>

            <a
              href="https://wa.me/918808761609"
              target="_blank"
              rel="noreferrer"
              className="btn-outline flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          <p className="mt-6 text-sm">
            24/7 Support • Premium Service • Instant Booking
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;