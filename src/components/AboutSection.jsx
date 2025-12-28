import { Lightbulb, Pen, ChartSpline } from "lucide-react";
import { cn } from "@/lib/utils";

export const AboutSection = () => {
    return <section id="overmij" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className ="text-3xl md:text-4xl font-bold mb-12 text-center" >
                Maar wie <span className="text-primary"> is </span> Sanjay , eigenlijk?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Online marketeer, copywriter en kattenliefhebber.</h3>
                    <p className="text-justify text-muted-foreground">
                    Ik ben een online marketeer. Waarom is dat belangrijk voor jou? Nou, zie het zo. 
                    Mensen lezen graag boeken, maar ze blokkeren reclames. 
                    Dus als je wilt dat mensen het belangrijk vinden wat je doet, moet je ze je verhaal vertellen. 
                    En dat kan ik als geen ander.
                    </p>

                    <p className="text-justify text-muted-foreground">
                    Maar de beste campagne ter wereld is nog niks waard als je niet weet hoe deze presteert. 
                    Een goede campagne past goed is als je inzicht hebt in de data. 
                    Daarom analyseer ik elke campagne tot in detail. 
                    Zo optimaliseer ik continu en zorg ik dat elke euro die je uitgeeft ook echt resultaat oplevert.
                    Ben je benieuwd hoe ik jou kan helpen jouw verhaal te vertellen? 
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
                                <h4 className="font-semibold text-lg">Planning</h4>
                                <p className="text-muted-foreground">
                                    Altijd plannetjes smeden #snitchesgetstitches
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
                                <h4 className="font-semibold text-lg">Analyse</h4>
                                <p className="text-muted-foreground">
                                    Ik kan die shizzle analysen als de matrix
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </section>;
};