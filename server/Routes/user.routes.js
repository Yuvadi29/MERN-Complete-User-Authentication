const express = require("express");
const { signup, login, verifyToken } = require("../Controller/user.controller");
const router = express.Router();

//Router CRUD
router.post("/signup", signup);
router.post("/login", login);
router.get("/user", verifyToken);

module.exports = router;