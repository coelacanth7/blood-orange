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

router.post("/user", async (req, res) => {
	try {
		const ip = requestIp.getClientIp(req);
		console.log(ip);
		const fprint = req.headers;
		fprint.ip = ip;
		fprint.fprintjs = req.body.fprint;

		const response = await got(`https://freegeoip.net/json/${ip}`);

		fprint.hasLocation =
			response.body.latitude === "" || !response.body.latitude ? false : true;
		fprint.locationData = response.body;

		const fingerprinthash = MD5.hex(JSON.stringify(fprint));

		let user = await User.findOne({ fingerprinthash });
		if (!user) {
			const wikiResponse = await got(wikiUrl);
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
