import { motion } from "framer-motion";
import {
    MapPin,
    Clock3,
    Car,
    Users,
    Star,
    ArrowRight,
    CheckCircle2,
    Sparkles,
} from "lucide-react";

const PackageCard = ({ pkg }) => {
    const discount =
        pkg.oldPrice > pkg.price
            ? Math.round(
                ((pkg.oldPrice - pkg.price) /
                    pkg.oldPrice) *
                100
            )
            : 0;

    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.35 }}
            className="group glass-card overflow-hidden h-full flex flex-col"
        >
            {/* Image */}

            <div className="relative h-56 overflow-hidden">

                <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/20 to-transparent" />

                {/* Category */}

                <div className="absolute top-4 left-4 flex items-center gap-2 flex-wrap">

                    <span className="review-badge px-3 py-1 rounded-full text-[11px] font-medium uppercase">
                        {pkg.category}
                    </span>

                    {pkg.featured && (
                        <span className="px-2 py-1 rounded-full bg-black/50 backdrop-blur text-[11px] flex items-center gap-1">
                            <Sparkles size={10} />
                            Featured
                        </span>
                    )}

                </div>

                {/* Rating */}

                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur rounded-full px-2.5 py-1 flex items-center gap-1">

                    <Star
                        size={12}
                        fill="#c9a227"
                        className="text-[#c9a227]"
                    />

                    <span className="text-xs text-white">
                        {pkg.rating}
                    </span>

                </div>

                {/* Title */}

                <div className="absolute bottom-4 left-4 right-4">

                    <h3 className="text-xl font-semibold leading-tight">
                        {pkg.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-[#d0d0d0] mt-2">

                        <MapPin size={14} />

                        <span className="truncate">
                            {pkg.from} → {pkg.location}
                        </span>

                    </div>

                </div>

            </div>

            {/* Content */}

            <div className="p-4 flex flex-col flex-1">

                {/* Package Highlights */}

                <div className="grid grid-cols-3 gap-3">

                    <div className="bg-[#141414] border border-white/10 rounded-2xl py-3 px-2 text-center">

                        <Clock3
                            size={18}
                            className="mx-auto text-[#c9a227]"
                        />

                        <p className="text-[11px] text-[#8e8e8e] mt-2 uppercase tracking-wide">
                            Duration
                        </p>

                        <p className="text-white text-sm font-medium mt-1">
                            {pkg.duration}
                        </p>

                    </div>

                    <div className="bg-[#141414] border border-white/10 rounded-2xl py-3 px-2 text-center">

                        <Car
                            size={18}
                            className="mx-auto text-[#c9a227]"
                        />

                        <p className="text-[11px] text-[#8e8e8e] mt-2 uppercase tracking-wide">
                            Vehicle
                        </p>

                        <p className="text-white text-sm font-medium mt-1 truncate">
                            {pkg.vehicle}
                        </p>

                    </div>

                    <div className="bg-[#141414] border border-white/10 rounded-2xl py-3 px-2 text-center">

                        <Users
                            size={18}
                            className="mx-auto text-[#c9a227]"
                        />

                        <p className="text-[11px] text-[#8e8e8e] mt-2 uppercase tracking-wide">
                            Guests
                        </p>

                        <p className="text-white text-sm font-medium mt-1">
                            {pkg.persons}
                        </p>

                    </div>

                </div>
                {/* Includes */}

                <div className="mt-4">

                    <p className="text-sm font-medium text-white mb-2">
                        Includes
                    </p>

                    <div className="flex flex-wrap gap-2">

                        {pkg.includes
                            ?.slice(0, 4)
                            .map((item) => (
                                <span
                                    key={item}
                                    className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-[#c3c3c3]"
                                >
                                    <CheckCircle2
                                        size={12}
                                        className="text-[#c9a227]"
                                    />
                                    {item}
                                </span>
                            ))}

                    </div>

                </div>

                {/* Price */}

                <div className="mt-auto pt-5">

                    <div className="border-t border-white/10 pt-4">

                        <div className="flex justify-between items-start gap-3">

                            <div>

                                <p className="text-xs text-[#8e8e8e]">
                                    Starting From
                                </p>

                                <div className="flex flex-wrap items-center gap-2 mt-1">

                                    <span className="text-2xl font-bold gradient-text">
                                        ₹{pkg.price.toLocaleString()}
                                    </span>

                                    <span className="line-through text-xs text-[#666]">
                                        ₹{pkg.oldPrice.toLocaleString()}
                                    </span>

                                </div>

                            </div>

                            {discount > 0 && (
                                <span className="review-badge px-2 py-1 rounded-lg text-[11px] font-medium">
                                    {discount}% OFF
                                </span>
                            )}

                        </div>

                        {/* Reviews */}

                        <div className="flex items-center gap-2 mt-3">

                            <Star
                                size={14}
                                fill="#c9a227"
                                className="text-[#c9a227]"
                            />

                            <span className="text-sm text-white">
                                {pkg.rating}
                            </span>

                            <span className="text-xs text-[#8e8e8e]">
                                ({pkg.reviews} Reviews)
                            </span>

                        </div>

                        {/* Buttons */}

                        <div className="grid grid-cols-2 gap-3 mt-5">

                            <button className="btn-outline w-full text-sm px-3 py-3">
                                Details
                            </button>

                            <button className="btn-primary w-full text-sm px-3 py-3">

                                Book

                                <ArrowRight size={16} />

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </motion.div>
    );
};

export default PackageCard;