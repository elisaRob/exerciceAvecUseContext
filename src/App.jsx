import React, { useState, useContext } from "react";
import { Level1 } from "./components/Level1";
import { THEME, ThemeModeContext } from "./contexts/ThemeModeContext";

export function App() {
  const initialThemeMode = useContext(ThemeModeContext);
  const [themeMode, setThemeMode] = useState(initialThemeMode);
  
  return (
    <ThemeModeContext.Provider value={{themeMode, setThemeMode}}>
      <div style={{ color: THEME[themeMode].textColor, backgroundColor: THEME[themeMode].backgroundColor }}>
        <Level1 />
      </div>
    </ThemeModeContext.Provider>
  );
}
