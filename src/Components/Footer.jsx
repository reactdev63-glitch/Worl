import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#00232a] text-[#aebfc1] w-[90%] md:w-[85%] lg:w-[80%] max-w-[1320px] mx-auto">

            <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-12 md:py-14">

                {/* MAIN FOOTER */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-10">

                    {/* BRAND */}
                    <div className="sm:col-span-2 lg:col-span-2">

                        {/* LOGO */}
                        <Link to="/" className="inline-block">
                            <img
                                src={assets.Logo}
                                alt="World's End Logo"
                                className="w-[130px] sm:w-[150px] h-[60px] sm:h-[70px] object-contain bg-white"
                            />
                        </Link>


                        {/* TITLE */}
                        <h2 className="font-serif italic text-[20px] sm:text-[24px] text-[#d7b66b] mb-3 sm:mb-4">
                            TRAVEL BEYOND ORDINARY
                        </h2>


                        {/* DESCRIPTION */}
                        <p className="text-[11px] sm:text-[12px] leading-5 max-w-[390px]">
                            Bespoke, tranquil, and transportive journeys curated
                            for the world's most discerning travelers. Experiencing
                            Earth's most quiet sanctuaries with timeless luxury.
                        </p>


                        {/* NEWSLETTER */}
                        <div className="flex flex-col sm:flex-row gap-2 mt-5 sm:mt-6 max-w-[450px]">

                            <input
                                type="email"
                                placeholder="Enter your email for private journals"
                                className="
                                    w-full
                                    sm:w-[245px]
                                    h-[38px]
                                    bg-[#17383e]
                                    border
                                    border-[#29474c]
                                    px-3
                                    text-[10px]
                                    text-white
                                    placeholder:text-[#789093]
                                    outline-none
                                    focus:border-[#d7b66b]
                                    transition
                                "
                            />

                            <button
                                className="
                                    w-full
                                    sm:w-auto
                                    h-[38px]
                                    px-5
                                    bg-[#f5d58f]
                                    text-[#17363d]
                                    text-[10px]
                                    font-semibold
                                    hover:bg-[#ffe1a5]
                                    transition
                                "
                            >
                                SUBSCRIBE
                            </button>

                        </div>

                    </div>


                    {/* EXPLORE */}
                    <div>

                        <h3 className="text-[9px] sm:text-[10px] tracking-[2px] text-[#d7b66b] font-semibold mb-4">
                            EXPLORE
                        </h3>

                        <div className="space-y-2.5 text-[10px] sm:text-[11px]">

                            <p className="hover:text-white transition cursor-pointer">
                                Coastal Silence
                            </p>

                            <p className="hover:text-white transition cursor-pointer">
                                High Passes
                            </p>

                            <p className="hover:text-white transition cursor-pointer">
                                Secluded Villas
                            </p>

                            <p className="hover:text-white transition cursor-pointer">
                                Ayurveda & Zen
                            </p>

                            <p className="hover:text-white transition cursor-pointer">
                                Heritage Rites
                            </p>

                        </div>

                    </div>


                    {/* PLAN */}
                    <div>

                        <h3 className="text-[9px] sm:text-[10px] tracking-[2px] text-[#d7b66b] font-semibold mb-4">
                            PLAN
                        </h3>

                        <div className="space-y-2.5 text-[10px] sm:text-[11px]">

                            <p className="hover:text-white transition cursor-pointer">
                                Kashmir Great Lakes Trek & Houseboat
                            </p>

                            <p className="hover:text-white transition cursor-pointer">
                                Kerala Backwater & Spice Sanctuary
                            </p>

                            <p className="hover:text-white transition cursor-pointer">
                                Kyoto Solitude & Ryokan
                            </p>

                            <p className="hover:text-white transition cursor-pointer">
                                Atacama Desert Celestial Observatories
                            </p>

                            <p className="hover:text-white transition cursor-pointer">
                                Summer Alps & Fjord Sanctuaries
                            </p>

                        </div>

                    </div>


                    {/* COMPANY */}
                    <div>

                        <h3 className="text-[9px] sm:text-[10px] tracking-[2px] text-[#d7b66b] font-semibold mb-4">
                            COMPANY
                        </h3>

                        <div className="space-y-2.5 text-[10px] sm:text-[11px]">

                            <p className="hover:text-white transition cursor-pointer">
                                Our Ethos
                            </p>

                            <p className="hover:text-white transition cursor-pointer">
                                Editorial Journal
                            </p>

                            <p className="hover:text-white transition cursor-pointer">
                                Sustainability
                            </p>

                            <p className="hover:text-white transition cursor-pointer">
                                Press & Media
                            </p>

                            <p className="hover:text-white transition cursor-pointer">
                                Careers
                            </p>

                        </div>

                    </div>

                </div>


                {/* BOTTOM LINE */}
                <div className="
                    border-t
                    border-[#17383e]
                    mt-8
                    sm:mt-10
                    pt-5
                    flex
                    flex-col
                    sm:flex-row
                    items-start
                    sm:items-center
                    justify-between
                    gap-3
                ">

                    <p className="text-[8px] sm:text-[9px] text-[#8fa4a6] leading-4">
                        © 2026 WORLD'S END Inc. All rights reserved.
                        <br className="sm:hidden" />
                        {" "}Travel beyond ordinary.
                    </p>

                    <p className="text-[8px] sm:text-[9px] italic text-[#d7b66b]">
                        Coimbatore · Chennai · Kovilpatti · Trichy
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;
