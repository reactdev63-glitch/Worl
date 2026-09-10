import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useNavigate } from "react-router-dom";

const Destination = () => {

  const { packages } = useContext(ShopContext);

  const [activeRegion, setActiveRegion] = useState("ALL");

  const navigate =  useNavigate();

  const regionMap = {
    Kashmir: "ASIA",
    "Amalfi Coast": "EUROPE",
    Bali: "ASIA",
    "Swiss Alps": "EUROPE",
    Goa: "ASIA",
    Kerala: "ASIA",
    Kyoto: "ASIA",
    "Zanskar & Ladakh": "ASIA",
    Andaman: "ASIA",
    Atacama: "AMERICAS",
    Serengeti: "AFRICA",
    Norway: "EUROPE",
  };

  const regions = [
    "ALL",
    "ASIA",
    "EUROPE",
    "AFRICA",
    "AMERICAS",
  ];

  const filteredPackages =
    activeRegion === "ALL"
      ? packages
      : packages.filter(
          (item) => regionMap[item.destination] === activeRegion
        );

  return (
    <div className="bg-[#f7f5ef] w-[80%] max-w-[1320px] mx-auto">

      <section>

        <div className="max-w-[750px] mx-auto text-center pt-14 pb-20">

          <p className="text-[9px] tracking-[2px] text-[#b89550] font-medium mb-4">
            EXPLORE THE WORLD
          </p>

          <h1 className="font-serif text-[48px] leading-[1.05] text-[#102f35]">
            Destinations
          </h1>

          <p className="text-[13px] leading-6 text-gray-500 mt-4">
            Discover the remarkable places where our journeys begin —
            from Himalayan valleys and Mediterranean shores to tropical
            islands and wild landscapes.
          </p>

          <button className="text-[8px] tracking-[2px] text-[#102f35] mt-7">
            EXPLORE ALL ↓
          </button>

        </div>

      </section>


      {/* DESTINATIONS */}      
      <section className="w-[94%] max-w-[1320px] mx-auto pb-20">

        {/* Heading + Filter */}
        <div className="flex items-end justify-between mb-7">

          <div>

            <p className="text-[9px] tracking-[2px] text-[#b89550] font-medium mb-2">
              WHERE WE GO
            </p>

            <h2 className="font-serif text-[26px] leading-none text-[#102f35]">
              Choose Your Destination
            </h2>

            <p className="text-[9px] text-gray-500 mt-2">
              Find a place that inspires you and discover the journeys
              available there.
            </p>

          </div>


          {/* FILTER */}

          <div className="flex items-center gap-7">

            {regions.map((region) => (

              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`text-[8px] tracking-[1px] pb-2 transition relative ${
                  activeRegion === region
                    ? "text-[#102f35]"
                    : "text-gray-500 hover:text-[#102f35] cursor-pointer"
                }`}
              >


                {region}

                {activeRegion === region && (
                  <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-[#d7b66b]" />
                )}

              </button>

            ))}

          </div>

        </div>



        {/* DESTINATION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">

          {filteredPackages.map((item) => (

            <div
              key={item.id}
              className="group cursor-pointer"
            >

              {/* IMAGE */}

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.destination}
                  className="w-full h-[230px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

              </div>


              {/* CONTENT */}

              <div className="pt-4">

                {/* CATEGORY */}

                <p className="text-[8px] tracking-[1px] text-[#102f35] uppercase">
                  {item.destination} · {regionMap[item.destination]}
                </p>


                {/* DESTINATION NAME */}

                <h3 className="font-serif text-[20px] text-[#102f35] mt-2">
                  {item.destination}
                </h3>


                {/* DESCRIPTION */}

                <p className="text-[10px] leading-5 text-gray-500 mt-2 max-w-[330px]">
                  {item.description}
                </p>


                {/* BOTTOM */}

                <div className="flex items-center justify-between border-t border-[#e3ded4] mt-4 pt-3">

                  <span className="text-[8px] tracking-[1px] text-gray-500">
                    {item.details?.gallery?.length || 1} JOURNEYS
                  </span>

                  <button onClick={() => navigate('/explore')} className="text-[8px] tracking-[1.5px] text-[#102f35] group-hover:text-[#b89550] transition cursor-pointer
                  
                  ">
                    EXPLORE →
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
};

export default Destination;