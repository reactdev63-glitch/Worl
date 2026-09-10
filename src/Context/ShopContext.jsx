import React, { createContext, useState } from "react";
import { assets } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {


    const travelMoods = [
        {
            id: 1,
            number: "01",
            category: "COASTS",
            image: assets.Coasts,
            latitude: "14° N LAT",
            title: "Coastal Silence",
            description: "Secluded shores and private coastal estates.",
            journeys: "14 JOURNEYS",
        },

        {
            id: 2,
            number: "02",
            category: "ALPINE",
            image: assets.Highpass,
            latitude: "34° N LAT",
            title: "High Passes",
            description: "Glacial valleys, mountain trails and remote camps.",
            journeys: "9 JOURNEYS",
        },

        {
            id: 3,
            number: "03",
            category: "ESTATES",
            image: assets.Secluded,
            latitude: "08° S LAT",
            title: "Secluded Villas",
            description: "Private residences and hidden sanctuaries.",
            journeys: "21 SANCTUARIES",
        },

        {
            id: 4,
            number: "04",
            category: "SOLITUDE",
            image: assets.Ayurveda,
            latitude: "09° N LAT",
            title: "Ayurveda & Zen",
            description: "Restorative retreats and quiet wellness journeys.",
            journeys: "11 RETREATS",
        },

        {
            id: 5,
            number: "05",
            category: "RELICS",
            image: assets.Heritage,
            latitude: "26° N LAT",
            title: "Heritage Rites",
            description: "Ancient cities, sacred routes and living cultural traditions.",
            journeys: "16 EXPEDITIONS",
        },

        {
            id: 6,
            number: "06",
            category: "UNCHARTED",
            image: assets.Wild,
            latitude: "33° N LAT",
            title: "Wild Frontiers",
            description: "Journeys beyond conventional itineraries.",
            journeys: "8 FIELD FOLIOS",
        },
    ];


   
    const packages = [

  // =========================================================
  // 01 - KASHMIR
  // =========================================================

  {
    id: 1,
    slug: "kashmir-great-lakes-trek-houseboat",
    image: assets.Kashmir,
    duration: "7 Days / 6 Nights",
    rating: 4.9,
    destination: "Kashmir",
    mood: "Alpine",

    tags: [
      "Houseboat Suite",
      "Guide",
      "Pony Expedition"
    ],

    title: "Kashmir Great Lakes Trek & Houseboat",

    description:
      "Traverse seven solitary glacial basins before retiring to hand-carved cedar houseboats on Nagin Lake.",

    price: "₹48,000",
    priceValue: 48000,
    priceType: "guest",

    details: {
      sectionLabel: "SECTION 01 // FIELD NARRATIVE",
      archive: "ARCHIVE FOLIO • PLATE 18",
      register: "REGISTER #401",
      ledger: "MONOGRAPH LEDGER",
      folioTitle: "Kashmir Great Lakes Folio",

      story:
        "High above the ancient deodar timberline of the Kashmir Valley rests an archipelago of seven solitary tarns, cradled in amphitheatres of pale gneiss and lingering snow bridges. This expedition bridges two contrasting realms of Himalayan solitude: four days traversing glacial passes with pack-mules and mountaineering naturalists, followed by restorative sanctuary aboard a private handcrafted cedar houseboat moored on the tranquil waters of Nagin Lake.",

      storySecond:
        "Along the trail, travelers encounter solitary Gujjar shepherds grazing nomadic herds on wildflower carpets, camp beneath crystalline starfields where light pollution does not exist, and drink water scooped directly from virgin glacial torrents. The descent culminates in the timeless ritual of the houseboat veranda—where fragrant saffron-infused Kahwa is served from antique beaten-copper samovars and Kashmiri Wazwan suppers are slow-braised over wild charcoal embers.",

      optimalSeason: {
        title: "OPTIMAL SEASON",
        value: "June — September",
        description: "Tarn waters thawed & meadows flowering"
      },

      acclimatization: {
        title: "ACCLIMATIZATION",
        value: "2 Full Days",
        description: "Conducted at 5,200 ft prior to ascent"
      },

      physicalCadence: {
        title: "PHYSICAL CADENCE",
        value: "Moderate Alpine",
        description: "Daily ascents of 4–6 hrs with light daypacks"
      },

      seasonality: "June — September",
      style: "Alpine Trekking · Liminal Sanctuary",
      lodging: "1 Houseboat Suite + 1 Alpine Tent",
      expeditionWindow: "12 Jul 2025 — 18 Jul 2025 (Peak Bloom)",
      travelers: "Registered Guests",
      defaultGuests: 2,
      maxGuests: 8,

      included: [
        "Private expedition guide & camp crew included",
        "Hand-carved deodar houseboat suite reserved",
        "Airport private chauffeur transfers guaranteed",
        "Curated multi-course meals & samovar rituals"
      ],

      gallery: [
        {
          image: assets.Kashmir,
          label: "PLATE 01 // NAGIN DAWN",
          caption:
            "Private shikara transit to the moored deodar sanctuary at dawn."
        },
        {
          image: assets.Kashmir,
          label: "PLATE 02 // VISHANSAR BASIN",
          caption:
            "Twin glacial tarns reflecting the massif of Mount Vishansar."
        }
      ],

      footerNote:
        "Expedition strictly capped at 8 travelers per convoy to safeguard high-altitude ecology."
    }
  },


  // =========================================================
  // 02 - AMALFI COAST
  // =========================================================

  {
    id: 2,
    slug: "amalfi-coast-capri-yacht-charter",
    image: assets.Amalfi,
    duration: "8 Days / 7 Nights",
    rating: 4.9,
    destination: "Amalfi Coast",
    mood: "Coasts",

    tags: [
      "Private Yacht",
      "Capri Sea Cave",
      "Sommelier"
    ],

    title: "Amalfi Coast & Capri Yacht Charter",

    description:
      "Private coastal navigation, cliffside Michelin enotecas, and quiet Mediterranean coves beyond the ordinary.",

    price: "₹1,85,000",
    priceValue: 185000,
    priceType: "guest",

    details: {
      sectionLabel: "SECTION 01 // COASTAL NARRATIVE",
      archive: "ARCHIVE FOLIO • PLATE 24",
      register: "REGISTER #402",
      ledger: "MONOGRAPH LEDGER",
      folioTitle: "Amalfi Coast & Capri Folio",

      story:
        "Follow the limestone edge of southern Italy aboard a private yacht, moving slowly between pastel cliffside villages, hidden coves and the deep blue waters surrounding Capri. Each day is shaped around privacy, exceptional dining and unhurried Mediterranean discovery.",

      storySecond:
        "From secluded swimming passages to candlelit terraces overlooking the Tyrrhenian Sea, the journey combines private navigation with the character of historic coastal estates and intimate culinary experiences.",

      optimalSeason: {
        title: "OPTIMAL SEASON",
        value: "May — October",
        description: "Warm seas & long Mediterranean evenings"
      },

      acclimatization: {
        title: "PACE",
        value: "Leisurely",
        description: "Flexible coastal days with private transfers"
      },

      physicalCadence: {
        title: "PHYSICAL CADENCE",
        value: "Easy Coastal",
        description: "Light walking with optional sea activities"
      },

      seasonality: "May — October",
      style: "Mediterranean · Private Yacht",
      lodging: "Luxury Hotel + Private Yacht",
      expeditionWindow: "Flexible Seasonal Departure",
      travelers: "Registered Guests",
      defaultGuests: 2,
      maxGuests: 8,

      included: [
        "Private yacht and professional crew",
        "Curated coastal dining experiences",
        "Private Capri excursion",
        "Airport and marina transfers"
      ],

      gallery: [
        {
          image: assets.Amalfi,
          label: "PLATE 01 // AMALFI HORIZON",
          caption:
            "Private yacht passage beneath the dramatic cliffs of the Amalfi Coast."
        },
        {
          image: assets.Amalfi,
          label: "PLATE 02 // CAPRI BLUE",
          caption:
            "A quiet Mediterranean cove reached by private sea passage."
        }
      ],

      footerNote:
        "Private navigation is planned around sea conditions and preferred coastal experiences."
    }
  },


  // =========================================================
  // 03 - BALI
  // =========================================================

  {
    id: 3,
    slug: "bali-sacred-valleys-uluwatu-cliff-villa",
    image: assets.Bali,
    duration: "6 Days / 5 Nights",
    rating: 4.9,
    destination: "Bali",
    mood: "Tropical",

    tags: [
      "Cliff Villa",
      "Private Butler",
      "Temple Passage"
    ],

    title: "Bali Sacred Valleys & Uluwatu Cliff Villa",

    description:
      "A private passage through sacred temples, emerald valleys and a secluded cliffside sanctuary above the Indian Ocean.",

    price: "₹62,000",
    priceValue: 62000,
    priceType: "guest",

    details: {
      sectionLabel: "SECTION 01 // ISLAND NARRATIVE",
      archive: "ARCHIVE FOLIO • PLATE 31",
      register: "REGISTER #403",
      ledger: "MONOGRAPH LEDGER",
      folioTitle: "Bali Sacred Valleys Folio",

      story:
        "Move beyond the familiar shores of Bali into a quieter landscape of emerald rice terraces, volcanic valleys and ancient temple corridors. This private journey follows the island's spiritual interior before descending toward the dramatic cliffs of the southern coast.",

      storySecond:
        "Mornings begin among mist-covered terraces and ceremonial villages, with private access to ancestral temples and intimate encounters with local artisans. Later, the journey shifts toward the ocean, where a cliffside villa becomes a private refuge for sunset rituals, Balinese cuisine and evenings accompanied only by the sound of the Indian Ocean.",

      optimalSeason: {
        title: "OPTIMAL SEASON",
        value: "April — October",
        description: "Dry season skies & lush valley landscapes"
      },

      acclimatization: {
        title: "PACE",
        value: "Leisurely",
        description: "Slow cultural exploration with private transfers"
      },

      physicalCadence: {
        title: "PHYSICAL CADENCE",
        value: "Easy Tropical",
        description: "Light walking through temples, terraces and villages"
      },

      seasonality: "April — October",
      style: "Tropical Sanctuary · Cultural Immersion",
      lodging: "Cliff Villa + Private Valley Retreat",
      expeditionWindow: "Flexible Seasonal Departure",
      travelers: "Registered Guests",
      defaultGuests: 2,
      maxGuests: 8,

      included: [
        "Private Balinese cultural guide",
        "Cliffside villa accommodation",
        "Temple and artisan experiences",
        "Private airport and villa transfers"
      ],

      gallery: [
        {
          image: assets.Bali,
          label: "PLATE 01 // SACRED VALLEY",
          caption:
            "Morning mist settling across the emerald terraces of central Bali."
        },
        {
          image: assets.Bali,
          label: "PLATE 02 // CLIFF SANCTUARY",
          caption:
            "Private coastal retreat overlooking the Indian Ocean at dusk."
        }
      ],

      footerNote:
        "Journey intentionally limited to eight travelers to preserve privacy and meaningful local encounters."
    }
  },


  // =========================================================
  // 04 - SWISS ALPS
  // =========================================================

  {
    id: 4,
    slug: "swiss-alps-glacier-express",
    image: assets.Swisspack,
    duration: "9 Days / 8 Nights",
    rating: 4.9,
    destination: "Swiss Alps",
    mood: "Mountain",

    tags: [
      "Excellence Class",
      "Panoramic Rail",
      "Grand Hotel"
    ],

    title: "Swiss Alps Glacier Express",

    description:
      "Panoramic carriage crossings through the Rhine Gorge and Landwasser Viaduct before retreating to refined alpine hotels.",

    price: "₹2,10,000",
    priceValue: 210000,
    priceType: "guest",

    details: {
      sectionLabel: "SECTION 01 // ALPINE NARRATIVE",
      archive: "ARCHIVE FOLIO • PLATE 36",
      register: "REGISTER #404",
      ledger: "MONOGRAPH LEDGER",
      folioTitle: "Swiss Alps Glacier Express Folio",

      story:
        "Cross the Swiss Alps aboard one of Europe's most celebrated mountain railways, moving through dramatic valleys, stone villages and high alpine passes. The journey combines the romance of slow rail travel with private mountain retreats, allowing travelers to experience Switzerland at a measured and deeply scenic pace.",

      storySecond:
        "From elegant lakeside mornings to panoramic railway crossings, each chapter reveals another expression of the Alps. Private guides lead short walks through alpine meadows while evenings unfold in refined mountain hotels overlooking glaciers, forests and distant peaks.",

      optimalSeason: {
        title: "OPTIMAL SEASON",
        value: "June — September",
        description: "Clear alpine passes & long summer days"
      },

      acclimatization: {
        title: "PACE",
        value: "Relaxed",
        description: "Scenic rail journeys with optional alpine walks"
      },

      physicalCadence: {
        title: "PHYSICAL CADENCE",
        value: "Gentle Alpine",
        description: "Short walks with flexible mountain excursions"
      },

      seasonality: "June — September",
      style: "Alpine Rail · Mountain Grand Tour",
      lodging: "Luxury Mountain Hotels",
      expeditionWindow: "Summer Alpine Departure",
      travelers: "Registered Guests",
      defaultGuests: 2,
      maxGuests: 8,

      included: [
        "Glacier Express panoramic rail reservations",
        "Luxury alpine hotel accommodation",
        "Private mountain guide",
        "Private station transfers"
      ],

      gallery: [
        {
          image: assets.Swiss,
          label: "PLATE 01 // ALPINE TRANSIT",
          caption:
            "The Glacier Express crossing the high mountain valleys of Switzerland."
        },
        {
          image: assets.Swiss,
          label: "PLATE 02 // MOUNTAIN VILLAGE",
          caption:
            "A quiet alpine settlement beneath the surrounding glacier country."
        }
      ],

      footerNote:
        "Rail and mountain experiences are coordinated around seasonal alpine conditions."
    }
  },


  // =========================================================
  // 05 - GOA
  // =========================================================

  {
    id: 5,
    slug: "goa-coastal-escape-heritage-estates",
    image: assets.Goa,
    duration: "4 Days / 3 Nights",
    rating: 4.8,
    destination: "Goa",
    mood: "Heritage",

    tags: [
      "Oceanfront Suite",
      "Sunset Sailing",
      "Ayurveda"
    ],

    title: "Goa Coastal Escape & Heritage Estates",

    description:
      "Secluded mansion retreats, private coastal sailing and centuries-old heritage estates along India's western shoreline.",

    price: "₹18,999",
    priceValue: 18999,
    priceType: "guest",

    details: {
      sectionLabel: "SECTION 01 // COASTAL NARRATIVE",
      archive: "ARCHIVE FOLIO • PLATE 42",
      register: "REGISTER #405",
      ledger: "MONOGRAPH LEDGER",
      folioTitle: "Goa Coastal Escape Folio",

      story:
        "Discover a quieter side of Goa through a sequence of heritage estates, secluded beaches and slow coastal mornings. Away from the familiar resort circuit, this journey moves between Portuguese-influenced architecture, private gardens and stretches of shoreline where the Arabian Sea becomes the day's only horizon.",

      storySecond:
        "Private hosts introduce travelers to Goan culinary traditions, historic estates and local craft communities. Afternoons are reserved for the coast, while evenings unfold around intimate dinners in restored heritage homes surrounded by palms and tropical gardens.",

      optimalSeason: {
        title: "OPTIMAL SEASON",
        value: "November — March",
        description: "Dry coastal weather & comfortable evenings"
      },

      acclimatization: {
        title: "PACE",
        value: "Unhurried",
        description: "Flexible days built around beaches and heritage"
      },

      physicalCadence: {
        title: "PHYSICAL CADENCE",
        value: "Easy Coastal",
        description: "Light walking with optional cycling and beach activities"
      },

      seasonality: "November — March",
      style: "Coastal Heritage · Slow Travel",
      lodging: "Heritage Estate + Oceanfront Retreat",
      expeditionWindow: "Winter Coastal Escape",
      travelers: "Registered Guests",
      defaultGuests: 2,
      maxGuests: 8,

      included: [
        "Private heritage estate accommodation",
        "Curated Goan culinary experiences",
        "Private coastal excursions",
        "Airport and chauffeur transfers"
      ],

      gallery: [
        {
          image: assets.Goa,
          label: "PLATE 01 // HERITAGE ESTATE",
          caption:
            "A restored Goan villa surrounded by tropical gardens."
        },
        {
          image: assets.Goa,
          label: "PLATE 02 // ARABIAN COAST",
          caption:
            "A secluded stretch of coastline reserved for a quiet afternoon."
        }
      ],

      footerNote:
        "Private estates and coastal experiences are selected to preserve the journey's intimate character."
    }
  },


  // =========================================================
  // 06 - KERALA
  // =========================================================

  {
    id: 6,
    slug: "kerala-backwater-spice-sanctuary",
    image: assets.Kerala,
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    destination: "Kerala",
    mood: "Serene",

    tags: [
      "Cedar Kettuvallam",
      "Ayurvedic Master",
      "Spice Forest"
    ],

    title: "Kerala Backwater & Spice Sanctuary",

    description:
      "Slow itineraries through Kerala's backwaters, spice plantations and forest sanctuaries with private culinary and wellness experiences.",

    price: "₹42,000",
    priceValue: 42000,
    priceType: "guest",

    details: {
      sectionLabel: "SECTION 01 // BACKWATER NARRATIVE",
      archive: "ARCHIVE FOLIO • PLATE 48",
      register: "REGISTER #406",
      ledger: "MONOGRAPH LEDGER",
      folioTitle: "Kerala Backwater & Spice Folio",

      story:
        "Travel slowly through Kerala's waterways, spice gardens and forested highlands, where the rhythm of the journey follows the movement of traditional boats and the changing scent of cardamom, pepper and cinnamon. This is a journey shaped around water, cuisine and intimate encounters with southern India.",

      storySecond:
        "Begin aboard a private houseboat through the quiet backwaters before ascending toward the Western Ghats. Here, plantation walks, traditional cooking and forest trails reveal another side of Kerala, ending each day at a secluded sanctuary surrounded by mist and spice gardens.",

      optimalSeason: {
        title: "OPTIMAL SEASON",
        value: "October — March",
        description: "Cooler weather & tranquil backwaters"
      },

      acclimatization: {
        title: "PACE",
        value: "Slow Living",
        description: "Boat journeys balanced with gentle plantation walks"
      },

      physicalCadence: {
        title: "PHYSICAL CADENCE",
        value: "Easy Moderate",
        description: "Light walking through plantations and villages"
      },

      seasonality: "October — March",
      style: "Backwaters · Spice Country",
      lodging: "Private Houseboat + Plantation Sanctuary",
      expeditionWindow: "Winter Kerala Departure",
      travelers: "Registered Guests",
      defaultGuests: 2,
      maxGuests: 8,

      included: [
        "Private traditional houseboat",
        "Spice plantation experience",
        "Curated Kerala dining",
        "Private chauffeur transfers"
      ],

      gallery: [
        {
          image: assets.Kerala,
          label: "PLATE 01 // BACKWATER DAWN",
          caption:
            "A traditional houseboat moving through Kerala's quiet morning waterways."
        },
        {
          image: assets.Kerala,
          label: "PLATE 02 // SPICE COUNTRY",
          caption:
            "Cardamom and pepper plantations rising into the Western Ghats."
        }
      ],

      footerNote:
        "The journey follows a deliberately slow rhythm inspired by Kerala's traditional backwater life."
    }
  },


  // =========================================================
  // 07 - KYOTO
  // =========================================================

  {
    id: 7,
    slug: "kyoto-solitude-ryokan",
    image: assets.Kyoto,
    duration: "7 Days / 6 Nights",
    rating: 4.8,
    destination: "Kyoto",
    mood: "Cultural",

    tags: [
      "Ryokan",
      "Tea Ceremony",
      "Private Shrines"
    ],

    title: "Kyoto Solitude & Ryokan",

    description:
      "Deepen into peaceful Kyoto temples, private tea houses and traditional ryokan through a carefully paced cultural journey.",

    price: "₹1,95,000",
    priceValue: 195000,
    priceType: "guest",

    details: {
      sectionLabel: "SECTION 01 // CULTURAL NARRATIVE",
      archive: "ARCHIVE FOLIO • PLATE 53",
      register: "REGISTER #407",
      ledger: "MONOGRAPH LEDGER",
      folioTitle: "Kyoto Solitude & Ryokan Folio",

      story:
        "Experience Kyoto through its quieter temples, moss gardens, tea houses and traditional ryokan, moving beyond the city's busiest corridors. Each day is designed around contemplation, craftsmanship and seasonal beauty, revealing a Japan where ancient rituals remain part of everyday life.",

      storySecond:
        "Private temple visits begin before the crowds arrive, followed by tea ceremonies, artisan workshops and intimate culinary experiences. Evenings return to a traditional ryokan where seasonal kaiseki is served slowly and the gardens become the final landscape of the day.",

      optimalSeason: {
        title: "OPTIMAL SEASON",
        value: "March — May",
        description: "Cherry blossoms & mild spring weather"
      },

      acclimatization: {
        title: "PACE",
        value: "Contemplative",
        description: "Slow cultural days with carefully timed visits"
      },

      physicalCadence: {
        title: "PHYSICAL CADENCE",
        value: "Gentle Walking",
        description: "Temple paths, gardens and traditional neighborhoods"
      },

      seasonality: "March — May · October — November",
      style: "Japanese Heritage · Slow Culture",
      lodging: "Luxury Ryokan + Boutique Kyoto Stay",
      expeditionWindow: "Spring & Autumn Departure",
      travelers: "Registered Guests",
      defaultGuests: 2,
      maxGuests: 8,

      included: [
        "Private cultural guide",
        "Traditional ryokan accommodation",
        "Private tea ceremony",
        "Curated kaiseki dining experiences"
      ],

      gallery: [
        {
          image: assets.Kyoto,
          label: "PLATE 01 // TEMPLE MORNING",
          caption:
            "A quiet Kyoto temple garden before the city begins its day."
        },
        {
          image: assets.Kyoto,
          label: "PLATE 02 // RYOKAN EVENING",
          caption:
            "Traditional Japanese hospitality within a private garden sanctuary."
        }
      ],

      footerNote:
        "Visits are carefully timed to preserve quiet moments within Kyoto's historic cultural spaces."
    }
  },


  // =========================================================
  // 08 - LADAKH
  // =========================================================

  {
    id: 8,
    slug: "zanskar-ladakh-remote-monasteries",
    image: assets.Ladakh,
    duration: "10 Days / 9 Nights",
    rating: 4.9,
    destination: "Zanskar & Ladakh",
    mood: "Expedition",

    tags: [
      "Cliff Monasteries",
      "High Altitude",
      "Remote Villages"
    ],

    title: "Zanskar & Ladakh Remote Monasteries",

    description:
      "High-altitude journeys through remote valleys, ancient monasteries and stark Himalayan landscapes beyond the conventional route.",

    price: "₹1,15,000",
    priceValue: 115000,
    priceType: "guest",

    details: {
      sectionLabel: "SECTION 01 // HIGH ALTITUDE NARRATIVE",
      archive: "ARCHIVE FOLIO • PLATE 61",
      register: "REGISTER #408",
      ledger: "MONOGRAPH LEDGER",
      folioTitle: "Zanskar & Ladakh Folio",

      story:
        "Enter the remote valleys of Ladakh and Zanskar, where ancient monasteries cling to cliffs above vast Himalayan landscapes. This high-altitude expedition follows remote roads and mountain passes toward communities where centuries-old Buddhist traditions remain deeply woven into daily life.",

      storySecond:
        "Days begin slowly to accommodate altitude before progressing toward remote monasteries, high villages and extraordinary mountain viewpoints. Private camp stays provide a quiet base beneath immense Himalayan skies, with evenings spent around traditional Ladakhi meals and stories from local hosts.",

      optimalSeason: {
        title: "OPTIMAL SEASON",
        value: "June — September",
        description: "Accessible mountain passes & clear skies"
      },

      acclimatization: {
        title: "ACCLIMATIZATION",
        value: "3 Full Days",
        description: "Gradual altitude gain before remote exploration"
      },

      physicalCadence: {
        title: "PHYSICAL CADENCE",
        value: "Challenging Alpine",
        description: "Mountain roads, monastery walks and high passes"
      },

      seasonality: "June — September",
      style: "High Himalaya · Monastic Expedition",
      lodging: "Luxury Camp + Mountain Guesthouses",
      expeditionWindow: "Summer High-Altitude Window",
      travelers: "Registered Guests",
      defaultGuests: 2,
      maxGuests: 8,

      included: [
        "Private high-altitude expedition guide",
        "Premium expedition camp",
        "Monastery and village visits",
        "Private 4x4 mountain transfers"
      ],

      gallery: [
        {
          image: assets.Ladakh,
          label: "PLATE 01 // ZANSKAR VALLEY",
          caption:
            "Remote Himalayan valleys stretching beneath the high Ladakhi ranges."
        },
        {
          image: assets.Ladakh,
          label: "PLATE 02 // MONASTIC RIDGE",
          caption:
            "An ancient monastery overlooking a remote mountain settlement."
        }
      ],

      footerNote:
        "Altitude management and local conditions determine the final daily expedition rhythm."
    }
  },


  // =========================================================
  // 09 - ANDAMAN
  // =========================================================

  {
    id: 9,
    slug: "andaman-azure-archipelago-passage",
    image: assets.Andaman,
    duration: "6 Days / 5 Nights",
    rating: 4.8,
    destination: "Andaman",
    mood: "Marine",

    tags: [
      "Deep Navigation",
      "Catamaran",
      "Barefoot Luxury"
    ],

    title: "Andaman Azure & Archipelago Passage",

    description:
      "Uninhabited coral isles, private yacht passages and translucent lagoons across the remote Andaman archipelago.",

    price: "₹54,000",
    priceValue: 54000,
    priceType: "guest",

    details: {
      sectionLabel: "SECTION 01 // ISLAND NARRATIVE",
      archive: "ARCHIVE FOLIO • PLATE 67",
      register: "REGISTER #409",
      ledger: "MONOGRAPH LEDGER",
      folioTitle: "Andaman Azure Folio",

      story:
        "Sail between the remote islands of the Andaman archipelago aboard a private vessel, discovering translucent lagoons, hidden beaches and coral gardens far from the mainland. The journey is intentionally aquatic, allowing the rhythm of the sea to determine each day's passage.",

      storySecond:
        "Private snorkeling excursions reveal reef ecosystems beneath clear tropical waters, while deserted beaches become places for long lunches and quiet afternoons. Evenings are spent aboard the vessel beneath open skies, with the islands disappearing into the horizon.",

      optimalSeason: {
        title: "OPTIMAL SEASON",
        value: "November — April",
        description: "Calm seas & exceptional underwater visibility"
      },

      acclimatization: {
        title: "PACE",
        value: "Unhurried",
        description: "Flexible island passages shaped by sea conditions"
      },

      physicalCadence: {
        title: "PHYSICAL CADENCE",
        value: "Easy Marine",
        description: "Swimming, snorkeling and light coastal walks"
      },

      seasonality: "November — April",
      style: "Private Yacht · Tropical Archipelago",
      lodging: "Luxury Island Resort + Private Vessel",
      expeditionWindow: "Winter Sailing Season",
      travelers: "Registered Guests",
      defaultGuests: 2,
      maxGuests: 8,

      included: [
        "Private yacht and professional crew",
        "Private snorkeling excursions",
        "Secluded island beach experiences",
        "All marine transfers"
      ],

      gallery: [
        {
          image: assets.Andaman,
          label: "PLATE 01 // AZURE PASSAGE",
          caption:
            "A private vessel crossing the translucent waters of the Andaman Sea."
        },
        {
          image: assets.Andaman,
          label: "PLATE 02 // REEF SANCTUARY",
          caption:
            "A secluded coral reef encountered during a private morning excursion."
        }
      ],

      footerNote:
        "All island passages remain subject to sea conditions and local conservation requirements."
    }
  },


  // =========================================================
  // 10 - ATACAMA
  // =========================================================

  {
    id: 10,
    slug: "atacama-desert-celestial-observatories",
    image: assets.Atacama,
    duration: "7 Days / 6 Nights",
    rating: 4.9,
    destination: "Atacama",
    mood: "Celestial",

    tags: [
      "Observatory",
      "Geothermal Baths",
      "Lodge"
    ],

    title: "Atacama Desert Celestial Observatories",

    description:
      "High-altitude desert landscapes, geothermal lagoons and private astronomy experiences beneath one of Earth's clearest skies.",

    price: "₹1,75,000",
    priceValue: 175000,
    priceType: "guest",

    details: {
      sectionLabel: "SECTION 01 // DESERT NARRATIVE",
      archive: "ARCHIVE FOLIO • PLATE 72",
      register: "REGISTER #410",
      ledger: "MONOGRAPH LEDGER",
      folioTitle: "Atacama Celestial Folio",

      story:
        "Cross the otherworldly landscapes of Chile's Atacama Desert, where salt flats, volcanic formations and immense horizons create one of the world's most extraordinary natural observatories. Days unfold beneath intense desert light before giving way to nights filled with an extraordinary density of stars.",

      storySecond:
        "Private excursions explore high-altitude lagoons, ancient desert settlements and volcanic valleys, while evenings are reserved for specialist astronomy experiences. Far from city lights, travelers gather around telescopes to observe planets, nebulae and distant galaxies.",

      optimalSeason: {
        title: "OPTIMAL SEASON",
        value: "March — November",
        description: "Clear desert skies & cooler evenings"
      },

      acclimatization: {
        title: "ACCLIMATIZATION",
        value: "1 Full Day",
        description: "Gradual transition to high desert elevation"
      },

      physicalCadence: {
        title: "PHYSICAL CADENCE",
        value: "Moderate Desert",
        description: "Short hikes across high-altitude desert terrain"
      },

      seasonality: "March — November",
      style: "Desert Expedition · Astronomy",
      lodging: "Luxury Desert Lodge",
      expeditionWindow: "Dry-Season Celestial Window",
      travelers: "Registered Guests",
      defaultGuests: 2,
      maxGuests: 8,

      included: [
        "Private desert expedition guide",
        "Luxury desert lodge accommodation",
        "Professional astronomy experience",
        "Private 4x4 desert excursions"
      ],

      gallery: [
        {
          image: assets.Atacama,
          label: "PLATE 01 // SALT HORIZON",
          caption:
            "A vast Atacama salt landscape beneath an uninterrupted desert sky."
        },
        {
          image: assets.Atacama,
          label: "PLATE 02 // CELESTIAL OBSERVATORY",
          caption:
            "Nightfall reveals the extraordinary clarity of the southern sky."
        }
      ],

      footerNote:
        "Astronomy sessions are scheduled according to lunar conditions and atmospheric visibility."
    }
  },


  // =========================================================
  // 11 - SERENGETI
  // =========================================================

  {
    id: 11,
    slug: "serengeti-wilderness-fly-camping",
    image: assets.Serengeti,
    duration: "7 Days / 6 Nights",
    rating: 4.9,
    destination: "Serengeti",
    mood: "Wilderness",

    tags: [
      "Mobile Canvas",
      "Conservationist",
      "Private Flight"
    ],

    title: "Serengeti Wilderness & Fly-Camping",

    description:
      "Remote safari landscapes, private wildlife encounters and intimate fly-camps positioned deep within the Serengeti wilderness.",

    price: "₹2,40,000",
    priceValue: 240000,
    priceType: "guest",

    details: {
      sectionLabel: "SECTION 01 // WILDERNESS NARRATIVE",
      archive: "ARCHIVE FOLIO • PLATE 79",
      register: "REGISTER #411",
      ledger: "MONOGRAPH LEDGER",
      folioTitle: "Serengeti Wilderness Folio",

      story:
        "Travel deep into the Serengeti across private wildlife concessions where open plains stretch beyond the horizon. This journey is built around long-form observation, allowing wildlife encounters to unfold naturally rather than following a fixed sightseeing schedule.",

      storySecond:
        "Days begin before sunrise with private game drives and guided walking safaris before returning to camp for long lunches beneath the acacia trees. At night, the expedition moves into intimate fly-camps positioned within remote wilderness areas, where the sounds of the savanna become the evening's soundtrack.",

      optimalSeason: {
        title: "OPTIMAL SEASON",
        value: "June — October",
        description: "Dry season wildlife concentration & clear skies"
      },

      acclimatization: {
        title: "PACE",
        value: "Wildlife Focused",
        description: "Flexible days determined by animal movement"
      },

      physicalCadence: {
        title: "PHYSICAL CADENCE",
        value: "Moderate Safari",
        description: "Game drives with optional guided walking safaris"
      },

      seasonality: "June — October",
      style: "Private Safari · Wilderness",
      lodging: "Luxury Safari Camp + Fly-Camp",
      expeditionWindow: "Great Migration Season",
      travelers: "Registered Guests",
      defaultGuests: 2,
      maxGuests: 8,

      included: [
        "Private safari vehicle and guide",
        "Luxury tented camp accommodation",
        "Guided walking safari",
        "Remote fly-camping experience"
      ],

      gallery: [
        {
          image: assets.Serengeti,
          label: "PLATE 01 // SAVANNAH DAWN",
          caption:
            "First light across the Serengeti plains during an early morning game drive."
        },
        {
          image: assets.Serengeti,
          label: "PLATE 02 // FLY CAMP",
          caption:
            "A private wilderness camp beneath the vast African night sky."
        }
      ],

      footerNote:
        "Wildlife sightings are naturally unpredictable and all activities prioritize animal welfare."
    }
  },


  // =========================================================
  // 12 - ALPS & FJORDS
  // =========================================================

  {
    id: 12,
    slug: "summer-alps-fjord-sanctuaries",
    image: assets.Fjords,
    duration: "6 Days / 5 Nights",
    rating: 4.9,
    destination: "Norway",
    mood: "Nordic",

    tags: [
      "Sea Kayaking",
      "Fjord Sauna",
      "Glacier Trek"
    ],

    title: "Summer Alps & Fjord Sanctuaries",

    description:
      "A northern passage through alpine lakes, glacier country and secluded Norwegian fjords shaped around long summer daylight.",

    price: "₹1,68,000",
    priceValue: 168000,
    priceType: "guest",

    details: {
      sectionLabel: "SECTION 01 // NORTHERN NARRATIVE",
      archive: "ARCHIVE FOLIO • PLATE 86",
      register: "REGISTER #412",
      ledger: "MONOGRAPH LEDGER",
      folioTitle: "Summer Alps & Fjords Folio",

      story:
        "Journey from the high summer landscapes of the Alps toward the dramatic fjords of Scandinavia, combining mountain villages, crystalline lakes and remote coastal sanctuaries. The route is designed around dramatic landscapes without sacrificing the comfort of exceptional private accommodation.",

      storySecond:
        "Alpine mornings begin with gentle mountain walks before the journey continues north toward Norway's fjord country. Private boats navigate narrow waterways surrounded by cliffs and waterfalls, while evenings are spent in secluded lodges where long summer light extends well into the night.",

      optimalSeason: {
        title: "OPTIMAL SEASON",
        value: "June — August",
        description: "Long daylight hours & accessible mountain routes"
      },

      acclimatization: {
        title: "PACE",
        value: "Exploratory",
        description: "Flexible mountain and fjord days"
      },

      physicalCadence: {
        title: "PHYSICAL CADENCE",
        value: "Moderate",
        description: "Scenic hikes with optional private boat excursions"
      },

      seasonality: "June — August",
      style: "Alpine Summer · Nordic Fjords",
      lodging: "Mountain Lodge + Fjord Sanctuary",
      expeditionWindow: "Peak Northern Summer",
      travelers: "Registered Guests",
      defaultGuests: 2,
      maxGuests: 8,

      included: [
        "Private mountain and fjord guide",
        "Luxury alpine and fjord lodges",
        "Private fjord boat excursion",
        "All inter-destination private transfers"
      ],

      gallery: [
        {
          image: assets.Fjords,
          label: "PLATE 01 // SUMMER ALPS",
          caption:
            "High alpine meadows beneath the clear summer mountain sky."
        },
        {
          image: assets.Fjords,
          label: "PLATE 02 // FJORD PASSAGE",
          caption:
            "A private boat moving through the dramatic Norwegian fjord landscape."
        }
      ],

      footerNote:
        "The itinerary follows northern daylight and seasonal mountain accessibility."
    }
  }

]



    const value = {
        travelMoods,


        packages,
    };


    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;