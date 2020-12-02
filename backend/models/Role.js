const mongoose = require('mongoose');

const { Schema } = mongoose;

const roleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    System: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'System'
    }
}, { timestamps: true, versionKey: false });

const Role = mongoose.model('Role', roleSchema);

module.exports = { Role, roleSchema };
