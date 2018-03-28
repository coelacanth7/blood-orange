var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema(
	{
		username: String,
		fingerprinthash: String
	},
	{
		timestamps: true
	}
);

// expire after 24 hours
UserSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

var User = mongoose.model("User", UserSchema);

module.exports = User;
