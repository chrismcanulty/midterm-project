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

module.exports = { getItems };
