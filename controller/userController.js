const db = require("../models");

module.exports = {
  create: (req, res) => {
    db.User.create({
      id: req.params.id,
    })
      .then((newUser) => res.json(newUser))
      .catch((err) => res.status(422).json(err));
  },

  findOne: async (req, res) => {
    await db.User.findOneAndUpdate({ id: req.params.id }, req.body, {
      upsert: true,
    })
      .populate("characters")
      .then((populatedUser) => res.json(populatedUser))
      .catch((err) => res.status(422).json(err));
  },
};
