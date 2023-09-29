const express = require("express")
const router = express.Router()

const form = require("../controllers/FormController")
router.get("/", 		form.index)
router.post("/", 		form.store)
router.get("/:id", 		form.get)
router.put("/:id", 		form.update)
router.delete("/:id", 	form.delete)

module.exports = router