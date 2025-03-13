import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { OfficeHours } from '../pages/OfficeHours/OfficeHours';
import { CompletedTasks } from '../pages/CompletedTasks/CompletedTasks';
import { Tasks } from './Tasks';
import { MainContent } from '../pages/Main/MainContent';


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
              <MainContent />
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
        <Route 
          path="CompletedTasks" 
          element={
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: 20 }} 
              transition={{ duration: 0.3 }}
            >
              <CompletedTasks />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
