
// Global configuration
require("dotenv").config()
const port = process.env.PORT || 3000

// Modules
const express = require('express')
const initRoutes = require("./routes")
const cors = require("cors")

// Express initialization
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('public'))
initRoutes(app)

// Connect to MongoDB
const DB = require("./models")
DB.mongoose.connect(DB.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log(err)
})

// Running express app
app.listen(port, () => {
    console.log(`Document API listening on port ${port}`)
})