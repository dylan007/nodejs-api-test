const express = require('express');
const bodyparser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 3000;

const index = require('./routes/index.js');
const attendance = require('./routes/attendance.js');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true })); 

app.use('/',index);
app.use('/a',attendance);
app.listen(port);
console.log('Running on ' + port);