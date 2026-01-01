import { useTranslation } from "react-i18next";

export const ProjectsSection = () => {
    const { t } = useTranslation();

    const projects = [
        {
            id: 1,
            title: t('projects.items.yokoy.title'),
            description: t('projects.items.yokoy.description'),
            image: "/projects/project1.jpg",
            tags: t('projects.items.yokoy.tags', { returnObjects: true }),
            demoUrl: "#",
            githubUrl: "#",
        },
        {
            id: 2,
            title: t('projects.items.primalSoles.title'),
            description: t('projects.items.primalSoles.description'),
            image: "/projects/project2.jpg",
            tags: t('projects.items.primalSoles.tags', { returnObjects: true }),
            demoUrl: "#",
            githubUrl: "#",
        },
        {
            id: 3,
            title: t('projects.items.leadgate.title'),
            description: t('projects.items.leadgate.description'),
            image: "/projects/project3.png",
            tags: t('projects.items.leadgate.tags', { returnObjects: true }),
            demoUrl: "#",
            githubUrl: "#",
        },
        {
            id: 6,
            title: t('projects.items.contentStrategy.title'),
            description: t('projects.items.contentStrategy.description'),
            image: "/projects/project6.svg",
            tags: t('projects.items.contentStrategy.tags', { returnObjects: true }),
            demoUrl: "#",
            githubUrl: "#",
        },
        {
            id: 7,
            title: t('projects.items.horaEst.title'),
            description: t('projects.items.horaEst.description'),
            image: "/projects/project7.webp",
            tags: t('projects.items.horaEst.tags', { returnObjects: true }),
            demoUrl: "#",
            githubUrl: "#",
        },
        {
            id: 8,
            title: t('projects.items.psychologyPlatform.title'),
            description: t('projects.items.psychologyPlatform.description'),
            image: "/projects/project8.svg",
            tags: t('projects.items.psychologyPlatform.tags', { returnObjects: true }),
            demoUrl: "#",
            githubUrl: "#",
        },
    ];

    return <section id="projecten" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {t('projects.title')} <span className="text-primary">{t('projects.who')}</span> {t('projects.title_end')}
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            >{t('projects.subtitle')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project,key) => (
                <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                >
                    <div className="h-80 overflow-hidden">
                        <img src={project.image} alt={project.title} className="bg-white w-full h-full object-contain transition-transform duration-500 scale-110 group-hover:scale-120"/>
                    </div>

                    <div className="p-6">
                        <h3 className="text-left text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-left text-muted-foreground text-sm mb-4 whitespace-pre-line">
                            {project.description}
                        </p>                     
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, tagIndex) => (
                                <span key={tagIndex} className=" px-2 py-1 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                ))}

            </div>
        </div>

    </section>
};