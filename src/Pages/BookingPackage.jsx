import React, { useContext, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useNavigate, useParams } from 'react-router-dom'

const BookingPackage = () => {

  const { packages } = useContext(ShopContext)
  const { id } = useParams()
  const navigate = useNavigate()

  const pkg = packages.find((item) => item.id === Number(id))

  const [guests, setGuests] = useState(2)

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [travelDate, setTravelDate] = useState('')
  const [specialRequest, setSpecialRequest] = useState('')

  // If package doesn't exist
  if (!pkg) {
    return (
      <div className="w-[90%] md:w-[85%] lg:w-[80%] max-w-[1320px] mx-auto py-16 sm:py-20 text-center">

        <p className="text-[10px] sm:text-[11px] tracking-[2px] text-[#d7b66b]">
          THE EXPEDITION HOUSE
        </p>

        <h1 className="font-serif text-[32px] sm:text-[40px] text-[#102f35] mt-3">
          Journey not found
        </h1>

        <button
          onClick={() => navigate('/explore')}
          className="mt-7 bg-[#17363d] text-white px-6 py-3 text-[10px] sm:text-[11px] tracking-[1.5px]"
        >
          BACK TO PACKAGES
        </button>

      </div>
    )
  }

  // Calculate total price
  const total = pkg.priceValue * guests

  // Submit booking
  const handleBooking = (e) => {

    e.preventDefault()

    if (!fullName || !email || !phone || !travelDate) {
      alert('Please complete all required fields.')
      return
    }

    alert('Booking confirmed!')
  }

  return (
    <div>

      {/* BOOKING START */}
      <section className="w-[90%] md:w-[85%] lg:w-[80%] max-w-[1320px] mx-auto bg-[#f7f5ef]">

        {/* MAIN CONTAINER */}
        <div className="w-[92%] sm:w-[90%] max-w-[1320px] mx-auto py-10 sm:py-14 md:py-16">

          {/* TOP CONTENT */}
          <div className="flex flex-col mb-7 sm:mb-8">

            <p className="text-[10px] sm:text-[11px] tracking-[2px] font-medium text-[#d7b66b] mb-3">
              THE EXPEDITION HOUSE
            </p>

            <h1 className="font-serif text-[34px] sm:text-[40px] md:text-[46px] leading-[1.05] text-[#102f35]">
              Book Your Journey
            </h1>

            <p className="mt-2 max-w-[650px] text-[13px] sm:text-[15px] leading-6 text-gray-500">
              Complete your details to reserve your journey across {pkg.destination}
            </p>

          </div>


          {/* SELECTED PACKAGE */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 bg-white border border-[#eeeae2] rounded-sm p-4 sm:p-5">

            {/* LEFT SIDE */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">

              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full sm:w-[122px] h-[180px] sm:h-[92px] object-cover rounded-sm"
              />

              <div className="w-full">

                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">

                  <span className="bg-[#f5f3ee] text-gray-600 text-[9px] sm:text-[10px] tracking-[1px] px-2 py-1 rounded-sm">
                    HIGH ALTITUDE TREK
                  </span>

                  <span className="text-[10px] text-[#d7b66b]">
                    ★ {pkg.rating}
                  </span>

                </div>

                <h2 className="font-serif text-[22px] sm:text-[25px] leading-tight text-[#102f35]">
                  {pkg.title}
                </h2>

                <p className="text-[11px] sm:text-[12px] text-gray-500 mt-1 leading-5">
                  {pkg.destination}
                  <span className="mx-2">•</span>
                  {pkg.duration}
                  <span className="mx-2">•</span>
                  74°52'E 34°18'N
                </p>

              </div>

            </div>


            {/* PRICE */}
            <div className="text-left lg:text-right border-t lg:border-t-0 pt-4 lg:pt-0 border-[#eeeae2]">

              <p className="text-[9px] sm:text-[10px] tracking-[1.5px] text-[#102f35]">
                STARTING TARIFF
              </p>

              <p className="font-serif text-[22px] sm:text-[24px] text-[#102f35] mt-1">

                ₹{pkg.priceValue?.toLocaleString('en-IN')}

                <span className="text-[11px] sm:text-[12px] font-sans text-gray-500">
                  {' '}/person
                </span>

              </p>

            </div>

          </div>


          {/* GRID COLUMN AREA */}
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 lg:gap-8 mt-7 sm:mt-10"
          >

            {/* LEFT SIDE - TRAVELER DETAILS */}
            <div className="bg-white border border-[#eeeae2] p-5 sm:p-6 md:p-8">

              {/* TITLE */}
              <p className="text-[9px] sm:text-[10px] tracking-[2px] text-[#d7b66b]">
                GUEST REGISTRY
              </p>

              <h2 className="font-serif text-[26px] sm:text-[30px] text-[#102f35] mt-2">
                Traveler Details
              </h2>

              <p className="text-[11px] sm:text-[12px] leading-5 text-gray-500 mt-2 max-w-[600px]">
                Please provide the lead expedition member details.
                Passports and permits will be coordinated directly by your concierge.
              </p>


              {/* FORM */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-6 sm:gap-y-7 mt-7 sm:mt-8">


                {/* FULL NAME */}
                <div className="md:col-span-2">

                  <label className="block text-[9px] font-medium tracking-[1px] text-[#102f35]">
                    FULL NAME
                  </label>

                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full mt-3 border-b border-[#ddd9d1] bg-transparent px-2 sm:px-3 py-3 text-[12px] sm:text-[13px] outline-none text-[#102f35] placeholder:text-gray-400"
                  />

                </div>


                {/* EMAIL */}
                <div>

                  <label className="block text-[9px] font-medium tracking-[1px] text-[#102f35]">
                    EMAIL ADDRESS
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full mt-3 border-b border-[#ddd9d1] bg-transparent px-2 sm:px-3 py-3 text-[12px] sm:text-[13px] outline-none text-[#102f35] placeholder:text-gray-400"
                  />

                </div>


                {/* PHONE */}
                <div>

                  <label className="block text-[9px] font-medium tracking-[1px] text-[#102f35]">
                    PHONE NUMBER
                  </label>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full mt-3 border-b border-[#ddd9d1] bg-transparent px-2 sm:px-3 py-3 text-[12px] sm:text-[13px] outline-none text-[#102f35] placeholder:text-gray-400"
                  />

                </div>


                {/* NUMBER OF GUESTS */}
                <div>

                  <label className="block text-[9px] font-medium tracking-[1px] text-[#102f35]">
                    NUMBER OF GUESTS
                  </label>

                  <div className="flex items-center justify-between gap-3 bg-[#f5f3ee] mt-3 p-2 rounded-sm">

                    <span className="text-[11px] sm:text-[13px] text-[#102f35]">
                      Expedition Party
                    </span>

                    <div className="flex items-center gap-2">

                      <button
                        type="button"
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="w-8 h-8 bg-white text-[#17363d] rounded-sm hover:bg-[#ebe9e3] transition"
                      >
                        −
                      </button>

                      <span className="w-6 text-center text-[12px] sm:text-[13px]">
                        {guests}
                      </span>

                      <button
                        type="button"
                        onClick={() => setGuests(Math.min(8, guests + 1))}
                        className="w-8 h-8 bg-white text-[#17363d] rounded-sm hover:bg-[#ebe9e3] transition"
                      >
                        +
                      </button>

                    </div>

                  </div>

                  <p className="text-[9px] text-gray-500 mt-2">
                    Minimum guests: 1 · Maximum guests: 8
                  </p>

                </div>


                {/* TRAVEL DATE */}
                <div>

                  <label className="block text-[9px] font-medium tracking-[1px] text-[#102f35]">
                    TRAVEL DATE
                  </label>

                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full mt-3 border-b border-[#ddd9d1] bg-transparent px-2 sm:px-3 py-3 text-[12px] sm:text-[13px] outline-none text-[#102f35]"
                  />

                  <p className="text-[9px] text-gray-500 mt-2">
                    Optimum glacial crossing window
                  </p>

                </div>


                {/* SPECIAL REQUEST */}
                <div className="md:col-span-2">

                  <label className="block text-[9px] font-medium tracking-[1px] text-[#102f35]">
                    SPECIAL REQUEST

                    <span className="text-gray-400">
                      {' '}(optional)
                    </span>

                  </label>

                  <textarea
                    rows="3"
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                    placeholder="Any special requests?"
                    className="w-full mt-3 border-b border-[#ddd9d1] bg-transparent px-2 sm:px-3 py-3 text-[12px] sm:text-[13px] leading-6 outline-none resize-none text-[#102f35] placeholder:text-gray-400"
                  />

                  <p className="text-[9px] text-gray-500 mt-2">
                    Equipage, mountain guides, and personal chefs adapt to all dietary conditions.
                  </p>

                </div>


                {/* CONFIRM BUTTON */}
                <div className="md:col-span-2 pt-1 sm:pt-2">

                  <button
                    type="submit"
                    className="w-full bg-[#17363d] text-white py-3.5 sm:py-4 text-[9px] sm:text-[10px] font-medium tracking-[2px] hover:bg-[#102f35] transition"
                  >
                    CONFIRM BOOKING

                    <span className="ml-2 sm:ml-3 text-lg">
                      →
                    </span>

                  </button>

                </div>

              </div>

            </div>


            {/* RIGHT SECTION */}
            <div className="bg-white border border-[#eeeae2] p-5 sm:p-6 md:p-7 h-fit lg:sticky lg:top-8">

              {/* JOURNEY HEADER */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                <p className="text-[9px] sm:text-[10px] tracking-[2px] text-[#d7b66b]">
                  ◎ YOUR JOURNEY
                </p>

                <span className="w-fit bg-[#edf5f6] text-[#17363d] text-[9px] px-2 py-1 rounded-sm">
                  ALPINE ROUTE
                </span>

              </div>


              {/* PACKAGE NAME */}
              <h2 className="font-serif text-[25px] sm:text-[29px] leading-tight text-[#102f35] mt-5 sm:mt-6">
                {pkg.title}
              </h2>

              <p className="text-[10px] sm:text-[11px] text-gray-500 mt-1">
                {pkg.destination} · {pkg.duration}
              </p>


              {/* PRICE DETAILS */}
              <div className="bg-[#f5f3ee] p-4 sm:p-5 mt-5">

                {/* RATE */}
                <div className="flex justify-between gap-4 text-[11px] sm:text-[12px] text-gray-600">

                  <span>
                    Rate
                  </span>

                  <span className="text-[#102f35] text-right">
                    ₹{pkg.priceValue?.toLocaleString('en-IN')} / person
                  </span>

                </div>


                {/* GUESTS */}
                <div className="flex justify-between gap-4 text-[11px] sm:text-[12px] text-gray-600 mt-4">

                  <span>
                    Selected Travelers
                  </span>

                  <span className="text-[#102f35] text-right">
                    {guests} Guests
                  </span>

                </div>


                {/* DURATION */}
                <div className="flex justify-between gap-4 text-[11px] sm:text-[12px] text-gray-600 mt-4">

                  <span>
                    Expedition Duration
                  </span>

                  <span className="text-[#102f35] text-right">
                    {pkg.duration}
                  </span>

                </div>


                {/* TOTAL */}
                <div className="border-t border-[#ddd9d1] mt-4 pt-5 flex justify-between items-end gap-4">

                  <span className="font-serif text-[17px] sm:text-[18px] text-[#102f35]">
                    Total
                  </span>

                  <span className="font-serif text-[24px] sm:text-[27px] text-[#102f35]">
                    ₹{total.toLocaleString('en-IN')}
                  </span>

                </div>

                <p className="text-[8px] text-gray-500 text-right mt-1">
                  TAXES & SANCTUARY LEVIES INCLUDED
                </p>

              </div>


              {/* DESCRIPTION */}
              <p className="text-[10px] sm:text-[11px] leading-5 text-gray-500 mt-5">
                Includes all luxury high-altitude expedition gear,
                four-season alpine dome shelters, private camp chef,
                permits, wildlife escort, and senior expedition mountaineer.
              </p>


              {/* BENEFITS */}
              <div className="bg-[#f5f3ee] p-4 mt-5 space-y-3">

                <p className="text-[9px] sm:text-[10px] leading-4 text-[#17363d]">
                  ◉ &nbsp; Complimentary Cancellation up to 30 Days Prior
                </p>

                <p className="text-[9px] sm:text-[10px] leading-4 text-[#17363d]">
                  ◉ &nbsp; Dedicated 24/7 Remote Expedition Concierge
                </p>

                <p className="text-[9px] sm:text-[10px] leading-4 text-[#17363d]">
                  ◉ &nbsp; Comprehensive High-Altitude Medical & Evac Coverage
                </p>

              </div>

            </div>

          </form>

        </div>

      </section>

    </div>
  )
}

export default BookingPackage