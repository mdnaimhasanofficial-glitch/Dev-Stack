import { use, useState } from "react";
import type { ITechnology } from "../type";
import TechCard from "./TechCard";
import Stack from "./Stack";

interface TechnologyProps{
    technologyPromise: Promise<ITechnology[]>;
}




const TechnologyCard = ({technologyPromise}: TechnologyProps) => {
    // const [addTechnology, setAddTechnology]=useState();
    // const handleAddTechnolody = (card: ITechnology) =>void
    //     const newAddTechnology = []

    // Stacte declaration 
    const [addStack,  setAddStack] = useState<ITechnology[]>([]);
    const cards = use(technologyPromise);

    // Handler
    const handleAddStack =(card : ITechnology): void=> {
        const newAddStack = [...addStack , card];
        setAddStack(newAddStack);

    }


    return (
        <div className="flex gap-4 container mx-auto">
            <div className="grid grid-cols-3 gap-4 w-[80%] bg-white my-10 ">
                {
                    cards.map((card) => <TechCard key={card.id} card={card} handleAddStack={handleAddStack}></TechCard>)
                }

            </div>
            <div className="w-[20%] my-10 text-gray-500 border border-gray-200 rounded-2xl p-5 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <Stack addStack={addStack}>

                </Stack>
            </div>
        </div>
    );
};

export default TechnologyCard;