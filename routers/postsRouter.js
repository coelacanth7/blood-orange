const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
var MongooseModels = require("./../mongoose/models");
var Post = mongoose.model("Post");

// get posts by location
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
		if (error) console.error(erorr.stack);
		console.log(JSON.stringify(results, 0, 2));
		res.json({ results });
	});
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

	post.save((err, message) => {
		if (err) console.error(err.stack);
		console.log(message);
	});

	res.json(req.body);
});

module.exports = router;
