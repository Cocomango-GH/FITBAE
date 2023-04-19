//variables
const express = require('express');
const path = require('path');
const logger = require('morgan');
require('dotenv').config();
require('./config/database');
const app = express();
const exerciseRouter = require('./routes/api/exercise');
const usersRouter = require('./routes/api/users');


//middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(require('../fitbae/config/checkTokens'));

//routes
app.use('/api/users', require('./routes/api/users'));
app.use('/users', usersRouter);
app.use('goals', goalRouter);
//catch all
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});



//listener
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Express app running on port ${port}`)
});