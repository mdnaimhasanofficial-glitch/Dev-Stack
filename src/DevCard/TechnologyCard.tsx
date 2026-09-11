import { use } from "react";
import type { ITechnology } from "../type";
import TechCard from "./TechCard";

interface TechnologyProps{
    technologyPromise: Promise<ITechnology[]>;
}

const TechnologyCard = ({technologyPromise}: TechnologyProps) => {
    const cards = use(technologyPromise);
    console.log(cards );
    return (
        <div className="flex gap-4 container mx-auto">
            <div className="grid grid-cols-3 gap-4 w-[80%] bg-white my-10">
                {
                    cards.map((card) => <TechCard key={card.id} card={card}></TechCard>)
                }

            </div>
            <div className="w-[20%] mt-10 ">
                <h2>This is div</h2>
            </div>
        </div>
    );
};

export default TechnologyCard;