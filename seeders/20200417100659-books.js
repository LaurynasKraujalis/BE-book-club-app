"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "books",
      [
        {
          author: "George Orwell",
          title: "1984",
          imageUrl:
            "https://s.s-bol.com/imgbase0/imagebase3/large/FC/0/3/8/8/1001004005988830.jpg",

          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: "Octavia E. Butler",
          title: " Lilith's Brood",
          imageUrl:
            "https://s.s-bol.com/imgbase0/imagebase3/extralarge/FC/8/0/6/8/1001004000958608.jpg",

          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: "Hunter S. Thompson",
          title: "Fear and Loathing in Las Vegas",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/7/7c/Fear_and_Loathing_in_Las_Vegas.jpg",

          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("books", null, {});
  },
};
