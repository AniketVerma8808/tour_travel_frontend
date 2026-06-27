import React from "react";
import { motion } from "framer-motion";
import {
    MapPin,
    Clock3,
    Users,
    Star,
    ArrowRight,
    CalendarDays,
    Sparkles,
    BadgePercent,
} from "lucide-react";

const PackageCard = ({
    image,
    title,
    location,
    duration,
    persons,
    rating = 5,
    reviews = 124,
    oldPrice,
    price,
    description,
    featured = false,
    discount,
    onBookNow,
    onViewDetails,
}) => {
    return (
        <motion.article
            whileHover={{
                y: -10,
            }}
            transition={{
                duration: 0.35,
            }}
            className="glass-card overflow-hidden group relative h-full flex flex-col"
        >
            {/* Premium Glow */}

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">

                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/10 via-transparent to-[#C9A227]/5" />

            </div>

            {/* ================= IMAGE ================= */}

            <div className="relative h-56 lg:h-60 overflow-hidden">

                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />

                {/* Overlay */}

                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to top, rgba(8,8,8,.95), rgba(8,8,8,.15), transparent)",
                    }}
                />

                {/* Featured */}

                {featured && (
                    <div className="absolute left-5 top-5">

                        <div className="hero-badge !mb-0">

                            <Sparkles
                                size={15}
                                className="mr-2 text-[#E8C766]"
                            />

                            <span>Most Popular</span>

                        </div>

                    </div>
                )}

                {/* Discount */}

                {discount && (
                    <div className="absolute right-5 top-5">

                        <div className="glass-card px-4 py-2 flex items-center gap-2">

                            <BadgePercent
                                size={16}
                                className="text-[#E8C766]"
                            />

                            <span className="text-[#E8C766] font-semibold text-sm">
                                {discount}% OFF
                            </span>

                        </div>

                    </div>
                )}


            </div>


            {/* ================= CONTENT ================= */}
            <div className="p-5 lg:p-6 flex flex-col flex-1">

                {/* Rating */}

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">

                        <div className="bg-[#C9A227]/10 border border-[#C9A227]/20 rounded-full px-2 py-1 flex items-center gap-1">

                            <Star
                                fill="#E8C766"
                                size={14}
                            />

                            <span className="text-sm font-semibold">
                                {rating}.0
                            </span>

                        </div>

                        <span className="text-xs text-zinc-500">
                            {reviews}+ Reviews
                        </span>

                    </div>

                </div>

                {/* Title */}

                <h3 className="text-2xl font-semibold mt-4 leading-tight group-hover:text-[#E8C766] transition">
                    {title}
                </h3>

                <p className="mt-3 text-sm text-zinc-400 line-clamp-2">
                    {description}
                </p>


                <div className="flex items-center justify-between mt-6 rounded-xl border border-white/10 bg-white/5 px-4 py-3">

                    <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-[#E8C766]" />
                        <span className="text-sm">{location}</span>
                    </div>

                    <div className="h-5 w-px bg-white/10" />

                    <div className="flex items-center gap-2">
                        <Clock3 size={16} className="text-[#E8C766]" />
                        <span className="text-sm">{duration}</span>
                    </div>

                    <div className="h-5 w-px bg-white/10" />

                    <div className="flex items-center gap-2">
                        <Users size={16} className="text-[#E8C766]" />
                        <span className="text-sm">{persons}</span>
                    </div>

                </div>
                {/* Package Highlights */}

                <div className="mt-6">
                    <div className="flex flex-wrap gap-2">

                        {[
                            "🚗 AC Cab",
                            "🏨 Hotel",
                            "⛽ Fuel",
                            "👨‍✈️ Driver",
                        ].map((item, index) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/20 text-xs font-medium text-[#E8C766]"
                            >
                                {item}
                            </span>
                        ))}

                    </div>
                </div>


                <div className="mt-6 pt-5 border-t border-white/10">

                    <div className="flex items-center justify-between mb-4">

                        <div>
                            <p className="text-xs uppercase tracking-wider text-zinc-500">
                                Starting From
                            </p>

                            <div className="flex items-end gap-2">
                                <span className="text-3xl font-bold text-[#E8C766]">
                                    ₹{price}
                                </span>

                                <span className="text-sm text-zinc-400 mb-1">
                                    / Trip
                                </span>
                            </div>
                        </div>

                        <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400">
                            Available
                        </span>

                    </div>

                    <div className="grid grid-cols-2 gap-3">

                        <button
                            onClick={onViewDetails}
                            className="h-11 rounded-xl border border-[#C9A227]/30 bg-transparent text-[#E8C766] font-medium transition-all duration-300 hover:bg-[#C9A227]/10 flex items-center justify-center gap-2"
                        >
                            Details
                            <ArrowRight size={16} />
                        </button>

                        <button
                            onClick={onBookNow}
                            className="h-11 rounded-xl bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F4D03F] text-black font-semibold transition-all duration-300 hover:scale-[1.02]"
                        >
                            Book Now
                        </button>

                    </div>

                </div>
            </div>

            {/* Bottom Golden Line */}

            <div className="h-[3px] w-full bg-gradient-to-r from-[#9F7D16] via-[#E8C766] to-[#FFF2B3] opacity-0 group-hover:opacity-100 transition duration-500" />

        </motion.article>
    );
};

export default PackageCard;