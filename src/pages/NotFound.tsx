
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-600 p-6">
      <div className="glass-card max-w-md w-full p-8 text-center">
        <h1 className="text-6xl font-bold text-purple-500 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">This page is under development</p>
        <Link 
          to="/" 
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-purple transition-all hover:bg-purple-dark"
        >
          <ArrowLeft size={16} className="mr-2" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
