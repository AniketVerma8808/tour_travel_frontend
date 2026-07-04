import {
    createContext,
    useContext,
    useState,
    useCallback,
} from "react";

import { getAllPackagesService, getPackageBySlugService, getPackageFiltersService } from "../services/package.service";

const PackageContext = createContext(null);

export const PackageProvider = ({ children }) => {
    const [packages, setPackages] = useState([]);
    const [featuredPackages, setFeaturedPackages] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [filterOptions, setFilterOptions] = useState({
        categories: [],
        durations: [],
        vehicles: [],
        locations: [],
    });

    /**
     * Get All Packages
     */
    const getPackages = useCallback(async (params = {}) => {
        try {
            setLoading(true);

            const res = await getAllPackagesService(params);
            if (res?.data?.success) {
                setPackages(res.data.packages || []);
            } else {
                setPackages([]);
            }
        } catch (error) {
            console.error("Get Packages Error:", error);
            setPackages([]);
        } finally {
            setLoading(false);
        }
    }, []);

    /**
     * Get Featured Packages
     */
    const getFeaturedPackages = useCallback(async () => {
        try {
            setLoading(true);
            const res = await getAllPackagesService();

            if (res?.data?.success) {
                setFeaturedPackages(res.data.packages || []);
            } else {
                setFeaturedPackages([]);
            }
        } catch (error) {
            console.error(
                "Get Featured Packages Error:",
                error
            );
            setFeaturedPackages([]);
        } finally {
            setLoading(false);
        }
    }, []);


    const getPackageBySlug = useCallback(async (slug) => {
        try {
            setLoading(true);

            const res = await getPackageBySlugService(slug);

            if (res?.data?.success) {
                setSelectedPackage(res.data.package);
            } else {
                setSelectedPackage(null);
            }
        } catch (error) {
            console.error("Get Package Details Error:", error);
            setSelectedPackage(null);
        } finally {
            setLoading(false);
        }
    }, []);


    const getPackageFilters = useCallback(async () => {
        try {
            const res = await getPackageFiltersService();

            if (res?.data?.success) {
                setFilterOptions({
                    categories: res.data.filterOptions?.categories || [],
                    durations: res.data.filterOptions?.durations || [],
                    vehicles: res.data.filterOptions?.vehicles || [],
                    locations: res.data.filterOptions?.locations || [],
                });
            } else {
                setFilterOptions({
                    categories: [],
                    durations: [],
                    vehicles: [],
                    locations: [],
                });
            }
        } catch (error) {
            console.error("Get Package Filters Error:", error);

            setFilterOptions({
                categories: [],
                durations: [],
                vehicles: [],
                locations: [],
            });
        }
    }, []);
    /**
     * Clear Packages
     */
    const clearPackages = () => {
        setPackages([]);
        setFeaturedPackages([]);
        setSelectedPackage(null);

        setFilterOptions({
            categories: [],
            durations: [],
            vehicles: [],
            locations: [],
        });
    };

    return (
        <PackageContext.Provider
            value={{
                packages,
                featuredPackages,
                selectedPackage,
                filterOptions,
                loading,
                getPackages,
                getFeaturedPackages,
                getPackageBySlug,
                getPackageFilters,
                clearPackages,
            }}
        >
            {children}
        </PackageContext.Provider>
    );
};

export const usePackage = () => {
    const context = useContext(PackageContext);

    if (!context) {
        throw new Error(
            "usePackage must be used inside PackageProvider"
        );
    }

    return context;
};