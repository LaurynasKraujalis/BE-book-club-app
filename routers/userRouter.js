const { Router } = require("express");

const Book = require("../models").book;
const User = require("../models").user;
const Rating = require("../models").rating;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.post("/", authMiddleware, async (req, res, next) => {
  const { author, title, imageUrl, description, userId } = req.body;

  if (!author && !title && !imageUrl && !description) {
    return res.status(400).send({
      mesage:
        "Not enough information about the book to create new book, try a different one.",
    });
  } else {
    try {
      const newBook = await Book.create({
        author,
        title,
        imageUrl,
        description,
        userId,
      });

      if (!newBook) {
        return res.status(400).send({
          message: "No new book added",
        });
      }

      return res.status(200).send(newBook);
    } catch (error) {
      console.log(error);
      return res.status(400).send({ message: "Something went wrong, sorry" });
    }
  }
});

module.exports = router;
