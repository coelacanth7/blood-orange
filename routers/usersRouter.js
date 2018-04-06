const express = require("express");
const got = require("got");
const requestIp = require("request-ip");
const Hashes = require("jshashes");

var MD5 = new Hashes.MD5();
const router = express.Router();

const mongoose = require("mongoose");
var MongooseModels = require("./../mongoose/models");
var User = mongoose.model("User");

const wikiUrl =
	"https://en.wikipedia.org/w/api.php?action=query&list=random&rnlimit=1&format=json&origin=*&rnnamespace=0";

const { IP_STACK_KEY } = process.env;

router.post("/user", async (req, res) => {
	try {
		// get ip from middleware
		const { ip } = res.locals;

		// use geoip for location
		const response = await got(
			`http://api.ipstack.com/${ip}?access_key=${IP_STACK_KEY}`
		);

		// build a finger fprint hash
		const fprint = {};
		fprint.ip = ip;
		fprint.fprintjs = req.body.fprint;
		const fingerprinthash = MD5.hex(JSON.stringify(fprint));

		// mongo logic
		let user = await User.findOne({ fingerprinthash });
		if (!user) {
			const wikiResponse = await got(wikiUrl);
			// need to clean usernames
			const username = JSON.parse(wikiResponse.body).query.random[0].title;
			user = new User({ fingerprinthash, username });
			user.save((err, user) => {
				if (err) console.log(err);
				console.log(user);
			});
		}

		res.json({ fingerprinthash, location: response.body, user });
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
