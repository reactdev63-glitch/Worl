
import React from "react";
import { assets } from "../assets/assets";

const HomeSection = () => {
    return (
        <>
            {/* =========================
                SEASONAL ENDOWMENTS
            ========================== */}
            <section className="w-[90%] md:w-[85%] lg:w-[80%] max-w-[1320px] mx-auto">

                <div className="w-full max-w-[1320px] mx-auto py-10 sm:py-12 md:py-16">

                    {/* HEADER */}
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-7">

                        <div>
                            <p className="text-[9px] sm:text-[10px] md:text-[11px] tracking-[1.5px] sm:tracking-[2px] font-medium text-[#d7b66b] mb-2 sm:mb-3">
                                SEASONAL ENDOWMENTS
                            </p>

                            <h1 className="font-serif text-[32px] sm:text-[38px] md:text-[46px] leading-[1.05] text-[#102f35]">
                                Limited edition privileges
                            </h1>
                        </div>

                        <button className="self-start sm:self-auto shrink-0 bg-[#ebe9e3] text-[#17363d] px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm flex items-center gap-2 sm:gap-3 rounded-sm hover:bg-[#e0ded7] transition">
                            Explore All Curated Deals →
                        </button>

                    </div>


                    {/* PRIVILEGES */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

                        {/* FIRST CARD */}
                        <div className="bg-[#12343a] rounded-md p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4 min-h-[205px]">

                            {/* IMAGE */}
                            <div className="w-full sm:w-[150px] md:w-[180px] h-[170px] shrink-0">

                                <img
                                    src={assets.Limitedpriv}
                                    alt="Northern lights"
                                    className="w-full h-full object-cover rounded-sm"
                                />

                            </div>


                            {/* CONTENT */}
                            <div className="text-white flex-1 w-full">

                                <p className="text-[9px] sm:text-[10px] tracking-[1px] text-[#d7b66b] uppercase mb-1">
                                    Autumn / Winter '26 Dispatch
                                </p>

                                <h2 className="font-serif text-[17px] sm:text-[18px] leading-5 mb-2">
                                    The Far Latitude Escapes
                                </h2>

                                <p className="text-[10px] sm:text-[11px] leading-4 text-gray-300">
                                    Reserve your place on winter fjord
                                    expeditions and Finnish glass igloos
                                    90 days in advance to unlock priority
                                    charter privileges.
                                </p>

                                <div className="flex items-end gap-4 mt-3">

                                    <button className="bg-[#9b792d] text-white text-[11px] sm:text-[12px] px-3 py-2 rounded-sm">
                                        Claim
                                        <br />
                                        Privilege
                                    </button>

                                    <div className="text-[9px] sm:text-[10px] text-gray-300">
                                        Valid until
                                        <br />
                                        <span className="text-white">
                                            April 30
                                        </span>
                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* SECOND CARD */}
                        <div className="bg-[#eeece6] rounded-md p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4 min-h-[205px]">

                            {/* IMAGE */}
                            <div className="w-full sm:w-[150px] md:w-[180px] h-[170px] shrink-0">

                                <img
                                    src={assets.Limitedpriv2}
                                    alt="Coastal pavilion"
                                    className="w-full h-full object-cover rounded-sm"
                                />

                            </div>


                            {/* CONTENT */}
                            <div className="flex-1 text-[#17363d] w-full">

                                <p className="text-[9px] sm:text-[10px] tracking-[1px] text-[#d7b66b] uppercase mb-1">
                                    Monsoon & Spring Sanctuaries
                                </p>

                                <h2 className="font-serif text-[17px] sm:text-[18px] leading-5 mb-2">
                                    Private Coastal Pavilions
                                </h2>

                                <p className="text-[10px] sm:text-[11px] leading-4 text-gray-500">
                                    Includes an uncatalogued private
                                    culinary evening with estate chefs
                                    and yacht transfer credits for
                                    bookings of five nights or more.
                                </p>

                                <div className="flex items-end gap-4 mt-3">

                                    <button className="bg-[#17363d] text-white text-[11px] sm:text-[12px] px-3 py-2 rounded-sm">
                                        View
                                        <br />
                                        Availability
                                    </button>

                                    <div className="text-[9px] sm:text-[10px] text-gray-500">
                                        Limited to 8
                                        <br />
                                        suites
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================
                THE EXPEDITION HOUSE CREED
            ========================== */}
            <section className="w-[90%] md:w-[85%] lg:w-[80%] max-w-[1320px] mx-auto bg-[#f7f5ef] py-10 sm:py-12 md:py-16">

                <div className="max-w-[1100px] mx-auto px-4 sm:px-5">

                    {/* HEADER */}
                    <div className="text-center max-w-[750px] mx-auto">

                        <p className="text-[9px] sm:text-[10px] md:text-[11px] tracking-[1.5px] sm:tracking-[2px] text-[#d7b66b] font-medium mb-3 sm:mb-4">
                            THE EXPEDITION HOUSE CREED
                        </p>

                        <h1 className="font-serif text-[34px] sm:text-[42px] md:text-[50px] leading-[1.05] text-[#102f35]">
                            Travel calibrated to human
                            <br className="hidden sm:block" />
                            depth
                        </h1>

                        <p className="text-[13px] sm:text-[14px] md:text-[15px] leading-5 sm:leading-6 text-gray-500 mt-4">
                            We reject the frantic pace of mass itineraries in favor of
                            architectural quietude, rare cultural access, and absolute trust.
                        </p>

                    </div>


                    {/* CREED CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12">

                        {/* CARD 1 */}
                        <div className="w-full min-h-[200px] bg-white rounded-md p-5 sm:p-6">

                            <div className="w-8 h-8 bg-[#f0eee8] rounded-md flex items-center justify-center mb-4">
                                <span className="text-[#d7b66b] text-xl">
                                    ◉
                                </span>
                            </div>

                            <h2 className="font-serif text-[15px] font-semibold text-[#102f35] mb-3">
                                Curated Journeys
                            </h2>

                            <p className="text-[10px] leading-5 text-gray-500">
                                Every itinerary is vetted personally by archival
                                expeditionists. We catalog unlisted trails, solitary
                                heritage homes, and discrete estate access.
                            </p>

                        </div>


                        {/* CARD 2 */}
                        <div className="w-full min-h-[200px] bg-white rounded-md p-5 sm:p-6">

                            <div className="w-8 h-8 bg-[#f0eee8] rounded-md flex items-center justify-center mb-4">
                                <span className="text-[#d7b66b] text-xl">
                                    ☷
                                </span>
                            </div>

                            <h2 className="font-serif text-[15px] font-semibold text-[#102f35] mb-3">
                                Flexible Planning
                            </h2>

                            <p className="text-[10px] leading-5 text-gray-500">
                                Seamless multi-stop bespoke itinerary adjustments with
                                complimentary date changes and concierge route alterations
                                up to departure.
                            </p>

                        </div>


                        {/* CARD 3 */}
                        <div className="w-full min-h-[200px] bg-white rounded-md p-5 sm:p-6">

                            <div className="w-8 h-8 bg-[#f0eee8] rounded-md flex items-center justify-center mb-4">
                                <span className="text-[#d7b66b] text-xl">
                                    ▤
                                </span>
                            </div>

                            <h2 className="font-serif text-[15px] font-semibold text-[#102f35] mb-3">
                                Transparent Pricing
                            </h2>

                            <p className="text-[10px] leading-5 text-gray-500">
                                Unconditional clarity with all permits, conservation taxes,
                                private transfers, and gratuities itemized upfront without
                                surprise surcharges.
                            </p>

                        </div>


                        {/* CARD 4 */}
                        <div className="w-full min-h-[200px] bg-white rounded-md p-5 sm:p-6">

                            <div className="w-8 h-8 bg-[#f0eee8] rounded-md flex items-center justify-center mb-4">
                                <span className="text-[#d7b66b] text-xl">
                                    ♢
                                </span>
                            </div>

                            <h2 className="font-serif text-[15px] font-semibold text-[#102f35] mb-3">
                                Simple Booking
                            </h2>

                            <p className="text-[10px] leading-5 text-gray-500">
                                Direct coordination with a dedicated human voyage director
                                who retains sovereign oversight of your folio from arrival
                                to return.
                            </p>

                        </div>

                    </div>


                    {/* STATISTICS */}
                    <div className="bg-[#eeece6] rounded-md mt-8 sm:mt-12 px-4 sm:px-6 md:px-8 py-6 sm:py-7">

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-y-0 text-center">

                            {/* STAT 1 */}
                            <div>
                                <h2 className="font-serif text-[26px] sm:text-[30px] md:text-[32px] text-[#102f35]">
                                    99.4%
                                </h2>

                                <p className="text-[8px] sm:text-[9px] md:text-[10px] tracking-wide text-gray-600 uppercase">
                                    Unblemished Voyage Rate
                                </p>
                            </div>


                            {/* STAT 2 */}
                            <div>
                                <h2 className="font-serif text-[26px] sm:text-[30px] md:text-[32px] text-[#102f35]">
                                    48
                                </h2>

                                <p className="text-[8px] sm:text-[9px] md:text-[10px] tracking-wide text-gray-600 uppercase">
                                    Remote Conservancies
                                </p>
                            </div>


                            {/* STAT 3 */}
                            <div>
                                <h2 className="font-serif text-[26px] sm:text-[30px] md:text-[32px] text-[#102f35]">
                                    12,400+
                                </h2>

                                <p className="text-[8px] sm:text-[9px] md:text-[10px] tracking-wide text-gray-600 uppercase">
                                    Expeditions Honored
                                </p>
                            </div>


                            {/* STAT 4 */}
                            <div>
                                <h2 className="font-serif text-[26px] sm:text-[30px] md:text-[32px] text-[#102f35]">
                                    24 / 7
                                </h2>

                                <p className="text-[8px] sm:text-[9px] md:text-[10px] tracking-wide text-gray-600 uppercase">
                                    Dedicated Concierge
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================
                BESPOKE ARCHITECT
            ========================== */}
            <section className="w-[90%] md:w-[85%] lg:w-[80%] max-w-[1320px] mx-auto py-10 sm:py-12 md:py-16">

                <div className="max-w-[1100px] mx-auto px-0 sm:px-5">

                    {/* BANNER */}
                    <div className="relative min-h-[420px] sm:min-h-[350px] md:h-[285px] rounded-xl overflow-hidden bg-[#06252b]">

                        {/* BACKGROUND IMAGE */}
                        <img
                            src={assets.Mountback}
                            alt="Mountain landscape"
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* DARK OVERLAY */}
                        <div className="absolute inset-0 bg-[#001f26]/70"></div>


                        {/* CONTENT */}
                        <div className="relative z-10 min-h-[420px] sm:min-h-[350px] md:h-full flex items-center">

                            <div className="w-full px-5 sm:px-8 md:px-10 lg:px-14 py-8 md:py-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-7 md:gap-10">

                                {/* LEFT CONTENT */}
                                <div className="max-w-[600px]">

                                    <p className="text-[9px] sm:text-[10px] tracking-[1.5px] sm:tracking-[2px] text-[#d7b66b] font-medium mb-2 sm:mb-3">
                                        BESPOKE ARCHITECT
                                    </p>

                                    <h1 className="font-serif text-[32px] sm:text-[36px] md:text-[42px] leading-[1.05] text-white font-semibold">
                                        Your trip. Your way.
                                    </h1>

                                    <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-5 sm:leading-6 text-[#b9c5c7] mt-3 sm:mt-4 max-w-[570px]">
                                        Build a bespoke journey around your dream destination,
                                        pacing, and hand-selected experiences with the guidance
                                        of our master trip planners.
                                    </p>


                                    {/* FEATURES */}
                                    <div className="flex flex-col sm:flex-row sm:flex-wrap items-start gap-2 sm:gap-x-5 sm:gap-y-2 mt-4">

                                        <p className="text-[9px] sm:text-[10px] text-[#b9c5c7]">
                                            <span className="text-[#d7b66b]">✓</span>
                                            {" "}Custom Pacing
                                        </p>

                                        <p className="text-[9px] sm:text-[10px] text-[#b9c5c7]">
                                            <span className="text-[#d7b66b]">✓</span>
                                            {" "}Curated Boutique Stays
                                        </p>

                                        <p className="text-[9px] sm:text-[10px] text-[#b9c5c7]">
                                            <span className="text-[#d7b66b]">✓</span>
                                            {" "}Private Guides
                                        </p>

                                    </div>

                                </div>


                                {/* BUTTON */}
                                <div className="shrink-0 w-full md:w-auto">

                                    <button
                                        className="w-full md:w-auto bg-[#f5d58f] text-[#17363d] px-8 sm:px-10 py-3 sm:py-3.5 rounded-md text-[10px] sm:text-[11px] font-semibold tracking-wide hover:bg-[#ffe1a5] transition"
                                    >
                                        BUILD MY TRIP
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    );
};

export default HomeSection
