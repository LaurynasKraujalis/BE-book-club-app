const { Router } = require("express");

const User = require("../models").user;
const Book = require("../models").book;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allMembers = await User.findAll({
      include: { model: Book, attributes: ["id", "title"] },
    });

    if (!allMembers) {
      return res.status(400).send({
        message: "No members found",
      });
    }

    return res.status(200).send(allMembers);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
