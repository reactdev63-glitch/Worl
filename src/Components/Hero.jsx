import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <section className="w-[90%] md:w-[85%] lg:w-[80%] max-w-[1320px] mx-auto mt-4 sm:mt-5 md:mt-6">

            {/* Hero */}
            <div className="relative min-h-[560px] sm:min-h-[580px] md:h-[620px] overflow-hidden rounded-lg sm:rounded-xl">

                {/* Background Image */}
                <img
                    src={assets.HeroHome}
                    alt="Travel destination"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#142B32]/70"></div>


                {/* Hero Content */}
                <div className="relative z-10 min-h-[560px] sm:min-h-[580px] md:h-full flex items-center">

                    <div className="
                        w-full
                        px-5
                        sm:px-8
                        md:px-12
                        lg:px-16
                        py-10
                        sm:py-12
                        md:py-0
                        max-w-[750px]
                        text-white
                    ">

                        {/* Small Label */}
                        <p className="
                            inline-flex
                            items-center
                            gap-1.5
                            sm:gap-2
                            bg-[#142B32]/80
                            px-2.5
                            sm:px-3
                            py-1.5
                            text-[8px]
                            sm:text-[10px]
                            md:text-[11px]
                            tracking-[1.5px]
                            sm:tracking-[2px]
                            font-medium
                            text-[#C9A86A]
                            mb-4
                            sm:mb-5
                        ">
                            <span className="w-1.5 h-1.5 bg-[#C9A86A] rounded-full"></span>

                            TRAVEL BEYOND ORDINARY
                        </p>


                        {/* Heading */}
                        <h1 className="
                            font-serif
                            text-[34px]
                            sm:text-[42px]
                            md:text-5xl
                            lg:text-6xl
                            leading-[1.05]
                            font-medium
                        ">
                            Your next unforgettable
                            <br className="hidden sm:block" />
                            journey starts here.
                        </h1>


                        {/* Description */}
                        <p className="
                            mt-5
                            sm:mt-6
                            text-xs
                            sm:text-sm
                            md:text-base
                            text-gray-200
                            leading-6
                            sm:leading-7
                            max-w-[600px]
                        ">
                            Discover extraordinary destinations, carefully curated travel
                            packages, and personalized journeys designed around the way you
                            want to travel.
                        </p>


                        {/* Buttons */}
                        <div className="
                            flex
                            flex-col
                            xs:flex-row
                            sm:flex-row
                            gap-3
                            mt-6
                            sm:mt-7
                        ">

                            {/* Explore */}
                            <button
                                className="
                                    w-full
                                    sm:w-auto
                                    bg-white
                                    text-[#142B32]
                                    px-6
                                    sm:px-7
                                    py-3
                                    text-xs
                                    sm:text-sm
                                    font-medium
                                    hover:bg-[#C9A86A]
                                    hover:text-white
                                    transition
                                    duration-300
                                "
                            >
                                Explore Packages ↗
                            </button>


                            {/* Plan */}
                            <button
                                className="
                                    w-full
                                    sm:w-auto
                                    bg-[#142B32]/80
                                    border
                                    border-white/20
                                    text-white
                                    px-6
                                    sm:px-7
                                    py-3
                                    text-xs
                                    sm:text-sm
                                    font-medium
                                    hover:bg-[#C9A86A]
                                    transition
                                    duration-300
                                "
                            >
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
