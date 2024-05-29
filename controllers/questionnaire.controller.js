const db = require("../models");
const Questionnaire = db.questionnaire;
const Question = db.question;
const Option = db.option;

// Récupérer tous les questionnaires
exports.getAllQuestionnaires = (req, res) => {
  Questionnaire.findAll()
    .then((questionnaires) => {
      res.json(questionnaires);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur serveur");
    });
};

exports.getQuestionsByQuestionnaireId = async (req, res) => {
  const questionnaireId = req.params.id;

  try {
    const questionnaire = await Questionnaire.findByPk(questionnaireId, {
      include: [
        {
          model: Question,
          as: "questions",
          attributes: { exclude: ["createdAt", "updatedAt"] }, // Exclure les colonnes createdAt et updatedAt
          include: [
            {
              model: Option,
              as: "option",
            },
          ],
        },
      ],
    });

    if (!questionnaire) {
      return res.status(404).send({ message: "Questionnaire not found" });
    }

    res.status(200).send(questionnaire.questions);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
