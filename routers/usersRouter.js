const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/api", (req, res) => {
	console.log(req.socket.remoteAddress);
	res.send("fuck you");
	// const ip = "72.200.79.101";
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
