const express = require('express');
const bodyparser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 3000;


const con = mysql.createConnection({
	host:"localhost",
	user:"",
	password:"",
	database:"testdb"
});

con.connect(function(err){
	if(err) throw err;
	console.log("Connected to the database");
});

const index = require('./routes/index.js')(con);
const attendance = require('./routes/attendance.js')(con);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true })); 

app.use('/',index);
app.use('/a',attendance);
app.listen(port);
console.log('Running on ' + port);