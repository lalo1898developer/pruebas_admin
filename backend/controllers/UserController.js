const User = require('../models/User');
const {
    RoleService
} = require('../services');
const {
    ProfileService
} = require('../services');
const {
    ModuleService
} = require('../services');
const {
    UserService
} = require('../services');
const { createToken } = require('../utils');

module.exports = {

    createOne: async (req, res) => {

        try {
            
            const user = await UserService.createOne(req.body);
            res.status(201).json(user);

        } catch (error) {
            
            console.log(error);
            res.status(400).json(error);

        }

    },

    login: async (req, res) => {

        try {

            const user = await UserService.readOneByEmail(req.body.email);

            if (!user) res.status(400).json({ message: 'Error on credentials' });

            const roles = await RoleService.readMany(user.Roles);

            const idsRole = [];
            const idsSystem = [];

            roles.forEach(role => {
                idsRole.push(role._id);
                idsSystem.push(role.System);
            });

            const profiles = await ProfileService.readMany(idsRole);
            const modules = await ModuleService.readMany(idsSystem);

            var modulesWithProfile = [];

            modules.forEach(module => {
                profiles.forEach(profile => {
                    if(profile.Module.toString() == module._id.toString()){
                        modulesWithProfile.push(Object.assign({permission: profile.permission, Profile: profile._id}, module._doc));
                    }
                });
            });

            const token = createToken(user, modulesWithProfile);

            res.status(200).json({ message: 'login successful', token });
         
        } catch (error) {

            console.log(error);
            res.status(400).json(error);

        }

    },

};
