import Logo from '../assets/logo-text.png'
import { FaBars } from 'react-icons/fa'

const Nav = () => {
    return (
        <nav className="border-b border-gray-100">
            <div className="
                container mx-auto
                px-4 sm:px-6 lg:px-8
                flex items-center justify-between
                h-16
            ">

                {/* Logo */}
                <div className="nav-logo shrink-0">
                    <img
                        className="w-32 sm:w-36 md:w-40"
                        src={Logo}
                        alt="Logo"
                    />
                </div>


                {/* Desktop Menu */}
                <div className="nav-menu hidden md:block">
                    <ul className="
                        flex gap-4 lg:gap-6
                        items-center
                        text-gray-500
                        text-sm lg:text-base
                    ">
                        <li className="
                            font-bold
                            bg-linear-to-r from-purple-600 to-pink-600
                            bg-clip-text text-transparent
                        ">
                            <a href="">Home</a>
                        </li>

                        <li><a href="">Technologies</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>


                {/* Desktop Sign In / Sign Up */}
                <div className="nav-sign-up hidden md:flex gap-2 lg:gap-3">

                    <button className="
                        btn
                        rounded-4xl
                        px-4 lg:px-6
                        bg-transparent
                        border-none
                        text-gray-500
                    ">
                        Sign In
                    </button>

                    <button className="
                        btn
                        rounded-4xl
                        px-4 lg:px-6
                        bg-linear-65
                        from-purple-500
                        to-pink-500
                    ">
                        Sign Up
                    </button>

                </div>


                {/* Mobile Menu Button */}
                <button className="
                    md:hidden
                    text-xl
                    text-gray-600
                    p-2
                ">
                    <FaBars />
                </button>

            </div>
        </nav>
    )
}

export default Nav