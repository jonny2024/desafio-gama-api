const Pacientes = require("./Pacientes");
const Atendimentos = require("./Atendimentos");
const Psicologos = require("./Psicologos")
Atendimentos.belongsTo(Pacientes, {
    foreignKey: "pacientes_id",
});

Pacientes.hasMany(Atendimentos, {
    foreignKey: "pacientes_id",
});

module.exports = {
    Pacientes,
    Atendimentos,
    Psicologos,
};