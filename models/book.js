"use strict";
module.exports = (sequelize, DataTypes) => {
  const book = sequelize.define(
    "book",
    {
      author: DataTypes.STRING,
      title: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
    },
    {}
  );
  book.associate = function (models) {
    book.belongsTo(models.user);
    book.hasMany(models.rating);
  };
  return book;
};
