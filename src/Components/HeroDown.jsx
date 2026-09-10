import React from 'react'
import { assets } from '../assets/assets'

const HeroDown = () => {

  const categories = [
    { icon: assets.relax_icon, title: 'Relax', subtitle: 'Coastal Silence' },
    { icon: assets.adventure_icon, title: 'Adventure', subtitle: 'High Passes' },
    { icon: assets.heart_icon, title: 'Romance', subtitle: 'Secluded Villas' },
    { icon: assets.house_icon, title: 'Family', subtitle: 'Private Estates' },
    { icon: assets.wellness_icon, title: 'Wellness', subtitle: 'Ayurveda & Zen' },
    { icon: assets.cultural_icon, title: 'Cultural', subtitle: 'Heritage Rites' },
  ]

  return (
    <section className="w-[90%] md:w-[85%] lg:w-[80%] max-w-[1320px] mx-auto bg-[#F6F3ED]">

      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-12 md:py-16">

        {/* Top Content */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-7 sm:mb-8">

          <div>
            <p className="text-[9px] sm:text-[10px] md:text-[11px] tracking-[1.5px] sm:tracking-[2px] font-medium text-[#d7b66b] mb-2 sm:mb-3">
              AESTHETIC ALIGNMENT
            </p>

            <h2 className="font-serif text-[32px] sm:text-[38px] md:text-[46px] leading-[1.05] text-[#102f35]">
              Explore by Travel Mood
            </h2>
          </div>

          <div className="max-w-[300px]">
            <p className="text-[10px] sm:text-xs leading-5 text-gray-500">
              Curated micro-cadences matching your psychic disposition
              and thirst for renewal.
            </p>
          </div>

        </div>


        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">

          {categories.map((category, index) => (

            <div
              key={index}
              className="
                min-h-[95px]
                sm:min-h-[100px]
                bg-white
                rounded-md
                flex
                flex-col
                items-center
                justify-center
                text-center
                border
                border-gray-100
                px-2
                py-3
                hover:-translate-y-1
                hover:shadow-md
                transition-all
                duration-300
                cursor-pointer
              "
            >

              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#F3F1EB] rounded-[10px] flex items-center justify-center mb-1.5 sm:mb-2">
                <img
                  src={category.icon}
                  alt={category.title}
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain"
                />
              </div>

              <h3 className="font-serif text-[11px] sm:text-[12px] text-[#142B32]">
                {category.title}
              </h3>

              <p className="text-[8px] sm:text-[9px] text-gray-500 mt-0.5 sm:mt-1">
                {category.subtitle}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default HeroDown
