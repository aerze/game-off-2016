
const firebaseUsers = require('./firebase').users;

const users = {
  newUser(name) {
    // wrap the name in a object
    const payload = { name };

    // send the payload to firebase
    return firebaseUsers.newUser(payload)
      // if the firebase call was sucessful
      .then(data => data)
      // else if the firebase call failed
      .catch(error => Promise.reject(error));
  },
};

module.exports = users;
