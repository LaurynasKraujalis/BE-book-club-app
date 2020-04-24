const { Router } = require("express");
const authMiddleware = require("../auth/middleware");

const Book = require("../models").book;
const User = require("../models").user;
const Rating = require("../models").rating;
const Comment = require("../models").comment;
const Reaction = require("../models").reaction;

const router = new Router();

router.post("/:id/comments", authMiddleware, async (req, res, next) => {
  const { comment, userId } = req.body;
  const bookId = req.params.id;

  try {
    const newComment = await Comment.create({ comment, bookId, userId });

    return res.status(200).send(newComment);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/:id/rating", authMiddleware, async (req, res, next) => {
  const { rating, userId } = req.body;
  const bookId = req.params.id;

  try {
    const oldRating = await Rating.findOne({ where: { bookId, userId } });

    if (oldRating) {
      console.log("There already is a vote for this user for this book");

      await oldRating.update({ rating });

      return res.status(200).send({ rating: oldRating.rating });
    } else {
      const newRating = await Rating.create({ rating, bookId, userId });

      return res.status(200).send({ rating: newRating.rating });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/:id", async (req, res, next) => {
  const bookId = req.params.id;
  try {
    const bookDetails = await Book.findByPk(bookId, {
      include: [
        { model: Rating, attributes: ["id", "rating"] },
        { model: User, attributes: ["id", "name"] },
        {
          model: Comment,
          attributes: ["id", "comment", "userId", "createdAt"],
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

    return res.status(200).send(bookDetails);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
