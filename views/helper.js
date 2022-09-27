const getUserByEmail = (newEmail, data) => {
  for (let userId in data) {
    if (data[userId].email === newEmail) {
      return data[userId];
    }
    }
  return null;
};


module.exports = {getUserByEmail};
