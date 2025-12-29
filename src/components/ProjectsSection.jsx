const projects = [
    {
        id: 1,
        title: "Marketingcampagnes voor Yokoy",
        description: `De LinkedIn campagnes van deze B2B fintech leken wel érg veel op de concurrentie. "Bespaar tonnen aan geld". En je zag in GA4 dat er daardoor weinig mensen klikten.

Dus besloot ik de aandacht te trekken met een andere boodschap. Bespaar een beetje. Maar keer op keer. De "Alles telt op"-campagne.

Zorgde voor 120% van de verwachte leads op LinkedIn en een gratis sushibuffet voor ons team. Lijkt altijd weinig eten maar dat telt ook op.`,
        image: "/projects/project1.jpg",
        tags: ["Campagneplanning", "Copywriting", "Conversieanalyse", "Landingspagina design", "Nieuwsbrieven", "Email Marketing"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "SEO-blogs voor Primal Soles",
        description: `Deze e-commerce webshop heeft inlegzolen die lekker lopen, maar met de websitebezoeken liep het minder.

Ik maakte een SEO-geoptimaliseerde content campagne voor ze en maakte content die mensen naar hun toetrok. Dit zorgde voor meerdere nr 1 plekken in Google voor juiste zoektermen en een toename van 30% in websiteverkeer.

Op basis van de lessen die we uit vorige campagnes leerden schaalden we steeds verder. Dat is nog eens lekker afgelopen.`,
        image: "/projects/project2.jpg",
        tags: ["SEO-optimalisatie", "Copywriting", "Zoekwoordenanalyse"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "B2B IT-copywriting voor Leadgate",
        description: `IT-professionals weten vaak heel veel, maar vinden het lastig communiceren met minder technische mensen. En geloof me, dat is wederzijds.

Maar veel marketers snappen IT ook niet zo goed en raken daardoor kant nog wal. Leadgate was daarom erg blij dat ik ze kon helpen met hun B2B IT-klanten.

Het resultaat? Teksten die complexe materie simpel en toegankelijk maken voor iedereen.`,
        image: "/projects/project3.png",
        tags: ["B2B copywriting", "IT-content", "Technische communicatie", "Conversieoptimalisatie"],
        demoUrl: "#",
        githubUrl: "#",
    },
]

export const ProjectsSection = () => {
    return <section id="projecten" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Wow, bij <span className="text-primary"> wie </span> heeft ie dat allemaal gedaan dan?
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            >Ik heb met meer dan 40 bedrijven samengewerkt, dus dat is wat veel om hier allemaal neer te knallen. 
            Voor nu dus even de highlights. 
            Vraag het gerust als je wilt weten of ik met iets specifieks ervaring heb.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project,key) => (
                <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                >
                    <div className="h-80 overflow-hidden">
                        <img src={project.image} alt={project.title} className="bg-white w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
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