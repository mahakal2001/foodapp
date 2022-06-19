import React from "react";
import Logo from "../img/logo.png"
import Avatar from "../img/avatar.png"
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import { useState } from "react";

const Header = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{ user }, dispatch] = useStateValue();

    const [isMenu, setMenu] = useState(false)

    const login = async () => {
        if (!user) {

            const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider);

            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            });
            localStorage.setItem("user", JSON.stringify(providerData[0]));
        }
        else{
            setMenu(!isMenu);
        }
    };
    return (
        <header className="fixed z-50 w-screen p-6 px-16">
            {/* Desktop and Tablet  */}
            <div className="hidden md:flex h-full items-center justify-between ">
                <Link to="/" className="flex items-center gap-2">
                    <img src={Logo} className="w-6 object-cover" alt="logo" />
                    <p className="text-headingColor text-xl font-bold">City</p>
                </Link >

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

                    <div className="relative">
                        <motion.img
                            whileTap={{ scale: 0.6 }}
                            src={user ? user.photoURL : Avatar}
                            className="w-10 min-w-[40px] min-h-[40px] shadow-2xl ml-8 cursor-pointer rounded-full"
                            alt="userProfiles"
                            onClick={login}
                        />

                        {
                            isMenu && (
                                <div className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 ">
                                    {
                                        user && user.email === "bhaktabhim2001@gmail.com" && (
                                            <Link to={"/createItem"}>
                                                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">Add Item <MdAdd /></p>

                                            </Link>
                                        )
                                    }
                                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">LogOut <MdLogout /></p>
                                </div>
                            )
                        }
                    </div>

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