const { Profile } = require('../models')

module.exports = {
    
    createMany: (body) => Profile.insertMany(body),

    //readOne: (id_module) => Module.findById(id_module),

    readAll: (id_role) => Profile.find({ 'Role': id_role }),

    updateOne: (id_profile, permission) => Profile.findByIdAndUpdate(id_profile, {permission}, { new: true }),

    deleteOne: (id_profile) => Profile.findByIdAndRemove(id_profile)
    //deleteOne: (id_profile) => Profile.findByIdAndDelete(id_profile)

}