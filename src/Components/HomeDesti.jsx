import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate, useParams } from 'react-router-dom';

const HomeDesti = () => {


    const {id} = useParams();
    const navigate = useNavigate();

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
    ];



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
    ];



    return (
        <section className="w-[80%] max-w-[1320px] mx-auto">

            {/* Main Container */}
            <div className="w-[90%] max-w-[1320px] mx-auto py-16">

                {/*TOP CONTENT*/}
                <div className="flex items-end justify-between mb-9">

                    {/* Left Content */}
                    <div className="max-w-[600px]">

                        <p className="text-[11px] tracking-[2px] font-medium text-[#d7b66b] mb-3">
                            THE COMPENDIUM
                        </p>

                        <h1 className="font-serif text-[46px] leading-[1.05] text-[#102f35]">
                            Places worth going
                            <br />
                            further for
                        </h1>

                        <p className="mt-2 max-w-[650px] text-[15px] leading-6 text-gray-500">
                            Remote latitudes, secluded coastlines, and highland frontiers
                            where geography and spirit converge in profound solitude.
                        </p>

                    </div>


                    {/* View All Destinations */}
                    <button className="shrink-0 mt-10 bg-[#ebe9e3] text-[#17363d] px-5 py-3 text-sm  flex items-center gap-3  rounded-sm  hover:bg-[#e0ded7] transition ">

                        View All Destinations

                        <span className="text-base">
                            →
                        </span>

                    </button>

                </div>


                {/*DESTINATION GRID*/}

                <div className="grid grid-cols-12 gap-4">

                    {destinations.map((destination, index) => (

                        <div
                            key={index} className={`relative h-[400px]  overflow-hidden rounded-md group cursor-pointer

                ${index === 0 ? 'col-span-4' : ''}
                ${index === 1 ? 'col-span-5' : ''}
                ${index === 2 ? 'col-span-3' : ''}

                ${index === 3 ? 'col-span-4' : ''}
                ${index === 4 ? 'col-span-4' : ''}
                ${index === 5 ? 'col-span-4' : ''}
              `}
                        >

                            <img
                                src={destination.img} alt={destination.Name} className=" absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700
                "
                            />

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


                            {/*CARD CONTENT*/}

                            <div className="absolute bottom-0 left-0 w-full p-5 text-white">

                                {/* Coordinates */}
                                <p className="text-[8px] tracking-[1px] text-[#E4D2A8] mb-2">
                                    {destination.Coordinates}
                                </p>


                                {/* Destination Name */}
                                <h2 className="font-serif text-[22px] leading-none">
                                    {destination.Name}
                                </h2>


                                {/* Destination Type */}
                                <p className="text-[9px] text-gray-300 mt-2">
                                    {destination.Type}
                                </p>


                                {/* Bottom Row */}
                                <div className="flex items-center justify-between mt-5">

                                    <p className="text-[9px] text-gray-200">
                                        {destination.Link}
                                    </p>

                                    <span className="text-[#E4D2A8] text-lg">
                                        ↗
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* PACKAGES SECTION */}
            <section className="bg-[#f7f5ef] py-14">
                <div className="max-w-[1100px] mx-auto px-5">

                    {/* HEADER */}
                    <div className="relative mb-12">

                        <p className="text-[11px] tracking-[2px] font-medium text-[#d7b66b] mb-3">
                            HANDCRAFTED FOLIOS
                        </p>

                        <div className="flex items-start justify-between gap-10">

                            <div>
                                <h1 className="font-serif text-[46px] leading-[1.05] text-[#102f35]">
                                    Curated journeys
                                </h1>

                                <p className="mt-2 max-w-[650px] text-[15px] leading-6 text-gray-500">
                                    Each bespoke package is orchestrated down to the final tea service,
                                    private flight charter, and geological guide.
                                </p>
                            </div>

                            {/* VIEW ALL */}
                            <button
                                className=" shrink-0 mt-10 bg-[#ebe9e3] text-[#17363d] px-5 py-3 text-sm  flex items-center gap-3  rounded-sm  hover:bg-[#e0ded7] transition "
                            >
                                View All Packages
                                <span className="text-lg">→</span>
                            </button>

                        </div>
                    </div>


                    {/* PACKAGES GRID */}
                    <div className="grid grid-cols-4 gap-5">

                        {packages.map((pkg, index) => (

                            <div
                                key={index}
                                className="
                        bg-white
                        rounded-md
                        overflow-hidden
                        border
                        border-gray-100
                    "
                            >

                                {/* IMAGE */}
                                <div className="relative h-[238px]">

                                    <img
                                        src={pkg.image}
                                        alt={pkg.title}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* DURATION */}
                                    <div
                                        className="
                                absolute
                                top-3
                                left-3
                                bg-[#17363d]
                                text-white
                                text-[11px]
                                px-3
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
                                top-3
                                right-3
                                bg-white
                                text-[#17363d]
                                text-[11px]
                                px-2.5
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
                                <div className="px-4 pt-3 pb-4">

                                    {/* TAGS */}
                                    <div className="flex flex-wrap gap-1.5 mb-3">

                                        {pkg.tags.map((tag, tagIndex) => (

                                            <span
                                                key={tagIndex}
                                                className="
                                        bg-[#f1f0eb]
                                        text-gray-500
                                        text-[11px]
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
                                text-[19px]
                                leading-[1.25]
                                font-semibold
                                text-[#102f35]
                                min-h-[48px]
                            "
                                    >
                                        {pkg.title}
                                    </h2>


                                    {/* DESCRIPTION */}
                                    <p
                                        className="
                                text-[13px]
                                leading-5
                                text-gray-500
                                mt-2
                                line-clamp-2
                                min-h-[40px]
                            "
                                    >
                                        {pkg.description}
                                    </p>


                                    {/* PRICE */}
                                    <div className="mt-7">

                                        <p className="text-[11px] text-gray-400">
                                            Starting folio
                                        </p>

                                        <div className="mt-1">

                                            <span
                                                className="
                                        font-serif
                                        text-[19px]
                                        font-semibold
                                        text-[#102f35]
                                    "
                                            >
                                                {pkg.price}
                                            </span>

                                            <span className="text-[12px] text-gray-500 ml-1">
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
                                    text-[12px]
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
                                    text-[12px]
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