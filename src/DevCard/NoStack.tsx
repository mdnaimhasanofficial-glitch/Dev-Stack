const NoStack = () => {
    return (
        <div className="text-center py-10">

            <h2 className="text-xl font-bold text-gray-800">
                Your Stack
            </h2>

            <p className="text-gray-500 mt-2">
                No technologies selected yet.
            </p>
            <div className="text-gray-500 border border-dashed border-gray-300 py-10 rounded-2xl mt-3 ">
                Your stack is empty.
            </div>


        </div>
    );
};

export default NoStack;