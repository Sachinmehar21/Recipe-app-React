import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="h-[10vh] w-full flex items-center justify-between px-4 md:px-8 lg:px-16">
            <img
                className="h-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/008/212/813/small/cooking-logo-design-vector.jpg"
                alt="Logo"
            />
            <div className="md:flex hidden gap-x-6 text-base items-center">
                <Link className="hover:text-green-600 duration-200 font-bold" to="/">
                    Home
                </Link>
                <Link
                    className="hover:text-green-600 duration-200 font-bold"
                    to="/recipes"
                >
                    Recipes
                </Link>
                <Link className="hover:text-green-600 duration-200 font-bold" to="/about">
                    About
                </Link>
                <Link
                    className="hover:text-green-600 duration-200 font-bold"
                    to="/contact"
                >
                    Contact
                </Link>
            </div>
            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-3xl ri-menu-line text-green-600"
                ></button>
                {isMenuOpen && (
                    <div className="absolute top-[9vh] left-0 right-0 bg-white z-10 border-b border-gray-200">
                        <div className="flex flex-col items-center py-4">
                            <Link
                                onClick={toggleMenu}
                                className="text-lg hover:text-green-600 duration-200 font-bold"
                                to="/"
                            >
                                Home
                            </Link>
                            <Link
                                onClick={toggleMenu}
                                className="text-lg hover:text-green-600 duration-200 font-bold"
                                to="/recipes"
                            >
                                Recipes
                            </Link>
                            <Link
                                onClick={toggleMenu}
                                className="text-lg hover:text-green-600 duration-200 font-bold"
                                to="/about"
                            >
                                About
                            </Link>
                            <Link
                                onClick={toggleMenu}
                                className="text-lg hover:text-green-600 duration-200 font-bold"
                                to="/contact"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Nav;
