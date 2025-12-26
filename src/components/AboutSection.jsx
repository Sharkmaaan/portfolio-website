import { Lightbulb, Pen, ChartSpline } from "lucide-react";
import { cn } from "@/lib/utils";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className ="text-3xl md:text-4xl font-bold mb-12 text-center" >
                Maar wie is <span className="text-primary"> Sanjay</span>, eigenlijk?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Online marketeer, copywriter en kattenliefhebber.</h3>
                    <p className="text-muted-foreground">
                        Random tekst. Random tekst. Random tekst. Random tekst.
                        Random tekst. Random tekst. Random tekst. Random tekst. 
                        Random tekst. Random tekst. Random tekst. Random tekst. 
                        Random tekst. Random tekst. Random tekst. Random tekst. 
                    </p>

                    <p className="text-muted-foreground">
                        Random tekst. Random tekst. Random tekst. Random tekst.
                        Random tekst. Random tekst. Random tekst. Random tekst. 
                        Random tekst. Random tekst. Random tekst. Random tekst. 
                        Random tekst. Random tekst. Random tekst. Random tekst. 
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Stuur me een mail
                        </a>
                        {/* TODO: CV updaten en toevoegen */}
                        <a href="" className={cn("px-6 py-2 rounded-full border border-primary text-primary",
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
                                <h4 className="font-semibold text-lg">Campagne Planning</h4>
                                <p className="text-muted-foreground">
                                    Hier wat tekst over hoe ik dit ga doen
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
                                <h4 className="font-semibold text-lg">Contentcreatie</h4>
                                <p className="text-muted-foreground">
                                    Ik ben een vet goede copywriter jeweet
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
                                <h4 className="font-semibold text-lg">Data Analayse</h4>
                                <p className="text-muted-foreground">
                                    Google Analytics 4
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </section>;
};