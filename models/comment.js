"use strict";
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define(
    "comment",
    {
      comment: DataTypes.TEXT,
      userName: DataTypes.STRING,
    },
    {}
  );
  comment.associate = function (models) {
    comment.belongsTo(models.user);
    comment.belongsTo(models.book);
    comment.hasMany(models.reaction);
  };
  return comment;
};
