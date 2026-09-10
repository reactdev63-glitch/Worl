import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const HomeDesti = () => {

    const navigate = useNavigate()

    const destinations = [
        {
            img: assets.Goa,
            Coordinates: '15.2993° N, 74.1240° E',
            Name: 'Goa',
            Type: 'Coastal Serenity & Heritage Estates',
            Link: '18 Curated Sanctuaries',
        },
        {
            img: assets.Kashmir,
            Coordinates: '34.0837° N, 74.7973° E',
            Name: 'Kashmir',
            Type: 'Alpine Wonder & Great Lakes',
            Link: '12 High-Altitude Treks',
        },
        {
            img: assets.Ooty,
            Coordinates: '11.4102° N, 76.6950° E',
            Name: 'Ooty',
            Type: 'Tea Hills & Solitary Glens',
            Link: '8 Heritage Lodges',
        },
        {
            img: assets.Kerala,
            Coordinates: '9.4981° N, 76.3388° E',
            Name: 'Kerala',
            Type: 'Backwaters & Ayurvedic Quietude',
            Link: '14 Private Waterways',
        },
        {
            img: assets.Dubai,
            Coordinates: '25.2048° N, 55.2708° E',
            Name: 'Dubai',
            Type: 'Golden Dunes & Desert Conservancies',
            Link: '9 Dune Expeditions',
        },
        {
            img: assets.Bali,
            Coordinates: '8.3405° S, 115.0920° E',
            Name: 'Bali',
            Type: 'Sanctuary of Gods & Sacred Valleys',
            Link: '22 Cliff Estates',
        },
    ]


    const packages = [
        {
            id: 1,
            image: assets.Kashmirpack,
            duration: "7 Days / 6 Nights",
            rating: 4.9,
            tags: ["Houseboat Suite", "Guide", "Pony Expedition"],
            title: "Kashmir Great Lakes Trek & Houseboat",
            description:
                "Traverse seven solitary glacial basins before retiring to hand-carved...",
            price: "₹48,000",
            priceType: "guest",
        },
        {
            id: 2,
            image: assets.Amalfipack,
            duration: "8 Days / 7 Nights",
            rating: 4.9,
            tags: ["Private Yacht", "Capri Sea Cave", "Sommelier"],
            title: "Amalfi Coast & Capri Yacht Charter",
            description:
                "Private coastal navigation, cliffside Michelin enotecas, and quiet...",
            price: "₹1,85,000",
            priceType: "guest",
        },
        {
            id: 3,
            image: assets.Balipack,
            duration: "6 Days / 5 Nights",
            rating: 4.9,
            tags: ["Cliff Villa", "Private Butler", "Temple Passage"],
            title: "Bali Sacred Valleys & Uluwatu Cliff Villa",
            description:
                "From the misty silence of Sidemen river shrines to an exclusive private...",
            price: "₹62,000",
            priceType: "guest",
        },
        {
            id: 4,
            image: assets.Swisspack,
            duration: "9 Days / 8 Nights",
            rating: 4.9,
            tags: ["Excellence Class", "Thermal Baths", "Grand Hotel"],
            title: "Swiss Alps Glacier Express & St. Moritz",
            description:
                "Panoramic carriage crossing through the Rhine Gorge and Landwasser...",
            price: "₹2,10,000",
            priceType: "guest",
        },
    ]


    return (
        <section className="w-[90%] md:w-[85%] lg:w-[80%] max-w-[1320px] mx-auto">

            {/* =================================
                DESTINATIONS SECTION
            ================================= */}
            <div className="w-full max-w-[1320px] mx-auto py-10 sm:py-12 md:py-16">

                {/* TOP CONTENT */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-7 sm:mb-9">

                    {/* LEFT CONTENT */}
                    <div className="max-w-[600px]">

                        <p className="text-[9px] sm:text-[10px] md:text-[11px] tracking-[1.5px] sm:tracking-[2px] font-medium text-[#d7b66b] mb-2 sm:mb-3">
                            THE COMPENDIUM
                        </p>

                        <h1 className="font-serif text-[34px] sm:text-[40px] md:text-[46px] leading-[1.05] text-[#102f35]">
                            Places worth going
                            <br className="hidden sm:block" />
                            further for
                        </h1>

                        <p className="mt-2 max-w-[650px] text-[13px] sm:text-[14px] md:text-[15px] leading-5 sm:leading-6 text-gray-500">
                            Remote latitudes, secluded coastlines, and highland frontiers
                            where geography and spirit converge in profound solitude.
                        </p>

                    </div>


                    {/* VIEW ALL */}
                    <button
                        className="self-start sm:self-auto shrink-0 bg-[#ebe9e3] text-[#17363d] px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm flex items-center gap-2 sm:gap-3 rounded-sm hover:bg-[#e0ded7] transition"
                    >
                        View All Destinations

                        <span className="text-base sm:text-lg">
                            →
                        </span>
                    </button>

                </div>


                {/* DESTINATION GRID */}

                {/* Mobile: 1 column
                    Tablet: 2 columns
                    Desktop: custom 12-column layout
                */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4">

                    {destinations.map((destination, index) => (

                        <div
                            key={index}
                            className={`
                                relative
                                h-[320px]
                                sm:h-[360px]
                                lg:h-[400px]
                                overflow-hidden
                                rounded-md
                                group
                                cursor-pointer

                                ${index === 0 ? 'lg:col-span-4' : ''}
                                ${index === 1 ? 'lg:col-span-5' : ''}
                                ${index === 2 ? 'lg:col-span-3' : ''}
                                ${index === 3 ? 'lg:col-span-4' : ''}
                                ${index === 4 ? 'lg:col-span-4' : ''}
                                ${index === 5 ? 'lg:col-span-4' : ''}
                            `}
                        >

                            {/* IMAGE */}
                            <img
                                src={destination.img}
                                alt={destination.Name}
                                className="
                                    absolute
                                    inset-0
                                    w-full
                                    h-full
                                    object-cover
                                    group-hover:scale-105
                                    transition-transform
                                    duration-700
                                "
                            />


                            {/* OVERLAY */}
                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-[#071F26]/95
                                    via-[#071F26]/30
                                    to-transparent
                                "
                            ></div>


                            {/* CARD CONTENT */}
                            <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 text-white">

                                {/* COORDINATES */}
                                <p className="text-[7px] sm:text-[8px] tracking-[1px] text-[#E4D2A8] mb-1.5 sm:mb-2">
                                    {destination.Coordinates}
                                </p>


                                {/* NAME */}
                                <h2 className="font-serif text-[21px] sm:text-[22px] leading-none">
                                    {destination.Name}
                                </h2>


                                {/* TYPE */}
                                <p className="text-[8px] sm:text-[9px] text-gray-300 mt-2">
                                    {destination.Type}
                                </p>


                                {/* BOTTOM */}
                                <div className="flex items-center justify-between mt-4 sm:mt-5">

                                    <p className="text-[8px] sm:text-[9px] text-gray-200">
                                        {destination.Link}
                                    </p>

                                    <span className="text-[#E4D2A8] text-base sm:text-lg">
                                        ↗
                                    </span>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>


            {/* =================================
                PACKAGES SECTION
            ================================= */}
            <section className="bg-[#f7f5ef] py-10 sm:py-12 md:py-14">

                <div className="max-w-[1100px] mx-auto px-4 sm:px-5">

                    {/* HEADER */}
                    <div className="relative mb-8 sm:mb-10 md:mb-12">

                        <p className="text-[9px] sm:text-[10px] md:text-[11px] tracking-[1.5px] sm:tracking-[2px] font-medium text-[#d7b66b] mb-2 sm:mb-3">
                            HANDCRAFTED FOLIOS
                        </p>


                        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 sm:gap-10">

                            <div>

                                <h1 className="font-serif text-[34px] sm:text-[40px] md:text-[46px] leading-[1.05] text-[#102f35]">
                                    Curated journeys
                                </h1>

                                <p className="mt-2 max-w-[650px] text-[13px] sm:text-[14px] md:text-[15px] leading-5 sm:leading-6 text-gray-500">
                                    Each bespoke package is orchestrated down to the final tea service,
                                    private flight charter, and geological guide.
                                </p>

                            </div>


                            {/* VIEW ALL */}
                            <button
                                className="
                                    self-start
                                    sm:self-auto
                                    shrink-0
                                    bg-[#ebe9e3]
                                    text-[#17363d]
                                    px-4
                                    sm:px-5
                                    py-2.5
                                    sm:py-3
                                    text-xs
                                    sm:text-sm
                                    flex
                                    items-center
                                    gap-2
                                    sm:gap-3
                                    rounded-sm
                                    hover:bg-[#e0ded7]
                                    transition
                                "
                            >
                                View All Packages

                                <span className="text-base sm:text-lg">
                                    →
                                </span>

                            </button>

                        </div>

                    </div>


                    {/* PACKAGES GRID */}

                    {/* Mobile: 1
                        Tablet: 2
                        Desktop: 4
                    */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

                        {packages.map((pkg, index) => (

                            <div
                                key={index}
                                className="
                                    bg-white
                                    rounded-md
                                    overflow-hidden
                                    border
                                    border-gray-100
                                    flex
                                    flex-col
                                "
                            >

                                {/* IMAGE */}
                                <div className="relative h-[220px] sm:h-[230px] lg:h-[238px]">

                                    <img
                                        src={pkg.image}
                                        alt={pkg.title}
                                        className="w-full h-full object-cover"
                                    />


                                    {/* DURATION */}
                                    <div
                                        className="
                                            absolute
                                            top-2.5
                                            sm:top-3
                                            left-2.5
                                            sm:left-3
                                            bg-[#17363d]
                                            text-white
                                            text-[9px]
                                            sm:text-[11px]
                                            px-2
                                            sm:px-3
                                            py-1.5
                                            rounded-sm
                                        "
                                    >
                                        {pkg.duration}
                                    </div>


                                    {/* RATING */}
                                    <div
                                        className="
                                            absolute
                                            top-2.5
                                            sm:top-3
                                            right-2.5
                                            sm:right-3
                                            bg-white
                                            text-[#17363d]
                                            text-[9px]
                                            sm:text-[11px]
                                            px-2
                                            sm:px-2.5
                                            py-1.5
                                            rounded-sm
                                        "
                                    >

                                        <span className="text-[#d7b66b]">
                                            ★
                                        </span>

                                        <span className="ml-1">
                                            {pkg.rating}
                                        </span>

                                    </div>

                                </div>


                                {/* CARD CONTENT */}
                                <div className="px-3.5 sm:px-4 pt-3 pb-4 flex flex-col flex-1">

                                    {/* TAGS */}
                                    <div className="flex flex-wrap gap-1.5 mb-3">

                                        {pkg.tags.map((tag, tagIndex) => (

                                            <span
                                                key={tagIndex}
                                                className="
                                                    bg-[#f1f0eb]
                                                    text-gray-500
                                                    text-[9px]
                                                    sm:text-[11px]
                                                    px-2
                                                    py-1
                                                    rounded-sm
                                                "
                                            >
                                                {tag}
                                            </span>

                                        ))}

                                    </div>


                                    {/* TITLE */}
                                    <h2
                                        className="
                                            font-serif
                                            text-[18px]
                                            sm:text-[19px]
                                            leading-[1.25]
                                            font-semibold
                                            text-[#102f35]
                                            min-h-0
                                            sm:min-h-[48px]
                                        "
                                    >
                                        {pkg.title}
                                    </h2>


                                    {/* DESCRIPTION */}
                                    <p
                                        className="
                                            text-[12px]
                                            sm:text-[13px]
                                            leading-5
                                            text-gray-500
                                            mt-2
                                            line-clamp-2
                                            min-h-0
                                            sm:min-h-[40px]
                                        "
                                    >
                                        {pkg.description}
                                    </p>


                                    {/* PRICE */}
                                    <div className="mt-5 sm:mt-7">

                                        <p className="text-[10px] sm:text-[11px] text-gray-400">
                                            Starting folio
                                        </p>

                                        <div className="mt-1">

                                            <span
                                                className="
                                                    font-serif
                                                    text-[18px]
                                                    sm:text-[19px]
                                                    font-semibold
                                                    text-[#102f35]
                                                "
                                            >
                                                {pkg.price}
                                            </span>

                                            <span className="text-[11px] sm:text-[12px] text-gray-500 ml-1">
                                                / {pkg.priceType}
                                            </span>

                                        </div>

                                    </div>


                                    {/* BUTTONS */}
                                    <div className="flex gap-2 mt-3">

                                        <button
                                            onClick={() => navigate(`/details/${pkg.id}`)}
                                            className="
                                                flex-1
                                                bg-[#f0eee8]
                                                text-[#17363d]
                                                py-2.5
                                                px-1
                                                text-[10px]
                                                sm:text-[12px]
                                                rounded-sm
                                                whitespace-nowrap
                                                hover:bg-[#e5e3dc]
                                                transition
                                            "
                                        >
                                            View Details
                                        </button>


                                        <button
                                            onClick={() => navigate(`/bookings/${pkg.id}`)}
                                            className="
                                                flex-1
                                                bg-[#17363d]
                                                text-white
                                                py-2.5
                                                px-1
                                                text-[10px]
                                                sm:text-[12px]
                                                rounded-sm
                                                whitespace-nowrap
                                                hover:bg-[#102a2f]
                                                transition
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

        </section>
    )
}

export default HomeDesti
