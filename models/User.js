const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: 'User id is required'
  },
  character: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Character'
  }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;