const {validate, Joi} = require("express-validation");

module.exports = validate({
    body: Joi.object({
        data_horario_atendimento: Joi.string().required(),
        observacao: Joi.string().required(),
        pacientes_id: Joi.string().required(),
    }),
});