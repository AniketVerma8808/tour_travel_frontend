import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/gallery/travel1.jpeg"
import img2 from "../assets/gallery/travel2.jpeg"
import img3 from "../assets/gallery/travel3.jpeg"
import img4 from "../assets/gallery/travel4.jpeg"
import img5 from "../assets/gallery/travel5.jpeg"
import img6 from "../assets/gallery/udhyam.jpeg"

const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
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
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            className="glass-card rounded-[var(--radius-lg)] overflow-hidden hover-lift"
                        >
                            <div className="h-[350px] bg-white flex items-center justify-center p-4 relative group">
                                <img
                                    src={img}
                                    alt={`gallery-${index}`}
                                    className="max-w-full max-h-full object-contain transition duration-500 group-hover:scale-105"
                                />

                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                                    style={{
                                        background:
                                            "linear-gradient(to top, rgba(201,162,39,0.2), transparent)",
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