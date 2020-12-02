const {
    ModuleService
} = require('../services');

module.exports = {

    createOne: async (req, res) => {

        try {
            const id_system = {
                System: req.params.id_system
            }

            const body = Object.assign(req.body, id_system);

            const module = await ModuleService.createOne(body);
            res.status(201).json(module);

        } catch (error) {

            res.status(400).json(error);

        }

    },

    readOne: async (req, res) => {

        try {

            const module = await ModuleService.readOne(req.params.id_module);
            res.status(200).json(module);

        } catch (error) {

            res.status(400).json(error);

        }

    },

    readAll: async (req, res) => {

        try {

            var module = null;

            const moduleAndChilds = [];

            if (req.query.id_module == null) {

                if (req.query.submodules != null){
                    modules = await ModuleService.read(req.params.id_system);
        
                    modules.forEach(module => {
                        if(module.Module == undefined){
                            Object.assign(module._doc, {submodules: []});
                            moduleAndChilds.push(module);
                        } else {
                            moduleAndChilds.forEach(moduleAndChild => {
                                if(moduleAndChild._id.toString() == module.Module.toString()){
                                    moduleAndChild._doc.submodules.push(module);
                                }
                            });
                        }
                    });

                    //res.status(200).json(moduleAndChilds);

                } 

                module = await ModuleService.readAll(req.params.id_system);

            } else {

                module = await ModuleService.readAllChild(req.params.id_system, req.query.id_module);

            }

            if(moduleAndChilds.length == 0){
                res.status(200).json(module);
            } else res.status(200).json(moduleAndChilds);


        } catch (error) {

            console.log(error);
            res.status(400).json(error);

        }

    },

    // Utilizar este metodo para borrado logico
    updateOne: async (req, res) => {

        try {

            const id_system = {
                System: req.params.id_system
            }

            const body = Object.assign(req.body, id_system);

            const module = await ModuleService.readOne(req.params.id_module);
            if (!module) res.status(404).json({
                message: 'No se encontro al modulo solicitado'
            });

            const moduleUpdate = await ModuleService.updateOne(req.params.id_module, body);
            res.status(200).json(moduleUpdate);

        } catch (error) {

            res.status(400).json(error);

        }

    },

};