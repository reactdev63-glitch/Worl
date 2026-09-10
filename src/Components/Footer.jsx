import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#00232a] text-[#aebfc1] w-[80%] max-w-[1320px] mx-auto ">

            <div className="w-[94%] max-w-[1320px] mx-auto px-6 py-14">

                {/* MAIN FOOTER */}
                <div className="grid grid-cols-5 gap-10">

                    {/* BRAND */}
                    <div className="col-span-2">

                        <Link to="/">
                        <img src={assets.Logo} alt=""  className="w-[150px] h-[70px] object-contain bg-white " />
                        </Link>

                        <h2 className="font-serif italic text-[24px] text-[#d7b66b] mb-4">
                            TRAVEL BEYOND ORDINARY
                        </h2>

                        <p className="text-[12px] leading-5 max-w-[390px]">
                            Bespoke, tranquil, and transportive journeys curated
                            for the world's most discerning travelers. Experiencing
                            Earth's most quiet sanctuaries with timeless luxury.
                        </p>


                        {/* NEWSLETTER */}
                        <div className="flex mt-6">

                            <input
                                type="email"
                                placeholder="Enter your email for private journals"
                                className="
                                    w-[245px]
                                    h-[36px]
                                    bg-[#17383e]
                                    border
                                    border-[#29474c]
                                    px-3
                                    text-[10px]
                                    text-white
                                    placeholder:text-[#789093]
                                    outline-none
                                "
                            />

                            <button
                                className="
                                    h-[36px]
                                    px-5
                                    bg-[#f5d58f]
                                    text-[#17363d]
                                    text-[10px]
                                    font-semibold
                                    ml-1
                                "
                            >
                                SUBSCRIBE
                            </button>

                        </div>

                    </div>


                    {/* EXPLORE */}
                    <div>

                        <h3 className="text-[10px] tracking-[2px] text-[#d7b66b] font-semibold mb-4">
                            EXPLORE
                        </h3>

                        <div className="space-y-2.5 text-[10px]">

                            <p>Archipelagos</p>
                            <p>Alpine Sanctuaries</p>
                            <p>Desert Solitudes</p>
                            <p>Private Islands</p>
                            <p>Curated Deals</p>

                        </div>

                    </div>


                    {/* PLAN */}
                    <div>

                        <h3 className="text-[10px] tracking-[2px] text-[#d7b66b] font-semibold mb-4">
                            PLAN
                        </h3>

                        <div className="space-y-2.5 text-[10px]">

                            <p>Trip Architect</p>
                            <p>Budget Planner</p>
                            <p>Compare Itineraries</p>
                            <p>Travel Concierge</p>
                            <p>Travel Passport</p>

                        </div>

                    </div>


                    {/* COMPANY */}
                    <div>

                        <h3 className="text-[10px] tracking-[2px] text-[#d7b66b] font-semibold mb-4">
                            COMPANY
                        </h3>

                        <div className="space-y-2.5 text-[10px]">

                            <p>Our Ethos</p>
                            <p>Editorial Journal</p>
                            <p>Sustainability</p>
                            <p>Press & Media</p>
                            <p>Careers</p>

                        </div>

                    </div>

                </div>


                {/* BOTTOM LINE */}
                <div className="border-t border-[#17383e] mt-10 pt-5 flex items-center justify-between">

                    <p className="text-[9px] text-[#8fa4a6]">
                        © 2026 WORLD'S END Inc. All rights reserved.
                        Travel beyond ordinary.
                    </p>

                    <p className="text-[9px] italic text-[#d7b66b]">
                        Coimbatore · Chennai · Kovilpatti · Trichy
                 </p>;
                </div>

            </div>

        </footer>
    );
};

export default Footer;