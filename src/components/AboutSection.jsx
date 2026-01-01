import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export const AboutSection = () => {
    const { t } = useTranslation();

    return <section id="overmij" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className ="text-3xl md:text-4xl font-bold mb-12 text-center" >
                {t('about.title')} <span className="text-primary">{t('about.is')}</span> {t('about.title_end')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold">{t('about.subtitle')}</h3>
                    <p className="text-justify text-muted-foreground">
                    {t('about.paragraph1')}
                    </p>

                    <p className="text-justify text-muted-foreground">
                    {t('about.paragraph2')}
                    </p>

                    <p className="text-justify text-muted-foreground">
                    {t('about.paragraph3')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {t('about.cta_contact')}
                        </a>
                        {/* TODO: CV updaten en toevoegen */}
                        <a href="/downloads/Marketingspecialist-Sanjay-Ghosh.pdf" download className={cn("px-6 py-2 rounded-full border border-primary text-primary",
                                                 "hover:bg-primary/10 transition-colors duration-300"
                                                 )}>
                            {t('about.cta_cv')}
                        </a>
                    </div>
                </div>
                <div className="relative w-full h-full">
                    <div className="gradient-border p-4 card-hover rounded-2xl overflow-hidden">
                        <img
                            src="/Happycopywriter.jpg"
                            style={{ transform: 'scaleX(-1)' }}
                            alt={t('about.image_alt')}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* OLD CONTENT - COMMENTED OUT
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Lightbulb className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Planning</h4>
                                <p className="text-muted-foreground">
                                    Zoals Faberyayo al zei:
                                    "Een goed begin is het halve werk".
                                    Door informatie op te halen uit de organisatie en
                                    die in te plannen in een marketingkalender,
                                    zorg ik ervoor dat het ook echt een goed begin is.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Pen className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Uitvoering</h4>
                                <p className="text-muted-foreground">
                                    Faberyayo zei ook: "Een goed begin is maar de helft".
                                    Ook in de uitvoering kan je veel goed of fout doen.
                                    Mijn ervaring met het uitvoeren van marketingdiensten zorgt ervoor
                                    dat je ook een goede tweede helft speelt.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <ChartSpline className="h-6 w-6 text-primary"/>
                            </div >
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Analyse</h4>
                                <p className="text-muted-foreground">
                                    Helaas vergat Faberyayo in zijn haast de derde helft.
                                    Maar ik niet. Door goed te analyseren wat werkt en wat niet,
                                    leer je steeds beter hoe je aansluit op je doelgroep.
                                    En dan ben je alsnog in de lucht als sterrenstof.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                */}
            </div>

        </div>
    </section>;
};