const express = require("express");
const { signup } = require("../Controller/user.controller");
const router = express.Router();

//Router CRUD
router.post("/signup", signup);
// router.get("/",)
// router.put("/",)
// router.delete("/",)

module.exports = router;