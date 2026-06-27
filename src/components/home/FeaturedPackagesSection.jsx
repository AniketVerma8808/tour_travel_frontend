import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import PackageGrid from "../packages/PackageGrid";

import img1 from "../../assets/gallery/travel1.jpeg";
import img2 from "../../assets/gallery/travel2.jpeg";
import img3 from "../../assets/gallery/travel3.jpeg";

const featuredPackages = [
  {
    id: 1,
    image: img1,
    featured: true,
    title: "Varanasi Spiritual Tour",
    location: "Varanasi",
    duration: "2 Days / 1 Night",
    persons: "2-7 Persons",
    rating: 5,
    reviews: 245,
    oldPrice: 6499,
    price: 4999,
    discount: 25,
    description:
      "Experience the divine beauty of Kashi with premium sightseeing, Ganga Aarti and luxury Innova travel.",
  },
  {
    id: 2,
    image: img2,
    featured: false,
    title: "Ayodhya Heritage Tour",
    location: "Ayodhya",
    duration: "Full Day Tour",
    persons: "2-7 Persons",
    rating: 5,
    reviews: 178,
    oldPrice: 4999,
    price: 3499,
    discount: 20,
    description:
      "Visit Ram Mandir, Hanuman Garhi and major attractions with a comfortable luxury journey.",
  },
  {
    id: 3,
    image: img3,
    featured: false,
    title: "Prayagraj Sangam Tour",
    location: "Prayagraj",
    duration: "1 Day Tour",
    persons: "2-7 Persons",
    rating: 5,
    reviews: 152,
    oldPrice: 6999,
    price: 5499,
    discount: 22,
    description:
      "Enjoy Triveni Sangam, Anand Bhavan and famous attractions with a premium chauffeur-driven vehicle.",
  },
];

const FeaturedPackagesSection = () => {
  const navigate = useNavigate();

  const handleBookNow = (pkg) => {
    console.log("Book:", pkg);
    // Later:
    // open booking popup
  };

  const handleViewDetails = (pkg) => {
    console.log(pkg);

    // Later:
    // navigate(`/packages/${pkg.slug}`)
  };

  return (
    <section className="section-padding bg-[#111111] relative overflow-hidden">
      {/* Background Glow */}

      <div className="absolute left-0 top-0 w-[450px] h-[450px] bg-[#C9A227]/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 w-[450px] h-[450px] bg-[#C9A227]/10 blur-[180px]" />

      <div className="container-custom relative z-10">
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
          className="text-center max-w-3xl mx-auto"
        >
          <span className="section-subtitle">
            Featured Packages
          </span>

          <h2 className="section-title mt-4">
            Luxury Tours Crafted
            <span className="gradient-text block">
              For Every Journey
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto">
            Explore our hand-picked premium travel packages
            designed for families, tourists, pilgrims and
            corporate travellers with luxury comfort and
            unforgettable experiences.
          </p>
        </motion.div>

        {/* Package Grid */}

        <div className="mt-16">
          <PackageGrid
            packages={featuredPackages}
            onBookNow={handleBookNow}
            onViewDetails={handleViewDetails}
          />
        </div>

        {/* Bottom CTA */}

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
            delay: 0.2,
          }}
          className="text-center mt-20"
        >
          <button
            onClick={() => navigate("/packages")}
            className="btn-primary"
          >
            View All Packages

            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPackagesSection;