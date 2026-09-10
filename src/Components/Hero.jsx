import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <section className="w-[80%] max-w-[1320px] mx-auto mt-6">

            {/* Hero */}
            <div className="relative h-[620px] overflow-hidden rounded-xl">

                {/* Background Image */}
                <img
                    src={assets.HeroHome}
                    alt="Travel destination"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#142B32]/70"></div>

                {/* Hero Content */}
                <div className="relative z-10 h-full flex items-center">

                    <div className="ml-8 sm:ml-12 lg:ml-16 max-w-[650px] text-white">

                        {/* Small Label */}
                        <p className="inline-flex items-center gap-2 bg-[#142B32]/80 px-3 py-1.5 text-[11px] tracking-[2px] font-medium text-[#C9A86A] mb-5">
                            <span className="w-1.5 h-1.5 bg-[#C9A86A] rounded-full"></span>
                            TRAVEL BEYOND ORDINARY
                        </p>

                        {/* Heading */}
                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] font-medium">
                            Your next unforgettable
                            <br />
                            journey starts here.
                        </h1>

                        {/* Description */}
                        <p className="mt-6 text-sm sm:text-base text-gray-200 leading-7 max-w-[600px]">
                            Discover extraordinary destinations, carefully curated travel
                            packages, and personalized journeys designed around the way you
                            want to travel.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-3 mt-7">

                            <button className="bg-white text-[#142B32] px-7 py-3 text-sm font-medium hover:bg-[#C9A86A] hover:text-white transition duration-300">
                                Explore Packages ↗
                            </button>

                            <button className="bg-[#142B32]/80 border border-white/20 text-white px-7 py-3 text-sm font-medium hover:bg-[#C9A86A] transition duration-300">
                                Plan Your Trip ▣
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Hero