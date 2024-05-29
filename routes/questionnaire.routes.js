// routes/questionnaire.routes.js
const express = require("express");
const router = express.Router();
const questionnaireController = require("../controllers/questionnaire.controller");

// Route pour récupérer tous les questionnaires
router.get("/getAll", questionnaireController.getAllQuestionnaires);
router.get(
  "/:id/questions",
  questionnaireController.getQuestionsByQuestionnaireId
);

module.exports = router;
