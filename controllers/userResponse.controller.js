// controllers/userResponse.controller.js
const db = require("../models");
const UserResponse = db.userResponse;

exports.saveUserResponse = async (req, res) => {
  const responses = req.body;

  try {
    const createdResponses = await UserResponse.bulkCreate(responses);
    res.status(201).send(createdResponses);
  } catch (error) {
    console.error("Error saving user responses:", error);
    res.status(500).send({ message: "Error saving user responses" });
  }
};

exports.getUserResponses = async (req, res) => {
  const userId = req.query.userId;

  try {
    const userResponses = await UserResponse.findAll({
      where: { userId },
      include: ["questionnaires", "questions", "selectedOption"],
    });
    res.status(200).send(userResponses);
  } catch (error) {
    console.error("Error getting user responses:", error);
    res.status(500).send({ message: "Error getting user responses" });
  }
};

exports.getUserResponsesByQuestionnaire = async (req, res) => {
  const userId = req.query.userId;
  const questionnaireId = req.query.questionnaireId;

  try {
    const userResponses = await UserResponse.findAll({
      where: { userId, questionnaire_id: questionnaireId },
      include: ["questionnaires", "questions", "selectedOption"],
    });
    res.status(200).send(userResponses);
  } catch (error) {
    console.error("Error getting user responses:", error);
    res.status(500).send({ message: "Error getting user responses" });
  }
};
