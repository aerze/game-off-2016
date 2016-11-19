
// Load standard modules
const path = require('path');

// Load NPM modules
const Express = require('express');
const Logger = require('morgan');
const bodyParser = require('body-parser');

// Load custom modules
const apiRouter = require('./apiRouter');

// instantiate new express app
const app = Express();

// enable morgan logger midleware, type dev
app.use(Logger('dev'));

// enable body-parser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// apply router to use /api as a base
app.use('/api', apiRouter);

// enable static server
app.use(Express.static(path.join(__dirname, '/public')));

// start the server
app.listen(8008, () => {
  console.log('Example app running at port 8008');
});
