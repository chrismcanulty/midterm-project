const db = require('../connection');

const getItemsByPrice = () => {
  return db.query(`SELECT * FROM items
  WHERE price < 100;`)
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      return err.message;
    });
};

module.exports = { getItemsByPrice };
