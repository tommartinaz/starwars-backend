const knex = require('../db/knex');

module.exports = {
    get_all_characters: (req, res) => {
        knex.raw(
            `select 
                c.name, 
                c.hair_color, 
                c.eye_color, 
                g.gender, 
                p.name homeworld, 
                s.name species 
            from characters c 
            join genders g on c.gender_id=g.id 
            join planets p on c.homeworld_id=p.id 
            join species s on c.species_id = s.id`)
        .then(data => res.send(data.rows));
    }
}