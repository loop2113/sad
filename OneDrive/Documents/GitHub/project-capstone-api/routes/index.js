const express = require("express")
const router = express.Router()

// Use the routes
const initRoutes = (app) => {
    router.use("/form",     require("./form"))
    router.use("/scanned",  require("./scanned"))

    return app.use("/api", router)
}

module.exports = initRoutes