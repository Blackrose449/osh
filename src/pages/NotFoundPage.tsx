import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-navy via-gray-900 to-primary-navy flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-white max-w-md"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="text-9xl font-bold font-sora mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-blue-400"
        >
          404
        </motion.div>
        <h1 className="text-3xl font-bold font-sora mb-4">Page Not Found</h1>
        <p className="text-gray-300 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Home className="w-5 h-5" />
              Back to Home
            </Button>
          </Link>
          <Button onClick={() => window.history.back()}>
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
