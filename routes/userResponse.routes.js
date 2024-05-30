// routes/userResponse.routes.js
const express = require("express");
const router = express.Router();
const userResponseController = require("../controllers/userResponse.controller");

router.post("/save", userResponseController.saveUserResponse);
router.get("/user-responses", userResponseController.getUserResponses);
router.get(
  "/user-responses-by-questionnaire",
  userResponseController.getUserResponsesByQuestionnaire
);

module.exports = router;
