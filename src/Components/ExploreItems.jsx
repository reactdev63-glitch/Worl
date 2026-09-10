import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useNavigate } from 'react-router-dom'

const ExploreItems = () => {

    const { packages } = useContext(ShopContext)
    const navigate = useNavigate()

    return (
        <div>

            <section className="w-[90%] md:w-[85%] lg:w-[80%] max-w-[1320px] mx-auto bg-[#F6F3ED]">

                {/* Main Container */}
                <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-12 md:py-16">

                    {/* =========================
                        TOP CONTENT
                    ========================== */}
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-7 sm:mb-9">

                        {/* LEFT */}
                        <div className="max-w-[600px]">

                            <p className="text-[9px] sm:text-[10px] md:text-[11px] tracking-[1.5px] sm:tracking-[2px] font-medium text-[#d7b66b] mb-2 sm:mb-3">
                                HANDCRAFTED FOLIOS
                            </p>

                            <h1 className="font-serif text-[34px] sm:text-[40px] md:text-[46px] leading-[1.05] text-[#102f35]">
                                Curated Journeys
                            </h1>

                        </div>


                        {/* RIGHT */}
                        <div className="max-w-[300px]">

                            <p className="text-[10px] sm:text-xs leading-5 text-gray-500">
                                Curated journeys matching your instinct for renewal,
                                adventure, intimacy and discovery.
                            </p>

                        </div>

                    </div>


                    {/* =========================
                        PACKAGES GRID
                    ========================== */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">

                        {packages.map((pkg) => (

                            <div
                                key={pkg.id}
                                className="
                                    bg-white
                                    w-full
                                    overflow-hidden
                                    border
                                    border-[#eeeae2]
                                    hover:shadow-md
                                    transition-shadow
                                    duration-300
                                "
                            >

                                {/* =========================
                                    IMAGE
                                ========================== */}
                                <div className="relative h-[220px] sm:h-[210px] md:h-[220px] lg:h-[195px]">

                                    <img
                                        src={pkg.image}
                                        alt={pkg.title}
                                        className="w-full h-full object-cover"
                                    />


                                    {/* DURATION */}
                                    <div className="absolute top-2 left-2 right-2 flex justify-between items-start">

                                        <span className="bg-white text-[#17363d] px-2 py-1 text-[8px] sm:text-[9px] font-medium">
                                            {pkg.duration}
                                        </span>

                                        {/* RATING */}
                                        <span className="bg-[#17363d] text-white px-2 py-1 text-[8px] sm:text-[9px]">
                                            <span className="text-[#d7b66b]">★</span> {pkg.rating}
                                        </span>

                                    </div>

                                </div>


                                {/* =========================
                                    CONTENT
                                ========================== */}
                                <div className="p-3 sm:p-3.5">

                                    {/* TAGS */}
                                    <div className="flex flex-wrap gap-1 mb-3">

                                        {pkg.tags.map((tag, index) => (

                                            <span
                                                key={index}
                                                className="
                                                    bg-[#eeece7]
                                                    text-[#5d6463]
                                                    px-2
                                                    py-1
                                                    text-[7px]
                                                    sm:text-[8px]
                                                    uppercase
                                                    tracking-wide
                                                "
                                            >
                                                {tag}
                                            </span>

                                        ))}

                                    </div>


                                    {/* TITLE */}
                                    <h2 className="
                                        font-serif
                                        text-[17px]
                                        sm:text-[18px]
                                        leading-[1.25]
                                        text-[#102f35]
                                        min-h-0
                                        sm:min-h-[45px]
                                    ">
                                        {pkg.title}
                                    </h2>


                                    {/* DESCRIPTION */}
                                    <p className="
                                        text-[10px]
                                        sm:text-[11px]
                                        leading-[16px]
                                        text-gray-500
                                        mt-2
                                        line-clamp-3
                                        min-h-0
                                        sm:min-h-[48px]
                                    ">
                                        {pkg.description}
                                    </p>


                                    {/* =========================
                                        PRICE
                                    ========================== */}
                                    <div className="
                                        mt-3
                                        bg-[#f4f2ed]
                                        min-h-[56px]
                                        px-2.5
                                        py-2
                                        flex
                                        items-center
                                        justify-between
                                        gap-2
                                    ">

                                        <div>

                                            <p className="text-[7px] sm:text-[8px] tracking-[1.5px] text-gray-500 uppercase">
                                                Bespoke
                                            </p>

                                            <p className="text-[7px] sm:text-[8px] tracking-[1.5px] text-gray-500 uppercase">
                                                Folio
                                            </p>

                                        </div>


                                        <div className="text-right">

                                            <p className="font-serif text-[17px] sm:text-[18px] leading-5 text-[#102f35]">

                                                {pkg.price}

                                                <span className="font-sans text-[10px]">
                                                    {" "}/
                                                </span>

                                            </p>

                                            <p className="text-[8px] sm:text-[9px] text-gray-500">
                                                {pkg.priceType}
                                            </p>

                                        </div>

                                    </div>


                                    {/* =========================
                                        BUTTONS
                                    ========================== */}
                                    <div className="grid grid-cols-2 gap-1.5 mt-2">

                                        {/* DETAILS */}
                                        <button
                                            onClick={() => navigate(`/details/${pkg.id}`)}
                                            className="
                                                h-[32px]
                                                sm:h-[30px]
                                                bg-[#eeece7]
                                                text-[#17363d]
                                                text-[8px]
                                                sm:text-[9px]
                                                tracking-wide
                                                uppercase
                                                hover:bg-[#e5e2da]
                                                transition
                                                cursor-pointer
                                            "
                                        >
                                            Details
                                        </button>


                                        {/* BOOK NOW */}
                                        <button
                                            onClick={() => navigate(`/bookings/${pkg.id}`)}
                                            className="
                                                h-[32px]
                                                sm:h-[30px]
                                                bg-[#071f25]
                                                text-white
                                                text-[8px]
                                                sm:text-[9px]
                                                tracking-wide
                                                uppercase
                                                hover:bg-[#12343a]
                                                transition
                                                cursor-pointer
                                            "
                                        >
                                            Book Now
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

        </div>
    )
}

export default ExploreItems
