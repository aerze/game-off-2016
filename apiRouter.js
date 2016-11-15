
const express = require('express');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send('200 OK');
  })
  .post((req, res) => {
    res.send('200 OK POST');
  });

module.exports = router;
