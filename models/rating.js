"use strict";
module.exports = (sequelize, DataTypes) => {
  const rating = sequelize.define(
    "rating",
    {
      rating: DataTypes.INTEGER,
    },
    {}
  );
  rating.associate = function (models) {
    rating.belongsTo(models.user);
    rating.belongsTo(models.book);
  };
  return rating;
};
