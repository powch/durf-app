const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "name is required",
  },
  core_stats: {
    STR: {
      type: Number,
      required: "core_stats.STR is required",
    },
    DEX: {
      type: Number,
      required: "core_stats.DEX is required",
    },
    WIL: {
      type: Number,
      required: "core_stats.WIL is required",
    },
  },
  armor: {
    current: {
      type: Number,
      required: "armor.current is required",
    },
    max: {
      type: Number,
      required: "armor.max is required",
    },
  },
  damage: {
    hit_dice: {
      type: Number,
      required: "damage.hit_dice is required",
    },
    wounds: {
      type: Number,
      required: "damage.wounds is required",
    },
  },
  xp_value: {
    type: Number,
    required: "xp_value is required",
    default: 0,
  },
  inventory: {
    stress: {
      type: Number,
      default: 0,
    },
    slots: {
      type: Number,
    },
    gold_value: {
      type: Number,
    },
    equipment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Equipment",
      },
    ],
  },
  spells: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Spell",
    },
  ],
  hirelings: [
    {
      name: {
        type: String,
      },
      hit_dice: {
        type: Number,
      },
      skill: {
        type: Number,
      },
      armor: {
        type: Number,
      },
      morale: {
        type: Number,
      },
      attack_value: {
        type: Number,
      },
      inventory: {
        stress: {
          type: Number,
          default: 0,
        },
        slots: {
          type: Number,
        },
        gold_value: {
          type: Number,
        },
        equipment: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Equipment",
          },
        ],
      },
      spells: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Spell",
        },
      ],
    },
  ],
});

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;
