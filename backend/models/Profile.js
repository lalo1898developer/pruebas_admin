const mongoose = require('mongoose');

const { Schema } = mongoose;

const profileSchema = new Schema({
    permission: {
        type: String,
        required: false
    },
    Module: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Module'
    },
    Role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    }
}, { timestamps: true, versionKey: false });

const Profile = mongoose.model('Profile', profileSchema);

module.exports = { Profile, profileSchema };
