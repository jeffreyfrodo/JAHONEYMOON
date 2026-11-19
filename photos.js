// Photo credits; images load from Wikimedia Commons.
const PHOTOS = {
  "maldives-water-villas": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-04.jpg/1280px-Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-04.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Diamonds_Thudufushi_Beach_and_Water_Villas,_May_2017_-04.jpg",
    "artist": "Martin Falbisoner",
    "license": "CC BY-SA 4.0",
    "title": "Diamonds Thudufushi Beach and Water Villas, May 2017 -04"
  },
  "maldives-landaa": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Landaa_Giraavaru_vue_du_ciel.JPG/1280px-Landaa_Giraavaru_vue_du_ciel.JPG",
    "source": "https://commons.wikimedia.org/wiki/File:Landaa_Giraavaru_vue_du_ciel.JPG",
    "artist": "Frédéric Ducarme",
    "license": "CC BY-SA 4.0",
    "title": "Landaa Giraavaru vue du ciel"
  },
  "maldives-resort": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Maldives-resort-island.jpg/1280px-Maldives-resort-island.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Maldives-resort-island.jpg",
    "artist": "Unknown author",
    "license": "CC BY-SA 2.5",
    "title": "Maldives-resort-island"
  },
  "bhutan-tigers-nest": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Paro_Taktsang%2C_Bhutan_%28edited%29.jpg/1280px-Paro_Taktsang%2C_Bhutan_%28edited%29.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Paro_Taktsang,_Bhutan_(edited).jpg",
    "artist": "Nina R from Africa",
    "license": "CC BY 2.0",
    "title": "Paro Taktsang, Bhutan (edited)"
  },
  "bhutan-punakha": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Punakha_Dzong%2C_Bhutan_02.jpg/1280px-Punakha_Dzong%2C_Bhutan_02.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Punakha_Dzong,_Bhutan_02.jpg",
    "artist": "Bernard Gagnon",
    "license": "CC BY-SA 4.0",
    "title": "Punakha Dzong, Bhutan 02"
  },
  "bhutan-dochula": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Druk_Wangyal_Chortens%2C_Bhutan_01.jpg/1280px-Druk_Wangyal_Chortens%2C_Bhutan_01.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Druk_Wangyal_Chortens,_Bhutan_01.jpg",
    "artist": "Bernard Gagnon",
    "license": "CC BY-SA 4.0",
    "title": "Druk Wangyal Chortens, Bhutan 01"
  },
  "maldives-villas-pano": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-03.jpg/1280px-Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-03.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Diamonds_Thudufushi_Beach_and_Water_Villas,_May_2017_-03.jpg",
    "artist": "Martin Falbisoner",
    "license": "CC BY-SA 4.0",
    "title": "Diamonds Thudufushi Beach and Water Villas, May 2017 -03"
  },
  "bora-lagoon": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Borabora-LeMeridien-Aerial2-HD.jpg/1280px-Borabora-LeMeridien-Aerial2-HD.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Borabora-LeMeridien-Aerial2-HD.jpg",
    "artist": "Didierlefort",
    "license": "CC BY-SA 3.0",
    "title": "Borabora-LeMeridien-Aerial2-HD"
  },
  "bora-otemanu": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Borabora-2.jpg/1280px-Borabora-2.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Borabora-2.jpg",
    "artist": "User:Taka-0905",
    "license": "CC BY-SA 3.0",
    "title": "Borabora-2"
  },
  "moorea-lagoon": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/DSC00042_Polyn%C3%A9sia_Moor%C3%A9a_Island_Motu_Mo%C3%A9a_Lagoon_and_transportation_Boat_%288076082190%29.jpg/1280px-DSC00042_Polyn%C3%A9sia_Moor%C3%A9a_Island_Motu_Mo%C3%A9a_Lagoon_and_transportation_Boat_%288076082190%29.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:DSC00042_Polyn%C3%A9sia_Moor%C3%A9a_Island_Motu_Mo%C3%A9a_Lagoon_and_transportation_Boat_(8076082190).jpg",
    "artist": "DANIEL JULIE from Paris, France",
    "license": "CC BY 2.0",
    "title": "DSC00042 Polynésia Mooréa Island Motu Moéa Lagoon and transportation Boat (8076082190)"
  },
  "antarctica-lemaire": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Icebergs_in_the_Lemaire_Channel%2C_Antarctica.jpg/1280px-Icebergs_in_the_Lemaire_Channel%2C_Antarctica.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Icebergs_in_the_Lemaire_Channel,_Antarctica.jpg",
    "artist": "Liam Quinn",
    "license": "CC BY-SA 2.0",
    "title": "Icebergs in the Lemaire Channel, Antarctica"
  },
  "antarctica-gentoo": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gentoo_penguin_juvenile_Petermann_Island.jpg/1280px-Gentoo_penguin_juvenile_Petermann_Island.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Gentoo_penguin_juvenile_Petermann_Island.jpg",
    "artist": "Jens Bludau",
    "license": "CC BY-SA 3.0",
    "title": "Gentoo penguin juvenile Petermann Island"
  },
  "antarctica-neko": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/5/54/Neko_Harbour_%288369524725%29.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Neko_Harbour_(8369524725).jpg",
    "artist": "Christopher Michel",
    "license": "CC BY 2.0",
    "title": "Neko Harbour (8369524725)"
  },
  "paine-cuernos": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Los_Cuernos_de_Torres_del_Paine.jpg/1280px-Los_Cuernos_de_Torres_del_Paine.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Los_Cuernos_de_Torres_del_Paine.jpg",
    "artist": "Natalia Reyes Escobar",
    "license": "CC BY-SA 4.0",
    "title": "Los Cuernos de Torres del Paine"
  },
  "perito-moreno": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Perito_Moreno_Glacier_2023.jpg/1280px-Perito_Moreno_Glacier_2023.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Perito_Moreno_Glacier_2023.jpg",
    "artist": "Fernando",
    "license": "CC BY-SA 4.0",
    "title": "Perito Moreno Glacier 2023"
  },
  "el-chalten": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/El_Chalt%C3%A9n.jpg/1280px-El_Chalt%C3%A9n.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:El_Chalt%C3%A9n.jpg",
    "artist": "David",
    "license": "CC BY 2.0",
    "title": "El Chaltén"
  },
  "milford-sound": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Milford_Sound_%28New_Zealand%29.JPG/1280px-Milford_Sound_%28New_Zealand%29.JPG",
    "source": "https://commons.wikimedia.org/wiki/File:Milford_Sound_(New_Zealand).JPG",
    "artist": "Maros M r a z (Maros)",
    "license": "CC BY-SA 3.0",
    "title": "Milford Sound (New Zealand)"
  },
  "queenstown": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Queenstown_1_%288168013172%29.jpg/1280px-Queenstown_1_%288168013172%29.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Queenstown_1_(8168013172).jpg",
    "artist": "Bernard Spragg. NZ from Christchurch, New Zealand",
    "license": "CC0",
    "title": "Queenstown 1 (8168013172)"
  },
  "sydney-opera": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Sydney_Opera_House_2026.jpg/1280px-Sydney_Opera_House_2026.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Sydney_Opera_House_2026.jpg",
    "artist": "BAVhah",
    "license": "CC BY-SA 4.0",
    "title": "Sydney Opera House 2026"
  },
  "cape-table-mountain": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Table_Mountain_DanieVDM.jpg/1280px-Table_Mountain_DanieVDM.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Table_Mountain_DanieVDM.jpg",
    "artist": "Danie van der Merwe from Cape Town, South Africa",
    "license": "CC BY 2.0",
    "title": "Table Mountain DanieVDM"
  },
  "franschhoek": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Franschhoek_%28S%C3%BCdafrika%29.jpg/1280px-Franschhoek_%28S%C3%BCdafrika%29.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Franschhoek_(S%C3%BCdafrika).jpg",
    "artist": "Olga Ernst",
    "license": "CC BY-SA 4.0",
    "title": "Franschhoek (Südafrika)"
  },
  "sabi-leopard": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/African_Leopard_Sabi_Sands_Fir0002_Oct18.jpg/1280px-African_Leopard_Sabi_Sands_Fir0002_Oct18.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:African_Leopard_Sabi_Sands_Fir0002_Oct18.jpg",
    "artist": "Fir0002",
    "license": "CC BY-SA 3.0",
    "title": "African Leopard Sabi Sands Fir0002 Oct18"
  },
  "chapmans-peak": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Chapmans_Peak_Drive_2.jpg/1280px-Chapmans_Peak_Drive_2.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Chapmans_Peak_Drive_2.jpg",
    "artist": "kallerna",
    "license": "CC BY-SA 4.0",
    "title": "Chapmans Peak Drive 2"
  },
  "serengeti": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Serengeti-Landscape-2012.JPG/1280px-Serengeti-Landscape-2012.JPG",
    "source": "https://commons.wikimedia.org/wiki/File:Serengeti-Landscape-2012.JPG",
    "artist": "Bjørn Christian Tørrissen",
    "license": "CC BY-SA 3.0",
    "title": "Serengeti-Landscape-2012"
  },
  "wildebeest": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Wildebeest-during-Great-Migration.JPG/1280px-Wildebeest-during-Great-Migration.JPG",
    "source": "https://commons.wikimedia.org/wiki/File:Wildebeest-during-Great-Migration.JPG",
    "artist": "Bjørn Christian Tørrissen",
    "license": "CC BY-SA 3.0",
    "title": "Wildebeest-during-Great-Migration"
  },
  "ngorongoro": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Ngorongoro-1001-2.jpg/1280px-Ngorongoro-1001-2.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Ngorongoro-1001-2.jpg",
    "artist": "Grahampurse",
    "license": "CC BY-SA 4.0",
    "title": "Ngorongoro-1001-2"
  },
  "zanzibar-coast": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Low_Tide_%287886864976%29.jpg/1280px-Low_Tide_%287886864976%29.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Low_Tide_(7886864976).jpg",
    "artist": "Rod Waddington from Kergunyah, Australia",
    "license": "CC BY-SA 2.0",
    "title": "Low Tide (7886864976)"
  },
  "stone-town": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/a/af/Zanzibar_Stone_Town01.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Zanzibar_Stone_Town01.jpg",
    "artist": "Esculapio",
    "license": "CC BY 2.5",
    "title": "Zanzibar Stone Town01"
  },
  "gorilla": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Susa_group%2C_mountain_gorilla.jpg/1280px-Susa_group%2C_mountain_gorilla.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Susa_group,_mountain_gorilla.jpg",
    "artist": "d_proffer",
    "license": "CC BY 2.0",
    "title": "Susa group, mountain gorilla"
  },
  "mara-sunset": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Masai_Mara_at_Sunset.jpg/1280px-Masai_Mara_at_Sunset.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Masai_Mara_at_Sunset.jpg",
    "artist": "Danijel Mihajlovic",
    "license": "CC BY-SA 4.0",
    "title": "Masai Mara at Sunset"
  },
  "mara-crossing": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Masai_Mara_National_Reserve_20_-_Mara_river_crossing.jpg/1280px-Masai_Mara_National_Reserve_20_-_Mara_river_crossing.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Masai_Mara_National_Reserve_20_-_Mara_river_crossing.jpg",
    "artist": "Thomas Fuhrmann",
    "license": "CC BY-SA 4.0",
    "title": "Masai Mara National Reserve 20 - Mara river crossing"
  },
  "mara-cheetah": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Cheetah_with_cubs.jpg/1280px-Cheetah_with_cubs.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Cheetah_with_cubs.jpg",
    "artist": "Siddharth Maheshwari",
    "license": "CC BY-SA 3.0",
    "title": "Cheetah with cubs"
  },
  "giza": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pyramids_of_the_Giza_Necropolis.jpg/1280px-Pyramids_of_the_Giza_Necropolis.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Pyramids_of_the_Giza_Necropolis.jpg",
    "artist": "KennyOMG",
    "license": "CC BY-SA 4.0",
    "title": "Pyramids of the Giza Necropolis"
  },
  "luxor-balloon": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Balloon_over_Luxor_-_Egypt_denoised.jpg/1280px-Balloon_over_Luxor_-_Egypt_denoised.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Balloon_over_Luxor_-_Egypt_denoised.jpg",
    "artist": "Marcosleal",
    "license": "CC BY-SA 3.0",
    "title": "Balloon over Luxor - Egypt denoised"
  },
  "sigiriya": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sigiriya_%28141688197%29.jpeg/1280px-Sigiriya_%28141688197%29.jpeg",
    "source": "https://commons.wikimedia.org/wiki/File:Sigiriya_(141688197).jpeg",
    "artist": "Wrobell",
    "license": "CC BY-SA 3.0",
    "title": "Sigiriya (141688197)"
  },
  "nine-arches": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/NineArchesBridge.JPG/1280px-NineArchesBridge.JPG",
    "source": "https://commons.wikimedia.org/wiki/File:NineArchesBridge.JPG",
    "artist": "Deitel55",
    "license": "CC BY-SA 3.0",
    "title": "NineArchesBridge"
  },
  "tea-estates": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Sri_Lanka%2C_Tea_plantations%2C_Nuwara_Eliya.jpg/1280px-Sri_Lanka%2C_Tea_plantations%2C_Nuwara_Eliya.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Sri_Lanka,_Tea_plantations,_Nuwara_Eliya.jpg",
    "artist": "Vyacheslav Argenberg",
    "license": "CC BY 4.0",
    "title": "Sri Lanka, Tea plantations, Nuwara Eliya"
  },
  "aurora-levi": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Gentle_but_wide_green_aurora_display_over_Levi%2C_Kittil%C3%A4%2C_Lapland%2C_Finland%2C_2023_September_-_2.jpg/1280px-Gentle_but_wide_green_aurora_display_over_Levi%2C_Kittil%C3%A4%2C_Lapland%2C_Finland%2C_2023_September_-_2.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Gentle_but_wide_green_aurora_display_over_Levi,_Kittil%C3%A4,_Lapland,_Finland,_2023_September_-_2.jpg",
    "artist": "Ximonic (Simo Räsänen)",
    "license": "CC BY-SA 4.0",
    "title": "Gentle but wide green aurora display over Levi, Kittilä, Lapland, Finland, 2023 September - 2"
  },
  "saariselka": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Kaunisp%C3%A4%C3%A4.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Kaunisp%C3%A4%C3%A4.jpg",
    "artist": "M.P., User:Argus_fin",
    "license": "CC BY-SA 3.0",
    "title": "Kaunispää"
  },
  "tromso": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Troms%C3%B8_sentrum_%285835702754%29.jpg/1280px-Troms%C3%B8_sentrum_%285835702754%29.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Troms%C3%B8_sentrum_(5835702754).jpg",
    "artist": "The Municipality of Tromsø from Tromsø, Norway",
    "license": "CC BY 2.0",
    "title": "Tromsø sentrum (5835702754)"
  },
  "aurora": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Aurora_borealis_over_Eielson_Air_Force_Base%2C_Alaska.jpg/1280px-Aurora_borealis_over_Eielson_Air_Force_Base%2C_Alaska.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Aurora_borealis_over_Eielson_Air_Force_Base,_Alaska.jpg",
    "artist": "United States Air Force photo by Senior Airman Joshua Strang",
    "license": "Public domain",
    "title": "Aurora borealis over Eielson Air Force Base, Alaska"
  },
  "bartolome": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/PinnacleRockBartolome.jpg/1280px-PinnacleRockBartolome.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:PinnacleRockBartolome.jpg",
    "artist": "Quasar Expeditions",
    "license": "CC BY 3.0",
    "title": "PinnacleRockBartolome"
  },
  "tortoise": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Galapagos_giant_tortoise_Geochelone_elephantopus.jpg/1280px-Galapagos_giant_tortoise_Geochelone_elephantopus.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Galapagos_giant_tortoise_Geochelone_elephantopus.jpg",
    "artist": "Mfield, Matthew Field",
    "license": "CC BY-SA 3.0",
    "title": "Galapagos giant tortoise Geochelone elephantopus"
  },
  "marine-iguana": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Amblyrhynchus_cristatus_%283838137696%29.jpg/1280px-Amblyrhynchus_cristatus_%283838137696%29.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Amblyrhynchus_cristatus_(3838137696).jpg",
    "artist": "RAF-YYC from Calgary, Canada",
    "license": "CC BY-SA 2.0",
    "title": "Amblyrhynchus cristatus (3838137696)"
  },
  "machu-picchu": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Machu_Picchu%2C_2023_%28012%29.jpg/1280px-Machu_Picchu%2C_2023_%28012%29.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Machu_Picchu,_2023_(012).jpg",
    "artist": "Draceane",
    "license": "CC BY-SA 4.0",
    "title": "Machu Picchu, 2023 (012)"
  },
  "japan-kinkakuji": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Golden_Pavilion_Kinkaku-ji_water_mirror_2024.jpg/1280px-Golden_Pavilion_Kinkaku-ji_water_mirror_2024.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Golden_Pavilion_Kinkaku-ji_water_mirror_2024.jpg",
    "artist": "Nacaru",
    "license": "CC BY-SA 4.0",
    "title": "Golden Pavilion Kinkaku-ji water mirror 2024"
  },
  "japan-fushimi": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine%2C_Kyoto%2C_Japan.jpg/1280px-Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine%2C_Kyoto%2C_Japan.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine,_Kyoto,_Japan.jpg",
    "artist": "Basile Morin",
    "license": "CC BY-SA 4.0",
    "title": "Torii path with lantern at Fushimi Inari Taisha Shrine, Kyoto, Japan"
  },
  "japan-niseko": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/%E3%83%8B%E3%82%BB%E3%82%B3%E6%9D%B1%E5%B1%B1%E3%82%B9%E3%82%AD%E3%83%BC%E5%A0%B42.JPG/1280px-%E3%83%8B%E3%82%BB%E3%82%B3%E6%9D%B1%E5%B1%B1%E3%82%B9%E3%82%AD%E3%83%BC%E5%A0%B42.JPG",
    "source": "https://commons.wikimedia.org/wiki/File:%E3%83%8B%E3%82%BB%E3%82%B3%E6%9D%B1%E5%B1%B1%E3%82%B9%E3%82%AD%E3%83%BC%E5%A0%B42.JPG",
    "artist": "Wakimasa",
    "license": "CC BY-SA 3.0",
    "title": "ニセコ東山スキー場2"
  },
  "thai-phangnga": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Dramatic_karst_landscape_of_Phang_Nga_Bay%2C_Thailand.jpg/1280px-Dramatic_karst_landscape_of_Phang_Nga_Bay%2C_Thailand.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Dramatic_karst_landscape_of_Phang_Nga_Bay,_Thailand.jpg",
    "artist": "Vyacheslav Argenberg",
    "license": "CC BY 4.0",
    "title": "Dramatic karst landscape of Phang Nga Bay, Thailand"
  },
  "thai-whitetemple": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Wat_Rong_Khun_-_Chiang_Rai.jpg/1280px-Wat_Rong_Khun_-_Chiang_Rai.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Wat_Rong_Khun_-_Chiang_Rai.jpg",
    "artist": "JJ Harrison (",
    "license": "CC BY-SA 3.0",
    "title": "Wat Rong Khun - Chiang Rai"
  },
  "vn-halong": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Ha_Long_Bay_in_2019.jpg/1280px-Ha_Long_Bay_in_2019.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Ha_Long_Bay_in_2019.jpg",
    "artist": "Taewangkorea",
    "license": "CC BY-SA 4.0",
    "title": "Ha Long Bay in 2019"
  },
  "vn-phuquoc": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Bai-sao-phu-quoc-tuonglamphotos.jpg/1280px-Bai-sao-phu-quoc-tuonglamphotos.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Bai-sao-phu-quoc-tuonglamphotos.jpg",
    "artist": "[//commons.wikimedia.org/wiki/User:Trantuonglam Trantuonglam]",
    "license": "CC BY-SA 4.0",
    "title": "Bai-sao-phu-quoc-tuonglamphotos"
  },
  "angkor-wat": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Angkor_Wat.jpg/1280px-Angkor_Wat.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Angkor_Wat.jpg",
    "artist": "Bjørn Christian Tørrissen",
    "license": "CC BY-SA 4.0",
    "title": "Angkor Wat"
  },
  "angkor-taprohm": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Ta_Prohm_%28III%29.jpg/1280px-Ta_Prohm_%28III%29.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Ta_Prohm_(III).jpg",
    "artist": "This Photo was taken by Supanut Arunoprayote. Feel free to use any of my images, but please mention me as the author and may send me a message. (สามารถใช้ภาพได้อิสระ แต่กรุณาใส่เครดิตผู้ถ่ายและอาจส่งข้อความบอกกล่าวด้วย) Please do not upload an updated image here without consultation with the Author. The author would like to make corrections only at his own source. This ensures that the changes are preserved.Please if you think that any changes should be required, please inform the author.Otherwise you can upload a new image with a new name. Please use one of the templates",
    "license": "CC BY 4.0",
    "title": "Ta Prohm (III)"
  },
  "laos-luangprabang": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Phou_si_Luang_Prabang_Laos_%E3%83%97%E3%83%BC%E3%82%B7%E3%83%BC%E3%81%AE%E4%B8%98_%E3%83%A9%E3%82%AA%E3%82%B9%E3%83%BB%E3%83%AB%E3%82%A2%E3%83%B3%E3%83%97%E3%83%A9%E3%83%90%E3%83%BC%E3%83%B3_DSCF6777.jpg/1280px-Phou_si_Luang_Prabang_Laos_%E3%83%97%E3%83%BC%E3%82%B7%E3%83%BC%E3%81%AE%E4%B8%98_%E3%83%A9%E3%82%AA%E3%82%B9%E3%83%BB%E3%83%AB%E3%82%A2%E3%83%B3%E3%83%97%E3%83%A9%E3%83%90%E3%83%BC%E3%83%B3_DSCF6777.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Phou_si_Luang_Prabang_Laos_%E3%83%97%E3%83%BC%E3%82%B7%E3%83%BC%E3%81%AE%E4%B8%98_%E3%83%A9%E3%82%AA%E3%82%B9%E3%83%BB%E3%83%AB%E3%82%A2%E3%83%B3%E3%83%97%E3%83%A9%E3%83%90%E3%83%BC%E3%83%B3_DSCF6777.jpg",
    "artist": "松岡明芳",
    "license": "CC BY-SA 3.0",
    "title": "Phou si Luang Prabang Laos プーシーの丘 ラオス・ルアンプラバーン DSCF6777"
  },
  "indo-komodo": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/202306_Varanus_komodoensis.jpg/1280px-202306_Varanus_komodoensis.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:202306_Varanus_komodoensis.jpg",
    "artist": "James Jolokia (james1203)",
    "license": "CC BY 4.0",
    "title": "202306 Varanus komodoensis"
  },
  "ph-elnido": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/El_Nido_Bay_December_2018.jpg/1280px-El_Nido_Bay_December_2018.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:El_Nido_Bay_December_2018.jpg",
    "artist": "Kalithecat00",
    "license": "CC BY-SA 4.0",
    "title": "El Nido Bay December 2018"
  },
  "nepal-everest": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Mt._Everest_from_Gokyo_Ri_November_5%2C_2012.jpg/1280px-Mt._Everest_from_Gokyo_Ri_November_5%2C_2012.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Mt._Everest_from_Gokyo_Ri_November_5,_2012.jpg",
    "artist": "Rdevany",
    "license": "CC BY-SA 3.0",
    "title": "Mt. Everest from Gokyo Ri November 5, 2012"
  },
  "nepal-chitwan": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Chitwan_swamp.jpg/1280px-Chitwan_swamp.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Chitwan_swamp.jpg",
    "artist": "Vadim Tolbatov",
    "license": "CC BY-SA 4.0",
    "title": "Chitwan swamp"
  },
  "oman-jebelakhdar": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Jebel_Akhdar_view.jpg/1280px-Jebel_Akhdar_view.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Jebel_Akhdar_view.jpg",
    "artist": "Philipp Weigell",
    "license": "CC BY 3.0",
    "title": "Jebel Akhdar view"
  },
  "seychelles-ladigue": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/La_Digue_asv2024-10_img22_Union_Estate.jpg/1280px-La_Digue_asv2024-10_img22_Union_Estate.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:La_Digue_asv2024-10_img22_Union_Estate.jpg",
    "artist": "A.Savin",
    "license": "FAL",
    "title": "La Digue asv2024-10 img22 Union Estate"
  },
  "aus-wineglass": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Wineglass_Bay_view_from_the_Beach.jpg/1280px-Wineglass_Bay_view_from_the_Beach.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Wineglass_Bay_view_from_the_Beach.jpg",
    "artist": "Jane6592",
    "license": "CC BY-SA 4.0",
    "title": "Wineglass Bay view from the Beach"
  },
  "aus-cradle": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Cradle_Mountain_Behind_Dove_Lake.jpg/1280px-Cradle_Mountain_Behind_Dove_Lake.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Cradle_Mountain_Behind_Dove_Lake.jpg",
    "artist": "Bjørn Christian Tørrissen",
    "license": "CC BY-SA 3.0",
    "title": "Cradle Mountain Behind Dove Lake"
  },
  "aus-remarkable": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Remarkable_Rocks_02.jpg/1280px-Remarkable_Rocks_02.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Remarkable_Rocks_02.jpg",
    "artist": "Bernard Gagnon",
    "license": "CC BY-SA 4.0",
    "title": "Remarkable Rocks 02"
  },
  "cr-arenal": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Arenal_volcano_%2870785p%29_%28cropped%29.jpg/1280px-Arenal_volcano_%2870785p%29_%28cropped%29.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Arenal_volcano_(70785p)_(cropped).jpg",
    "artist": "Rhododendrites",
    "license": "CC BY-SA 4.0",
    "title": "Arenal volcano (70785p) (cropped)"
  },
  "cr-monteverde": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Monteverde_bosque.jpg/1280px-Monteverde_bosque.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Monteverde_bosque.jpg",
    "artist": "Haakon S. Krohn",
    "license": "CC BY-SA 3.0",
    "title": "Monteverde bosque"
  },
  "belize-bluehole": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/6/61/Great_Blue_Hole.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Great_Blue_Hole.jpg",
    "artist": "U.S. Geological Survey (USGS)",
    "license": "Public domain",
    "title": "Great Blue Hole"
  },
  "guat-tikal": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Tikal_3.jpg/1280px-Tikal_3.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Tikal_3.jpg",
    "artist": "Mundo Maya",
    "license": "CC BY-SA 4.0",
    "title": "Tikal 3"
  },
  "br-iguazu": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Aerial_Foz_de_Igua%C3%A7u_26_Nov_2005.jpg/1280px-Aerial_Foz_de_Igua%C3%A7u_26_Nov_2005.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Aerial_Foz_de_Igua%C3%A7u_26_Nov_2005.jpg",
    "artist": "Mariordo (Mario Roberto Durán Ortiz)",
    "license": "CC BY-SA 4.0",
    "title": "Aerial Foz de Iguaçu 26 Nov 2005"
  },
  "br-sugarloaf": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/P%C3%A3o_de_A%C3%A7ucar_-_Sugarloaf_Mountain_-_Zuckerhut_-_2022.jpg/1280px-P%C3%A3o_de_A%C3%A7ucar_-_Sugarloaf_Mountain_-_Zuckerhut_-_2022.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:P%C3%A3o_de_A%C3%A7ucar_-_Sugarloaf_Mountain_-_Zuckerhut_-_2022.jpg",
    "artist": "Arne Müseler",
    "license": "CC BY-SA 3.0 de",
    "title": "Pão de Açucar - Sugarloaf Mountain - Zuckerhut - 2022"
  },
  "co-cocora": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Valle_del_cocora_-_general_view.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Valle_del_cocora_-_general_view.jpg",
    "artist": "Angela Calle and Daniel Di Palma",
    "license": "CC BY-SA 4.0",
    "title": "Valle del cocora - general view"
  },
  "cl-moai": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/5/50/AhuTongariki.JPG",
    "source": "https://commons.wikimedia.org/wiki/File:AhuTongariki.JPG",
    "artist": "Ian Sewell",
    "license": "CC BY 2.5",
    "title": "AhuTongariki"
  },
  "cl-valleluna": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Valle_della_Luna_01.jpg/1280px-Valle_della_Luna_01.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Valle_della_Luna_01.jpg",
    "artist": "Davide guallini",
    "license": "CC BY-SA 3.0",
    "title": "Valle della Luna 01"
  },
  "stbarts-gustavia": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Gustavia_Harbor%2C_Saint-Barth%C3%A9lemy.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Gustavia_Harbor,_Saint-Barth%C3%A9lemy.jpg",
    "artist": "Originally uploaded at en.wikipedia by en:User:Evaneggers as en:Image:Stb.jpg",
    "license": "CC BY-SA 3.0",
    "title": "Gustavia Harbor, Saint-Barthélemy"
  },
  "bw-okavango": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Okavango_Delta%2C_Botswana1.jpg/1280px-Okavango_Delta%2C_Botswana1.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Okavango_Delta,_Botswana1.jpg",
    "artist": "Joachim Huber",
    "license": "CC BY-SA 2.0",
    "title": "Okavango Delta, Botswana1"
  },
  "bw-vicfalls": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Cataratas_Victoria%2C_Zambia-Zimbabue%2C_2018-07-27%2C_DD_04.jpg/1280px-Cataratas_Victoria%2C_Zambia-Zimbabue%2C_2018-07-27%2C_DD_04.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Cataratas_Victoria,_Zambia-Zimbabue,_2018-07-27,_DD_04.jpg",
    "artist": "Diego Delso",
    "license": "CC BY-SA 4.0",
    "title": "Cataratas Victoria, Zambia-Zimbabue, 2018-07-27, DD 04"
  },
  "na-deadvlei": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Dead_Vlei_4.jpg/1280px-Dead_Vlei_4.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Dead_Vlei_4.jpg",
    "artist": "Ikiwaner",
    "license": "GFDL 1.2",
    "title": "Dead Vlei 4"
  },
  "ma-ergchebbi": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Merzouga_Dunes_2011.jpg/1280px-Merzouga_Dunes_2011.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Merzouga_Dunes_2011.jpg",
    "artist": "Bjørn Christian Tørrissen",
    "license": "CC BY-SA 3.0",
    "title": "Merzouga Dunes 2011"
  },
  "ma-aitbenhaddou": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Ksar_A%C3%AFt_Benhaddou%2C_Marocco_%28%D8%A3%D9%8A%D8%AA_%D8%A8%D9%86_%D8%AD%D8%AF%D9%88%D8%8C_%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%2C_%E2%B4%B0%E2%B5%A2%E2%B5%9C_%E2%B5%83%E2%B4%B0%E2%B4%B7%E2%B4%B7%E2%B5%93%29.jpg/1280px-Ksar_A%C3%AFt_Benhaddou%2C_Marocco_%28%D8%A3%D9%8A%D8%AA_%D8%A8%D9%86_%D8%AD%D8%AF%D9%88%D8%8C_%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%2C_%E2%B4%B0%E2%B5%A2%E2%B5%9C_%E2%B5%83%E2%B4%B0%E2%B4%B7%E2%B4%B7%E2%B5%93%29.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Ksar_A%C3%AFt_Benhaddou,_Marocco_(%D8%A3%D9%8A%D8%AA_%D8%A8%D9%86_%D8%AD%D8%AF%D9%88%D8%8C_%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8,_%E2%B4%B0%E2%B5%A2%E2%B5%9C_%E2%B5%83%E2%B4%B0%E2%B4%B7%E2%B4%B7%E2%B5%93).jpg",
    "artist": "Petar Milošević",
    "license": "CC BY-SA 4.0",
    "title": "Ksar Aït Benhaddou, Marocco (أيت بن حدو، المغرب, ⴰⵢⵜ ⵃⴰⴷⴷⵓ)"
  },
  "is-jokulsarlon": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/J%C3%B6kuls%C3%A1rl%C3%B3n_lagoon_in_southeastern_Iceland.jpg/1280px-J%C3%B6kuls%C3%A1rl%C3%B3n_lagoon_in_southeastern_Iceland.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:J%C3%B6kuls%C3%A1rl%C3%B3n_lagoon_in_southeastern_Iceland.jpg",
    "artist": "Molechaser",
    "license": "CC BY-SA 2.0",
    "title": "Jökulsárlón lagoon in southeastern Iceland"
  },
  "ch-matterhorn": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Matterhorn_from_Domh%C3%BCtte_-_2.jpg/1280px-Matterhorn_from_Domh%C3%BCtte_-_2.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Matterhorn_from_Domh%C3%BCtte_-_2.jpg",
    "artist": "Photo: chil, on Camptocamp.org",
    "license": "CC BY-SA 3.0",
    "title": "Matterhorn from Domhütte - 2"
  },
  "ch-glacierexpress": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/CH_Landwasser_2.jpg/1280px-CH_Landwasser_2.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:CH_Landwasser_2.jpg",
    "artist": "Daniel Schwen",
    "license": "CC BY-SA 2.5",
    "title": "CH Landwasser 2"
  },
  "mu-lemorne": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Le_Morne_Peninsula_in_Mauritius_%2853697779236%29.jpg/1280px-Le_Morne_Peninsula_in_Mauritius_%2853697779236%29.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Le_Morne_Peninsula_in_Mauritius_(53697779236).jpg",
    "artist": "\"dronepicr\"",
    "license": "CC BY 2.0",
    "title": "Le Morne Peninsula in Mauritius (53697779236)"
  },
  "mu-chamarel": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/2006-10-02_Chamarel_Waterfalls.jpg/1280px-2006-10-02_Chamarel_Waterfalls.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:2006-10-02_Chamarel_Waterfalls.jpg",
    "artist": "Hansueli Krapf",
    "license": "CC BY-SA 3.0",
    "title": "2006-10-02 Chamarel Waterfalls"
  },
  "na-etosha": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Dust_Cloud_in_Etosha_National_Park.jpg/1280px-Dust_Cloud_in_Etosha_National_Park.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Dust_Cloud_in_Etosha_National_Park.jpg",
    "artist": "Yathin S Krishnappa",
    "license": "CC BY-SA 3.0",
    "title": "Dust Cloud in Etosha National Park"
  },
  "oman-nizwa": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Nizwa_%285%29.jpg/1280px-Nizwa_%285%29.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Nizwa_(5).jpg",
    "artist": "Andries Oudshoorn",
    "license": "CC BY-SA 2.0",
    "title": "Nizwa (5)"
  },
  "indo-bali-temple": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Pura_Ulun_Danu_Bratan%2C_2022.jpg/1280px-Pura_Ulun_Danu_Bratan%2C_2022.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Pura_Ulun_Danu_Bratan,_2022.jpg",
    "artist": "LukeTriton",
    "license": "CC BY-SA 4.0",
    "title": "Pura Ulun Danu Bratan, 2022"
  },
  "saudi-alula": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Al_Ula_%286748577917%29.jpg/1280px-Al_Ula_%286748577917%29.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Al_Ula_(6748577917).jpg",
    "artist": "Sammy Six",
    "license": "CC BY 2.0",
    "title": "Al Ula (6748577917)"
  },
  "danum-orangutan": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Tanjung_Puting30477.jpg/1280px-Tanjung_Puting30477.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Tanjung_Puting30477.jpg",
    "artist": "Nanosanchez",
    "license": "CC BY-SA 4.0",
    "title": "Tanjung Puting30477"
  },
  "penang-georgetown": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Skyline_of_George_Town%2C_Penang_at_night_Nov2024-29-17.jpg/1280px-Skyline_of_George_Town%2C_Penang_at_night_Nov2024-29-17.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Skyline_of_George_Town,_Penang_at_night_Nov2024-29-17.jpg",
    "artist": "HundenvonPenang",
    "license": "CC BY-SA 4.0",
    "title": "Skyline of George Town, Penang at night Nov2024-29-17"
  },
  "bali-ricefields": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Ubud_%2849818456887%29.jpg/1280px-Ubud_%2849818456887%29.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Ubud_(49818456887).jpg",
    "artist": "Jorge Franganillo",
    "license": "CC BY 2.0",
    "title": "Ubud (49818456887)"
  },
  "punta-del-este": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/4/47/%D0%9F%D1%83%D0%BD%D1%82%D0%B0-%D0%B4%D0%B5%D0%BB%D1%8C-%D0%AD%D1%81%D1%82%D0%B5.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:%D0%9F%D1%83%D0%BD%D1%82%D0%B0-%D0%B4%D0%B5%D0%BB%D1%8C-%D0%AD%D1%81%D1%82%D0%B5.jpg",
    "artist": "Марсело Кампи",
    "license": "CC BY-SA 3.0",
    "title": "Пунта-дель-Эсте"
  },
  "buenos-aires-recoleta": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/9/95/Recoleta_montage.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Recoleta_montage.jpg",
    "artist": "Bleff",
    "license": "CC BY-SA 3.0",
    "title": "Recoleta montage"
  },
  "amazon-tambopata": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/PuertoMaldonado_LagoSandoval3.jpg/1280px-PuertoMaldonado_LagoSandoval3.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:PuertoMaldonado_LagoSandoval3.jpg",
    "artist": "Håkan Svensson (Xauxa)",
    "license": "CC BY 2.5",
    "title": "PuertoMaldonado LagoSandoval3"
  },
  "alhambra": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg/1280px-Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg",
    "artist": "Jebulon",
    "license": "CC0",
    "title": "Dawn Charles V Palace Alhambra Granada Andalusia Spain"
  },
  "seville-plaza": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Plaza_de_Espa%C3%B1a_%28Sevilla%29_-_01.jpg/1280px-Plaza_de_Espa%C3%B1a_%28Sevilla%29_-_01.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Plaza_de_Espa%C3%B1a_(Sevilla)_-_01.jpg",
    "artist": "Carlos Delgado",
    "license": "CC BY-SA 4.0",
    "title": "Plaza de España (Sevilla) - 01"
  },
  "teide": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Roque_Cinchado_und_Teide.jpg/1280px-Roque_Cinchado_und_Teide.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Roque_Cinchado_und_Teide.jpg",
    "artist": "Thomas Wolf, www.foto-tw.de",
    "license": "CC BY-SA 3.0 de",
    "title": "Roque Cinchado und Teide"
  },
  "san-sebastian": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/San_Sebasti%C3%A1n_-_Ayuntamiento_10.jpg/1280px-San_Sebasti%C3%A1n_-_Ayuntamiento_10.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:San_Sebasti%C3%A1n_-_Ayuntamiento_10.jpg",
    "artist": "Zarateman",
    "license": "CC0",
    "title": "San Sebastián - Ayuntamiento 10"
  },
  "acropolis": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/1029_Acropolis_of_Athens_in_Greece_at_night_Photo_by_Giles_Laurent.jpg/1280px-1029_Acropolis_of_Athens_in_Greece_at_night_Photo_by_Giles_Laurent.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:1029_Acropolis_of_Athens_in_Greece_at_night_Photo_by_Giles_Laurent.jpg",
    "artist": "Giles Laurent",
    "license": "CC BY-SA 4.0",
    "title": "1029 Acropolis of Athens in Greece at night Photo by Giles Laurent"
  },
  "navarino-bay": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Pylos-sfaktiria.JPG/1280px-Pylos-sfaktiria.JPG",
    "source": "https://commons.wikimedia.org/wiki/File:Pylos-sfaktiria.JPG",
    "artist": "Flyax",
    "license": "CC BY-SA 3.0",
    "title": "Pylos-sfaktiria"
  },

  // ---- Resort photos ----
  "conrad-rangali": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Conrad_Maldives_Rangali_Island_Resort_%E2%80%94_waterfront_and_terrace_%28evening%29_2016-06-23.jpg/1280px-Conrad_Maldives_Rangali_Island_Resort_%E2%80%94_waterfront_and_terrace_%28evening%29_2016-06-23.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Conrad_Maldives_Rangali_Island_Resort_%E2%80%94_waterfront_and_terrace_(evening)_2016-06-23.jpg",
    "artist": "Ranojit Chakraborty",
    "license": "CC BY-SA 4.0",
    "title": "Conrad Maldives Rangali Island Resort — waterfront and terrace (evening) 2016-06-23"
  },
  "ithaa": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Ithaa_%28Undersea_Restaurant%29.jpg/1280px-Ithaa_%28Undersea_Restaurant%29.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Ithaa_(Undersea_Restaurant).jpg",
    "artist": "Martin Henke",
    "license": "CC BY 3.0",
    "title": "Ithaa (Undersea Restaurant)"
  },
  "ithaa-inside": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Ithaa_inside.JPG/1280px-Ithaa_inside.JPG",
    "source": "https://commons.wikimedia.org/wiki/File:Ithaa_inside.JPG",
    "artist": "Alexey Potov - Noblige",
    "license": "CC BY-SA 2.5",
    "title": "Ithaa inside"
  },
  "hadahaa-1": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Park_Hyatt_Hadahaa_Maldives1.jpg/1280px-Park_Hyatt_Hadahaa_Maldives1.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Park_Hyatt_Hadahaa_Maldives1.jpg",
    "artist": "Ben & Gab",
    "license": "CC BY 2.0",
    "title": "Park Hyatt Hadahaa Maldives1"
  },
  "hadahaa-2": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Park_Hyatt_Hadahaa_Maldives2.jpg/1280px-Park_Hyatt_Hadahaa_Maldives2.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Park_Hyatt_Hadahaa_Maldives2.jpg",
    "artist": "Ben & Gab",
    "license": "CC BY 2.0",
    "title": "Park Hyatt Hadahaa Maldives2"
  },
  "hadahaa-3": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Park_Hyatt_Hadahaa_Maldives3.jpg/1280px-Park_Hyatt_Hadahaa_Maldives3.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Park_Hyatt_Hadahaa_Maldives3.jpg",
    "artist": "Ben & Gab",
    "license": "CC BY 2.0",
    "title": "Park Hyatt Hadahaa Maldives3"
  },
  "soneva-fushi": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Soneva_Fushi_-_panoramio_%281%29.jpg/1280px-Soneva_Fushi_-_panoramio_%281%29.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Soneva_Fushi_-_panoramio_(1).jpg",
    "artist": "Ameer Dawood",
    "license": "CC BY 3.0",
    "title": "Soneva Fushi - panoramio (1)"
  },
  "fs-bora-20": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/DL2A_Four_Seasons_Bora_Bora_20.jpg/1280px-DL2A_Four_Seasons_Bora_Bora_20.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:DL2A_Four_Seasons_Bora_Bora_20.jpg",
    "artist": "Didierlefort",
    "license": "CC BY-SA 3.0",
    "title": "DL2A Four Seasons Bora Bora 20"
  },
  "fs-bora-8": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/DL2A_Four_Seasons_Bora_Bora_8.jpg/1280px-DL2A_Four_Seasons_Bora_Bora_8.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:DL2A_Four_Seasons_Bora_Bora_8.jpg",
    "artist": "Didierlefort",
    "license": "CC BY-SA 3.0",
    "title": "DL2A Four Seasons Bora Bora 8"
  },
  "meridien-bora": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/3/33/DL2A_Meridien_Bora_Bora.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:DL2A_Meridien_Bora_Bora.jpg",
    "artist": "Didierlefort",
    "license": "CC BY-SA 3.0",
    "title": "DL2A Meridien Bora Bora"
  },
  "north-island": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/6/60/North_Island_Seychelles.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:North_Island_Seychelles.jpg",
    "artist": "Gerard Larose, STB",
    "license": "CC BY 4.0",
    "title": "North Island Seychelles"
  },
  "north-island-petite-anse": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/8/85/Petite_Anse_North_Island_Seychelles.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Petite_Anse_North_Island_Seychelles.jpg",
    "artist": "Hajira Amla, Seychelles News Agency",
    "license": "CC BY 4.0",
    "title": "Petite Anse North Island Seychelles"
  },
  "north-island-shores": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/8/82/North_Island_Seychelles_shores.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:North_Island_Seychelles_shores.jpg",
    "artist": "Joe Laurence, Seychelles News Agency",
    "license": "CC BY 4.0",
    "title": "North Island Seychelles shores"
  },
  "bulgari-ocean": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bulgari_Ocean_View_%287070507937%29.jpg/1280px-Bulgari_Ocean_View_%287070507937%29.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Bulgari_Ocean_View_(7070507937).jpg",
    "artist": "Simon_sees from Australia",
    "license": "CC BY 2.0",
    "title": "Bulgari Ocean View (7070507937)"
  },
  "bulgari-pool": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bulgari_Resort_Bali_Main_Pool_%2811267201646%29.jpg/1280px-Bulgari_Resort_Bali_Main_Pool_%2811267201646%29.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Bulgari_Resort_Bali_Main_Pool_(11267201646).jpg",
    "artist": "Simon_sees",
    "license": "CC BY 2.0",
    "title": "Bulgari Resort Bali Main Pool (11267201646)"
  },
};
