const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

const getFavourites = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
}

const addToFavourites = () => {
  // edit this line
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
}

module.exports = { getUsers, getFavourites, addToFavourites };
