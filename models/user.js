"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.TEXT,
      },
      motto: {
        type: DataTypes.STRING,
      },
      story: {
        type: DataTypes.TEXT,
      },
    },
    {}
  );
  user.associate = function (models) {
    user.hasMany(models.book);
    user.hasMany(models.rating);
    user.hasMany(models.comment);
    user.hasMany(models.reaction);
  };
  return user;
};
