const express = require("express");
// const got = require("got");
// const requestIp = require("request-ip");
// const Hashes = require("jshashes");
//
// var MD5 = new Hashes.MD5();
const router = express.Router();
//
// const mongoose = require("mongoose");
// var MongooseModels = require("./../mongoose/models");
// var User = mongoose.model("User");
//
// const wikiUrl =
// 	"https://en.wikipedia.org/w/api.php?action=query&list=random&rnlimit=1&format=json&origin=*&rnnamespace=0";

router.get("/posts", (req, res) => {
	res.send("hey there");
});

router.post("/submit", (req, res) => {
	console.log(req.body);
	res.send(req.body);
});

module.exports = router;
