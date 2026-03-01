import { useTranslation } from "react-i18next";

export const CertificationsSection = () => {
    const { t } = useTranslation();

    const certifications = [
        {
            id: 1,
            title: "Digital Marketing",
            provider: "HubSpot Academy",
            image: "https://hubspot-credentials-na1.s3.amazonaws.com/prod/badges/user/bf9a4405a37f4b68bfa4d251c1af4c81.png",
            url: "https://app-eu1.hubspot.com/academy/achievements/ybzksl0f/en/1/sanjay-ghosh/digital-marketing",
        },
    ];

    return <section id="certificaten" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {t('certifications.title')} <span className="text-primary">{t('certifications.has')}</span> {t('certifications.title_end')}
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                {t('certifications.subtitle')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {certifications.map((cert) => (
                    <a
                        key={cert.id}
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover p-6 flex flex-col items-center text-center max-w-sm w-full"
                    >
                        <div className="mb-4 flex items-center justify-center h-32">
                            <img
                                src={cert.image}
                                alt={`${cert.title} certification badge`}
                                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                        <p className="text-muted-foreground text-sm">{cert.provider}</p>
                    </a>
                ))}
            </div>
        </div>
    </section>
};
