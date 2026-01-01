import { useState, useEffect } from "react";
import { cn } from '@/lib/utils';
import { useTranslation } from "react-i18next";

export const SkillsSection = () => {
        const { t } = useTranslation();
        const [activeCategory, setActiveCategory] = useState("all");

        const skills = [
            // Planning
            {name: t('skills.list.marketingStrategy'), level: 90, category: "planning"},
            {name: t('skills.list.campaignPlanning'), level: 85, category: "planning"},
            {name: t('skills.list.icpDevelopment'), level: 80, category: "planning"},
            {name: t('skills.list.customerJourney'), level: 80, category: "planning"},
            {name: t('skills.list.leadGenStrategies'), level: 90, category: "planning"},
            {name: t('skills.list.competitiveAnalysis'), level: 80, category: "planning"},
            {name: t('skills.list.contentCalendar'), level: 90, category: "planning"},

            // Execution
            {name: t('skills.list.copywriting'), level: 95, category: "execution"},
            {name: t('skills.list.contentCreation'), level: 90, category: "execution"},
            {name: t('skills.list.webDesign'), level: 85, category: "execution"},
            {name: t('skills.list.htmlCss'), level: 80, category: "execution"},
            {name: t('skills.list.videoEditing'), level: 70, category: "execution"},
            {name: t('skills.list.cmsManagement'), level: 85, category: "execution"},
            {name: t('skills.list.marketingAutomation'), level: 80, category: "execution"},
            {name: t('skills.list.seoOptimization'), level: 90, category: "execution"},

            // Analysis
            {name: t('skills.list.seoSeaAnalysis'), level: 85, category: "analysis"},
            {name: t('skills.list.abTesting'), level: 80, category: "analysis"},
            {name: t('skills.list.crmAnalytics'), level: 80, category: "analysis"},
            {name: t('skills.list.dataVisualization'), level: 75, category: "analysis"},
            {name: t('skills.list.conversionOptimization'), level: 85, category: "analysis"},

            //Tools
            {name: t('skills.list.googleAnalytics'), level: 85, category: "tools"},
            {name: t('skills.list.googleSearchConsole'), level: 85, category: "tools"},
            {name: t('skills.list.googleDataStudio'), level: 65, category: "tools"},
            {name: t('skills.list.googleTagManager'), level: 75, category: "tools"},
            {name: t('skills.list.googleAds'), level: 75, category: "tools"},
            {name: t('skills.list.semrush'), level: 75, category: "tools"},
            {name: t('skills.list.hubspot'), level: 75, category: "tools"},
            {name: t('skills.list.wordpress'), level: 75, category: "tools"},
            {name: t('skills.list.shopify'), level: 75, category: "tools"},
            {name: t('skills.list.mailchimp'), level: 75, category: "tools"},
            {name: t('skills.list.clickup'), level: 75, category: "tools"},
            {name: t('skills.list.linkedinCampaign'), level: 80, category: "tools"},
            {name: t('skills.list.facebookBusiness'), level: 75, category: "tools"},
        ];

        const categories = [
            { key: "all", label: t('skills.categories.all') },
            { key: "planning", label: t('skills.categories.planning') },
            { key: "execution", label: t('skills.categories.execution') },
            { key: "analysis", label: t('skills.categories.analysis') },
            { key: "tools", label: t('skills.categories.tools') }
        ]

        const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory
    );
    return (
        <section id="vaardigheden" className="py-24 px-4 relative bg-secondary/3">
            <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl mb-4 font-bold text-center">
                {t('skills.title')} <span className="text-primary">{t('skills.can')}</span> {t('skills.title_end')}
            </h2>
            <p className="text-lg md:text-xl max-w-2xl text-muted-foreground mb-10 mx-auto opacity-0 animate-fade-in-delay-3"
            >{t('skills.subtitle')}</p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                <button
                    key={key}
                    onClick={() => setActiveCategory(category.key)}
                    className={cn(
                    "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                    activeCategory === category.key ?
                    "bg-primary text-primary-foreground" :
                    "bg-secondary/70 text-foreground hover:bg-secondary"
                )}
                >
                    {category.label}
                </button>
                ))}

            </div>
            <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Skill cards */}
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover"
                    >
                        {/* Skill name tag */}
                        <div className="text-center mb-4">
                            <h3 className="font-semibold text-lg"> {skill.name} </h3>
                        </div>
                        {/* Progress bar (commented out because I think it's a bit cringe here, but I might use it somewhere else because the animation is cool) */}
                        {/*
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                            style={{width: skill.level + "%"}}
                            />
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">
                                {skill.level}%</span>
                        </div>
                        */}
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}