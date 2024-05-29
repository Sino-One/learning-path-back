module.exports = (sequelize, Sequelize) => {
  const Question = sequelize.define(
    "question",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      question: {
        type: Sequelize.TEXT,
      },
      correct_answer: {
        type: Sequelize.STRING,
      },
      questionnaire_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "questionnaire",
          key: "id",
        },
      },
    },
    {
      timestamps: false, // Désactiver la gestion automatique des timestamps
    }
  );

  Question.associate = (models) => {
    Question.belongsTo(models.questionnaire, {
      foreignKey: "questionnaire_id",
      as: "questionnaire",
    });
    Question.hasMany(models.option, {
      foreignKey: "question_id",
      as: "option",
    });
  };

  return Question;
};
