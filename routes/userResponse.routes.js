// routes/userResponse.routes.js
const express = require("express");
const router = express.Router();
const userResponseController = require("../controllers/userResponse.controller");

router.post("/save", userResponseController.saveUserResponse);

module.exports = router;
