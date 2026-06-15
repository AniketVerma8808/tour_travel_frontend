import PackagesHero from "../components/packages/PackagesHero";
import FeaturedPackages from "../components/packages/FeaturedPackages";
import CTA from "../components/common/CTA";
import PackageSearch from "../components/packages/PackageSearch";
import { useState } from "react";

const Packages = () => {
  const [filters, setFilters] = useState({
    search: "",
    duration: "",
    category: "",
    vehicle: "",
  });
  return (
    <>
      <PackagesHero />

      <PackageSearch
        filters={filters}
        setFilters={setFilters}
      />

      <FeaturedPackages
        filters={filters}
      />


      <CTA
        title="Ready To Explore"
        highlight="Amazing Destinations?"
        description="Book your luxury travel package today and enjoy a safe, comfortable and memorable journey."
        showWhatsapp={false}
        bgClass="bg-[#080808]"
      />
    </>
  );
};

export default Packages;