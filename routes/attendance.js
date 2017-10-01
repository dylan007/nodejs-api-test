const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const url = require('url');

router.get('/',(req,res)=>{
	res.send('Attendance api');
});

router.get('/get',(req,res)=>{

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
	var id = (url.parse(req.url,true).query)["id"];
	con.query("select * from attendance where memberID="+id+";", function(err,results) {
		if(err) throw err;
		res.send(results);
	});
});

router.post('/post',(req,res)=>{
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
	console.log(req.body.memberID + " " + req.body.eventID);
	con.query("insert into attendance (memberID,eventID) values ('"+req.body.memberID+"','"+req.body.eventID+"');", function(err,results){
		if(err) throw err;
		console.log("Inserted successfully");
	 	res.send(results);
	});
})

module.exports = router;