const { User } = require('../models')

module.exports = {
    
    createOne: (body) => new User(body).save(),

    readOneByEmail: (email) => User.findOne({ email }),

}
