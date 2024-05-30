// controllers/userResponse.controller.js
const db = require("../models");
const UserResponse = db.userResponse;

exports.saveUserResponse = async (req, res) => {
  const responses = req.body; // Assuming the request body contains the array of responses

  try {
    const createdResponses = await UserResponse.bulkCreate(responses);
    res.status(201).send(createdResponses);
  } catch (error) {
    console.error("Error saving user responses:", error);
    res.status(500).send({ message: "Error saving user responses" });
  }
};
