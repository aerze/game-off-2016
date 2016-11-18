/* eslint global: { firebase: true } */

var  db = firebase.database();
var mainRef = db.ref('temp/test1');
var gameLookupRef = mainRef.child('game_lookup');

gameLookupRef.once('value')
  .then(function handleValue(snap) {
    console.log(snap.val());
  })
  .catch(function handleError(error) {
    console.log(error);
  });

