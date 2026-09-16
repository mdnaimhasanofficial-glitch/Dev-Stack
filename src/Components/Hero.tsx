import HeroImg from '../assets/banner-stack.png';

const Hero = () => {
    return (
        <div className="bg-white text-gray-600">
            <div className="
                container mx-auto
                px-4 sm:px-6 lg:px-8
                py-10 sm:py-12 lg:py-16
                flex flex-col md:flex-row
                items-center
                gap-8 lg:gap-12
            ">

                {/* Hero Text */}
                <div className="
                    hero-text
                    w-full md:w-1/2
                    text-center md:text-left
                ">

                    <h2 className="
                        text-3xl sm:text-4xl lg:text-5xl
                        font-bold
                        mb-4
                        leading-tight
                    ">
                        Build Your Ideal <br />

                        <span className="
                            text-4xl sm:text-5xl lg:text-6xl
                            font-bold
                            bg-linear-to-r
                            from-[#FF5625]
                            to-[#8039E9]
                            bg-clip-text
                            text-transparent
                        ">
                            Development Stack
                        </span>
                    </h2>

                    <p className="
                        mb-6
                        text-sm sm:text-base
                        leading-6
                        max-w-xl
                        mx-auto md:mx-0
                    ">
                        Explore frontend, backend, database, and tooling
                        option, conpare them side by side, and put together
                        the stack that fits your next project.
                    </p>


                    {/* Buttons */}
                    <div className="
                        flex
                        flex-col sm:flex-row
                        justify-center md:justify-start
                        gap-3
                    ">

                        <button className="
                            btn
                            text-[14px]
                            rounded-xl
                            px-4
                            bg-linear-65
                            from-[#FF5625]
                            to-[#8039E9]
                        ">
                            Explore Technologies
                        </button>

                        <button className="
                            btn
                            text-gray-700
                            border-gray-500
                            bg-transparent
                            rounded-xl
                            px-4
                        ">
                            Learn More
                        </button>

                    </div>
                </div>


                {/* Hero Image */}
                <div className="
                    hero-img
                    w-full md:w-1/2
                    flex justify-center
                ">
                    <img
                        className="
                            w-full
                            max-w-xs
                            sm:max-w-sm
                            md:max-w-md
                            lg:max-w-lg
                        "
                        src={HeroImg}
                        alt="Development Stack"
                    />
                </div>

            </div>
        </div>
    );
};

export default Hero;