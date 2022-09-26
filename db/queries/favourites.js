const db = require('../connection');

const getFavourites = (user) => {
  return db.query(`SELECT * FROM favourites
  WHERE customer_id = $1;
  `, [user])
    .then(data => {
      return data.rows;
    });
}

module.exports = { getFavourites };
