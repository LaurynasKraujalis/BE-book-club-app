"use strict";
module.exports = (sequelize, DataTypes) => {
  const reaction = sequelize.define(
    "reaction",
    {
      reaction: DataTypes.STRING,
      userName: DataTypes.STRING,
    },
    {}
  );
  reaction.associate = function (models) {
    reaction.belongsTo(models.comment);
    reaction.belongsTo(models.user);
  };
  return reaction;
};
