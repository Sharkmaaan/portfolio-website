import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "Over mij", href: "#overmij"},
    {name: "Vaardigheden", href: "#vaardigheden"},
    {name: "Projecten", href: "#projecten"},
    {name: "Contact", href: "#contact"},
]

export const NavBar = () => {
        const [isScrolled, setIsScrolled] = useState(false)
        const [isMenuOpen, setIsMenuOpen] = useState(false)
        const [isDarkmode, setIsDarkmode] = useState(true)

        useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 10)
            }

            window.addEventListener("scroll", handleScroll)
            return () => window.removeEventListener("scroll", handleScroll)

        }, [])

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
        <nav
        className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled ? "md:py-3 md:bg-background/80 md:backdrop-blur-md md:shadow-xs py-5" : "py-5"

        )}
        >
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center"
                href="#hero"
                >
                    <span className = "relative z-10">
                        <span className="text-glow text-foreground"> Sanjay Ghosh </span> Portfolio
                    </span>
                </a>

                {/* desktop nav */}
                <div className = "hidden md:flex items-center space-x-8">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href = {item.href}
                            className = "text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full transition-colors duration-300 focus:outline-hidden"
                        aria-label="Toggle theme"
                    >
                        {isDarkmode ? (
                            <Sun className="h-5 w-5 text-yellow-300" />
                        ) : (
                            <Moon className="h-5 w-5 text-black" fill="currentColor"/>
                        )}
                    </button>
                </div>

                {/* mobile nav */}
                <button 
                    onClick = {() => setIsMenuOpen((prev) => !prev)} 
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24}/> : <Menu size={24} />} {" "}
                </button>
                
                <div className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className = "flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href = {item.href}
                                className = "text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick = {() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full transition-colors duration-300 focus:outline-hidden self-center"
                            aria-label="Toggle theme"
                        >
                            {isDarkmode ? (
                                <Sun className="h-6 w-6 text-yellow-300" />
                            ) : (
                                <Moon className="h-6 w-6 text-black" fill="currentColor"/>
                            )}
                        </button>
                    </div>
                </div>

            </div>
        </nav>
    );
}