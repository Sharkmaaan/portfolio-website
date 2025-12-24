import { cn } from "@/lib/utils";
import { useEffect } from "react";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "Over mij", href: "#overmij"},
    {name: "Vaardigheden", href: "#vaardigheden"},
    {name: "Projecten", href: "#projecten"},
    {name: "Contact", href: "#contact"},
]

export const NavBar = () => {
        const[isScrolled, setisScrolled] = useState(false)

        useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.screenY > 10)
            }

            window.addEventListener("scroll", handleScroll)
            return () => window.removeEventListener("scroll", handleScroll)
        
        }, [])
    return (
        <nav 
        className={cn(
            "fixed w-full z-40 transition-all duration-300", 
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5" 

        )}
        ></nav>
    );
}