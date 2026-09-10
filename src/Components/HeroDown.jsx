import React from 'react'
import { assets } from '../assets/assets'

const HeroDown = () => {

  const categories = [
    {
      icon: assets.relax_icon,
      title: 'Relax',
      subtitle: 'Coastal Silence',
    },
    {
      icon: assets.adventure_icon,
      title: 'Adventure',
      subtitle: 'High Passes',
    },
    {
      icon: assets.heart_icon,
      title: 'Romance',
      subtitle: 'Secluded Villas',
    },
    {
      icon: assets.house_icon,
      title: 'Family',
      subtitle: 'Private Estates',
    },
    {
      icon: assets.wellness_icon,
      title: 'Wellness',
      subtitle: 'Ayurveda & Zen',
    },
    {
      icon: assets.cultural_icon,
      title: 'Cultural',
      subtitle: 'Heritage Rites',
    },
  ]

  return (
    <section className="w-[80%] max-w-[1320px] mx-auto  bg-[#F6F3ED]">

      <div className="w-[90%] max-w-[1320px] mx-auto py-16">

        {/* Top Content */}
        <div className="flex items-end justify-between mb-8">

          {/* Left */}
          <div>
            <p className="text-[11px] tracking-[2px] font-medium text-[#d7b66b] mb-3">
              AESTHETIC ALIGNMENT
            </p>

            <h2 className="font-serif text-[46px] leading-[1.05] text-[#102f35]">
              Explore by Travel Mood
            </h2>
          </div>

          {/* Right */}
          <div className="hidden sm:block max-w-[300px]">
            <p className="text-[10px] sm:text-xs leading-5 text-gray-500">
              Curated micro-cadences matching your psychic disposition
              and thirst for renewal.
            </p>
          </div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">

          {categories.map((category, index) => (

            <div
              key={index}
              className="h-[95px] bg-white rounded-md flex flex-col items-center justify-center text-center border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer"
            >

              <div className="w-9 h-9 bg-[#F3F1EB] rounded-[10px] flex items-center justify-center mb-2">
                <img
                  src={category.icon}
                  alt={category.title}
                  className="w-4 h-4 object-contain"
                />
              </div>

              <h3 className="font-serif text-[12px] text-[#142B32]">
                {category.title}
              </h3>

              <p className="text-[9px] text-gray-500 mt-1">
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