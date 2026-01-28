import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ContactSection = () => {
    const { t } = useTranslation();

    return (
        <section
            id="contact"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {t('contact.title')} <span className="text-primary">{t('contact.say')}</span> {t('contact.title_end')}
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    {t('contact.subtitle')}
                </p>
                <div className="flex flex-col items-center">
                    <div className="space-y-8 w-full max-w-4xl mb-30">
                        {/*<h3 className="text-2xl font-semibold text-center">Contactgegevens</h3>*/}

                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">{t('contact.email')}</h4>
                                    <a href="mailto:contact@sanjayghosh.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                        contact@sanjayghosh.com
                                    </a>
                                </div>
                            </div>
                            {/*<div className="flex flex-col items-center text-center space-y-3">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">{t('contact.phone')}</h4>
                                    <a href="tel:+310623923943" className="text-muted-foreground hover:text-primary transition-colors">
                                        +31 (06) 23923943
                                    </a>
                                </div>
                            </div>*/}
                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">{t('contact.location')}</h4>
                                    <p className="text-muted-foreground">
                                        {t('contact.locationValue')}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Linkedin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">{t('contact.linkedin')}</h4>
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