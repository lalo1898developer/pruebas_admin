const { System } = require('../models')

module.exports = {
    
    createOne: (body) => new System(body).save(),

    readOne: (id_system) => System.findById(id_system),

    readAll: () => System.find(),

    updateOne: (id_system, body) => System.findByIdAndUpdate(id_system, body, { new: true })

}
