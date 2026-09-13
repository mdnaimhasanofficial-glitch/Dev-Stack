import { use, useState } from "react";
import type { ITechnology } from "../type";
import TechCard from "./TechCard";
import Stack from "./Stack";
import { toast } from "react-toastify";

interface TechnologyProps {
    technologyPromise: Promise<ITechnology[]>;
}

const TechnologyCard = ({ technologyPromise }: TechnologyProps) => {

    // Stacte declaration 
    const [addStack, setAddStack] = useState<ITechnology[]>([]);
    const cards = use(technologyPromise);

    const handleRemoveStack = (id: string) => {
        const remainingCards = addStack.filter(item => item.id !== id);
        setAddStack(remainingCards)
        toast.warning(`Remove Stack Item`)
    }

    const handleRemoveAll = () => {
        setAddStack([]);
        toast.warning(`Remove all stack!`)
    }

    // Handler
    const handleAddStack = (card: ITechnology) => {
        const newAddStack = [...addStack, card];
        setAddStack(newAddStack);
        toast.success(`${card.name} added to stack!`);
    }

    return (
        <div className="flex flex-col lg:flex-row gap-4 container mx-auto px-4">

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full lg:w-[75%] bg-white my-10">

                {
                    cards.map((card) =>
                        <TechCard
                            key={card.id}
                            card={card}
                            handleAddStack={handleAddStack}
                            isAdded={addStack.some(item => item.id === card.id)}
                        />
                    )
                }

            </div>

            <div className="w-full lg:w-[25%] my-10 text-gray-500 border border-gray-200 rounded-2xl p-5 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                <Stack
                    addStack={addStack}
                    handleRemoveStack={handleRemoveStack}
                    handleRemoveAll={handleRemoveAll}
                />

            </div>

        </div>
    );
};

export default TechnologyCard;