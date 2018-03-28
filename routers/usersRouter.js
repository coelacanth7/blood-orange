const express = require("express");
const request = require("request");
const requestIp = require("request-ip");
const bcrypt = require("bcryptjs");

const router = express.Router();

var fprint;

router.post("/api", (req, res) => {
	const ip = requestIp.getClientIp(req);
	fprint = req.headers;
	fprint.ip = ip;
	fprint.fprintjs = req.body.fprint;

	request(`https://freegeoip.net/json/${ip}`, function(error, response, body) {
		console.log("error:", error);
		console.log("statusCode:", response && response.statusCode);

		fprint.hasLocation = body.latitude === "" || !body.latitude ? false : true;
		fprint.locationData = body;

		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(JSON.stringify(fprint), salt);
		res.json(hash);
	});
});

router.post("/check", (req, res) => {
	const hash = req.body.fprint;
	console.log(hash);
	const bool = bcrypt.compareSync(JSON.stringify(fprint), hash);
	console.log(bool);
});

module.exports = router;
