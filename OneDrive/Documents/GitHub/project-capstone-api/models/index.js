require("dotenv").config()

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const DB = {};
DB.mongoose = mongoose;
DB.url = process.env.MONGO_URL;

DB.form = require("./Form")(mongoose)
DB.scanned = require("./Scanned")(mongoose)

module.exports = DB;