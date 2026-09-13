import HeroImg from '../assets/banner-stack.png';

const Hero = () => {
    return (
        <div className='bg-white text-gray-600'>
            <div className="container flex items-center mx-auto py-10">
                <div className="hero-text">
                    <h2 className="text-5xl font-bold mb-4">Build Your Ideal <br /> <span className="text-6xl font-bold bg-linear-to-r from-[#FF5625] to-[#8039E9] bg-clip-text text-transparent">Development Stack</span></h2>
                    <p className='mb-6'>Explore frontend, backend, database, and tooling option, conpare them side by side, and put together the stack that fits your next project.</p>

                    <button className="btn btn-secondary text-[14px] rounded-1xl px-4 mr-3 bg-linear-65 from-[#FF5625] to-[#8039E9]">Explore Technologies</button>
                    <button className="btn text-gray-700 border-gray-500 bg-transparent rounded-1xl px-4">Learn More</button>
                </div>
                <div className="hero-img">
                    <img className='max-w-full' src={HeroImg} alt="" />
                </div>
            </div>
        </div>
    );
};
 
export default Hero;