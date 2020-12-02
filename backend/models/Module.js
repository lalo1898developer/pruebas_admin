const mongoose = require('mongoose');

const { Schema } = mongoose;
const moduleSchema = new Schema({
    name: {
        type: String,
        required: true
      },
    Module: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Module'
    },
    System: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'System'
    },
    is_active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true, versionKey: false });

const Module = mongoose.model('Module', moduleSchema);

module.exports = { Module, moduleSchema };
