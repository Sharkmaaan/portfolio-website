import { useState, useEffect } from "react";
import { cn } from '@/lib/utils'

const skills = [
    // Planning
    {name: "Marketingstrategie", level: 90, category: "Planning"},
    {name: "Campagne & contentplanning", level: 85, category: "Planning"},
    {name: "ICP-ontwikkeling", level: 80, category: "Planning"},
    {name: "Customer journey mapping", level: 80, category: "Planning"},
    {name: "Lead-gen strategieën", level: 90, category: "Planning"},
    {name: "Concurrentieanalyse", level: 80, category: "Planning"},
    {name: "Contentkalenderbeheer", level: 90, category: "Planning"},

    // Uitvoering
    {name: "Copywriting", level: 95, category: "Uitvoering"},
    {name: "Contentcreatie", level: 90, category: "Uitvoering"},
    {name: "Webdesign", level: 85, category: "Uitvoering"},
    {name: "HTML/CSS", level: 80, category: "Uitvoering"},
    {name: "Video editing", level: 70, category: "Uitvoering"},
    {name: "CMS-beheer", level: 85, category: "Uitvoering"},
    {name: "Marketing-automatisering", level: 80, category: "Uitvoering"},
    {name: "SEO-optimalisatie", level: 90, category: "Uitvoering"},

    // Analyse
    {name: "SEO/SEA-analyse", level: 85, category: "Analyse"},
    {name: "Google Analytics 4 (GA4)", level: 85, category: "Analyse"},
    {name: "Google Search Console (GSC)", level: 85, category: "Analyse"},
    {name: "A/B testing", level: 80, category: "Analyse"},
    {name: "Google Data Studio/Looker", level: 65, category: "Analyse"},
    {name: "CRM analytics", level: 80, category: "Analyse"},
    {name: "Google Tag Manager (GTM)", level: 75, category: "Analyse"},
]

const categories =["Alle", "Planning", "Uitvoering", "Analyse"]
export const SkillsSection = () => {
        const [activeCategory, setActiveCategory] = useState("Alle")

        const filteredSkills = skills.filter((skill) => activeCategory ==="Alle" || skill.category === activeCategory
    );
    return (
        <section id="vaardigheden" className="py-24 px-4 relative bg-secondary/3">
            <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl mb-4 font-bold text-center">
                Dus wat <span className="text-primary">kan</span> ie dan?
            </h2>
            <p className= "text-lg md:text-xl text-max-w-2xl text-muted-foreground mb-10 mx-auto opacity-0 animate-fade-in-delay-3">Nou, best wel veel eigenlijk.</p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                <button 
                    key={key} 
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                    "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                    activeCategory === category ? 
                    "bg-primary text-primary-foreground" : 
                    "bg-secondary/70 text-foreground hover: bg-secondary"
                )}
                >
                    {category}
                </button>
                ))}

            </div>
            <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Skill cards */}
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover"
                    >
                        {/* Skill name tag */}
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg"> {skill.name} </h3>
                        </div>
                        {/* Progress bar */}
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" 
                            style={{width: skill.level + "%"}}
                            />
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">
                                {skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}