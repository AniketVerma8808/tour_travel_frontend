import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-[#080808] relative overflow-hidden flex items-center justify-center">
      {/* Gold Glow */}

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#C9A227]/10 blur-[180px]" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C9A227]/10 blur-[180px]" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* 404 */}

          <h1 className="text-[120px] md:text-[180px] lg:text-[220px] font-bold leading-none gradient-text">
            404
          </h1>

          {/* Heading */}

          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Page Not Found
          </h2>

          {/* Description */}

          <p className="mt-6 max-w-xl mx-auto text-lg">
            The page you are looking for may have been moved,
            deleted or does not exist.
          </p>

          {/* Button */}

          <Link
            to="/"
            className="btn-primary mt-10 inline-flex"
          >
            <ArrowLeft size={18} />
            Back To Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;