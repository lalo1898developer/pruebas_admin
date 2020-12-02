const { Role } = require('../models')

module.exports = {
    
    createOne: (body) => new Role(body).save(),

    readOne: (id_role) => Role.findById(id_role),

    readAll: () => Role.find(),

    updateOne: (id_role, name) => Role.findByIdAndUpdate(id_role, {name}, { new: true })

}
