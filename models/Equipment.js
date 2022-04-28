const mongoose = require('mongoose');

const EquipmentSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    name: {
        type: String
    },
    slot_value: {
        type: Number
    },
    activation_value: {
        type: Number
    },
    equipment_type: {
        type: String
    },
    description: {
        type: String
    },
    equip_location: {
        type: String
    }
});

const Equipment = mongoose.model('Equipment', EquipmentSchema)

module.exports = Equipment;