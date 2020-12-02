const { SystemService } = require('../services');
const {
    ModuleService
} = require('../services');

module.exports = {

    createOne: async (req, res) => {

        try {
            
            const system = await SystemService.createOne(req.body);
            res.status(201).json(system);

        } catch (error) {
            
            res.status(400).json(error);

        }

    },

    readOne: async (req, res) => {

        try {
            
            const system = await SystemService.readOne(req.params.id_system);
            res.status(200).json(system);

        } catch (error) {
            
            res.status(400).json(error);

        }

    },

    readAll: async (req, res) => {

        try {

            const system = await SystemService.readAll();
            res.status(200).json(system);

        } catch (error) {
            
            console.log(error);
            res.status(400).json(error);

        }

    },

    // Utilizar este metodo para borrado logico
    updateOne: async (req, res) => {

        try {
            
            const system = await SystemService.readOne(req.params.id_system);
            if (!system) res.status(404).json({ message: 'No se encontro al sistema solicitado' });

            const systemUpdate = await SystemService.updateOne(req.params.id_system, req.body);
            res.status(200).json(systemUpdate);

        } catch (error) {
            
            res.status(400).json(error);

        }

    },

};
