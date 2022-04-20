const db = require("../models");

module.exports = {
  create: (req, res) => {
    db.User.create({
      id: req.params.id,
    })
      .then((newUser) => res.json(newUser))
      .catch((err) => res.status(422).json(err));
  },

  findOne: (req, res) => {
    db.User.findOneAndUpdate({ id: req.params.id }, req.body, {
      upsert: true,
      rawResult: true
    })
      .then((userInfo) => res.json(userInfo))
      .catch((err) => res.status(422).json(err));
  },
};
