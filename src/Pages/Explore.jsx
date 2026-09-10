import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import ExploreItems from '../Components/ExploreItems'

const Explore = () => {

  const { travelMoods } = useContext(ShopContext)

  return (
    <div>

      {/* EXPLORE BY TRAVEL MOOD */}
      <section className="w-[90%] md:w-[85%] lg:w-[80%] max-w-[1320px] mx-auto">

        {/* MAIN CONTAINER */}
        <div className="w-full max-w-[1320px] mx-auto py-10 sm:py-12 md:py-16 px-2 sm:px-4">

          {/* TOP */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-7 sm:mb-9">

            {/* LEFT */}
            <div className="max-w-[600px]">

              <p className="text-[9px] sm:text-[11px] tracking-[2px] font-medium text-[#d7b66b] mb-3">
                CARTOGRAPHIC TEMPERAMENTS
              </p>

              <h1 className="font-serif text-[34px] sm:text-[40px] md:text-[46px] leading-[1.05] text-[#102f35]">
                Explore by Travel Mood
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


          {/* TRAVEL MOOD GRID */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-3">

            {travelMoods.map((item) => (

              <div
                key={item.id}
                className="group"
              >

                {/* IMAGE */}
                <div className="relative h-[220px] sm:h-[190px] md:h-[200px] lg:h-[168px] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />

                  {/* CATEGORY */}
                  <div className="absolute top-3 left-2">

                    <span className="bg-white/90 px-2 py-1 text-[9px] sm:text-[10px] lg:text-[11px] text-[#102f35]">
                      {item.number} // {item.category}
                    </span>

                  </div>

                  {/* LATITUDE */}
                  <p className="absolute bottom-2 left-3 text-[9px] sm:text-[10px] text-white">
                    {item.latitude}
                  </p>

                </div>


                {/* CONTENT */}
                <div className="bg-[#f0eee8] p-3 sm:p-4 lg:p-3">

                  <h2 className="font-serif text-[18px] text-[#102f35]">
                    {item.title}
                  </h2>

                  <p className="text-[10px] sm:text-[11px] leading-4 text-gray-500 mt-2">
                    {item.description}
                  </p>

                  <p className="text-[9px] text-[#8a6b28] mt-4">
                    {item.count} →
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* EXPLORE ITEMS */}
      <ExploreItems />

    </div>
  )
}

export default Explore