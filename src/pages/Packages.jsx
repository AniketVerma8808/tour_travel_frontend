import { useEffect, useState } from "react";
import PackagesHero from "../components/packages/PackagesHero";
import PackageSearch from "../components/packages/PackageSearch";
import FeaturedPackages from "../components/packages/FeaturedPackages";
import CTA from "../components/common/CTA";
import { usePackage } from "../context/PackageContext";

const Packages = () => {
  const { getPackages, getPackageFilters } = usePackage();

  const [filters, setFilters] = useState({
    search: "",
    category: "",
    vehicle: "",
    duration: "",
  });

  // Load filter dropdown options once
  useEffect(() => {
    getPackageFilters();
  }, [getPackageFilters]);

  // Fetch packages whenever filters change
  useEffect(() => {
    getPackages(filters);
  }, [filters, getPackages]);

  return (
    <>
      <PackagesHero />

      <PackageSearch
        filters={filters}
        setFilters={setFilters}
      />

      <FeaturedPackages />

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