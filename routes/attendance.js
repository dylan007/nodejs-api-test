const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const url = require('url');

module.exports = (con) =>{
	router.get('/',(req,res)=>{
		res.send('Attendance api');
	});

	router.get('/get',(req,res)=>{
		var id = (url.parse(req.url,true).query)["id"];
		con.query("select * from attendance where memberID="+id+";", function(err,results) {
			if(err) throw err;
			res.send(results);
		});
	});

	router.post('/post',(req,res)=>{
		console.log(req.body.memberID + " " + req.body.eventID);
		con.query("insert into attendance (memberID,eventID) values ('"+req.body.memberID+"','"+req.body.eventID+"');", function(err,results){
			if(err) throw err;
			console.log("Inserted successfully");
		 	res.send(results);
		});
	});
	return router;
}