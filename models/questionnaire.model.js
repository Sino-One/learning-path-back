module.exports = (sequelize, Sequelize) => {
  const Questionnaire = sequelize.define(
    "questionnaire",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      form_description: {
        type: Sequelize.TEXT,
      },
      total_points: {
        type: Sequelize.INTEGER,
      },
    },
    {
      timestamps: false, // Désactiver la gestion automatique des timestamps
    }
  );

  Questionnaire.associate = (models) => {
    Questionnaire.hasMany(models.question, {
      foreignKey: "questionnaire_id",
      as: "questions",
    });
  };

  return Questionnaire;
};
