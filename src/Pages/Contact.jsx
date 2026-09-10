import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
    return (
        <section className="w-[80%] max-w-[1320px] mx-auto">

            <div className="w-[90%] max-w-[1320px] mx-auto py-12 md:py-16">

                {/* HERO */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">

                    {/* LEFT */}
                    <div>

                        <p className="text-[9px] tracking-[2px] font-medium text-[#d7b66b] mb-3">
                            THE CONCIERGE DESK
                        </p>

                        <h1 className="font-serif text-[38px] md:text-[46px] leading-[1.05] text-[#102f35]">
                            Let's talk about
                            <br />
                            your next journey.
                        </h1>

                        <p className="mt-3 max-w-[430px] text-[12px] leading-5 text-gray-500">
                            Have a question about a destination, package or booking?
                            Begin a conversation and the WORLD'S END team will get
                            back to you.
                        </p>

                    </div>


                    {/* RIGHT IMAGE */}
                    <div className="relative h-[280px] overflow-hidden rounded-sm">

                        <img
                            src={assets.Contact}
                            alt="Travel destination"
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute bottom-2 right-2 bg-[#102f35] text-white px-2 py-1 text-[7px] tracking-[1px]">
                            TRAVEL DESIGNED AROUND YOU
                        </div>

                    </div>

                </div>


                {/* CONTACT AREA */}
                <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-5">


                    {/* FORM */}
                    <div className="bg-white border border-gray-100 p-5 md:p-6">

                        <p className="text-[8px] tracking-[2px] text-[#d7b66b] mb-2">
                            SEND A MESSAGE
                        </p>

                        <h2 className="font-serif text-[25px] leading-none text-[#102f35]">
                            How can we help?
                        </h2>


                        <form className="mt-6">

                            {/* NAME + EMAIL */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                <div>
                                    <label className="block text-[8px] tracking-[1.5px] uppercase text-gray-400 mb-2">
                                        Your Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full h-9 bg-[#f7f5ef] border border-[#e8e5de] px-3 text-[10px] text-[#102f35] outline-none focus:border-[#bdb8ad] transition"
                                    />
                                </div>


                                <div>
                                    <label className="block text-[8px] tracking-[1.5px] uppercase text-gray-400 mb-2">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full h-9 bg-[#f7f5ef] border border-[#e8e5de] px-3 text-[10px] text-[#102f35] outline-none focus:border-[#bdb8ad] transition"
                                    />
                                </div>

                            </div>


                            {/* PHONE + SUBJECT */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

                                <div>
                                    <label className="block text-[8px] tracking-[1.5px] uppercase text-gray-400 mb-2">
                                        Phone
                                    </label>

                                    <input
                                        type="tel"
                                        placeholder="+91 00000 00000"
                                        className="w-full h-9 bg-[#f7f5ef] border border-[#e8e5de] px-3 text-[10px] text-[#102f35] outline-none focus:border-[#bdb8ad] transition"
                                    />
                                </div>


                                <div>
                                    <label className="block text-[8px] tracking-[1.5px] uppercase text-gray-400 mb-2">
                                        Subject
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="How can we help?"
                                        className="w-full h-9 bg-[#f7f5ef] border border-[#e8e5de] px-3 text-[10px] text-[#102f35] outline-none focus:border-[#bdb8ad] transition"
                                    />
                                </div>

                            </div>


                            {/* SELECT */}
                            <div className="mt-4">

                                <label className="block text-[8px] tracking-[1.5px] uppercase text-gray-400 mb-2">
                                    Journey Type
                                </label>

                                <select className="w-full h-9 bg-[#f7f5ef] border border-[#e8e5de] px-3 text-[10px] text-[#102f35] outline-none">
                                    <option>Select your preference</option>
                                    <option>Package Inquiry</option>
                                    <option>Booking Support</option>
                                    <option>Custom Journey</option>
                                    <option>General Inquiry</option>
                                </select>

                            </div>


                            {/* MESSAGE */}
                            <div className="mt-4">

                                <label className="block text-[8px] tracking-[1.5px] uppercase text-gray-400 mb-2">
                                    Message
                                </label>

                                <textarea
                                    rows="5"
                                    placeholder="Tell us how we can help..."
                                    className="w-full bg-[#f7f5ef] border border-[#e8e5de] px-3 py-3 text-[10px] text-[#102f35] outline-none resize-none focus:border-[#bdb8ad] transition"
                                ></textarea>

                            </div>


                            {/* BUTTON */}
                            <button
                                type="submit"
                                className="mt-5 bg-[#102f35] text-white px-7 py-3 text-[9px] tracking-[1.5px] uppercase rounded-sm hover:bg-[#173f47] transition"
                            >
                                Send Message →
                            </button>

                            <p className="text-[8px] text-gray-400 mt-3">
                                Our concierge team typically responds within 24 hours.
                            </p>

                        </form>

                    </div>


                    {/* OFFICE */}
                    <div className="bg-white border border-gray-100 p-5 md:p-6">

                        <p className="text-[8px] tracking-[2px] text-[#d7b66b] mb-2">
                            WORLD'S END VOYAGE OFFICE
                        </p>

                        <h2 className="font-serif text-[25px] leading-none text-[#102f35]">
                            Our office
                        </h2>

                        <p className="text-[10px] text-gray-500 mt-2">
                            Coimbatore, Tamil Nadu
                        </p>

                        <p className="text-[8px] tracking-[1px] text-gray-400 mt-1">
                            INDIA · BY APPOINTMENT
                        </p>


                        {/* CONTACT INFO */}
                        <div className="border-t border-[#e5e2da] mt-5 pt-4 space-y-4">

                            <div className="flex justify-between gap-4">

                                <span className="text-[8px] tracking-[1.5px] uppercase text-gray-400">
                                    Email
                                </span>

                                <span className="text-[9px] text-[#102f35]">
                                    hello@worldsend.com
                                </span>

                            </div>


                            <div className="flex justify-between gap-4">

                                <span className="text-[8px] tracking-[1.5px] uppercase text-gray-400">
                                    Phone
                                </span>

                                <span className="text-[9px] text-[#102f35]">
                                    +91 90000 00000
                                </span>

                            </div>


                            <div className="flex justify-between gap-4">

                                <span className="text-[8px] tracking-[1.5px] uppercase text-gray-400">
                                    Hours
                                </span>

                                <span className="text-[9px] text-[#102f35] text-right">
                                    Monday — Saturday
                                    <br />
                                    10:00 — 18:00 IST
                                </span>

                            </div>

                        </div>


                        {/* MAP */}
                        <div className="mt-5 h-[190px] overflow-hidden border border-[#e3e0d8]">

                            <iframe
                                title="World's End Office Location"
                                src="https://www.google.com/maps?q=Coimbatore,Tamil Nadu,India&output=embed"
                                className="w-full h-full border-0"
                                loading="lazy"
                            ></iframe>

                        </div>


                        {/* ADDRESS */}
                        <div className="flex items-start justify-between mt-3">

                            <p className="text-[8px] leading-4 text-gray-400 max-w-[180px]">
                                Coimbatore, Tamil Nadu
                                <br />
                                India
                            </p>

                            <span className="text-[8px] tracking-[1px] text-gray-400">
                                ↗ OPEN IN MAPS
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Contact;