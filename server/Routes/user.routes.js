const express = require("express");
const { signup, login } = require("../Controller/user.controller");
const router = express.Router();

//Router CRUD
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;