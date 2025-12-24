import { useEffect, useState } from "react";

export const StarBackground = () => {
    //Stars: id, size, x, y, opacity, animationDuration
    //Meteors: id, size, x, y, delay, animationDuration

    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor
            (window.innerWidth * window.innerHeight/ 100000 //Adjusts star density
                
        );
        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, // Size between 1 and 4
                x: Math.random() * 100, // Position anywhere on x axis of screen width
                y: Math.random() * 100, // Position anywhere on y axis of screen height
                opacity: Math.random() * 0.5 + 0.5, // Opacity between 0.5 and 1
                animationDuration: Math.random() * 4 +  2, // Duration between 2s and 6s
            });
        } 

        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 4; //Fixed number of meteors
        const newMeteors = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1, // Size between 1 and 4
                x: Math.random() * 100, // Position anywhere on x axis of screen width
                y: Math.random() * 20, // Position in top 20% of screen height
                delay: Math.random() * 15, // Delay between 0s and 15s
                animationDuration: Math.random() * 3 +  3, // Duration between 2s and 6s
            });
        } 

        setMeteors(newMeteors);
    };
    
    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div key={star.id} className="star animate-pulse-subtle" style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
            }} />
        ))}

              {meteors.map((meteor) => (
            <div key={meteor.id} className="meteor animate-meteor" style={{
                width: meteor.size + "px",
                height: meteor.size + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                animationDelay: meteor.delay,
                animationDuration: meteor.animationDuration + "s",
            }} />
        ))}
    </div>
}