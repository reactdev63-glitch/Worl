import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import ExploreItems from '../Components/ExploreItems'


const Explore = () => {

  const { travelMoods } = useContext(ShopContext)

  return (
    <div>

      {/*Explore by travel mode*/}
      <section className='w-[80%] max-w-[1320px] mx-auto'>

        {/*Main Container*/}
        <div className="w-[90%] max-w-[1320px] mx-auto py-16">

          {/*Top*/}
          <div className='flex items-end justify-between mb-9'>

            {/*Left */}
            <div className='max-w-[600px]'>
              <p className="text-[11px] tracking-[2px] font-medium text-[#d7b66b] mb-3">CARTOGRAPHIC TEMPERAMENTS</p>
              <h1 className="font-serif text-[46px] leading-[1.05] text-[#102f35]">Explore by Travel Mood</h1>
            </div>

            {/* Right */}
            <div className="hidden sm:block max-w-[300px]">
              <p className="text-[10px] sm:text-xs leading-5 text-gray-500">
                Curated journeys matching your instinct for renewal,adventure,intimacy and discover.
              </p>
            </div>
          </div>



          <div className="grid grid-cols-6 gap-3">

            {travelMoods.map((item) => (

              <div key={item.id}>

                <div className="relative h-[168px]">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-3 left-2">
                    <span className="bg-white/90 px-2 py-1 text-[11px] text-[#102f35]">
                      {item.number} // {item.category}
                    </span>
                  </div>

                  <p className="absolute bottom-2 left-3 text-[10px] text-white">
                    {item.latitude}
                  </p>

                </div>


                <div className="bg-[#f0eee8] p-3">

                  <h2 className="font-serif text-[18px] text-[#102f35]">
                    {item.title}
                  </h2>

                  <p className="text-[11px] leading-4 text-gray-500 mt-2">
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
      <ExploreItems />
    </div>

  )
}



export default Explore
