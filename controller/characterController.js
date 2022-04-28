const db = require("../models");

module.exports = {
  create: (req, res) => {
    db.Character.create(req.body)
      .then(async (newReport) => {
        await db.User.findOneAndUpdate(
          { id: req.params.id },
          { characters: newReport._id },
          { new: true }
        );
        return res.json(newReport);
      })
      .catch((err) => res.status(422).json(err));
  },

  findAll: (req, res) => {
    db.Character.find({})
      .sort({ date: -1 })
      .then((reports) => res.json(reports))
      .catch((err) => res.status(422).json(err));
  },
};
