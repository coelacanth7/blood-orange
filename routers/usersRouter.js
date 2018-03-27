var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
	console.log(req.socket.remoteAddress);
	res.send("suk a dik");
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
