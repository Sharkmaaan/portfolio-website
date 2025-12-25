import { useEffect, useState } from "react";

export const HeroSection = () => {
    return <section id="hero" className="realtive min-h-screen flex flex-col items-center justify-center px4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hoi, ik ben </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">Sanjay </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Ghosh </span>
                </h1>
                <p>
                    Er zijn net zo veel organisaties als sterren aan de hemel. 
                    Maar met mijn als online marketeer, spring jouw bedrijf eruit.
                    

                </p>

            </div>

        </div>

    </section>
}