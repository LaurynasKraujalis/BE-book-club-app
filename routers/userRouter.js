const { Router } = require("express");

const Book = require("../models").book;
const User = require("../models").user;
const Rating = require("../models").rating;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.post("/newbook", authMiddleware, async (req, res, next) => {
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

router.post("/myprofile/motto", authMiddleware, async (req, res, next) => {
  const { id, motto } = req.body;

  try {
    const userInfo = await User.findOne({ where: { id } });

    await userInfo.update({ motto });

    return res.status(200).send({
      userInfo,
      message: "Your motto has been updated",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/myprofile/image", authMiddleware, async (req, res, next) => {
  const { id, image } = req.body;
  // console.log(`what is in the body`, id, image);
  try {
    const userInfo = await User.findOne({ where: { id } });

    await userInfo.update({ image });

    return res.status(200).send({
      userInfo,
      message: "Your profile picture has been updated",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
