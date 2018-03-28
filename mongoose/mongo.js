const mongoose = require("mongoose");
var env = process.env.NODE_ENV || "development";
var config = require("./config")[env];

module.exports = () => {
	var envUrl = process.env.MONGODB_URI || process.env[config.use_env_variable];
	var localUrl = `mongodb://${config.host}/${config.database}`;
	var mongoUrl = envUrl ? envUrl : localUrl;
	return mongoose.connect(mongoUrl, function(err, res) {
		if (err) {
			console.log("ERROR connecting to: " + mongoUrl + ". " + err);
		} else {
			console.log("Succeeded connected to: " + mongoUrl);
		}
	});
};
