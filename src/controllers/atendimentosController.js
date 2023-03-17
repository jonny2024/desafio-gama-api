const {Atendimentos, Pacientes} = require("../models");

const atendimentoController = {
    listarAtendimento: async (req, res) => {
        const listaDeAtendimentos = await Atendimentos.findAll({
            include: Pacientes,
        });

        res.status(200).json(listaDeAtendimentos);
    },
    async listarAtendimentoId(req, res) {
        const { id } = req.params
        const atendimentoId = await Atendimentos.findByPk(id);

        res.status(200).json(atendimentoId)
    },
    async criarAtendimento(req, res) {   
        const {data_horario_atendimento, observacao, pacientes_id} = req.body;

        const novoAtendimento = await Atendimentos.create({
            data_horario_atendimento,
            observacao,
            pacientes_id,
        });

        res.status(201).json(novoAtendimento);
    },

    async atualizarAtendimento(req, res) {
        const {id} = req.params;
        const {data_horario_atendimento, observacao, pacientes_id} = req.body;

        if(!id) return res.status(400);

        const atendimentoAtualizado = await Atendimentos.update(
           {
            data_horario_atendimento,
            observacao,
            pacientes_id,
        },
        {
          where: {
            id,
          },
        }
     );

     res.status(200).json(atendimentoAtualizado);
    },

    async cancelarAtendimento(req, res) {
        const {id} = req.params;

        await Atendimentos.destroy({
            where: {
                id,
            },
        }); 
        
        res.status(204).json();
    },

};

module.exports = atendimentoController;