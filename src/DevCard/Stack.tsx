import { GiCrossedSwords } from "react-icons/gi";
import type { ITechnology } from "../type";

interface StackProps{
    addStack: ITechnology[];
}

const Stack = ({addStack}:StackProps) => {
    return (
        <div className="">
            <h2 className="text-black font-bold text-2xl">Your Stack</h2>
            <p className="mb-3">{addStack.length} Technology Selected</p>

            {
                addStack.map((card)=> (
                    <div key={card.id} className="border flex justify-between items-center border-gray-100 rounded-2xl p-3 mb-2">
                        <div className="stack-img">
                            <img
                        src={card.icon}
                        alt={card.name}
                        className="w-9 h-9 object-contain"
                    />
                    </div>
                    <div>
                        <h3 className="">{card.name}</h3>
                        <p>{card.category}</p>
                    </div>
                    <span><GiCrossedSwords /></span>

                    </div>
                ))
            }
            
        </div>
    );
};

export default Stack;