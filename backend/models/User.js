const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  Roles: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Role'
  }],
}, { timestamps: true, versionKey: false });

const User = mongoose.model('User', userSchema);

module.exports = { User, userSchema };
