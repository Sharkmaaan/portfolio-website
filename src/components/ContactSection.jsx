import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const ContactSection = () => {
    return (
        <section 
            id="contact" 
            className="py-24 px-4 relative bg-secondary/30"
        >   <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Neem <span className="text-primary">contact </span> op
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Dus wat zeg je ervan? Als je dit leest heb ik je aandacht toch een flinke tijd vastgehouden. Zullen we kijken of we dat ook voor je doelgroep kunnen doen?
                </p>
                <div className="flex flex-col items-center">
                    <div className="space-y-8 w-full max-w-4xl">
                        <h3 className="text-2xl font-semibold text-center">Contactgegevens</h3>

                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:sanjay@sanjayghosh.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                        info@sanjayghosh.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Telefoon</h4>
                                    <a href="tel:+310623923943" className="text-muted-foreground hover:text-primary transition-colors">
                                        +31 (06) 23923943
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Locatie</h4>
                                    <p className="text-muted-foreground">
                                        Amsterdam, Nederland
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Linkedin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Linkedin</h4>
                                    <a href="https://www.linkedin.com/in/sanjay-ghosh/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                        linkedin.com/in/sanjay-ghosh/
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}