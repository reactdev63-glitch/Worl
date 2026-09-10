import React, { useState } from 'react'
import { assets } from "../assets/assets"

const Loginpop = ({ setshowLogin }) => {

    const [currentState, setcurrentState] = useState("Login")

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[2px] px-4">

            <form className="relative w-full max-w-[420px] bg-white rounded-md shadow-2xl px-7 py-8">

                 {/* TITLE */}
                <div className="flex items-center justify-between border-b border-[#eeeae2] pb-5">

                    <div>
                        <p className="text-[9px] tracking-[2px] uppercase text-[#C9A86A] mb-2">
                            World's End
                        </p>

                        <h2 className="font-serif text-[30px] leading-none text-[#142B32]">
                            {currentState}
                        </h2>
                    </div>

                    <button
                        type="button"
                        onClick={() => setshowLogin(false)}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f1f0eb] transition"
                    >
                        <img
                            src={assets.Cross}
                            alt="Close"
                            className="w-4 h-4"
                        />
                    </button>

                </div>


                {/* INPUTS */}
                <div className="mt-6 space-y-4">

                    {currentState === "Login" ? null : (
                        <div>
                            <label className="block text-[10px] tracking-[1px] uppercase text-gray-400 mb-2">
                                Your Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                required
                                className="w-full h-11 px-4 border border-[#ddd9d1] bg-[#f9f8f4] rounded-sm text-sm text-[#142B32] outline-none focus:border-[#C9A86A] transition"
                            />
                        </div>
                    )}


                    <div>
                        <label className="block text-[10px] tracking-[1px] uppercase text-gray-400 mb-2">
                            Your Email
                        </label>

                        <input
                            type="email"
                            placeholder="you@example.com"
                            required
                            className="w-full h-11 px-4 border border-[#ddd9d1] bg-[#f9f8f4] rounded-sm text-sm text-[#142B32] outline-none focus:border-[#C9A86A] transition"
                        />
                    </div>


                    <div>
                        <label className="block text-[10px] tracking-[1px] uppercase text-gray-400 mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            required
                            className="w-full h-11 px-4 border border-[#ddd9d1] bg-[#f9f8f4] rounded-sm text-sm text-[#142B32] outline-none focus:border-[#C9A86A] transition"
                        />
                    </div>

                </div>


                {/* BUTTON */}
                <button
                    type="submit"
                    className="w-full h-12 mt-6 bg-[#142B32] text-white text-[11px] tracking-[2px] uppercase rounded-sm hover:bg-[#1d4149] transition"
                >
                    {currentState === "Sign Up" ? "Create Account" : "Login"}
                </button>


                {/* TERMS */}
                <div className="flex items-start gap-3 mt-5">

                    <input
                        type="checkbox"
                        required
                        className="mt-0.5 accent-[#C9A86A] cursor-pointer"
                    />

                    <p className="text-[10px] leading-4 text-gray-400">
                        By continuing, I agree to the terms and conditions.
                    </p>

                </div>


                {/* SWITCH LOGIN / SIGNUP */}
                <div className="text-center mt-6 pt-5 border-t border-[#eeeae2]">

                    {currentState === "Login" ? (

                        <p className="text-[11px] text-gray-500">
                            Create a new account?

                            <span
                                onClick={() => setcurrentState("Sign Up")}
                                className="ml-1 text-[#142B32] font-medium cursor-pointer hover:text-[#C9A86A] transition"
                            >
                                Click Here
                            </span>
                        </p>

                    ) : (

                        <p className="text-[11px] text-gray-500">
                            Already have an account?

                            <span
                                onClick={() => setcurrentState("Login")}
                                className="ml-1 text-[#142B32] font-medium cursor-pointer hover:text-[#C9A86A] transition"
                            >
                                Login Here
                            </span>
                        </p>

                    )}

                </div>

            </form>

        </div>
    )
}

export default Loginpop