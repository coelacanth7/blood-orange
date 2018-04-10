const express = require("express");

const router = express.Router();

const mongoose = require("mongoose");
var MongooseModels = require("./../mongoose/models");
var Post = mongoose.model("Post");

router.get("/posts/:latt/:long", (req, res) => {
	const { latt, long } = req.params;

	Post.find({
		location: {
			$near: {
				$maxDistance: 10000,
				$geometry: { type: "Point", coordinates: [long, latt] }
			}
		}
	}).find((error, results) => {
		console.log(error);
		console.log(results);
	});

	res.send("hey there");
});

// submit a new post
router.post("/submit", (req, res) => {
	const { text, user, location } = req.body;

	if (!location[0] || !location[1]) {
		return res.send("no location, invalid post");
	}

	var post = new Post({
		username: user.username,
		fingerprinthash: user.fingerprinthash,
		location: {
			type: "Point",
			coordinates: [location[1], location[0]]
		},
		text: text
	});

	post.save((err, user) => {
		if (err) console.log(err);
		console.log(user);
	});

	res.json(req.body);
});

module.exports = router;
