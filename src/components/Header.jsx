import { useState } from "react";
import { NavLink } from "react-router-dom";
import img4 from '../assets/navLogo.png';
import { useCart } from "../context/CartContext";

const Navlinks = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Shop All', path: '/shop' },
    { id: 3, title: 'About Us', path: '/about' },
    { id: 4, title: 'Contact', path: '/contact' },
];

function Header() {
    const [isOpen, setIsOpen] = useState(false); // drawer open or closed

    function toggleDrawer() {
        setIsOpen(!isOpen);
    }

    function closeDrawer() {
        setIsOpen(false);
    }
    const { cart } = useCart();

    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <>
            <header className="bg-white border-b border-gray-100">
                <div className="page-width">
                    <div className="inner-container grid items-center md:py-[14px] py-[20px] grid-cols-[auto_1fr_auto]">

                        <button
                            className="flex flex-col gap-[5px] cursor-pointer lg:hidden"
                            onClick={toggleDrawer}
                        >
                            <span className={`block w-[22px] h-[2px] bg-gray-900 rounded transition-all duration-300
                ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`}
                            />
                            <span className={`block w-[22px] h-[2px] bg-gray-900 rounded transition-all duration-300
                ${isOpen ? 'opacity-0' : ''}`}
                            />
                            <span className={`block w-[22px] h-[2px] bg-gray-900 rounded transition-all duration-300
                ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
                            />
                        </button>

                        {/* Desktop — left side */}
                        <NavLink to={'/'} className="max-w-[200px] hidden lg:block">
                            <img src={img4} alt="Logo" />
                        </NavLink>
                        {/* Mobile — center */}
                        <NavLink to={'/'} className="max-w-[160px] mx-auto lg:hidden" >
                            <img src={img4} alt="Logo" />
                        </NavLink>

                        {/* ── DESKTOP NAV ── */}
                        <nav className="hidden lg:flex items-center justify-center gap-[20px]">
                            {Navlinks.map((link) => (
                                <NavLink
                                    key={link.id}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-orange-500 font-bold text-sm tracking-wide p-3"
                                            : "text-gray-800 font-bold text-sm tracking-wide p-3 hover:text-orange-500"
                                    }
                                >
                                    {link.title}
                                </NavLink>
                            ))}
                        </nav>

                        {/* ── ICONS ── */}
                        <div className="flex items-center gap-4 text-gray-700">
                            <NavLink to="/account" className="hover:text-orange-500">
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none">
                                    <path d="M9 0C8.01109 0 7.04439 0.293245 6.22215 0.842652C5.3999 1.39206 4.75904 2.17295 4.3806 3.08658C4.00216 4.00021 3.90315 5.00555 4.09607 5.97545C4.289 6.94536 4.7652 7.83627 5.46447 8.53553C6.16373 9.2348 7.05464 9.711 8.02455 9.90393C8.99445 10.0969 9.99979 9.99784 10.9134 9.6194C11.827 9.24096 12.6079 8.6001 13.1573 7.77785C13.7068 6.95561 14 5.98891 14 5C14 3.67392 13.4732 2.40215 12.5355 1.46447C11.5979 0.526784 10.3261 0 9 0ZM9 8C8.40666 8 7.82664 7.82405 7.33329 7.49441C6.83994 7.16476 6.45542 6.69623 6.22836 6.14805C6.0013 5.59987 5.94189 4.99667 6.05764 4.41473C6.1734 3.83279 6.45912 3.29824 6.87868 2.87868C7.29824 2.45912 7.83279 2.1734 8.41473 2.05764C8.99667 1.94189 9.59987 2.0013 10.1481 2.22836C10.6962 2.45542 11.1648 2.83994 11.4944 3.33329C11.8241 3.82664 12 4.40666 12 5C12 5.79565 11.6839 6.55871 11.1213 7.12132C10.5587 7.68393 9.79565 8 9 8ZM18 19V18C18 16.1435 17.2625 14.363 15.9497 13.0503C14.637 11.7375 12.8565 11 11 11H7C5.14348 11 3.36301 11.7375 2.05025 13.0503C0.737498 14.363 0 16.1435 0 18V19H2V18C2 16.6739 2.52678 15.4021 3.46447 14.4645C4.40215 13.5268 5.67392 13 7 13H11C12.3261 13 13.5979 13.5268 14.5355 14.4645C15.4732 15.4021 16 16.6739 16 18V19H18Z" fill="#1B1B1B" />
                                </svg>
                            </NavLink>
                            <NavLink to="/cart" className="hover:text-orange-500 relative">
                                <svg width="21" height="18" viewBox="0 0 21 18" fill="none">
                                    <path d="M19 0.0109192H0V2.01092H2.3L5.58 11.0109C5.78631 11.5945 6.16807 12.0999 6.67294 12.458C7.1778 12.816 7.78106 13.0092 8.4 13.0109H17V11.0109H8.4C8.19449 11.0108 7.99399 10.9474 7.8258 10.8293C7.6576 10.7112 7.52987 10.5442 7.46 10.3509L7 9.01092H16.28C16.714 9.01029 17.1361 8.86849 17.4824 8.60692C17.8288 8.34535 18.0806 7.97821 18.2 7.56092L20 1.28092C20.0406 1.1496 20.0538 1.01132 20.0386 0.874694C20.0234 0.738072 19.9802 0.606049 19.9117 0.48687C19.8432 0.367692 19.7509 0.263917 19.6404 0.182026C19.53 0.100135 19.4039 0.041887 19.27 0.0109192C19.1806 -0.00363973 19.0894 -0.00363973 19 0.0109192ZM16.25 7.01092H6.25L4.43 2.01092H17.67L16.25 7.01092Z" fill="#1B1B1B" />
                                    <path d="M8.5 17.0109C9.32843 17.0109 10 16.3394 10 15.5109C10 14.6825 9.32843 14.0109 8.5 14.0109C7.67157 14.0109 7 14.6825 7 15.5109C7 16.3394 7.67157 17.0109 8.5 17.0109Z" fill="#1B1B1B" />
                                    <path d="M14.5 17.0109C15.3284 17.0109 16 16.3394 16 15.5109C16 14.6825 15.3284 14.0109 14.5 14.0109C13.6716 14.0109 13 14.6825 13 15.5109C13 16.3394 13.6716 17.0109 14.5 17.0109Z" fill="#1B1B1B" />
                                </svg>
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-orange-500
                                    text-white text-xs w-4 h-4 rounded-full flex
                                    items-center justify-center">
                                    {cartCount}
                                    </span>
                                )}
                            </NavLink>
                        </div>

                    </div>
                </div>
            </header>

            {/* ── OVERLAY ── */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-40 lg:hidden"
                    onClick={closeDrawer}
                />
            )}

            {/* ── DRAWER ── */}
            <div className={`fixed top-0 left-0 h-screen w-[300px] bg-white z-50 
                transition-transform duration-300 lg:hidden
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {/* Drawer header */}
                <div className="flex justify-end items-center p-2 pr-[20px] border-b border-gray-100">
                    <button onClick={closeDrawer} className="text-xl font-bold text-gray-700">✕</button>
                </div>

                {/* Drawer links */}
                <nav className="flex flex-col p-4">
                    {Navlinks.map((link) => (
                        <NavLink
                            key={link.id}
                            to={link.path}
                            onClick={closeDrawer}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-500 font-bold text-[16px] py-2 text-left border-b border-gray-100"
                                    : "text-gray-800 font-bold text-[16px] py-2 text-left border-b border-gray-100 hover:text-orange-500"
                            }
                        >
                            {link.title}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </>
    );
}

export default Header;