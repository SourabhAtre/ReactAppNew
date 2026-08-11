import img4 from '../assets/navLogo.png';
import { NavLink } from "react-router-dom";

function Footer() {
    const Menu1 = [
        { id: 1, title: 'Shop All', path: '/shop' },
        { id: 2, title: 'My Account', path: '/account' },
        { id: 3, title: 'About Us', path: '/about' },
        { id: 4, title: 'Contact Us', path: '/contact' },
    ]

    return (
        <footer className="bg-[#fff9f5] py-[60px] border-t-[2px]">
            <div className="page-width">
                <div className="innerContainer">
                    <nav className="flex items-center justify-center md:gap-[30px] gap-[15px]">
                        {Menu1.map((link) => (
                            <NavLink
                                key={link.id}
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-orange-500 font-bold text-sm tracking-wide"
                                        : "text-gray-800 font-bold text-sm tracking-wide hover:text-orange-500"
                                }
                            >
                                {link.title}
                            </NavLink>
                        ))}
                    </nav>
                    <NavLink to={'/'} className="block m-auto w-max" >
                        <img className="md:max-w-[400px] max-w-[250px] m-auto md:mt-[60px] mt-[40px] w-full" src={img4} alt="Logo" />
                    </NavLink>
                </div>
            </div>
        </footer>
    )
}
export default Footer;