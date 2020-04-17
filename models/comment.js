"use strict";
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define(
    "comment",
    {
      comment: DataTypes.TEXT,
    },
    {}
  );
  comment.associate = function (models) {
    comment.belongsTo(models.user);
    comment.belongsTo(models.book);
  };
  return comment;
};
