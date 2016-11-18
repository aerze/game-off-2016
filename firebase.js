const admin = require('firebase-admin');

const serviceAccount = require('./firebase_credentials.json');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://dot-slash-hack.firebaseio.com/',
});

const db = admin.database();
const mainRef = db.ref('temp/test1');

const usersRef = mainRef.child('users');
const gamesRef = mainRef.child('games');
const gameLookupRef = mainRef.child('game_lookup');


const firebase = {
  gameLookup: {
    find(key) {
      return this.store[key];
    },
    update(key, value) {
      this.store[key] = value;
    },
    updateFromFirebase(snapshot) {
      const val = snapshot.val();
      firebase.gameLookup.store = val;
    },
    store: {},
  },
  users: {
    newUser(user) {
      // create a ref to a new user
      const newUserRef = usersRef.push();

      // set the data on the new user
      return newUserRef.set(user)
        // if the call is successful
        .then(() => ({ id: newUserRef.key, user }))
        // else if the call failed
        .catch(error => Promise.reject(error));
    },
  },

  games: {
    newGame(game) {
      // create a ref to a new user
      const newGameRef = gamesRef.push();
      const gamePlayersRef = newGameRef.child('players');
      const newGameKey = newGameRef.key;

      const lookup = {
        [game.pin]: newGameKey,
      };


      // set the data on the new game
      const newGamePromise = newGameRef.set(game)
        .then(() => ({ id: newGameRef.key, game }))
        .catch(error => Promise.reject(error));

      const gameLookupPromise = gameLookupRef.update(lookup);
      const addPlayerPromise = gamePlayersRef.update({ [game.owner]: true });


      return Promise.all([newGamePromise, addPlayerPromise, gameLookupPromise])
        .then(data => data[0])
        .catch(error => Promise.reject(error));
    },

    joinGame({ userID, gamePin }) {
      const gameID = firebase.gameLookup.find(gamePin);
      if (!gameID) return Promise.reject(new Error('GAME_PIN.DOES_NOT_EXIST'));

      const gameRef = gamesRef.child(gameID);
      const gamePlayersRef = gameRef.child('players');

      return gamePlayersRef.update({ [userID]: true })
        .then(() => ({ success: true }))
        .catch(error => Promise.reject(error));
    },
  },
};

gameLookupRef.on('value', firebase.gameLookup.updateFromFirebase,
  (errorObject) => { console.log(`The read failed: ${errorObject.code}`); });

module.exports = firebase;
