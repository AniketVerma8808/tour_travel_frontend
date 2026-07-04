import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    Search,
    CalendarDays,
    MapPin,
    Car,
    RotateCcw,
} from "lucide-react";
import { usePackage } from "../../context/PackageContext";

const PackageSearch = ({
    filters,
    setFilters,
}) => {
    const { filterOptions = {} } = usePackage();

    const [searchText, setSearchText] = useState(filters.search);

    const categories = filterOptions.categories || [];
    const durations = filterOptions.durations || [];
    const vehicles = filterOptions.vehicles || [];
    const popularLocations = filterOptions.locations || [];

    const handleChange = (field, value) => {
        setFilters((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setFilters((prev) => {
                if (prev.search === searchText) {
                    return prev;
                }

                return {
                    ...prev,
                    search: searchText,
                };
            });
        }, 500);

        return () => clearTimeout(timer);
    }, [searchText, setFilters]);


    useEffect(() => {
        if (filters.search !== searchText) {
            setSearchText(filters.search);
        }
    }, [filters.search, searchText]);

    const clearFilters = () => {
        setSearchText("");

        setFilters({
            search: "",
            duration: "",
            category: "",
            vehicle: "",
        });
    };

    const selectLocation = (location) => {
        if (location === searchText) return;
        setSearchText(location);
    };
    return (
        <section className="relative     z-30 px-4">
            <div className="container-custom">

                <motion.div
                    initial={{

                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="glass-card p-4 sm:p-5 md:p-8 lg:p-10"
                >
                    {/* Header */}

                    <div className="text-center mb-6 md:mb-10">

                        <span className="section-subtitle ">
                            Find Your Package
                        </span>

                        <h2 className="section-title mt-2">
                            Discover Curated
                            <span className="gradient-text block">
                                Travel Experiences
                            </span>
                        </h2>

                        <p className="max-w-2xl mx-auto mt-3 text-sm md:text-base">
                            Search destinations,
                            select preferences and
                            explore premium travel
                            experiences crafted for
                            comfort, spirituality and
                            unforgettable memories.
                        </p>

                    </div>

                    {/* Filters */}

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">

                        {/* Search */}

                        <div className="xl:col-span-2">

                            <label className="text-sm text-[#c3c3c3] mb-2 block">
                                Destination
                            </label>

                            <div className="h-12 md:h-14 px-4 rounded-xl bg-black/20 border border-white/10 flex items-center transition-all duration-300 focus-within:border-[#c9a227]/40">

                                <Search
                                    size={18}
                                    className="text-[#c9a227]"
                                />

                                <input
                                    type="text"
                                    placeholder="Search destination..."
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    className="bg-transparent flex-1 outline-none px-3 text-white placeholder:text-[#8e8e8e]"
                                />

                            </div>

                        </div>

                        {/* Duration */}

                        <div>

                            <label className="text-sm text-[#c3c3c3] mb-2 block">
                                Duration
                            </label>

                            <div className="relative">

                                <CalendarDays
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a227]"
                                />

                                <select
                                    value={filters.duration}
                                    onChange={(e) =>
                                        handleChange(
                                            "duration",
                                            e.target.value
                                        )
                                    }
                                    className="w-full h-14 rounded-xl bg-black/20 border border-white/10 pl-11 pr-4 outline-none text-white"
                                >
                                    <option value="">
                                        Any Duration
                                    </option>

                                    {durations.map(
                                        (item) => (
                                            <option
                                                key={item}
                                                value={item}
                                            >
                                                {item}
                                            </option>
                                        )
                                    )}
                                </select>

                            </div>

                        </div>

                        {/* Category */}

                        <div>

                            <label className="text-sm text-[#c3c3c3] mb-2 block">
                                Category
                            </label>

                            <div className="relative">

                                <MapPin
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a227]"
                                />

                                <select
                                    value={filters.category}
                                    onChange={(e) =>
                                        handleChange(
                                            "category",
                                            e.target.value
                                        )
                                    }
                                    className="w-full h-14 rounded-xl bg-black/20 border border-white/10 pl-11 pr-4 outline-none text-white"
                                >
                                    <option value="">
                                        All Categories
                                    </option>

                                    {categories.map(
                                        (item) => (
                                            <option
                                                key={item}
                                                value={item}
                                            >
                                                {item}
                                            </option>
                                        )
                                    )}
                                </select>

                            </div>

                        </div>

                        {/* Vehicle */}

                        <div>

                            <label className="text-sm text-[#c3c3c3] mb-2 block">
                                Vehicle
                            </label>

                            <div className="relative">

                                <Car
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a227]"
                                />

                                <select
                                    value={filters.vehicle}
                                    onChange={(e) =>
                                        handleChange(
                                            "vehicle",
                                            e.target.value
                                        )
                                    }
                                    className="w-full h-14 rounded-xl bg-black/20 border border-white/10 pl-11 pr-4 outline-none text-white"
                                >
                                    <option value="">
                                        Any Vehicle
                                    </option>

                                    {vehicles.map(
                                        (item) => (
                                            <option
                                                key={item}
                                                value={item}
                                            >
                                                {item}
                                            </option>
                                        )
                                    )}
                                </select>

                            </div>

                        </div>

                    </div>
                    {/* Active Filters */}

                    {(filters.search ||
                        filters.duration ||
                        filters.category ||
                        filters.vehicle) && (
                            <div className="mt-6 flex flex-wrap items-center gap-2 md:gap-3">

                                <span className="text-xs md:text-sm text-[#8e8e8e]">
                                    Active Filters:
                                </span>

                                {filters.search && (
                                    <span className="px-3 py-1 rounded-full bg-[#c9a227]/10 border border-[#c9a227]/20 text-[#e8c766] text-xs md:text-sm">
                                        {filters.search}
                                    </span>
                                )}

                                {filters.duration && (
                                    <span className="px-3 py-1 rounded-full bg-[#c9a227]/10 border border-[#c9a227]/20 text-[#e8c766] text-xs md:text-sm">
                                        {filters.duration}
                                    </span>
                                )}

                                {filters.category && (
                                    <span className="px-3 py-1 rounded-full bg-[#c9a227]/10 border border-[#c9a227]/20 text-[#e8c766] text-xs md:text-sm">
                                        {filters.category}
                                    </span>
                                )}

                                {filters.vehicle && (
                                    <span className="px-3 py-1 rounded-full bg-[#c9a227]/10 border border-[#c9a227]/20 text-[#e8c766] text-xs md:text-sm">
                                        {filters.vehicle}
                                    </span>
                                )}

                                <button
                                    onClick={clearFilters}
                                    className="
                                    flex items-center gap-1
                                    px-3 py-1
                                    rounded-full
                                    bg-red-500/10
                                    border border-red-500/20
                                    text-red-400
                                    text-xs md:text-sm
                                    hover:bg-red-500/20
                                    transition-all duration-300
                                                     "
                                >
                                    <RotateCcw size={12} />
                                    Clear
                                </button>

                            </div>
                        )}
                    {/* Popular Locations */}

                    <div className="mt-10 pt-8 border-t border-white/10">

                        <div className="flex flex-wrap gap-3 items-center">

                            <span className="text-[#8e8e8e] text-sm">
                                Trending Destinations:
                            </span>

                            {popularLocations.map(
                                (item) => (
                                    <button
                                        key={item}
                                        onClick={() => selectLocation(item)}
                                        className="px-4 py-2 rounded-full gold-border text-sm hover:bg-[#c9a227] hover:text-black transition-all duration-300"
                                    >
                                        {item}
                                    </button>
                                )
                            )}

                        </div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default PackageSearch;