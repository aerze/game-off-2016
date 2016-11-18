// const path = require('path');

const express = require('express');

const users = require('./users');
const games = require('./games');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send('200 OK');
  })
  .post((req, res) => {
    res.send('200 OK POST');
  });

router.route('/users')
  .post((req, res) => {
    // add a default name
    const name = req.body.name || 'hacker';

    return users.newUser(name)
      // if newUser call was successful
      .then(data => res.json(data))
      // else if there was an error
      .catch(error => res.status(500).json({ error }));
  });

router.route('/games')
  .post((req, res) => {
    const userID = req.body.userID;
    if (!userID) res.status(500).json({ error: 'USER_ID IS UNDEFINED' });

    return games.newGame(userID)
      .then(data => res.json(data))
      .catch(error => res.status(500).json({ error }));
  });

router.route('/games/join')
  .post((req, res) => {
    const userID = req.body.userID;
    const gamePin = req.body.gamePin;
    console.log('/games/join');
    if (!userID) res.status(500).json({ error: 'USER_ID IS UNDEFINED' });
    if (!gamePin) res.status(500).json({ error: 'GAME_PIN IS UNDEFINED' });

    return games.joinGame({ userID, gamePin })
      .then(data => res.json(data))
      .catch(error => res.status(500).json({ error: error.stack }));
  });

module.exports = router;
