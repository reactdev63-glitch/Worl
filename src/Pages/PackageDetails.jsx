import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const PackageDetails = () => {
    const { packages } = useContext(ShopContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const pkg = packages.find((item) => item.id === Number(id));

    const [guests, setGuests] = useState(2);

    if (!pkg) {
        return (
            <div className="w-[80%] max-w-[1320px] mx-auto py-24 text-center">
                <p className="text-[11px] tracking-[2px] text-[#d7b66b] mb-3">
                    THE EXPEDITION HOUSE
                </p>

                <h1 className="font-serif text-[46px] text-[#102f35]">
                    Journey not found
                </h1>

                <button onClick={() => navigate("/explore")} className="mt-8 bg-[#17363d] text-white px-6 py-3 text-sm rounded-sm hover:bg-[#102a2f] transition">
                    Back to Packages
                </button>
            </div>
        );  
    }

    const total = pkg.priceValue
        ? pkg.priceValue * guests
        : 0;

    return (
        <section className="w-[80%] max-w-[1320px] mx-auto bg-[#f7f5ef]">

            {/* MAIN CONTAINER */}
            <div className="w-[90%] max-w-[1320px] mx-auto py-14">

                {/* BACK */}
                <button onClick={() => navigate("/packages")} className="flex items-center gap-2 text-[11px] tracking-[1.5px] text-gray-500 hover:text-[#102f35] transition mb-10">
                    <span className="text-lg">←</span>
                    Back to Journeys
                </button>


                {/* HEADER */}
                <div className="flex items-end justify-between gap-10 mb-10">

                    <div className="max-w-[750px]">

                        <p className="text-[11px] tracking-[2px] font-medium text-[#d7b66b] mb-3">
                            THE COMPENDIUM
                        </p>

                        <h1 className="font-serif text-[42px] md:text-[46px] leading-[1.05] text-[#102f35]">
                            {pkg.title}
                        </h1>

                        <p className="mt-4 max-w-[650px] text-[15px] leading-6 text-gray-500">
                            {pkg.description}
                        </p>

                    </div>

                    <div className="hidden md:block text-right">

                        <p className="text-[10px] tracking-[2px] text-gray-400">
                            ARCHIVE FOLIO
                        </p>

                        <p className="font-serif text-lg text-[#102f35] mt-1">
                            PLATE {String(pkg.id).padStart(2, "0")}
                        </p>

                    </div>

                </div>


                {/* HERO IMAGE */}
                <div className="relative w-full h-[380px] md:h-[500px] overflow-hidden rounded-md group">

                    <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071F26]/80 via-transparent to-transparent"></div>


                    {/* IMAGE INFO */}
                    <div className="absolute bottom-0 left-0 w-full p-6 text-white">

                        <div className="flex flex-wrap items-center gap-3">

                            <span className="bg-[#17363d] px-3 py-1.5 text-[10px] rounded-sm">
                                {pkg.duration}
                            </span>

                            <span className="bg-white text-[#17363d] px-3 py-1.5 text-[10px] rounded-sm">
                                <span className="text-[#d7b66b]">★</span>
                                <span className="ml-1">{pkg.rating}</span>
                            </span>

                        </div>

                    </div>

                </div>


                {/* MAIN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 mt-12">


                    {/* LEFT CONTENT */}
                    <div>

                        {/* SECTION TITLE */}
                        <div className="flex items-center justify-between border-b border-[#ddd9d1] pb-3 mb-7">

                            <p className="text-[10px] tracking-[2px] font-medium text-[#d7b66b]">
                                SECTION 01 // FIELD NARRATIVE
                            </p>

                            <p className="text-[9px] tracking-[1.5px] text-gray-400">
                                ARCHIVE FOLIO • PLATE {String(pkg.id).padStart(2, "0")}
                            </p>

                        </div>


                        <h2 className="font-serif text-[38px] leading-[1.1] text-[#102f35]">
                            The Journey
                        </h2>


                        <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-gray-500">
                            {pkg.description}
                        </p>

                        <p className="mt-5 max-w-[760px] text-[15px] leading-7 text-gray-500">
                            Discover a carefully curated passage through {pkg.destination},
                            designed around private experiences, distinctive landscapes,
                            exceptional accommodation and moments of genuine solitude.
                            Every element of this journey has been selected to move beyond
                            conventional tourism.
                        </p>


                        {/* INFO CARDS */}
                        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#ddd9d1] mt-10">

                            <div className="p-5 border-b md:border-b-0 md:border-r border-[#ddd9d1]">

                                <p className="text-[9px] tracking-[1.5px] text-[#d7b66b]">
                                    OPTIMAL SEASON
                                </p>

                                <h3 className="font-serif text-[20px] text-[#102f35] mt-3">
                                    June — September
                                </h3>

                                <p className="text-[11px] leading-5 text-gray-500 mt-2">
                                    The ideal period for experiencing the destination.
                                </p>

                            </div>


                            <div className="p-5 border-b md:border-b-0 md:border-r border-[#ddd9d1]">

                                <p className="text-[9px] tracking-[1.5px] text-[#d7b66b]">
                                    ACCOMMODATION
                                </p>

                                <h3 className="font-serif text-[20px] text-[#102f35] mt-3">
                                    Private Stay
                                </h3>

                                <p className="text-[11px] leading-5 text-gray-500 mt-2">
                                    Carefully selected stays throughout the journey.
                                </p>

                            </div>


                            <div className="p-5">

                                <p className="text-[9px] tracking-[1.5px] text-[#d7b66b]">
                                    PHYSICAL CADENCE
                                </p>

                                <h3 className="font-serif text-[20px] text-[#102f35] mt-3">
                                    Moderate
                                </h3>

                                <p className="text-[11px] leading-5 text-gray-500 mt-2">
                                    Balanced exploration with time to unwind.
                                </p>

                            </div>

                        </div>


                        {/* EXPERIENCE */}
                        <div className="mt-14">

                            <p className="text-[11px] tracking-[2px] font-medium text-[#d7b66b] mb-3">
                                THE EXPERIENCE
                            </p>

                            <h2 className="font-serif text-[34px] text-[#102f35]">
                                Beyond the ordinary
                            </h2>

                            <p className="mt-4 text-[15px] leading-7 text-gray-500 max-w-[760px]">
                                From intimate local encounters to carefully chosen
                                landscapes, this journey is designed for travelers who
                                prefer depth over distance. Expect private access,
                                thoughtful hospitality and an itinerary that leaves
                                room for discovery.
                            </p>

                        </div>


                        {/* TAGS */}
                        <div className="mt-10">

                            <p className="text-[10px] tracking-[2px] text-gray-400 mb-4">
                                JOURNEY SIGNATURES
                            </p>

                            <div className="flex flex-wrap gap-2">

                                {pkg.tags.map((tag, index) => (

                                    <span
                                        key={index}
                                        className="bg-[#f1f0eb] text-gray-500 text-[11px] px-3 py-2 rounded-sm"
                                    >
                                        {tag}
                                    </span>

                                ))}

                            </div>

                        </div>


                        {/* SECOND IMAGE */}
                        <div className="mt-12">

                            <div className="relative h-[300px] md:h-[380px] overflow-hidden rounded-md group">

                                <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />

                            </div>

                            <div className="flex items-center justify-between mt-3">

                                <p className="text-[9px] tracking-[1.5px] text-gray-400">
                                    PLATE 02 // FIELD ARCHIVE
                                </p>

                                <p className="text-[11px] text-gray-500">
                                    {pkg.destination}
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* RIGHT BOOKING CARD */}
                    <div>

                        <div className="sticky top-8 bg-[#f7f5ef] border border-[#ddd9d1] rounded-sm overflow-hidden">

                            {/* CARD IMAGE */}
                            <div className="relative h-[190px]">

                                <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute top-3 left-3 bg-[#17363d] text-white px-3 py-1.5 text-[9px] tracking-[1.5px] rounded-sm">
                                    REGISTER #{400 + pkg.id}
                                </div>

                            </div>


                            {/* CARD CONTENT */}
                            <div className="p-6">

                                <p className="text-[10px] tracking-[2px] text-[#d7b66b]">
                                    MONOGRAPH LEDGER
                                </p>

                                <h2 className="font-serif text-[28px] leading-tight text-[#102f35] mt-2">
                                    {pkg.destination} Folio
                                </h2>


                                {/* PRICE */}
                                <div className="border-y border-[#ddd9d1] py-5 mt-6">

                                    <p className="text-[10px] text-gray-400">
                                        STARTING FOLIO
                                    </p>

                                    <div className="flex items-end gap-1 mt-1">

                                        <span className="font-serif text-[27px] font-semibold text-[#102f35]">
                                            {pkg.price}
                                        </span>

                                        <span className="text-[11px] text-gray-500 mb-1">
                                            / {pkg.priceType}
                                        </span>

                                    </div>

                                </div>


                                {/* DETAILS */}
                                <div className="space-y-4 mt-6">

                                    <div className="flex items-start justify-between gap-4">

                                        <span className="text-[9px] tracking-[1.5px] text-gray-400 uppercase">
                                            Destination
                                        </span>

                                        <span className="text-[12px] text-[#102f35] text-right">
                                            {pkg.destination}
                                        </span>

                                    </div>


                                    <div className="flex items-start justify-between gap-4">

                                        <span className="text-[9px] tracking-[1.5px] text-gray-400 uppercase">
                                            Duration
                                        </span>

                                        <span className="text-[12px] text-[#102f35] text-right">
                                            {pkg.duration}
                                        </span>

                                    </div>


                                    <div className="flex items-start justify-between gap-4">

                                        <span className="text-[9px] tracking-[1.5px] text-gray-400 uppercase">
                                            Travel Mood
                                        </span>

                                        <span className="text-[12px] text-[#102f35] text-right">
                                            {pkg.mood}
                                        </span>

                                    </div>


                                    <div className="flex items-start justify-between gap-4">

                                        <span className="text-[9px] tracking-[1.5px] text-gray-400 uppercase">
                                            Rating
                                        </span>

                                        <span className="text-[12px] text-[#102f35] text-right">
                                            ★ {pkg.rating}
                                        </span>

                                    </div>

                                </div>


                                {/* GUESTS */}
                                <div className="border-t border-[#ddd9d1] mt-6 pt-5">

                                    <div className="flex items-center justify-between">

                                        <div>

                                            <p className="text-[9px] tracking-[1.5px] text-gray-400 uppercase">
                                                Registered Guests
                                            </p>

                                            <p className="text-[11px] text-gray-400 mt-1">
                                                Select number of travelers
                                            </p>

                                        </div>


                                        <div className="flex items-center border border-[#d5d1c8]">

                                            <button
                                                onClick={() => setGuests(Math.max(1, guests - 1))}
                                                className="w-8 h-8 text-[#17363d] hover:bg-[#ebe9e3] transition"
                                            >
                                                −
                                            </button>

                                            <span className="w-8 text-center text-[12px]">
                                                {guests}
                                            </span>

                                            <button
                                                onClick={() => setGuests(Math.min(8, guests + 1))}
                                                className="w-8 h-8 text-[#17363d] hover:bg-[#ebe9e3] transition"
                                            >
                                                +
                                            </button>

                                        </div>

                                    </div>

                                </div>


                                {/* TOTAL */}
                                {pkg.priceValue && (
                                    <div className="bg-white border border-[#ddd9d1] mt-5 p-4">

                                        <div className="flex justify-between items-center">

                                            <span className="text-[10px] text-gray-400 uppercase tracking-[1px]">
                                                Base Total
                                            </span>

                                            <span className="font-serif text-[21px] text-[#102f35]">
                                                ₹{total.toLocaleString("en-IN")}
                                            </span>

                                        </div>

                                    </div>
                                )}


                                {/* INCLUDED */}
                                <div className="border-t border-[#ddd9d1] mt-6 pt-5">

                                    <p className="text-[9px] tracking-[1.5px] text-gray-400 uppercase mb-4">
                                        Included
                                    </p>

                                    <div className="space-y-3">

                                        {[
                                            "Private destination experience",
                                            "Premium accommodation",
                                            "Curated local experiences",
                                            "Private transfers",
                                        ].map((item, index) => (

                                            <div key={index} className="flex items-start gap-2">

                                                <span className="text-[#d7b66b] text-[11px]">
                                                    ✓
                                                </span>

                                                <p className="text-[11px] leading-5 text-gray-500">
                                                    {item}
                                                </p>

                                            </div>

                                        ))}

                                    </div>

                                </div>


                                {/* BOOK BUTTON */}
                                <button
                                    onClick={() => navigate(`/bookings/${pkg.id}`)}
                                    className="w-full bg-[#17363d] text-white py-3.5 mt-7 text-[11px] tracking-[1.5px] rounded-sm hover:bg-[#102a2f] transition"
                                >
                                    BOOK THIS JOURNEY
                                </button>


                                {/* CONCIERGE */}
                                <button
                                    onClick={() => navigate("/contact")}
                                    className="w-full border border-[#d0ccc3] text-[#17363d] py-3.5 mt-2 text-[11px] tracking-[1.5px] rounded-sm hover:bg-[#ebe9e3] transition"
                                >
                                    INQUIRE WITH CONCIERGE
                                </button>


                                <p className="text-[9px] leading-5 text-gray-400 text-center mt-5">
                                    Expedition capacity is intentionally limited to
                                    preserve the character of each journey.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>


                {/* BOTTOM */}
                <div className="border-t border-[#ddd9d1] mt-16 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">

                    <div>

                        <p className="text-[10px] tracking-[2px] text-[#d7b66b]">
                            THE EXPEDITION HOUSE
                        </p>

                        <p className="font-serif text-[22px] text-[#102f35] mt-1">
                            Travel calibrated to human depth.
                        </p>

                    </div>

                    <button
                        onClick={() => navigate("/destination")}
                        className="bg-[#ebe9e3] text-[#17363d] px-5 py-3 text-[11px] rounded-sm hover:bg-[#e0ded7] transition"
                    >
                        Explore More Journeys →
                    </button>

                </div>

            </div>

        </section>
    );
};

export default PackageDetails;