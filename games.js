
const firebase = require('./firebase');

const firebaseGames = firebase.games;
const firebaseGameLookup = firebase.gameLookup;

const FFFFFF = 16777215;
function generatePin() {
  const randomNumber = Math.floor(Math.random() * (FFFFFF + 1));
  const pin = randomNumber.toString(16);
  if (!firebaseGameLookup[pin]) return pin;
  return generatePin();
}

const games = {
  newGame(userID) {
    const game = {
      owner: userID,
      pin: generatePin(),
      state: 'LOBBY',
    };

    return firebaseGames.newGame(game)
      .then(data => data)
      .catch(error => Promise.reject(error));
  },

  joinGame({ userID, gamePin }) {
    console.log('games.joinGame');
    return firebaseGames.joinGame({ userID, gamePin })
      .then(data => data)
      .catch(error => Promise.reject(error));
  },
};

module.exports = games;
