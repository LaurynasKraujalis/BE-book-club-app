"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("reactions", "commentId", {
      type: Sequelize.INTEGER,
      references: {
        model: "comments",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("reactions", "commentId");
  },
};
