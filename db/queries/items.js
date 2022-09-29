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

const getFavourites = () => {
  return db.query('SELECT * FROM items;')
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      return err.message;
    });
};

module.exports = { getItems, filterItemsByPrice, getFavourites };
