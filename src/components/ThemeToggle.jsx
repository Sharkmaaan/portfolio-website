import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export const ThemeToggle = () => {
    const [isDarkmode,setIsDarkmode] = useState(true);

    const toggleTheme = () => {
        if (isDarkmode) {

            setIsDarkmode(false);
        } else {
            setIsDarkmode(true);
        }
    }

    return (
        <button onClick={toggleTheme}> 
            {isDarkmode ? (
                <Sun className="h-6 w-6 text-yellow-300" /> 
            ) : ( 
                <Moon className="h-6 w-6 text-blue-900"/>
            )}
            </button>
)}