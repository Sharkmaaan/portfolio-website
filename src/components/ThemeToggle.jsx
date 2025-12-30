import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = ({ className, iconSize = "h-5 w-5" }) => {
    const [isDarkmode, setIsDarkmode] = useState(true);

    /* Check for stored theme preference, default to dark */
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "light") {
            setIsDarkmode(false);
            document.documentElement.classList.remove("dark");
        } else {
            // Default to dark mode
            setIsDarkmode(true);
            document.documentElement.classList.add("dark");
            if (!storedTheme) {
                localStorage.setItem("theme", "dark");
            }
        }
    }, []);

    /* Toggle between light and dark themes */
    const toggleTheme = () => {
        if (isDarkmode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkmode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkmode(true);
        }
    }

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "p-2 rounded-full transition-colors duration-300 focus:outline-hidden",
                className
            )}
            aria-label="Toggle theme"
        >
            {isDarkmode ? (
                <Sun className={cn(iconSize, "text-yellow-300")} />
            ) : (
                <Moon className={cn(iconSize, "text-black")} fill="currentColor"/>
            )}
        </button>
    )
}