const { Router } = require("express");

const Book = require("../models").book;
const User = require("../models").user;
const Rating = require("../models").rating;
const Comment = require("../models").comment;
const Reaction = require("../models").reaction;

const router = new Router();
router.get("/:id", async (req, res, next) => {
  const bookId = req.params.id;
  try {
    const bookDetails = await Book.findByPk(bookId, {
      include: [
        { model: Rating, attributes: ["id", "rating"] },
        { model: User, attributes: ["id", "name"] },
        {
          model: Comment,
          attributes: ["id", "comment", "userId"],
          include: {
            model: Reaction,
            attributes: ["id", "reaction", "userId"],
          },
        },
      ],
    });

    if (!bookDetails) {
      return res.status(400).send({
        message: "No book found",
      });
    }
    // const { commentUserNameId } = bookDetails.comments.id.userId;

    // const commentUserName = await User.findByPk(commentUserNameId);

    return res.status(200).send(bookDetails);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
