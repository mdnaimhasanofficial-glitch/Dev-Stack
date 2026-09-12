
import Logo from '../assets/logo-text.png'
const Footer = () => {
    return (
        <div className='py-10 border-t border-b border-b-gray-100 my-5 border-t-gray-100'>
            <div className="container mx-auto justify-between flex ">
                <div className="f-logo text-gray-500 space-y-3">
                    <img src={Logo} alt="" />
                    <p>Curated tools, technologies, and resources for developers building modern software</p>
                    <ul className='flex gap-3 text-black font-semibold'>
                        <li><a href="">GitHub</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">LinkdIn</a></li>
                    </ul>
                </div>
                <div className="f-menu flex gap-20 text-gray-500">
                    <div className="f-menu-product">
                        <h3 className='font-semibold text-black'>PRODUCT</h3>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Technologies</a></li>
                            <li><a href="">Project</a></li>
                        </ul>
                    </div>
                    <div className="f-menu-product">
                        <h3 className='font-semibold text-black'>COMPANY</h3>
                        <ul>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Careers</a></li>
                        </ul>
                    </div>
                    <div className="f-menu-product">
                        <h3 className='font-semibold text-black'>LEGAL</h3>
                        <ul>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;