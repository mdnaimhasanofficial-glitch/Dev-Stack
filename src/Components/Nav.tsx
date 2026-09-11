import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <nav className='border-b border-gray-100 bg-white'>
            <div className="container mx-auto flex justify-between h-11">
                <div className="nav-logo">
                    <img className='max-w-full mt-1' src={Logo} alt="" />
                </div>
                <div className="nav-menu">
                    <ul className='flex gap-4 mt-2 text-gray-500 text-1xl'>
                        <li className='text-[#F43098]'><a href="">Home</a></li>
                        <li><a href="">Technologies</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className="nav-sign-up flex gap-3 justify-between">
                    <button className="btn rounded-4xl mt-0.5 px-6 bg-transparent border-none text-gray-500">Sign In</button>

                    <button className="btn btn-secondary mt-0.5 rounded-4xl px-6">Sign Up</button>

                </div>

            </div>
        </nav>
    );
};

export default Nav;