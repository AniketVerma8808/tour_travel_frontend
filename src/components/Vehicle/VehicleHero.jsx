import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const VehicleHero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-24 lg:pt-28">
            {/* Background */}
            <div

                className="hero-bg"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1800')",
                }}
            />

            <div className="absolute inset-0 hero-overlay" />

            <div className="hero-glow" />

            <div className="hero-bottom-fade" />

            <div className="container-custom hero-content">
                <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
                    {/* Left Content */}

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center lg:text-left"
                    >
                        <div className="hero-badge">
                            <span>Premium Fleet Collection</span>
                        </div>

                        <h1 className="section-title mb-6">
                            Luxury Vehicles For
                            <br />
                            <span className="gradient-text">
                                Every Journey
                            </span>
                        </h1>

                        <p className="hero-description mb-10 mx-auto lg:mx-0">
                            Experience unmatched comfort with our premium fleet.
                            Whether it's airport transfers, outstation tours,
                            family vacations or business travel, we ensure every
                            ride is safe, comfortable and memorable.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <Link
                                to="/booking"
                                className="btn-primary gold-glow"
                            >
                                Book Vehicle
                            </Link>

                            <Link
                                to="/contact"
                                className="btn-outline"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Side */}

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                        }}
                        className="relative flex justify-center lg:justify-end "
                    >
                        {/* Rating Badge */}

                        <div className="absolute top-4 left-4 lg:left-0 z-20 glass-card px-5 py-3 ">
                            <div className="flex items-center gap-2">
                                <Star
                                    size={16}
                                    fill="#C9A227"
                                    color="#C9A227"
                                />

                                <span className="text-sm text-black">
                                    Top Rated Fleet 
                                </span>
                            </div>
                        </div>

                        {/* Vehicle Card */}

                        <div className="glass-card overflow-hidden max-w-[650px] w-full">
                            <img
                                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400"
                                alt="Luxury Vehicle"
                                className="w-full h-[280px] sm:h-[350px] md:h-[450px] object-cover"
                            />

                            <div className="p-6 md:p-8">
                                <h3 className="text-3xl mb-3">
                                    Toyota Innova Crysta
                                </h3>

                                <p className="mb-6">
                                    Premium MPV designed for luxury travel,
                                    family tours, corporate rides and
                                    outstation journeys.
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="glass-card p-4 text-center">
                                        <h4 className="text-white font-semibold">
                                            7+1 Seats
                                        </h4>
                                    </div>

                                    <div className="glass-card p-4 text-center">
                                        <h4 className="text-white font-semibold">
                                            Fully AC
                                        </h4>
                                    </div>

                                    <div className="glass-card p-4 text-center">
                                        <h4 className="text-white font-semibold">
                                            GPS Enabled
                                        </h4>
                                    </div>

                                    <div className="glass-card p-4 text-center">
                                        <h4 className="text-white font-semibold">
                                            Driver Included
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VehicleHero;