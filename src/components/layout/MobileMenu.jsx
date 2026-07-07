import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopNav from "./TopNav";

const MainLayout = () => {
  return (
    <>
    <TopNav/>
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
