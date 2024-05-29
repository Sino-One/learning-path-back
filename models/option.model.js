module.exports = (sequelize, Sequelize) => {
  const Option = sequelize.define(
    "option",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      option: {
        type: Sequelize.STRING,
      },
      question_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "question",
          key: "id",
        },
      },
    },
    {
      timestamps: false, // Désactiver la gestion automatique des timestamps
    }
  );

  Option.associate = (models) => {
    Option.belongsTo(models.question, {
      foreignKey: "question_id",
      as: "question",
    });
  };

  return Option;
};
