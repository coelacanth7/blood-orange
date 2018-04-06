var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema(
	{
		username: String,
		fingerprinthash: String,
		location: {
			type: { type: String },
			coordinates: []
		},
		text: String,
		comments: [],
		score: 0
	},
	{
		timestamps: true
	}
);

PostSchema.index({ location: "2dsphere" });

// expire after 24 hours
// don't want posts to expire yet, need more posts lol
// PostSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

var Post = mongoose.model("Post", PostSchema);

module.exports = Post;
