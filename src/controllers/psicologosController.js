const Psicologos = require("../models/Psicologos");

const psicologoController = {
    listarPsicologo: async (req, res) => {
        const listaDePsicologos = await Psicologos.findAll();

        res.status(200).json(listaDePsicologos);
    },
    async listarPsicologoId(req, res) {
        const { id } = req.params
        const psicologoId = await Psicologos.findByPk(id);

        res.status(200).json(psicologoId)
    },
    async cadastrarPsicologo(req, res) {
        const {nome, email, senha, apresentacao} = req.body;

        const newPsicologo = await Psicologos.create({
            nome,
            email,
            senha,
            apresentacao,
        });

       return res.status(201).json(newPsicologo);
    },

    async atualizarPsicologo(req, res) {
        const {id} = req.params;
        const {nome, email, senha, apresentacao} = req.body;

        if(!id) return res.status(400);

        const psicologoAtualizado = await Psicologos.update(
           {
            nome,
            email,
            senha,
            apresentacao,
        },
        {
          where: {
            id,
          },
        }
     );

     res.status(200).json(psicologoAtualizado); 
    },

    async deletarPsicologo(req, res) {
        const {id} = req.params; 

        await Psicologos.destroy({
            where: {
                id,
            },
        });

        res.status(204).json();        
    },

};

module.exports = psicologoController;