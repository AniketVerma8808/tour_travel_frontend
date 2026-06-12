import {
  Phone,
  MapPin,
  Clock3,
  MessageCircle,
} from "lucide-react";

const contactData = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 8808761609",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Instant Booking Support",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Varanasi, Uttar Pradesh",
  },
  {
    icon: Clock3,
    title: "Availability",
    value: "24/7 Service",
  },
];

const ContactInfo = () => {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="section-subtitle">
            Contact Information
          </span>

          <h2 className="section-title mt-4">
            Multiple Ways To
            <span className="gradient-text block">
              Reach Us
            </span>
          </h2>

          <p className="mt-5">
            Connect with Saroj Kashi Travels anytime
            for bookings, inquiries and travel
            assistance.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-14">
          {contactData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="glass-card p-8 text-center"
              >
                <Icon
                  size={38}
                  className="mx-auto gold-text"
                />

                <h3 className="text-xl mt-5">
                  {item.title}
                </h3>

                <p className="mt-3">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}

        <div className="glass-card mt-10 p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl">
              Need Immediate Assistance?
            </h3>

            <p className="mt-2">
              Our team is available 24/7 for instant
              booking support.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+918808761609"
              className="btn-primary"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/918808761609"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;