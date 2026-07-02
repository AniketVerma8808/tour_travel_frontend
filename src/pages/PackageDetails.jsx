import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePackage } from "../context/PackageContext";
import { Star, MapPin, Clock, Car } from "lucide-react";
import CTA from "../components/common/CTA";

const PackageDetails = () => {
    const { slug } = useParams();

    const {
        selectedPackage,
        loading,
        getPackageBySlug,
    } = usePackage();

    useEffect(() => {
        getPackageBySlug(slug);
    }, [slug, getPackageBySlug]);
   const pkg = selectedPackage;

    const discount =
        pkg?.oldPrice && pkg.oldPrice > pkg.price
            ? Math.round(((pkg.oldPrice - pkg.price) * 100) / pkg.oldPrice)
            : 0;

    if (loading) {
        return (
            <section className="section-padding">
                <div className="container-custom">
                    <div className="glass-card h-[600px] animate-pulse" />
                </div>
            </section>
        );
    }

    if (!selectedPackage) {
        return (
            <section className="section-padding">
                <div className="container-custom">
                    <div className="glass-card py-20 text-center">
                        <h2 className="section-title">Package Not Found</h2>
                        <p className="mt-4 text-zinc-400">
                            This package is not available.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

 

    return (
        <section className="section-padding bg-[#080808] overflow-hidden">

            <div className="container-custom">

                <div className="grid lg:grid-cols-5 gap-10">

                    {/* ================= LEFT SIDE ================= */}
                    <div className="lg:col-span-3">

                        {/* ================= HERO ================= */}
                        <div className="relative rounded-3xl overflow-hidden group">

                            <img
                                src={pkg.image || "https://placehold.co/1200x700"}
                                alt={pkg.title}
                                className="w-full h-[520px] object-cover group-hover:scale-105 transition duration-700"
                            />

                            {/* DARK OVERLAY */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "linear-gradient(to top, rgba(0,0,0,.95), rgba(0,0,0,.35), transparent)",
                                }}
                            />

                            {/* FEATURED */}
                            {pkg.isFeatured && (
                                <div className="absolute left-6 top-6">
                                    <div className="hero-badge">
                                        ⭐ Featured Package
                                    </div>
                                </div>
                            )}

                            {/* DISCOUNT */}
                            {discount > 0 && (
                                <div className="absolute right-6 top-6">
                                    <div className="glass-card px-4 py-2 text-[#E8C766] font-semibold">
                                        {discount}% OFF
                                    </div>
                                </div>
                            )}

                            {/* TITLE SECTION */}
                            <div className="absolute bottom-0 left-0 w-full p-8">

                                <span className="text-[#E8C766] text-sm uppercase tracking-widest">
                                    {pkg.category?.replace("-", " ") || "Luxury Tour"}
                                </span>

                                <h1 className="text-4xl lg:text-5xl font-bold mt-3">
                                    {pkg.title}
                                </h1>

                                {/* RATING */}
                                <div className="flex items-center gap-2 mt-3 text-sm text-zinc-300">
                                    <Star size={16} className="text-[#E8C766]" />
                                    <span>5.0</span>
                                    <span className="text-zinc-500">(124 Reviews)</span>
                                </div>

                                <p className="mt-4 text-zinc-300 max-w-2xl">
                                    {pkg.shortDescription || pkg.description}
                                </p>

                                {/* INFO ROW */}
                                <div className="flex flex-wrap gap-6 mt-6 text-sm text-zinc-300">

                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} className="text-[#E8C766]" />
                                        {pkg.startingLocation}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Clock size={16} className="text-[#E8C766]" />
                                        {pkg.duration}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Car size={16} className="text-[#E8C766]" />
                                        {pkg.vehicle}
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* ================= RIGHT SIDE ================= */}
                    <div className="lg:col-span-2">

                        <div className="sticky top-28 space-y-6">

                            {/* PRICE CARD */}
                            <div className="glass-card p-8">

                                <p className="text-zinc-400 uppercase text-sm tracking-wider">
                                    Starting From
                                </p>

                                <div className="mt-3 flex items-end gap-3">
                                    <h2 className="text-5xl font-bold text-[#E8C766]">
                                        ₹{pkg.price}
                                    </h2>
                                    <span className="text-zinc-400 mb-2">/ Trip</span>
                                </div>

                                {pkg.oldPrice > pkg.price && (
                                    <div className="mt-3 flex items-center gap-3">
                                        <span className="line-through text-zinc-500">
                                            ₹{pkg.oldPrice}
                                        </span>
                                        <span className="text-green-400 text-sm">
                                            Save {discount}%
                                        </span>
                                    </div>
                                )}

                                <button className="btn-primary w-full mt-6">
                                    Book Now
                                </button>

                                <button className="w-full mt-4 h-12 rounded-xl border border-[#C9A227]/30 text-[#E8C766] hover:bg-[#C9A227]/10 transition">
                                    Enquiry Now
                                </button>

                            </div>

                            {/* QUICK INFO */}
                            <div className="glass-card p-6">

                                <h3 className="text-xl font-semibold mb-4">
                                    Quick Info
                                </h3>

                                <div className="space-y-4 text-sm">

                                    <div className="flex justify-between">
                                        <span className="text-zinc-400">Vehicle</span>
                                        <span>{pkg.vehicle}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-zinc-400">Category</span>
                                        <span className="capitalize">
                                            {pkg.category?.replace("-", " ")}
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-zinc-400">Distance</span>
                                        <span>{pkg.distance} KM</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-zinc-400">Status</span>
                                        <span className="text-green-400">Available</span>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                <div className="glass-card p-8 mt-8">

                    <h2 className="text-3xl font-bold">
                        About This Package
                    </h2>

                    <p className="mt-5 leading-8 text-zinc-300">
                        {pkg.description}
                    </p>

                </div>
                <div className="glass-card p-8 mt-8">

                    <h2 className="text-3xl font-bold mb-6">
                        Package Highlights
                    </h2>

                    <div className="flex flex-wrap gap-3">

                        {[
                            "🚘 Premium AC Vehicle",
                            "👨‍✈️ Experienced Driver",
                            "❄️ Fully Sanitized Cab",
                            "📍 Doorstep Pickup",
                            "⛽ Fuel Included",
                            "🛡️ Safe Travel Assurance"
                        ].map((item, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/20 text-sm text-[#E8C766]"
                            >
                                {item}
                            </span>
                        ))}

                    </div>


                </div>

                {pkg.inclusions?.length > 0 && (
                    <div className="glass-card p-8 mt-8">

                        <h2 className="text-3xl font-bold">
                            Package Includes
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4 mt-6">

                            {pkg.inclusions.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">

                                    <div className="w-2 h-2 rounded-full bg-[#E8C766]" />

                                    <span className="text-zinc-300">{item}</span>

                                </div>
                            ))}

                        </div>

                    </div>
                )}

                {pkg.exclusions?.length > 0 && (
                    <div className="glass-card p-8 mt-8">

                        <h2 className="text-3xl font-bold">
                            Package Excludes
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4 mt-6">

                            {pkg.exclusions.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">

                                    <div className="w-2 h-2 rounded-full bg-red-500" />

                                    <span className="text-zinc-300">{item}</span>

                                </div>
                            ))}

                        </div>

                    </div>
                )}

                {pkg.extraCharges?.length > 0 && (
                    <div className="glass-card p-8 mt-8">

                        <h2 className="text-3xl font-bold">
                            Extra Charges
                        </h2>

                        <div className="space-y-4 mt-6">

                            {pkg.extraCharges.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">

                                    <div className="w-2 h-2 rounded-full bg-orange-400" />

                                    <span className="text-zinc-300">{item}</span>

                                </div>
                            ))}

                        </div>

                    </div>
                )}

            </div>

            <CTA />

        </section>
    );
};

export default PackageDetails;