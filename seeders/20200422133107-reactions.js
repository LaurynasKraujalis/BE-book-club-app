// "use strict";

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     return await queryInterface.bulkInsert(
//       "reactions",
//       [
//         {
//           reaction: "This is hilarious!",
//           commentId: 1,
//           userId: 2,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           reaction: "Thats rude to say.",
//           commentId: 1,
//           userId: 1,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           reaction: "I respectfully disagree with your opinion.",
//           commentId: 2,
//           userId: 1,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//       ],
//       {}
//     );
//   },

//   down: async (queryInterface, Sequelize) => {
//     return await queryInterface.bulkDelete("reactions", null, {});
//   },
// };
