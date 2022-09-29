const db = require('../connection');

const getItems = () => {
  return db.query('SELECT * FROM items;')
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      return err.message;
    });
};

const filterItemsByPrice = (minValue, maxValue) => {
  return db.query(`SELECT * FROM items
  WHERE price < $2 AND price > $1
  ;`, [minValue, maxValue])
    .then(data => {
      console.log("Data.rows", data.rows);
      return data.rows;
    })
    .catch((err) => {
      return err.message;
    });
}

const getFavourites = (userId) => {
  return db.query(`SELECT * FROM favourites
  JOIN items ON product_id = items.id
  JOIN users ON customer_id = users.id
  WHERE customer_id = $1;
  `, [userId])
    .then(data => {
      return data.rows;
    });
}

module.exports = { getItems, filterItemsByPrice, getFavourites };
