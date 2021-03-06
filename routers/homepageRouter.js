const { Router } = require("express");

const Book = require("../models").book;
const User = require("../models").user;
const Rating = require("../models").rating;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allBooks = await Book.findAll({
      include: [
        { model: Rating, attributes: ["rating"] },
        { model: User, attributes: ["id", "name"] },
      ],
    });

    if (!allBooks) {
      return res.status(400).send({
        message: "No books found",
      });
    }

    return res.status(200).send(allBooks);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
