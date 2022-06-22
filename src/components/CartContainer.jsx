import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { BiMinus, BiPlus } from "react-icons/bi";

import { motion } from "framer-motion";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
const CartContainer = () => {
    const [{ cartShow, cartItems, user }, dispatch] = useStateValue();



    const showCart = () => {
        dispatch({
          type: actionType.SET_CART_SHOW,
          cartShow: !cartShow,
        });
      };
    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]"
        >
            <motion.div className="w-full flex items-center justify-between p-4 cursor-pointer">
                <motion.div whileTap={{ scale: 0.75 }} >
                    <MdOutlineKeyboardBackspace className="text-textColor text-3xl" onClick={showCart} />
                </motion.div>
                <p className="text-textColor text-lg font-semibold">Cart</p>

                <motion.p
                    whileTap={{ scale: 0.75 }}
                    className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"

                >
                    Clear <RiRefreshFill />
                </motion.p>
            </motion.div>

            {/* bottom section */}

            <div className="w-ful h-full bg-cartBg rounded-t-[2rem] flex flex-col">
                {/* cart Item Section*/}
                <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
                    {/* cart Item */}
                    <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
                        <img src="http://localhost:3000/static/media/i1.3d9b129d2c5432c6f1fb.png" className="w-20 h-20 max-w-[60px] rounded-full object-contain" alt="" />

                        {/* name section */}
                        <div className="flex">
                            <p className="text-base">Choloalte vanilla</p>
                            <p className="block">$ 8.5</p>
                        </div>

                        {/* button section */}
                        <div className="group flex items-center gap-2 ml-auto cursor-pointer">
                            <motion.div whileTap={{ scale: 0.75 }} className="flex">
                                <BiMinus className="text-gray-50" />
                            </motion.div>

                            <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">

                                1
                            </p>


                            <motion.div whileTap={{ scale: 0.75 }} className="">
                                <BiPlus className="text-gray-50" />
                            </motion.div>
                        </div>
                    </div>


                    {/* cart Total section  */}
                    <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
                        <div className="w-full flex items-center justify-between">
                            <p className="text-gray-400 text-lg">Sub Total</p>
                            <p className="text-gray-400 text-lg">$ 70</p>
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <p className="text-gray-400 text-lg">Delivery</p>
                            <p className="text-gray-400 text-lg">$ 2.5</p>
                        </div>

                        <div className="w-full border-b border-gray-600 my-2"></div>

                        <div className="w-full flex items-center justify-between">
                            <p className="text-gray-200 text-xl font-semibold">Total</p>
                            <p className="text-gray-200 text-xl font-semibold">
                                {/* ${tot + 2.5} */}100
                            </p>
                        </div>

                        <motion.button
                            whileTap={{ scale: 0.8 }}

                            type="button"
                            className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg">
                                Submite
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default CartContainer