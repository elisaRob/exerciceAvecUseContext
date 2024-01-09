import { ThemeModeContext } from "../contexts/ThemeModeContext";
import { useContext } from "react"

export function Level5(props) {
  const { themeMode, setThemeMode } = useContext(ThemeModeContext)
  function toggleThemeMode(){
    setThemeMode(themeMode==="light" ? "dark" : "light")
  }
    return (
    <>
      <div>Niveau de profondeur 5</div>
      <button onClick={toggleThemeMode}>Changer le mode du theme {themeMode === "light"? "dark" : "light" }</button>
    </>
  );
}
