const { Module } = require('../models')

module.exports = {
    
    createOne: (body) => new Module(body).save(),

    read: (id_system) => Module.find({ 'System': id_system }),

    readOne: (id_module) => Module.findById(id_module),

    readAll: (id_system) => Module.find({ 'System': id_system, 'Module': null }),

    readAllChild: (id_system, id_module) => Module.find({ 'System': id_system, 'Module': id_module }),

    updateOne: (id_module, body) => Module.findByIdAndUpdate(id_module, body, { new: true })

}
