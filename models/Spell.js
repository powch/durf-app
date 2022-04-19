const mongoose = require('mongoose');

const SpellSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    description: {
        type: String
    }
});

const Spell = mongoose.model("Spell", SpellSchema);

module.exports = Spell;