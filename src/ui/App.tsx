import './App.css'
import { useEffect, useState } from 'react'
import { HashRouter as Router } from 'react-router-dom';

import { BottomContent } from './BottomContent'
import { Navbar } from './Navbar'
import AnimatedRoutes from './AnimatedRoutes';
import { OfficeHoursProvider } from '../context/OfficeHoursContext';


function App() {
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || "customTheme";
  });

  // Updates the theme on localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setTheme(localStorage.getItem("theme") || "customTheme");
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Lintens to changes on the same page
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(localStorage.getItem("theme") || "customTheme");
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className='w-screen h-screen'>
      <div className={theme === "customTheme" ? "spacer backgroundLight" : "spacer backgroundDark"}>
        <OfficeHoursProvider>
          <div className='w-full h-full pb-4 p-3 flex flex-row justify-between'>
            <Router>
              <main className='MainContent flex flex-col rounded-xl justify-between h-full w-full'>
                <AnimatedRoutes />
                <Navbar />
              </main>
            </Router>
            <BottomContent />
          </div>
        </OfficeHoursProvider>
      </div>
    </div>
  );
}

export default App
