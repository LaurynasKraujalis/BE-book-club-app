const { Router } = require("express");

const Book = require("../models").book;
const User = require("../models").user;
const Rating = require("../models").rating;

const router = new Router();
router.get("/:id", async (req, res, next) => {
  const bookId = req.params.id;
  try {
    const bookDetails = await Book.findByPk(bookId, {
      include: [
        { model: Rating, attributes: ["rating"] },
        { model: User, attributes: ["id", "name"] },
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
