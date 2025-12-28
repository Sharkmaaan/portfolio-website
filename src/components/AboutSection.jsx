import { Lightbulb, Pen, ChartSpline } from "lucide-react";
import { cn } from "@/lib/utils";

export const AboutSection = () => {
    return <section id="overmij" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className ="text-3xl md:text-4xl font-bold mb-12 text-center" >
                Maar wie <span className="text-primary"> is </span> Sanjay , eigenlijk?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Online marketeer, copywriter en kattenliefhebber.</h3>
                    <p className="text-justify text-muted-foreground">
                    Ik ben een online marketeer. Waarom is dat belangrijk voor jou? Nou, zie het zo. 
                    Mensen lezen graag boeken, maar ze blokkeren reclames. 
                    Dus als je wilt dat mensen het belangrijk vinden wat je doet, moet je ze je verhaal vertellen. 
                    En dat kan ik als geen ander.
                    </p>

                    <p className="text-justify text-muted-foreground">
                    Goede marketing is eenvoudig en gericht. 
                    Het weet een intens gevoel over te brengen in een hapklaar formaat. 
                    En het is vooral belangrijk dat het goed in de smaak valt bij de doelgroep. 
                    Eigenlijk is goede marketing net een stroopwafel, en daarvan weten we al dat mensen er dol op zijn.
                    </p>

                    <p className="text-justify text-muted-foreground">
                    Maar de beste campagne ter wereld is nog niks waard als je niet weet hoe deze presteert. 
                    Een goede campagne is pas goed als je inzicht hebt in de data. 
                    Daarom analyseer ik elke campagne tot in detail. 
                    Zo zorg ik dat elke euro die je uitgeeft ook echt resultaat oplevert.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Neem contact op
                        </a>
                        {/* TODO: CV updaten en toevoegen */}
                        <a href="/downloads/Marketingspecialist-Sanjay-Ghosh.pdf" download className={cn("px-6 py-2 rounded-full border border-primary text-primary",
                                                 "hover:bg-primary/10 transition-colors duration-300"
                                                 )}>
                            Download mijn CV
                        </a>
                    </div>
                </div>
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
                                    Dr. Faberyayo zei ook: "Een goed begin is maar de helft". 
                                    Dus ook in de uitvoering kan je veel goed of fout doen. 
                                    Mijn ervaring met het uitvoeren van marketingdiensten zorgt
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
                                    leer je steeds beter hoe je aansluit op je doelgroep. En dan ben je alsnog in de lucht als sterrenstof.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </section>;
};