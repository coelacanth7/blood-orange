const express = require("express");
const request = require("request");
const requestIp = require("request-ip");
const Hashes = require("jshashes");
var MD5 = new Hashes.MD5();

const router = express.Router();

var fprint;

router.post("/user", (req, res) => {
	const ip = requestIp.getClientIp(req);
	fprint = req.headers;
	fprint.ip = ip;
	fprint.fprintjs = req.body.fprint;

	request(`https://freegeoip.net/json/${ip}`, function(error, response, body) {
		console.log("error:", error);
		console.log("statusCode:", response && response.statusCode);

		fprint.hasLocation = body.latitude === "" || !body.latitude ? false : true;
		fprint.locationData = body;

		const hash = MD5.hex(JSON.stringify(fprint));
		res.json(hash);
	});
});

module.exports = router;
