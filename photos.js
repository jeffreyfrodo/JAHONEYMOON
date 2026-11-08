// Photo credits for images in photos/, from Wikimedia Commons.
const PHOTOS = {
  "maldives-water-villas": {
    "title": "Diamonds Thudufushi Beach and Water Villas, May 2017 -04",
    "artist": "Martin Falbisoner",
    "license": "CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Diamonds_Thudufushi_Beach_and_Water_Villas,_May_2017_-04.jpg"
  },
  "maldives-landaa": {
    "title": "Landaa Giraavaru vue du ciel",
    "artist": "Frédéric Ducarme",
    "license": "CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Landaa_Giraavaru_vue_du_ciel.JPG"
  },
  "maldives-resort": {
    "title": "Maldives-resort-island",
    "artist": "Unknown author",
    "license": "CC BY-SA 2.5",
    "source": "https://commons.wikimedia.org/wiki/File:Maldives-resort-island.jpg"
  },
  "doha-museum": {
    "title": "Museum of Islamic Art in Doha, Qatar (32673171432)",
    "artist": "Ralf Steinberger from Milan, Berlin + Munich, Italy + Germany",
    "license": "CC BY 2.0",
    "source": "https://en.wikipedia.org/wiki/File:Museum_of_Islamic_Art_in_Doha,_Qatar_(32673171432).jpg"
  },
  "bhutan-tigers-nest": {
    "title": "Paro Taktsang, Bhutan (edited)",
    "artist": "Nina R from Africa",
    "license": "CC BY 2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Paro_Taktsang,_Bhutan_(edited).jpg"
  },
  "bhutan-punakha": {
    "title": "Punakha Dzong, Bhutan 02",
    "artist": "Bernard Gagnon",
    "license": "CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Punakha_Dzong,_Bhutan_02.jpg"
  },
  "bhutan-dochula": {
    "title": "Druk Wangyal Chortens, Bhutan 01",
    "artist": "Bernard Gagnon",
    "license": "CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Druk_Wangyal_Chortens,_Bhutan_01.jpg"
  },
  "maldives-villas-pano": {
    "title": "Diamonds Thudufushi Beach and Water Villas, May 2017 -03",
    "artist": "Martin Falbisoner",
    "license": "CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Diamonds_Thudufushi_Beach_and_Water_Villas,_May_2017_-03.jpg"
  },
  "bora-lagoon": {
    "title": "Borabora-LeMeridien-Aerial2-HD",
    "artist": "Didierlefort",
    "license": "CC BY-SA 3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Borabora-LeMeridien-Aerial2-HD.jpg"
  },
  "bora-otemanu": {
    "title": "Borabora-2",
    "artist": "User:Taka-0905",
    "license": "CC BY-SA 3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Borabora-2.jpg"
  },
  "moorea-lagoon": {
    "title": "DSC00042 Polynésia Mooréa Island Motu Moéa Lagoon and transportation Boat (8076082190)",
    "artist": "DANIEL JULIE from Paris, France",
    "license": "CC BY 2.0",
    "source": "https://commons.wikimedia.org/wiki/File:DSC00042_Polyn%C3%A9sia_Moor%C3%A9a_Island_Motu_Mo%C3%A9a_Lagoon_and_transportation_Boat_(8076082190).jpg"
  },
  "tetiaroa": {
    "title": "Tetiaroa from sky",
    "artist": "Supertoff",
    "license": "CC BY-SA 3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Tetiaroa_from_sky.JPG"
  },
  "antarctica-lemaire": {
    "title": "Icebergs in the Lemaire Channel, Antarctica",
    "artist": "Liam Quinn",
    "license": "CC BY-SA 2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Icebergs_in_the_Lemaire_Channel,_Antarctica.jpg"
  },
  "antarctica-gentoo": {
    "title": "Gentoo penguin juvenile Petermann Island",
    "artist": "Jens Bludau",
    "license": "CC BY-SA 3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Gentoo_penguin_juvenile_Petermann_Island.jpg"
  },
  "antarctica-neko": {
    "title": "Neko Harbour (8369524725)",
    "artist": "Christopher Michel",
    "license": "CC BY 2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Neko_Harbour_(8369524725).jpg"
  },
  "paine-cuernos": {
    "title": "Los Cuernos de Torres del Paine",
    "artist": "Natalia Reyes Escobar",
    "license": "CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Los_Cuernos_de_Torres_del_Paine.jpg"
  },
  "perito-moreno": {
    "title": "Perito Moreno Glacier 2023",
    "artist": "Fernando",
    "license": "CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Perito_Moreno_Glacier_2023.jpg"
  },
  "el-chalten": {
    "title": "El Chaltén",
    "artist": "David",
    "license": "CC BY 2.0",
    "source": "https://commons.wikimedia.org/wiki/File:El_Chalt%C3%A9n.jpg"
  },
  "mendoza-vineyard": {
    "title": "Vineyard in Mendoza, Argentina",
    "artist": "David",
    "license": "CC BY 2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Vineyard_in_Mendoza,_Argentina.jpg"
  },
  "milford-sound": {
    "title": "Milford Sound (New Zealand)",
    "artist": "Maros M r a z (Maros)",
    "license": "CC BY-SA 3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Milford_Sound_(New_Zealand).JPG"
  },
  "queenstown": {
    "title": "Queenstown 1 (8168013172)",
    "artist": "Bernard Spragg. NZ from Christchurch, New Zealand",
    "license": "CC0",
    "source": "https://commons.wikimedia.org/wiki/File:Queenstown_1_(8168013172).jpg"
  },
  "aoraki": {
    "title": "Aoraki Mount Cook",
    "artist": "C.M. Lynch",
    "license": "CC BY-SA 3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Aoraki_Mount_Cook.JPG"
  },
  "sydney-opera": {
    "title": "Sydney Opera House 2026",
    "artist": "BAVhah",
    "license": "CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Sydney_Opera_House_2026.jpg"
  },
  "cape-table-mountain": {
    "title": "Table Mountain DanieVDM",
    "artist": "Danie van der Merwe from Cape Town, South Africa",
    "license": "CC BY 2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Table_Mountain_DanieVDM.jpg"
  },
  "franschhoek": {
    "title": "Franschhoek (Südafrika)",
    "artist": "Olga Ernst",
    "license": "CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Franschhoek_(S%C3%BCdafrika).jpg"
  },
  "sabi-leopard": {
    "title": "African Leopard Sabi Sands Fir0002 Oct18",
    "artist": "Fir0002",
    "license": "CC BY-SA 3.0",
    "source": "https://commons.wikimedia.org/wiki/File:African_Leopard_Sabi_Sands_Fir0002_Oct18.jpg"
  },
  "chapmans-peak": {
    "title": "Chapmans Peak Drive 2",
    "artist": "kallerna",
    "license": "CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Chapmans_Peak_Drive_2.jpg"
  },
  "serengeti": {
    "title": "Serengeti-Landscape-2012",
    "artist": "Bjørn Christian Tørrissen",
    "license": "CC BY-SA 3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Serengeti-Landscape-2012.JPG"
  },
  "wildebeest": {
    "title": "Wildebeest-during-Great-Migration",
    "artist": "Bjørn Christian Tørrissen",
    "license": "CC BY-SA 3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Wildebeest-during-Great-Migration.JPG"
  },
  "ngorongoro": {
    "title": "Ngorongoro-1001-2",
    "artist": "Grahampurse",
    "license": "CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Ngorongoro-1001-2.jpg"
  },
  "zanzibar-coast": {
    "title": "Low Tide (7886864976)",
    "artist": "Rod Waddington from Kergunyah, Australia",
    "license": "CC BY-SA 2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Low_Tide_(7886864976).jpg"
  },
  "stone-town": {
    "title": "Zanzibar Stone Town01",
    "artist": "Esculapio",
    "license": "CC BY 2.5",
    "source": "https://commons.wikimedia.org/wiki/File:Zanzibar_Stone_Town01.jpg"
  },
  "gorilla": {
    "title": "Susa group, mountain gorilla",
    "artist": "d_proffer",
    "license": "CC BY 2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Susa_group,_mountain_gorilla.jpg"
  },
  "mara-sunset": {
    "title": "Masai Mara at Sunset",
    "artist": "Danijel Mihajlovic",
    "license": "CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Masai_Mara_at_Sunset.jpg"
  },
  "mara-crossing": {
    "title": "Masai Mara National Reserve 20 - Mara river crossing",
    "artist": "Thomas Fuhrmann",
    "license": "CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Masai_Mara_National_Reserve_20_-_Mara_river_crossing.jpg"
  },
  "mara-cheetah": {
    "title": "Cheetah with cubs",
    "artist": "Siddharth Maheshwari",
    "license": "CC BY-SA 3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Cheetah_with_cubs.jpg"
  },
  "petra-khazneh": {
    "title": "Al khazneh",
    "artist": "Susanahajer",
    "license": "CC BY-SA 3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Al_khazneh.jpg"
  },
  "wadi-rum": {
    "title": "Mountain in Wadi Rum, Jordan",
    "artist": "Daniel Case",
    "license": "CC BY-SA 3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Mountain_in_Wadi_Rum,_Jordan.jpg"
  },
  "giza": {
    "title": "Pyramids of the Giza Necropolis",
    "artist": "KennyOMG",
    "license": "CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Pyramids_of_the_Giza_Necropolis.jpg"
  },
  "luxor-balloon": {
    "title": "Balloon over Luxor - Egypt denoised",
    "artist": "Marcosleal",
    "license": "CC BY-SA 3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Balloon_over_Luxor_-_Egypt_denoised.jpg"
  },
  "udaipur-lake-palace": {
    "title": "Udaipur Lake Palace",
    "artist": "user:Flicka",
    "license": "CC BY-SA 3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Udaipur_Lake_Palace.jpg"
  },
  "mehrangarh": {
    "title": "Mehrangarh Fort sanhita",
    "artist": "Sanhitasinha",
    "license": "CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Mehrangarh_Fort_sanhita.jpg"
  },
  "ranthambore-tiger": {
    "title": "Tiger from Ranthanbore Sawai Madhopur Rajasthan India 12.10.2014",
    "artist": "Dibyendu Ash",
    "license": "CC BY-SA 3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Tiger_from_Ranthanbore_Sawai_Madhopur_Rajasthan_India_12.10.2014.jpg"
  },
  "jaisalmer": {
    "title": "Jaisalmer forteresse",
    "artist": "Gérard Janot",
    "license": "CC BY-SA 3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Jaisalmer_forteresse.jpg"
  },
  "sigiriya": {
    "title": "Sigiriya (141688197)",
    "artist": "Wrobell",
    "license": "CC BY-SA 3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Sigiriya_(141688197).jpeg"
  },
  "nine-arches": {
    "title": "NineArchesBridge",
    "artist": "Deitel55",
    "license": "CC BY-SA 3.0",
    "source": "https://commons.wikimedia.org/wiki/File:NineArchesBridge.JPG"
  },
  "yala-leopard": {
    "title": "Sri Lankan leopard (Panthera pardus kotiya) female 5",
    "artist": "Charles J. Sharp",
    "license": "CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Sri_Lankan_leopard_(Panthera_pardus_kotiya)_female_5.jpg"
  },
  "tea-estates": {
    "title": "Sri Lanka, Tea plantations, Nuwara Eliya",
    "artist": "Vyacheslav Argenberg",
    "license": "CC BY 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Sri_Lanka,_Tea_plantations,_Nuwara_Eliya.jpg"
  },
  "aurora-levi": {
    "title": "Gentle but wide green aurora display over Levi, Kittilä, Lapland, Finland, 2023 September - 2",
    "artist": "Ximonic (Simo Räsänen)",
    "license": "CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Gentle_but_wide_green_aurora_display_over_Levi,_Kittil%C3%A4,_Lapland,_Finland,_2023_September_-_2.jpg"
  },
  "saariselka": {
    "title": "Kaunispää",
    "artist": "M.P., User:Argus_fin",
    "license": "CC BY-SA 3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Kaunisp%C3%A4%C3%A4.jpg"
  },
  "tromso": {
    "title": "Tromsø sentrum (5835702754)",
    "artist": "The Municipality of Tromsø from Tromsø, Norway",
    "license": "CC BY 2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Troms%C3%B8_sentrum_(5835702754).jpg"
  },
  "aurora": {
    "title": "Aurora borealis over Eielson Air Force Base, Alaska",
    "artist": "United States Air Force photo by Senior Airman Joshua Strang",
    "license": "Public domain",
    "source": "https://commons.wikimedia.org/wiki/File:Aurora_borealis_over_Eielson_Air_Force_Base,_Alaska.jpg"
  },
  "bartolome": {
    "title": "PinnacleRockBartolome",
    "artist": "Quasar Expeditions",
    "license": "CC BY 3.0",
    "source": "https://commons.wikimedia.org/wiki/File:PinnacleRockBartolome.jpg"
  },
  "tortoise": {
    "title": "Galapagos giant tortoise Geochelone elephantopus",
    "artist": "Mfield, Matthew Field",
    "license": "CC BY-SA 3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Galapagos_giant_tortoise_Geochelone_elephantopus.jpg"
  },
  "marine-iguana": {
    "title": "Amblyrhynchus cristatus (3838137696)",
    "artist": "RAF-YYC from Calgary, Canada",
    "license": "CC BY-SA 2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Amblyrhynchus_cristatus_(3838137696).jpg"
  },
  "machu-picchu": {
    "title": "Machu Picchu, 2023 (012)",
    "artist": "Draceane",
    "license": "CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Machu_Picchu,_2023_(012).jpg"
  }
};
