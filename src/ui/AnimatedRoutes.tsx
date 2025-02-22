import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { SalaryInDollar } from '../components/Widgets';
import { OfficeHours } from '../pages/OfficeHours/OfficeHours';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: 20 }} 
              transition={{ duration: 0.3 }}
            >
              <SalaryInDollar />
            </motion.div>
          }
        />
        <Route 
          path="OfficeHours" 
          element={
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: 20 }} 
              transition={{ duration: 0.3 }}
            >
              <OfficeHours />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
