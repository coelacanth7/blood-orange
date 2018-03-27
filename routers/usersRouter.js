const express = require("express");
const request = require("request");
var requestIp = require("request-ip");

const router = express.Router();

router.get("/api", (req, res) => {
	console.log(req);

	const networkIp =
		req.headers["x-forwarded-for"].split(",").pop() ||
		req.connection.remoteAddress ||
		req.socket.remoteAddress ||
		req.connection.socket.remoteAddress;
	const ip = requestIp.getClientIp(req);
	console.log("ip", ip);
	console.log("networkIp", networkIp);

	request(`https://freegeoip.net/json/${ip}`, function(error, response, body) {
		console.log("error:", error);
		console.log("statusCode:", response && response.statusCode);
		console.log("body:", body);
		res.send(`fuck you ${ip} , ${body}`);
	});

	// axios
	// 	.get(`freegeoip.net/json/${ip}`)
	// 	.then(json => {
	// 		console.log(json);
	// 		res.send("suk a dik");
	// 	})
	// 	.catch(err => console.error(err));
});

// componentDidMount() {
// 	var that = this;
// 	var url = "https://freegeoip.net/json/";
// 	fetch(url)
// 		.then(function(response) {
// 			if (response.status >= 400) {
// 				throw new Error("Bad response from server");
// 			}
// 			return response.json();
// 		})
// 		.then(function(data) {
// 			var Fprint = data;
// 			Fprint.screen = window.screen.availHeight + window.screen.availWidth;
// 			Fprint.pluginsNum = navigator.plugins.length;
// 			console.log(Fprint);
// 			that.setState({ Fprint });
// 		})
// 		.catch(err => console.error(err));
// 	// note
// }

module.exports = router;
