const express = require("express")
const router = express.Router()

const scanned = require("../controllers/ScannedController")
router.get("/", 		scanned.index)
router.post("/", 		scanned.store)
router.post("/upload",	scanned.upload)
router.get("/:id", 		scanned.get)
router.put("/:id", 		scanned.update)
router.delete("/:id", 	scanned.delete)

module.exports = router