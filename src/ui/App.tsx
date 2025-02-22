import { Widgets } from '../components/Widgets';
import './App.css'
import { BottomContent } from './BottomContent'
import { Navbar } from './Navbar'
import { useEffect, useState } from 'react'

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
        <div className='absolute w-full mt-1'>
          <div className='NavbarRender bg-black bg-opacity-20 m-1 w-[98%] rounded-xl'><Navbar /></div>
          <div className='MainContentBackground flex flex-col bg-base-300 w-[98%] m-1 rounded-xl'>
            <div className='WidgetsRender bg-base-200 m-1 w-[98%] rounded-xl'><Widgets /></div>
          </div>
        </div>
        <BottomContent />
      </div>
    </div>
  )
}

export default App
