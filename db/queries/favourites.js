const db = require('../connection');

const getFavourites = (user) => {
  console.log("Req.session", req.session.user_id);
  console.log("User ID", user.id);
  return db.query(`SELECT * FROM favourites
  WHERE customer_id = $1;
  `, [user.id])
    .then(data => {
      return data.rows;
    });
}

module.exports = { getFavourites };
