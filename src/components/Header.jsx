import React from "react";
import Logo from "../img/logo.png"
import Avatar from "../img/avatar.png"
import { MdShoppingBasket } from "react-icons/md"

const Header = () => {
    return (
        <header className="fixed z-50 w-screen p-6 px-16">
            {/* Desktop and Tablet  */}
            <div className="hidden md:flex h-full items-center justify-between ">
                <div className="flex items-center gap-2">
                    <img src={Logo} className="w-6 object-cover" alt="logo" />
                    <p className="text-headingColor text-xl font-bold">City</p>
                </div>

                <div className="flex items-center">
                    <ul className="flex items-center gap-8">
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service</li>
                    </ul>

                    <div className="relative flex items-center justify-center">
                        <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer" />
                        <div className="absolute -top-3 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                            <p className="text-xs text-white font-semibold">0</p>
                        </div>
                    </div>

                    <img src={Avatar} className="w-10 min-w-[40px] min-h-[40px] shadow-2xl ml-8 " alt="userProfiles" />
                </div>
            </div>


            {/* Mobile */}
            <div className="flex md:hidden h-full">
                hi ami mobile
            </div>
        </header>
    )
};

export default Header;