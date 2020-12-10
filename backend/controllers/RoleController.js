const Role = require('../models/Role');
const {
    RoleService
} = require('../services');
const {
    ProfileService
} = require('../services');
const {
    ModuleService
} = require('../services');

module.exports = {

    createOne: async (req, res) => {

        try {
            const body = {
                name: req.body.name,
                System: req.body.System
            }

            const role = await RoleService.createOne(body);

            const id_role = {
                Role: role._id
            }

            const profiles = req.body.profiles.map(profile => {
                return Object.assign(profile, id_role)
            });

            await ProfileService.createMany(profiles)

            res.status(201).json({
                message: "Creación exitosa"
            });

        } catch (error) {

            res.status(400).json(error);
            console.log(error);

        }

    },

    readOne: async (req, res) => {
        try {
            const role = await RoleService.readOne(req.params.id_role);
            
            const profiles = await ProfileService.readAll(req.params.id_role);
            
            const modules = await ModuleService.read(role.System);

            const modulesWithProfile = [];

            modules.map(module => {
                profiles.forEach(profile => {
                    if(profile.Module.toString() == module._id.toString()){
                        modulesWithProfile.push(Object.assign({permission: profile.permission, Profile: profile._id}, module._doc));
                    }
                });
                modulesWithProfile.push(module._doc);
            });

            modulesWithProfile.forEach((moduleWithProfile, index) => {
                if(index != 0){
                    if(moduleWithProfile._id.toString() == modulesWithProfile[index-1]._id.toString()) {
                        modulesWithProfile.splice(index, 1);
                    }
                }
            });

            const moduleAndChilds = [];

            modulesWithProfile.forEach(moduleWithProfile => {
                if(!moduleWithProfile.hasOwnProperty('Module')){
                    Object.assign(moduleWithProfile, {submodules: []});
                    moduleAndChilds.push(moduleWithProfile);
                } else {
                    moduleAndChilds.forEach(moduleAndChild => {
                        if(moduleAndChild._id.toString() == moduleWithProfile.Module.toString()){
                            moduleAndChild.submodules.push(moduleWithProfile);
                        }
                    });
                }
            });

            const rolesWithModulesAndProfiles = {
                _id: role._id,
                name: role.name,
                System: role.System,
                modules: moduleAndChilds
            }

            res.status(200).json(rolesWithModulesAndProfiles);

        } catch (error) {
            res.status(400).json(error);
        }
    },

    readAll: async (req, res) => {

        try {

            if (req.query.id_system == null) {

                var roles = await RoleService.readAll();

                res.status(200).json(roles);

            } else {

                var modules = await ModuleService.read(req.query.id_system);

                const moduleAndChilds = [];

                modules.forEach(module => {
                    if(!module.hasOwnProperty('Module')){
                        Object.assign(module, {submodules: []});
                        moduleAndChilds.push(module);
                    } else {
                        moduleAndChilds.forEach(moduleAndChild => {
                            if(moduleAndChild._id.toString() == module.Module.toString()){
                                moduleAndChild.submodules.push(module);
                            }
                        });
                    }
                });

                res.status(200).json(moduleAndChilds);

            }

            //const roles = await RoleService.readAll();
         

        } catch (error) {

            console.log(error);
            res.status(400).json(error);

        }

    },

    // Utilizar este metodo para borrado logico
    updateOne: async (req, res) => {
        try {
            const role = await RoleService.readOne(req.params.id_role);
            if(!role) res.status(404).json({
                message: 'No se encontro al rol solicitado'
            });

            const roleUpdated = await RoleService.updateOne(req.params.id_role, req.body.name);

            if(!roleUpdated) res.status(500).json({message: 'Ocurrio un error al actualizar el rol'});

            const profilesForCreate = [];
            req.body.profiles.forEach(profile => {
                if(profile.hasOwnProperty('Module') && profile.hasOwnProperty('permission') && !profile.hasOwnProperty('Profile')){
                    Object.assign(profile, {Role: req.params.id_role});
                    profilesForCreate.push(profile);
                }
            });

            const profilesCreated = await ProfileService.createMany(profilesForCreate);

            if(!profilesCreated) res.status(500).json({message: 'Ocurrio un error al actualizar el rol'});

            req.body.profiles.forEach(async profile => {
                if(profile.hasOwnProperty('permission') && profile.hasOwnProperty('Profile') && profile.hasOwnProperty('Module')){
                    await ProfileService.updateOne(profile.Profile, profile.permission);
                } else if(!profile.hasOwnProperty('Module') && !profile.hasOwnProperty('permission')){
                    await ProfileService.deleteOne(profile.Profile);
                }
            });

            res.status(200).json({message: 'Actualización exitosa'});

        } catch (error) {
            
        }
    }

};
