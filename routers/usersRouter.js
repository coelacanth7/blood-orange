const express = require("express");
const got = require("got");
const requestIp = require("request-ip");
const Hashes = require("jshashes");

var MD5 = new Hashes.MD5();
const router = express.Router();

router.post("/user", async (req, res) => {
	try {
		const ip = requestIp.getClientIp(req);
		const fprint = req.headers;
		fprint.ip = ip;
		fprint.fprintjs = req.body.fprint;

		const response = await got(`https://freegeoip.net/json/${ip}`);

		fprint.hasLocation =
			response.body.latitude === "" || !response.body.latitude ? false : true;
		fprint.locationData = response.body;

		const hash = MD5.hex(JSON.stringify(fprint));

		res.json({ hash: hash, location: response.body });
	} catch (error) {
		console.log(error);
	}
	// request(`https://freegeoip.net/json/${ip}`, function(error, response, body) {
	// 	console.log("error:", error);
	// 	console.log("statusCode:", response && response.statusCode);
	//
	// 	fprint.hasLocation = body.latitude === "" || !body.latitude ? false : true;
	// 	fprint.locationData = body;
	//
	// 	const hash = MD5.hex(JSON.stringify(fprint));
	//
	// 	res.json({ hash: hash, location: body });
	// });
});

module.exports = router;
