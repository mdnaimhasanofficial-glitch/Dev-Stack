
import { FaStar } from "react-icons/fa";
import type { ITechnology } from "../type";

interface CardType {
    card: ITechnology;
    handleAddStack: (card: ITechnology) => void;
    isAdded: boolean;
}

const TechCard = ({ card, handleAddStack, isAdded }: CardType) => {

    const handleVisited = () => {
        handleAddStack(card);
    };

    return (
        <div
            className={`
                group
                rounded-2xl
                p-4 sm:p-5
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
                border-2
                ${isAdded
                    ? "border-[#f158aae1]"
                    : "border-gray-200"
                }
            `}
        >

            {/* Card Header */}
            <div className="
                flex
                justify-between
                items-start
                mb-5
                gap-3
            ">

                {/* Technology Icon */}
                <div className="
                    w-12 h-12
                    sm:w-14 sm:h-14
                    shrink-0
                    rounded-xl
                    bg-gray-50
                    border border-gray-100
                    flex items-center justify-center
                    group-hover:bg-gray-100
                    transition
                ">
                    <img
                        src={card.icon}
                        alt={card.name}
                        className="
                            w-8 h-8
                            sm:w-9 sm:h-9
                            object-contain
                        "
                    />
                </div>

                {/* Badge */}
                <span className="
                    px-2.5 sm:px-3
                    py-1
                    rounded-full
                    text-[10px] sm:text-xs
                    font-medium
                    bg-gray-100
                    text-gray-700
                    whitespace-nowrap
                ">
                    {card.badge}
                </span>
            </div>


            {/* Technology Name */}
            <h2 className="
                text-lg sm:text-xl
                font-bold
                text-gray-900
                mb-2
            ">
                {card.name}
            </h2>


            {/* Description */}
            <p className="
                text-xs sm:text-sm
                text-gray-500
                leading-5 sm:leading-6
                pb-4
                border-b border-gray-100
                min-h-20.5
            ">
                {card.description}
            </p>


            {/* Information */}
            <div className="
                flex
                items-center
                justify-between
                gap-2
                py-4
            ">

                {/* Category */}
                <span className="
                    px-2 sm:px-3
                    py-1.5
                    rounded-lg
                    bg-gray-50
                    text-[10px] sm:text-xs
                    font-medium
                    text-gray-700
                    whitespace-nowrap
                ">
                    {card.category}
                </span>


                {/* Difficulty */}
                <span className="
                    text-[10px] sm:text-xs
                    font-medium
                    text-gray-500
                    text-center
                ">
                    {card.difficulty}
                </span>


                {/* Rating */}
                <div className="
                    flex
                    items-center
                    gap-1
                    text-xs sm:text-sm
                    font-semibold
                    text-gray-700
                    shrink-0
                ">
                    <FaStar className="text-yellow-400" />
                    <span>{card.rating}</span>
                </div>

            </div>


            {/* Button */}
            <button
                onClick={handleVisited}
                disabled={isAdded}
                className={`
                    w-full
                    py-2 sm:py-2.5
                    rounded-xl
                    text-xs sm:text-sm
                    font-medium
                    active:scale-[0.98]
                    transition

                    ${isAdded
                        ? "bg-[#e6b4d9] text-[#d33cad] border border-[#d33cad]"
                        : "bg-black text-white hover:bg-gray-800"
                    }
                `}
            >
                {isAdded ? "Added to Stack" : "Add to Stack"}
            </button>

        </div>
    );
};

export default TechCard;