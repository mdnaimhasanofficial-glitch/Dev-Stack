import { GiCrossedSwords } from "react-icons/gi";
import type { ITechnology } from "../type";
import NoStack from "./NoStack";
// import type { toast } from "react-toastify";

interface StackProps {
    addStack: ITechnology[];
    handleRemoveStack: (id: string) => void;
    handleRemoveAll: () => void;
}

const Stack = ({
    addStack,
    handleRemoveStack,
    handleRemoveAll
}: StackProps) => {
    return (
        <div>

            {
                addStack.length === 0
                    ? <NoStack />

                    : (
                        <div>
                            <h2 className="text-black font-bold text-2xl">
                                Your Stack
                            </h2>

                            <p className="mb-3">
                                {addStack.length} Technology Selected
                            </p>

                            {
                                addStack.map((card) => (
                                    <div
                                        key={card.id}
                                        className="border flex justify-between items-center border-gray-100 rounded-2xl p-3 mb-2"
                                    >

                                        <div className="stack-img">
                                            <img
                                                src={card.icon}
                                                alt={card.name}
                                                className="w-9 h-9 object-contain"
                                            />
                                        </div>

                                        <div>
                                            <h3>{card.name}</h3>
                                            <p>{card.category}</p>
                                        </div>

                                        <span
                                            onClick={() =>
                                                handleRemoveStack(card.id)

                                            }
                                            className="text-red-500 cursor-pointer"
                                        >
                                            <GiCrossedSwords />
                                        </span>

                                    </div>
                                ))
                            }

                            <div>
                                <button
                                    onClick={handleRemoveAll}
                                    className="btn border border-secondary w-full bg-[#fff2f9de] text-[#ee1f8e]"
                                >
                                    Remove All
                                </button>
                            </div>
                        </div>
                    )
            }

        </div>
    );
};

export default Stack;