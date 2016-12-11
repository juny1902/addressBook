var express = require("express");
var mongoose = require("mongoose");
var app = express();

mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection;

db.once("open", function() {
    console.log("DB connected");
});