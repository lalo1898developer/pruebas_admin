const mongoose = require('mongoose');

const { Schema } = mongoose;
const systemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  is_active: {
    type: Boolean,
    default: true
  }
}, { timestamps: true, versionKey: false });

const System = mongoose.model('System', systemSchema);

module.exports = { System, systemSchema };
