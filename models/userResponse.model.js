// models/userResponse.model.js
module.exports = (sequelize, Sequelize) => {
  const UserResponse = sequelize.define("user_response", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    questionnaire_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "questionnaires",
        key: "id",
      },
      allowNull: false,
    },
    question_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "questions",
        key: "id",
      },
      allowNull: false,
    },
    selectedOption_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "options",
        key: "id",
      },
      allowNull: false,
    },
  });

  UserResponse.associate = (models) => {
    UserResponse.belongsTo(models.questionnaire, {
      foreignKey: "questionnaire_id",
      as: "questionnaires",
    });
    UserResponse.belongsTo(models.question, {
      foreignKey: "question_id",
      as: "questions",
    });
    UserResponse.belongsTo(models.option, {
      foreignKey: "selectedOption_id",
      as: "selectedOption",
    });
  };

  return UserResponse;
};
