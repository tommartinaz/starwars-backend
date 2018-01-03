const knex = require('../db/knex');

module.exports = {
    get_one_film: (req, res) => {
        knex.raw(`select char.name 
        from characters char 
        join m2m_char_film m on char.id = m.character_id 
        join films f on m.film_id = f.id 
        where f.id = ${req.params.id}`)
        .then(data => res.send(data.rows))
    }
}