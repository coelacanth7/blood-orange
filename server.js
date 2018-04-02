// express
const express = require("express");
const app = express();

// path
const path = require("path");
app.use(express.static(path.join(__dirname, "client/build")));

// cookie parser
var cookieParser = require("cookie-parser");
app.use(cookieParser());

// body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ip middleware
const requestIp = require("request-ip");
const ipMiddleware = function(req, res, next) {
	const ip = requestIp.getClientIp(req);
	res.locals.ip = ip;
	next();
};
app.use(ipMiddleware);

// get POST
const methodOverride = require("method-override");
const getPostSupport = require("express-method-override-get-post-support");
app.use(
	methodOverride(
		getPostSupport.callback,
		getPostSupport.options // { methods: ['POST', 'GET'] }
	)
);

// cors
app.use(function(req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET,HEAD,OPTIONS,POST,PUT,DELETE"
	);
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
	);

	res.setHeader("Cache-Control", "no-cache");
	next();
});

// morgan logging
const morgan = require("morgan");
const morganToolkit = require("morgan-toolkit")(morgan);
app.use(morganToolkit());

// Mongoose
const mongoose = require("mongoose");
app.use((req, res, next) => {
	if (mongoose.connection.readyState) {
		next();
	} else {
		require("./mongoose/mongo")().then(() => next());
	}
});

// Routes
const usersRouter = require("./routers/usersRouter");
app.use("/", usersRouter);

const postsRouter = require("./routers/postsRouter");
app.use("/", postsRouter);

// listen
var port = process.env.PORT || process.argv[2] || 3001;
var host = "localhost";
var args;
process.env.NODE_ENV === "production" ? (args = [port]) : (args = [port, host]);
args.push(() => {
	console.log(`Listening: http://${host}:${port}`);
});

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen.apply(app, args);
