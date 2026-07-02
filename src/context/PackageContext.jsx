import {
    createContext,
    useContext,
    useState,
    useCallback,
} from "react";

import { getAllPackagesService, getPackageBySlugService } from "../services/package.service";

const PackageContext = createContext(null);

export const PackageProvider = ({ children }) => {
    const [packages, setPackages] = useState([]);
    const [featuredPackages, setFeaturedPackages] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [loading, setLoading] = useState(false);

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

            const res = await getAllPackagesService({
                featured: true,
                limit: 3,
            });

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

    /**
     * Clear Packages
     */
    const clearPackages = () => {
        setPackages([]);
        setFeaturedPackages([]);
        setSelectedPackage(null);
    };

    return (
        <PackageContext.Provider
            value={{
                packages,
                featuredPackages,
                selectedPackage,
                loading,
                getPackages,
                getFeaturedPackages,
                getPackageBySlug,
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