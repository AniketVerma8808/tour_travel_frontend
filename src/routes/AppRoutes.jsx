import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Vehicle from "../pages/Vehicle";
import Packages from "../pages/Packages";
import Reviews from "../pages/Reviews";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import MainLayout from "../components/layout/MobileMenu";
import ScrollToTop from "../components/common/ScrollToTop";
import GalleryPage from "../pages/GalleryPage";
import PackageDetails from "../pages/PackageDetails";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";

const AppRoutes = () => {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
         <Route path="vehicle" element={<Vehicle />} />
        <Route path="packages" element={<Packages />} />
        <Route path="/packages/:slug" element={<PackageDetails />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<TermsConditions/>} />
      <Route path="*" element={<NotFound />} />
      </Route>

    </Routes>
    </>
  );
};

export default AppRoutes;
