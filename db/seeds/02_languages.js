exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('languages')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('languages').insert([
        {
          "language": "Huttese"
        }, {
          "language": "Galactic basic"
        }, {
          "language": "Dosh"
        }, {
          "language": "Mon Calamarian"
        }, {
          "language": "Ewokese"
        }, {
          "language": "Sullutese"
        }, {
          "language": "Neimoidia"
        }, {
          "language": "Gungan basic"
        }, {
          "language": "Toydarian"
        }, {
          "language": "Dugese"
        }, {
          "language": "Twi'leki"
        }, {
          "language": "Aleena"
        }, {
          "language": "vulpterish"
        }, {
          "language": "Xextese"
        }, {
          "language": "Tundan"
        }, {
          "language": "Cerean"
        }, {
          "language": "Nautila"
        }, {
          "language": "Zabraki"
        }, {
          "language": "unknown"
        }, {
          "language": "Iktotchese"
        }, {
          "language": "Quermian"
        }, {
          "language": "Kel Dor"
        }, {
          "language": "Chagria"
        }, {
          "language": "Geonosian"
        }, {
          "language": "Mirialan"
        }, {
          "language": "Clawdite"
        }, {
          "language": "besalisk"
        }, {
          "language": "Kaminoan"
        }, {
          "language": "Skakoan"
        }, {
          "language": "Muun"
        }, {
          "language": "Togruti"
        }, {
          "language": "Kaleesh"
        }, {
          "language": "Utapese"
        }, {
          "language": "Shyriiwook"
        }, {
          "language": "n/a"
        }
      ]);
    });
};
