import {
    Phone,
    MessageCircle,
    MapPin,
} from "lucide-react";

import heroInnova from "../../assets/hero-innova.webp";

const ContactHero = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center section-padding overflow-hidden">
            {/* Background Image */}

            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${heroInnova})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* Overlay */}

            <div className="absolute inset-0 hero-overlay" />

            {/* Gold Glow */}

            <div className="gold-glow-left" />
            <div className="gold-glow-right" />

            <div className="container-custom relative z-10">
                <div className="max-w-4xl">
                    {/* Badge */}

                    <div className="glass-badge flex gap-3">
                        <MapPin
                            size={16}
                            className="gold-icon"
                        />

                        <span className="text-sm tracking-wider">
                            Varanasi • Uttar Pradesh • India
                        </span>
                    </div>

                    {/* Heading */}

                    <h1 className="section-title mt-8">
                        Let's Plan Your
                        <span className="gradient-text block">
                            Luxury Journey
                        </span>
                    </h1>

                    {/* Description */}

                    <p className="max-w-2xl mt-6 text-lg md:text-xl text-zinc-300 leading-relaxed">
                        Contact Saroj Kashi Travels for Airport
                        Transfers, Kashi Darshan, Outstation Tours,
                        Corporate Travel and Premium Innova Crysta
                        bookings with professional service.
                    </p>

                    {/* CTA Buttons */}

                    <div className="flex flex-wrap gap-5 mt-10">
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
                            className="btn-outline flex items-center gap-2"
                        >
                            <MessageCircle size={18} />
                            WhatsApp Us
                        </a>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                        {[
                            ["24/7", "Support"],
                            ["7", "Seater Comfort"],
                            ["AC", "Premium Ride"],
                            ["100%", "Safe Travel"],
                        ].map(([value, label]) => (
                            <div
                                key={label}
                                className="glass-card p-5 text-center"
                            >
                                <h3 className="gradient-text text-3xl font-bold">
                                    {value}
                                </h3>

                                <p className="text-sm mt-2">
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;