exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('planets')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('planets').insert([
        {
          "name": "Tatooine",
          "rotation_period": 23,
          "orbital_period": 304,
          "diameter": 10465,
          "climate": "arid",
          "gravity": "1 standard",
          "terrain": "desert",
          "surface_water": 1,
          "population": 200000,
          "url": "http://swapi.co/api/planets/1/"
        }, {
          "name": "Alderaan",
          "rotation_period": 24,
          "orbital_period": 364,
          "diameter": 12500,
          "climate": "temperate",
          "gravity": "1 standard",
          "terrain": "grasslands, mountains",
          "surface_water": 40,
          "population": 2000000000,
          "url": "http://swapi.co/api/planets/2/"
        }, {
          "name": "Yavin IV",
          "rotation_period": 24,
          "orbital_period": 4818,
          "diameter": 10200,
          "climate": "temperate, tropical",
          "gravity": "1 standard",
          "terrain": "jungle, rainforests",
          "surface_water": 8,
          "population": 1000,
          "url": "http://swapi.co/api/planets/3/"
        }, {
          "name": "Hoth",
          "rotation_period": 23,
          "orbital_period": 549,
          "diameter": 7200,
          "climate": "frozen",
          "gravity": "1.1 standard",
          "terrain": "tundra, ice caves, mountain ranges",
          "surface_water": 100,
          "url": "http://swapi.co/api/planets/4/"
        }, {
          "name": "Dagobah",
          "rotation_period": 23,
          "orbital_period": 341,
          "diameter": 8900,
          "climate": "murky",
          "gravity": "N/A",
          "terrain": "swamp, jungles",
          "surface_water": 8,
          "url": "http://swapi.co/api/planets/5/"
        }, {
          "name": "Bespin",
          "rotation_period": 12,
          "orbital_period": 5110,
          "diameter": 118000,
          "climate": "temperate",
          "gravity": "1.5 (surface), 1 standard (Cloud City)",
          "terrain": "gas giant",
          "surface_water": 0,
          "population": 6000000,
          "url": "http://swapi.co/api/planets/6/"
        }, {
          "name": "Endor",
          "rotation_period": 18,
          "orbital_period": 402,
          "diameter": 4900,
          "climate": "temperate",
          "gravity": "0.85 standard",
          "terrain": "forests, mountains, lakes",
          "surface_water": 8,
          "population": 30000000,
          "url": "http://swapi.co/api/planets/7/"
        }, {
          "name": "Naboo",
          "rotation_period": 26,
          "orbital_period": 312,
          "diameter": 12120,
          "climate": "temperate",
          "gravity": "1 standard",
          "terrain": "grassy hills, swamps, forests, mountains",
          "surface_water": 12,
          "population": 4500000000,
          "url": "http://swapi.co/api/planets/8/"
        }, {
          "name": "Coruscant",
          "rotation_period": 24,
          "orbital_period": 368,
          "diameter": 12240,
          "climate": "temperate",
          "gravity": "1 standard",
          "terrain": "cityscape, mountains",
          "surface_water": "unknown",
          "population": 1000000000000,
          "url": "http://swapi.co/api/planets/9/"
        }, {
          "name": "Kamino",
          "rotation_period": 27,
          "orbital_period": 463,
          "diameter": 19720,
          "climate": "temperate",
          "gravity": "1 standard",
          "terrain": "ocean",
          "surface_water": 100,
          "population": 1000000000,
          "url": "http://swapi.co/api/planets/10/"
        }, {
          "name": "Geonosis",
          "rotation_period": 30,
          "orbital_period": 256,
          "diameter": 11370,
          "climate": "temperate, arid",
          "gravity": "0.9 standard",
          "terrain": "rock, desert, mountain, barren",
          "surface_water": 5,
          "population": 100000000000,
          "url": "http://swapi.co/api/planets/11/"
        }, {
          "name": "Utapau",
          "rotation_period": 27,
          "orbital_period": 351,
          "diameter": 12900,
          "climate": "temperate, arid, windy",
          "gravity": "1 standard",
          "terrain": "scrublands, savanna, canyons, sinkholes",
          "surface_water": 0.9,
          "population": 95000000,
          "url": "http://swapi.co/api/planets/12/"
        }, {
          "name": "Mustafar",
          "rotation_period": 36,
          "orbital_period": 412,
          "diameter": 4200,
          "climate": "hot",
          "gravity": "1 standard",
          "terrain": "volcanoes, lava rivers, mountains, caves",
          "surface_water": 0,
          "population": 20000,
          "url": "http://swapi.co/api/planets/13/"
        }, {
          "name": "Kashyyyk",
          "rotation_period": 26,
          "orbital_period": 381,
          "diameter": 12765,
          "climate": "tropical",
          "gravity": "1 standard",
          "terrain": "jungle, forests, lakes, rivers",
          "surface_water": 60,
          "population": 45000000,
          "url": "http://swapi.co/api/planets/14/"
        }, {
          "name": "Polis Massa",
          "rotation_period": 24,
          "orbital_period": 590,
          "climate": "artificial temperate",
          "gravity": "0.56 standard",
          "terrain": "airless asteroid",
          "surface_water": 0,
          "population": 1000000,
          "url": "http://swapi.co/api/planets/15/"
        }, {
          "name": "Mygeeto",
          "rotation_period": 12,
          "orbital_period": 167,
          "diameter": 10088,
          "climate": "frigid",
          "gravity": "1 standard",
          "terrain": "glaciers, mountains, ice canyons",
          "surface_water": "unknown",
          "population": 19000000,
          "url": "http://swapi.co/api/planets/16/"
        }, {
          "name": "Felucia",
          "rotation_period": 34,
          "orbital_period": 231,
          "diameter": 9100,
          "climate": "hot, humid",
          "gravity": "0.75 standard",
          "terrain": "fungus forests",
          "surface_water": "unknown",
          "population": 8500000,
          "url": "http://swapi.co/api/planets/17/"
        }, {
          "name": "Cato Neimoidia",
          "rotation_period": 25,
          "orbital_period": 278,
          "climate": "temperate, moist",
          "gravity": "1 standard",
          "terrain": "mountains, fields, forests, rock arches",
          "surface_water": "unknown",
          "population": 10000000,
          "url": "http://swapi.co/api/planets/18/"
        }, {
          "name": "Saleucami",
          "rotation_period": 26,
          "orbital_period": 392,
          "diameter": 14920,
          "climate": "hot",
          "gravity": "unknown",
          "terrain": "caves, desert, mountains, volcanoes",
          "surface_water": "unknown",
          "population": 1400000000,
          "url": "http://swapi.co/api/planets/19/"
        }, {
          "name": "Stewjon",
          "diameter": 0,
          "climate": "temperate",
          "gravity": "1 standard",
          "terrain": "grass",
          "surface_water": "unknown",
          "url": "http://swapi.co/api/planets/20/"
        }, {
          "name": "Eriadu",
          "rotation_period": 24,
          "orbital_period": 360,
          "diameter": 13490,
          "climate": "polluted",
          "gravity": "1 standard",
          "terrain": "cityscape",
          "surface_water": "unknown",
          "population": 22000000000,
          "url": "http://swapi.co/api/planets/21/"
        }, {
          "name": "Corellia",
          "rotation_period": 25,
          "orbital_period": 329,
          "diameter": 11000,
          "climate": "temperate",
          "gravity": "1 standard",
          "terrain": "plains, urban, hills, forests",
          "surface_water": 70,
          "population": 3000000000,
          "url": "http://swapi.co/api/planets/22/"
        }, {
          "name": "Rodia",
          "rotation_period": 29,
          "orbital_period": 305,
          "diameter": 7549,
          "climate": "hot",
          "gravity": "1 standard",
          "terrain": "jungles, oceans, urban, swamps",
          "surface_water": 60,
          "population": 1300000000,
          "url": "http://swapi.co/api/planets/23/"
        }, {
          "name": "Nal Hutta",
          "rotation_period": 87,
          "orbital_period": 413,
          "diameter": 12150,
          "climate": "temperate",
          "gravity": "1 standard",
          "terrain": "urban, oceans, swamps, bogs",
          "surface_water": "unknown",
          "population": 7000000000,
          "url": "http://swapi.co/api/planets/24/"
        }, {
          "name": "Dantooine",
          "rotation_period": 25,
          "orbital_period": 378,
          "diameter": 9830,
          "climate": "temperate",
          "gravity": "1 standard",
          "terrain": "oceans, savannas, mountains, grasslands",
          "surface_water": "unknown",
          "population": 1000,
          "url": "http://swapi.co/api/planets/25/"
        }, {
          "name": "Bestine IV",
          "rotation_period": 26,
          "orbital_period": 680,
          "diameter": 6400,
          "climate": "temperate",
          "gravity": "unknown",
          "terrain": "rocky islands, oceans",
          "surface_water": 98,
          "population": 62000000,
          "url": "http://swapi.co/api/planets/26/"
        }, {
          "name": "Ord Mantell",
          "rotation_period": 26,
          "orbital_period": 334,
          "diameter": 14050,
          "climate": "temperate",
          "gravity": "1 standard",
          "terrain": "plains, seas, mesas",
          "surface_water": 10,
          "population": 4000000000,
          "url": "http://swapi.co/api/planets/27/"
        }, {
          "name": "unknown",
          "rotation_period": 0,
          "orbital_period": 0,
          "diameter": 0,
          "climate": "unknown",
          "gravity": "unknown",
          "terrain": "unknown",
          "surface_water": "unknown",
          "url": "http://swapi.co/api/planets/28/"
        }, {
          "name": "Trandosha",
          "rotation_period": 25,
          "orbital_period": 371,
          "diameter": 0,
          "climate": "arid",
          "gravity": "0.62 standard",
          "terrain": "mountains, seas, grasslands, deserts",
          "surface_water": "unknown",
          "population": 42000000,
          "url": "http://swapi.co/api/planets/29/"
        }, {
          "name": "Socorro",
          "rotation_period": 20,
          "orbital_period": 326,
          "diameter": 0,
          "climate": "arid",
          "gravity": "1 standard",
          "terrain": "deserts, mountains",
          "surface_water": "unknown",
          "population": 300000000,
          "url": "http://swapi.co/api/planets/30/"
        }, {
          "name": "Mon Cala",
          "rotation_period": 21,
          "orbital_period": 398,
          "diameter": 11030,
          "climate": "temperate",
          "gravity": 1,
          "terrain": "oceans, reefs, islands",
          "surface_water": 100,
          "population": 27000000000,
          "url": "http://swapi.co/api/planets/31/"
        }, {
          "name": "Chandrila",
          "rotation_period": 20,
          "orbital_period": 368,
          "diameter": 13500,
          "climate": "temperate",
          "gravity": 1,
          "terrain": "plains, forests",
          "surface_water": 40,
          "population": 1200000000,
          "url": "http://swapi.co/api/planets/32/"
        }, {
          "name": "Sullust",
          "rotation_period": 20,
          "orbital_period": 263,
          "diameter": 12780,
          "climate": "superheated",
          "gravity": 1,
          "terrain": "mountains, volcanoes, rocky deserts",
          "surface_water": 5,
          "population": 18500000000,
          "url": "http://swapi.co/api/planets/33/"
        }, {
          "name": "Toydaria",
          "rotation_period": 21,
          "orbital_period": 184,
          "diameter": 7900,
          "climate": "temperate",
          "gravity": 1,
          "terrain": "swamps, lakes",
          "surface_water": "unknown",
          "population": 11000000,
          "url": "http://swapi.co/api/planets/34/"
        }, {
          "name": "Malastare",
          "rotation_period": 26,
          "orbital_period": 201,
          "diameter": 18880,
          "climate": "arid, temperate, tropical",
          "gravity": 1.56,
          "terrain": "swamps, deserts, jungles, mountains",
          "surface_water": "unknown",
          "population": 2000000000,
          "url": "http://swapi.co/api/planets/35/"
        }, {
          "name": "Dathomir",
          "rotation_period": 24,
          "orbital_period": 491,
          "diameter": 10480,
          "climate": "temperate",
          "gravity": 0.9,
          "terrain": "forests, deserts, savannas",
          "surface_water": "unknown",
          "population": 5200,
          "url": "http://swapi.co/api/planets/36/"
        }, {
          "name": "Ryloth",
          "rotation_period": 30,
          "orbital_period": 305,
          "diameter": 10600,
          "climate": "temperate, arid, subartic",
          "gravity": 1,
          "terrain": "mountains, valleys, deserts, tundra",
          "surface_water": 5,
          "population": 1500000000,
          "url": "http://swapi.co/api/planets/37/"
        }, {
          "name": "Aleen Minor",
          "climate": "unknown",
          "gravity": "unknown",
          "terrain": "unknown",
          "surface_water": "unknown",
          "url": "http://swapi.co/api/planets/38/"
        }, {
          "name": "Vulpter",
          "rotation_period": 22,
          "orbital_period": 391,
          "diameter": 14900,
          "climate": "temperate, artic",
          "gravity": 1,
          "terrain": "urban, barren",
          "surface_water": "unknown",
          "population": 421000000,
          "url": "http://swapi.co/api/planets/39/"
        }, {
          "name": "Troiken",
          "climate": "unknown",
          "gravity": "unknown",
          "terrain": "desert, tundra, rainforests, mountains",
          "surface_water": "unknown",
          "url": "http://swapi.co/api/planets/40/"
        }, {
          "name": "Tund",
          "rotation_period": 48,
          "orbital_period": 1770,
          "diameter": 12190,
          "climate": "unknown",
          "gravity": "unknown",
          "terrain": "barren, ash",
          "surface_water": "unknown",
          "population": 0,
          "url": "http://swapi.co/api/planets/41/"
        }, {
          "name": "Haruun Kal",
          "rotation_period": 25,
          "orbital_period": 383,
          "diameter": 10120,
          "climate": "temperate",
          "gravity": 0.98,
          "terrain": "toxic cloudsea, plateaus, volcanoes",
          "surface_water": "unknown",
          "population": 705300,
          "url": "http://swapi.co/api/planets/42/"
        }, {
          "name": "Cerea",
          "rotation_period": 27,
          "orbital_period": 386,
          "climate": "temperate",
          "gravity": 1,
          "terrain": "verdant",
          "surface_water": 20,
          "population": 450000000,
          "url": "http://swapi.co/api/planets/43/"
        }, {
          "name": "Glee Anselm",
          "rotation_period": 33,
          "orbital_period": 206,
          "diameter": 15600,
          "climate": "tropical, temperate",
          "gravity": 1,
          "terrain": "lakes, islands, swamps, seas",
          "surface_water": 80,
          "population": 500000000,
          "url": "http://swapi.co/api/planets/44/"
        }, {
          "name": "Iridonia",
          "rotation_period": 29,
          "orbital_period": 413,
          "climate": "unknown",
          "gravity": "unknown",
          "terrain": "rocky canyons, acid pools",
          "surface_water": "unknown",
          "url": "http://swapi.co/api/planets/45/"
        }, {
          "name": "Tholoth",
          "climate": "unknown",
          "gravity": "unknown",
          "terrain": "unknown",
          "surface_water": "unknown",
          "url": "http://swapi.co/api/planets/46/"
        }, {
          "name": "Iktotch",
          "rotation_period": 22,
          "orbital_period": 481,
          "climate": "arid, rocky, windy",
          "gravity": 1,
          "terrain": "rocky",
          "surface_water": "unknown",
          "url": "http://swapi.co/api/planets/47/"
        }, {
          "name": "Quermia",
          "climate": "unknown",
          "gravity": "unknown",
          "terrain": "unknown",
          "surface_water": "unknown",
          "url": "http://swapi.co/api/planets/48/"
        }, {
          "name": "Dorin",
          "rotation_period": 22,
          "orbital_period": 409,
          "diameter": 13400,
          "climate": "temperate",
          "gravity": 1,
          "terrain": "unknown",
          "surface_water": "unknown",
          "url": "http://swapi.co/api/planets/49/"
        }, {
          "name": "Champala",
          "rotation_period": 27,
          "orbital_period": 318,
          "climate": "temperate",
          "gravity": 1,
          "terrain": "oceans, rainforests, plateaus",
          "surface_water": "unknown",
          "population": 3500000000,
          "url": "http://swapi.co/api/planets/50/"
        }, {
          "name": "Mirial",
          "climate": "unknown",
          "gravity": "unknown",
          "terrain": "deserts",
          "surface_water": "unknown",
          "url": "http://swapi.co/api/planets/51/"
        }, {
          "name": "Serenno",
          "climate": "unknown",
          "gravity": "unknown",
          "terrain": "rainforests, rivers, mountains",
          "surface_water": "unknown",
          "url": "http://swapi.co/api/planets/52/"
        }, {
          "name": "Concord Dawn",
          "climate": "unknown",
          "gravity": "unknown",
          "terrain": "jungles, forests, deserts",
          "surface_water": "unknown",
          "url": "http://swapi.co/api/planets/53/"
        }, {
          "name": "Zolan",
          "climate": "unknown",
          "gravity": "unknown",
          "terrain": "unknown",
          "surface_water": "unknown",
          "url": "http://swapi.co/api/planets/54/"
        }, {
          "name": "Ojom",
          "climate": "frigid",
          "gravity": "unknown",
          "terrain": "oceans, glaciers",
          "surface_water": 100,
          "population": 500000000,
          "url": "http://swapi.co/api/planets/55/"
        }, {
          "name": "Skako",
          "rotation_period": 27,
          "orbital_period": 384,
          "climate": "temperate",
          "gravity": 1,
          "terrain": "urban, vines",
          "surface_water": "unknown",
          "population": 500000000000,
          "url": "http://swapi.co/api/planets/56/"
        }, {
          "name": "Muunilinst",
          "rotation_period": 28,
          "orbital_period": 412,
          "diameter": 13800,
          "climate": "temperate",
          "gravity": 1,
          "terrain": "plains, forests, hills, mountains",
          "surface_water": 25,
          "population": 5000000000,
          "url": "http://swapi.co/api/planets/57/"
        }, {
          "name": "Shili",
          "climate": "temperate",
          "gravity": 1,
          "terrain": "cities, savannahs, seas, plains",
          "surface_water": "unknown",
          "url": "http://swapi.co/api/planets/58/"
        }, {
          "name": "Kalee",
          "rotation_period": 23,
          "orbital_period": 378,
          "diameter": 13850,
          "climate": "arid, temperate, tropical",
          "gravity": 1,
          "terrain": "rainforests, cliffs, canyons, seas",
          "surface_water": "unknown",
          "population": 4000000000,
          "url": "http://swapi.co/api/planets/59/"
        }, {
          "name": "Umbara",
          "climate": "unknown",
          "gravity": "unknown",
          "terrain": "unknown",
          "surface_water": "unknown",
          "url": "http://swapi.co/api/planets/60/"
        }, {
          "name": "Jakku",
          "climate": "unknown",
          "gravity": "unknown",
          "terrain": "deserts",
          "surface_water": "unknown",
          "url": "http://swapi.co/api/planets/61/"
        }
      ]);
    });
};
