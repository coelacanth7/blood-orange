// express
const express = require("express");
const app = express();

// body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// morgan logging
const morgan = require("morgan");
const morganToolkit = require("morgan-toolkit")(morgan);
app.use(morganToolkit());

// const mongoose = require("mongoose");

// Routes
const usersRouter = require("./routers/usersRouter");
app.use("/", usersRouter);

// listen
var port = process.env.PORT || process.argv[2] || 3001;
var host = "localhost";

var args;
process.env.NODE_ENV === "production" ? (args = [port]) : (args = [port, host]);

args.push(() => {
	console.log(`Listening: http://${host}:${port}`);
});

app.listen.apply(app, args);
