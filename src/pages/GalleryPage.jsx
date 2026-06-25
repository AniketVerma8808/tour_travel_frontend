import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/gallery/travel1.jpeg"
import img2 from "../assets/gallery/travel2.jpeg"
import img3 from "../assets/gallery/udhyam.jpeg"

const images = [
    img1,
    img2,
    img3,
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    "https://images.unsplash.com/photo-1528127269322-539801943592",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    "https://images.unsplash.com/photo-1530789253388-582c481c54b0",
    "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
];

const GalleryPage = () => {
    return (
        <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">

            {/* HERO SECTION */}
            <div className="relative h-[55vh] flex items-center justify-center overflow-hidden">

                <div
                    className="hero-bg"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
                    }}
                />

                <div className="hero-overlay absolute inset-0" />

                <div className="hero-content text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="hero-badge">
                            <span>Luxury Travel Memories</span>
                        </div>

                        <h1 className="section-title">
                            Our <span className="gradient-text">Gallery</span>
                        </h1>

                        <p className="hero-description mt-4 mx-auto">
                            Discover breathtaking destinations, curated experiences, and unforgettable journeys
                            captured through our premium travel stories.
                        </p>
                    </motion.div>
                </div>

                <div className="hero-bottom-fade" />
            </div>

            {/* GALLERY GRID */}
            <div className="container-custom section-padding">

                <div className="text-center mb-12">
                    <h2 className="section-subtitle">Explore Moments</h2>
                    <h3 className="section-title mt-2">Travel Memories</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="glass-card overflow-hidden rounded-[var(--radius-lg)] hover-lift"
                        >
                            <div className="relative group">
                                <img
                                    src={img}
                                    alt={`gallery-${index}`}
                                    className="w-full h-92 object-cover transition duration-500 group-hover:scale-110"
                                />

                                {/* GOLD OVERLAY */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                                    style={{
                                        background:
                                            "linear-gradient(to top, rgba(201,162,39,0.25), transparent)"
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default GalleryPage;