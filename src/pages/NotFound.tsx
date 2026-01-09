import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-md"
      >
        <h1 className="font-display text-8xl font-bold text-gradient-gold mb-4">
          404
        </h1>
        <h2 className="font-display text-2xl text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="font-body text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-gold text-primary-foreground font-body text-sm uppercase tracking-wider rounded-sm hover-gold-glow transition-all duration-300"
        >
          <Home size={18} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
