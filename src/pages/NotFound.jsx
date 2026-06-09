import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold">404</h1>

      <Link to="/" className="mt-5 px-6 py-3 bg-yellow-500 rounded-full">
        Back Home
      </Link>
    </div>
  );
};

export default NotFound;
