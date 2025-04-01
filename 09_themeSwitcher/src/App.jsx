import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/Theme";

function App() {
  const [themeMode, setThemeMode] = useState('light');

   function lightTheme() {
    setThemeMode('light')
  }
   function darkTheme() {
    setThemeMode('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themeBtn*/}
          </div>
          <div>
            <h1 className="bg-blue-400 p-3 rounded-2xl">Theme Switcher</h1>
          </div>
          <div className="w-full max-w-sm mx-auto">{/* Card*/}</div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
