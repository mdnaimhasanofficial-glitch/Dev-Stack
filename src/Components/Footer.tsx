
import Logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div className="
            py-10
            border-t border-b border-gray-100
            my-5
        ">
            <div className="
                container mx-auto
                px-4 sm:px-6
                flex flex-col lg:flex-row
                justify-between
                gap-10
            ">

                {/* Logo */}
                <div className="
                    f-logo
                    text-gray-500
                    space-y-3
                    w-full lg:w-1/3
                ">
                    <img
                        className="w-32 sm:w-36"
                        src={Logo}
                        alt=""
                    />

                    <p className="
                        text-sm sm:text-base
                        max-w-md
                    ">
                        Curated tools, technologies, and resources
                        for developers building modern software
                    </p>

                    <ul className="
                        flex gap-3
                        text-black
                        font-semibold
                    ">
                        <li><a href="">GitHub</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">LinkedIn</a></li>
                    </ul>
                </div>


                {/* Footer Menu */}
                <div className="
                    f-menu
                    grid grid-cols-2
                    sm:grid-cols-3
                    gap-8 sm:gap-12
                    lg:gap-20
                    text-gray-500
                    w-full lg:w-auto
                ">

                    {/* Product */}
                    <div className="f-menu-product">
                        <h3 className="
                            font-semibold
                            text-black
                            mb-3
                        ">
                            PRODUCT
                        </h3>

                        <ul className="space-y-2">
                            <li><a href="">Home</a></li>
                            <li><a href="">Technologies</a></li>
                            <li><a href="">Project</a></li>
                        </ul>
                    </div>


                    {/* Company */}
                    <div className="f-menu-product">
                        <h3 className="
                            font-semibold
                            text-black
                            mb-3
                        ">
                            COMPANY
                        </h3>

                        <ul className="space-y-2">
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Careers</a></li>
                        </ul>
                    </div>


                    {/* Legal */}
                    <div className="
                        f-menu-product
                        col-span-2 sm:col-span-1
                    ">
                        <h3 className="
                            font-semibold
                            text-black
                            mb-3
                        ">
                            LEGAL
                        </h3>

                        <ul className="space-y-2">
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms of Service</a></li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer